import * as post20260215AiToolsDigestWeek2 from "../routes/blog.2026-02-15.ai-tools-digest-week-2.mdx";
import * as aiToolsSwegrowthSummaryFeb4 from "../routes/blog.ai-tools-swe-growth-feb-4-feb-11-2026.mdx";
import * as aiToolsSwegrowthSummary from "../routes/blog.ai-tools-swe-growth-summary-jan-25-feb-11-2026.mdx";
import * as reactDomJsx from "../routes/blog.react-dom-jsx.mdx";

import * as postAiToolsSweGrowthFeb15Feb222026 from "../routes/blog.ai-tools-swe-growth-feb-15-feb-22-2026.mdx";
export type MdxAttributes = { meta: Array<Record<string, any>> };

export type MdxModule = {
  filename: string;
  attributes: MdxAttributes;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export function extractPostAttributes(attributes: MdxAttributes) {
  return {
    title: attributes.meta.find((m) => m.title)?.title,
    description: attributes.meta.find((m) => m.name === "description")?.content,
    date: attributes.meta.find((m) => m.date)?.date,
    ...attributes.meta,
  };
}

export function getPostFromMdxModule(mod: MdxModule): Post {
  return {
    slug: mod.filename
      .replace(/^blog\./, "")
      .replace(/\.mdx?$/, "")
      // Remix flat-routes use dots as path separators in route filenames.
      // Normalize post slugs accordingly so links match generated routes.
      .replace(/\./g, "/"),
    ...extractPostAttributes(mod.attributes),
  };
}

export const getAllPosts = (limit?: number) => {
  const allPosts = [
    getPostFromMdxModule(postAiToolsSweGrowthFeb15Feb222026),
    getPostFromMdxModule(post20260215AiToolsDigestWeek2),
    getPostFromMdxModule(aiToolsSwegrowthSummaryFeb4),
    getPostFromMdxModule(aiToolsSwegrowthSummary),
    getPostFromMdxModule(reactDomJsx),
  ];
  return limit ? allPosts.slice(0, limit) : allPosts;
};
