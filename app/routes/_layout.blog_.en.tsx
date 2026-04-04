import { data, useLoaderData, type MetaFunction } from "react-router";
import { BlogArchiveList } from "~/components/BlogArchiveList";
import { SimpleLayout } from "~/components/SimpleLayout";
import { getPostsByLanguage } from "~/models/posts";

export const meta: MetaFunction = () => [
  {
    title: "English Blog Archive - Zain Fathoni",
  },
  {
    name: "description",
    content: "Browse every blog post I published directly in English.",
  },
];

export function loader() {
  return data(getPostsByLanguage("en"));
}

export default function Component() {
  const posts = useLoaderData<typeof loader>();

  return (
    <SimpleLayout
      title="Writing in English."
      intro="Archive of posts I published directly in English."
    >
      <BlogArchiveList posts={posts} currentFilter="en" />
    </SimpleLayout>
  );
}
