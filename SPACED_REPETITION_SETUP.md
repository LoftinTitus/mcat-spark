# MCAT Spark Spaced Repetition Setup Guide

## 🎯 What We Built
A **smart flashcard review system** that's different from Anki:
- **MCAT-optimized intervals**: Faster initial review cycles for medical content
- **Section-based tracking**: Performance tracked per MCAT section (Bio, Chem, Psych)
- **Integrated with your study stats**: Reviews count toward daily goals
- **Beautiful UI**: 4 colored buttons (Red/Orange/Green/Blue) instead of Anki's plain buttons
- **Maximum 90-day interval**: Medical knowledge needs more frequent reinforcement than general knowledge

---

## ✅ What's Already Done

### 1. Database Schema Created ✓
- `flashcard_reviews` table to track each user's progress on each card
- Indexes for fast queries
- Row-level security policies
- Statistics view for dashboard integration

**File**: `supabase/migrations/flashcard_reviews.sql`

### 2. Spaced Repetition Algorithm ✓
- Modified SM-2 algorithm optimized for MCAT content
- 4 difficulty ratings: Again, Hard, Good, Easy
- Smart interval calculations
- Preview intervals shown to user

**File**: `src/lib/spacedRepetition.ts`

### 3. FlashCard Component Updated ✓
- Shows 4 review buttons after flipping
- Color-coded for easy recognition
- Displays next review interval for each button
- Click stops propagation (won't flip card back)

**File**: `src/components/FlashCard.tsx`

---

## 📋 What YOU Need to Do

### Step 1: Run the Database Migration

**Option A: Using Supabase Dashboard (Easiest)**

1. Go to https://supabase.com/dashboard
2. Select your project (qimauvjpdwcjtubfzspm)
3. Click **SQL Editor** in the left sidebar
4. Click **New Query**
5. Copy the entire contents of `supabase/migrations/flashcard_reviews.sql`
6. Paste into the editor
7. Click **Run** (or press Cmd/Ctrl + Enter)
8. You should see "Success. No rows returned"

**Option B: Using Supabase CLI**

```bash
# If you have Supabase CLI installed
supabase db push

# OR manually
supabase db execute --file supabase/migrations/flashcard_reviews.sql
```

**Verify it worked:**
- Go to **Table Editor** in Supabase
- You should see a new table called `flashcard_reviews`
- Click on it to see the columns

---

### Step 2: Add RPC Function for Cards Reviewed Counter

In Supabase SQL Editor, run this:

```sql
-- Function to increment cards_reviewed count in user_progress
CREATE OR REPLACE FUNCTION increment_cards_reviewed()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_user_id UUID;
BEGIN
  current_user_id := auth.uid();
  
  IF current_user_id IS NULL THEN
    RETURN;
  END IF;
  
  UPDATE user_progress
  SET cards_reviewed = COALESCE(cards_reviewed, 0) + 1
  WHERE user_id = current_user_id;
  
  IF NOT FOUND THEN
    INSERT INTO user_progress (user_id, cards_reviewed)
    VALUES (current_user_id, 1);
  END IF;
END;
$$;
```

---

### Step 3: Update the Flashcards Page

You need to integrate the spaced repetition system into your Flashcards page.

**What to change in `src/pages/Flashcards.tsx`:**

1. **Import the spaced repetition functions:**
```typescript
import {
  recordFlashcardReview,
  getFlashcardReview,
  getFlashcardsDueToday,
  DifficultyRating,
} from '@/lib/spacedRepetition';
```

2. **Load review data when selecting a card:**
```typescript
// Add state for review data
const [currentReview, setCurrentReview] = useState<any>(null);

// When setting current card, also load its review
const handleCardSelect = async (index: number) => {
  setCurrentIndex(index);
  setIsFlipped(false);
  
  const card = filteredCards[index];
  if (card) {
    const review = await getFlashcardReview(card.id);
    setCurrentReview(review);
  }
};
```

3. **Handle review button clicks:**
```typescript
const handleReview = async (difficulty: DifficultyRating) => {
  const currentCard = filteredCards[currentIndex];
  if (!currentCard) return;

  const success = await recordFlashcardReview(
    currentCard.id,
    difficulty,
    currentCard.section,
    currentCard.subcategory
  );

  if (success) {
    toast({
      title: "Review recorded!",
      description: `You'll see this card again based on your ${difficulty} rating.`,
    });
    
    // Move to next card
    handleNext();
  }
};
```

4. **Pass props to FlashCard component:**
```tsx
<FlashCard
  front={currentCard.front}
  back={currentCard.back}
  isFlipped={isFlipped}
  onFlip={setIsFlipped}
  showReviewButtons={true}  // Enable review buttons
  onReview={handleReview}
  currentInterval={currentReview?.interval_days || 1}
  easeFactor={currentReview?.ease_factor || 2.5}
  timesReviewed={currentReview?.times_reviewed || 0}
