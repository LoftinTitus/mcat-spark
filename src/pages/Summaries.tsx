import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { SectionBadge } from "@/components/SectionBadge";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { summaries, type Summary } from "@/data/summaries";
import ReactMarkdown from "react-markdown";

type Section = "chem" | "bio" | "psych" | "cars" | "all";

const Summaries = () => {
  const [section, setSection] = useState<Section>("all");
  const [selectedSummary, setSelectedSummary] = useState<Summary | null>(null);

  const filteredSummaries =
    section === "all"
      ? summaries
      : summaries.filter((s) => s.section === section);

  const sections: { id: Section; label: string }[] = [
    { id: "all", label: "All" },
    { id: "chem", label: "Chem/Phys" },
    { id: "bio", label: "Bio/Biochem" },
    { id: "psych", label: "Psych/Soc" },
    { id: "cars", label: "CARS" },
  ];

  if (selectedSummary) {
    return (
      <PageLayout>
        <div className="max-w-lg mx-auto">
          <button
            onClick={() => setSelectedSummary(null)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to summaries
          </button>

          <div className="mb-4">
            <SectionBadge section={selectedSummary.section} />
          </div>

          <article className="prose prose-sm prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-xl font-bold font-serif mt-0 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-base font-semibold mt-6 mb-2">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-sm leading-relaxed mb-3">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="text-sm space-y-1 mb-4 list-disc pl-5">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="text-sm space-y-1 mb-4 list-decimal pl-5">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                code: ({ children }) => (
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto mb-4">
                    {children}
                  </pre>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto mb-4">
                    <table className="text-sm w-full border-collapse">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="text-left p-2 border-b border-border font-medium">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="p-2 border-b border-border">{children}</td>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold">{children}</strong>
                ),
              }}
            >
              {selectedSummary.content}
            </ReactMarkdown>
          </article>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Quick Review" subtitle="High-yield topic summaries">
      <div className="max-w-lg mx-auto space-y-6">
        {/* Section Filter */}
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                section === s.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Summary List */}
        <div className="space-y-2">
          {filteredSummaries.map((summary) => (
            <button
              key={summary.id}
              onClick={() => setSelectedSummary(summary)}
              className="w-full flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-card hover:bg-accent transition-colors text-left"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <SectionBadge section={summary.section} className="text-[10px] px-2 py-0" />
                </div>
                <h3 className="font-medium truncate">{summary.topic}</h3>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>

        {filteredSummaries.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            No summaries found for this section.
          </p>
        )}
      </div>
    </PageLayout>
  );
};

export default Summaries;
