import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";
import { json } from "@vercel/remix";
import { Card } from "app/components/Card";
import { SimpleLayout } from "app/components/SimpleLayout";
import type { ArticleAttributes } from "app/models/articles";
import { getAllArticles } from "app/models/articles";
import { formatDate } from "app/utils/format-date";

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

function Article({
  article: {
    slug,
    attributes: { meta },
  },
}: {
  article: ArticleAttributes;
}) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title to={`/articles/${slug}`}>{meta.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={meta.date}
          className="md:hidden"
          decorate
        >
          {formatDate(meta.date)}
        </Card.Eyebrow>
        <Card.Description>{meta.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={meta.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(meta.date)}
      </Card.Eyebrow>
    </article>
  );
}

export function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json(getAllArticles());
}

export default function ArticlesIndex() {
  const articles = useLoaderData<typeof loader>();
  return (
    <SimpleLayout
      title="Writing on web development, career, and family."
      intro="All of my long-form thoughts on programming, career, family, and more, collected in chronological order."
    >
      <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </SimpleLayout>
  );
}
