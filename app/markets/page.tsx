import { Breadcrumbs, Eyebrow, PageHero } from "@/components/ui";
import { markets } from "@/data/content";
import { MarketJourney } from "@/components/market-journey";
import { CallToAction } from "@/components/footer";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Our markets",
  "Ghana is our foundation. Explore Concierge Group’s strategic direction toward West Africa, Africa and global markets.",
  "/markets",
);
export default function Markets() {
  return (
    <main id="main-content" className="inner-main">
      <div className="container">
        <Breadcrumbs items={[{ label: "Our markets" }]} />
        <PageHero
          eyebrow="Our direction of growth"
          title={"Rooted in Ghana.\nLooking beyond borders."}
          text="Our pathway begins at home and looks outward. Ghana, West Africa, Africa and the world describe our ambition, rather than a claim of offices or operations in every market."
        />
      </div>
      <MarketJourney />
      <div className="container">
        <div className="market-entries">
          {markets.map((m, i) => (
            <section className="market-entry" key={m.name} id={m.slug}>
              <span className="index">0{i + 1}</span>
              <div>
                <Eyebrow>{m.eyebrow}</Eyebrow>
                <h2>{m.name}</h2>
              </div>
              <div>
                <p>{m.text}</p>
                <span className="status-tag">{m.status}</span>
              </div>
            </section>
          ))}
        </div>
      </div>
      <CallToAction />
    </main>
  );
}
