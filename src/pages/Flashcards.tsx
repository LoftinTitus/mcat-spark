import { useState, useMemo, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { FlashCard } from "@/components/FlashCard";
import { SectionSelector } from "@/components/SectionSelector";
import { ChevronLeft, ChevronRight, Shuffle, Calendar } from "lucide-react";
import { trackFlashcardReview } from "@/lib/analytics";
import { 
  recordFlashcardReview, 
  getFlashcardReview,
  getFlashcardsDueToday,
  DifficultyRating 
} from "@/lib/spacedRepetition";
import { useToast } from "@/hooks/use-toast";
import flashcardsData from "@/data/flashcards.json";
import { supabase } from "@/lib/supabase";

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
  const [currentReview, setCurrentReview] = useState<any>(null);
  const [spacedRepetition, setSpacedRepetition] = useState(true);
  const [allReviews, setAllReviews] = useState<Map<string, any>>(new Map());
  const { toast } = useToast();

  // Get available subcategories for current section
  const subcategories = useMemo(() => {
    const sectionCards = flashcardsData[section] as FlashcardItem[];
    const cats = new Set(sectionCards.map(card => card.subcategory || "General"));
    return ["all", ...Array.from(cats).sort()];
  }, [section]);

  // Load all review data when section/subcategory changes
  useEffect(() => {
    const loadAllReviews = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('flashcard_reviews')
        .select('*')
        .eq('user_id', user.id);

      if (!error && data) {
        const reviewMap = new Map();
        data.forEach(review => {
          reviewMap.set(review.flashcard_id, review);
        });
        setAllReviews(reviewMap);
      }
    };
    loadAllReviews();
  }, [section, subcategory]);

  const cards = useMemo(() => {
    let sectionCards = flashcardsData[section] as FlashcardItem[];
    
    // Filter by subcategory
    if (subcategory !== "all") {
      sectionCards = sectionCards.filter(card => card.subcategory === subcategory);
    }
    
    // Apply spaced repetition ordering
    if (spacedRepetition && !shuffled) {
      const today = new Date().toISOString().split('T')[0];
      
      return [...sectionCards].sort((a, b) => {
        const reviewA = allReviews.get(a.id);
        const reviewB = allReviews.get(b.id);
        
        // Priority 1: Cards due today (overdue first)
        const isDueA = !reviewA || reviewA.next_review_date <= today;
        const isDueB = !reviewB || reviewB.next_review_date <= today;
        
        if (isDueA && !isDueB) return -1;
        if (!isDueA && isDueB) return 1;
        
        // Priority 2: Never seen cards
        if (!reviewA && reviewB) return -1;
        if (reviewA && !reviewB) return 1;
        
        // Priority 3: Sort by next review date (oldest first)
        if (reviewA && reviewB) {
          return reviewA.next_review_date.localeCompare(reviewB.next_review_date);
        }
        
        return 0;
      });
    }
    
    // Shuffle if needed
    if (shuffled) {
      return [...sectionCards].sort(() => Math.random() - 0.5);
    }
    
    return sectionCards;
  }, [section, subcategory, shuffled, spacedRepetition, allReviews]);

  const currentCard = cards[currentIndex];

  // Load review data when card changes
  useEffect(() => {
    const loadReviewData = async () => {
      if (currentCard) {
        const review = await getFlashcardReview(currentCard.id);
        setCurrentReview(review);
      }
    };
    loadReviewData();
  }, [currentCard]);

  const handleSectionChange = (newSection: Section) => {
    setSection(newSection);
    setSubcategory("all");
    setCurrentIndex(0);
    setIsFlipped(false);
    setReviewedCards(new Set());
    setAllReviews(new Map());
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

  const handleReview = async (difficulty: DifficultyRating) => {
    if (!currentCard) return;

    const success = await recordFlashcardReview(
      currentCard.id,
      difficulty,
      section,
      currentCard.subcategory || 'General'
    );

    if (success) {
      const difficultyLabels = {
        again: 'Again (review soon)',
        hard: 'Hard (needs practice)',
        good: 'Good (got it!)',
        easy: 'Easy (mastered!)'
      };

      toast({
        title: "Review recorded!",
        description: difficultyLabels[difficulty],
      });
      
      // Reload reviews to update ordering
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('flashcard_reviews')
          .select('*')
          .eq('user_id', user.id);

        if (data) {
          const reviewMap = new Map();
          data.forEach(review => {
            reviewMap.set(review.flashcard_id, review);
          });
          setAllReviews(reviewMap);
        }
      }
      
      // Move to next card
      handleNext();
    } else {
      toast({
        title: "Error",
        description: "Failed to record review. Please try again.",
        variant: "destructive",
      });
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
          <div className="flex gap-2">
            <button
              onClick={() => setSpacedRepetition(!spacedRepetition)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-colors ${
                spacedRepetition
                  ? "border-primary text-primary"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Smart Order</span>
            </button>
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
        </div>

        {/* Card */}
        {currentCard && (
          <FlashCard 
            key={`${section}-${subcategory}-${currentIndex}`}
            front={currentCard.front} 
            back={currentCard.back}
            isFlipped={isFlipped}
            onFlip={handleFlip}
            showReviewButtons={true}
            onReview={handleReview}
            currentInterval={currentReview?.interval_days || 1}
            easeFactor={currentReview?.ease_factor || 2.5}
            timesReviewed={currentReview?.times_reviewed || 0}
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
