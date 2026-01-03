import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/components/ThemeProvider";
import { supabase } from "@/lib/supabase";
import {
  isGoogleCalendarAuthorized,
  authorizeGoogleCalendar,
} from "@/lib/googleCalendar";
import {
  Calendar,
  Bell,
  Moon,
  Trash2,
  Download,
  Upload,
  User,
  Shield,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Settings = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isCalendarConnected, setIsCalendarConnected] = useState(false);
  const [connectingCalendar, setConnectingCalendar] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme, setTheme, isDarkMode } = useTheme();

  // Settings state - load from localStorage
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    const saved = localStorage.getItem('mcat-spark-notifications');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    checkUser();
    checkCalendarStatus();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/signin");
      return;
    }
    setUser(user);
    setLoading(false);
  };

  const checkCalendarStatus = () => {
    setIsCalendarConnected(isGoogleCalendarAuthorized());
  };

  const handleConnectCalendar = async () => {
    setConnectingCalendar(true);
    try {
      const success = await authorizeGoogleCalendar();
      if (success) {
        setIsCalendarConnected(true);
        toast({
          title: "Connected!",
          description: "Google Calendar has been successfully connected.",
        });
      } else {
        toast({
          title: "Connection Failed",
          description: "Failed to connect Google Calendar. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      const errorMessage = error.message || "An error occurred while connecting to Google Calendar.";
      toast({
        title: "Connection Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error('Calendar connection error:', error);
    } finally {
      setConnectingCalendar(false);
    }
  };

  const handleDisconnectCalendar = () => {
    // Clear tokens from localStorage
    localStorage.removeItem('google_calendar_token');
    localStorage.removeItem('google_calendar_token_expiry');
    setIsCalendarConnected(false);
    toast({
      title: "Disconnected",
      description: "Google Calendar has been disconnected.",
    });
  };

  const handleNotificationsToggle = (checked: boolean) => {
    setNotificationsEnabled(checked);
    localStorage.setItem('mcat-spark-notifications', JSON.stringify(checked));
    toast({
      title: checked ? "Notifications Enabled" : "Notifications Disabled",
      description: checked 
        ? "You'll receive study reminders and progress updates."
        : "You won't receive any notifications.",
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleExportData = async () => {
    toast({
      title: "Exporting Data",
      description: "Your study data is being prepared for download...",
    });
    // TODO: Implement data export
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      toast({
        title: "Account Deletion",
        description: "This feature will be available soon.",
      });
      // TODO: Implement account deletion
    }
  };

  if (loading) {
    return (
      <PageLayout>
        <LoadingScreen 
          title="Loading Settings" 
          description="Preparing your preferences..." 
        />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto space-y-6 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/dashboard")}
              className="mb-2"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account and preferences
            </p>
          </div>
        </div>

        {/* Account Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account
            </CardTitle>
            <CardDescription>
              Your account information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                value={user?.email || ""}
                disabled
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">
                Contact support to change your email address
              </p>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Account Type</Label>
                <p className="text-sm text-muted-foreground">Free Account</p>
              </div>
              <Badge variant="outline">Free</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Google Calendar Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Google Calendar Integration
            </CardTitle>
            <CardDescription>
              Connect your Google Calendar to automatically sync study sessions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Calendar className="h-4 w-4" />
              <AlertTitle>Calendar Sync</AlertTitle>
              <AlertDescription>
                When connected, new study sessions can be automatically added to your Google Calendar.
              </AlertDescription>
            </Alert>

            <div className="flex items-center justify-between p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-3">
                {isCalendarConnected ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-muted-foreground" />
                )}
                <div>
                  <p className="font-medium">
                    {isCalendarConnected ? "Connected" : "Not Connected"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isCalendarConnected
                      ? "Your Google Calendar is connected and ready to sync"
                      : "Connect to enable automatic calendar sync"}
                  </p>
                </div>
              </div>
              {isCalendarConnected ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDisconnectCalendar}
                >
                  Disconnect
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={handleConnectCalendar}
                  disabled={connectingCalendar}
                >
                  {connectingCalendar ? "Connecting..." : "Connect"}
                </Button>
              )}
            </div>

            {!isCalendarConnected && (
              <div className="text-sm text-muted-foreground space-y-2">
                <p className="font-medium">What you'll need:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>A Google account</li>
                  <li>Permission to access your calendar</li>
                  <li>Pop-ups enabled in your browser</li>
                </ul>
                <p className="text-xs pt-2">
                  You can disconnect at any time. We only access your calendar to create events.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Manage study reminders and progress updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="notifications">Enable Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  {notificationsEnabled 
                    ? "Receive reminders for study sessions and progress updates"
                    : "All notifications are currently disabled"}
                </p>
              </div>
              <Switch
                id="notifications"
                checked={notificationsEnabled}
                onCheckedChange={handleNotificationsToggle}
              />
            </div>

            {notificationsEnabled && (
              <Alert>
                <Bell className="h-4 w-4" />
                <AlertDescription>
                  <p className="text-sm">You'll be notified about:</p>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1 ml-2">
                    <li>Daily study streak reminders</li>
                    <li>Weekly progress summaries</li>
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Moon className="h-5 w-5" />
              Appearance
            </CardTitle>
            <CardDescription>
              Customize how MCAT Spark looks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  {isDarkMode ? "Currently using dark theme" : "Currently using light theme"}
                </p>
              </div>
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={(checked) => {
                  setTheme(checked ? "dark" : "light");
                  toast({
                    title: checked ? "Dark Mode Enabled" : "Light Mode Enabled",
                    description: `Switched to ${checked ? "dark" : "light"} theme.`,
                  });
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Data & Privacy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Data & Privacy
            </CardTitle>
            <CardDescription>
              Manage your data and privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Export Your Data</Label>
                <p className="text-sm text-muted-foreground">
                  Download all your study data in JSON format
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportData}
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>

            <Separator />

            <Alert variant="destructive">
              <Trash2 className="h-4 w-4" />
              <AlertTitle>Danger Zone</AlertTitle>
              <AlertDescription className="space-y-3">
                <p>
                  Deleting your account will permanently remove all your data, including study progress, 
                  flashcards, and session history. This action cannot be undone.
                </p>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleDeleteAccount}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Sign Out */}
        <Card>
          <CardContent className="pt-6">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="text-center text-sm text-muted-foreground space-y-1">
          <p>MCAT Spark v1.0.0</p>
          <p>
            Need help?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Settings;
