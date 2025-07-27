import type { MetaFunction } from "@vercel/remix";
import { Card } from "~/components/Card";
import { SimpleLayout } from "~/components/SimpleLayout";
import { slides } from "~/models/slides";

export const meta: MetaFunction = () => [
  {
    title: "Presentation Slides - Zain Fathoni",
  },
  {
    name: "description",
    content:
      "Browse through my presentation slides from conferences, meetups, and workshops.",
  },
];

function SlideCard({ slug, title, description, event, date }: {
  slug: string;
  title: string;
  description: string;
  event?: string;
  date: string;
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" to={`/slides/${slug}`}>
        {title}
      </Card.Title>
      {event && <Card.Eyebrow decorate>{event}</Card.Eyebrow>}
      <Card.Description>{description}</Card.Description>
      <Card.Cta>View slides</Card.Cta>
    </Card>
  );
}

export default function SlidesIndex() {
  const sortedSlides = slides.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <SimpleLayout
      title="Presentation slides from my talks and workshops"
      intro="A collection of slides from my presentations at conferences, meetups, and workshops. These presentations cover topics ranging from web development to software engineering practices."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {sortedSlides.map((slide) => (
            <SlideCard
              key={slide.slug}
              slug={slide.slug}
              title={slide.title}
              description={slide.description}
              event={slide.event}
              date={slide.date}
            />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}