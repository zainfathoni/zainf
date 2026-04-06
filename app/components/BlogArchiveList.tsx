import clsx from "clsx";
import { Link } from "react-router";
import type { Post, PostLanguage } from "~/models/posts";
import { formatDate } from "~/utils/format-date";
import { Card } from "./Card";
import { PostLanguageBadge } from "./PostLanguageBadge";

type ArchiveFilter = PostLanguage | "all";

const archiveFilters: Array<{ key: ArchiveFilter; label: string; to: string }> = [
  { key: "all", label: "All posts", to: "/blog" },
  { key: "en", label: "English", to: "/blog/en" },
  { key: "id", label: "Bahasa Indonesia", to: "/blog/id" },
];

function Excerpt({ post }: { post: Post }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <PostLanguageBadge lang={post.lang} className="relative z-10 mb-3" />
        <Card.Title to={`/blog/${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={post.date}
          className="md:hidden"
          decorate
        >
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={post.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(post.date)}
      </Card.Eyebrow>
    </article>
  );
}

export function BlogArchiveList({
  posts,
  currentFilter,
}: {
  posts: Post[];
  currentFilter: ArchiveFilter;
}) {
  return (
    <>
      <nav
        aria-label="Filter blog posts by language"
        className="mb-12 flex flex-wrap gap-3"
      >
        {archiveFilters.map((filter) => {
          const isActive = filter.key === currentFilter;

          return (
            <Link
              key={filter.key}
              to={filter.to}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "rounded-full px-3 py-1.5 text-sm font-medium transition",
                isActive
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700",
              )}
            >
              {filter.label}
            </Link>
          );
        })}
      </nav>
      <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <Excerpt key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
