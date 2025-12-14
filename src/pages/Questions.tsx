import { useState } from "react";
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
}

interface PassageQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface Passage {
  id: string;
  section: "chem" | "bio" | "psych" | "cars";
  title: string;
  passage: string;
  questions: PassageQuestion[];
}

const Questions = () => {
  const [mode, setMode] = useState<QuestionMode>("freestanding");
  const [freestandingIndex, setFreestandingIndex] = useState(0);
  const [passageIndex, setPassageIndex] = useState(0);
  const [passageQuestionIndex, setPassageQuestionIndex] = useState(0);

  const freestandingQuestions = questionsData.freestanding as FreestandingQuestion[];
  const passages = questionsData.passages as Passage[];

  const currentFreestanding = freestandingQuestions[freestandingIndex];
  const currentPassage = passages[passageIndex];
  const currentPassageQuestion = currentPassage?.questions[passageQuestionIndex];

  const handleNextFreestanding = () => {
    setFreestandingIndex((prev) =>
      prev < freestandingQuestions.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevFreestanding = () => {
    setFreestandingIndex((prev) =>
      prev > 0 ? prev - 1 : freestandingQuestions.length - 1
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

  return (
    <PageLayout title="Question Bank" subtitle="Practice MCAT-style questions">
      <div className="max-w-lg mx-auto space-y-6">
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

        {/* Freestanding Mode */}
        {mode === "freestanding" && currentFreestanding && (
          <>
            <div className="flex items-center justify-between">
              <SectionBadge section={currentFreestanding.section} />
              <span className="text-sm text-muted-foreground">
                {freestandingIndex + 1} / {freestandingQuestions.length}
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
    </PageLayout>
  );
};

export default Questions;
