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

type MdxMetaEntry = Record<string, unknown>;

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

export const getAllPosts = (limit?: number) => {
  const allPosts = [
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
  return limit ? allPosts.slice(0, limit) : allPosts;
};

export function getPostsByLanguage(lang: PostLanguage) {
  return getAllPosts().filter((post) => post.lang === lang);
}
