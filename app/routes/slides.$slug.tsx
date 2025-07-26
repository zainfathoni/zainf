import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RevealSlideShow } from "~/components/slides/RevealSlideShow";
import { promises as fs } from "fs";
import path from "path";
import "reveal.js/dist/reveal.css";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: "Slide not found" }];
  }

  return [
    { title: `${data.title} - Zain Fathoni` },
    { name: "description", content: data.description },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  
  if (!slug) {
    throw new Response("Not Found", { status: 404 });
  }

  try {
    // Try to read the markdown file for the slide
    const slidePath = path.join(process.cwd(), "app", "slides", slug, "index.md");
    const slideContent = await fs.readFile(slidePath, "utf-8");
    
    // Parse frontmatter to extract metadata
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = slideContent.match(frontmatterRegex);
    
    if (!match) {
      throw new Error("Invalid slide format");
    }
    
    const [, frontmatter, content] = match;
    const metadata: Record<string, string> = {};
    
    // Parse YAML-like frontmatter
    frontmatter.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        metadata[key.trim()] = valueParts.join(':').trim();
      }
    });

    return json({
      title: metadata.title || "Untitled Presentation",
      description: metadata.description || "A presentation",
      date: metadata.date || "",
      author: metadata.author || "",
      slug,
      content,
    });
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
}

export default function SlidePage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen">
      <RevealSlideShow
        config={{
          // Enable markdown plugin
          markdown: {
            smartypants: true,
          }
        }}
      >
        <section 
          data-markdown
          data-separator="^---$"
          data-separator-vertical="^--$"
        >
          <textarea data-template defaultValue={data.content} />
        </section>
      </RevealSlideShow>
    </div>
  );
}