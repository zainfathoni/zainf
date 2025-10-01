export type SlidePresentation = {
  slug: string;
  title: string;
  description: string;
  date: string;
  event?: string;
  markdownPath: string; // Path to the .md file for Reveal.js
  assetsPath?: string; // Path to assets directory
  theme?: "light" | "dark" | "auto";
  revealConfig?: {
    transition?: string;
    backgroundTransition?: string;
    controls?: boolean;
    progress?: boolean;
    center?: boolean;
    touch?: boolean;
  };
};

export type SlideMetadata = {
  title: string;
  description: string;
  date: string;
  event?: string;
  author?: string;
  theme?: "light" | "dark" | "auto";
  revealConfig?: SlidePresentation["revealConfig"];
};

// Utility to get slide presentation by slug
export function getSlideBySlug(slug: string, slides: SlidePresentation[]): SlidePresentation | undefined {
  return slides.find(slide => slide.slug === slug);
}

// Utility to build markdown file path from slug
export function buildMarkdownPath(slug: string): string {
  return `/slides/${slug}/slides.md`;
}

// Utility to build assets path from slug  
export function buildAssetsPath(slug: string): string {
  return `/slides/${slug}/assets`;
}

// Sample slides data - will be populated from actual slide directories
export const slides: SlidePresentation[] = [
  {
    slug: "jsconf-asia-2019",
    title: "State Machines Meet React Hooks",
    description: "A journey in using State Machines along with React Hooks at Ninja Van",
    date: "2019-06-15",
    event: "JSConf Asia 2019",
    markdownPath: "/slides/jsconf-asia-2019/slides.md",
    assetsPath: "/slides/jsconf-asia-2019/assets",
    revealConfig: {
      transition: "slide",
      backgroundTransition: "fade",
      controls: true,
      progress: true,
      center: true,
      touch: true,
    },
  },
  {
    slug: "web-constraints",
    title: "Navigating The Web in A World Full of Constraints",
    description: "How I architected multiple websites using various sets of technologies to meet the objectives at hand with the given constraints at the time.",
    date: "2023-07-28",
    event: "CityJS Singapore 2023",
    markdownPath: "/slides/web-constraints/slides.md",
    assetsPath: "/slides/web-constraints/assets",
    revealConfig: {
      transition: "slide",
      backgroundTransition: "fade",
      controls: true,
      progress: true,
      center: true,
      touch: true,
    },
  },
  {
    slug: "reliable-tests-with-ai",
    title: "Writing Reliable Tests for React using AI",
    description: "An interactive live coding session to demonstrate how to write reliable React tests with AI assistance.",
    date: "2025-07-03",
    event: "Hacktiv8 Technical Workshop",
    markdownPath: "/slides/reliable-tests-with-ai/slides.md",
    assetsPath: "/slides/reliable-tests-with-ai/assets",
    revealConfig: {
      transition: "slide",
      backgroundTransition: "fade",
      controls: true,
      progress: true,
      center: true,
      touch: true,
    },
  },
];