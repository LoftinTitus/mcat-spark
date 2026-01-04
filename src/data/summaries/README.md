# Summaries Folder

This folder contains all MCAT summary content as individual markdown files.

## Structure
Each summary is a separate `.md` file named with the pattern: `{section}-{topic-slug}.md`

- **chem-**: Chemistry/Physics summaries
- **bio-**: Biology/Biochemistry summaries
- **psych-**: Psychology/Sociology summaries
- **cars-**: CARS (Critical Analysis and Reasoning Skills) summaries

## Adding New Summaries

1. Create a new `.md` file in this folder following the naming convention
2. Write your content in markdown format
3. Import it in `summaries-index.ts`:
   ```typescript
   import newSummaryContent from './summaries/section-topic.md?raw';
   ```
4. Add it to the summaries array with the appropriate metadata:
   ```typescript
   {
     id: "section-topic",
     section: "chem", // or "bio", "psych", "cars"
     topic: "Display Title",
     content: newSummaryContent,
   }
   ```

## File Format
Each markdown file should start with a main heading (##) and use standard markdown syntax for formatting.
