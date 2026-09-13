import Link from "next/link";
import { companies } from "@/data/companies";
import { Arrow, Breadcrumbs, PageHero } from "@/components/ui";
import { GroupEcosystem } from "@/components/home-sections";
import { CallToAction } from "@/components/footer";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "What we do",
  "Advisory, communications, investment and business support, property, energy, logistics, automobile and social impact, connected through Concierge Group.",
  "/what-we-do",
);
const capabilities = [
  {
    title: "Advisory",
    company: "consult",
    text: "Understanding your context and helping define a considered direction for your business.",
  },
  {
    title: "Communications & PR",
    company: "pr",
    text: "Bringing clarity to your story through public relations, marketing and commercial communications.",
  },
  {
    title: "Investment & business support",
    company: "consult",
    text: "Identifying requirements, examining opportunities and facilitating the next steps in a business journey.",
  },
  ...companies
    .slice(2)
    .map((c) => ({
      title: c.category.split(" & ")[0],
      company: c.slug,
      text: c.description,
    })),
];
export default function WhatWeDo() {
  return (
    <main id="main-content" className="inner-main">
      <div className="container">
        <Breadcrumbs items={[{ label: "What we do" }]} />
        <PageHero
          eyebrow="Connected capabilities"
          title={"The bigger picture.\nThe practical next step."}
          text="We bring different disciplines around a shared purpose: understanding an opportunity and helping move it forward."
        />
        <div className="capability-index">
          {capabilities.map((c, i) => (
            <Link
              href={`/companies/${c.company}`}
              key={c.title}
              className="capability-row"
            >
              <span className="index">0{i + 1}</span>
              <h2>{c.title}</h2>
              <p>{c.text}</p>
              <Arrow diagonal />
            </Link>
          ))}
        </div>
      </div>
      <GroupEcosystem />
      <CallToAction />
    </main>
  );
}
