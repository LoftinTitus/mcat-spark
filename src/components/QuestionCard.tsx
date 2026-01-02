import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface QuestionCardProps {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  onAnswerSubmit?: (isCorrect: boolean, timeSpent: number) => void;
}

export function QuestionCard({
  question,
  options,
  correctIndex,
  explanation,
  onAnswerSubmit,
}: QuestionCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [startTime] = useState(Date.now());

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelectedIndex(index);
    setShowResult(true);

    // Track the answer
    if (onAnswerSubmit) {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000); // in seconds
      const isCorrect = index === correctIndex;
      onAnswerSubmit(isCorrect, timeSpent);
    }
  };

  const reset = () => {
    setSelectedIndex(null);
    setShowResult(false);
  };

  const isCorrect = selectedIndex === correctIndex;

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <p className="text-base font-medium leading-relaxed mb-5">{question}</p>

      <div className="space-y-2.5">
        {options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrectOption = index === correctIndex;

          let optionStyle = "border-border bg-background hover:bg-accent";
          if (showResult) {
            if (isCorrectOption) {
              optionStyle = "border-green-500 bg-green-50 dark:bg-green-950/30";
            } else if (isSelected && !isCorrectOption) {
              optionStyle = "border-red-500 bg-red-50 dark:bg-red-950/30";
            } else {
              optionStyle = "border-border bg-muted/50 opacity-60";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={cn(
                "w-full flex items-start gap-3 p-3.5 rounded-lg border text-left transition-colors",
                optionStyle
              )}
            >
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-current text-xs font-medium">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="flex-1 text-sm leading-relaxed">{option}</span>
              {showResult && isCorrectOption && (
                <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
              )}
              {showResult && isSelected && !isCorrectOption && (
                <X className="h-5 w-5 text-red-600 flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-5 space-y-4">
          <div
            className={cn(
              "flex items-center gap-2 p-3 rounded-lg",
              isCorrect
                ? "bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-200"
            )}
          >
            {isCorrect ? (
              <>
                <Check className="h-5 w-5" />
                <span className="font-medium">Correct!</span>
              </>
            ) : (
              <>
                <X className="h-5 w-5" />
                <span className="font-medium">Incorrect</span>
              </>
            )}
          </div>

          <div className="p-4 rounded-lg bg-muted/50">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
              Explanation
            </p>
            <p className="text-sm leading-relaxed">{explanation}</p>
          </div>

          <button
            onClick={reset}
            className="w-full py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
