import {
  Hero,
  Introduction,
  GroupEcosystem,
  WhyConcierge,
  ValuesSection,
  ImpactSection,
  PartnershipSection,
  InsightsGrid,
} from "@/components/home-sections";
import { CompanyShowcase } from "@/components/company-showcase";
import { PhilosophySequence } from "@/components/philosophy";
import { MarketJourney } from "@/components/market-journey";
import { CallToAction } from "@/components/footer";
import { description, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Ghanaian Roots. African Ambition. Global Standards.",
  description,
  "/",
);
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Introduction />
      <CompanyShowcase />
      <PhilosophySequence />
      <GroupEcosystem />
      <MarketJourney />
      <WhyConcierge />
      <ValuesSection />
      <ImpactSection />
      <PartnershipSection />
      <InsightsGrid />
      <CallToAction />
    </main>
  );
}
