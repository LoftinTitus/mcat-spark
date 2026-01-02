import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { Layers, HelpCircle, BookOpen, Heart, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    to: "/flashcards",
    icon: Layers,
    title: "Flashcards",
    description: "Review key concepts with tap-to-flip cards",
    color: "text-section-chem",
  },
  {
    to: "/questions",
    icon: HelpCircle,
    title: "Question Bank",
    description: "Practice with MCAT-style questions",
    color: "text-section-bio",
  },
  {
    to: "/summaries",
    icon: BookOpen,
    title: "Quick Review",
    description: "High-yield topic summaries",
    color: "text-section-psych",
  },
];

const Index = () => {
  return (
    <PageLayout>
      <div className="max-w-lg mx-auto">
        {/* Sign In Button */}
        <div className="flex justify-end mb-4">
          <Link to="/signin">
            <Button variant="outline" size="sm" className="gap-2">
              <UserCircle className="h-4 w-4" />
              Sign In
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold font-serif mb-2">MCAT Prep</h1>
          <p className="text-muted-foreground">
            Free study tools for premed students
          </p>
        </div>

        {/* Feature Cards */}
        <div className="space-y-3 mb-8">
          {features.map((feature) => (
            <Link
              key={feature.to}
              to={feature.to}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg bg-muted ${feature.color}`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-semibold">{feature.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* About Section */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="h-4 w-4 text-section-cars" />
            <h3 className="font-semibold text-sm">About This App</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is a free, open resource for students preparing for the MCAT.
            No accounts, no ads, no paywalls. Just study tools.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
            Content covers all four sections: Chemical & Physical Foundations,
            Biological & Biochemical Foundations, Psychological & Social
            Foundations, and Critical Analysis & Reasoning Skills.
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Study hard. You've got this.
        </p>
      </div>
    </PageLayout>
  );
};

export default Index;
