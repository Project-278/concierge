"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companies } from "@/data/companies";
import { Arrow, Brand, Photo } from "./ui";
import { images } from "@/data/images";

const links = [
  { label: "About us", href: "/about" },
  { label: "What we do", href: "/what-we-do" },
  { label: "Our markets", href: "/markets" },
  { label: "Insights", href: "/insights" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<"companies" | "mobile" | null>(null);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const companiesButton = useRef<HTMLButtonElement>(null);
  const home = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(null);
        (open === "mobile" ? menuButton : companiesButton).current?.focus();
      }
      if (event.key === "Tab" && open === "mobile") {
        const items = [
          ...(header.current?.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled]), summary",
          ) ?? []),
        ].filter((el) => el.getClientRects().length > 0);
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(null);
    };
    const onFocus = (event: FocusEvent) => {
      if (
        open === "companies" &&
        !header.current?.contains(event.target as Node)
      )
        setOpen(null);
    };
    const onResize = () => {
      if (
        (open === "mobile" && window.innerWidth >= 1100) ||
        (open === "companies" && window.innerWidth < 1100)
      )
        setOpen(null);
    };
    const background = [
      ...document.querySelectorAll<HTMLElement>("main, footer, .skip-link"),
    ];
    if (open === "mobile") {
      document.body.style.overflow = "hidden";
      background.forEach((element) => {
        element.inert = true;
      });
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("focusin", onFocus);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      background.forEach((element) => {
        element.inert = false;
      });
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(null);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header
        ref={header}
        className={`site-header ${!home || scrolled || open ? "header-solid" : "header-overlay"}`}
      >
        <div
          className="header-inner"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) close();
          }}
        >
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            <Link
              href="/about"
              aria-current={pathname.startsWith("/about") ? "page" : undefined}
            >
              About us
            </Link>
            <button
              ref={companiesButton}
              aria-expanded={open === "companies"}
              aria-controls="companies-menu"
              onClick={() => setOpen(open === "companies" ? null : "companies")}
              className={pathname.startsWith("/companies") ? "nav-active" : ""}
            >
              Our companies{" "}
              <span
                className={`chevron ${open === "companies" ? "rotated" : ""}`}
              />
            </button>
            {links.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  pathname.startsWith(link.href) ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/partnerships" className="header-cta">
            Let’s connect <Arrow diagonal />
          </Link>
          <button
            ref={menuButton}
            className={`menu-toggle ${open === "mobile" ? "is-open" : ""}`}
            aria-label={
              open === "mobile" ? "Close navigation" : "Open navigation"
            }
            aria-expanded={open === "mobile"}
            aria-controls="mobile-menu"
            onClick={() => setOpen(open === "mobile" ? null : "mobile")}
          >
            <span />
            <span />
          </button>
        </div>
        {open === "companies" && (
          <div
            id="companies-menu"
            className="mega-menu"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) close();
            }}
          >
            <div className="mega-intro">
              <p className="eyebrow">The Concierge ecosystem</p>
              <h2>
                Distinct expertise.
                <br />
                <em>Shared ambition.</em>
              </h2>
              <Link className="text-link" href="/companies">
                Explore our companies <Arrow />
              </Link>
            </div>
            <div className="mega-links">
              {companies.map((company, index) => (
                <Link key={company.slug} href={`/companies/${company.slug}`}>
                  <span className="index">0{index + 1}</span>
                  <span>
                    {company.name}
                    <small>{company.category}</small>
                  </span>
                  <Arrow diagonal />
                </Link>
              ))}
            </div>
            <Photo
              image={images.properties}
              className="mega-photo"
              sizes="25vw"
            />
          </div>
        )}
        {open === "mobile" && (
          <nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) close();
            }}
          >
            <span className="eyebrow">Ghanaian roots. Global standards.</span>
            <Link href="/about">
              About us <Arrow />
            </Link>
            <details>
              <summary>
                Our companies <span>+</span>
              </summary>
              <div className="mobile-companies">
                <Link href="/companies">Explore the group</Link>
                {companies.map((c) => (
                  <Link key={c.slug} href={`/companies/${c.slug}`}>
                    {c.name}
                  </Link>
                ))}
              </div>
            </details>
            {links.slice(1).map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
                <Arrow />
              </Link>
            ))}
            <Link href="/partnerships">
              Partnerships <Arrow />
            </Link>
            <Link href="/careers">
              Careers <Arrow />
            </Link>
            <Link href="/contact">
              Contact <Arrow />
            </Link>
            <p className="mobile-menu-note">
              One group. A world of possibilities.
            </p>
          </nav>
        )}
      </header>
      {open === "companies" && (
        <div className="menu-scrim" aria-hidden="true" />
      )}
    </>
  );
}
