import * as reactDomJsx from "../routes/blog.react-dom-jsx.mdx";

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
    slug: mod.filename.replace(/^blog\./, "").replace(/\.mdx?$/, ""),
    ...extractPostAttributes(mod.attributes),
  };
}

export const getAllPosts = (limit?: number) => {
  const allPosts = [getPostFromMdxModule(reactDomJsx)];
  return limit ? allPosts.slice(0, limit) : allPosts;
};
