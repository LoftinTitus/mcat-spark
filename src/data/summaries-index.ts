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
import bioEndoplasmicReticulumContent from './summaries/bio-endoplasmic-reticulum.md?raw';
import bioMitochondriaContent from './summaries/bio-mitochondria.md?raw';
import bioCellCycleMitosisContent from './summaries/bio-cell-cycle-mitosis.md?raw';
import bioCancerContent from './summaries/bio-cancer.md?raw';
import bioMeiosisContent from './summaries/bio-meiosis.md?raw';
import bioMeiosisVsMitosisContent from './summaries/bio-meiosis-vs-mitosis.md?raw';
import bioGeneticLinkageContent from './summaries/bio-genetic-linkage.md?raw';
import bioInheritancePatternsContent from './summaries/bio-inheritance-patterns.md?raw';
import bioPopulationGeneticsContent from './summaries/bio-population-genetics.md?raw';
import bioNeuronsContent from './summaries/bio-neurons.md?raw';
import bioSynapticTransmissionContent from './summaries/bio-synaptic-transmission.md?raw';
import bioNervousSystemOrganizationContent from './summaries/bio-nervous-system-organization.md?raw';
import bioBrainSpinalCordContent from './summaries/bio-brain-spinal-cord.md?raw';
import bioPeripheralNervousSystemContent from './summaries/bio-peripheral-nervous-system.md?raw';
import bioHormonesContent from './summaries/bio-hormones.md?raw';
import bioHeartContent from './summaries/bio-heart.md?raw';
import bioBloodContent from './summaries/bio-blood.md?raw';
import bioLymphaticSystemContent from './summaries/bio-lymphatic-system.md?raw';
import bioImmuneSystemContent from './summaries/bio-immune-system.md?raw';
import bioNephronContent from './summaries/bio-nephron.md?raw';
import bioRenalRegulationContent from './summaries/bio-renal-regulation.md?raw';
import bioExcretoryOverviewContent from './summaries/bio-excretory-overview.md?raw';
import bioDigestiveSystemContent from './summaries/bio-digestive-system.md?raw';
import bioVitaminsMineralsContent from './summaries/bio-vitamins-minerals.md?raw';
import bioSkeletalTissueContent from './summaries/bio-skeletal-tissue.md?raw';
import bioCardiacMuscleContent from './summaries/bio-cardiac-muscle.md?raw';
import bioSmoothMuscleContent from './summaries/bio-smooth-muscle.md?raw';
import bioConnectiveTissueContent from './summaries/bio-connective-tissue.md?raw';
import bioBonesContent from './summaries/bio-bones.md?raw';
import bioJointsTendonsContent from './summaries/bio-joints-tendons.md?raw';
import bioRespiratorySystemContent from './summaries/bio-respiratory-system.md?raw';
import bioRespiratoryThermoPhContent from './summaries/bio-respiratory-thermo-ph.md?raw';
import bioSkinThermalRegulationContent from './summaries/bio-skin-thermal-regulation.md?raw';
import bioSkinLayersContent from './summaries/bio-skin-layers.md?raw';
import bioMaleReproductiveSystemContent from './summaries/bio-male-reproductive-system.md?raw';
import bioSpermatogenesisOogenesisContent from './summaries/bio-spermatogenesis-oogenesis.md?raw';
import bioFemaleReproductiveSystemContent from './summaries/bio-female-reproductive-system.md?raw';
import bioFetalDevelopmentContent from './summaries/bio-fetal-development.md?raw';
import psychSocialInstitutionsContent from './summaries/psych-social-institutions.md?raw';
import psychSociologicalTheoriesContent from './summaries/psych-sociological-theories.md?raw';
import psychCultureContent from './summaries/psych-culture.md?raw';
import psychSelfConceptContent from './summaries/psych-self-concept.md?raw';
import psychSocialInteractionContent from './summaries/psych-social-interaction.md?raw';
import psychPersonalityContent from './summaries/psych-personality.md?raw';
import psychMotivationContent from './summaries/psych-motivation.md?raw';
import psychEmotionContent from './summaries/psych-emotion.md?raw';
import psychAttitudeContent from './summaries/psych-attitude.md?raw';
import psychPsychologicalDisordersContent from './summaries/psych-psychological-disorders.md?raw';
import psychStressContent from './summaries/psych-stress.md?raw';
import psychNeurobiologyOfDisordersContent from './summaries/psych-neurobiology-of-disorders.md?raw';

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
const bioEndoplasmicReticulum = parseContent(bioEndoplasmicReticulumContent);
const bioMitochondria = parseContent(bioMitochondriaContent);
const bioCellCycleMitosis = parseContent(bioCellCycleMitosisContent);
const bioCancer = parseContent(bioCancerContent);
const bioMeiosis = parseContent(bioMeiosisContent);
const bioMeiosisVsMitosis = parseContent(bioMeiosisVsMitosisContent);
const bioGeneticLinkage = parseContent(bioGeneticLinkageContent);
const bioInheritancePatterns = parseContent(bioInheritancePatternsContent);
const bioPopulationGenetics = parseContent(bioPopulationGeneticsContent);
const bioNeurons = parseContent(bioNeuronsContent);
const bioSynapticTransmission = parseContent(bioSynapticTransmissionContent);
const bioNervousSystemOrganization = parseContent(bioNervousSystemOrganizationContent);
const bioBrainSpinalCord = parseContent(bioBrainSpinalCordContent);
const bioPeripheralNervousSystem = parseContent(bioPeripheralNervousSystemContent);
const bioHormones = parseContent(bioHormonesContent);
const bioHeart = parseContent(bioHeartContent);
const bioBlood = parseContent(bioBloodContent);
const bioLymphaticSystem = parseContent(bioLymphaticSystemContent);
const bioImmuneSystem = parseContent(bioImmuneSystemContent);
const bioNephron = parseContent(bioNephronContent);
const bioRenalRegulation = parseContent(bioRenalRegulationContent);
const bioExcretoryOverview = parseContent(bioExcretoryOverviewContent);
const bioDigestiveSystem = parseContent(bioDigestiveSystemContent);
const bioVitaminsMinerals = parseContent(bioVitaminsMineralsContent);
const bioSkeletalTissue = parseContent(bioSkeletalTissueContent);
const bioCardiacMuscle = parseContent(bioCardiacMuscleContent);
const bioSmoothMuscle = parseContent(bioSmoothMuscleContent);
const bioConnectiveTissue = parseContent(bioConnectiveTissueContent);
const bioBones = parseContent(bioBonesContent);
const bioJointsTendons = parseContent(bioJointsTendonsContent);
const bioRespiratorySystem = parseContent(bioRespiratorySystemContent);
const bioRespiratoryThermoPh = parseContent(bioRespiratoryThermoPhContent);
const bioSkinThermalRegulation = parseContent(bioSkinThermalRegulationContent);
const bioSkinLayers = parseContent(bioSkinLayersContent);
const bioMaleReproductiveSystem = parseContent(bioMaleReproductiveSystemContent);
const bioSpermatogenesisOogenesis = parseContent(bioSpermatogenesisOogenesisContent);
const bioFemaleReproductiveSystem = parseContent(bioFemaleReproductiveSystemContent);
const bioFetalDevelopment = parseContent(bioFetalDevelopmentContent);
const psychSocialInstitutions = parseContent(psychSocialInstitutionsContent);
const psychSociologicalTheories = parseContent(psychSociologicalTheoriesContent);
const psychCulture = parseContent(psychCultureContent);
const psychSelfConcept = parseContent(psychSelfConceptContent);
const psychSocialInteraction = parseContent(psychSocialInteractionContent);
const psychPersonality = parseContent(psychPersonalityContent);
const psychMotivation = parseContent(psychMotivationContent);
const psychEmotion = parseContent(psychEmotionContent);
const psychAttitude = parseContent(psychAttitudeContent);
const psychPsychologicalDisorders = parseContent(psychPsychologicalDisordersContent);
const psychStress = parseContent(psychStressContent);
const psychNeurobiologyOfDisorders = parseContent(psychNeurobiologyOfDisordersContent);


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
  {
    id: "bio-endoplasmic-reticulum",
    section: "bio",
    subtopic: "Cell Biology",
    topic: "Endoplasmic Reticulum (Rough & Smooth)",
    content: bioEndoplasmicReticulum.content,
    quiz: bioEndoplasmicReticulum.quiz,
  },
  {
    id: "bio-mitochondria",
    section: "bio",
    subtopic: "Cell Biology",
    topic: "Mitochondria",
    content: bioMitochondria.content,
    quiz: bioMitochondria.quiz,
  },
  {
    id: "bio-cell-cycle-mitosis",
    section: "bio",
    subtopic: "Cell Biology",
    topic: "Cell Cycle and Mitosis",
    content: bioCellCycleMitosis.content,
    quiz: bioCellCycleMitosis.quiz,
  },
  {
    id: "bio-cancer",
    section: "bio",
    subtopic: "Cell Biology",
    topic: "Cancer: Cellular and Molecular Basis",
    content: bioCancer.content,
    quiz: bioCancer.quiz,
  },
  {
    id: "bio-meiosis",
    section: "bio",
    subtopic: "Cell Biology",
    topic: "Meiosis",
    content: bioMeiosis.content,
    quiz: bioMeiosis.quiz,
  },
  {
    id: "bio-meiosis-vs-mitosis",
    section: "bio",
    subtopic: "Cell Biology",
    topic: "Meiosis vs. Mitosis",
    content: bioMeiosisVsMitosis.content,
    quiz: bioMeiosisVsMitosis.quiz,
  },
  {
    id: "bio-genetic-linkage",
    section: "bio",
    subtopic: "Genetics",
    topic: "Genetic Linkage",
    content: bioGeneticLinkage.content,
    quiz: bioGeneticLinkage.quiz,
  },
  {
    id: "bio-inheritance-patterns",
    section: "bio",
    subtopic: "Genetics",
    topic: "Inheritance Patterns",
    content: bioInheritancePatterns.content,
    quiz: bioInheritancePatterns.quiz,
  },
  {
    id: "bio-population-genetics",
    section: "bio",
    subtopic: "Genetics",
    topic: "Population Genetics & 5 Fingers of Evolution",
    content: bioPopulationGenetics.content,
    quiz: bioPopulationGenetics.quiz,
  },
  {
    id: "bio-neurons",
    section: "bio",
    subtopic: "Nervous System",
    topic: "Neurons: Types, Structure, and Function",
    content: bioNeurons.content,
    quiz: bioNeurons.quiz,
  },
  {
    id: "bio-synaptic-transmission",
    section: "bio",
    subtopic: "Nervous System",
    topic: "Synaptic Transmission",
    content: bioSynapticTransmission.content,
    quiz: bioSynapticTransmission.quiz,
  },
  {
    id: "bio-nervous-system-organization",
    section: "bio",
    subtopic: "Nervous System",
    topic: "Organization of the Nervous System",
    content: bioNervousSystemOrganization.content,
    quiz: bioNervousSystemOrganization.quiz,
  },
  {
    id: "bio-brain-spinal-cord",
    section: "bio",
    subtopic: "Nervous System",
    topic: "Brain and Spinal Cord: Structure and Function",
    content: bioBrainSpinalCord.content,
    quiz: bioBrainSpinalCord.quiz,
  },
  {
    id: "bio-peripheral-nervous-system",
    section: "bio",
    subtopic: "Nervous System",
    topic: "Peripheral Nervous System: Structure and Function",
    content: bioPeripheralNervousSystem.content,
    quiz: bioPeripheralNervousSystem.quiz,
  },
  {
    id: "bio-hormones",
    section: "bio",
    subtopic: "Endocrine System",
    topic: "Hormones: Types, Mechanisms, and Disorders",
    content: bioHormones.content,
    quiz: bioHormones.quiz,
  },
  {
    id: "bio-heart",
    section: "bio",
    subtopic: "Cardiovascular System",
    topic: "The Heart: Structure, Function, and MCAT Relevance",
    content: bioHeart.content,
    quiz: bioHeart.quiz,
  },
  {
    id: "bio-blood",
    section: "bio",
    subtopic: "Cardiovascular System",
    topic: "Blood",
    content: bioBlood.content,
    quiz: bioBlood.quiz,
  },
  {
    id: "bio-lymphatic-system",
    section: "bio",
    subtopic: "Immunology",
    topic: "Lymphatic System",
    content: bioLymphaticSystem.content,
    quiz: bioLymphaticSystem.quiz,
  },
  {
    id: "bio-immune-system",
    section: "bio",
    subtopic: "Immunology",
    topic: "Immune System",
    content: bioImmuneSystem.content,
    quiz: bioImmuneSystem.quiz,
  },
  {
    id: "bio-nephron",
    section: "bio",
    subtopic: "Renal System",
    topic: "Nephrons",
    content: bioNephron.content,
    quiz: bioNephron.quiz,
  },
  {
    id: "bio-renal-regulation",
    section: "bio",
    subtopic: "Renal System",
    topic: "Renal Regulation of Blood Flow, Pressure, and pH",
    content: bioRenalRegulation.content,
    quiz: bioRenalRegulation.quiz,
  },
  {
    id: "bio-excretory-overview",
    section: "bio",
    subtopic: "Renal System",
    topic: "Overview of the Excretory System",
    content: bioExcretoryOverview.content,
    quiz: bioExcretoryOverview.quiz,
  },
  {
    id: "bio-digestive-system",
    section: "bio",
    subtopic: "Renal System",
    topic: "Digestive System",
    content: bioDigestiveSystem.content,
    quiz: bioDigestiveSystem.quiz,
  },
  {
    id: "bio-vitamins-minerals",
    section: "bio",
    subtopic: "Renal System",
    topic: "Vitamins and Minerals",
    content: bioVitaminsMinerals.content,
    quiz: bioVitaminsMinerals.quiz,
  },
  {
    id: "bio-skeletal-tissue",
    section: "bio",
    subtopic: "Musculoskeletal System",
    topic: "Skeletal Tissue",
    content: bioSkeletalTissue.content,
    quiz: bioSkeletalTissue.quiz,
  },
  {
    id: "bio-cardiac-muscle",
    section: "bio",
    subtopic: "Musculoskeletal System",
    topic: "Cardiac Muscle",
    content: bioCardiacMuscle.content,
    quiz: bioCardiacMuscle.quiz,
  },
  {
    id: "bio-smooth-muscle",
    section: "bio",
    subtopic: "Musculoskeletal System",
    topic: "Smooth Muscle",
    content: bioSmoothMuscle.content,
    quiz: bioSmoothMuscle.quiz,
  },
  {
    id: "bio-connective-tissue",
    section: "bio",
    subtopic: "Musculoskeletal System",
    topic: "Connective Tissue",
    content: bioConnectiveTissue.content,
    quiz: bioConnectiveTissue.quiz,
  },
  {
    id: "bio-bones",
    section: "bio",
    subtopic: "Musculoskeletal System",
    topic: "Bones Overview",
    content: bioBones.content,
    quiz: bioBones.quiz,
  },
  {
    id: "bio-joints-tendons",
    section: "bio",
    subtopic: "Musculoskeletal System",
    topic: "Joints and Tendons: Structure and Function",
    content: bioJointsTendons.content,
    quiz: bioJointsTendons.quiz,
  },
  {
    id: "bio-respiratory-system",
    section: "bio",
    subtopic: "Respiratory System",
    topic: "Respiratory System",
    content: bioRespiratorySystem.content,
    quiz: bioRespiratorySystem.quiz,
  },
  {
    id: "bio-respiratory-thermo-ph",
    section: "bio",
    subtopic: "Respiratory System",
    topic: "Thermoregulation and pH Regulation in the Respiratory System",
    content: bioRespiratoryThermoPh.content,
    quiz: bioRespiratoryThermoPh.quiz,
  },
  {
    id: "bio-skin-thermal-regulation",
    section: "bio",
    subtopic: "Integumentary System",
    topic: "Thermal Regulation by the Skin",
    content: bioSkinThermalRegulation.content,
    quiz: bioSkinThermalRegulation.quiz,
  },
  {
    id: "bio-skin-layers",
    section: "bio",
    subtopic: "Integumentary System",
    topic: "Layers of the Skin",
    content: bioSkinLayers.content,
    quiz: bioSkinLayers.quiz,
  },
  {
    id: "bio-male-reproductive-system",
    section: "bio",
    subtopic: "Reproductive System",
    topic: "Male Reproductive System",
    content: bioMaleReproductiveSystem.content,
    quiz: bioMaleReproductiveSystem.quiz,
  },
  {
    id: "bio-spermatogenesis-oogenesis",
    section: "bio",
    subtopic: "Reproductive System",
    topic: "Spermatogenesis and Oogenesis",
    content: bioSpermatogenesisOogenesis.content,
    quiz: bioSpermatogenesisOogenesis.quiz,
  },
  {
    id: "bio-female-reproductive-system",
    section: "bio",
    subtopic: "Reproductive System",
    topic: "Female Reproductive System",
    content: bioFemaleReproductiveSystem.content,
    quiz: bioFemaleReproductiveSystem.quiz,
  },
  {
    id: "bio-fetal-development",
    section: "bio",
    subtopic: "Reproductive System",
    topic: "Fetal Development",
    content: bioFetalDevelopment.content,
    quiz: bioFetalDevelopment.quiz,
  },
  {
    id: "psych-social-institutions",
    section: "psych",
    subtopic: "Social Sciences",
    topic: "Social Institutions",
    content: psychSocialInstitutions.content,
    quiz: psychSocialInstitutions.quiz,
  },
  {
    id: "psych-sociological-theories",
    section: "psych",
    subtopic: "Social Sciences",
    topic: "Sociological Theories",
    content: psychSociologicalTheories.content,
    quiz: psychSociologicalTheories.quiz,
  },
  {
    id: "psych-culture",
    section: "psych",
    subtopic: "Social Sciences",
    topic: "Culture",
    content: psychCulture.content,
    quiz: psychCulture.quiz,
  },
  {
    id: "psych-self-concept",
    section: "psych",
    subtopic: "Social Sciences",
    topic: "Self Concept",
    content: psychSelfConcept.content,
    quiz: psychSelfConcept.quiz,
  },
  {
    id: "psych-social-interaction",
    section: "psych",
    subtopic: "Social Sciences",
    topic: "Social Interaction",
    content: psychSocialInteraction.content,
    quiz: psychSocialInteraction.quiz,
  },
  {
    id: "psych-personality",
    section: "psych",
    subtopic: "Personality",
    topic: "Personality",
    content: psychPersonality.content,
    quiz: psychPersonality.quiz,
  },
  {
    id: "psych-motivation",
    section: "psych",
    subtopic: "Motivation and Emotion",
    topic: "Motivation",
    content: psychMotivation.content,
    quiz: psychMotivation.quiz,
  },
  {
    id: "psych-emotion",
    section: "psych",
    subtopic: "Motivation and Emotion",
    topic: "Emotion",
    content: psychEmotion.content,
    quiz: psychEmotion.quiz,
  },
  {
    id: "psych-attitude",
    section: "psych",
    subtopic: "Motivation and Emotion",
    topic: "Attitude",
    content: psychAttitude.content,
    quiz: psychAttitude.quiz,
  },
  {
    id: "psych-psychological-disorders",
    section: "psych",
    subtopic: "Psychological Disorders",
    topic: "Psychological Disorders",
    content: psychPsychologicalDisorders.content,
    quiz: psychPsychologicalDisorders.quiz,
  },
  {
    id: "psych-stress",
    section: "psych",
    subtopic: "Motivation and Emotion",
    topic: "Stress",
    content: psychStress.content,
    quiz: psychStress.quiz,
  },
  {
    id: "psych-neurobiology-of-disorders",
    section: "psych",
    subtopic: "Psychological Disorders",
    topic: "Neurobiology of Psychological Disorders",
    content: psychNeurobiologyOfDisorders.content,
    quiz: psychNeurobiologyOfDisorders.quiz,
  }
];
