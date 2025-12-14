import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen pb-20">
      {(title || subtitle) && (
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm px-4 py-4">
          {title && <h1 className="text-xl font-semibold font-serif">{title}</h1>}
          {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
        </header>
      )}
      <main className="px-4 py-4">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
