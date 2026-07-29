import type { MetadataRoute } from "next";
import { indexableRoutes, siteUrl } from "@/lib/site-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
  }));
}
