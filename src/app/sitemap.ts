import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-02");
  return ["/", "/prices/", "/book/"].map((p) => ({ url: `${site.url}${p}`, lastModified: now }));
}
