import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

/**
 * Search engines and AI search assistants may read the site (it is a portfolio meant to be found);
 * only the contact API is off limits.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"], allow: "/", disallow: "/api/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
