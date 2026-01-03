/**
 * Notification preferences utility
 * Manages user notification settings across the app
 */

const NOTIFICATIONS_KEY = 'mcat-spark-notifications';

/**
 * Check if notifications are enabled
 */
export function areNotificationsEnabled(): boolean {
  const saved = localStorage.getItem(NOTIFICATIONS_KEY);
  return saved !== null ? JSON.parse(saved) : true; // Default to enabled
}

/**
 * Enable or disable notifications
 */
export function setNotificationsEnabled(enabled: boolean): void {
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(enabled));
}

/**
 * Show a browser notification (if enabled and permission granted)
 */
export async function showNotification(title: string, options?: NotificationOptions): Promise<void> {
  // Check if notifications are enabled in settings
  if (!areNotificationsEnabled()) {
    return;
  }

  // Check if browser supports notifications
  if (!('Notification' in window)) {
    console.log('Browser does not support notifications');
    return;
  }

  // Request permission if not already granted
  if (Notification.permission === 'default') {
    await Notification.requestPermission();
  }

  // Show notification if permission granted
  if (Notification.permission === 'granted') {
    new Notification(title, {
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      ...options,
    });
  }
}

/**
 * Show a study reminder notification
 */
export async function showStudyReminder(topic: string, minutesUntil: number): Promise<void> {
  await showNotification('MCAT Study Reminder', {
    body: `Your "${topic}" study session starts in ${minutesUntil} minutes!`,
    tag: 'study-reminder',
    requireInteraction: false,
  });
}

/**
 * Show a streak reminder notification
 */
export async function showStreakReminder(currentStreak: number): Promise<void> {
  await showNotification('Keep Your Streak Going! 🔥', {
    body: `You're on a ${currentStreak} day study streak! Study today to keep it going.`,
    tag: 'streak-reminder',
    requireInteraction: false,
  });
}

/**
 * Request notification permission
 */
export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) {
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  const permission = await Notification.requestPermission();
  return permission === 'granted';
}
