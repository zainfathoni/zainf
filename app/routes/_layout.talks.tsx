import type { MetaFunction } from "@vercel/remix";
import { Card } from "~/components/Card";
import type { SectionProps } from "~/components/Section";
import { Section } from "~/components/Section";
import { SimpleLayout } from "~/components/SimpleLayout";
import type { Talk } from "~/models/talks";
import { conferences, meetups, podcasts } from "~/models/talks";

export const meta: MetaFunction = () => [
  {
    title: "Talks - Zain Fathoni",
  },
  {
    name: "description",
    content:
      "I’ve spoken at local and international events and been interviewed for a handful of podcasts.",
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
  id,
  title,
  description,
  event,
  cta,
  href,
  additionalResources,
}: {
  id: string;
  title: string;
  description: string;
  event: string;
  cta: string;
  href: string;
  additionalResources?: Array<{ href: string; label: string }>;
}) {
  return (
    <Card as="article" id={id}>
      <Card.Title as="h3" to={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
      {additionalResources && additionalResources.length > 0 && (
        <div className="relative z-30 mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          {additionalResources.map((resource, index) => (
            <a
              key={index}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition cursor-pointer"
            >
              {resource.label}
            </a>
          ))}
        </div>
      )}
    </Card>
  );
}

function prioritizeResources(resources: Talk["resources"]) {
  // Priority order: video > slides > repository > other
  const priority = {
    video: 0,
    slides: 1,
    repository: 2,
    other: 3,
  };

  const getResourceType = (label: string) => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes("video") || lowerLabel.includes("watch")) {
      return "video";
    }
    if (lowerLabel.includes("slide")) {
      return "slides";
    }
    if (lowerLabel.includes("repository") || lowerLabel.includes("github")) {
      return "repository";
    }
    return "other";
  };

  return [...resources].sort((a, b) => {
    const typeA = getResourceType(a.label);
    const typeB = getResourceType(b.label);
    return priority[typeA] - priority[typeB];
  });
}

function mapTalkToAppearance(talk: Talk) {
  const sortedResources = prioritizeResources(talk.resources);
  const primaryResource = sortedResources[0];
  const additionalResources = sortedResources.slice(1);

  return (
    <Appearance
      key={talk.slug}
      id={talk.slug}
      href={primaryResource.href}
      title={talk.title}
      description={talk.description}
      cta={primaryResource.label}
      additionalResources={additionalResources}
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
      title="I’ve spoken at local and international events and been interviewed in a few podcasts."
      intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
      <div className="space-y-20">
        <TalksSection title={`${conferences.length} Conferences`}>
          {conferences.map(mapTalkToAppearance)}
        </TalksSection>
        <TalksSection title={`${podcasts.length} Podcasts`}>
          {podcasts.map(mapTalkToAppearance)}
        </TalksSection>
        <TalksSection title={`${meetups.length} Meetups`}>
          {meetups.map(mapTalkToAppearance)}
        </TalksSection>
      </div>
    </SimpleLayout>
  );
}
