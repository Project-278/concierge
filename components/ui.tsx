import Link from "next/link";
import Image from "next/image";
import type { EditorialImage } from "@/data/images";

export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`arrow ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M5 19 19 5M5 5h14v14" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="43"
      height="43"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M34 9 24 3 7 13v22l17 10 17-10V22H24v10h8v-5M32 15l-8-5-11 7v14l11 7 11-7" />
      <path d="M18 20v8l6 4" />
    </svg>
  );
}
export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Concierge Group home"
    >
      <Mark />
      <span>
        CONCIERGE<small>GROUP OF COMPANIES</small>
      </span>
    </Link>
  );
}
export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`text-link ${light ? "light" : ""}`} href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function ButtonLink({
  href,
  children,
  outline = false,
}: {
  href: string;
  children: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <Link className={`button ${outline ? "button-outline" : ""}`} href={href}>
      {children}
      <Arrow diagonal />
    </Link>
  );
}
export function Photo({
  image,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  image: EditorialImage;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={image.url}
        alt={image.alt}
        fill
        sizes={sizes}
        {...(priority ? { loading: "eager", fetchPriority: "high" } : {})}
      />
    </div>
  );
}
export function Eyebrow({
  children,
  number,
}: {
  children: React.ReactNode;
  number?: string;
}) {
  return (
    <p className="eyebrow">
      {number && <span className="section-number">{number}</span>}
      <span className="eyebrow-line" />
      {children}
    </p>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <Link href="/">Home</Link>
      {items.map((item) => (
        <span key={item.label}>
          <span aria-hidden="true">/</span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function PageHero({
  eyebrow,
  title,
  text,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: EditorialImage;
  children?: React.ReactNode;
}) {
  return (
    <section className={`page-hero ${image ? "page-hero-split" : ""}`}>
      <div className="page-hero-copy">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
        {children}
      </div>
      {image && <Photo image={image} priority className="page-hero-photo" />}
    </section>
  );
}
