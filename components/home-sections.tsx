import Link from "next/link";
import { images } from "@/data/images";
import { companies } from "@/data/companies";
import { articles, reasons, values } from "@/data/content";
import { Arrow, ButtonLink, Eyebrow, Mark, Photo, TextLink } from "./ui";

export function Hero() {
  return (
    <section className="hero">
      <Photo
        image={images.accraAlt}
        priority
        className="hero-image"
        sizes="100vw"
      />
      <div className="hero-shade" />
      <div className="hero-content container">
        <div className="hero-topline">
          <span className="hero-rule" />
          CONCIERGE GROUP
          <span className="hero-topline-end">
            A shared vision. A wider horizon.
          </span>
        </div>
        <h1>
          Ghanaian Roots.
          <br />
          African Ambition.
          <br />
          <em>Global Standards.</em>
        </h1>
        <div className="hero-bottom-copy">
          <p>
            Building businesses. Creating value.
            <br />
            Connecting markets.
          </p>
          <ButtonLink href="/about">Explore our group</ButtonLink>
          <Link href="/partnerships" className="hero-secondary">
            Partner with us <Arrow diagonal />
          </Link>
        </div>
      </div>
      <div className="hero-bottom container">
        <a href="#introduction" className="scroll-cue">
          <span>↓</span>Discover Concierge
        </a>
        <p>
          <span className="location-dot">Accra, Ghana</span>
          <span className="hero-coordinates">
            Our foundation. Our starting point.
          </span>
        </p>
        <span className="hero-edition">
          01 <span>/</span> A WORLD OF POSSIBILITIES
        </span>
      </div>
      <div className="hero-side-label" aria-hidden="true">
        ROOTED IN PURPOSE · BUILT FOR POSSIBILITY
      </div>
    </section>
  );
}
export function Introduction() {
  return (
    <section className="introduction section-pad" id="introduction">
      <div className="container">
        <div className="intro-layout">
          <Eyebrow number="01">A group with purpose</Eyebrow>
          <div>
            <h2>
              Different businesses.
              <br />A shared belief in
              <br />
              <em>what’s possible.</em>
            </h2>
            <div className="intro-copy">
              <p>
                We are Concierge Group. A Ghanaian-founded family of businesses
                bringing insight, people and capabilities together to create
                lasting value.
              </p>
              <p>
                From advisory and communications to property, energy, logistics,
                mobility and social impact, our businesses share one ambition:
                to build with purpose and deliver to global standards.
              </p>
            </div>
            <TextLink href="/about">Get to know Concierge</TextLink>
          </div>
        </div>
        <div className="intro-baseline">
          <span>GHANAIAN-FOUNDED</span>
          <span>CONNECTED CAPABILITIES</span>
          <span>FORWARD-LOOKING</span>
          <Mark />
        </div>
      </div>
    </section>
  );
}
export function GroupEcosystem() {
  return (
    <section className="ecosystem-section section-pad">
      <div className="container">
        <div className="ecosystem-layout">
          <div className="ecosystem-title">
            <Eyebrow number="04">The power of connection</Eyebrow>
            <h2>
              One group.
              <br />
              Multiple capabilities.
              <br />
              <em>One philosophy.</em>
            </h2>
            <p>
              An opportunity rarely exists in isolation. Our businesses bring
              complementary perspectives to the bigger picture.
            </p>
            <TextLink href="/what-we-do">How our capabilities connect</TextLink>
            <div className="ecosystem-seal" aria-hidden="true">
              <Mark />
              <span>
                CONCIERGE
                <br />
                <small>CONNECTED BY PURPOSE</small>
              </span>
            </div>
          </div>
          <div className="ecosystem-list">
            {companies.map((company, i) => (
              <Link href={`/companies/${company.slug}`} key={company.slug}>
                <span className="ecosystem-node" />
                <span className="index">0{i + 1}</span>
                <div>
                  <h3>{company.name}</h3>
                  <p>{company.role}.</p>
                </div>
                <Arrow diagonal />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export function WhyConcierge() {
  return (
    <section className="why-section section-pad">
      <div className="container why-grid">
        <div>
          <Eyebrow number="06">Why Concierge</Eyebrow>
          <h2>
            Perspective that
            <br />
            makes a <em>difference.</em>
          </h2>
          <p>
            How we think is inseparable from how we work. These are the
            qualities we bring to every conversation.
          </p>
          <Photo image={images.consult} className="why-photo" />
        </div>
        <div className="reason-list">
          {reasons.map((reason, index) => (
            <details key={reason.title} name="why-concierge" open={index === 0}>
              <summary>
                <span className="index">0{index + 1}</span>
                <h3>{reason.title}</h3>
                <span className="plus" aria-hidden="true" />
              </summary>
              <p>{reason.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ValuesSection() {
  return (
    <section className="values-section">
      <div className="container">
        <div className="values-intro">
          <Eyebrow number="07">Responsible by principle</Eyebrow>
          <h2>
            How we grow matters
            <br />
            as much as <em>where we go.</em>
          </h2>
          <p>
            Our principles set the standard for our decisions, our relationships
            and the value we work to create.
          </p>
        </div>
        <div className="values-list">
          {values.map((value, i) => (
            <span key={value}>
              <span className="index">0{i + 1}</span>
              {value}
            </span>
          ))}
        </div>
        <TextLink href="/about#values">The principles behind our work</TextLink>
      </div>
    </section>
  );
}
export function ImpactSection() {
  return (
    <section className="impact-section">
      <Photo image={images.foundation} className="impact-photo" />
      <div className="impact-copy">
        <Eyebrow number="08">Concierge Foundation</Eyebrow>
        <h2>
          For a future
          <br />
          with more
          <br />
          <em>possibility.</em>
        </h2>
        <p>
          Business success should create opportunities beyond the business
          itself.
        </p>
        <p className="muted">
          Through Concierge Foundation, our commitment extends to human
          potential and the communities around us.
        </p>
        <div className="impact-areas">
          <span>Health</span>
          <span>Education</span>
          <span>Economic empowerment</span>
          <span>Community development</span>
        </div>
        <TextLink href="/companies/foundation">
          Discover our foundation
        </TextLink>
      </div>
    </section>
  );
}
export function PartnershipSection() {
  return (
    <section className="partnership-section section-pad">
      <div className="container">
        <Eyebrow number="09">Possibility works both ways</Eyebrow>
        <div className="partnership-statement">
          <h2>
            Africa for the <em>World.</em>
            <br />
            The World for <em>Africa.</em>
          </h2>
          <span className="partnership-arrows" aria-hidden="true">
            ↗<br />↙
          </span>
        </div>
        <div className="partnership-bottom">
          <p>
            Connecting African opportunities with global markets. Helping
            international organisations navigate African possibilities. It
            begins with a shared ambition.
          </p>
          <ButtonLink href="/partnerships" outline>
            Partner with Concierge
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
export function InsightsGrid({ full = false }: { full?: boolean }) {
  return (
    <section
      className={`insights-section section-pad ${full ? "insights-full" : ""}`}
    >
      <div className="container">
        {!full && (
          <div className="section-heading">
            <div>
              <Eyebrow number="10">Perspectives & possibilities</Eyebrow>
              <h2>
                A wider <em>perspective.</em>
              </h2>
            </div>
            <TextLink href="/insights">Explore our insights</TextLink>
          </div>
        )}
        <div className="insights-grid">
          {articles.map((article, i) => (
            <article
              className={`insight-article article-${i}`}
              key={article.slug}
            >
              <Link
                href={`/insights/${article.slug}`}
                className="article-image-link"
                aria-label={article.title}
              >
                <Photo
                  image={article.image}
                  className="article-image"
                  sizes={
                    full
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />
                <span className="article-image-arrow">
                  <Arrow diagonal />
                </span>
              </Link>
              <div className="article-meta">
                <span>{article.category}</span>
                <span>Sample editorial</span>
              </div>
              <h3>
                <Link href={`/insights/${article.slug}`}>{article.title}</Link>
              </h3>
              {full && <p>{article.excerpt}</p>}
              <Link className="article-read" href={`/insights/${article.slug}`}>
                Read perspective <Arrow />
              </Link>
            </article>
          ))}
        </div>
        <p className="sample-note">
          Editorial previews · These sample articles illustrate future insight
          themes, not corporate announcements.
        </p>
      </div>
    </section>
  );
}
