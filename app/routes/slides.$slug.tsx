import type { LoaderFunctionArgs, MetaFunction } from "@vercel/remix";
import { json, redirect } from "@vercel/remix";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { useState } from "react";
import { RevealSlides } from "~/components/slides/RevealSlides";
import { Container } from "~/components/Container";
import { getSlideBySlug, slides } from "~/models/slides";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  
  if (!slug) {
    throw redirect("/slides");
  }

  const presentation = getSlideBySlug(slug, slides);
  
  if (!presentation) {
    throw redirect("/slides");
  }

  return json({ presentation });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.presentation) {
    return [{ title: "Slides - Zain Fathoni" }];
  }

  const { presentation } = data;
  return [
    {
      title: `${presentation.title} - Zain Fathoni`,
    },
    {
      name: "description",
      content: presentation.description,
    },
    {
      property: "og:title",
      content: presentation.title,
    },
    {
      property: "og:description",
      content: presentation.description,
    },
    {
      property: "og:type",
      content: "article",
    },
  ];
};

export default function SlidePresentation() {
  const { presentation } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<"embedded" | "fullscreen">(
    searchParams.get("mode") === "fullscreen" ? "fullscreen" : "embedded"
  );

  const toggleMode = () => {
    const newMode = mode === "embedded" ? "fullscreen" : "embedded";
    setMode(newMode);
    
    const params = new URLSearchParams(searchParams);
    if (newMode === "fullscreen") {
      params.set("mode", "fullscreen");
    } else {
      params.delete("mode");
    }
    setSearchParams(params);
  };

  if (mode === "fullscreen") {
    return (
      <div className="fixed inset-0 z-50 bg-white dark:bg-zinc-900">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={toggleMode}
            className="px-4 py-2 text-sm font-medium text-zinc-900 bg-white border border-zinc-300 rounded-md shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-700"
          >
            Exit Fullscreen
          </button>
        </div>
        <RevealSlides presentation={presentation} mode="fullscreen" />
      </div>
    );
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {presentation.title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {presentation.description}
        </p>
        {presentation.event && (
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            Presented at {presentation.event} on{" "}
            {new Date(presentation.date).toLocaleDateString("en-SG", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        )}
      </header>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            Presentation
          </h2>
          <button
            onClick={toggleMode}
            className="px-4 py-2 text-sm font-medium text-zinc-900 bg-white border border-zinc-300 rounded-md shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-700"
          >
            View Fullscreen
          </button>
        </div>

        <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
          <RevealSlides presentation={presentation} mode="embedded" />
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`/talks#${presentation.slug}`}
            className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
          >
            ← Back to talks
          </a>
          <a
            href="/slides"
            className="text-sm text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
          >
            Browse all slides
          </a>
        </div>
      </div>
    </Container>
  );
}