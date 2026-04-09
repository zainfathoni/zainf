import type { MetaFunction } from "react-router";
import { SimpleLayout } from "~/components/SimpleLayout";
import { TalksList } from "~/components/TalksList";
import { conferences, meetups, podcasts } from "~/models/talks";

export const meta: MetaFunction = () => [
  {
    title: "Talks - Zain Fathoni",
  },
  {
    name: "description",
    content:
      "I've spoken at local and international events and been interviewed for a handful of podcasts.",
  },
];

export default function Talks() {
  return (
    <SimpleLayout
      title="I've spoken at local and international events and been interviewed in a few podcasts."
      intro="One of my favorite ways to share my ideas is live on stage, where there's so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <TalksList
        currentFilter="all"
        sections={[
          { title: `${conferences.length} Conferences`, talks: conferences },
          { title: `${podcasts.length} Podcasts`, talks: podcasts },
          { title: `${meetups.length} Meetups`, talks: meetups },
        ]}
      />
    </SimpleLayout>
  );
}
