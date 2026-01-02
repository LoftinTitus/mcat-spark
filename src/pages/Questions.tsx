import { useState, useMemo } from "react";
import { PageLayout } from "@/components/PageLayout";
import { QuestionCard } from "@/components/QuestionCard";
import { SectionBadge } from "@/components/SectionBadge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import questionsData from "@/data/questions.json";

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
  const [passageIndex, setPassageIndex] = useState(0);
  const [passageQuestionIndex, setPassageQuestionIndex] = useState(0);
  const [selectedSection, setSelectedSection] = useState<
    "all" | "chem" | "bio" | "psych" | "cars"
  >("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");

  const freestandingQuestions = questionsData.freestanding as FreestandingQuestion[];
  const passages = questionsData.passages as Passage[];

  // Get available subcategories for current mode and section
  const availableSubcategories = useMemo(() => {
    if (mode === "freestanding") {
      const filtered = selectedSection === "all"
        ? freestandingQuestions
        : freestandingQuestions.filter((q) => q.section === selectedSection);
      const cats = new Set(filtered.map(q => q.subcategory || "General"));
      return ["all", ...Array.from(cats).sort()];
    } else {
      const filtered = selectedSection === "all"
        ? passages
        : passages.filter((p) => p.section === selectedSection);
      const cats = new Set(filtered.map(p => p.subcategory || "General"));
      return ["all", ...Array.from(cats).sort()];
    }
  }, [mode, selectedSection, freestandingQuestions, passages]);

  const filteredFreestandingQuestions = useMemo(() => {
    let filtered = selectedSection === "all"
      ? freestandingQuestions
      : freestandingQuestions.filter((q) => q.section === selectedSection);
    
    if (selectedSubcategory !== "all") {
      filtered = filtered.filter((q) => q.subcategory === selectedSubcategory);
    }
    
    return filtered;
  }, [selectedSection, selectedSubcategory, freestandingQuestions]);

  const filteredPassages = useMemo(() => {
    let filtered = selectedSection === "all"
      ? passages
      : passages.filter((p) => p.section === selectedSection);
    
    if (selectedSubcategory !== "all") {
      filtered = filtered.filter((p) => p.subcategory === selectedSubcategory);
    }
    
    return filtered;
  }, [selectedSection, selectedSubcategory, passages]);

  const currentFreestanding = filteredFreestandingQuestions[freestandingIndex];
  const currentPassage = filteredPassages[passageIndex];
  const currentPassageQuestion = currentPassage?.questions[passageQuestionIndex];

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
    if (passageQuestionIndex < currentPassage.questions.length - 1) {
      setPassageQuestionIndex((prev) => prev + 1);
    } else if (passageIndex < passages.length - 1) {
      setPassageIndex((prev) => prev + 1);
      setPassageQuestionIndex(0);
    } else {
      setPassageIndex(0);
      setPassageQuestionIndex(0);
    }
  };

  const handlePrevPassageQuestion = () => {
    if (passageQuestionIndex > 0) {
      setPassageQuestionIndex((prev) => prev - 1);
    } else if (passageIndex > 0) {
      setPassageIndex((prev) => prev - 1);
      setPassageQuestionIndex(passages[passageIndex - 1].questions.length - 1);
    } else {
      setPassageIndex(passages.length - 1);
      setPassageQuestionIndex(passages[passages.length - 1].questions.length - 1);
    }
  };

  const handleSectionChange = (section: "all" | "chem" | "bio" | "psych" | "cars") => {
    setSelectedSection(section);
    setSelectedSubcategory("all");
    setFreestandingIndex(0);
    setPassageIndex(0);
    setPassageQuestionIndex(0);
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setFreestandingIndex(0);
    setPassageIndex(0);
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

          {/* Section Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">
              Section Filter
            </label>
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
          {mode === "passages" && currentPassage && currentPassageQuestion && (
            <>
              <div className="flex items-center justify-between">
                <SectionBadge section={currentPassage.section} />
                <span className="text-sm text-muted-foreground">
                  Passage {passageIndex + 1}, Q{passageQuestionIndex + 1}
                </span>
              </div>

              {/* Passage Text */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold font-serif mb-3">
                  {currentPassage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {currentPassage.passage}
                </p>
              </div>

              <QuestionCard
                key={currentPassageQuestion.id}
                question={currentPassageQuestion.question}
                options={currentPassageQuestion.options}
                correctIndex={currentPassageQuestion.correctIndex}
                explanation={currentPassageQuestion.explanation}
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
        </div>
      </div>
    </PageLayout>
  );
};

export default Questions;
