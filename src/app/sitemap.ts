import type { MetadataRoute } from "next";
import { servicePages } from "@/data/services";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-02");
  const pages = ["/", "/prices/", ...servicePages.map((s) => `/${s.slug}/`), "/areas/", "/faq/", "/book/"];
  return pages.map((p, i) => ({ url: `${site.url}${p}`, lastModified: now, priority: i === 0 ? 1 : 0.8 }));
}
