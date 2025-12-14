import { NavLink } from "react-router-dom";
import { Home, Layers, HelpCircle, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/flashcards", icon: Layers, label: "Cards" },
  { to: "/questions", icon: HelpCircle, label: "Questions" },
  { to: "/summaries", icon: BookOpen, label: "Review" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm">
      <div className="flex items-center justify-around px-2 py-2 pb-[env(safe-area-inset-bottom)]">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 px-4 py-2 text-muted-foreground transition-colors min-w-[64px]",
                isActive && "text-primary"
              )
            }
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
