import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { companies } from "@/data/companies";
import {
  Arrow,
  Breadcrumbs,
  ButtonLink,
  Eyebrow,
  Photo,
  TextLink,
} from "@/components/ui";
import { pageMetadata } from "@/lib/site";
export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  return company
    ? pageMetadata(company.name, company.description, `/companies/${slug}`)
    : {};
}
export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = companies.find((c) => c.slug === slug);
  if (!c) notFound();
  const index = companies.indexOf(c);
  const next = companies[(index + 1) % companies.length];
  const split = ["consult", "pr", "foundation"].includes(slug);
  const masthead = (
    <div className="company-masthead">
      <Eyebrow>
        {c.name} · {c.category}
      </Eyebrow>
      <h1>{c.headline}</h1>
      <p>{c.description}</p>
    </div>
  );
  const banner = (
    <Photo
      image={c.image}
      priority
      className="company-banner"
      sizes={split ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
    />
  );
  return (
    <main
      className={`inner-main sector-${slug}`}
      id="main-content"
      style={{ "--sector-accent": c.accent } as CSSProperties}
    >
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Our companies", href: "/companies" },
            { label: c.name },
          ]}
        />
        {split ? (
          <div className="company-intro-grid">
            {masthead}
            {banner}
          </div>
        ) : (
          <>
            {masthead}
            {banner}
          </>
        )}
        <section className="editorial-split section-rule">
          <div>
            <Eyebrow>Our perspective</Eyebrow>
            <h2>{c.short}</h2>
          </div>
          <div className="editorial-prose">
            <p>{c.detail}</p>
            <p>
              As part of Concierge Group, we share a philosophy of
              understanding, connection, facilitation, delivery and value
              creation.
            </p>
            <TextLink href="/about#philosophy">
              The philosophy we share
            </TextLink>
          </div>
        </section>
        <section className="editorial-split section-rule">
          <div>
            <Eyebrow>
              {slug === "foundation"
                ? "Our areas of focus"
                : "Our capabilities"}
            </Eyebrow>
            <h2>
              {slug === "foundation"
                ? "Human potential.\nShared possibility."
                : "A clear focus.\nA considered approach."}
            </h2>
          </div>
          <div className="service-list">
            {c.services.map((service, i) => (
              <div key={service}>
                <span className="index">0{i + 1}</span>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </section>
        {slug === "foundation" && (
          <section className="editorial-split section-rule">
            <div>
              <Eyebrow>Our commitment</Eyebrow>
              <h2>Dignity at the centre.</h2>
            </div>
            <div className="editorial-prose">
              <p>
                We believe that social responsibility belongs in the way a
                business thinks about growth. Our focus is on opportunity,
                participation and the potential within communities.
              </p>
              <p>
                Specific programmes and opportunities to participate will be
                shared as verified information becomes available.
              </p>
            </div>
          </section>
        )}
        <section className="company-contact">
          <div>
            <Eyebrow>Let’s begin with a conversation</Eyebrow>
            <h2>
              {slug === "foundation"
                ? "Explore a shared purpose."
                : "Tell us what’s next."}
            </h2>
            <p>
              Share your priorities with {c.name}. We can explore how our focus
              connects with your requirements.
            </p>
          </div>
          <ButtonLink href={`/contact?interest=${c.slug}`} outline>
            {slug === "foundation"
              ? "Explore collaboration"
              : "Discuss your requirements"}
          </ButtonLink>
        </section>
        <div className="company-pagination">
          <TextLink href="/companies">All our companies</TextLink>
          <Link href={`/companies/${next.slug}`}>
            <span>
              <small>Continue exploring</small>
              {next.name}
            </span>
            <Arrow diagonal />
          </Link>
        </div>
      </div>
    </main>
  );
}
