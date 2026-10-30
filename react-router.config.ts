import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

const nonPrerenderablePaths = new Set([
  "/action/set-theme",
  "/talk",
  "/blog",
  "/blog/en",
  "/blog/id",
  "/ama",
]);

export default {
  ssr: true,
  allowedActionOrigins: process.env.PUBLIC_URL
    ? [new URL(process.env.PUBLIC_URL).host]
    : undefined,
  routeDiscovery: { mode: "initial" },
  prerender: async ({ getStaticPaths }) => {
    const staticPagePaths = getStaticPaths().filter(
      (path) =>
        !nonPrerenderablePaths.has(path) &&
        !path.startsWith("/admin/") &&
        !path.startsWith("/auth/"),
    );

    // Keep action/redirect endpoints, query-sensitive archives, and the AMA
    // form's per-request configuration and submission ID out of static output.
    return [...new Set(staticPagePaths)];
  },
  presets: [vercelPreset()],
} satisfies Config;
