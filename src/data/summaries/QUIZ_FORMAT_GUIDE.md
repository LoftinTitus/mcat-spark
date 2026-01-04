# Quiz Format Guide

## How to Add Quizzes to Your Lesson Markdown Files

### Format

Add a quiz section at the bottom of your markdown file using this format:

```markdown
---

## Quiz

**Q1: Your first question here?**
A) First option
B) Second option
C) Third option *[CORRECT]
D) Fourth option
**Explanation:** Why the correct answer is right and why others are wrong.

**Q2: Your second question here?**
A) First option *[CORRECT]
B) Second option
C) Third option
D) Fourth option
**Explanation:** Detailed explanation of the answer.

**Q3: Your third question here?**
A) First option
B) Second option *[CORRECT]
C) Third option
D) Fourth option
**Explanation:** Explanation text here.

**Q4: Your fourth question here?**
A) First option
B) Second option
C) Third option
D) Fourth option *[CORRECT]
**Explanation:** Explanation text here.

**Q5: Your fifth question here?**
A) First option *[CORRECT]
B) Second option
C) Third option
D) Fourth option
**Explanation:** Explanation text here.
```

### Key Points

1. **Separator**: Use `---` followed by `## Quiz` to start the quiz section
2. **Question Format**: `**Q#: Question text?**` (bold with Q followed by number)
3. **Options**: Use `A)`, `B)`, `C)`, `D)` format
4. **Correct Answer**: Mark with `*[CORRECT]` after the correct option
5. **Explanation**: Use `**Explanation:**` followed by your explanation text
6. **Spacing**: Add a blank line between each question block

### Tips

- Make sure each question has exactly 4 options (A-D)
- Mark exactly ONE option as correct per question
- Write clear, concise explanations
- Questions will automatically appear in the UI below the lesson content
- Students will see instant feedback with green ✓ for correct and red ✗ for incorrect

### Example in Context

```markdown
## 14. Summary — Key Takeaways
- Your key points here
- More key points

---

## Quiz

**Q1: What is the powerhouse of the cell?**
A) Nucleus
B) Mitochondria *[CORRECT]
C) Ribosome
D) Golgi apparatus
**Explanation:** The mitochondria produces ATP through cellular respiration, earning it the nickname "powerhouse of the cell."

**Q2: Which organelle is responsible for protein synthesis?**
A) Mitochondria
B) Nucleus
C) Ribosome *[CORRECT]
D) Lysosome
**Explanation:** Ribosomes translate mRNA into proteins through the process of translation.
```

That's it! The parser will automatically extract your quiz and display it beautifully in the UI.
