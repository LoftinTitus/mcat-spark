export interface Summary {
  id: string;
  section: "chem" | "bio" | "psych" | "cars";
  topic: string;
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
    topic: "Acids and Bases",
    content: chemAcidsBasesContent,
  },
  {
    id: "chem-thermodynamics",
    section: "chem",
    topic: "Thermodynamics",
    content: chemThermodynamicsContent,
  },
  {
    id: "chem-physics-summary",
    section: "chem",
    topic: "Physics/Chemistry Summary Equations",
    content: chemPhysicsEquationsContent,
  },
  {
    id: "bio-cell-respiration",
    section: "bio",
    topic: "Cellular Respiration",
    content: bioCellRespirationContent,
  },
  {
    id: "bio-genetics",
    section: "bio",
    topic: "Genetics Essentials",
    content: bioGeneticsContent,
  },
  {
    id: "psych-learning",
    section: "psych",
    topic: "Learning and Memory",
    content: psychLearningContent,
  },
  {
    id: "psych-social",
    section: "psych",
    topic: "Social Psychology",
    content: psychSocialContent,
  },
  {
    id: "cars-strategy",
    section: "cars",
    topic: "CARS Strategy Guide",
    content: carsStrategyContent,
  },
];
