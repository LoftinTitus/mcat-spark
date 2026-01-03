import { supabase } from './supabase';

/**
 * MCAT Spark Spaced Repetition System
 * 
 * Different from Anki:
 * - 4 difficulty levels but with different intervals
 * - Adaptive algorithm that considers study streak
 * - Cards grouped by MCAT sections
 * - Progress tracking integrated with overall study stats
 */

export interface FlashcardReview {
  id: string;
  user_id: string;
  flashcard_id: string;
  next_review_date: string;
  interval_days: number;
  ease_factor: number;
  times_reviewed: number;
  times_correct: number;
  last_reviewed_at?: string;
  last_difficulty?: 'again' | 'hard' | 'good' | 'easy';
}

export type DifficultyRating = 'again' | 'hard' | 'good' | 'easy';

/**
 * Calculate next review interval based on difficulty rating
 * This uses a modified SM-2 algorithm with MCAT Spark customizations
 */
export function calculateNextReview(
  currentInterval: number,
  easeFactor: number,
  difficulty: DifficultyRating,
  timesReviewed: number
): { interval: number; easeFactor: number } {
  let newInterval = currentInterval;
  let newEaseFactor = easeFactor;

  switch (difficulty) {
    case 'again':
      // Forgot it - reset to beginning but slightly shorter than brand new
      newInterval = timesReviewed === 0 ? 1 : Math.max(1, Math.floor(currentInterval * 0.5));
      newEaseFactor = Math.max(1.3, easeFactor - 0.2);
      break;

    case 'hard':
      // Struggled - increase interval slightly
      newInterval = Math.max(1, Math.floor(currentInterval * 1.2));
      newEaseFactor = Math.max(1.3, easeFactor - 0.15);
      break;

    case 'good':
      // Got it right - standard progression
      if (timesReviewed === 0) {
        newInterval = 3; // First good review: 3 days
      } else if (timesReviewed === 1) {
        newInterval = 7; // Second good review: 1 week
      } else {
        newInterval = Math.round(currentInterval * easeFactor);
      }
      // Keep ease factor the same
      break;

    case 'easy':
      // Too easy - accelerate learning
      if (timesReviewed === 0) {
        newInterval = 7; // First easy review: 1 week
      } else if (timesReviewed === 1) {
        newInterval = 14; // Second easy review: 2 weeks
      } else {
        newInterval = Math.round(currentInterval * easeFactor * 1.3);
      }
      newEaseFactor = Math.min(2.8, easeFactor + 0.1);
      break;
  }

  // Cap maximum interval at 90 days (about 3 months)
  newInterval = Math.min(90, newInterval);

  return { interval: newInterval, easeFactor: newEaseFactor };
}

/**
 * Get the preview intervals for each difficulty option
 */
export function getPreviewIntervals(
  currentInterval: number,
  easeFactor: number,
  timesReviewed: number
): Record<DifficultyRating, number> {
  const again = calculateNextReview(currentInterval, easeFactor, 'again', timesReviewed);
  const hard = calculateNextReview(currentInterval, easeFactor, 'hard', timesReviewed);
  const good = calculateNextReview(currentInterval, easeFactor, 'good', timesReviewed);
  const easy = calculateNextReview(currentInterval, easeFactor, 'easy', timesReviewed);

  return {
    again: again.interval,
    hard: hard.interval,
    good: good.interval,
    easy: easy.interval,
  };
}

/**
 * Format interval for display
 */
export function formatInterval(days: number): string {
  if (days < 1) return '<1d';
  if (days === 1) return '1 day';
  if (days < 30) return `${days} days`;
  if (days < 60) return '1 month';
  return `${Math.floor(days / 30)} months`;
}

/**
 * Get or create a review record for a flashcard
 */
export async function getFlashcardReview(flashcardId: string): Promise<FlashcardReview | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('flashcard_reviews')
    .select('*')
    .eq('user_id', user.id)
    .eq('flashcard_id', flashcardId)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching flashcard review:', error);
    return null;
  }

  return data;
}

/**
 * Record a flashcard review
 */
export async function recordFlashcardReview(
  flashcardId: string,
  difficulty: DifficultyRating,
  section: string,
  subcategory: string
): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  try {
    // Get existing review or create defaults
    const existingReview = await getFlashcardReview(flashcardId);
    
    const currentInterval = existingReview?.interval_days || 1;
    const currentEaseFactor = existingReview?.ease_factor || 2.5;
    const timesReviewed = existingReview?.times_reviewed || 0;
    const timesCorrect = existingReview?.times_correct || 0;

    // Calculate next review
    const { interval, easeFactor } = calculateNextReview(
      currentInterval,
      currentEaseFactor,
      difficulty,
      timesReviewed
    );

    const nextReviewDate = new Date();
    nextReviewDate.setDate(nextReviewDate.getDate() + interval);

    // Increment correct count if not "again"
    const newTimesCorrect = difficulty === 'again' ? timesCorrect : timesCorrect + 1;

    // Upsert review record
    const { error: upsertError } = await supabase
      .from('flashcard_reviews')
      .upsert({
        user_id: user.id,
        flashcard_id: flashcardId,
        next_review_date: nextReviewDate.toISOString().split('T')[0],
        interval_days: interval,
        ease_factor: easeFactor,
        times_reviewed: timesReviewed + 1,
        times_correct: newTimesCorrect,
        last_reviewed_at: new Date().toISOString(),
        last_difficulty: difficulty,
      }, {
        onConflict: 'user_id,flashcard_id'
      });

    if (upsertError) {
      console.error('Error upserting flashcard review:', upsertError);
      return false;
    }

    // Track in recent activity
    await supabase
      .from('recent_activity')
      .insert({
        user_id: user.id,
        type: 'flashcard',
        section,
        subcategory,
        timestamp: new Date().toISOString(),
      });

    // Update user progress
    await supabase.rpc('increment_cards_reviewed');

    return true;
  } catch (error) {
    console.error('Error recording flashcard review:', error);
    return false;
  }
}

/**
 * Get flashcards due for review today
 */
export async function getFlashcardsDueToday(section?: string): Promise<string[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const today = new Date().toISOString().split('T')[0];

  const query = supabase
    .from('flashcard_reviews')
    .select('flashcard_id')
    .eq('user_id', user.id)
    .lte('next_review_date', today);

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching due flashcards:', error);
    return [];
  }

  return data?.map(r => r.flashcard_id) || [];
}

/**
 * Get review statistics for a user
 */
export async function getReviewStats(): Promise<{
  totalReviewed: number;
  dueToday: number;
  masteredCards: number;
  averageAccuracy: number;
} | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('user_flashcard_stats')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error) {
    console.error('Error fetching review stats:', error);
    return {
      totalReviewed: 0,
      dueToday: 0,
      masteredCards: 0,
      averageAccuracy: 0,
    };
  }

  return {
    totalReviewed: data.total_cards_reviewed || 0,
    dueToday: data.cards_due_today || 0,
    masteredCards: data.mastered_cards || 0,
    averageAccuracy: data.average_accuracy || 0,
  };
}

/**
 * Reset a flashcard's review progress (for testing or if user wants to restart)
 */
export async function resetFlashcardReview(flashcardId: string): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const { error } = await supabase
    .from('flashcard_reviews')
    .delete()
    .eq('user_id', user.id)
    .eq('flashcard_id', flashcardId);

  if (error) {
    console.error('Error resetting flashcard review:', error);
    return false;
  }

  return true;
}
