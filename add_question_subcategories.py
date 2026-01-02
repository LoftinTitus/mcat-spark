import json

# Read the questions file
with open('src/data/questions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Define subcategory mappings based on question content
freestanding_subcategories = {
    "fs-1": "Acids & Bases",  # Henderson-Hasselbalch
    "fs-2": "Enzyme Kinetics",  # enzyme-catalyzed reaction
    "fs-3": "Cell Biology",  # cell cycle, DNA replication
    "fs-4": "Endocrine System",  # hormones, blood glucose
    "fs-5": "Learning & Conditioning",  # stimulus generalization
    "fs-6": "Emotion & Motivation",  # James-Lange theory
    "fs-7": "Amino Acids & Proteins",  # hydrophobic/charged amino acids
    "fs-8": "Amino Acids & Proteins",  # size-exclusion chromatography, protein structure
    "fs-9": "Enzyme Kinetics",  # sigmoidal curve, allosteric enzymes
    "fs-10": "Metabolism",  # feedback inhibition, metabolic pathway
    "fs-11": "DNA & RNA",  # melting temperature, GC content
    "fs-12": "DNA Replication",  # DNA polymerase
    "fs-13": "Gene Expression",  # promoter region, transcription
    "fs-14": "Gene Expression",  # splicing, introns/exons
    "fs-15": "Gene Expression",  # histone acetylation
    "fs-16": "Genetics",  # dihybrid cross
    "fs-17": "Genetics",  # meiosis, crossing over
    "fs-18": "Genetics",  # nonsense mutation
    "fs-19": "Molecular Biology Techniques",  # Southern blot
    "fs-20": "Evolution",  # natural selection
    "fs-21": "Metabolism",  # ATP
    "fs-22": "Carbohydrates",  # glycogen vs cellulose
    "fs-23": "Metabolism",  # β-oxidation, fatty acids
    "fs-24": "Metabolism",  # electron transport chain
    "fs-25": "Metabolism",  # glycolysis, PFK-1
}

# Add subcategories to freestanding questions
for question in data["freestanding"]:
    question_id = question["id"]
    if question_id in freestanding_subcategories:
        question["subcategory"] = freestanding_subcategories[question_id]

# Add subcategories to passage-based questions
# Passage 1: Enzyme Kinetics Study
if len(data["passages"]) > 0:
    passage1 = data["passages"][0]
    if passage1["id"] == "passage-1":
        passage1["subcategory"] = "Enzyme Kinetics"
        for q in passage1["questions"]:
            q["subcategory"] = "Enzyme Kinetics"

# Passage 2: Acid-Base Equilibrium
if len(data["passages"]) > 1:
    passage2 = data["passages"][1]
    if passage2["id"] == "passage-2":
        passage2["subcategory"] = "Acids & Bases"
        for q in passage2["questions"]:
            q["subcategory"] = "Acids & Bases"

# Write the updated data back to the file
with open('src/data/questions.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Successfully added subcategories to all questions!")
print(f"Updated {len(data['freestanding'])} freestanding questions")
print(f"Updated {len(data['passages'])} passages")
