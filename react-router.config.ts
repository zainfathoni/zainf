import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

const nonPrerenderablePaths = new Set(["/action/set-theme", "/talk"]);

export default {
  ssr: true,
  allowedActionOrigins: process.env.PUBLIC_URL
    ? [new URL(process.env.PUBLIC_URL).host]
    : undefined,
  routeDiscovery: { mode: "initial" },
  prerender: async ({ getStaticPaths }) => {
    const staticPagePaths = getStaticPaths().filter(
      (path) => !nonPrerenderablePaths.has(path),
    );

    // Pre-render all static route paths discovered from route definitions,
    // excluding action/redirect-only endpoints that do not render documents.
    return [...new Set(staticPagePaths)];
  },
  presets: [vercelPreset()],
} satisfies Config;
