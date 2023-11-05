import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";
import { json } from "@vercel/remix";
import { Card } from "~/components/Card";
import { SimpleLayout } from "~/components/SimpleLayout";
import { formatDate } from "~/utils/format-date";
import * as reactDomJsx from "./blog._post.react-dom-jsx.mdx";

export const meta: MetaFunction = () => [
  {
    title: "Articles - Zain Fathoni",
  },
  {
    name: "description",
    content:
      "All of my long-form thoughts on programming, career, family, and more, collected in chronological order.",
  },
];

type MdxModule = {
  filename: string;
  attributes: {
    meta: Array<Record<string, any>>;
  };
};

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

function postFromModule(mod: MdxModule): Post {
  return {
    slug: mod.filename.replace(/^blog\._post\./, "").replace(/\.mdx?$/, ""),
    title: mod.attributes.meta.find((m) => m.title)?.title,
    description: mod.attributes.meta.find((m) => m.name === "description")
      ?.content,
    date: mod.attributes.meta.find((m) => m.date)?.date,
    ...mod.attributes.meta,
  };
}

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json([postFromModule(reactDomJsx)]);
}

function Post(post: Post) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
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

export default function Component() {
  const posts = useLoaderData() as Array<ReturnType<typeof postFromModule>>;

  return (
    <SimpleLayout
      title="Writing on web development, career, and family."
      intro="All of my long-form thoughts on programming, career, family, and more, collected in chronological order."
    >
      <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <Post key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </SimpleLayout>
  );
}
