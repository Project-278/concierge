import { Breadcrumbs, PageHero } from "@/components/ui";
import { InsightsGrid } from "@/components/home-sections";
import { CallToAction } from "@/components/footer";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Insights",
  "Editorial previews exploring connected business, Ghanaian foundations and responsible growth. All current articles are clearly labelled sample content.",
  "/insights",
);
export default function Insights() {
  return (
    <main id="main-content" className="inner-main">
      <div className="container">
        <Breadcrumbs items={[{ label: "Insights" }]} />
        <PageHero
          eyebrow="Perspectives & possibilities"
          title={"A wider lens.\nA considered perspective."}
          text="Ideas at the intersection of enterprise, markets and responsible growth. This preview presents sample editorial themes for the future Concierge insights platform."
        />
        <InsightsGrid full />
      </div>
      <CallToAction />
    </main>
  );
}
