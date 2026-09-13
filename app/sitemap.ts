import type { MetadataRoute } from "next";
import { companies } from "@/data/companies";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    "",
    "/about",
    "/companies",
    ...companies.map((c) => `/companies/${c.slug}`),
    "/what-we-do",
    "/markets",
    "/partnerships",
    "/insights",
    "/careers",
    "/contact",
    "/privacy",
    "/credits",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
