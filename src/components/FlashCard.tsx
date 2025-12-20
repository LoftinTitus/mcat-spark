import { useState } from "react";
import { cn } from "@/lib/utils";

interface FlashCardProps {
  front: string;
  back: string;
  isFlipped: boolean;
  onFlip: (flipped: boolean) => void;
}

export function FlashCard({ front, back, isFlipped, onFlip }: FlashCardProps) {
  return (
    <div
      className="perspective w-full cursor-pointer"
      onClick={() => onFlip(!isFlipped)}
      role="button"
      aria-label={isFlipped ? "Show question" : "Show answer"}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onFlip(!isFlipped);
        }
      }}
    >
      <div
        className={cn(
          "flip-card-inner relative w-full min-h-[280px]",
          isFlipped && "flipped"
        )}
      >
        {/* Front */}
        <div className="flip-card-front absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 shadow-sm">
          <span className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
            Question
          </span>
          <p className="text-lg font-medium text-center leading-relaxed">
            {front}
          </p>
          <span className="absolute bottom-4 text-xs text-muted-foreground">
            Tap to flip
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
          <span className="text-xs text-muted-foreground mt-4 text-center">
            Tap to flip back
          </span>
        </div>
      </div>
    </div>
  );
}
