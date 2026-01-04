export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface Summary {
  id: string;
  section: "chem" | "bio" | "psych" | "cars";
  subtopic: string; // Broader category (e.g., "General Chemistry", "Biochemistry")
  topic: string; // Specific topic name
  content: string;
  quiz?: QuizQuestion[];
}

// Parse quiz questions from markdown
function parseQuizFromMarkdown(markdown: string): { content: string; quiz: QuizQuestion[] } {
  const quizSectionMatch = markdown.match(/---\s*##\s*Quiz\s*\n([\s\S]*)/i);
  
  if (!quizSectionMatch) {
    return { content: markdown, quiz: [] };
  }

  const content = markdown.substring(0, quizSectionMatch.index).trim();
  const quizText = quizSectionMatch[1];
  
  // Parse questions (format: **Q1: Question text** )
  const questionBlocks = quizText.split(/\*\*Q\d+:/).filter(Boolean);
  
  const quiz: QuizQuestion[] = questionBlocks.map((block, index) => {
    const lines = block.trim().split('\n');
    const question = lines[0].replace('**', '').trim();
    
    // Extract options (lines starting with A), B), C), D))
    const options: string[] = [];
    let answerIndex = 0;
    let explanation = '';
    let inExplanation = false;
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.match(/^[A-D]\)/)) {
        const optionText = line.substring(2).trim();
        // Check if this is marked as correct (contains *)
        if (optionText.includes('*') || optionText.includes('✓') || optionText.includes('[CORRECT]')) {
          answerIndex = options.length;
          options.push(optionText.replace(/\*|\✓|\[CORRECT\]/g, '').trim());
        } else {
          options.push(optionText);
        }
      } else if (line.startsWith('**Explanation:') || line.startsWith('Explanation:')) {
        inExplanation = true;
        explanation = line.replace(/\*\*Explanation:\*\*|Explanation:/, '').trim();
      } else if (inExplanation && line) {
        explanation += ' ' + line;
      }
    }
    
    return {
      id: `q${index + 1}`,
      question,
      options,
      answerIndex,
      explanation: explanation.trim()
    };
  });
  
  return { content, quiz };
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
import bioAminoAcidContent from './summaries/aminoacidstruct.md?raw';
import bioDnaGenomeContent from './summaries/bio-dna-genome.md?raw';
import bioDnaReplicationRepairContent from './summaries/bio-dna-replication-repair.md?raw';
import bioTranscriptionTranslationContent from './summaries/bio-transcription-translation.md?raw';
import bioCellSignalingGeneExpContent from './summaries/bio-cell-signaling-gene-exp.md?raw';
import bioVirusesContent from './summaries/bio-viruses.md?raw';
import bioSubviralParticlesContent from './summaries/bio-subviral-particles.md?raw';
import bioProkaryotesVsEukaryotesContent from './summaries/bio-prokaryotes-vs-eukaryotes.md?raw';
import bioProkaryotesContent from './summaries/bio-prokaryotes.md?raw';
import bioEukaryotesContent from './summaries/bio-eukaryotes.md?raw';
import bioPlasmaMembraneContent from './summaries/bio-plasma-membrane.md?raw';

// Parse content and quizzes
const parseContent = (rawContent: string) => parseQuizFromMarkdown(rawContent);

const chemAcidsBases = parseContent(chemAcidsBasesContent);
const chemThermodynamics = parseContent(chemThermodynamicsContent);
const chemPhysicsEquations = parseContent(chemPhysicsEquationsContent);
const bioCellRespiration = parseContent(bioCellRespirationContent);
const bioGenetics = parseContent(bioGeneticsContent);
const psychLearning = parseContent(psychLearningContent);
const psychSocial = parseContent(psychSocialContent);
const carsStrategy = parseContent(carsStrategyContent);
const bioAminoAcid = parseContent(bioAminoAcidContent);
const bioDnaGenome = parseContent(bioDnaGenomeContent);
const bioDnaReplicationRepair = parseContent(bioDnaReplicationRepairContent);
const bioTranscriptionTranslation = parseContent(bioTranscriptionTranslationContent);
const bioCellSignalingGeneExp = parseContent(bioCellSignalingGeneExpContent);
const bioViruses = parseContent(bioVirusesContent);
const bioSubviralParticles = parseContent(bioSubviralParticlesContent);
const bioProkaryotesVsEukaryotes = parseContent(bioProkaryotesVsEukaryotesContent);
const bioProkaryotes = parseContent(bioProkaryotesContent);
const bioEukaryotes = parseContent(bioEukaryotesContent);
const bioPlasmaMembrane = parseContent(bioPlasmaMembraneContent);

