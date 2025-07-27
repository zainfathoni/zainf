import { useEffect, useRef, useState, useCallback } from "react";
import type { SlidePresentation } from "~/models/slides";
import { useTheme } from "~/contexts/theme";

// Import Reveal.js and plugins
declare global {
  interface Window {
    Reveal: any;
    RevealMarkdown: any;
    RevealHighlight: any;
    RevealNotes: any;
  }
}

interface RevealSlidesProps {
  presentation: SlidePresentation;
  mode?: "embedded" | "fullscreen";
  className?: string;
}

export function RevealSlides({ presentation, mode = "embedded", className = "" }: RevealSlidesProps) {
  const deckRef = useRef<any>(null);
  const deckDivRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [theme] = useTheme();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Load Reveal.js scripts dynamically
    const loadRevealJS = async () => {
      try {
        // Load Reveal.js core and plugins using require-style import
        const RevealJS = await import("reveal.js");
        const RevealMarkdown = await import("reveal.js/plugin/markdown/markdown.esm.js");
        const RevealHighlight = await import("reveal.js/plugin/highlight/highlight.esm.js");
        const RevealNotes = await import("reveal.js/plugin/notes/notes.esm.js");

        // Expose to window for later use
        window.Reveal = RevealJS.default || RevealJS;
        window.RevealMarkdown = RevealMarkdown.default || RevealMarkdown;
        window.RevealHighlight = RevealHighlight.default || RevealHighlight;
        window.RevealNotes = RevealNotes.default || RevealNotes;

        setIsLoaded(true);
      } catch (err) {
        console.error("Failed to load Reveal.js:", err);
        setError("Failed to load presentation framework");
      }
    };

    loadRevealJS();
  }, []);

  const applyTheme = useCallback(() => {
    if (!deckRef.current) return;

    try {
      // Configure theme-based settings
      const isDark = theme === "dark";
      
      deckRef.current.configure({
        // You can add theme-specific configurations here
        // The actual theme styling will be handled by CSS
      });

      // Apply theme class to reveal container
      const revealElement = deckDivRef.current?.querySelector('.reveal');
      if (revealElement) {
        revealElement.classList.toggle('theme-dark', isDark);
        revealElement.classList.toggle('theme-light', !isDark);
      }
    } catch (err) {
      console.error("Failed to apply theme:", err);
    }
  }, [theme]);

  useEffect(() => {
    if (!isLoaded || !deckDivRef.current || deckRef.current) return;

    try {
      // Initialize Reveal.js with native Markdown support
      const { Reveal, RevealMarkdown, RevealHighlight, RevealNotes } = window;
      
      deckRef.current = new Reveal(deckDivRef.current, {
        // Core settings
        hash: true,
        controls: presentation.revealConfig?.controls ?? true,
        progress: presentation.revealConfig?.progress ?? true,
        center: presentation.revealConfig?.center ?? true,
        touch: presentation.revealConfig?.touch ?? true,

        // Transitions
        transition: presentation.revealConfig?.transition ?? "slide",
        backgroundTransition: presentation.revealConfig?.backgroundTransition ?? "fade",

        // Plugins
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes],

        // Plugin configurations
        markdown: {
          smartypants: true,
        },
        highlight: {
          highlightOnLoad: false, // Use existing highlight.js setup
        },

        // Responsive design
        width: mode === "fullscreen" ? 1920 : 960,
        height: mode === "fullscreen" ? 1080 : 700,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2.0,
      });

      deckRef.current.initialize().then(() => {
        // Apply theme after initialization
        applyTheme();
      });

    } catch (err) {
      console.error("Failed to initialize Reveal.js:", err);
      setError("Failed to initialize presentation");
    }

    return () => {
      if (deckRef.current) {
        deckRef.current.destroy();
        deckRef.current = null;
      }
    };
  }, [isLoaded, presentation, mode, applyTheme]);

  // Apply theme when theme context changes
  useEffect(() => {
    if (deckRef.current && isLoaded) {
      applyTheme();
    }
  }, [theme, isLoaded, applyTheme]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-zinc-50 dark:bg-zinc-900 rounded-lg">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Please try refreshing the page or{" "}
            <a href={`/talks#${presentation.slug}`} className="underline">
              view the original presentation
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-zinc-50 dark:bg-zinc-900 rounded-lg animate-pulse">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-zinc-300 border-t-zinc-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-zinc-600 dark:text-zinc-400">Loading presentation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`reveal-container ${className}`}>
      <div 
        ref={deckDivRef} 
        className="reveal"
        style={{
          width: "100%",
          height: mode === "fullscreen" ? "100vh" : "600px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="slides">
          {/* Reveal.js will load Markdown content via data-markdown */}
          <section 
            data-markdown={presentation.markdownPath}
            data-separator="---"
            data-separator-vertical="--"
            data-separator-notes="^Note:"
            data-charset="utf-8"
          />
        </div>
      </div>
    </div>
  );
}