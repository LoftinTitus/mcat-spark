/**
 * Google Calendar Integration
 * 
 * This module handles Google Calendar OAuth and event creation.
 * It uses the Google Calendar API to sync study sessions.
 */

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || "";
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

// Store token info in localStorage
const TOKEN_KEY = 'google_calendar_token';
const TOKEN_EXPIRY_KEY = 'google_calendar_token_expiry';

interface GoogleCalendarEvent {
  summary: string;
  description?: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  colorId?: string;
  reminders?: {
    useDefault: boolean;
    overrides?: Array<{
      method: string;
      minutes: number;
    }>;
  };
}

/**
 * Load the Google API client library
 */
let gapiInitialized = false;

export async function loadGoogleAPI(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if already loaded and initialized
    if (gapiInitialized && typeof window !== 'undefined' && (window as any).gapi?.client) {
      resolve();
      return;
    }

    // Check if script exists but not initialized
    if (typeof window !== 'undefined' && (window as any).gapi) {
      const gapiObj = (window as any).gapi;
      gapiObj.load('client', async () => {
        try {
          await gapiObj.client.init({
            apiKey: GOOGLE_API_KEY,
            discoveryDocs: [DISCOVERY_DOC],
          });
          gapiInitialized = true;
          resolve();
        } catch (error) {
          console.error('Failed to init gapi client:', error);
          reject(error);
        }
      });
      return;
    }

    // Load script for the first time
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      const gapiObj = (window as any).gapi;
      if (gapiObj) {
        gapiObj.load('client', async () => {
          try {
            await gapiObj.client.init({
              apiKey: GOOGLE_API_KEY,
              discoveryDocs: [DISCOVERY_DOC],
            });
            gapiInitialized = true;
            resolve();
          } catch (error) {
            console.error('Failed to init gapi client:', error);
            reject(error);
          }
        });
      } else {
        reject(new Error('gapi not loaded'));
      }
    };
    script.onerror = (error) => {
      console.error('Failed to load gapi script:', error);
      reject(error);
    };
    document.head.appendChild(script);
  });
}

/**
 * Load Google Identity Services
 */
function loadGoogleIdentityServices(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && (window as any).google?.accounts) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/**
 * Initialize Google Calendar integration
 */
export async function initGoogleCalendar(): Promise<void> {
  await Promise.all([loadGoogleAPI(), loadGoogleIdentityServices()]);
}

/**
 * Check if user has authorized Google Calendar access
 */
export function isGoogleCalendarAuthorized(): boolean {
  const token = localStorage.getItem(TOKEN_KEY);
  const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);
  
  if (!token || !expiry) {
    return false;
  }
  
  // Check if token is expired
  const expiryTime = parseInt(expiry, 10);
  return Date.now() < expiryTime;
}

/**
 * Authorize Google Calendar access
 */
export async function authorizeGoogleCalendar(): Promise<boolean> {
  try {
    // Check if credentials are configured
    if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID.includes('your-google-client-id')) {
      console.error('Google Calendar credentials not configured. Please add them to .env file.');
      throw new Error('Google Calendar not configured. Please add credentials to .env file and restart the server.');
    }

    await initGoogleCalendar();

    return new Promise((resolve, reject) => {
      const googleObj = (window as any).google;
      
      if (!googleObj?.accounts?.oauth2) {
        console.error('Google Identity Services not loaded');
        reject(new Error('Google Identity Services not loaded'));
        return;
      }

      const client = googleObj.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope: SCOPES,
        callback: (response: any) => {
          if (response.error) {
            console.error('Authorization error:', response.error);
            reject(new Error(response.error));
            return;
          }

          // Store token and expiry
          localStorage.setItem(TOKEN_KEY, response.access_token);
          const expiryTime = Date.now() + (response.expires_in * 1000);
          localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
          
          // Set the token for gapi
          const gapiObj = (window as any).gapi;
          if (gapiObj?.client) {
            gapiObj.client.setToken({ access_token: response.access_token });
          }
          
          resolve(true);
        },
      });

      client.requestAccessToken();
    });
  } catch (error: any) {
    console.error('Failed to authorize Google Calendar:', error);
    throw error;
  }
}

/**
 * Revoke Google Calendar access
 */
export function revokeGoogleCalendarAccess(): void {
  const token = localStorage.getItem(TOKEN_KEY);
  
  if (token && typeof window !== 'undefined' && (window as any).google) {
    const googleObj = (window as any).google;
    googleObj.accounts.oauth2.revoke(token, () => {
      console.log('Token revoked');
    });
  }
  
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_EXPIRY_KEY);
  
  if (typeof window !== 'undefined' && (window as any).gapi?.client) {
    const gapiObj = (window as any).gapi;
    gapiObj.client.setToken(null);
  }
}

/**
 * Set the stored access token
 */
function setAccessToken(): void {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token && typeof window !== 'undefined' && (window as any).gapi) {
    const gapiObj = (window as any).gapi;
    gapiObj.client.setToken({ access_token: token });
  }
}

/**
 * Create a Google Calendar event for a study session
 */
export async function createCalendarEvent(
  topic: string,
  section: string,
  date: string,
  time: string,
  duration: number,
  notes?: string
): Promise<boolean> {
  try {
    // Check authorization
    if (!isGoogleCalendarAuthorized()) {
      console.warn('Not authorized for Google Calendar');
      throw new Error('Not authorized. Please connect Google Calendar in Settings.');
    }

    // Ensure API is loaded and token is set
    await initGoogleCalendar();
    setAccessToken();

    const gapiObj = (window as any).gapi;
    
    // Verify gapi client is ready
    if (!gapiObj?.client?.calendar) {
      console.error('Google Calendar API not loaded');
      throw new Error('Google Calendar API not loaded. Please try again.');
    }

    // Create date-time strings
    const startDateTime = new Date(`${date}T${time}`);
    const endDateTime = new Date(startDateTime.getTime() + duration * 60000);

    // Get timezone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Map section to readable name
    const sectionNames: Record<string, string> = {
      bio: 'Biology/Biochemistry',
      chem: 'Chemistry/Physics',
      psych: 'Psychology/Sociology',
      cars: 'CARS',
      all: 'All Sections',
    };

    const sectionName = sectionNames[section] || section;

    // Create event object
    const event: GoogleCalendarEvent = {
      summary: `MCAT Study: ${topic}`,
      description: `Section: ${sectionName}\n${notes ? `\nNotes: ${notes}` : ''}\n\nCreated by MCAT Spark`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: timeZone,
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: timeZone,
      },
      colorId: '9', // Blue color for study events
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 30 },
          { method: 'popup', minutes: 10 },
        ],
      },
    };

    // Create the event
    const response = await gapiObj.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    console.log('Calendar event created:', response.result);
    return true;
  } catch (error) {
    console.error('Failed to create calendar event:', error);
    return false;
  }
}

/**
 * Get user's primary calendar info
 */
export async function getCalendarInfo(): Promise<any> {
  try {
    if (!isGoogleCalendarAuthorized()) {
      return null;
    }

    await initGoogleCalendar();
    setAccessToken();

    const gapiObj = (window as any).gapi;
    const response = await gapiObj.client.calendar.calendars.get({
      calendarId: 'primary',
    });

    return response.result;
  } catch (error) {
    console.error('Failed to get calendar info:', error);
    return null;
  }
}

// Type declarations for Google APIs
declare global {
  interface Window {
    gapi: any;
    google: any;
  }
  const gapi: any;
  const google: any;
}
