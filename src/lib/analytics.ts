import { supabase } from "./supabase";

export interface UserStats {
  cardsReviewed: number;
  questionsAnswered: number;
  topicsStudied: number;
  studyStreak: number;
  totalStudyTime: number;
  avgAccuracy: number;
}

export interface CategoryPerformance {
  name: string;
  section: string;
  accuracy: number;
  questionsAttempted: number;
}

export interface StudySession {
  id: string;
  topic: string;
  section: string;
  date: string;
  time: string;
  duration: string;
}

// Initialize user progress for new users
export async function initializeUserProgress(userId: string) {
  const { error } = await supabase
    .from("user_progress")
    .upsert({
      user_id: userId,
      cards_reviewed: 0,
      questions_answered: 0,
      topics_studied: 0,
      total_study_time: 0,
      study_streak: 0,
      last_study_date: new Date().toISOString().split('T')[0],
    }, {
      onConflict: 'user_id'
    });

  if (error) console.error("Error initializing user progress:", error);
}

// Track question attempt
export async function trackQuestionAttempt(
  questionId: string,
  section: string,
  subcategory: string | undefined,
  isCorrect: boolean,
  timeSpent: number
) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // Insert question attempt
  const { error: attemptError } = await supabase
    .from("question_attempts")
    .insert({
      user_id: user.id,
      question_id: questionId,
      section,
      subcategory,
      is_correct: isCorrect,
      time_spent: timeSpent,
    });

  if (attemptError) {
    console.error("Error tracking question attempt:", attemptError);
    return;
  }

  // Update user progress
  await updateUserProgress(user.id, 'question');
}

// Track flashcard review
export async function trackFlashcardReview(
  cardId: string,
  section: string,
  subcategory: string | undefined
) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // Insert flashcard review
  const { error: reviewError } = await supabase
    .from("flashcard_reviews")
    .insert({
      user_id: user.id,
      card_id: cardId,
      section,
      subcategory,
    });

  if (reviewError) {
    console.error("Error tracking flashcard review:", reviewError);
    return;
  }

  // Update user progress
  await updateUserProgress(user.id, 'flashcard');
}

// Update user progress
async function updateUserProgress(userId: string, type: 'question' | 'flashcard') {
  // Get current progress
  const { data: progress } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (!progress) {
    await initializeUserProgress(userId);
    return;
  }

  // Calculate study streak
  const lastStudyDate = new Date(progress.last_study_date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  lastStudyDate.setHours(0, 0, 0, 0);
  
  const daysDiff = Math.floor((today.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24));
  
  let newStreak = progress.study_streak;
  if (daysDiff === 1) {
    newStreak += 1;
  } else if (daysDiff > 1) {
    newStreak = 1;
  }

  // Update progress
  const updates: any = {
    last_study_date: today.toISOString().split('T')[0],
    study_streak: newStreak,
    updated_at: new Date().toISOString(),
  };

  if (type === 'question') {
    updates.questions_answered = progress.questions_answered + 1;
  } else if (type === 'flashcard') {
    updates.cards_reviewed = progress.cards_reviewed + 1;
  }

  const { error } = await supabase
    .from("user_progress")
    .update(updates)
    .eq("user_id", userId);

  if (error) console.error("Error updating user progress:", error);
}

// Get user statistics
export async function getUserStats(): Promise<UserStats | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  // Get progress data
  const { data: progress, error: progressError } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (progressError) {
    console.error("Error fetching user stats:", progressError);
    await initializeUserProgress(user.id);
    return {
      cardsReviewed: 0,
      questionsAnswered: 0,
      topicsStudied: 0,
      studyStreak: 0,
      totalStudyTime: 0,
      avgAccuracy: 0,
    };
  }

  // Get question accuracy
  const { data: attempts } = await supabase
    .from("question_attempts")
    .select("is_correct")
    .eq("user_id", user.id);

  const totalAttempts = attempts?.length || 0;
  const correctAttempts = attempts?.filter(a => a.is_correct).length || 0;
  const avgAccuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  // Get unique topics studied
  const { data: questionTopics } = await supabase
    .from("question_attempts")
    .select("subcategory")
    .eq("user_id", user.id);

  const { data: flashcardTopics } = await supabase
    .from("flashcard_reviews")
    .select("subcategory")
    .eq("user_id", user.id);

  const uniqueTopics = new Set([
    ...(questionTopics?.map(t => t.subcategory).filter(Boolean) || []),
    ...(flashcardTopics?.map(t => t.subcategory).filter(Boolean) || [])
  ]);

  return {
    cardsReviewed: progress.cards_reviewed || 0,
    questionsAnswered: progress.questions_answered || 0,
    topicsStudied: uniqueTopics.size,
    studyStreak: progress.study_streak || 0,
    totalStudyTime: progress.total_study_time || 0,
    avgAccuracy,
  };
}

