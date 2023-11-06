import type { MetaFunction } from "@vercel/remix";
import { Card } from "~/components/Card";
import type { SectionProps } from "~/components/Section";
import { Section } from "~/components/Section";
import { SimpleLayout } from "~/components/SimpleLayout";
import type { Talk } from "~/models/talks";
import { conferences, meetups } from "~/models/talks";

export const meta: MetaFunction = () => [
  {
    title: "Talks - Zain Fathoni",
  },
  {
    name: "description",
    content:
      "I’ve spoken at events in Indonesia and Singapore and been interviewed for a handful of podcasts.",
  },
];

function TalksSection({ children, ...props }: SectionProps) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string;
  description: string;
  event: string;
  cta: string;
  href: string;
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" to={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

function mapTalkToAppearance(talk: Talk) {
  // TODO: Render more resources if available
  return (
    <Appearance
      key={talk.title}
      href={talk.resources[0].href}
      title={talk.title}
      description={talk.description}
      cta={talk.resources[0].label}
      event={`${talk.event}, ${new Date(talk.date).toLocaleDateString("en-SG", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`}
    />
  );
}

export default function Talks() {
  return (
    <SimpleLayout
      title="I’ve spoken at events in Indonesia and Singapore and been interviewed for a handful of podcasts."
      intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <div className="space-y-20">
        <TalksSection title="Conferences">
          {conferences.map(mapTalkToAppearance)}
        </TalksSection>
        <TalksSection title="Meetups">
          {meetups.map(mapTalkToAppearance)}
        </TalksSection>
      </div>
    </SimpleLayout>
  );
}
