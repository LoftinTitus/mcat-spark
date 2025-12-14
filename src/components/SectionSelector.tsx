import { cn } from "@/lib/utils";

type Section = "chem" | "bio" | "psych" | "cars";

interface SectionSelectorProps {
  value: Section;
  onChange: (section: Section) => void;
}

const sections: { id: Section; label: string; color: string }[] = [
  { id: "chem", label: "Chem/Phys", color: "border-section-chem text-section-chem" },
  { id: "bio", label: "Bio/Biochem", color: "border-section-bio text-section-bio" },
  { id: "psych", label: "Psych/Soc", color: "border-section-psych text-section-psych" },
  { id: "cars", label: "CARS", color: "border-section-cars text-section-cars" },
];

export function SectionSelector({ value, onChange }: SectionSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onChange(section.id)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium border-2 transition-all",
            value === section.id
              ? cn(section.color, "bg-opacity-10")
              : "border-border text-muted-foreground hover:border-muted-foreground"
          )}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}
