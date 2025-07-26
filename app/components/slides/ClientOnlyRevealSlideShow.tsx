import { useEffect, useRef, type ReactNode } from "react";
import { useTheme, Theme } from "~/contexts/theme";

interface RevealSlideShowProps {
  children: ReactNode;
  config?: Record<string, any>;
}

export function ClientOnlyRevealSlideShow({ 
  children, 
  config = {} 
}: RevealSlideShowProps) {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<any>(null);
  const [theme] = useTheme();

  useEffect(() => {
    if (deckRef.current) return; // Prevent double initialization

    const initializeReveal = async () => {
      try {
        // Import Reveal.js and plugins dynamically
        const { default: Reveal } = await import("reveal.js");
        const { default: RevealMarkdown } = await import("reveal.js/plugin/markdown/markdown.esm.js");
        const { default: RevealHighlight } = await import("reveal.js/plugin/highlight/highlight.esm.js");
        const { default: RevealNotes } = await import("reveal.js/plugin/notes/notes.esm.js");

        const revealConfig = {
          // Core settings
          hash: true,
          controls: true,
          progress: true,
          center: true,
          touch: true,

          // Transitions
          transition: "slide" as const,
          backgroundTransition: "fade" as const,

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
          width: 960,
          height: 700,
          margin: 0.04,
          minScale: 0.2,
          maxScale: 2.0,

          // Merge with custom config
          ...config,
        };

        if (deckDivRef.current) {
          deckRef.current = new Reveal(deckDivRef.current, revealConfig);
          
          // Wait for DOM to be ready before initializing
          setTimeout(() => {
            if (deckRef.current) {
              deckRef.current.initialize();
            }
          }, 100);
        }
      } catch (error) {
        console.error("Failed to initialize Reveal.js:", error);
      }
    };

    initializeReveal();

    return () => {
      if (deckRef.current) {
        deckRef.current.destroy();
        deckRef.current = null;
      }
    };
  }, [config]);

  // Handle theme changes
  useEffect(() => {
    if (deckRef.current && deckDivRef.current) {
      // Apply theme-specific classes to the reveal container
      const revealContainer = deckDivRef.current;
      
      // Remove existing theme classes
      revealContainer.classList.remove("theme-dark", "theme-light");
      
      // Add current theme class
      if (theme === Theme.DARK) {
        revealContainer.classList.add("theme-dark");
      } else {
        revealContainer.classList.add("theme-light");
      }

      // Configure Reveal.js with theme-specific settings if needed
      deckRef.current.configure({
        // Theme-specific configuration can be added here
      });
    }
  }, [theme]);

  return (
    <div className="reveal-slideshow-container">
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">{children}</div>
      </div>
    </div>
  );
}