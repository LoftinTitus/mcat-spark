import { useState, useMemo } from "react";
import { PageLayout } from "@/components/PageLayout";
import { FlashCard } from "@/components/FlashCard";
import { SectionSelector } from "@/components/SectionSelector";
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import { trackFlashcardReview } from "@/lib/analytics";
import flashcardsData from "@/data/flashcards.json";

type Section = "chem" | "bio" | "psych" | "cars";

interface FlashcardItem {
  id: string;
  front: string;
  back: string;
  subcategory?: string;
}

const Flashcards = () => {
  const [section, setSection] = useState<Section>("chem");
  const [subcategory, setSubcategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffled, setShuffled] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewedCards, setReviewedCards] = useState<Set<string>>(new Set());

  // Get available subcategories for current section
  const subcategories = useMemo(() => {
    const sectionCards = flashcardsData[section] as FlashcardItem[];
    const cats = new Set(sectionCards.map(card => card.subcategory || "General"));
    return ["all", ...Array.from(cats).sort()];
  }, [section]);

  const cards = useMemo(() => {
    let sectionCards = flashcardsData[section] as FlashcardItem[];
    
    // Filter by subcategory
    if (subcategory !== "all") {
      sectionCards = sectionCards.filter(card => card.subcategory === subcategory);
    }
    
    // Shuffle if needed
    if (shuffled) {
      return [...sectionCards].sort(() => Math.random() - 0.5);
    }
    return sectionCards;
  }, [section, subcategory, shuffled]);

  const currentCard = cards[currentIndex];

  const handleSectionChange = (newSection: Section) => {
    setSection(newSection);
    setSubcategory("all");
    setCurrentIndex(0);
    setIsFlipped(false);
    setReviewedCards(new Set());
  };

  const handleSubcategoryChange = (newSubcategory: string) => {
    setSubcategory(newSubcategory);
    setCurrentIndex(0);
    setIsFlipped(false);
    setReviewedCards(new Set());
  };

  const handleFlip = async (flipped: boolean) => {
    setIsFlipped(flipped);
    
    // Track card review when flipped to back (first time only)
    if (flipped && currentCard && !reviewedCards.has(currentCard.id)) {
      await trackFlashcardReview(
        currentCard.id,
        section,
        currentCard.subcategory
      );
      setReviewedCards(prev => new Set([...prev, currentCard.id]));
    }
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  const handleShuffle = () => {
    setShuffled(!shuffled);
    setCurrentIndex(0);
  };

  return (
    <PageLayout title="Flashcards" subtitle="Tap card to flip">
      <div className="max-w-lg mx-auto space-y-6">
        {/* Section Selector */}
        <SectionSelector value={section} onChange={handleSectionChange} />

        {/* Subcategory Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Topic Filter
          </label>
          <div className="flex flex-wrap gap-2">
            {subcategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleSubcategoryChange(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  subcategory === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                {cat === "all" ? "All Topics" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Card {currentIndex + 1} of {cards.length}
          </span>
          <button
            onClick={handleShuffle}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-colors ${
              shuffled
                ? "border-primary text-primary"
                : "border-border hover:border-muted-foreground"
            }`}
          >
            <Shuffle className="h-4 w-4" />
            <span>Shuffle</span>
          </button>
        </div>

        {/* Card */}
        {currentCard && (
          <FlashCard 
            key={`${section}-${subcategory}-${currentIndex}`}
            front={currentCard.front} 
            back={currentCard.back}
            isFlipped={isFlipped}
            onFlip={handleFlip}
          />
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={handlePrevious}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="font-medium">Previous</span>
          </button>
          <button
            onClick={handleNext}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
          >
            <span className="font-medium">Next</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Flashcards;
