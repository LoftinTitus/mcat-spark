-- MCAT Spark Spaced Repetition System
-- This creates a smart review system that shows flashcards at optimal intervals

-- Table to track individual flashcard reviews for each user
CREATE TABLE IF NOT EXISTS flashcard_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  flashcard_id TEXT NOT NULL,  -- The unique identifier from your flashcards.json
  
  -- Spaced repetition algorithm fields
  next_review_date DATE NOT NULL DEFAULT CURRENT_DATE,
  interval_days INTEGER NOT NULL DEFAULT 1,
  ease_factor DECIMAL(3,2) NOT NULL DEFAULT 2.50,
  times_reviewed INTEGER NOT NULL DEFAULT 0,
  times_correct INTEGER NOT NULL DEFAULT 0,
  
  -- Performance tracking
  last_reviewed_at TIMESTAMP WITH TIME ZONE,
  last_difficulty TEXT CHECK (last_difficulty IN ('again', 'hard', 'good', 'easy')),
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure one review record per user per flashcard
  UNIQUE(user_id, flashcard_id)
);

-- Index for efficient queries
CREATE INDEX IF NOT EXISTS idx_flashcard_reviews_user_next ON flashcard_reviews(user_id, next_review_date);
CREATE INDEX IF NOT EXISTS idx_flashcard_reviews_user_flashcard ON flashcard_reviews(user_id, flashcard_id);

-- Enable Row Level Security
ALTER TABLE flashcard_reviews ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own reviews
CREATE POLICY "Users can view their own flashcard reviews"
  ON flashcard_reviews FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert their own reviews
CREATE POLICY "Users can insert their own flashcard reviews"
  ON flashcard_reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own reviews
CREATE POLICY "Users can update their own flashcard reviews"
  ON flashcard_reviews FOR UPDATE
  USING (auth.uid() = user_id);

-- Policy: Users can delete their own reviews
CREATE POLICY "Users can delete their own flashcard reviews"
  ON flashcard_reviews FOR DELETE
  USING (auth.uid() = user_id);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_flashcard_reviews_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_flashcard_reviews_timestamp
  BEFORE UPDATE ON flashcard_reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_flashcard_reviews_updated_at();

-- View to get review statistics per user
CREATE OR REPLACE VIEW user_flashcard_stats AS
SELECT 
  user_id,
  COUNT(*) as total_cards_reviewed,
  COUNT(*) FILTER (WHERE next_review_date <= CURRENT_DATE) as cards_due_today,
  COUNT(*) FILTER (WHERE next_review_date > CURRENT_DATE) as cards_in_future,
  ROUND(AVG(CASE WHEN times_reviewed > 0 THEN (times_correct::DECIMAL / times_reviewed) * 100 ELSE 0 END), 1) as average_accuracy,
  COUNT(*) FILTER (WHERE interval_days >= 30) as mastered_cards
FROM flashcard_reviews
GROUP BY user_id;
