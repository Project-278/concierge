import Link from "next/link";
import {
  Breadcrumbs,
  Eyebrow,
  PageHero,
  Photo,
  TextLink,
} from "@/components/ui";
import { companies } from "@/data/companies";
import { CallToAction } from "@/components/footer";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Our companies",
  "Explore the seven Concierge businesses: Consult, PR, Properties, Energy, Logistics, Automobile and Foundation.",
  "/companies",
);
export default function Companies() {
  return (
    <main className="inner-main" id="main-content">
      <div className="container">
        <Breadcrumbs items={[{ label: "Our companies" }]} />
        <PageHero
          eyebrow="The Concierge portfolio"
          title={"Seven perspectives.\nA shared ambition."}
          text="Distinct areas of expertise. Complementary capabilities. Explore the businesses that make up Concierge Group."
        />
        <div className="company-directory">
          {companies.map((c, i) => (
            <article key={c.slug} className="directory-entry">
              <Link
                href={`/companies/${c.slug}`}
                aria-label={`Discover ${c.name}`}
              >
                <Photo image={c.image} className="directory-image" />
              </Link>
              <div className="directory-copy">
                <Eyebrow number={`0${i + 1}`}>{c.category}</Eyebrow>
                <h2>{c.name}</h2>
                <p>{c.description}</p>
                <TextLink href={`/companies/${c.slug}`}>
                  Discover {c.name}
                </TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CallToAction />
    </main>
  );
}
