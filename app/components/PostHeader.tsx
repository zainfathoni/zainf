import { Link } from "react-router";
import { extractPostAttributes, type MdxAttributes } from "~/models/posts";
import { formatDate } from "~/utils/format-date";
import { ArrowLeftIcon } from "./Icons";
import { PostLanguageBadge } from "./PostLanguageBadge";

const SITE_ORIGIN = "https://www.zainfathoni.com";

function getMetaContent(attributes: MdxAttributes, property: string) {
  return attributes.meta.find((entry) => entry.property === property)?.content;
}

function getCoverSrc(content: unknown) {
  if (typeof content !== "string" || content.trim() === "") {
    return;
  }

  const value = content.trim();
  if (value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }

  try {
    const url = new URL(value);
    if (url.protocol !== "https:") {
      return;
    }
    if (url.origin === SITE_ORIGIN) {
      return `${url.pathname}${url.search}${url.hash}`;
    }
    return value;
  } catch {
    return;
  }
}

function getPositiveDimension(content: unknown) {
  const value = Number(content);
  return Number.isFinite(value) && value > 0 ? value : undefined;
}

export function PostHeader(props: MdxAttributes & { showCover?: boolean }) {
  const { showCover = true, ...attributes } = props;
  const post = extractPostAttributes(attributes);
  const coverSrc = showCover
    ? getCoverSrc(getMetaContent(attributes, "og:image"))
    : undefined;
  const coverAlt = getMetaContent(attributes, "og:image:alt");
  const coverWidth = getPositiveDimension(
    getMetaContent(attributes, "og:image:width"),
  );
  const coverHeight = getPositiveDimension(
    getMetaContent(attributes, "og:image:height"),
  );
  return (
    <>
      <Link
        to="../"
        aria-label="Go back to blog posts"
        className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
      >
        <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      </Link>
      <header className="flex flex-col">
        <div className="order-first flex flex-wrap items-center gap-3">
          <time
            dateTime={post.date}
            className="flex items-center text-base text-zinc-500 dark:text-zinc-400"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
            <span className="ml-3">{formatDate(post.date)}</span>
          </time>
          <PostLanguageBadge lang={post.lang} />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {post.title}
        </h1>
      </header>
      {coverSrc && (
        <img
          src={coverSrc}
          alt={typeof coverAlt === "string" ? coverAlt : ""}
          width={coverWidth}
          height={coverHeight}
          loading="eager"
          className="mt-8 h-auto w-full rounded-xl"
        />
      )}
    </>
  );
}
