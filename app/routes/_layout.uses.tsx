import type { MetaFunction } from "@vercel/remix";
import { Card } from "~/components/Card";
import type { SectionProps } from "~/components/Section";
import { Section } from "~/components/Section";
import { SimpleLayout } from "~/components/SimpleLayout";
import type { Tool } from "~/models/tools";
import {
  developmentTools,
  finance,
  productivity,
  workstation,
} from "~/models/tools";

export const meta: MetaFunction = () => [
  {
    title: "Uses - Zain Fathoni",
  },
  {
    name: "description",
    content: "Software I use, gadgets I love, and other things I recommend.",
  },
];

function ToolsSection({ children, ...props }: SectionProps) {
  return (
    <Section {...props}>
      <ul className="space-y-16">{children}</ul>
    </Section>
  );
}

function ToolCard({ slug, title, href, description }: Tool) {
  return (
    <Card as="li" id={slug}>
      <Card.Title as="h3" to={href}>
        {title}
      </Card.Title>
      <Card.Description>{description}</Card.Description>
    </Card>
  );
}

function mapToolToCard(tool: Tool) {
  return (
    <ToolCard
      key={tool.title}
      slug={tool.slug}
      title={tool.title}
      href={tool.href}
      description={tool.description}
    />
  );
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          {workstation.map(mapToolToCard)}
        </ToolsSection>
        <ToolsSection title="Development tools">
          {developmentTools.map(mapToolToCard)}
        </ToolsSection>
        <ToolsSection title="Productivity">
          {productivity.map(mapToolToCard)}
        </ToolsSection>
        <ToolsSection title="Finance">
          {finance.map(mapToolToCard)}
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
