import { cn } from "@/lib/utils";

type Section = "chem" | "bio" | "psych" | "cars";

interface SectionBadgeProps {
  section: Section;
  className?: string;
}

const sectionLabels: Record<Section, string> = {
  chem: "Chem/Phys",
  bio: "Bio/Biochem",
  psych: "Psych/Soc",
  cars: "CARS",
};

const sectionColors: Record<Section, string> = {
  chem: "bg-section-chem",
  bio: "bg-section-bio",
  psych: "bg-section-psych",
  cars: "bg-section-cars",
};

export function SectionBadge({ section, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white",
        sectionColors[section],
        className
      )}
    >
      {sectionLabels[section]}
    </span>
  );
}
