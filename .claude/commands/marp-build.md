Regenerate Marp slides (HTML + PDF + og-image) from the markdown source.

The source file is passed as an argument (e.g. `public/fundamental-computer-science-ai-era.md`). If omitted, ask which deck under `public/*.md` to build.

## Steps

1. Run the Marp CLI to generate HTML:
   ```
   npx @marp-team/marp-cli <source>.md -o <source>.html
   ```

2. Run the Marp CLI to generate PDF (with local file access for images):
   ```
   npx @marp-team/marp-cli <source>.md -o <source>.pdf --allow-local-files
   ```

3. If the front matter declares an `image:` (og:image) URL, regenerate the og-image so it always matches the current title slide. Marp renders only the first slide when the output is a PNG. The output filename must match the basename in the `image:` URL:
   ```
   npx @marp-team/marp-cli <source>.md -o public/assets/<basename>.png --allow-local-files
   ```
   Never hand-edit og/meta tags in the generated HTML — they get overwritten on every build. Set them in the markdown front matter instead (`title`, `description`, `url`, `image`).

4. If Chrome DevTools MCP is available, reload the page and check for overflowing slides:
   - Navigate/reload the HTML file in Chrome
   - Run overflow detection script on all `section[id]` elements
   - Report any slides where `scrollHeight > clientHeight`

5. Report results: which files were generated and whether any slides overflow.
