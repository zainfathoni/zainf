import { useEffect, useState } from "react";
import type { SlidePresentation, SlideMetadata } from "~/models/slides";

interface SlideLoaderProps {
  slug: string;
  onLoad: (presentation: SlidePresentation) => void;
  onError: (error: string) => void;
}

export function SlideLoader({ slug, onLoad, onError }: SlideLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSlidePresentation = async () => {
      try {
        setIsLoading(true);

        // Load slide metadata
        const metadataResponse = await fetch(`/slides/${slug}/metadata.json`);
        if (!metadataResponse.ok) {
          throw new Error(`Failed to load slide metadata: ${metadataResponse.status}`);
        }

        const metadata: SlideMetadata = await metadataResponse.json();

        // Verify markdown file exists
        const markdownPath = `/slides/${slug}/slides.md`;
        const markdownResponse = await fetch(markdownPath, { method: 'HEAD' });
        if (!markdownResponse.ok) {
          throw new Error(`Slide content not found at ${markdownPath}`);
        }

        // Construct full presentation object
        const presentation: SlidePresentation = {
          slug,
          title: metadata.title,
          description: metadata.description,
          date: metadata.date,
          event: metadata.event,
          markdownPath,
          assetsPath: `/slides/${slug}/assets`,
          theme: metadata.theme,
          revealConfig: metadata.revealConfig,
        };

        onLoad(presentation);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error loading presentation';
        console.error('SlideLoader error:', err);
        onError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    loadSlidePresentation();
  }, [slug, onLoad, onError]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-zinc-50 dark:bg-zinc-900 rounded-lg animate-pulse">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-zinc-300 border-t-zinc-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-zinc-600 dark:text-zinc-400">Loading presentation...</p>
        </div>
      </div>
    );
  }

  return null;
}

// Utility hook for loading slide presentations
export function useSlidePresentation(slug: string) {
  const [presentation, setPresentation] = useState<SlidePresentation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPresentation = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const metadataResponse = await fetch(`/slides/${slug}/metadata.json`);
        if (!metadataResponse.ok) {
          throw new Error(`Failed to load slide metadata: ${metadataResponse.status}`);
        }

        const metadata: SlideMetadata = await metadataResponse.json();

        const presentation: SlidePresentation = {
          slug,
          title: metadata.title,
          description: metadata.description,
          date: metadata.date,
          event: metadata.event,
          markdownPath: `/slides/${slug}/slides.md`,
          assetsPath: `/slides/${slug}/assets`,
          theme: metadata.theme,
          revealConfig: metadata.revealConfig,
        };

        setPresentation(presentation);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error loading presentation';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      loadPresentation();
    }
  }, [slug]);

  return { presentation, error, isLoading };
}