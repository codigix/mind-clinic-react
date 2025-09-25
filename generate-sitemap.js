// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";

// Replace with your actual domain
const BASE_URL = "https://yourdomain.com";

async function generateSitemap() {
  // Static pages
  const pages = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/services", changefreq: "monthly", priority: 0.8 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    { url: "/know-your-disorders", changefreq: "monthly", priority: 0.7 },
    { url: "/blogs", changefreq: "weekly", priority: 0.9 }
  ];

  // Example blog posts – replace with your dynamic source if needed
  const blogPosts = [
    { slug: "understanding-integrated-psychiatry-a-holistic-approach-to-mental-health", lastmod: "2024-09-24" },
    { slug: "stress-burnout-in-corporate-professionals-how-to-break-the-cycle", lastmod: "May 20, 2025" },
    { slug: "mental-health-tips", lastmod: "2025-09-08" }
  ];

  blogPosts.forEach(blog => {
    pages.push({
      url: `/blogs/${blog.slug}`,
      lastmod: blog.lastmod,
      changefreq: "weekly",
      priority: 0.7
    });
  });

  // Generate sitemap
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream(path.resolve("./dist/sitemap.xml"));

  pages.forEach(page => sitemap.write(page));
  sitemap.end();

  await streamToPromise(sitemap);
  sitemap.pipe(writeStream);

  console.log("✅ Sitemap generated at dist/sitemap.xml");
}

generateSitemap();