/>
```

5. **Optional: Add a "Due Today" filter:**
```typescript
// Show only cards due for review
const [showDueOnly, setShowDueOnly] = useState(false);
const [dueCardIds, setDueCardIds] = useState<string[]>([]);

// Load due cards on mount
useEffect(() => {
  const loadDueCards = async () => {
    const due = await getFlashcardsDueToday(selectedSection);
    setDueCardIds(due);
  };
  loadDueCards();
}, [selectedSection]);

// Filter cards
const displayCards = showDueOnly 
  ? filteredCards.filter(card => dueCardIds.includes(card.id))
  : filteredCards;
```

---

### Step 4: Add Review Stats to Dashboard (Optional)

In `src/pages/Dashboard.tsx`, add a card showing spaced repetition progress:

```typescript
import { getReviewStats } from '@/lib/spacedRepetition';

// In your dashboard data loading
const [reviewStats, setReviewStats] = useState<any>(null);

useEffect(() => {
  const loadReviewStats = async () => {
    const stats = await getReviewStats();
    setReviewStats(stats);
  };
  loadReviewStats();
}, []);

// Add a stat card
<Card>
  <CardContent className="pt-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">Cards Due Today</p>
        <p className="text-2xl font-bold">{reviewStats?.dueToday || 0}</p>
      </div>
      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
        <Layers className="h-6 w-6 text-purple-500" />
      </div>
    </div>
  </CardContent>
</Card>
```

---

### Step 5: Test the System

1. **Go to the Flashcards page**
2. **Flip a card** to see the answer
3. **You should see 4 colored buttons:**
   - 🔴 **Again** (1 day) - Red/Orange
   - 🟠 **Hard** (3 days) - Orange
   - 🟢 **Good** (7 days) - Green
   - 🔵 **Easy** (14 days) - Blue
4. **Click one** - the card should be recorded and you'll move to the next
5. **Review the same card later** - intervals should adjust based on your previous rating

---

### Step 6: Deploy to Production

Once everything works locally:

```bash
git add -A
git commit -m "Add spaced repetition system for flashcards"
git push
```

Netlify will automatically deploy with the new features!

---

## 🎨 How It's Different from Anki

| Feature | Anki | MCAT Spark |
|---------|------|------------|
| **Max Interval** | Unlimited (years) | 90 days max (medical content needs frequent review) |
| **Initial Intervals** | 1, 10 days | 3, 7 days (faster reinforcement) |
| **UI** | Plain buttons | Color-coded (Red→Orange→Green→Blue) |
| **Integration** | Standalone | Integrated with study stats, streaks, dashboard |
| **Section Focus** | Tags | MCAT sections (Bio/Chem/Psych) with performance tracking |
| **Algorithm** | SM-2 | Modified SM-2 optimized for medical content |
| **Button Labels** | Again, Good, Easy | Again, Hard, Good, Easy (more granular) |

---

## 🐛 Troubleshooting

### "Function increment_cards_reviewed does not exist"
- Run the SQL in Step 2 above

### Review buttons not showing
- Make sure you passed `showReviewButtons={true}` to FlashCard component
- Check that `onReview` prop is provided

### Cards not filtering by "due today"
- Check that the migration ran successfully
- Verify the table exists in Supabase Table Editor

### Intervals seem wrong
- Check the `next_review_date` in the database
- Verify timezone settings (should use UTC)

---

## 📚 Future Enhancements (Optional)

- **Heatmap calendar**: Show review activity over time
- **Mastery badges**: Award when a card reaches 30+ day interval
- **Smart shuffle**: Prioritize struggling cards within a session
- **Export progress**: Download review history as CSV
- **Undo last review**: Accidentally clicked wrong button? Undo it
- **Keyboard shortcuts**: 1, 2, 3, 4 for Again, Hard, Good, Easy

---

## 🚀 You're Almost Done!

Just complete Steps 1-3 above and you'll have a fully functional spaced repetition system that's optimized for MCAT studying and integrated beautifully with your existing app!

Need help with any of these steps? Let me know! 🎉
