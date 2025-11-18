# Markdown Conventions

General markdown formatting conventions for all markdown files in this repository. These conventions are enforced by `markdownlint` and help maintain consistency across the codebase.

## Blank Lines Around Structural Elements

Always add blank lines before and after these elements

- Headings (all levels: `#`, `##`, `###`, etc.)
- Fenced code blocks
- Lists (both ordered and unordered)
- Tables
- Block quotes

### Example:

Some text here

## Heading

More text here

### Subheading

- List item 1
- List item 2

Code block example:

```python
code_example = True
```

More text.

## Code Block Language Specification

Always specify the language for code blocks to enable syntax highlighting

**Good:**

```javascript
const x = 1;
```

**Bad (no language specified):**

```text
const x = 1;
```

### Common Languages:

- `javascript` / `js` - JavaScript
- `python` / `py` - Python
- `markdown` - Markdown
- `text` - Plain text
- `jsx` - React JSX
- `html` - HTML
- `css` - CSS
- `bash` / `shell` - Shell/Bash
- `json` - JSON
- `yaml` - YAML

## Emphasis vs Headings

Use proper heading syntax (`#`, `##`, `###`) instead of emphasis (`**text**`) for section titles. This maintains proper document structure for accessibility and tooling.

**Good:**

```text
## Section Title
```

**Bad:**

```text
**Section Title**
```

## List Formatting

Keep blank lines around lists to separate them from other content:

```text
Text before list

- Item 1
- Item 2
- Item 3

Text after list
```

## Table Formatting

Add blank lines before and after tables:

```text
Intro text

| Column | Header |
| ------ | ------ |
| Data   | Value  |

Following text
```

## Multiple Consecutive Blank Lines

Avoid multiple consecutive blank lines (max 1). Use single blank lines to separate logical sections.

**Good:**

```text
Some text

Another paragraph
```

**Bad:**

```text
Some text


Another paragraph
```

## URL Formatting

Wrap URLs in markdown link syntax instead of bare URLs. This improves readability and maintainability.

**Good:**

```text
[Visit Marp](https://marp.app/)
```

**Bad:**

```text
Visit https://marp.app/
```

## Line Length

Line length should be reasonable, but there's no strict limit. Aim for readability:

- Keep most lines under 100 characters
- Don't wrap lines unnecessarily (especially URLs and code examples)
- Prioritize readability over hitting a specific character count

## Ordered vs Unordered Lists

### Unordered Lists

Use unordered lists (`-`) for items with no inherent order:

```markdown
- Item A
- Item B
- Item C
```

### Ordered Lists

Use ordered lists (`1.`, `2.`, etc.) for steps or sequences:

```markdown
1. First step
2. Second step
3. Third step
```

## Block Quotes

Use block quotes (`>`) for important information, quotes, or callouts:

```markdown
> This is an important note that should stand out from the regular text.
```

## Inline Code vs Code Blocks

### Inline Code

Use backticks for single terms, file names, or short code snippets within text:

```markdown
Use the `git commit` command to save your changes.
```

### Code Blocks

Use fenced code blocks (triple backticks) for longer code examples:

````markdown
```javascript
function hello() {
  console.log("Hello, world!");
}
```
````

## Related Documents

- [Marp Slide Creation Patterns](./marp-slides.md) - Specific patterns for creating Marp presentations