export const summaries: Summary[] = [
  {
    id: "chem-acids-bases",
    section: "chem",
    subtopic: "General Chemistry",
    topic: "Acids and Bases",
    content: chemAcidsBases.content,
    quiz: chemAcidsBases.quiz,
  },
  {
    id: "chem-thermodynamics",
    section: "chem",
    subtopic: "General Chemistry",
    topic: "Thermodynamics",
    content: chemThermodynamics.content,
    quiz: chemThermodynamics.quiz,
  },
  {
    id: "chem-physics-summary",
    section: "chem",
    subtopic: "Physics",
    topic: "Physics/Chemistry Summary Equations",
    content: chemPhysicsEquations.content,
    quiz: chemPhysicsEquations.quiz,
  },
  {
    id: "bio-cell-respiration",
    section: "bio",
    subtopic: "Biochemistry",
    topic: "Cellular Respiration",
    content: bioCellRespiration.content,
    quiz: bioCellRespiration.quiz,
  },
  {
    id: "bio-genetics",
    section: "bio",
    subtopic: "Genetics",
    topic: "Mendelian Genetics",
    content: bioGenetics.content,
    quiz: bioGenetics.quiz,
  },
  {
    id: "psych-learning",
    section: "psych",
    subtopic: "Behavioral Sciences",
    topic: "Learning and Memory",
    content: psychLearning.content,
    quiz: psychLearning.quiz,
  },
  {
    id: "psych-social",
    section: "psych",
    subtopic: "Social Sciences",
    topic: "Social Psychology",
    content: psychSocial.content,
    quiz: psychSocial.quiz,
  },
  {
    id: "cars-strategy",
    section: "cars",
    subtopic: "Test Strategy",
    topic: "CARS Strategy Guide",
    content: carsStrategy.content,
    quiz: carsStrategy.quiz,
  },
  {
    id: "bio-aminoacidstruct",
    section: "bio",
    subtopic: "Biochemistry",
    topic: "Amino Acid and Protein Structure",
    content: bioAminoAcid.content,
    quiz: bioAminoAcid.quiz,
  },
  {
    id: "bio-dna-genome",
    section: "bio",
    subtopic: "Molecular Biology",
    topic: "DNA and Genome Structure",
    content: bioDnaGenome.content,
    quiz: bioDnaGenome.quiz,
  },
  {
    id: "bio-dna-replication-repair",
    section: "bio",
    subtopic: "Molecular Biology",
    topic: "DNA Replication and Repair",
    content: bioDnaReplicationRepair.content,
    quiz: bioDnaReplicationRepair.quiz,
  },
  {
    id: "bio-transcription-translation",
    section: "bio",
    subtopic: "Molecular Biology",
    topic: "Transcription and Translation",
    content: bioTranscriptionTranslation.content,
    quiz: bioTranscriptionTranslation.quiz,
  },
  {
    id: "bio-cell-signaling-gene-exp",
    section: "bio",
    subtopic: "Molecular Biology",
    topic: "Cell Signaling and Gene Expression",
    content: bioCellSignalingGeneExp.content,
    quiz: bioCellSignalingGeneExp.quiz,
  },
  {
    id: "bio-viruses",
    section: "bio",
    subtopic: "Microbiology",
    topic: "Viruses",
    content: bioViruses.content,
    quiz: bioViruses.quiz,
  },
  {
    id: "bio-subviral-particles",
    section: "bio",
    subtopic: "Microbiology",
    topic: "Subviral Particles (Prions & Viroids)",
    content: bioSubviralParticles.content,
    quiz: bioSubviralParticles.quiz,
  },
  {
    id: "bio-prokaryotes-vs-eukaryotes",
    section: "bio",
    subtopic: "Cell Biology",
    topic: "Prokaryotes vs. Eukaryotes",
    content: bioProkaryotesVsEukaryotes.content,
    quiz: bioProkaryotesVsEukaryotes.quiz,
  },
  {
    id: "bio-prokaryotes",
    section: "bio",
    subtopic: "Microbiology",
    topic: "Prokaryotes",
    content: bioProkaryotes.content,
    quiz: bioProkaryotes.quiz,
  },
  {
    id: "bio-eukaryotes",
    section: "bio",
    subtopic: "Cell Biology",
    topic: "Eukaryotes",
    content: bioEukaryotes.content,
    quiz: bioEukaryotes.quiz,
  },
  {
    id: "bio-plasma-membrane",
    section: "bio",
    subtopic: "Cell Biology",
    topic: "Plasma Membrane",
    content: bioPlasmaMembrane.content,
    quiz: bioPlasmaMembrane.quiz,
  },
];
