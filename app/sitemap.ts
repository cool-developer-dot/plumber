import type { MetadataRoute } from "next";
import { getAllAreaSlugs } from "@/lib/service-areas";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const areaPages = getAllAreaSlugs().map((slug) => ({
    url: `${SITE.url}/areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const servicePages = SERVICES.map((service) => ({
    url: `${SITE.url}${service.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const utilityPages = [
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority,
  }));

  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages,
    ...areaPages,
    ...utilityPages,
  ];
}
