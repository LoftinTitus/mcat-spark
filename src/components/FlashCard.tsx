import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { DifficultyRating, getPreviewIntervals, formatInterval } from "@/lib/spacedRepetition";

interface FlashCardProps {
  front: string;
  back: string;
  isFlipped: boolean;
  onFlip: (flipped: boolean) => void;
  onReview?: (difficulty: DifficultyRating) => void;
  showReviewButtons?: boolean;
  currentInterval?: number;
  easeFactor?: number;
  timesReviewed?: number;
}

export function FlashCard({ 
  front, 
  back, 
  isFlipped, 
  onFlip,
  onReview,
  showReviewButtons = false,
  currentInterval = 1,
  easeFactor = 2.5,
  timesReviewed = 0,
}: FlashCardProps) {
  const intervals = getPreviewIntervals(currentInterval, easeFactor, timesReviewed);

  const handleReviewClick = (difficulty: DifficultyRating, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onReview) {
      onReview(difficulty);
    }
  };

  return (
    <div
      className="perspective w-full"
      role="button"
      aria-label={isFlipped ? "Show question" : "Show answer"}
    >
      <div
        className={cn(
          "flip-card-inner relative w-full min-h-[280px]",
          isFlipped && "flipped"
        )}
      >
        {/* Front */}
        <div 
          className="flip-card-front absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 shadow-sm cursor-pointer"
          onClick={() => onFlip(!isFlipped)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onFlip(!isFlipped);
            }
          }}
          tabIndex={0}
        >
          <span className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
            Question
          </span>
          <p className="text-lg font-medium text-center leading-relaxed">
            {front}
          </p>
          <span className="absolute bottom-4 text-xs text-muted-foreground">
            Tap to reveal answer
          </span>
        </div>

        {/* Back */}
        <div className="flip-card-back absolute inset-0 flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm overflow-auto">
          <span className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
            Answer
          </span>
          <div className="flex-1 text-sm leading-relaxed whitespace-pre-wrap">
            {back}
          </div>
          
          {showReviewButtons && isFlipped && onReview && (
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center mb-3">
                How well did you know this?
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => handleReviewClick('again', e)}
                  className="flex flex-col h-auto py-3 hover:bg-red-50 hover:border-red-300 dark:hover:bg-red-950"
                >
                  <span className="font-semibold text-red-600 dark:text-red-400">Again</span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {formatInterval(intervals.again)}
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => handleReviewClick('hard', e)}
                  className="flex flex-col h-auto py-3 hover:bg-orange-50 hover:border-orange-300 dark:hover:bg-orange-950"
                >
                  <span className="font-semibold text-orange-600 dark:text-orange-400">Hard</span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {formatInterval(intervals.hard)}
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => handleReviewClick('good', e)}
                  className="flex flex-col h-auto py-3 hover:bg-green-50 hover:border-green-300 dark:hover:bg-green-950"
                >
                  <span className="font-semibold text-green-600 dark:text-green-400">Good</span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {formatInterval(intervals.good)}
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => handleReviewClick('easy', e)}
                  className="flex flex-col h-auto py-3 hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950"
                >
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Easy</span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {formatInterval(intervals.easy)}
                  </span>
                </Button>
              </div>
            </div>
          )}
          
          {!showReviewButtons && isFlipped && (
            <span className="text-xs text-muted-foreground mt-4 text-center">
              Tap to flip back
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
