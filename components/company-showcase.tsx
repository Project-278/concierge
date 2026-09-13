"use client";
import { useState } from "react";
import Link from "next/link";
import { companies } from "@/data/companies";
import { Arrow, Eyebrow, Photo, TextLink } from "./ui";

export function CompanyShowcase() {
  const [active, setActive] = useState(0);
  const company = companies[active];
  return (
    <section className="company-showcase section-pad" id="our-companies">
      <div className="container">
        <div className="section-heading">
          <div>
            <Eyebrow number="02">Our companies</Eyebrow>
            <h2>
              Distinct expertise.
              <br />
              <em>Collective strength.</em>
            </h2>
          </div>
          <p>
            Seven businesses. One shared commitment to turning possibility into
            lasting value.
          </p>
        </div>
        <div className="portfolio-layout">
          <div
            className="portfolio-list"
            role="tablist"
            aria-label="Explore our companies"
            aria-orientation="vertical"
          >
            {companies.map((c, index) => (
              <button
                key={c.slug}
                id={`company-tab-${index}`}
                role="tab"
                aria-selected={active === index}
                aria-controls="company-panel"
                tabIndex={active === index ? 0 : -1}
                className={`portfolio-row ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  let next = index;
                  if (event.key === "ArrowDown")
                    next = (index + 1) % companies.length;
                  else if (event.key === "ArrowUp")
                    next = (index + companies.length - 1) % companies.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = companies.length - 1;
                  else return;
                  event.preventDefault();
                  setActive(next);
                  document.getElementById(`company-tab-${next}`)?.focus();
                }}
              >
                <span className="index">0{index + 1}</span>
                <span>
                  <span className="portfolio-name">{c.name}</span>
                  <span className="portfolio-category">{c.category}</span>
                </span>
                <Arrow diagonal />
              </button>
            ))}
          </div>
          <div
            id="company-panel"
            role="tabpanel"
            aria-labelledby={`company-tab-${active}`}
            className="portfolio-feature"
            tabIndex={0}
          >
            <div key={company.slug} className="portfolio-feature-inner">
              <Photo image={company.image} className="portfolio-image" />
              <div className="portfolio-image-label">
                <span>
                  Concierge{" "}
                  {company.slug === "pr"
                    ? "PR"
                    : company.slug.charAt(0).toUpperCase() +
                      company.slug.slice(1)}
                </span>
                <span>0{active + 1} / 07</span>
              </div>
              <div className="portfolio-caption">
                <div>
                  <p className="eyebrow" style={{ color: company.accent }}>
                    {company.category}
                  </p>
                  <h3>{company.short}</h3>
                  <p>{company.description}</p>
                </div>
                <Link
                  className="round-arrow"
                  href={`/companies/${company.slug}`}
                  aria-label={`Discover ${company.name}`}
                >
                  <Arrow diagonal />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-bottom">
          <span>Independent capabilities. An interconnected outlook.</span>
          <TextLink href="/companies">Discover the full portfolio</TextLink>
        </div>
      </div>
    </section>
  );
}
