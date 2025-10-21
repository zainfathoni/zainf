import { useLoaderData, data } from "react-router";
import type { MetaFunction } from "react-router";
import { Card } from "~/components/Card";
import { SimpleLayout } from "~/components/SimpleLayout";
import { getAllPosts, type Post } from "~/models/posts";
import { formatDate } from "~/utils/format-date";

export const meta: MetaFunction = () => [
  {
    title: "Blog - Zain Fathoni",
  },
  {
    name: "description",
    content:
      "All of my long-form thoughts on programming, career, family, and more, collected in chronological order.",
  },
];

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return data(getAllPosts());
}

function Excerpt(post: Post) {
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
  const posts = useLoaderData<typeof loader>();

  return (
    <SimpleLayout
      title="Writing on web development, career, and family."
      intro="All of my long-form thoughts on programming, career, family, and more, collected in chronological order."
    >
      <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <Excerpt key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </SimpleLayout>
  );
}
