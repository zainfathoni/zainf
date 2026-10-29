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
import { getAllPosts } from "~/models/posts";

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

export function loader({ request }: LoaderFunctionArgs) {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  const type = normalizePostTypeFilter(
    new URL(request.url).searchParams.get("type"),
  );

  return data({ posts: filterPostsByType(getAllPosts(), type), type });
}

export default function Component() {
  const { posts, type } = useLoaderData<typeof loader>();

  return (
    <SimpleLayout
      title="Writing on web development, career, and family."
      intro="All of my long-form thoughts on programming, career, family, and more, collected in chronological order."
    >
      <BlogArchiveList posts={posts} currentFilter="all" currentType={type} />
    </SimpleLayout>
  );
}
