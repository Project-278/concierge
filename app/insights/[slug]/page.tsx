import { notFound } from "next/navigation";
import { articles } from "@/data/content";
import { Breadcrumbs, Eyebrow, Photo, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/site";
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return article
    ? {
        ...pageMetadata(article.title, article.excerpt, `/insights/${slug}`),
        robots: { index: false, follow: true },
      }
    : {};
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return (
    <main id="main-content" className="inner-main">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Insights", href: "/insights" },
            { label: "Sample perspective" },
          ]}
        />
        <article className="article-page">
          <Eyebrow>
            {article.category} · {article.readTime}
          </Eyebrow>
          <h1>{article.title}</h1>
          <p className="article-deck">{article.excerpt}</p>
          <span className="demo-label">
            Sample editorial · Not a corporate announcement
          </span>
          <Photo
            image={article.image}
            className="article-cover"
            priority
            sizes="(max-width: 1000px) 100vw, 900px"
          />
          <div className="article-body">
            {article.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <TextLink href="/insights">All perspectives</TextLink>
        </article>
      </div>
    </main>
  );
}
