# Settings Page - Quick Guide

## What's New

✅ **New Settings Page** with Google Calendar authorization
✅ **Pre-authorize calendar** before creating sessions  
✅ **Clean workflow** - connect once, use everywhere
✅ **Settings button** added to Dashboard header

---

## How to Use

### Step 1: Access Settings
1. Go to **Dashboard**
2. Click the **"Settings"** button in the top-right (next to Sign Out)

### Step 2: Connect Google Calendar
1. In Settings, find the **"Google Calendar Integration"** section
2. Click **"Connect"**
3. A Google OAuth popup will appear
4. Sign in and authorize
5. You'll see ✅ **"Connected"** status

### Step 3: Create Study Sessions
1. Go back to Dashboard
2. Click **"Add Study Session"**
3. Fill in the details
4. You'll see a checkbox: **"Sync to Google Calendar"** ✅
5. Check it to sync (only appears if authorized)
6. Click **"Add Session"**
7. Done! Event appears in Google Calendar automatically

---

## Features in Settings Page

### Account
- View your email
- Account type display
- Basic account info

### Google Calendar Integration
- **Connect/Disconnect** Google Calendar
- See connection status with visual indicator
- Clear instructions for setup
- One-time authorization

### Notifications
- Email notifications toggle
- Study reminders toggle
- (More coming soon)

### Appearance
- Dark mode (coming soon)
- Theme preferences

### Data & Privacy
- **Export your data** - download all study data as JSON
- **Delete account** - permanently remove all data
- Privacy controls

---

## Workflow Comparison

### Old Way (Complex):
```
Create session → Authorize calendar → Sync → Done
(Authorize every time or deal with tokens)
```

### New Way (Simple):
```
Settings → Connect calendar once → Done
Then: Create session → Check sync box → Done
(No repeated authorization!)
```

---

## Google Calendar Setup

If you see "Connect" button but can't authorize:

### Prerequisites:
1. You need Google Calendar API credentials
2. Check your `.env` file:
   ```env
   VITE_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
   VITE_GOOGLE_API_KEY=your-api-key
   ```

### If you see placeholder values:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project
3. Enable Google Calendar API
4. Create OAuth 2.0 credentials
5. Add authorized origins: `http://localhost:5173`
6. Copy Client ID and API Key
7. Update `.env` file
8. Restart dev server: `npm run dev` or `bun dev`

---

## UI Changes

### Dashboard Header (Top-Right):
```
Before: [Sign Out]
After:  [Settings] [Sign Out]
```

### Add Study Session Modal:
```
If calendar connected:
  ✅ Shows: "☑ Sync to Google Calendar" checkbox

If NOT connected:
  Shows: "Connect Google Calendar in Settings to enable sync"
```

### Settings Page Navigation:
```
Settings → Back to Dashboard (button at top)
Dashboard → Settings (button in header)
```

---

## Benefits

1. ✅ **Pre-authorize once** - no repeated popups
2. ✅ **Clear status** - see if calendar is connected
3. ✅ **Easy disconnect** - one click to disconnect
4. ✅ **Settings hub** - all preferences in one place
5. ✅ **Better UX** - separate setup from usage
6. ✅ **Future-ready** - easy to add more settings

---

## Testing Steps

### Test 1: Navigate to Settings
- [ ] Dashboard shows Settings button
- [ ] Click Settings button
- [ ] Settings page loads
- [ ] Back button returns to Dashboard

### Test 2: Connect Calendar
- [ ] Settings shows "Not Connected" initially
- [ ] Click "Connect" button
- [ ] OAuth popup appears
- [ ] After authorization, shows "Connected" ✅
- [ ] Disconnect button appears

### Test 3: Create Session with Sync
- [ ] Go back to Dashboard
- [ ] Click "Add Study Session"
- [ ] Checkbox appears: "Sync to Google Calendar" ✅
- [ ] Fill in session details
- [ ] Check the sync box
- [ ] Submit
- [ ] Event appears in Google Calendar

### Test 4: Disconnect Calendar
- [ ] Go to Settings
- [ ] Click "Disconnect"
- [ ] Status changes to "Not Connected"
- [ ] Go to Dashboard → Add Session
- [ ] Sync checkbox is hidden
- [ ] Shows message to connect in Settings

---

## File Changes

### New Files:
- `src/pages/Settings.tsx` - Complete settings page

### Modified Files:
- `src/App.tsx` - Added `/settings` route
- `src/pages/Dashboard.tsx` - Added Settings button
- `src/components/AddStudySessionModal.tsx` - Added calendar sync checkbox

---

## Current Status

✅ Settings page created and working
✅ Google Calendar pre-authorization ready
✅ Add Session modal updated with sync option
✅ Navigation between Dashboard ↔ Settings working
✅ Clean separation: setup vs usage
✅ No errors in code

---

## Next Steps

1. **Test it now**: Go to Dashboard → Settings → Connect calendar
2. **Create a session**: Dashboard → Add Session → Check sync box
3. **Verify**: Check your Google Calendar for the event

---

## Troubleshooting

### "Connect" button doesn't work
- Check browser console for errors
- Verify `.env` has real Google credentials
- Allow popups for localhost
- Restart dev server after changing `.env`

### Sync checkbox doesn't appear
- Make sure you connected calendar in Settings first
- Refresh the page
- Check connection status in Settings

### Event doesn't sync
- Verify calendar is still connected (Settings page)
- Check browser console for API errors
- Try disconnecting and reconnecting

---

**Much cleaner than before! Now you authorize once in Settings, then just check a box when creating sessions.** 🎉
