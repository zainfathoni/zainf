import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@vercel/remix";
import { json } from "@vercel/remix";
import { ArrowLeftIcon } from "app/components/Icons";
import { Prose } from "app/components/Prose";
import { getArticleBySlug } from "app/models/articles";
import { formatDate } from "app/utils/format-date";

export function loader({ params }: LoaderFunctionArgs) {
  return json(getArticleBySlug(params.slug));
}

export default function ArticleLayout() {
  const {
    slug,
    attributes: { meta },
  } = useLoaderData<typeof loader>();
  return (
    <>
      <Link
        to="../"
        aria-label="Go back to articles"
        className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
      >
        <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      </Link>
      <article>
        <header className="flex flex-col">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {meta.title}
          </h1>
          <time
            dateTime={meta.date}
            className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
            <span className="ml-3">{formatDate(meta.date)}</span>
          </time>
        </header>
        <Prose className="mt-8">
          This is Zain Fathoni's article with slug {slug}
        </Prose>
      </article>
    </>
  );
}
