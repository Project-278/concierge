import { Breadcrumbs, Eyebrow, PageHero, TextLink } from "@/components/ui";
import { images } from "@/data/images";
import { operatingPrinciples } from "@/data/content";
import { PhilosophySequence } from "@/components/philosophy";
import { ValuesSection } from "@/components/home-sections";
import { MarketJourney } from "@/components/market-journey";
import { CallToAction } from "@/components/footer";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "About us",
  "Get to know Concierge Group: our Ghanaian foundation, connected businesses, philosophy, values and direction of growth.",
  "/about",
);
export default function About() {
  return (
    <main id="main-content" className="inner-main">
      <div className="container">
        <Breadcrumbs items={[{ label: "About us" }]} />
        <PageHero
          eyebrow="Our identity"
          title={"Built on purpose.\nOpen to possibility."}
          text="A Ghanaian-founded group of businesses, united by a belief in the value of understanding, connection and thoughtful execution."
          image={images.team}
        />
        <section id="who-we-are" className="editorial-split section-rule">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2>
              One group.
              <br />A connected outlook.
            </h2>
          </div>
          <div className="editorial-prose">
            <p>
              <strong>
                Concierge Group is the mother company and strategic holding
                brand for seven complementary entities.
              </strong>{" "}
              Together, they span advisory, communications, property, energy,
              logistics, automobile solutions and social impact.
            </p>
            <p>
              Our businesses have distinct areas of focus and a shared way of
              thinking. We begin by understanding the opportunity, connect
              relevant capabilities and work toward value for clients, partners
              and communities.
            </p>
            <TextLink href="/companies">Meet our companies</TextLink>
          </div>
        </section>
        <section className="twin-statements" id="vision-mission">
          <div>
            <Eyebrow>Our vision</Eyebrow>
            <h2>
              Ghanaian foundations.
              <br />A wider ambition.
            </h2>
            <p>
              To build globally competitive businesses from African foundations,
              with a growth pathway from Ghana to West Africa, across Africa and
              toward the world.
            </p>
          </div>
          <div>
            <Eyebrow>Our mission</Eyebrow>
            <h2>
              Understand the need.
              <br />
              Create the value.
            </h2>
            <p>
              To bring insight, relationships and complementary capabilities
              together through advisory, facilitation and practical business
              support, guided by professional excellence.
            </p>
          </div>
        </section>
      </div>
      <PhilosophySequence />
      <div id="values">
        <ValuesSection />
      </div>
      <div className="container">
        <div className="principle-strip">
          <Eyebrow>Our operating commitments</Eyebrow>
          <div>
            {operatingPrinciples.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
        <section className="leadership-note section-rule" id="leadership">
          <Eyebrow>Leadership & stewardship</Eyebrow>
          <h2>
            Responsibility begins
            <br />
            with how we lead.
          </h2>
          <p>
            Our approach to leadership is grounded in integrity, professional
            excellence and a commitment to long-term value. Verified leadership
            profiles will be introduced here when available.
          </p>
        </section>
      </div>
      <MarketJourney />
      <CallToAction />
    </main>
  );
}
