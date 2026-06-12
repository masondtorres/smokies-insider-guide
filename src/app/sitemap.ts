import type { MetadataRoute } from "next";
import { indexableRoutes, siteUrl } from "@/lib/site-routes";

const lastReviewed = new Date("2026-06-12T00:00:00-04:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: lastReviewed,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
