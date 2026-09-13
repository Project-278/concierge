import type { Metadata } from "next";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export const description =
  "A Ghanaian-founded diversified group connecting advisory, communications, property, energy, logistics, mobility and social impact. Ghanaian roots. African ambition. Global standards.";
export function pageMetadata(
  title: string,
  summary: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | Concierge Group` },
    description: summary,
    alternates: siteUrl ? { canonical: `${siteUrl}${path}` } : undefined,
    openGraph: {
      title: `${title} | Concierge Group`,
      description: summary,
      type: "website",
      ...(siteUrl
        ? {
            url: `${siteUrl}${path}`,
            images: [
              { url: `${siteUrl}/opengraph-image`, width: 1200, height: 630 },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Concierge Group`,
      description: summary,
      ...(siteUrl ? { images: [`${siteUrl}/opengraph-image`] } : {}),
    },
  };
}
