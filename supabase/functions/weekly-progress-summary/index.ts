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
      .select('*')
      .eq('notifications_enabled', true)
    
    if (error) throw error
    
    console.log(`Processing weekly summaries for ${users?.length || 0} users`)
    
    let emailsSent = 0
    
    // Send weekly summary to each user
    for (const user of users || []) {
      try {
        // Get user's email from auth
        const { data: authUser } = await supabase.auth.admin.getUserById(user.user_id)
        
        if (authUser?.user?.email) {
          // Get weekly stats (last 7 days)
          const weekAgo = new Date()
          weekAgo.setDate(weekAgo.getDate() - 7)
          
          const { data: weeklyActivity } = await supabase
            .from('recent_activity')
            .select('*')
            .eq('user_id', user.user_id)
            .gte('timestamp', weekAgo.toISOString())
          
          // Calculate weekly stats
          const questionsThisWeek = weeklyActivity?.filter(a => a.type === 'question').length || 0
          const correctAnswers = weeklyActivity?.filter(a => a.type === 'question' && a.is_correct).length || 0
          const cardsThisWeek = weeklyActivity?.filter(a => a.type === 'flashcard').length || 0
          const weeklyAccuracy = questionsThisWeek > 0 
            ? Math.round((correctAnswers / questionsThisWeek) * 100) 
            : 0
          
          // Determine performance message
          let performanceMessage = ''
          let performanceColor = '#3b82f6'
          
          if (weeklyAccuracy >= 80) {
            performanceMessage = '🎉 Outstanding work this week! Keep it up!'
            performanceColor = '#10b981'
          } else if (weeklyAccuracy >= 60) {
            performanceMessage = '💪 Good progress! Keep pushing yourself!'
            performanceColor = '#3b82f6'
          } else if (questionsThisWeek > 0) {
            performanceMessage = '📚 Focus on understanding concepts deeply. You\'ve got this!'
            performanceColor = '#f59e0b'
          } else {
            performanceMessage = '🎯 Let\'s make next week count! Start with small goals.'
            performanceColor = '#6b7280'
          }
          
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
              subject: '📊 Your Weekly MCAT Progress Report',
              html: `
                <!DOCTYPE html>
                <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Weekly Progress</title>
                </head>
                <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">📊 MCAT Spark</h1>
                    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your Week in Review</p>
                  </div>
                  
                  <div style="background: ${performanceColor}15; border-left: 4px solid ${performanceColor}; padding: 20px; margin-bottom: 30px; border-radius: 4px;">
                    <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">
                      ${performanceMessage}
                    </p>
                  </div>
                  
                  <div style="background: #f9fafb; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="margin-top: 0; color: #1f2937; font-size: 20px;">This Week's Stats</h2>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
                      <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                        <div style="font-size: 28px; font-weight: bold; color: #3b82f6;">${questionsThisWeek}</div>
                        <div style="font-size: 14px; color: #6b7280; margin-top: 5px;">📝 Questions</div>
                      </div>
                      
                      <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                        <div style="font-size: 28px; font-weight: bold; color: #10b981;">${cardsThisWeek}</div>
                        <div style="font-size: 14px; color: #6b7280; margin-top: 5px;">🗂️ Flashcards</div>
                      </div>
                      
                      <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                        <div style="font-size: 28px; font-weight: bold; color: #f59e0b;">${user.study_streak}</div>
                        <div style="font-size: 14px; color: #6b7280; margin-top: 5px;">🔥 Day Streak</div>
                      </div>
                      
                      <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                        <div style="font-size: 28px; font-weight: bold; color: #8b5cf6;">${weeklyAccuracy}%</div>
                        <div style="font-size: 14px; color: #6b7280; margin-top: 5px;">📈 Accuracy</div>
                      </div>
                    </div>
                  </div>
                  
                  ${user.study_streak >= 7 ? `
                    <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                      <div style="font-size: 40px; margin-bottom: 10px;">🎉</div>
                      <h3 style="margin: 0; color: #92400e;">Week Streak Achievement!</h3>
                      <p style="color: #92400e; margin: 10px 0 0 0;">You've studied every day this week! Incredible dedication!</p>
                    </div>
                  ` : ''}
                  
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="https://mcat-spark.netlify.app/dashboard" style="display: inline-block; padding: 14px 32px; background: #3b82f6; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                      View Full Dashboard
                    </a>
                  </div>
                  
                  <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 4px;">
                    <p style="margin: 0; color: #1e40af; font-size: 14px;">
                      💡 <strong>Next Week's Goal:</strong> ${questionsThisWeek < 20 ? 'Try to answer at least 20 questions!' : 'Maintain this great momentum!'}
                    </p>
                  </div>
                  
                  <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
                    <p style="color: #6b7280; font-size: 12px; text-align: center;">
                      You're receiving weekly progress reports from MCAT Spark.
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
            console.log(`Weekly summary sent to ${authUser.user.email}`)
          } else {
            const errorData = await response.text()
            console.error(`Failed to send weekly summary to ${authUser.user.email}:`, errorData)
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
        usersProcessed: users?.length || 0,
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
