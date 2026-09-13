import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(siteUrl
        ? {
            allow: "/",
            disallow: [
              "/api/",
              "/insights/a-connected-perspective",
              "/insights/building-from-ghana",
              "/insights/opportunity-beyond-business",
            ],
          }
        : { disallow: "/" }),
    },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
