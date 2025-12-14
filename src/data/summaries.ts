export interface Summary {
  id: string;
  section: "chem" | "bio" | "psych" | "cars";
  topic: string;
  content: string;
}

export const summaries: Summary[] = [
  {
    id: "chem-acids-bases",
    section: "chem",
    topic: "Acids and Bases",
    content: `## Acids and Bases

### Key Definitions
- **Arrhenius**: Acids produce H⁺, bases produce OH⁻
- **Brønsted-Lowry**: Acids are proton donors, bases are proton acceptors
- **Lewis**: Acids are electron pair acceptors, bases are electron pair donors

### Strong vs Weak
**Strong Acids** (completely dissociate):
- HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄

**Strong Bases**:
- Group 1 hydroxides (NaOH, KOH)
- Heavy Group 2 hydroxides (Ca(OH)₂, Ba(OH)₂)

### Important Equations
\`\`\`
pH = -log[H⁺]
pOH = -log[OH⁻]
pH + pOH = 14 (at 25°C)
Ka × Kb = Kw = 10⁻¹⁴
\`\`\`

### Henderson-Hasselbalch
\`\`\`
pH = pKa + log([A⁻]/[HA])
\`\`\`
Use for buffer calculations. Buffer works best when pH = pKa ± 1.

### Titration Curves
- **Equivalence point**: moles acid = moles base
- **Half-equivalence point**: pH = pKa (for weak acid)
- Strong acid + strong base → pH 7 at equivalence
- Weak acid + strong base → pH > 7 at equivalence`
  },
  {
    id: "chem-thermodynamics",
    section: "chem",
    topic: "Thermodynamics",
    content: `## Thermodynamics

### First Law
Energy is conserved: ΔU = q + w
- q = heat
- w = work = -PΔV (for expansion)

### Enthalpy (H)
- ΔH < 0: exothermic
- ΔH > 0: endothermic
- ΔH°rxn = Σ ΔH°f(products) - Σ ΔH°f(reactants)

### Entropy (S)
Measure of disorder
- ΔS > 0: more disorder (favorable)
- Increases with: more moles of gas, higher T, phase transitions (s→l→g)

### Gibbs Free Energy
\`\`\`
ΔG = ΔH - TΔS
\`\`\`
- ΔG < 0: spontaneous
- ΔG > 0: non-spontaneous
- ΔG = 0: equilibrium

### Relationship to K
\`\`\`
ΔG° = -RT ln K
\`\`\`
- K > 1: ΔG° < 0 (products favored)
- K < 1: ΔG° > 0 (reactants favored)`
  },
  {
    id: "bio-cell-respiration",
    section: "bio",
    topic: "Cellular Respiration",
    content: `## Cellular Respiration

### Overview
Glucose + O₂ → CO₂ + H₂O + ATP

Total yield: ~30-32 ATP per glucose

### 1. Glycolysis (Cytoplasm)
- Glucose → 2 Pyruvate
- Net: 2 ATP + 2 NADH
- Anaerobic (doesn't require O₂)
- Regulated by PFK-1 (rate-limiting step)

### 2. Pyruvate Oxidation (Mitochondrial Matrix)
- Pyruvate → Acetyl-CoA + CO₂
- Produces 2 NADH (per glucose)

### 3. Citric Acid Cycle (Matrix)
Per glucose:
- 2 ATP (via GTP)
- 6 NADH
- 2 FADH₂
- 4 CO₂

### 4. Electron Transport Chain (Inner Membrane)
- NADH → 2.5 ATP each
- FADH₂ → 1.5 ATP each
- O₂ is final electron acceptor → H₂O

### Key Points
- Cyanide inhibits Complex IV
- Oligomycin inhibits ATP synthase
- Uncouplers (DNP) allow H⁺ leak → heat, no ATP`
  },
  {
    id: "bio-genetics",
    section: "bio",
    topic: "Genetics Essentials",
    content: `## Genetics Essentials

### Central Dogma
DNA → RNA → Protein

### DNA Replication
- Semiconservative
- 5' to 3' synthesis
- Leading strand: continuous
- Lagging strand: Okazaki fragments
- Key enzymes: Helicase, Primase, DNA Pol III, Ligase

### Transcription
**Prokaryotes**: No processing needed
**Eukaryotes**: 
- 5' cap (7-methylguanosine)
- 3' poly-A tail
- Splicing (remove introns, keep exons)

### Translation
- Start codon: AUG (Met)
- Stop codons: UAA, UAG, UGA
- Wobble: 3rd position of codon less specific

### Mendelian Genetics
- Dominant masks recessive
- Law of Segregation: alleles separate in meiosis
- Law of Independent Assortment: genes on different chromosomes

### Non-Mendelian Patterns
- Incomplete dominance: heterozygote intermediate
- Codominance: both alleles expressed (blood types)
- X-linked: more common in males
- Epistasis: one gene affects another`
  },
  {
    id: "psych-learning",
    section: "psych",
    topic: "Learning and Memory",
    content: `## Learning and Memory

### Classical Conditioning (Pavlov)
- Unconditioned stimulus (US) → Unconditioned response (UR)
- US + Neutral stimulus → Conditioned stimulus (CS)
- CS → Conditioned response (CR)

**Key Terms:**
- Acquisition: learning the association
- Extinction: CR fades without US
- Spontaneous recovery: CR returns after rest
- Generalization: respond to similar stimuli
- Discrimination: distinguish between stimuli

### Operant Conditioning (Skinner)
| Type | Effect | Example |
|------|--------|---------|
| Positive reinforcement | Add good → ↑ behavior | Give treat |
| Negative reinforcement | Remove bad → ↑ behavior | Stop alarm |
| Positive punishment | Add bad → ↓ behavior | Give detention |
| Negative punishment | Remove good → ↓ behavior | Take phone |

### Memory Types
**Sensory Memory**
- Iconic (visual): ~0.5 sec
- Echoic (auditory): ~3-4 sec

**Short-term/Working Memory**
- ~20 sec, 7±2 items
- Maintenance rehearsal keeps info

**Long-term Memory**
- Explicit (declarative): episodic, semantic
- Implicit (non-declarative): procedural, priming`
  },
  {
    id: "psych-social",
    section: "psych",
    topic: "Social Psychology",
    content: `## Social Psychology

### Attribution
**Internal (dispositional)**: behavior due to personality
**External (situational)**: behavior due to circumstances

**Fundamental Attribution Error**: Overattribute others' behavior to internal factors

**Self-serving bias**: Attribute success to self, failure to situation

### Social Influence
**Conformity** (Asch): changing behavior to match group
**Obedience** (Milgram): following authority
**Compliance**: agreeing to requests

Techniques:
- Foot-in-the-door: small request → big request
- Door-in-the-face: big request (refused) → small request

### Group Dynamics
- **Social facilitation**: perform better on easy tasks with others
- **Social loafing**: less effort in groups
- **Groupthink**: desire for harmony → poor decisions
- **Deindividuation**: lose self-awareness in crowds

### Attitudes
**Components**: Affective, Behavioral, Cognitive (ABC)

**Cognitive Dissonance**: discomfort from conflicting attitudes/behaviors
→ Change attitude or behavior to reduce

### Stereotypes, Prejudice, Discrimination
- Stereotype: cognitive (beliefs)
- Prejudice: affective (feelings)
- Discrimination: behavioral (actions)`
  },
  {
    id: "cars-strategy",
    section: "cars",
    topic: "CARS Strategy Guide",
    content: `## CARS Strategy Guide

### Reading Strategy
1. **First read**: Get main idea, author's tone
2. **Don't memorize**: You can look back
3. **Mark key points**: Topic sentences, conclusions
4. **~4 min per passage**, ~10 min total per passage set

### Main Idea Questions
- What is the author arguing?
- Look at intro and conclusion
- Must be supported throughout passage

### Detail Questions
- Look back at passage
- Answer will be directly stated
- Watch for paraphrasing

### Inference Questions
- Not directly stated but logically follows
- Must be supported by evidence
- Don't go too far beyond text

### Author's Tone/Attitude
Clues:
- Word choice (connotation)
- Treatment of opposing views
- Use of qualifiers

Common tones: Critical, Skeptical, Supportive, Objective, Dismissive

### Strengthen/Weaken Questions
1. Identify the argument
2. Find the conclusion
3. Find the evidence/premises
4. Look for assumptions
5. Choose answer that supports or attacks

### Common Wrong Answer Types
- Too extreme
- Out of scope
- Opposite of correct
- Half right/half wrong
- True but doesn't answer question`
  }
];
