import type { MetaFunction } from "react-router";
import { SimpleLayout } from "~/components/SimpleLayout";
import { TalksList } from "~/components/TalksList";
import { podcasts } from "~/models/talks";

export const meta: MetaFunction = () => [
  {
    title: "Podcast Appearances - Zain Fathoni",
  },
  {
    name: "description",
    content: "Podcasts I've been interviewed on.",
  },
];

export default function PodcastTalks() {
  return (
    <SimpleLayout
      title="I've spoken at local and international events and been interviewed in a few podcasts."
      intro="One of my favorite ways to share my ideas is live on stage, where there's so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <TalksList
        currentFilter="podcasts"
        sections={[
          { title: `${podcasts.length} Podcasts`, talks: podcasts },
        ]}
      />
    </SimpleLayout>
  );
}
