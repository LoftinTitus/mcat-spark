import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { SectionBadge } from "@/components/SectionBadge";
import { ChevronRight, ChevronLeft, CheckCircle2, XCircle, RefreshCw } from "lucide-react";
import { summaries, type Summary } from "@/data/summaries-index";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";

type Section = "chem" | "bio" | "psych" | "cars" | "all";

const Summaries = () => {
  const [section, setSection] = useState<Section>("all");
  const [subtopic, setSubtopic] = useState<string>("all");
  const [selectedSummary, setSelectedSummary] = useState<Summary | null>(null);
  
  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Get unique subtopics for the selected section
  const availableSubtopics = section === "all"
    ? Array.from(new Set(summaries.map(s => s.subtopic))).sort()
    : Array.from(new Set(summaries.filter(s => s.section === section).map(s => s.subtopic))).sort();

  // Filter summaries by section and subtopic
  const filteredSummaries = summaries.filter(s => {
    const matchesSection = section === "all" || s.section === section;
    const matchesSubtopic = subtopic === "all" || s.subtopic === subtopic;
    return matchesSection && matchesSubtopic;
  });

  // Reset subtopic when section changes
  const handleSectionChange = (newSection: Section) => {
    setSection(newSection);
    setSubtopic("all");
  };

  const handleSubtopicChange = (newSubtopic: string) => {
    setSubtopic(newSubtopic);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectCount(0);
    setQuizCompleted(false);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || !selectedSummary?.quiz) return;
    
    const currentQuestion = selectedSummary.quiz[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answerIndex) {
      setCorrectCount(correctCount + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (!selectedSummary?.quiz) return;
    
    if (currentQuestionIndex < selectedSummary.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetryQuiz = () => {
    handleStartQuiz();
  };

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
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setSelectedSummary(null)}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to all summaries
          </button>

          {/* Header Section */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2 flex-wrap">
              <SectionBadge section={selectedSummary.section} />
              <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {selectedSummary.subtopic}
              </span>
            </div>
            <h1 className="text-3xl font-bold font-serif mb-2">
              {selectedSummary.topic}
            </h1>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          {/* Content Card */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold font-serif mt-8 first:mt-0 mb-4 pb-2 border-b-2 border-primary/20">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-lg font-semibold mt-4 mb-2">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="text-base leading-7 mb-4 text-foreground/90">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 mb-6 pl-6">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="space-y-2 mb-6 pl-6 list-decimal">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-base leading-7 pl-2 relative before:content-[''] before:absolute before:left-[-1.25rem] before:top-[0.7rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
                      {children}
                    </li>
                  ),
                  code: ({ children }) => (
                    <code className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded font-mono font-semibold">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="text-sm bg-muted/50 p-4 rounded-xl overflow-x-auto mb-6 border border-border">
                      {children}
                    </pre>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-primary/5 rounded-r-lg italic">
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto mb-6 rounded-lg border border-border">
                      <table className="w-full border-collapse bg-card">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-primary/10">
                      {children}
                    </thead>
                  ),
                  th: ({ children }) => (
                    <th className="text-left p-3 font-semibold text-sm border-b border-border">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="p-3 text-sm border-b border-border/50">
                      {children}
                    </td>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-foreground">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-foreground/80">
                      {children}
                    </em>
                  ),
                  hr: () => (
                    <hr className="my-8 border-t-2 border-border" />
                  ),
                }}
              >
                {selectedSummary.content}
              </ReactMarkdown>
            </article>
          </div>

          {/* Quiz Section */}
          {selectedSummary.quiz && selectedSummary.quiz.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold font-serif mb-4 pb-2 border-b-2 border-primary/20">
                Practice Quiz
              </h2>
              
              {!quizStarted ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Test your knowledge with {selectedSummary.quiz.length} questions about this topic
                  </p>
                  <Button onClick={handleStartQuiz} size="lg">
                    Start Quiz
                  </Button>
                </div>
              ) : quizCompleted ? (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <div className="text-6xl font-bold text-primary mb-2">
                      {correctCount}/{selectedSummary.quiz.length}
                    </div>
                    <p className="text-xl text-muted-foreground">
                      {correctCount === selectedSummary.quiz.length 
                        ? "Perfect score! 🎉" 
                        : correctCount >= selectedSummary.quiz.length * 0.8 
                        ? "Great job! 👏" 
                        : correctCount >= selectedSummary.quiz.length * 0.6
                        ? "Good effort! 👍"
                        : "Keep studying! 📚"}
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <Button onClick={handleRetryQuiz} variant="outline">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Retry Quiz
                    </Button>
                    <Button onClick={() => setQuizStarted(false)}>
                      Back to Lesson
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Progress */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Question {currentQuestionIndex + 1} of {selectedSummary.quiz.length}</span>
                    <span>Score: {correctCount}/{currentQuestionIndex + (showExplanation ? 1 : 0)}</span>
                  </div>

                  {/* Question */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold">
                      {selectedSummary.quiz[currentQuestionIndex].question}
                    </p>

                    {/* Options */}
                    <div className="space-y-2">
                      {selectedSummary.quiz[currentQuestionIndex].options.map((option, index) => {
                        const isSelected = selectedAnswer === index;
                        const isCorrect = index === selectedSummary.quiz![currentQuestionIndex].answerIndex;
                        const showResult = showExplanation;

                        return (
                          <button
                            key={index}
                            onClick={() => !showExplanation && setSelectedAnswer(index)}
                            disabled={showExplanation}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                              showResult
                                ? isCorrect
                                  ? "border-green-500 bg-green-500/10"
                                  : isSelected
                                  ? "border-red-500 bg-red-500/10"
                                  : "border-border"
                                : isSelected
                                ? "border-primary bg-primary/10"
                                : "border-border hover:border-primary/50"
                            } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option}</span>
                              {showResult && isCorrect && (
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                              )}
                              {showResult && isSelected && !isCorrect && (
                                <XCircle className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {showExplanation && (
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-sm font-semibold mb-2">Explanation:</p>
                        <p className="text-sm text-foreground/90">
                          {selectedSummary.quiz[currentQuestionIndex].explanation}
                        </p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      {!showExplanation ? (
                        <Button
                          onClick={handleSubmitAnswer}
                          disabled={selectedAnswer === null}
                          className="flex-1"
                        >
                          Submit Answer
                        </Button>
                      ) : (
                        <Button onClick={handleNextQuestion} className="flex-1">
                          {currentQuestionIndex < selectedSummary.quiz.length - 1 
                            ? "Next Question" 
                            : "View Results"}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Quick Review" subtitle="High-yield topic summaries">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Section Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Section Filter
          </label>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSectionChange(s.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  section === s.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Subtopic Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Topic Filter
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSubtopicChange("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                subtopic === "all"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              All Topics
            </button>
            {availableSubtopics.map((st) => (
              <button
                key={st}
                onClick={() => handleSubtopicChange(st)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  subtopic === st
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSummaries.map((summary) => (
            <button
              key={summary.id}
              onClick={() => setSelectedSummary(summary)}
              className="group relative flex flex-col gap-3 p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all text-left overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <SectionBadge 
                      section={summary.section} 
                      className="text-xs px-3 py-1" 
                    />
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                      {summary.subtopic}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                    {summary.topic}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tap to review
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>

        {filteredSummaries.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-2">
              No summaries found for this selection
            </p>
            <p className="text-sm text-muted-foreground">
              Try selecting different filters above
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Summaries;
