# Supabase Setup Guide

## Getting Started with Supabase Authentication

### 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in your project details:
   - Name: `mcat-spark` (or whatever you prefer)
   - Database Password: Choose a strong password
   - Region: Select the closest region to you
5. Click "Create new project"

### 2. Get Your Project Credentials

1. Once your project is created, go to **Settings** → **API**
2. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (a long string starting with `eyJ...`)

### 3. Configure Your App

1. Create a `.env` file in your project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. Add your Supabase credentials to `.env`:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

### 4. Configure Email Authentication in Supabase

1. Go to **Authentication** → **Providers**
2. Make sure **Email** is enabled
3. Configure email templates (optional):
   - Go to **Authentication** → **Email Templates**
   - Customize the confirmation and reset password emails

### 5. Set Up Email Confirmation (Optional)

By default, Supabase requires email confirmation. You can disable this for testing:

1. Go to **Authentication** → **Settings**
2. Scroll to **Email Auth**
3. Toggle **Enable email confirmations** off (for development only)

### 6. Test Your Authentication

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/signup` and create a test account
3. Check your email for the confirmation link (if enabled)
4. Try signing in at `/signin`

### 7. View Your Users

- Go to **Authentication** → **Users** in your Supabase dashboard
- You'll see all registered users here

## Additional Features

### Adding a Sign Out Button

Add this to any component where you want a sign-out button:

```tsx
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

const handleSignOut = async () => {
  await supabase.auth.signOut();
  navigate("/signin");
};

// In your JSX:
<Button onClick={handleSignOut}>Sign Out</Button>
```

### Protecting Routes

Create an auth context or use Supabase's session management to protect routes that require authentication.

### Getting Current User

```tsx
import { supabase } from "@/lib/supabase";

const user = await supabase.auth.getUser();
console.log(user);
```

## Troubleshooting

- **"Invalid API key"**: Check that your `.env` file has the correct credentials
- **Email not sending**: Verify your email provider settings in Supabase
- **Confirm signup not working**: Make sure email confirmation is enabled/disabled as intended

## Security Notes

- Never commit your `.env` file to git (it's already in `.gitignore`)
- The anon key is safe to use in client-side code
- For production, set up proper Row Level Security (RLS) policies in Supabase
