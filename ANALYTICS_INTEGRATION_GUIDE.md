# Real-Time Analytics Integration Guide

## Setup Complete! ✅

Your MCAT Spark app now has real analytics powered by Supabase.

## What You Need to Do

### 1. **Set Up Supabase Tables**
Run the SQL commands in `SUPABASE_ANALYTICS_SETUP.md` in your Supabase SQL Editor:
- Go to your Supabase Dashboard
- Navigate to SQL Editor
- Copy and paste the SQL from the setup file
- Click "Run" to create all the tables

### 2. **Integrate Tracking in Your Components**

#### For Questions Page (`src/pages/Questions.tsx`):

Add this import at the top:
```typescript
import { trackQuestionAttempt } from "@/lib/analytics";
```

When a user answers a question (add this to your answer submission logic):
```typescript
// After user submits their answer
const timeSpent = /* calculate time in seconds */;
await trackQuestionAttempt(
  currentQuestion.id,
  currentQuestion.section,
  currentQuestion.subcategory,
  selectedAnswer === currentQuestion.correctIndex,
  timeSpent
);
```

#### For Flashcards Page (`src/pages/Flashcards.tsx`):

Add this import at the top:
```typescript
import { trackFlashcardReview } from "@/lib/analytics";
```

When a user flips a card or moves to the next card:
```typescript
// When card is reviewed (flipped or moved to next)
await trackFlashcardReview(
  currentCard.id,
  section,
  currentCard.subcategory
);
```

### 3. **Dashboard Features Now Available**

The Dashboard now shows **REAL DATA** including:

✅ **Study Stats:**
- Cards reviewed count
- Questions answered count
- Topics studied (unique subcategories)
- Study streak (consecutive days)
- Total study time
- Average accuracy percentage

✅ **Performance Insights:**
- **Weak Categories**: Topics where accuracy < 80% (shows once 3+ questions answered per topic)
- **Strong Categories**: Topics where accuracy ≥ 80% (shows once 3+ questions answered per topic)
- Direct links to practice weak areas

✅ **Study Planning:**
- Add scheduled study sessions
- View upcoming sessions
- Edit or delete sessions
- Track completion

✅ **Recent Activity:**
- Real-time feed of questions answered and flashcards reviewed
- Shows correct/incorrect for questions
- Time stamps for all activities

### 4. **Optional: Add Study Time Tracking**

To track study time, add this to your study pages:

```typescript
import { trackStudyTime } from "@/lib/analytics";

// When user leaves page or closes session
useEffect(() => {
  const startTime = Date.now();
  
  return () => {
    const endTime = Date.now();
    const minutesSpent = (endTime - startTime) / 60000;
    trackStudyTime(minutesSpent);
  };
}, []);
```

### 5. **Testing the Analytics**

1. Sign in to your app
2. Go to Dashboard - should see all zeros initially
3. Answer some questions - watch stats update
4. Review some flashcards - watch counts increase
5. Check Insights tab - see performance by category (after 3+ questions per topic)
6. Add a study session in Study Plan tab
7. Check Recent Activity in Quick Review tab

## Database Structure

The following tables are now tracking your data:

- `user_progress` - Overall user statistics
- `question_attempts` - Every question answered with accuracy
- `flashcard_reviews` - Every flashcard reviewed
- `study_sessions` - Study time tracking
- `study_plan` - Scheduled study sessions

All data is user-specific with Row Level Security enabled, so users can only see their own data.

## Next Steps for Production

1. Add more granular time tracking
2. Implement spaced repetition algorithms
3. Add export functionality for progress reports
4. Create charts and visualizations for trends
5. Add goal setting and achievement tracking
6. Implement reminders for scheduled study sessions

Your dashboard is now fully functional with real analytics! 🎉
