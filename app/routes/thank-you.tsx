import type { MetaFunction } from "@vercel/remix";
import { Container } from "app/components/Container";
import { SimpleLayout } from "app/components/SimpleLayout";
import { metadata } from "app/models/metadata";

export const meta: MetaFunction = () => [
  {
    title: `You're subscribed - ${metadata.title}`,
  },
  {
    name: "description",
    content: "Thanks for subscribing to my newsletter.",
  },
];

export default function ThankYou() {
  return (
    <Container className="mt-16 sm:mt-32">
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </Container>
  );
}
