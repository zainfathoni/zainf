import clsx from "clsx";
import { Link } from "react-router";
import type { SectionProps } from "~/components/Section";
import { Section } from "~/components/Section";
import type { Talk } from "~/models/talks";
import { Card } from "./Card";

export type TalkCategory = "all" | "conferences" | "podcasts" | "meetups";

const categoryFilters: Array<{
  key: TalkCategory;
  label: string;
  to: string;
}> = [
  { key: "all", label: "All talks", to: "/talks" },
  { key: "conferences", label: "Conferences", to: "/talks/conferences" },
  { key: "podcasts", label: "Podcasts", to: "/talks/podcasts" },
  { key: "meetups", label: "Meetups", to: "/talks/meetups" },
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

export function TalksList({
  sections,
  currentFilter,
}: {
  sections: Array<{ title: string; talks: Talk[] }>;
  currentFilter: TalkCategory;
}) {
  return (
    <>
      <nav
        aria-label="Filter talks by category"
        className="mb-12 flex flex-wrap gap-3"
      >
        {categoryFilters.map((filter) => {
          const isActive = filter.key === currentFilter;

          return (
            <Link
              key={filter.key}
              to={filter.to}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "rounded-full px-3 py-1.5 text-sm font-medium transition",
                isActive
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700",
              )}
            >
              {filter.label}
            </Link>
          );
        })}
      </nav>
      <div className="space-y-20">
        {sections.map((section) => (
          <TalksSection key={section.title} title={section.title}>
            {section.talks.map(mapTalkToAppearance)}
          </TalksSection>
        ))}
      </div>
    </>
  );
}
