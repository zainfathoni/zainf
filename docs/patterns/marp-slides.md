# Marp Slide Creation Patterns

A comprehensive guide to creating consistent, professional presentations using Marp and Markdown.

## Front Matter Configuration

All Marp presentations start with this standard configuration:

```yaml
---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
marp: true
---
```

This configuration provides:

- **theme: gaia** - Clean, minimal theme
- **\_class: lead** - Centered title slide styling
- **paginate: true** - Enable slide numbering
- **backgroundColor** - White background for consistency
- **backgroundImage** - Subtle default background pattern
- **marp: true** - Activate Marp syntax

---

## Standard Presentation Flow

Recommended structure for most presentations (7-45 slides):

1. **Title Slide** - Main title + subtitle + image
2. **Introduction/About** - Personal/speaker context
3. **Agenda** - What the audience will learn
4. **Main Content** - 3-8 topic sections with variations
5. **Demo** (if applicable) - Live coding or interactive section
6. **Key Takeaways** - Summary of main points
7. **Thank You** - Contact info + Q&A

---

## Slide Templates

### 1. Title Slide

```markdown
---

# Main Title Here

Subtitle or tagline describing the talk

![w:200](assets/qr-code.png)

<!-- Optional: Speaker notes about opening -->
```

**Best Practices:**

