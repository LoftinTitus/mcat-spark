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
              <div className="flex gap-2">
                <button
                  onClick={(e) => handleReviewClick('again', e)}
                  className="flex-1 py-2 text-xs rounded hover:bg-accent transition-colors"
                >
                  <div className="font-medium">Again</div>
                  <div className="text-[10px] text-muted-foreground">{formatInterval(intervals.again)}</div>
                </button>
                
                <button
                  onClick={(e) => handleReviewClick('hard', e)}
                  className="flex-1 py-2 text-xs rounded hover:bg-accent transition-colors"
                >
                  <div className="font-medium">Hard</div>
                  <div className="text-[10px] text-muted-foreground">{formatInterval(intervals.hard)}</div>
                </button>
                
                <button
                  onClick={(e) => handleReviewClick('good', e)}
                  className="flex-1 py-2 text-xs rounded hover:bg-accent transition-colors"
                >
                  <div className="font-medium">Good</div>
                  <div className="text-[10px] text-muted-foreground">{formatInterval(intervals.good)}</div>
                </button>
                
                <button
                  onClick={(e) => handleReviewClick('easy', e)}
                  className="flex-1 py-2 text-xs rounded hover:bg-accent transition-colors"
                >
                  <div className="font-medium">Easy</div>
                  <div className="text-[10px] text-muted-foreground">{formatInterval(intervals.easy)}</div>
                </button>
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
