import type { Post } from "./posts";

export const postTypeOptions = [
  { key: "ai-tools-digest", label: "AI Tools digests" },
  { key: "hidup-sehat-digest", label: "Hidup Sehat digests" },
  { key: "project-notes", label: "Project notes" },
  { key: "tutorial", label: "Tutorials" },
  { key: "essay", label: "Essays" },
] as const;

export type PostType = (typeof postTypeOptions)[number]["key"];
export type PostTypeFilter = PostType | "all";

export function normalizePostTypeFilter(value: string | null): PostTypeFilter {
  return postTypeOptions.find((option) => option.key === value)?.key ?? "all";
}

export function getPostType(slug: string): PostType {
  if (
    slug === "2026-02-15/ai-tools-digest-week-2" ||
    slug.startsWith("ai-tools-swe-growth-")
  ) {
    return "ai-tools-digest";
  }

  if (slug.startsWith("se-growth-hidup-sehat-")) {
    return "hidup-sehat-digest";
  }

  if (slug.startsWith("project-transformers-")) {
    return "project-notes";
  }

  if (slug === "react-dom-jsx") {
    return "tutorial";
  }

  return "essay";
}

export function filterPostsByType<T extends Pick<Post, "slug">>(
  posts: T[],
  type: PostTypeFilter,
): T[] {
  return type === "all"
    ? posts
    : posts.filter((post) => getPostType(post.slug) === type);
}
