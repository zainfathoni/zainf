import {
  data,
  useLoaderData,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "react-router";
import { BlogArchiveList } from "~/components/BlogArchiveList";
import { SimpleLayout } from "~/components/SimpleLayout";
import {
  filterPostsByType,
  normalizePostTypeFilter,
} from "~/models/post-types";
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

export function loader({ request }: LoaderFunctionArgs) {
  const type = normalizePostTypeFilter(
    new URL(request.url).searchParams.get("type"),
  );

  return data({
    posts: filterPostsByType(getPostsByLanguage("en"), type),
    type,
  });
}

export default function Component() {
  const { posts, type } = useLoaderData<typeof loader>();

  return (
    <SimpleLayout
      title="Writing in English."
      intro="Archive of posts I published directly in English."
    >
      <BlogArchiveList posts={posts} currentFilter="en" currentType={type} />
    </SimpleLayout>
  );
}
