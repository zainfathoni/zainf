import { Link } from "@remix-run/react";
import type { MdxAttributes, MdxModule, Post } from "~/models/posts";
import { formatDate } from "~/utils/format-date";
import { ArrowLeftIcon } from "./Icons";

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
    <>
      <Link
        to="../"
        aria-label="Go back to articles"
        className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
      >
        <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      </Link>
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
    </>
  );
}
