import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/service-areas`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/gallery`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${site.url}/service-areas/${l.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: l.ring.startsWith("core") ? 0.8 : 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
