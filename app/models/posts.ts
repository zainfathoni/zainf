import * as postAiToolsSweGrowthApr5Apr122026 from "../routes/blog.ai-tools-swe-growth-apr-5-apr-12-2026.mdx";
import * as postAiToolsSweGrowthMar30Apr52026 from "../routes/blog.ai-tools-swe-growth-mar-30-apr-5-2026.mdx";
import * as post20260215AiToolsDigestWeek2 from "../routes/blog.2026-02-15.ai-tools-digest-week-2.mdx";
import * as aiToolsSwegrowthSummaryFeb4 from "../routes/blog.ai-tools-swe-growth-feb-4-feb-11-2026.mdx";
import * as aiToolsSwegrowthSummary from "../routes/blog.ai-tools-swe-growth-summary-jan-25-feb-11-2026.mdx";
import * as projectTransformers from "../routes/blog.project-transformers-building-personal-ai-army.mdx";
import * as reactDomJsx from "../routes/blog.react-dom-jsx.mdx";

import * as postAiToolsSweGrowthFeb15Feb222026 from "../routes/blog.ai-tools-swe-growth-feb-15-feb-22-2026.mdx";
import * as postAiToolsSweGrowthFeb23Mar12026 from "../routes/blog.ai-tools-swe-growth-feb-23-mar-1-2026.mdx";
import * as postAiToolsSweGrowthMar2Mar82026 from "../routes/blog.ai-tools-swe-growth-mar-2-mar-8-2026.mdx";
import * as postAiToolsSweGrowthMar9Mar162026 from "../routes/blog.ai-tools-swe-growth-mar-9-mar-16-2026.mdx";
import * as postAiToolsSweGrowthMar23Mar292026 from "../routes/blog.ai-tools-swe-growth-mar-23-mar-29-2026.mdx";
import * as postAiToolsSweGrowthMar16Mar222026 from "../routes/blog.ai-tools-swe-growth-mar-16-mar-22-2026.mdx";
import * as postAiArmsRaceDefensiveProgramming20260403 from "../routes/blog.ai-arms-race-defensive-programming-2026-04-03.mdx";

type MdxMetaEntry = Record<string, unknown>;

import * as postAiToolsSweGrowthApr12Apr202026 from "../routes/blog.ai-tools-swe-growth-apr-12-apr-20-2026.mdx";
import * as postAiToolsSweGrowthApr20Apr262026 from "../routes/blog.ai-tools-swe-growth-apr-20-apr-26-2026.mdx";
import * as postAiToolsSweGrowthApr26May32026 from "../routes/blog.ai-tools-swe-growth-apr-26-may-3-2026.mdx";
import * as postAiToolsSweGrowthMay3May102026 from "../routes/blog.ai-tools-swe-growth-may-3-may-10-2026.mdx";
import * as postAiToolsSweGrowthMay10May172026 from "../routes/blog.ai-tools-swe-growth-may-10-may-17-2026.mdx";
import * as postAiToolsSweGrowthMay17May242026 from "../routes/blog.ai-tools-swe-growth-may-17-may-24-2026.mdx";
import * as postAiToolsSweGrowthMay24Jun12026 from "../routes/blog.ai-tools-swe-growth-may-24-jun-1-2026.mdx";
import * as postAiToolsSweGrowthJun1Jun72026 from "../routes/blog.ai-tools-swe-growth-jun-1-jun-7-2026.mdx";
import * as postSeGrowthHidupSehatApr10Apr242026 from "../routes/blog.se-growth-hidup-sehat-apr-10-apr-24-2026.mdx";
import * as postSeGrowthHidupSehatApr24May82026 from "../routes/blog.se-growth-hidup-sehat-apr-24-may-8-2026.mdx";
import * as postSeGrowthHidupSehatMay8May222026 from "../routes/blog.se-growth-hidup-sehat-may-8-may-22-2026.mdx";
import * as postSeGrowthHidupSehatMay22May302026 from "../routes/blog.se-growth-hidup-sehat-may-22-may-30-2026.mdx";
import * as postSeGrowthHidupSehatMay30Jun132026 from "../routes/blog.se-growth-hidup-sehat-may-30-jun-13-2026.mdx";
export type MdxAttributes = { meta: MdxMetaEntry[] };

export type MdxModule = {
  filename?: string;
  attributes: MdxAttributes;
};

export type PostLanguage = "en" | "id";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  lang: PostLanguage;
};

type ExtractedPostAttributes = Omit<Post, "slug">;

function getMetaValue(
  attributes: MdxAttributes,
  predicate: (entry: MdxMetaEntry) => boolean,
  key: string,
) {
  return attributes.meta.find(predicate)?.[key];
}

function parseRequiredMetaString(value: unknown, name: string) {
  if (typeof value === "string" && value.trim() !== "") {
    return value;
  }

  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return value.toISOString().slice(0, 10);
  }

  throw new Error(`Missing or invalid blog post ${name} metadata`);
}

