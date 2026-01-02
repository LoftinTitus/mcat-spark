import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "./BottomNav";
import { Button } from "./ui/button";
import { UserCircle, LayoutDashboard } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check auth status
    supabase.auth.getUser().then(({ data: { user } }) => {
      setIsAuthenticated(!!user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen pb-20">
      {(title || subtitle) && (
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {title && <h1 className="text-xl font-semibold font-serif">{title}</h1>}
              {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
            </div>
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Button>
              </Link>
            ) : (
              <Link to="/signin">
                <Button variant="ghost" size="sm" className="gap-2">
                  <UserCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign In</span>
                </Button>
              </Link>
            )}
          </div>
        </header>
      )}
      <main className="px-4 py-4">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
