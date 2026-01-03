import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

serve(async (req) => {
  try {
    // Initialize Supabase client with service role key
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_KEY!)
    
    // Get users who have notifications enabled
    const { data: users, error } = await supabase
      .from('user_progress')
      .select('user_id, last_study_date, study_streak')
      .eq('notifications_enabled', true)
    
    if (error) throw error
    
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0]
    
    // Filter users who haven't studied today
    const usersToRemind = users?.filter(u => u.last_study_date !== today) || []
    
    console.log(`Found ${usersToRemind.length} users to remind`)
    
    let emailsSent = 0
    
    // Send emails to users who need reminders
    for (const user of usersToRemind) {
      try {
        // Get user's email from auth
        const { data: authUser } = await supabase.auth.admin.getUserById(user.user_id)
        
        if (authUser?.user?.email) {
          // Send email via Resend
          const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${RESEND_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              from: 'MCAT Spark <notifications@resend.dev>',
              to: authUser.user.email,
              subject: '🔥 Keep Your Study Streak Alive!',
              html: `
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Study Reminder</title>
                </head>
                <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">🔥 MCAT Spark</h1>
                  </div>
                  
                  <div style="background: #f9fafb; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="margin-top: 0; color: #1f2937;">Don't break your streak!</h2>
                    <p style="font-size: 16px; color: #4b5563;">
                      You're on a <strong>${user.study_streak}-day study streak</strong>! 🎉
                    </p>
                    <p style="font-size: 16px; color: #4b5563;">
                      You haven't studied yet today. Just 10 minutes of practice can keep your momentum going and help you ace the MCAT!
                    </p>
                  </div>
                  
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="https://mcat-spark.netlify.app/dashboard" style="display: inline-block; padding: 14px 32px; background: #3b82f6; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      Start Studying Now
                    </a>
                  </div>
                  
                  <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;">
                    <p style="margin: 0; color: #92400e; font-size: 14px;">
                      💡 <strong>Quick Tip:</strong> Even reviewing just a few flashcards counts! Small, consistent efforts lead to big results.
                    </p>
                  </div>
                  
                  <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
                    <p style="color: #6b7280; font-size: 12px; text-align: center;">
                      You're receiving this because you have notifications enabled in MCAT Spark.
                      <br>
                      <a href="https://mcat-spark.netlify.app/settings" style="color: #3b82f6; text-decoration: none;">Manage notification preferences</a>
                    </p>
                  </div>
                </body>
                </html>
              `
            })
          })
          
          if (response.ok) {
            emailsSent++
            console.log(`Email sent to ${authUser.user.email}`)
          } else {
            const errorData = await response.text()
            console.error(`Failed to send email to ${authUser.user.email}:`, errorData)
          }
        }
      } catch (emailError) {
        console.error(`Error sending email to user ${user.user_id}:`, emailError)
        // Continue with next user
      }
    }
    
    return new Response(
      JSON.stringify({ 
        success: true,
        usersChecked: users?.length || 0,
        usersToRemind: usersToRemind.length,
        emailsSent 
      }), 
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      }
    )
  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
})