// Get weak categories
export async function getWeakCategories(): Promise<CategoryPerformance[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data: attempts } = await supabase
    .from("question_attempts")
    .select("subcategory, section, is_correct")
    .eq("user_id", user.id)
    .not("subcategory", "is", null);

  if (!attempts || attempts.length === 0) return [];

  // Group by subcategory
  const categoryStats: { [key: string]: { section: string; correct: number; total: number } } = {};

  attempts.forEach(attempt => {
    const key = attempt.subcategory!;
    if (!categoryStats[key]) {
      categoryStats[key] = { section: attempt.section, correct: 0, total: 0 };
    }
    categoryStats[key].total++;
    if (attempt.is_correct) {
      categoryStats[key].correct++;
    }
  });

  // Convert to array and calculate accuracy
  const categories = Object.entries(categoryStats)
    .map(([name, stats]) => ({
      name,
      section: stats.section,
      accuracy: Math.round((stats.correct / stats.total) * 100),
      questionsAttempted: stats.total,
    }))
    .filter(cat => cat.questionsAttempted >= 3) // Only show categories with at least 3 attempts
    .sort((a, b) => a.accuracy - b.accuracy) // Sort by accuracy (lowest first)
    .slice(0, 5); // Get top 5 weakest

  return categories;
}

// Get strong categories
export async function getStrongCategories(): Promise<CategoryPerformance[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data: attempts } = await supabase
    .from("question_attempts")
    .select("subcategory, section, is_correct")
    .eq("user_id", user.id)
    .not("subcategory", "is", null);

  if (!attempts || attempts.length === 0) return [];

  // Group by subcategory
  const categoryStats: { [key: string]: { section: string; correct: number; total: number } } = {};

  attempts.forEach(attempt => {
    const key = attempt.subcategory!;
    if (!categoryStats[key]) {
      categoryStats[key] = { section: attempt.section, correct: 0, total: 0 };
    }
    categoryStats[key].total++;
    if (attempt.is_correct) {
      categoryStats[key].correct++;
    }
  });

  // Convert to array and calculate accuracy
  const categories = Object.entries(categoryStats)
    .map(([name, stats]) => ({
      name,
      section: stats.section,
      accuracy: Math.round((stats.correct / stats.total) * 100),
      questionsAttempted: stats.total,
    }))
    .filter(cat => cat.questionsAttempted >= 3 && cat.accuracy >= 80) // Only show categories with good performance
    .sort((a, b) => b.accuracy - a.accuracy) // Sort by accuracy (highest first)
    .slice(0, 5); // Get top 5 strongest

  return categories;
}

// Get study plan
export async function getStudyPlan(): Promise<StudySession[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data: sessions, error } = await supabase
    .from("study_plan")
    .select("*")
    .eq("user_id", user.id)
    .gte("scheduled_date", new Date().toISOString().split('T')[0])
    .order("scheduled_date", { ascending: true })
    .order("scheduled_time", { ascending: true })
    .limit(10);

  if (error) {
    console.error("Error fetching study plan:", error);
    return [];
  }

  return (sessions || []).map(session => ({
    id: session.id,
    topic: session.topic,
    section: session.section,
    date: session.scheduled_date,
    time: session.scheduled_time || "TBD",
    duration: session.duration ? `${session.duration} mins` : "TBD",
  }));
}

// Add study session
export async function addStudySession(
  topic: string,
  section: string,
  date: string,
  time: string,
  duration: number,
  notes?: string
) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("study_plan")
    .insert({
      user_id: user.id,
      topic,
      section,
      scheduled_date: date,
      scheduled_time: time,
      duration,
      notes: notes || null,
    })
    .select()
    .single();

  if (error) {
    console.error("Error adding study session:", error);
    return null;
  }

  return data;
}

// Update study session
export async function updateStudySession(
  sessionId: string,
  updates: {
    topic?: string;
    section?: string;
    scheduled_date?: string;
    scheduled_time?: string;
    duration?: number;
    is_completed?: boolean;
  }
) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("study_plan")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", sessionId)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) {
    console.error("Error updating study session:", error);
    return null;
  }

  return data;
}

// Delete study session
export async function deleteStudySession(sessionId: string) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;

  const { error } = await supabase
    .from("study_plan")
    .delete()
    .eq("id", sessionId)
    .eq("user_id", user.id);

  if (error) {
    console.error("Error deleting study session:", error);
    return false;
  }

  return true;
}

// Get recent activity
export async function getRecentActivity(limit: number = 10) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  // Get recent question attempts
  const { data: questions } = await supabase
    .from("question_attempts")
    .select("section, subcategory, is_correct, attempted_at")
    .eq("user_id", user.id)
    .order("attempted_at", { ascending: false })
    .limit(limit);

  // Get recent flashcard reviews
  const { data: flashcards } = await supabase
    .from("flashcard_reviews")
    .select("section, subcategory, reviewed_at")
    .eq("user_id", user.id)
    .order("reviewed_at", { ascending: false })
    .limit(limit);

  // Combine and sort
  const activity = [
    ...(questions || []).map(q => ({
      type: 'question' as const,
      section: q.section,
      subcategory: q.subcategory,
      timestamp: q.attempted_at,
      isCorrect: q.is_correct,
    })),
    ...(flashcards || []).map(f => ({
      type: 'flashcard' as const,
      section: f.section,
      subcategory: f.subcategory,
      timestamp: f.reviewed_at,
    }))
  ]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);

  return activity;
}

// Track study time
export async function trackStudyTime(minutes: number) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const { data: progress } = await supabase
    .from("user_progress")
    .select("total_study_time")
    .eq("user_id", user.id)
    .single();

  if (!progress) {
    await initializeUserProgress(user.id);
    return;
  }

  const { error } = await supabase
    .from("user_progress")
    .update({
      total_study_time: (progress.total_study_time || 0) + (minutes / 60),
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", user.id);

  if (error) console.error("Error tracking study time:", error);
}
