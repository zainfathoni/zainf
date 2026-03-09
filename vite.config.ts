import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    manifest: true,
  },
  resolve: {
    alias: {
      "~": resolve(rootDir, "app"),
      app: resolve(rootDir, "app"),
    },
  },
  plugins: [
    mdx({
      remarkPlugins: [
        remarkGfm as any,
        remarkFrontmatter as any,
        [remarkMdxFrontmatter as any, { name: "attributes" }],
      ],
      rehypePlugins: [rehypeHighlight as any],
    }),
    reactRouter(),
    tsconfigPaths({ loose: true }),
  ],
});
