import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Layers, HelpCircle, BookOpen, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/signin");
      } else {
        setUser(user);
      }
      setLoading(false);
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/signin");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out",
        description: "You've been successfully signed out.",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const features = [
    {
      to: "/flashcards",
      icon: Layers,
      title: "Flashcards",
      description: "Review key concepts with tap-to-flip cards",
      color: "text-blue-500",
    },
    {
      to: "/questions",
      icon: HelpCircle,
      title: "Question Bank",
      description: "Practice with MCAT-style questions",
      color: "text-green-500",
    },
    {
      to: "/summaries",
      icon: BookOpen,
      title: "Quick Review",
      description: "High-yield topic summaries",
      color: "text-yellow-500",
    },
  ];

  if (loading) {
    return (
      <PageLayout>
        <div className="max-w-3xl mx-auto mt-8">
          <p className="text-center text-muted-foreground">Loading...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto mt-8 space-y-6">
        {/* User Profile Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Welcome back!</CardTitle>
                  <CardDescription className="mt-1">
                    {user?.email}
                  </CardDescription>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut} className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Study Tools Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Study Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.to}
                to={feature.to}
                className="group"
              >
                <Card className="h-full transition-all hover:shadow-md hover:border-primary">
                  <CardContent className="pt-6">
                    <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Study Statistics (Placeholder for future implementation) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Progress</CardTitle>
            <CardDescription>
              Track your study progress across all sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Cards Reviewed</p>
              </div>
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Questions Answered</p>
              </div>
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Topics Studied</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Coming soon: Track your progress and study streaks!
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link to="/flashcards">
              <Button variant="outline" className="w-full justify-start">
                <Layers className="h-4 w-4 mr-2" />
                Continue studying flashcards
              </Button>
            </Link>
            <Link to="/questions">
              <Button variant="outline" className="w-full justify-start">
                <HelpCircle className="h-4 w-4 mr-2" />
                Practice questions
              </Button>
            </Link>
            <Link to="/summaries">
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="h-4 w-4 mr-2" />
                Review summaries
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
