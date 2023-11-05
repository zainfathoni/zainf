import type { MdxAttributes, MdxModule, Post } from "~/models/posts";
import { formatDate } from "~/utils/format-date";

function extractPostAttributes(attributes: MdxAttributes) {
  return {
    title: attributes.meta.find((m) => m.title)?.title,
    description: attributes.meta.find((m) => m.name === "description")?.content,
    date: attributes.meta.find((m) => m.date)?.date,
    ...attributes.meta,
  };
}

export function getPostFromMdxModule(mod: MdxModule): Post {
  return {
    slug: mod.filename.replace(/^blog\._post\./, "").replace(/\.mdx?$/, ""),
    title: mod.attributes.meta.find((m) => m.title)?.title,
    description: mod.attributes.meta.find((m) => m.name === "description")
      ?.content,
    date: mod.attributes.meta.find((m) => m.date)?.date,
    ...mod.attributes.meta,
  };
}

export function PostHeader(props: MdxAttributes) {
  const post = extractPostAttributes(props);
  return (
    <header className="flex flex-col">
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        {post.title}
      </h1>
      <time
        dateTime={post.date}
        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
      >
        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        <span className="ml-3">{formatDate(post.date)}</span>
      </time>
    </header>
  );
}
