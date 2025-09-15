import { getAllBlogs } from "../../lib/blog";

export async function GET() {
  const baseUrl = "https://www.w567game.cc";

  const staticRoutes = [
    "",
    "login",
    "terms-and-conditions",
    "privacy-policy",
    "about-us",
    "blog",
  ];

  const blogPosts = getAllBlogs();

  const blogRoutes = blogPosts.map((post) => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: post.date,
  }));

  const staticUrls = staticRoutes.map((route) => ({
    loc: `${baseUrl}${route ? `/${route}` : ""}`,
  }));

  const allUrls = [...staticUrls, ...blogRoutes];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      ({ loc, lastmod }) => `
    <url>
      <loc>${loc}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
      ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
