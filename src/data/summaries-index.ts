export interface Summary {
  id: string;
  section: "chem" | "bio" | "psych" | "cars";
  subtopic: string; // Broader category (e.g., "General Chemistry", "Biochemistry")
  topic: string; // Specific topic name
  content: string;
}

// Import all markdown files
import chemAcidsBasesContent from './summaries/chem-acids-bases.md?raw';
import chemThermodynamicsContent from './summaries/chem-thermodynamics.md?raw';
import chemPhysicsEquationsContent from './summaries/chem-physics-equations.md?raw';
import bioCellRespirationContent from './summaries/bio-cell-respiration.md?raw';
import bioGeneticsContent from './summaries/bio-genetics.md?raw';
import psychLearningContent from './summaries/psych-learning.md?raw';
import psychSocialContent from './summaries/psych-social.md?raw';
import carsStrategyContent from './summaries/cars-strategy.md?raw';

export const summaries: Summary[] = [
  {
    id: "chem-acids-bases",
    section: "chem",
    subtopic: "General Chemistry",
    topic: "Acids and Bases",
    content: chemAcidsBasesContent,
  },
  {
    id: "chem-thermodynamics",
    section: "chem",
    subtopic: "General Chemistry",
    topic: "Thermodynamics",
    content: chemThermodynamicsContent,
  },
  {
    id: "chem-physics-summary",
    section: "chem",
    subtopic: "Physics",
    topic: "Physics/Chemistry Summary Equations",
    content: chemPhysicsEquationsContent,
  },
  {
    id: "bio-cell-respiration",
    section: "bio",
    subtopic: "Biochemistry",
    topic: "Cellular Respiration",
    content: bioCellRespirationContent,
  },
  {
    id: "bio-genetics",
    section: "bio",
    subtopic: "Molecular Biology",
    topic: "Genetics Essentials",
    content: bioGeneticsContent,
  },
  {
    id: "psych-learning",
    section: "psych",
    subtopic: "Behavioral Sciences",
    topic: "Learning and Memory",
    content: psychLearningContent,
  },
  {
    id: "psych-social",
    section: "psych",
    subtopic: "Social Sciences",
    topic: "Social Psychology",
    content: psychSocialContent,
  },
  {
    id: "cars-strategy",
    section: "cars",
    subtopic: "Test Strategy",
    topic: "CARS Strategy Guide",
    content: carsStrategyContent,
  },
];
