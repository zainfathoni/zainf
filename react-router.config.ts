import type { Config } from "@react-router/dev/config";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { vercelPreset } from "@vercel/react-router/vite";
import { conferences, meetups, podcasts } from "./app/models/talks";

const configDirectory = dirname(fileURLToPath(import.meta.url));
const postsModelFile = join(configDirectory, "app/models/posts.ts");

const staticRoutes = [
  "/",
  "/about",
  "/blog",
  "/projects",
  "/talks",
  "/uses",
  "/thank-you",
];

async function getBlogRoutesFromPostsModel() {
  const source = await readFile(postsModelFile, "utf8");

  const moduleByIdentifier = new Map<string, string>();
  for (const match of source.matchAll(
    /import\s+\*\s+as\s+(\w+)\s+from\s+"\.\.\/routes\/(blog\.[^"]+\.mdx?)";/g,
  )) {
    const identifier = match[1];
    const routeFilename = match[2];
    moduleByIdentifier.set(identifier, routeFilename);
  }

  const orderedIdentifiers = [...source.matchAll(/getPostFromMdxModule\((\w+)\)/g)]
    .map((match) => match[1])
    .filter((identifier) => identifier !== "mod");

  return orderedIdentifiers
    .map((identifier) => moduleByIdentifier.get(identifier))
    .filter((routeFilename): routeFilename is string => Boolean(routeFilename))
    .map((routeFilename) => {
      const slug = routeFilename
        .replace(/^blog\./, "")
        .replace(/\.mdx?$/, "")
        .replace(/\./g, "/");

      return `/blog/${slug}`;
    });
}

const talkRoutes = [...conferences, ...meetups, ...podcasts].map(
  (talk) => `/talks#${talk.slug}`,
);

export default {
  ssr: true,
  prerender: async () => {
    const blogRoutes = await getBlogRoutesFromPostsModel();

    // Fragment routes map to the same prerendered document path.
    const talkPageRoutes = talkRoutes.map((route) => route.split("#")[0]);

    return [...new Set([...staticRoutes, ...blogRoutes, ...talkPageRoutes])];
  },
  presets: [vercelPreset()],
} satisfies Config;
