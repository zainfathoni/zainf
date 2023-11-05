import { Outlet } from "@remix-run/react";
import { Prose } from "~/components/Prose";

export default function Component() {
  return (
    <>
      {/* TODO: Render post attributes */}
      {/* <header className="flex flex-col">
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
      </header> */}
      <Prose>
        <Outlet />
      </Prose>
    </>
  );
}
