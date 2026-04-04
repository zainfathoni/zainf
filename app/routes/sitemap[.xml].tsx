import { getAllPosts } from "~/models/posts";

const SITE_URL = "https://www.zainfathoni.com";

type SitemapEntry = {
  loc: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  lastmod?: string;
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function createSitemapXml(entries: SitemapEntry[]) {
  const urlEntries = entries
    .map(
      (entry) => `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>${
        entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""
      }${
        entry.changefreq
          ? `\n    <changefreq>${entry.changefreq}</changefreq>`
          : ""
      }\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;
}

export function loader() {
  const staticEntries: SitemapEntry[] = [
    { loc: `${SITE_URL}/`, changefreq: "weekly" },
    { loc: `${SITE_URL}/blog`, changefreq: "monthly" },
    { loc: `${SITE_URL}/blog/en`, changefreq: "monthly" },
    { loc: `${SITE_URL}/blog/id`, changefreq: "monthly" },
    { loc: `${SITE_URL}/talks`, changefreq: "monthly" },
    { loc: `${SITE_URL}/projects`, changefreq: "monthly" },
    { loc: `${SITE_URL}/uses`, changefreq: "monthly" },
    { loc: `${SITE_URL}/about`, changefreq: "monthly" },
  ];

  const blogEntries: SitemapEntry[] = getAllPosts().map((post) => ({
    loc: `${SITE_URL}/blog/${post.slug}`,
    lastmod: post.date,
    changefreq: "monthly",
  }));

  const sitemap = createSitemapXml([...staticEntries, ...blogEntries]);

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