function parsePostLanguage(value: unknown): PostLanguage {
  if (value === "en" || value === "id") {
    return value;
  }

  throw new Error(
    'Missing or invalid blog post lang metadata. Expected a meta entry like `{ lang: "en" }` or `{ lang: "id" }`.',
  );
}

export function extractPostAttributes(
  attributes: MdxAttributes,
): ExtractedPostAttributes {
  return {
    title: parseRequiredMetaString(
      getMetaValue(attributes, (entry) => typeof entry.title !== "undefined", "title"),
      "title",
    ),
    description: parseRequiredMetaString(
      getMetaValue(
        attributes,
        (entry) => entry.name === "description",
        "content",
      ),
      "description",
    ),
    date: parseRequiredMetaString(
      getMetaValue(attributes, (entry) => typeof entry.date !== "undefined", "date"),
      "date",
    ),
    lang: parsePostLanguage(
      getMetaValue(attributes, (entry) => typeof entry.lang !== "undefined", "lang"),
    ),
  };
}

function getSlugFromFilename(filename?: string) {
  if (!filename) {
    return;
  }

  return filename
    .replace(/^blog\./, "")
    .replace(/\.mdx?$/, "")
    // React Router flat-routes use dots as path separators in route filenames.
    // Normalize post slugs accordingly so links match generated routes.
    .replace(/\./g, "/");
}

function getSlugFromMetadata(attributes: MdxAttributes) {
  const canonicalUrl = getMetaValue(
    attributes,
    (entry) => entry.property === "og:url",
    "content",
  );

  if (typeof canonicalUrl !== "string") {
    return;
  }

  try {
    const { pathname } = new URL(canonicalUrl);
    if (pathname.startsWith("/blog/")) {
      return pathname.replace(/^\/blog\//, "");
    }
  } catch {
    // Ignore invalid URLs and continue to regex fallback.
  }

  const pathMatch = canonicalUrl.match(/\/blog\/(.+)$/);
  return pathMatch?.[1];
}

export function getPostFromMdxModule(mod: MdxModule): Post {
  const slug = getSlugFromFilename(mod.filename) ?? getSlugFromMetadata(mod.attributes);

  if (!slug) {
    throw new Error("Unable to derive blog post slug from MDX module metadata");
  }

  return {
    slug,
    ...extractPostAttributes(mod.attributes),
  };
}

function sortPostsByDateDescending(posts: Post[]) {
  return [...posts].sort(
    (postA, postB) =>
      new Date(postB.date).getTime() - new Date(postA.date).getTime(),
  );
}

export const getAllPosts = (limit?: number) => {
  const allPosts = [
    getPostFromMdxModule(postSeGrowthHidupSehatMay30Jun132026),
    getPostFromMdxModule(postAiToolsSweGrowthJun1Jun72026),
    getPostFromMdxModule(postSeGrowthHidupSehatMay22May302026),
    getPostFromMdxModule(postSeGrowthHidupSehatMay8May222026),
    getPostFromMdxModule(postSeGrowthHidupSehatApr24May82026),
    getPostFromMdxModule(postAiToolsSweGrowthMay24Jun12026),
    getPostFromMdxModule(postAiToolsSweGrowthMay17May242026),
    getPostFromMdxModule(postAiToolsSweGrowthMay10May172026),
    getPostFromMdxModule(postAiToolsSweGrowthMay3May102026),
    getPostFromMdxModule(postAiToolsSweGrowthApr26May32026),
    getPostFromMdxModule(postSeGrowthHidupSehatApr10Apr242026),
    getPostFromMdxModule(postAiToolsSweGrowthApr20Apr262026),
    getPostFromMdxModule(postAiToolsSweGrowthApr12Apr202026),
    getPostFromMdxModule(postAiToolsSweGrowthApr5Apr122026),
    getPostFromMdxModule(postAiArmsRaceDefensiveProgramming20260403),
    getPostFromMdxModule(postAiToolsSweGrowthMar30Apr52026),
    getPostFromMdxModule(postAiToolsSweGrowthMar23Mar292026),
    getPostFromMdxModule(postAiToolsSweGrowthMar16Mar222026),
    getPostFromMdxModule(postAiToolsSweGrowthMar9Mar162026),
    getPostFromMdxModule(postAiToolsSweGrowthMar2Mar82026),
    getPostFromMdxModule(postAiToolsSweGrowthFeb23Mar12026),
    getPostFromMdxModule(postAiToolsSweGrowthFeb15Feb222026),
    getPostFromMdxModule(projectTransformers),
    getPostFromMdxModule(post20260215AiToolsDigestWeek2),
    getPostFromMdxModule(aiToolsSwegrowthSummaryFeb4),
    getPostFromMdxModule(aiToolsSwegrowthSummary),
    getPostFromMdxModule(reactDomJsx),
  ];
  const sortedPosts = sortPostsByDateDescending(allPosts);
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
};

export function getPostsByLanguage(lang: PostLanguage) {
  return getAllPosts().filter((post) => post.lang === lang);
}
