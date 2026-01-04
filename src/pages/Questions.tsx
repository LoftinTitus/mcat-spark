import { useState, useMemo } from "react";
import { PageLayout } from "@/components/PageLayout";
import { QuestionCard } from "@/components/QuestionCard";
import { SectionBadge } from "@/components/SectionBadge";
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import { trackQuestionAttempt } from "@/lib/analytics";
import questionsData from "@/data/questions.json";
import passagesData from "@/data/passages.json";

type QuestionMode = "freestanding" | "passages";

interface FreestandingQuestion {
  id: string;
  section: "chem" | "bio" | "psych" | "cars";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  subcategory?: string;
}

interface PassageQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  subcategory?: string;
}

interface Passage {
  id: string;
  section: "chem" | "bio" | "psych" | "cars";
  title: string;
  passage: string;
  questions: PassageQuestion[];
  subcategory?: string;
}

const Questions = () => {
  const [mode, setMode] = useState<QuestionMode>("freestanding");
  const [freestandingIndex, setFreestandingIndex] = useState(0);
  const [passageQuestionIndex, setPassageQuestionIndex] = useState(0);
  const [selectedSection, setSelectedSection] = useState<
    "all" | "chem" | "bio" | "psych" | "cars"
  >("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [shuffled, setShuffled] = useState(false);
  
  // Passage selection states
  const [passageSection, setPassageSection] = useState<"chem" | "bio" | "psych" | "cars" | null>(null);
  const [passageSubcategory, setPassageSubcategory] = useState<string | null>(null);
  const [selectedPassage, setSelectedPassage] = useState<Passage | null>(null);

  const freestandingQuestions = questionsData.freestanding as FreestandingQuestion[];
  const passages = passagesData.passages as Passage[];

  // Get available subcategories for freestanding mode
  const availableSubcategories = useMemo(() => {
    const filtered = selectedSection === "all"
      ? freestandingQuestions
      : freestandingQuestions.filter((q) => q.section === selectedSection);
    const cats = new Set(filtered.map(q => q.subcategory || "General"));
    return ["all", ...Array.from(cats).sort()];
  }, [selectedSection, freestandingQuestions]);

  // Get available subcategories for selected passage section
  const passageSubcategories = useMemo(() => {
    if (!passageSection) return [];
    const filtered = passages.filter((p) => p.section === passageSection);
    const cats = new Set(filtered.map(p => p.subcategory || "General"));
    return Array.from(cats).sort();
  }, [passageSection, passages]);

  // Get available passages for selected section and subcategory
  const availablePassages = useMemo(() => {
    if (!passageSection || !passageSubcategory) return [];
    return passages.filter(
      (p) => p.section === passageSection && (p.subcategory || "General") === passageSubcategory
    );
  }, [passageSection, passageSubcategory, passages]);

  const filteredFreestandingQuestions = useMemo(() => {
    let filtered = selectedSection === "all"
      ? freestandingQuestions
      : freestandingQuestions.filter((q) => q.section === selectedSection);
    
    if (selectedSubcategory !== "all") {
      filtered = filtered.filter((q) => q.subcategory === selectedSubcategory);
    }
    
    // Shuffle if needed
    if (shuffled) {
      return [...filtered].sort(() => Math.random() - 0.5);
    }
    
    return filtered;
  }, [selectedSection, selectedSubcategory, freestandingQuestions, shuffled]);

  const currentFreestanding = filteredFreestandingQuestions[freestandingIndex];
  const currentPassageQuestion = selectedPassage?.questions[passageQuestionIndex];

  const handleNextFreestanding = () => {
    setFreestandingIndex((prev) =>
      prev < filteredFreestandingQuestions.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevFreestanding = () => {
    setFreestandingIndex((prev) =>
      prev > 0 ? prev - 1 : filteredFreestandingQuestions.length - 1
    );
  };

  const handleNextPassageQuestion = () => {
    if (!selectedPassage) return;
    if (passageQuestionIndex < selectedPassage.questions.length - 1) {
      setPassageQuestionIndex((prev) => prev + 1);
    } else {
      setPassageQuestionIndex(0);
    }
  };

  const handlePrevPassageQuestion = () => {
    if (!selectedPassage) return;
    if (passageQuestionIndex > 0) {
      setPassageQuestionIndex((prev) => prev - 1);
    } else {
      setPassageQuestionIndex(selectedPassage.questions.length - 1);
    }
  };

  const handleSectionChange = (section: "all" | "chem" | "bio" | "psych" | "cars") => {
    setSelectedSection(section);
    setSelectedSubcategory("all");
    setFreestandingIndex(0);
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setFreestandingIndex(0);
  };

  const handleShuffle = () => {
    setShuffled(!shuffled);
    setFreestandingIndex(0);
  };

  const handlePassageSectionSelect = (section: "chem" | "bio" | "psych" | "cars") => {
    setPassageSection(section);
    setPassageSubcategory(null);
    setSelectedPassage(null);
    setPassageQuestionIndex(0);
  };

  const handlePassageSubcategorySelect = (subcategory: string) => {
    setPassageSubcategory(subcategory);
    setSelectedPassage(null);
    setPassageQuestionIndex(0);
  };

  const handlePassageSelect = (passage: Passage) => {
    setSelectedPassage(passage);
    setPassageQuestionIndex(0);
  };

  const handleBackToPassages = () => {
    setSelectedPassage(null);
    setPassageQuestionIndex(0);
  };

  const handleBackToTopics = () => {
    setPassageSubcategory(null);
    setSelectedPassage(null);
    setPassageQuestionIndex(0);
  };

  const handleBackToSections = () => {
    setPassageSection(null);
    setPassageSubcategory(null);
    setSelectedPassage(null);
    setPassageQuestionIndex(0);
  };

  return (
    <PageLayout title="Question Bank" subtitle="Practice MCAT-style questions">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Mode Selector */}
          <div className="flex rounded-lg border border-border overflow-hidden">
            <button
              onClick={() => setMode("freestanding")}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                mode === "freestanding"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-accent"
              }`}
            >
              Freestanding
            </button>
            <button
              onClick={() => setMode("passages")}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                mode === "passages"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-accent"
              }`}
            >
              Passage-Based
            </button>
          </div>

          {/* Freestanding Mode Filters */}
          {mode === "freestanding" && (
            <>
              {/* Section Filter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-muted-foreground">
                    Section Filter
                  </label>
                  <button
                    onClick={handleShuffle}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      shuffled
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <Shuffle className="h-4 w-4" />
                    <span>Shuffle</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "All", value: "all" },
                    { label: "Chem/Phys", value: "chem" },
                    { label: "Bio/Biochem", value: "bio" },
                    { label: "Psych/Soc", value: "psych" },
                    { label: "CARS", value: "cars" },
                  ].map((section) => (
                    <button
                      key={section.value}
                      onClick={() => handleSectionChange(section.value as "all" | "chem" | "bio" | "psych" | "cars")}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        selectedSection === section.value
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subcategory Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Topic Filter
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableSubcategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleSubcategoryChange(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        selectedSubcategory === cat
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      {cat === "all" ? "All Topics" : cat}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Freestanding Mode */}
          {mode === "freestanding" && currentFreestanding && (
            <>
              <div className="flex items-center justify-between">
                <SectionBadge section={currentFreestanding.section} />
                <span className="text-sm text-muted-foreground">
                  {freestandingIndex + 1} / {filteredFreestandingQuestions.length}
                </span>
              </div>

              <QuestionCard
                key={currentFreestanding.id}
                question={currentFreestanding.question}
                options={currentFreestanding.options}
                correctIndex={currentFreestanding.correctIndex}
                explanation={currentFreestanding.explanation}
                onAnswerSubmit={async (isCorrect, timeSpent) => {
                  await trackQuestionAttempt(
                    currentFreestanding.id,
                    currentFreestanding.section,
                    currentFreestanding.subcategory,
                    isCorrect,
                    timeSpent
                  );
                }}
              />

              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handlePrevFreestanding}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="font-medium">Previous</span>
                </button>
                <button
                  onClick={handleNextFreestanding}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
                >
                  <span className="font-medium">Next</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </>
          )}

          {/* Passage Mode */}
          {mode === "passages" && (
            <>
              {/* Step 1: Select Section */}
              {!passageSection && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Select a Section</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: "Chem/Phys", value: "chem", description: "Chemical & Physical Foundations" },
                      { label: "Bio/Biochem", value: "bio", description: "Biological & Biochemical Foundations" },
                      { label: "Psych/Soc", value: "psych", description: "Psychological, Social & Biological Foundations" },
                      { label: "CARS", value: "cars", description: "Critical Analysis & Reasoning Skills" },
                    ].map((section) => (
                      <button
                        key={section.value}
                        onClick={() => handlePassageSectionSelect(section.value as "chem" | "bio" | "psych" | "cars")}
                        className="p-4 rounded-xl border border-border bg-card hover:bg-accent hover:border-primary transition-colors text-left"
                      >
                        <div className="font-semibold mb-1">{section.label}</div>
                        <div className="text-xs text-muted-foreground">{section.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Topic */}
              {passageSection && !passageSubcategory && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleBackToSections}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      ← Back to Sections
                    </button>
                  </div>
                  <h3 className="text-lg font-semibold">Select a Topic</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {passageSubcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        onClick={() => handlePassageSubcategorySelect(subcategory)}
                        className="p-4 rounded-xl border border-border bg-card hover:bg-accent hover:border-primary transition-colors text-left"
                      >
                        <div className="font-semibold">{subcategory}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Select Passage */}
              {passageSection && passageSubcategory && !selectedPassage && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleBackToTopics}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      ← Back to Topics
                    </button>
                  </div>
                  <h3 className="text-lg font-semibold">Select a Passage</h3>
                  <div className="space-y-3">
                    {availablePassages.map((passage) => (
                      <button
                        key={passage.id}
                        onClick={() => handlePassageSelect(passage)}
                        className="w-full p-4 rounded-xl border border-border bg-card hover:bg-accent hover:border-primary transition-colors text-left"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold">{passage.title}</div>
                          <SectionBadge section={passage.section} />
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-2">
                          {passage.passage}
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          {passage.questions.length} question{passage.questions.length !== 1 ? 's' : ''}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Show Passage and Questions */}
              {selectedPassage && currentPassageQuestion && (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      onClick={handleBackToPassages}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      ← Back to Passages
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <SectionBadge section={selectedPassage.section} />
                    <span className="text-sm text-muted-foreground">
                      Question {passageQuestionIndex + 1} of {selectedPassage.questions.length}
                    </span>
                  </div>

                  {/* Passage Text */}
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold font-serif mb-3">
                      {selectedPassage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {selectedPassage.passage}
                    </p>
                  </div>

                  <QuestionCard
                    key={currentPassageQuestion.id}
                    question={currentPassageQuestion.question}
                    options={currentPassageQuestion.options}
                    correctIndex={currentPassageQuestion.correctIndex}
                    explanation={currentPassageQuestion.explanation}
                    onAnswerSubmit={async (isCorrect, timeSpent) => {
                      await trackQuestionAttempt(
                        currentPassageQuestion.id,
                        selectedPassage.section,
                        currentPassageQuestion.subcategory || selectedPassage.subcategory,
                        isCorrect,
                        timeSpent
                      );
                    }}
                  />

                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={handlePrevPassageQuestion}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="font-medium">Previous</span>
                    </button>
                    <button
                      onClick={handleNextPassageQuestion}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
                    >
                      <span className="font-medium">Next</span>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Questions;
