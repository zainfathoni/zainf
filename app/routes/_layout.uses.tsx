import type { MetaFunction } from "react-router";
import { Card } from "~/components/Card";
import type { SectionProps } from "~/components/Section";
import { Section } from "~/components/Section";
import { SimpleLayout } from "~/components/SimpleLayout";
import type { Tool } from "~/models/tools";
import {
  aiSubscriptions,
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

function AmpStoryCard() {
  return (
    <Card as="li" id="why-i-chose-amp">
      <Card.Title as="h3" to="https://x.com/zainfathoni/status/2093585556831883689?s=20">
        Why I chose Amp
      </Card.Title>
      <Card.Description>
        I shared the full reasoning behind making Amp my agent harness.
      </Card.Description>
      <Card.Cta>Read the thread</Card.Cta>
    </Card>
  );
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection id="workstation" title="Workstation">
          {workstation.map(mapToolToCard)}
        </ToolsSection>
        <ToolsSection id="development-tools" title="Development tools">
          {developmentTools.map(mapToolToCard)}
        </ToolsSection>
        <ToolsSection id="ai-subscriptions" title="AI subscriptions">
          {aiSubscriptions.map(mapToolToCard)}
          <AmpStoryCard />
        </ToolsSection>
        <ToolsSection id="productivity" title="Productivity">
          {productivity.map(mapToolToCard)}
        </ToolsSection>
        <ToolsSection id="finance" title="Finance">
          {finance.map(mapToolToCard)}
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
