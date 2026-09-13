import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { description, siteUrl } from "@/lib/site";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: {
    default: "Concierge Group | Ghanaian Roots. Global Standards.",
    template: "%s | Concierge Group",
  },
  description,
  robots: siteUrl
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Concierge Group",
    title: "Concierge Group",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Concierge Group",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} antialiased`}
    >
      <body>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Concierge Group of Companies",
              description,
              ...(siteUrl ? { url: siteUrl } : {}),
              foundingLocation: { "@type": "Country", name: "Ghana" },
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
