Regenerate Marp slides (HTML + PDF) from the markdown source.

## Steps

1. Run the Marp CLI to generate HTML:
   ```
   npx @marp-team/marp-cli public/agentic-engineering.md -o public/agentic-engineering.html
   ```

2. Run the Marp CLI to generate PDF (with local file access for images):
   ```
   npx @marp-team/marp-cli public/agentic-engineering.md -o public/agentic-engineering.pdf --allow-local-files
   ```

3. If Chrome DevTools MCP is available, reload the page and check for overflowing slides:
   - Navigate/reload the HTML file in Chrome
   - Run overflow detection script on all `section[id]` elements
   - Report any slides where `scrollHeight > clientHeight`

4. Report results: which files were generated and whether any slides overflow.
