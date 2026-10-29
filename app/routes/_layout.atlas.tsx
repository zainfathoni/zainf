import {
  data,
  Link,
  useLoaderData,
  type MetaFunction,
} from "react-router";
import { Card } from "~/components/Card";
import { Section } from "~/components/Section";
import { SimpleLayout } from "~/components/SimpleLayout";
import { postTypeOptions } from "~/models/post-types";
import { getAllPosts, getPostsByLanguage } from "~/models/posts";
import { projects } from "~/models/projects";
import { conferences, meetups, podcasts } from "~/models/talks";

export const meta: MetaFunction = () => [
  {
    title: "Atlas - Zain Fathoni",
  },
  {
    name: "description",
    content:
      "A map of everything on this site: start here, writing, talks and podcasts, projects, and about.",
  },
];

const startHereSlugs = [
  "project-transformers-building-personal-ai-army",
  "project-transformers-one-month-later",
  "react-dom-jsx",
  "ai-arms-race-defensive-programming-2026-04-03",
];

const selectedTalkSlugs = [
  "idsw-2025",
  "royal-vs-frugal-amp-2026",
  "ceritanya-developer-podcast-2-6",
];

export function loader() {
  const posts = getAllPosts();
  const talks = [...conferences, ...meetups, ...podcasts];

  const startHerePosts = startHereSlugs.map((slug) => {
    const post = posts.find((item) => item.slug === slug);
    if (!post) {
      throw new Error(`Atlas start-here post not found: ${slug}`);
    }
    return { slug: post.slug, title: post.title, description: post.description };
  });

  const selectedTalks = selectedTalkSlugs.map((slug) => {
    const talk = talks.find((item) => item.slug === slug);
    if (!talk) {
      throw new Error(`Atlas selected talk not found: ${slug}`);
    }
    return { slug: talk.slug, title: talk.title };
  });

  return data({
    startHerePosts,
    postCounts: {
      all: posts.length,
      en: getPostsByLanguage("en").length,
      id: getPostsByLanguage("id").length,
    },
    talkCounts: {
      conferences: conferences.length,
      meetups: meetups.length,
      podcasts: podcasts.length,
    },
    selectedTalks,
    projects: projects.map((project) => ({
      name: project.name,
      description: project.description,
      href: project.link.href,
    })),
  });
}

function AtlasList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </ul>
  );
}

function AtlasLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        to={to}
        className="font-medium text-zinc-800 transition hover:text-teal-600 dark:text-zinc-200 dark:hover:text-teal-400"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Atlas() {
  const { startHerePosts, postCounts, talkCounts, selectedTalks, projects } =
    useLoaderData<typeof loader>();

  return (
    <SimpleLayout
      title="Atlas"
      intro="A map of the whole site. Start with the posts below, or jump straight to the section you need."
    >
      <div className="space-y-16">
        <Section title="Start here">
          <div className="space-y-8">
            {startHerePosts.map((post) => (
              <Card as="article" key={post.slug}>
                <Card.Title as="h3" to={`/blog/${post.slug}`}>
                  {post.title}
                </Card.Title>
                <Card.Description>{post.description}</Card.Description>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Writing">
          <AtlasList>
            <AtlasLink to="/blog">All posts ({postCounts.all})</AtlasLink>
            <AtlasLink to="/blog/en">English ({postCounts.en})</AtlasLink>
            <AtlasLink to="/blog/id">
              Bahasa Indonesia ({postCounts.id})
            </AtlasLink>
            {postTypeOptions.map((item) => (
              <AtlasLink key={item.key} to={`/blog?type=${item.key}`}>
                {item.label}
              </AtlasLink>
            ))}
          </AtlasList>
        </Section>

        <Section title="Talks and podcasts">
          <AtlasList>
            <AtlasLink to="/talks/conferences">
              Conferences ({talkCounts.conferences})
            </AtlasLink>
            <AtlasLink to="/talks/meetups">
              Meetups ({talkCounts.meetups})
            </AtlasLink>
            <AtlasLink to="/talks/podcasts">
              Podcasts ({talkCounts.podcasts})
            </AtlasLink>
            {selectedTalks.map((talk) => (
              <AtlasLink key={talk.slug} to={`/talks#${talk.slug}`}>
                {talk.title}
              </AtlasLink>
            ))}
          </AtlasList>
        </Section>

        <Section title="Projects">
          <ul className="space-y-6">
            {projects.map((project) => (
              <Card as="li" key={project.name}>
                <Card.Title as="h3" to={project.href}>
                  {project.name}
                </Card.Title>
                <Card.Description>{project.description}</Card.Description>
              </Card>
            ))}
          </ul>
        </Section>

        <Section title="About and tools">
          <AtlasList>
            <AtlasLink to="/about">About</AtlasLink>
            <AtlasLink to="/uses">Uses</AtlasLink>
          </AtlasList>
        </Section>
      </div>
    </SimpleLayout>
  );
}
