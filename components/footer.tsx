import Link from "next/link";
import { companies } from "@/data/companies";
import { Arrow, Brand, Eyebrow, TextLink } from "./ui";

export function CallToAction() {
  return (
    <section className="closing-cta section-pad">
      <div className="container">
        <Eyebrow>A conversation is a beginning</Eyebrow>
        <div className="closing-grid">
          <h2>
            Let’s explore what
            <br />
            we can build <em>together.</em>
          </h2>
          <div>
            <p>
              Exploring Ghana? Entering new markets? Looking for strategic
              support, greater visibility or a new partnership? Let’s explore
              the possibilities.
            </p>
            <Link
              href="/contact"
              className="circle-link"
              aria-label="Contact Concierge Group"
            >
              <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="closing-links">
          <TextLink href="/contact">Work with us</TextLink>
          <TextLink href="/companies">Explore our companies</TextLink>
          <TextLink href="/partnerships">Partner with us</TextLink>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand footer />
            <p>
              Ghanaian roots.
              <br />
              African ambition.
              <br />
              Global standards.
            </p>
            <span className="location-dot">
              Founded in Ghana. Looking ahead.
            </span>
          </div>
          <div className="footer-nav">
            <p className="eyebrow">The group</p>
            {[
              { title: "About us", href: "/about" },
              { title: "Our companies", href: "/companies" },
              { title: "What we do", href: "/what-we-do" },
              { title: "Our markets", href: "/markets" },
              { title: "Partnerships", href: "/partnerships" },
            ].map((l) => (
              <Link key={l.href} href={l.href}>
                {l.title}
              </Link>
            ))}
          </div>
          <div className="footer-nav footer-companies">
            <p className="eyebrow">Our companies</p>
            {companies.map((c) => (
              <Link key={c.slug} href={`/companies/${c.slug}`}>
                {c.name}
              </Link>
            ))}
          </div>
          <div className="footer-nav">
            <p className="eyebrow">Connect</p>
            <Link href="/insights">Insights</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">
              Contact us <Arrow diagonal />
            </Link>
            <Link href="/companies/foundation">Our foundation</Link>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          CONCIERGE
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Concierge Group of Companies</p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/credits">Photography credits</Link>
            <a href="#main-content">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
