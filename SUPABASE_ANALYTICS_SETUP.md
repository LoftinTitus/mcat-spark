# Supabase Analytics Setup

## Database Tables Setup

Run these SQL commands in your Supabase SQL Editor (Dashboard > SQL Editor):

```sql
-- 1. User Progress Table
CREATE TABLE user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  cards_reviewed INTEGER DEFAULT 0,
  questions_answered INTEGER DEFAULT 0,
  topics_studied INTEGER DEFAULT 0,
  total_study_time DECIMAL DEFAULT 0, -- in hours
  study_streak INTEGER DEFAULT 0,
  last_study_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(user_id)
);

-- 2. Question Attempts Table
CREATE TABLE question_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT NOT NULL,
  section TEXT NOT NULL, -- 'bio', 'chem', 'psych', 'cars'
  subcategory TEXT,
  is_correct BOOLEAN NOT NULL,
  time_spent INTEGER, -- in seconds
  attempted_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 3. Flashcard Reviews Table
CREATE TABLE flashcard_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  card_id TEXT NOT NULL,
  section TEXT NOT NULL,
  subcategory TEXT,
  reviewed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 4. Study Sessions Table
CREATE TABLE study_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_type TEXT NOT NULL, -- 'flashcards', 'questions', 'summaries'
  duration INTEGER NOT NULL, -- in minutes
  started_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  ended_at TIMESTAMP WITH TIME ZONE
);

-- 5. Study Plan Table
CREATE TABLE study_plan (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  topic TEXT NOT NULL,
  section TEXT NOT NULL,
  scheduled_date DATE NOT NULL,
  scheduled_time TIME,
  duration INTEGER, -- in minutes
  is_completed BOOLEAN DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Indexes for better performance
CREATE INDEX idx_question_attempts_user_id ON question_attempts(user_id);
CREATE INDEX idx_question_attempts_subcategory ON question_attempts(subcategory);
CREATE INDEX idx_flashcard_reviews_user_id ON flashcard_reviews(user_id);
CREATE INDEX idx_study_sessions_user_id ON study_sessions(user_id);
CREATE INDEX idx_study_plan_user_id ON study_plan(user_id);
CREATE INDEX idx_study_plan_date ON study_plan(scheduled_date);

-- Row Level Security (RLS)
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcard_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_plan ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own progress" ON user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_progress
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view own question attempts" ON question_attempts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own question attempts" ON question_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own flashcard reviews" ON flashcard_reviews
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own flashcard reviews" ON flashcard_reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own study sessions" ON study_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own study sessions" ON study_sessions
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view own study plan" ON study_plan
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own study plan" ON study_plan
  FOR ALL USING (auth.uid() = user_id);

-- Function to update user progress
CREATE OR REPLACE FUNCTION update_user_progress()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE user_progress
  SET updated_at = NOW()
  WHERE user_id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER update_progress_on_question
  AFTER INSERT ON question_attempts
  FOR EACH ROW
  EXECUTE FUNCTION update_user_progress();

CREATE TRIGGER update_progress_on_flashcard
  AFTER INSERT ON flashcard_reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_user_progress();
```

## Next Steps

1. Run the SQL commands above in Supabase SQL Editor
2. The helper functions in `lib/analytics.ts` will handle all the tracking
3. Update your components to use these functions
