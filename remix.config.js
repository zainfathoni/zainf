/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  mdx: async () => {
    const [rehypeHighlight, remarkGfm] = await Promise.all([
      import("rehype-highlight").then((mod) => mod.default),
      import("remark-gfm").then((mod) => mod.default),
    ]);
    return {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    };
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
