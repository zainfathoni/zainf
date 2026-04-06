import { data, useLoaderData, type MetaFunction } from "react-router";
import { BlogArchiveList } from "~/components/BlogArchiveList";
import { SimpleLayout } from "~/components/SimpleLayout";
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

export function loader() {
  return data(getPostsByLanguage("id"));
}

export default function Component() {
  const posts = useLoaderData<typeof loader>();

  return (
    <SimpleLayout
      title="Tulisan berbahasa Indonesia."
      intro="Arsip tulisan yang saya terbitkan langsung dalam Bahasa Indonesia."
    >
      <BlogArchiveList posts={posts} currentFilter="id" />
    </SimpleLayout>
  );
}