- Keep title concise (1-2 lines max)
- Use subtitle for context or tagline
- Optional QR code (200px width)
- No speaker notes needed (you'll establish context on intro slide)

**Examples:**

- "# Be a **10% Engineer** with AI"
- "# Think in JS, Code in Python — with AI"
- "# Vibe Coding vs AI-Assisted Engineering"

---

### 2. Introduction/About Slide

```markdown
## 👋 Introduction

![bg left:33%](assets/zain-1280.jpeg)

<https://www.zainfathoni.com/about>

- :round_pushpin: Jember → Bandung → :singapore: SG → Jogja
- :hammer_and_wrench: Backend → Manager → Frontend → Fullstack
- :robot: AI Enthusiast → MCP Learner
```

**Best Practices:**

- Use left-aligned background image (33% width)
- Include website link as clickable URL
- Show journey progression (location, role/tech, focus)
- Use 3-4 bullet points max
- Include emoji in each bullet for visual rhythm

**Bilingual Variant (Indonesian):**

```markdown
## Perkenalan

[Same structure with Indonesian translations]
```

---

### 3. Agenda Slide

```markdown
## 📚 Agenda

1. Why this matters **now**
2. What AI changes (and what it doesn't)
3. **Habits** to unlock efficiency
4. **Pitfalls** to avoid
5. Your **action plans**

→ **North star:** 10% time = 100% output
```

**Best Practices:**

- Use numbered list (not bullets)
- Bold key concepts/keywords
- Limit to 4-6 items
- Optional footer with context/north star
- Use emoji in heading for visual consistency
- Sets expectations for the rest of the talk

**Variations:**

- "## Agenda" (simple)
- "## 🗺️ Today's Journey" (themed)
- "## 📚 Agenda" (with emoji)

---

### 4. Main Content Slides

#### Section Heading Slide

```markdown
## 🧩 From Syntax → Semantics

We used to learn **how to write code.**
Now we can focus on **how to think code.**
```

**Best Practices:**

- Start major sections with conceptual slides
- Use emoji for visual identity
- Bold key terms
- Keep text minimal (3-4 lines max)

#### Content with Image (Right Side)

```markdown
## 📊 The Data

![bg right:40%](assets/working-on-the-train.png)

**4,867 developers:** AI coding assistants → **+26% more PRs per week**

**But:** Experienced devs with AI → **19% slower** on issues

**Why?** They added AI to old workflows instead of redesigning them.

→ **Leverage trumps brute force.**
```

**Image Positioning Options:**

- `![bg left:33%](assets/image.jpg)` - Left side, 33% width
- `![bg right:40%](assets/image.jpg)` - Right side, 40% width
- `![bg right:50%](assets/image.jpg)` - Right side, 50% width
- `![bg right:60%](assets/image.jpg)` - Right side, 60% width

#### Content with Comparison Table

```markdown
## ⏰ Why Now?

| Before AI                    | With AI                         |
| ---------------------------- | ------------------------------- |
| Easy tasks → Still manual    | Easy tasks → Trivial            |
| Hard tasks → Grind it out    | Hard tasks → Manageable         |
| Impossible tasks → Don't try | Impossible tasks → The new hard |

→ This inversion means **efficiency matters more than ever**
```

**Best Practices:**

- Use for side-by-side comparisons
- Keep rows concise
- Use arrow notation (`→`) to conclude comparisons

#### Concept Definition Slide

```markdown
## 💡 What is 10% Engineer?

> 10% engineer is a **10x engineer** who has **high degree of efficiency** thus
> only requiring to work 10% of the time to accomplish similar result expected out of them.

- <https://newsletter.lwastuargo.com/p/what-is-10-engineer>
```

**Best Practices:**

- Use block quote for definition
- Include attribution link
- Keep supporting bullets minimal
- Use emoji in heading

#### List with Emoji Bullets

```markdown
## 🔑 3 Core Habits to Unlock Efficiency

1. **Identify** leverage points (where does your time go?)
2. **Automate** with AI (build your stack)
3. **Measure** & iterate (track what matters)

→ Small wins compound into 10% engineer results
```

**Best Practices:**

- Bold the key action/concept first
- Provide concise explanation
- Include optional concluding arrow statement
- Use emoji in heading for consistency

---

### 5. Case Study/Example Slides

```markdown
## 🐛 Case Study: The Never Ending Bug

**What happened:**

- Team used AI to generate a new add-on module
- Code looked messy, but tests passed ✅
- Shipped without thorough review 🚀
- **Bug:** Add-ons weren't properly integrated 🔴
- **Result:** Never ending bug in production 💥

**The lesson:** Always review AI code line-by-line, especially feature & security-critical code
```

**Best Practices:**

- Use emoji in heading to categorize
- "What happened:" section (factual)
- "The lesson:" section (learning)
- Include transition emojis (✅, 🚀, 🔴, 💥)
- Keep story concise and relatable

---

### 6. Warning/Caution Slides

```markdown
## ⚠️ VIBE Coding vs VIBE Debugging

![bg right:50%](./assets/vibe-coding-vs-vibe-debugging.png)

**AI can help you write code fast**

But you MUST understand what you wrote

→ Otherwise: Welcome to VIBE Debugging (the nightmare)
```

**Best Practices:**

- Use ⚠️ emoji in heading
- Include supporting image if possible
- Keep message punchy (3-4 lines)
- Use arrow notation for conclusion
- Should be memorable/impactful

---

### 7. Code/Demo Slides

```markdown
## Step 1 — Live Code the Intent

**React Reference: `react_step_1_basic.jsx`**

> "Build a simple chat dashboard with state, rendering, and send button."
```

**Best Practices:**

- Use "Step N —" format for sequential demos
- Reference code files users can see
- Use block quote for the intent/goal
- Keep explanation minimal (detailed speaker notes instead)

---

### 8. Key Takeaways Slide

```markdown
## 💡 Key Takeaways

1. :surfer: **Vibe coding has value** - Great for learning and experimentation
2. :unlock: **Democratizing development** - Lowers barriers, builds intuition
3. :shield: **Know the stakes** - Low-stakes vibes, high-stakes discipline
4. :gear: **Production needs rigor** - Specs, tests, reviews, understanding
5. :brain: **Understand your mode** - Match approach to consequences
```

**Best Practices:**

- Numbered list (1-5 items)
- Each with emoji + **bold heading** + explanation
- Summarizes main talk points
- Actionable and memorable
- Often the last content slide before thank you

**Variations:**

- "## Kesimpulan" (Indonesian version)
- Use "Takeaway" vs "Key Takeaways" vs "Summary" flexibly

---

### 9. Thank You Slide

```markdown
## 🙏 Thank You

🔗 **Slides:**
[zainf.dev/talk-slug](https://zainf.dev/talk-slug)

![w:400](assets/talk-slug-qr.png)

**Questions?**
```

**Elements:**

- Title with emoji
- Slide URL (short domain)
- Optional QR code (400px width)
- "Questions?" prompt
- Sometimes includes GitHub repo link

**Variations:**

```markdown
## Thank You

**Zain Fathoni** [@zainfathoni](https://twitter.com/zainfathoni) •
[zainfathoni.com](https://zainfathoni.com)

🔗 **Slides:** [zainf.dev/talk-slug](https://zainf.dev/talk-slug)

🔗 **Demo code:** [github.com/zainfathoni/repo](https://github.com/zainfathoni/repo)

💡 "Memorable closing quote here."
```

---

### 10. Full-Background Image Slides

```markdown
##

![bg](assets/gibran-ai.jpg)
```

**Best Practices:**

- Use for visual breaks/full-screen impact
- Include minimal text (optional)
- Useful every 5-7 content slides
- Keep audience engaged visually

---

## Visual Elements Guide

### Background Images

**Positioning Syntax:**

```markdown
![bg left:PERCENT](path) # Left side
![bg right:PERCENT](path) # Right side
![bg](path) # Full background
```

**Common Widths:**

- `left:33%` - Left sidebar (optimal for intro)
- `right:40%` - Right side
- `right:50%` - Right half
- `right:56%` - Right side with more space
- `right:60%` - Right side dominant
- No percentage = full background

### Inline Images

**Sizing:**

```markdown
![w:200](path) # Width 200px (QR codes)
![w:400](path) # Width 400px (title images)
![h:350](path) # Height 350px
![h:400](path) # Height 400px
![h:800](path) # Height 800px
![w:1140](path) # Width 1140px (wide)
```

**Special Fit Options:**

```markdown
![bg contain](path) # Contain within slide
![bg fit](path) # Fit to screen
```

### Asset Organization

```text
public/assets/
├── zain-1280.jpeg              # Profile photo
├── iron-man.png                # Concept image
├── working-on-the-train.png
├── [talk-slug]-qr.png          # QR codes per talk
└── [concept-image].webp        # Various assets
```

**Naming Conventions:**

- Use descriptive names: `vibe-coding-vs-vibe-debugging.png`
- Use lowercase with hyphens
- Prefer WebP/AVIF for optimization
- Keep file sizes reasonable

---

## Emoji Reference

### Navigation & Location

| Emoji             | Usage                 |
| ----------------- | --------------------- |
| `:round_pushpin:` | Location/place        |
| `:arrow_right:`   | Next step/progression |
| `:singapore:`     | Country/region        |
| `:compass:`       | Direction/guidance    |

### Technical & Tools

| Emoji                        | Usage                |
| ---------------------------- | -------------------- |
| `:hammer_and_wrench:`        | Technical work/tools |
| `:robot:`                    | AI/automation        |
| `:gear:`                     | System/mechanics     |
| `:test_tube:`                | Testing/experiments  |
| `:calendar:`                 | Time/schedule        |
| `:desktop_computer:`         | Computer/digital     |
| `:link:`                     | Links/connections    |
| `:chart_with_upwards_trend:` | Growth/progress      |

### Status & Feedback

| Emoji                        | Usage                  |
| ---------------------------- | ---------------------- |
| `:white_check_mark:` or `✅` | Success/correct/done   |
| `:x:` or `❌`                | Wrong/failed/incorrect |
| `:warning:` or `⚠️`          | Warning/caution        |
| `:bulb:` or `💡`             | Idea/insight           |
| `:zap:` or `⚡`              | Fast/energy            |

### Concepts & Themes

| Emoji              | Usage                 |
| ------------------ | --------------------- |
| `:brain:`          | Thinking/mental model |
| `:shield:`         | Security/protection   |
| `:lock:`           | Locked/secure         |
| `:key:`            | Keys/access           |
| `:moneybag:`       | Cost/budget/savings   |
| `:rocket:` or `🚀` | Launch/start/speed    |
| `:art:`            | Design/styling        |
| `:books:`          | Learning/knowledge    |

### People & Interaction

| Emoji                   | Usage              |
| ----------------------- | ------------------ |
| `:busts_in_silhouette:` | Team/people        |
| `:teacher:`             | Teaching/guidance  |
| `:pilot:`               | Control/leadership |
| `:cowboy_hat_face:`     | Risk/reckless      |
| `:pray:`                | Thank you/closing  |

**Usage Pattern:**

- Lead each bullet point with an emoji
- Use same emoji in heading and bullets for visual consistency
- Prefer emojis over pure text for scannability

---

## Speaker Notes Conventions

### Basic Structure

```markdown
<!--
Speaker notes:
Content here
-->
```

### Advanced Structure

```markdown
<!--
TIMING: 45-60 seconds

SPEAKER NOTES (Bahasa Indonesia):
Indonesian text here

TECHNICAL DEPTH:
Technical context and details

ENGAGEMENT TIP:
How to engage audience

STORYTELLING:
Narrative flow guidance

ACTION:
Specific steps to take
-->
```

### When to Use Extended Notes

**Use extended speaker notes (with categories) for:**

- Complex topics requiring explanation
- Live demos (use ACTION section)
- Interactive sections (use ENGAGEMENT TIP)
- Talks with both English and Bilingual content

**Keep notes brief for:**

- Simple content slides
- Visual-heavy slides
- Agenda and transition slides

### Note Categories

| Category            | Purpose                    | Length    |
| ------------------- | -------------------------- | --------- |
| **TIMING**          | How long to spend on slide | 1 line    |
| **SPEAKER NOTES**   | What to say to audience    | Variable  |
| **TECHNICAL DEPTH** | Background context         | 2-3 lines |
| **ENGAGEMENT TIP**  | Audience interaction       | 2-3 lines |
| **STORYTELLING**    | Narrative guidance         | 2-3 lines |
| **ACTION**          | Demo steps or exercises    | Variable  |

---

## Content Organization

### Text Emphasis

```markdown
**Bold** for key terms and emphasis
_Italic_ for secondary emphasis (rare)
`Code` for technical terms and syntax

> Block quotes for key insights or definitions
```

**Example:**

```markdown
**AI can help you write code fast**

But you MUST understand what you wrote

→ Otherwise: Welcome to VIBE Debugging
```

### List Types

**Numbered Lists (for sequences/agendas):**

```markdown
1. First step
2. Second step
3. Third step
```

**Bulleted Lists (for features/points):**

```markdown
- Point one
- Point two
- Point three
```

**Emoji Bullets (for emphasis):**

```markdown
- :rocket: Fast execution
- :shield: Secure by default
- :brain: Intelligent design
```

### Code Blocks

**JavaScript/React Example:**

```jsx
<App>
  <Header title="Chat Dashboard" />
  <MessageList messages={messages} />
  <InputBox onSend={handleSend} />
</App>
```

**Python Example:**

```python
import streamlit as st

st.title("Chat Dashboard")
messages = st.session_state.get("messages", [])
```

**Dialogue/Narrative:**

```text
Me: "Fetch some data, map over it, display the names."
AI: *Writes Python code*
```

### Tables

**Comparison Table:**

```markdown
| Before AI | With AI |
|-----------|---------|
| Took 3 hours | Takes 30 minutes |
| Manual process | Automated |
````

**Feature Matrix:**

```markdown
| Aspect   | Vibe Coding | AI-Assisted Engineering |
| -------- | ----------- | ----------------------- |
| Use Case | Learning    | Production              |
| Risk     | Low stakes  | High stakes             |
| Review   | Minimal     | Rigorous                |
```

### Symbols & Notation

```markdown
→ Shows conclusion or results ("leads to", "therefore")

- Marks generated or automatic output
  > Indicates block quote or special attention
  > » Alternative to bullet point
  > ... Indicates continuation or trailing off
```

---

## Bilingual Content Patterns

### English to Indonesian Mapping

| English       | Indonesian    |
| ------------- | ------------- |
| Introduction  | Perkenalan    |
| Thank You     | Terima Kasih  |
| Agenda        | Agenda (same) |
| Key Takeaways | Kesimpulan    |
| Questions     | Pertanyaan    |

### Mixed Language Presentations

```markdown
## :robot: 10% Engineer\*

\*10% engineer adalah seorang 10x engineer...
```

### Speaker Notes in Multiple Languages

```markdown
<!--
SPEAKER NOTES (Bahasa Indonesia):
Jelaskan konsep ini dalam Bahasa Indonesia

SPEAKER NOTES (English):
Explain this concept in English

(Use whichever is appropriate)
-->
```

---

## Typography & Formatting Best Practices

### Heading Hierarchy

- `#` - Title slide only (never use on content slides)
- `##` - Main slide titles (use consistently)
- `###` - Subsection titles (when needed)
- Don't go deeper than 3 levels

### Line Breaks

```markdown
Main idea

Supporting point 1
Supporting point 2

→ Conclusion or takeaway
```

Use blank lines to create visual rhythm and group related ideas.

### Key Formatting Patterns

#### Pattern 1: Concept + Explanation

```markdown
## 🎯 Concept Name

Definition or key insight

- Bullet point 1
- Bullet point 2
```

#### Pattern 2: Problem + Solution

```markdown
## Problem Identified

**Current situation**

Details here

→ **Solution:** How to fix it
```

#### Pattern 3: Before + After

```markdown
**Before:** Old way

**After:** New way

→ **Result:** What improved
```

---

## Best Practices Checklist

Before finalizing each presentation, check:

### Content Quality

- [ ] Agenda matches actual content covered
- [ ] Title slide clearly conveys talk purpose
- [ ] Intro slide establishes credibility
- [ ] Conclusion/takeaways summarize key points
- [ ] Thank you slide has clear call-to-action

### Visual Consistency

- [ ] All slides use standard front matter config
- [ ] Emoji usage is consistent throughout
- [ ] Background images are positioned correctly
- [ ] Image assets are optimized
- [ ] Font sizes are readable (test on projector)

### Accessibility & Readability

- [ ] Text has sufficient contrast with background
- [ ] No slides with only images (provide captions)
- [ ] Code examples have proper syntax highlighting
- [ ] Links are all functional
- [ ] Slide text is scannable (not paragraphs)

### Speaker Preparation

- [ ] Speaker notes are comprehensive for complex topics
- [ ] Timing guidance is provided
- [ ] Demo steps are clearly outlined
- [ ] Engagement tips help with audience interaction
- [ ] Narrative flow is clear

### Technical

- [ ] All asset paths are relative (`assets/...`)
- [ ] Image formats are optimized (WebP/AVIF preferred)
- [ ] No broken links or references
- [ ] QR codes are functional
- [ ] Presentation tested in Marp CLI

### Meta

- [ ] Slide count is appropriate for time available
- [ ] Talk slug is short and memorable
- [ ] GitHub repo link is included (if applicable)
- [ ] QR code generated for slide URL
- [ ] Presentation stored in `/public/` directory

---

## File Structure & Naming

### Directory Organization

```text
public/
├── be-a-10%-engineer-with-ai.md
├── vibe-coding-vs-ai-assisted-engineering.md
├── think-in-js-code-in-python.md
├── reliable-tests-with-ai.md
├── paket-hemat-claude-code.md
├── mcp-fundamentals.md
└── assets/
    ├── zain-1280.jpeg                           # Personal photo
    ├── iron-man.png                             # Concept image
    ├── be-a-10%-engineer-qr.png
    ├── vibe-coding-vs-ai-assisted-engineering-qr.png
    ├── [other-specific-assets].webp
```

### Naming Conventions

**Markdown Files:**

- Use lowercase with hyphens: `my-talk-title.md`
- Match directory slug: `zainf.dev/my-talk-title`
- Include concept keywords for searchability

**Asset Files:**

- Use lowercase with hyphens
- Be descriptive: `vibe-coding-vs-vibe-debugging.png` (not `image1.png`)
- QR codes: `[talk-slug]-qr.png`
- Prefer WebP/AVIF over PNG for photos

---

## Quick Reference Templates

### Minimal Slide (Text Only)

```markdown
## 📌 Concept

Key insight or definition here

- Supporting point
- Another detail

→ Main conclusion
```

### Image + Text Slide

```markdown
## 📌 Concept

![bg right:40%](assets/concept.png)

- Point with background image
- Content flows around it
- Creates visual interest

→ Conclusion
```

### Comparison Slide

```markdown
## 📌 Before vs After

| Before  | After     |
| ------- | --------- |
| Old way | New way   |
| Manual  | Automated |

→ Transformation achieved
```

### Bulleted Deep Dive

```markdown
## 📌 Main Topic

**Subtopic 1**

- Detail A
- Detail B

**Subtopic 2**

- Detail C
- Detail D

→ Overall learning
```

---

## References & Resources

- [Marp Official](https://marp.app/)
- [Marp Syntax Reference](https://marpit.marp.app/markdown)
- [Gaia Theme Documentation](https://github.com/marp-team/marp-core/blob/main/docs/theme-css.md)
- [Emoji Reference](https://www.webfx.com/tools/emoji-cheat-sheet/)
- [Previous Talks](https://zainf.dev/talks) (for pattern reference)

---

## Markdown Formatting Conventions

When updating this document or creating new slides, follow the general markdown conventions documented in [Markdown Conventions](./markdown-conventions.md). This ensures consistency across all markdown files in the repository and avoids lint errors.
