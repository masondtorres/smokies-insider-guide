import type { MetadataRoute } from "next";
import { places } from "@/data/places";
import { indexableRoutes, siteUrl } from "@/lib/site-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = indexableRoutes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
  }));

  const placeRoutes: MetadataRoute.Sitemap = places.map((place) => ({
    url: `${siteUrl}/places/${place.slug}`,
    lastModified: place.lastVerified,
  }));

  return [...staticRoutes, ...placeRoutes];
}
