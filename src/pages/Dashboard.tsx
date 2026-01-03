import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddStudySessionModal } from "@/components/AddStudySessionModal";
import { EditStudySessionModal } from "@/components/EditStudySessionModal";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { 
  Layers, 
  HelpCircle, 
  BookOpen, 
  LogOut, 
  User, 
  Calendar,
  TrendingUp,
  Target,
  Brain,
  Clock,
  Award,
  AlertCircle,
  Settings as SettingsIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  getUserStats,
  getWeakCategories,
  getStrongCategories,
  getStudyPlan,
  getRecentActivity,
  initializeUserProgress,
  type UserStats,
  type CategoryPerformance,
  type StudySession,
} from "@/lib/analytics";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [isAddSessionModalOpen, setIsAddSessionModalOpen] = useState(false);
  const [isEditSessionModalOpen, setIsEditSessionModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<StudySession | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Real data from Supabase
  const [studyStats, setStudyStats] = useState<UserStats>({
    cardsReviewed: 0,
    questionsAnswered: 0,
    topicsStudied: 0,
    studyStreak: 0,
    totalStudyTime: 0,
    avgAccuracy: 0,
  });
  const [weakCategories, setWeakCategories] = useState<CategoryPerformance[]>([]);
  const [strongCategories, setStrongCategories] = useState<CategoryPerformance[]>([]);
  const [studyPlan, setStudyPlan] = useState<StudySession[]>([]);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  useEffect(() => {
    // Check if user is logged in and load data
    const loadDashboardData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/signin");
        return;
      }

      setUser(user);

      // Initialize user progress if needed
      await initializeUserProgress(user.id);

      // Load all dashboard data
      const [stats, weak, strong, plan, activity] = await Promise.all([
        getUserStats(),
        getWeakCategories(),
        getStrongCategories(),
        getStudyPlan(),
        getRecentActivity(10),
      ]);

      if (stats) setStudyStats(stats);
      setWeakCategories(weak);
      setStrongCategories(strong);
      setStudyPlan(plan);
      setRecentActivity(activity);
      setLoading(false);
    };

    loadDashboardData();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/signin");
      } else {
        setUser(session.user);
        loadDashboardData();
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const refreshDashboard = async () => {
    const [stats, weak, strong, plan, activity] = await Promise.all([
      getUserStats(),
      getWeakCategories(),
      getStrongCategories(),
      getStudyPlan(),
      getRecentActivity(10),
    ]);

    if (stats) setStudyStats(stats);
    setWeakCategories(weak);
    setStrongCategories(strong);
    setStudyPlan(plan);
    setRecentActivity(activity);
  };

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

  const handleEditSession = (session: StudySession) => {
    setSelectedSession(session);
    setIsEditSessionModalOpen(true);
  };

  const features = [
    {
      to: "/flashcards",
      icon: Layers,
      title: "Flashcards",
      description: "Review key concepts with tap-to-flip cards",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      to: "/questions",
      icon: HelpCircle,
      title: "Question Bank",
      description: "Practice with MCAT-style questions",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      to: "/summaries",
      icon: BookOpen,
      title: "Quick Review",
      description: "High-yield topic summaries",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ];

  const getSectionColor = (section: string) => {
    switch (section) {
      case "bio": return "bg-green-500";
      case "chem": return "bg-blue-500";
      case "psych": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  const getSectionBadgeColor = (section: string) => {
    switch (section) {
      case "bio": return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "chem": return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "psych": return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
      default: return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
    }
  };

  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days === 1) return "Yesterday";
    return `${days} days ago`;
  };

  if (loading) {
    return (
      <PageLayout>
        <LoadingScreen 
          title="Loading Dashboard" 
          description="Fetching your study progress..." 
        />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto mt-8 space-y-6">
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
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/settings")}
                  className="gap-2"
                >
                  <SettingsIcon className="h-4 w-4" />
                  Settings
                </Button>
                <Button variant="outline" size="sm" onClick={handleSignOut} className="gap-2">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Study Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Study Streak</p>
                  <p className="text-2xl font-bold">{studyStats.studyStreak} days</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Accuracy</p>
                  <p className="text-2xl font-bold">{studyStats.avgAccuracy}%</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Study Time</p>
                  <p className="text-2xl font-bold">{studyStats.totalStudyTime}h</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Topics Studied</p>
                  <p className="text-2xl font-bold">{studyStats.topicsStudied}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="calendar">Study Plan</TabsTrigger>
            <TabsTrigger value="review">Quick Review</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              {features.map((feature) => (
                <Link
                  key={feature.to}
                  to={feature.to}
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary">
                    <CardContent className="pt-6">
                      <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <feature.icon className={`h-6 w-6 ${feature.color}`} />
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
                    <p className="text-2xl font-bold">{studyStats.cardsReviewed}</p>
                    <p className="text-sm text-muted-foreground">Cards Reviewed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{studyStats.questionsAnswered}</p>
                    <p className="text-sm text-muted-foreground">Questions Answered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{studyStats.topicsStudied}</p>
                    <p className="text-sm text-muted-foreground">Topics Studied</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  <CardTitle className="text-lg">Areas to Focus On</CardTitle>
                </div>
                <CardDescription>
                  Topics where you could use more practice
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {weakCategories.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    Answer at least 3 questions per topic to see insights on areas that need attention.
                  </p>
                ) : (
                  weakCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{category.name}</span>
                        <Badge className={getSectionBadgeColor(category.section)} variant="secondary">
                          {category.section === "bio" ? "Bio/Biochem" : 
                           category.section === "chem" ? "Chem/Phys" : "Psych/Soc"}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {category.accuracy}% ({category.questionsAttempted} questions)
                      </span>
                    </div>
                    <Progress value={category.accuracy} className="h-2" />
                    <Link to={`/questions?subcategory=${encodeURIComponent(category.name)}`}>
                      <Button variant="outline" size="sm" className="w-full mt-2">
                        Practice {category.name}
                      </Button>
                    </Link>
                  </div>
                ))
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">Strong Areas</CardTitle>
                </div>
                <CardDescription>
                  Topics where you're performing well
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {strongCategories.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    Keep practicing! Strong areas will appear here once you score 80%+ on at least 3 questions per topic.
                  </p>
                ) : (
                  strongCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{category.name}</span>
                        <Badge className={getSectionBadgeColor(category.section)} variant="secondary">
                          {category.section === "bio" ? "Bio/Biochem" : 
                           category.section === "chem" ? "Chem/Phys" : "Psych/Soc"}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {category.accuracy}% ({category.questionsAttempted} questions)
                      </span>
                    </div>
                    <Progress value={category.accuracy} className="h-2" />
                  </div>
                ))
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Study Plan Tab */}
          <TabsContent value="calendar" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <CardTitle className="text-lg">Upcoming Study Sessions</CardTitle>
                  </div>
                  <Button size="sm" onClick={() => setIsAddSessionModalOpen(true)}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Add Session
                  </Button>
                </div>
                <CardDescription>
                  Plan and organize your MCAT preparation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studyPlan.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        No study sessions scheduled yet. Click "Add Session" to start planning!
                      </p>
                    </div>
                  ) : (
                    studyPlan.map((session, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                      <div className="flex flex-col items-center min-w-[60px]">
                        <span className="text-xs font-medium text-muted-foreground uppercase">
                          {new Date(session.date).toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                        <span className="text-2xl font-bold">
                          {new Date(session.date).getDate()}
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{session.topic}</h4>
                          {session.section !== "all" && (
                            <span className={`w-2 h-2 rounded-full ${getSectionColor(session.section)}`} />
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {session.time}
                          </span>
                          <span>{session.duration}</span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleEditSession(session)}
                      >
                        Edit
                      </Button>
                    </div>
                  ))
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Study Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Break study sessions into 25-50 minute blocks with short breaks</p>
                <p>• Focus on weak areas while maintaining strong ones</p>
                <p>• Mix different question types and topics for better retention</p>
                <p>• Review explanations for both correct and incorrect answers</p>
                <p>• Take full-length practice tests regularly under timed conditions</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quick Review Tab */}
          <TabsContent value="review" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Concepts to Review</CardTitle>
                <CardDescription>
                  Quick access to topics that need attention
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {weakCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${getSectionColor(category.section)}/10 flex items-center justify-center`}>
                        <BookOpen className={`h-5 w-5 ${category.section === "bio" ? "text-green-500" : category.section === "chem" ? "text-blue-500" : "text-purple-500"}`} />
                      </div>
                      <div>
                        <p className="font-medium">{category.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {category.section === "bio" ? "Bio/Biochem" : 
                           category.section === "chem" ? "Chem/Phys" : "Psych/Soc"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link to={`/summaries?section=${category.section}`}>
                        <Button variant="outline" size="sm">
                          <BookOpen className="h-4 w-4 mr-1" />
                          Read
                        </Button>
                      </Link>
                      <Link to={`/flashcards?subcategory=${encodeURIComponent(category.name)}`}>
                        <Button variant="outline" size="sm">
                          <Layers className="h-4 w-4 mr-1" />
                          Cards
                        </Button>
                      </Link>
                      <Link to={`/questions?subcategory=${encodeURIComponent(category.name)}`}>
                        <Button variant="outline" size="sm">
                          <HelpCircle className="h-4 w-4 mr-1" />
                          Quiz
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Daily Goals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Review 20 flashcards</span>
                      <span className="text-muted-foreground">12/20</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Answer 10 questions</span>
                      <span className="text-muted-foreground">7/10</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Study for 2 hours</span>
                      <span className="text-muted-foreground">1.5/2h</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  {recentActivity.length === 0 ? (
                    <p className="text-muted-foreground text-center py-4">
                      No activity yet. Start studying to see your progress!
                    </p>
                  ) : (
                    recentActivity.slice(0, 5).map((activity, index) => {
                      const timeAgo = getTimeAgo(new Date(activity.timestamp));
                      const sectionColor = activity.section === "bio" ? "green" : 
                                          activity.section === "chem" ? "blue" : "purple";
                      
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full bg-${sectionColor}-500/10 flex items-center justify-center`}>
                            {activity.type === 'question' ? (
                              <HelpCircle className={`h-4 w-4 text-${sectionColor}-500`} />
                            ) : (
                              <Layers className={`h-4 w-4 text-${sectionColor}-500`} />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">
                              {activity.type === 'question' 
                                ? `Answered ${activity.subcategory || 'question'}${activity.isCorrect ? ' ✓' : ' ✗'}`
                                : `Reviewed ${activity.subcategory || 'flashcard'}`
                              }
                            </p>
                            <p className="text-xs text-muted-foreground">{timeAgo}</p>
                          </div>
                        </div>
                      );
                    })
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Add Study Session Modal */}
        <AddStudySessionModal
          open={isAddSessionModalOpen}
          onOpenChange={setIsAddSessionModalOpen}
          onSessionAdded={refreshDashboard}
        />

        {/* Edit Study Session Modal */}
        <EditStudySessionModal
          open={isEditSessionModalOpen}
          onOpenChange={setIsEditSessionModalOpen}
          onSessionUpdated={refreshDashboard}
          session={selectedSession}
        />
      </div>
    </PageLayout>
  );
};

export default Dashboard;
