// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync, readFileSync } from "fs";
import path from "path";

// Your website domain
const BASE_URL = "https://www.insightmind.in";

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

  // Read blog posts from blogs.json
  const blogsJsonPath = path.resolve("./public/blogs.json");
  const blogPosts = JSON.parse(readFileSync(blogsJsonPath, "utf-8"));

  // Add blog URLs dynamically
  blogPosts.forEach(blog => {
    // Use slug for URL and datePublished for lastmod
    if (blog.slug && blog.datePublished) {
      pages.push({
        url: `/blog/${blog.slug}`,
        lastmod: blog.datePublished,
        changefreq: "weekly",
        priority: 0.7
      });
    }
  });

  // Generate SitemapStream
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  // Convert stream to XML string
  const xml = await streamToPromise(
    pages.reduce((stream, page) => (stream.write(page), stream), sitemap).end()
  ).then(sm => sm.toString());

  // Write sitemap.xml to /public so React serves it automatically
  const outputPath = path.resolve("./public/sitemap.xml");
  writeFileSync(outputPath, xml);

  console.log(`✅ Sitemap generated at ${outputPath}`);
}

generateSitemap();
