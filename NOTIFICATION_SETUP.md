# Email Notification Setup Guide

## Overview
This guide explains how to implement email notifications for:
- Daily study streak reminders (sent at 8 PM if user hasn't studied that day)
- Weekly progress summaries (sent every Sunday at 9 AM)

## Option 1: Supabase Edge Functions + Resend (Recommended)

### What You'll Need
- Supabase account (you already have this!)
- [Resend](https://resend.com) account (free tier: 3,000 emails/month)
- Supabase CLI installed

### Step 1: Sign up for Resend

1. Go to https://resend.com
2. Sign up for a free account
3. Go to **API Keys** and create a new API key
4. Copy the API key (starts with `re_`)

### Step 2: Add Resend API Key to Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Project Settings** → **Edge Functions** → **Secrets**
3. Add a new secret:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key

### Step 3: Install Supabase CLI

```bash
# macOS
brew install supabase/tap/supabase

# Or using npm
npm install -g supabase
```

### Step 4: Create Edge Functions

#### Daily Streak Reminder Function

Create `supabase/functions/daily-streak-reminder/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

serve(async (req) => {
  try {
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_KEY!)
    
    // Get users who have notifications enabled
    const { data: users, error } = await supabase
      .from('user_progress')
      .select('user_id, last_study_date')
      .eq('notifications_enabled', true)
    
    if (error) throw error
    
    const today = new Date().toISOString().split('T')[0]
    const usersToRemind = users?.filter(u => u.last_study_date !== today) || []
    
    // Get email addresses for these users
    for (const user of usersToRemind) {
      const { data: authUser } = await supabase.auth.admin.getUserById(user.user_id)
      
      if (authUser?.user?.email) {
        // Send email via Resend
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'MCAT Spark <notifications@yourdomain.com>',
            to: authUser.user.email,
            subject: '🔥 Keep Your Study Streak Alive!',
            html: `
              <h2>Don't break your streak!</h2>
              <p>You haven't studied yet today. Just 10 minutes can keep your momentum going!</p>
              <a href="https://your-app.netlify.app/dashboard" style="display: inline-block; padding: 12px 24px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; margin: 16px 0;">
                Start Studying
              </a>
              <p style="color: #666; font-size: 14px;">You're receiving this because you have notifications enabled in MCAT Spark.</p>
            `
          })
        })
      }
    }
    
    return new Response(JSON.stringify({ sent: usersToRemind.length }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})
```

#### Weekly Progress Summary Function

Create `supabase/functions/weekly-progress-summary/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

serve(async (req) => {
  try {
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_KEY!)
    
    // Get users who have notifications enabled
    const { data: users, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('notifications_enabled', true)
    
    if (error) throw error
    
    for (const user of users || []) {
      const { data: authUser } = await supabase.auth.admin.getUserById(user.user_id)
      
      if (authUser?.user?.email) {
        // Get weekly stats
        const weekAgo = new Date()
        weekAgo.setDate(weekAgo.getDate() - 7)
        
        const { data: weeklyActivity } = await supabase
          .from('recent_activity')
          .select('*')
          .eq('user_id', user.user_id)
          .gte('timestamp', weekAgo.toISOString())
        
        const questionsThisWeek = weeklyActivity?.filter(a => a.type === 'question').length || 0
        const cardsThisWeek = weeklyActivity?.filter(a => a.type === 'flashcard').length || 0
        
        // Send email via Resend
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'MCAT Spark <notifications@yourdomain.com>',
            to: authUser.user.email,
            subject: '📊 Your Weekly MCAT Progress',
            html: `
              <h2>Your Week in Review</h2>
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">This Week's Stats</h3>
                <p><strong>📝 Questions Answered:</strong> ${questionsThisWeek}</p>
                <p><strong>🗂️ Flashcards Reviewed:</strong> ${cardsThisWeek}</p>
                <p><strong>🔥 Study Streak:</strong> ${user.study_streak} days</p>
                <p><strong>📈 Average Accuracy:</strong> ${user.avg_accuracy || 0}%</p>
              </div>
              <a href="https://your-app.netlify.app/dashboard" style="display: inline-block; padding: 12px 24px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; margin: 16px 0;">
                View Full Dashboard
              </a>
              <p style="color: #666; font-size: 14px;">Keep up the great work! 💪</p>
            `
          })
        })
      }
    }
    
    return new Response(JSON.stringify({ sent: users?.length || 0 }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})
```

### Step 5: Deploy Edge Functions

```bash
# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref qimauvjpdwcjtubfzspm

# Deploy the functions
supabase functions deploy daily-streak-reminder
supabase functions deploy weekly-progress-summary
```

### Step 6: Schedule the Functions

In Supabase, you need to use pg_cron to schedule these functions:

1. Go to your Supabase project → **SQL Editor**
2. Run this SQL to schedule daily reminders (8 PM UTC):

```sql
-- Enable pg_cron extension
create extension if not exists pg_cron;

-- Schedule daily streak reminder at 8 PM UTC
select cron.schedule(
  'daily-streak-reminder',
  '0 20 * * *',
  $$
  select
    net.http_post(
      url:='https://qimauvjpdwcjtubfzspm.supabase.co/functions/v1/daily-streak-reminder',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer YOUR_ANON_KEY"}'::jsonb
    ) as request_id;
  $$
);

-- Schedule weekly progress summary on Sundays at 9 AM UTC
select cron.schedule(
  'weekly-progress-summary',
  '0 9 * * 0',
  $$
  select
    net.http_post(
      url:='https://qimauvjpdwcjtubfzspm.supabase.co/functions/v1/weekly-progress-summary',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer YOUR_ANON_KEY"}'::jsonb
    ) as request_id;
  $$
);
```

### Step 7: Update Database Schema

Add a notifications_enabled column to user_progress:

```sql
alter table user_progress
add column if not exists notifications_enabled boolean default true;
```

### Step 8: Update Settings Page to Store Preference

Update the notification toggle in Settings.tsx to also update the database:

```typescript
const handleNotificationsToggle = async (checked: boolean) => {
  setNotificationsEnabled(checked);
  localStorage.setItem('mcat-spark-notifications', JSON.stringify(checked));
  
  // Update in database
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    await supabase
      .from('user_progress')
      .update({ notifications_enabled: checked })
      .eq('user_id', user.id);
  }
  
  toast({
    title: checked ? "Notifications Enabled" : "Notifications Disabled",
    description: checked 
      ? "You'll receive study reminders and progress updates via email."
      : "You won't receive any email notifications.",
  });
};
```

---

## Option 2: Simple Alternative - Netlify Functions + Resend

If you want to keep it simpler without Supabase Edge Functions:

1. Use Netlify scheduled functions
2. Create `.netlify/functions/scheduled-emails.js`
3. Configure in `netlify.toml`

This is simpler but less integrated with Supabase.

---

## Important Notes

1. **Email Domain**: You'll need to verify a domain with Resend or use their test domain
2. **Testing**: Test with your own email first before going live
3. **Rate Limits**: Free tier of Resend allows 3,000 emails/month
4. **Timezone**: Adjust the cron schedules based on your users' timezones
5. **Unsubscribe**: Add an unsubscribe link that sets `notifications_enabled = false`

---

## Cost

- **Resend**: FREE for up to 3,000 emails/month
- **Supabase**: Edge Functions are included in the free tier
- **Total**: $0 for small-medium user base

---

## Next Steps

1. Sign up for Resend
2. Install Supabase CLI
3. Create the Edge Functions
4. Deploy and schedule them
5. Test with your own email
6. Update Settings page to sync with database

Would you like me to help you implement any of these steps?
