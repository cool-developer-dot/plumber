import type { MetadataRoute } from "next";
import { getAllAreaSlugs } from "@/lib/service-areas";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const areaPages = getAllAreaSlugs().map((slug) => ({
    url: `${SITE.url}/areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...areaPages,
  ];
}
