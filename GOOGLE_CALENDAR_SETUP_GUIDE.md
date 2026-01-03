# Google Calendar Setup - Complete Guide

## Quick Start (5-10 minutes)

Follow these steps to enable Google Calendar sync in your MCAT Spark app.

---

## Step 1: Go to Google Cloud Console

1. Open [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account

---

## Step 2: Create a Project

1. Click the **project dropdown** at the top (says "Select a project")
2. Click **"NEW PROJECT"**
3. Enter project name: `MCAT Spark` (or any name you like)
4. Click **"CREATE"**
5. Wait for project to be created (takes a few seconds)
6. Make sure the new project is selected in the dropdown

---

## Step 3: Enable Google Calendar API

1. In the left sidebar, go to **"APIs & Services"** → **"Library"**
   - Or use the search bar and type "Library"
2. Search for: **"Google Calendar API"**
3. Click on **"Google Calendar API"**
4. Click the blue **"ENABLE"** button
5. Wait for it to enable (takes a few seconds)

---

## Step 4: Configure OAuth Consent Screen

1. In the left sidebar, go to **"APIs & Services"** → **"OAuth consent screen"**
2. Select **"External"** user type
3. Click **"CREATE"**

### Fill in the form:

**App Information:**
- **App name:** MCAT Spark
- **User support email:** (select your email)
- **App logo:** (optional, skip for now)

**Developer contact information:**
- **Email addresses:** (your email)

4. Click **"SAVE AND CONTINUE"**

**Scopes (Step 2):**
5. Click **"ADD OR REMOVE SCOPES"**
6. Search for: `calendar`
7. Check the box: `https://www.googleapis.com/auth/calendar.events`
8. Click **"UPDATE"**
9. Click **"SAVE AND CONTINUE"**

**Test Users (Step 3):**
10. Click **"+ ADD USERS"**
11. Enter **your email address** (the one you'll use to test)
12. Click **"ADD"**
13. Click **"SAVE AND CONTINUE"**

**Summary (Step 4):**
14. Review everything
15. Click **"BACK TO DASHBOARD"**

---

## Step 5: Create OAuth 2.0 Client ID

1. In the left sidebar, go to **"APIs & Services"** → **"Credentials"**
2. Click **"+ CREATE CREDENTIALS"** at the top
3. Select **"OAuth client ID"**
4. **Application type:** Select **"Web application"**
5. **Name:** MCAT Spark Web Client (or any name)

### Visual Example of What to Add:

```
Authorized JavaScript origins:
┌─────────────────────────────────────────┐
│ http://localhost:5173                   │ ← Local development
├─────────────────────────────────────────┤
│ http://localhost:5174                   │ ← Backup port
├─────────────────────────────────────────┤
│ https://mcat-spark.netlify.app          │ ← Your live website (if deployed)
└─────────────────────────────────────────┘

Authorized redirect URIs:
┌─────────────────────────────────────────┐
│ http://localhost:5173                   │ ← Local development
├─────────────────────────────────────────┤
│ http://localhost:5174                   │ ← Backup port
├─────────────────────────────────────────┤
│ https://mcat-spark.netlify.app          │ ← Your live website (if deployed)
└─────────────────────────────────────────┘
```

**Key points:**
- ✅ localhost uses `http://` (no 's')
- ✅ Production uses `https://` (with 's')
- ✅ NO trailing slashes (no `/` at the end)
- ✅ Both lists should have the same URLs
- ✅ You can add production URL now even if not deployed yet

### Configure origins and redirects:

**IMPORTANT:** You need to add URLs for both **local development** AND **production** (if deployed).

**Authorized JavaScript origins:**
6. Click **"+ ADD URI"**
7. **For local development:** Enter `http://localhost:5173`
8. Click **"+ ADD URI"** again
9. **For local development (backup):** Enter `http://localhost:5174`
10. Click **"+ ADD URI"** again
11. **For production (if deployed):** Enter your live website URL
    - Example: `https://mcat-spark.netlify.app`
    - Example: `https://your-custom-domain.com`
    - ⚠️ Use `https://` (not `http://`) for production
    - ⚠️ NO trailing slash!

**Authorized redirect URIs:**
12. Click **"+ ADD URI"**
13. **For local development:** Enter `http://localhost:5173`
14. Click **"+ ADD URI"** again  
15. **For local development (backup):** Enter `http://localhost:5174`
16. Click **"+ ADD URI"** again
17. **For production (if deployed):** Enter your live website URL
    - Example: `https://mcat-spark.netlify.app`
    - Example: `https://your-custom-domain.com`
    - ⚠️ Must match JavaScript origins exactly!

18. Click **"CREATE"**

### Save your Client ID:

19. A popup will appear with your **Client ID** and **Client secret**
20. **COPY the Client ID** (looks like: `123456789-abc...xyz.apps.googleusercontent.com`)
21. Keep this tab open or save it somewhere - you'll need it soon!

---

## Step 6: Create API Key

1. Still in **"Credentials"** page
2. Click **"+ CREATE CREDENTIALS"** at the top
3. Select **"API key"**
4. A popup appears with your API key
5. **COPY the API key** (looks like: `AIzaSyAbc...xyz123`)
6. Click **"RESTRICT KEY"** (recommended for security)

### Restrict the key:

7. Under **"API restrictions"**, select **"Restrict key"**
8. Check **"Google Calendar API"**
9. Click **"SAVE"**

---

## Step 7: Update Your .env File

1. Open your project in VS Code
2. Open the `.env` file in the root directory
3. Find these lines:
   ```env
   VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
   VITE_GOOGLE_API_KEY=your-google-api-key
   ```

4. **Replace** with your actual values:
   ```env
   VITE_GOOGLE_CLIENT_ID=123456789-abc...xyz.apps.googleusercontent.com
   VITE_GOOGLE_API_KEY=AIzaSyAbc...xyz123
   ```

5. **IMPORTANT:** 
   - ✅ Remove `your-google-client-id` and `your-google-api-key` completely
   - ✅ Paste your real values
   - ✅ No extra spaces, quotes, or line breaks
   - ✅ Client ID should end with `.apps.googleusercontent.com`
   - ✅ API key should start with `AIza`

6. **SAVE the file** (Cmd+S or Ctrl+S)

---

## Step 8: Restart Your Dev Server

**IMPORTANT:** You MUST restart the server for .env changes to take effect!

### If your server is running:

1. Go to the terminal where the dev server is running
2. Press **Ctrl+C** to stop it
3. Wait for it to fully stop
4. Run the start command again:
   ```bash
   npm run dev
   ```
   OR if using Bun:
   ```bash
   bun dev
   ```

### If your server is not running:

1. Open terminal in your project directory
2. Run:
   ```bash
   npm run dev
   ```
   OR:
   ```bash
   bun dev
   ```

3. Wait for the server to start
4. You should see: `Local: http://localhost:5173/`

---

## Step 9: Test the Integration

### Connect Google Calendar:

1. Open your browser: `http://localhost:5173`
2. Sign in to your app
3. Go to **Dashboard**
4. Click **"Settings"** button (top-right, next to Sign Out)
5. Scroll to **"Google Calendar Integration"** section
6. Click the blue **"Connect"** button

### Authorize:

7. A Google OAuth popup should appear
8. Select your Google account
9. Click **"Continue"** to authorize
10. You may see "This app isn't verified" - that's normal!
    - Click **"Advanced"** 
    - Click **"Go to MCAT Spark (unsafe)"** (it's safe, it's your own app!)
11. Review permissions and click **"Continue"** or **"Allow"**

### Success!

12. The popup closes
13. Settings page now shows: **"Connected"** ✅ with a green checkmark
14. You'll see a **"Disconnect"** button

---

## Step 10: Create a Study Session with Sync

1. Go back to **Dashboard**
2. Click **"Add Study Session"**
3. Fill in the form:
   - **Topic:** Test Session
   - **Date:** Tomorrow
   - **Time:** Any time
   - **Duration:** 1 hour
4. You should see a checkbox: **"Sync to Google Calendar"** ✅
5. **Check the box**
6. Click **"Add Session"**
7. You should see: **"Session Added & Synced"** ✅

### Verify in Google Calendar:

8. Open [Google Calendar](https://calendar.google.com)
9. Look for your event: **"MCAT Study: Test Session"**
10. It should appear on the date/time you selected!

---

## Important: Local Development vs Production

### What URLs to use:

**If testing locally (development):**
- Use: `http://localhost:5173`
- This is what you'll use while building/testing

**If deployed to production (live website):**
- Use: Your actual website URL (e.g., `https://mcat-spark.netlify.app`)
- You need BOTH localhost AND production URLs in Google Cloud Console
- This allows the app to work in both environments

**Example setup:**
```
Authorized JavaScript origins:
- http://localhost:5173         ← For local development
- http://localhost:5174         ← Backup port
- https://mcat-spark.netlify.app ← For production (if deployed)

Authorized redirect URIs:
- http://localhost:5173         ← For local development
- http://localhost:5174         ← Backup port
- https://mcat-spark.netlify.app ← For production (if deployed)
```

**Pro tip:** You can add production URLs now even if you haven't deployed yet. They won't hurt anything and will be ready when you deploy!

---

## Troubleshooting

### Error: "Google Calendar not configured"

**Solution:**
- Check your `.env` file has real values (not placeholders)
- Make sure you restarted the dev server after editing `.env`
- Verify Client ID ends with `.apps.googleusercontent.com`
- Verify API key starts with `AIza`

### Error: "Google Identity Services not loaded"

**Solution:**
- Hard refresh the page (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Clear browser cache
- Try a different browser (Chrome works best)
- Check browser console for errors (F12 → Console tab)

### OAuth Popup Doesn't Appear

**Solution:**
- Allow popups for `localhost` in browser settings
- Disable popup blockers
- Check browser console for errors
- Try incognito/private mode

### "Access blocked: Authorization Error"

**Solution:**
- Make sure you added yourself as a test user in OAuth consent screen
- Use the same Google account you added as test user
- Wait 5 minutes after making changes in Google Cloud Console

### "redirect_uri_mismatch"

**Solution:**
- Check authorized JavaScript origins in Google Cloud Console
- Make sure you added: `http://localhost:5173`
- No trailing slashes!
- Must match exactly with protocol (http, not https)
- Wait 5 minutes after changes, then try again

### Calendar Event Not Created

**Solution:**
- Check browser console for errors (F12)
- Make sure calendar is still connected (check Settings)
- Try disconnecting and reconnecting
- Verify you have permission to edit your Google Calendar

---

## Security Notes

✅ **Your credentials are safe:**
- Never commit `.env` file to Git
- `.env` is in `.gitignore` by default
- Only you can access your credentials

✅ **OAuth is secure:**
- Users must authorize your app
- Token stored locally in browser
- You can revoke access anytime
- App only has calendar.events permission (limited scope)

✅ **Testing mode:**
- App is in "Testing" mode (normal for development)
- Only test users can authorize
- No Google verification needed for personal use

---

## Production Deployment

### If you're deploying to a live website (Netlify, Vercel, etc.):

**Good news:** If you already added your production URL in Step 5 above, you're almost done!

**If you didn't add production URLs yet:**

1. **Go back to Google Cloud Console** → "Credentials"
2. **Click on your OAuth 2.0 Client ID**
3. **Add production URLs:**
   - Under "Authorized JavaScript origins": Click "+ ADD URI"
   - Add: `https://your-actual-domain.com` (your live website)
   - Under "Authorized redirect URIs": Click "+ ADD URI"  
   - Add: `https://your-actual-domain.com` (same URL)
4. **Click "SAVE"**
5. **Wait 5 minutes** for changes to propagate

**Set up environment variables in your hosting platform:**

**For Netlify:**
- Go to Site settings → Environment variables
- Add: `VITE_GOOGLE_CLIENT_ID` = (your client ID)
- Add: `VITE_GOOGLE_API_KEY` = (your API key)

**For Vercel:**
- Go to Project Settings → Environment Variables
- Add: `VITE_GOOGLE_CLIENT_ID` = (your client ID)
- Add: `VITE_GOOGLE_API_KEY` = (your API key)

**Test on production:**
- Visit your live website
- Go to Settings → Connect Google Calendar
- Should work the same as localhost!

**Note:** The same Google Cloud credentials work for BOTH local development and production. You just need to add both URLs to the authorized origins.

---

## Summary Checklist

Before testing, make sure:

- [ ] Google Cloud project created
- [ ] Google Calendar API enabled
- [ ] OAuth consent screen configured
- [ ] Test user added (your email)
- [ ] OAuth 2.0 Client ID created (Web application)
- [ ] Authorized JavaScript origins includes: `http://localhost:5173` (and production URL if deployed)
- [ ] Authorized redirect URIs includes: `http://localhost:5173` (and production URL if deployed)
- [ ] API key created and restricted
- [ ] `.env` file updated with REAL values
- [ ] Dev server restarted
- [ ] Browser cache cleared

---

## Need Help?

Common issues and solutions are listed in the Troubleshooting section above.

If you're still stuck:
1. Check browser console (F12) for error messages
2. Check terminal where dev server is running
3. Verify all steps were completed
4. Try in incognito/private browsing mode
5. Use Chrome browser (best compatibility)

---

**Once set up, you only need to connect once in Settings, then calendar sync works automatically!** 🎉
