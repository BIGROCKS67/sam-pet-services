import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

// Search engines and AI assistants are all welcome: the more of them that can read Sam's prices, the better.
const aiCrawlers = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Bingbot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
