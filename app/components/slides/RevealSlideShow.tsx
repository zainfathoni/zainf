import type { ReactNode } from "react";
import { ClientOnly } from "./ClientOnly";
import { ClientOnlyRevealSlideShow } from "./ClientOnlyRevealSlideShow";

interface RevealSlideShowProps {
  children: ReactNode;
  config?: Record<string, any>;
}

export function RevealSlideShow(props: RevealSlideShowProps) {
  return (
    <ClientOnly 
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Loading Presentation...</h1>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          </div>
        </div>
      }
    >
      <ClientOnlyRevealSlideShow {...props} />
    </ClientOnly>
  );
}