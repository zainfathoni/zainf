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
    title: "Arsip Blog Bahasa Indonesia - Zain Fathoni",
  },
  {
    name: "description",
    content: "Jelajahi semua tulisan yang saya terbitkan langsung dalam Bahasa Indonesia.",
  },
];

export function loader({ request }: LoaderFunctionArgs) {
  const type = normalizePostTypeFilter(
    new URL(request.url).searchParams.get("type"),
  );

  return data({
    posts: filterPostsByType(getPostsByLanguage("id"), type),
    type,
  });
}

export default function Component() {
  const { posts, type } = useLoaderData<typeof loader>();

  return (
    <SimpleLayout
      title="Tulisan berbahasa Indonesia."
      intro="Arsip tulisan yang saya terbitkan langsung dalam Bahasa Indonesia."
    >
      <BlogArchiveList posts={posts} currentFilter="id" currentType={type} />
    </SimpleLayout>
  );
}
