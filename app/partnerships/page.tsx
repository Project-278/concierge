import {
  Breadcrumbs,
  Eyebrow,
  PageHero,
  Photo,
  TextLink,
} from "@/components/ui";
import { images } from "@/data/images";
import { PhilosophySequence } from "@/components/philosophy";
import { CallToAction } from "@/components/footer";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Partnerships",
  "Explore partnerships with Concierge Group: connecting African opportunities with global markets and international organisations with African possibilities.",
  "/partnerships",
);
export default function Partnerships() {
  return (
    <main id="main-content" className="inner-main">
      <div className="container">
        <Breadcrumbs items={[{ label: "Partnerships" }]} />
        <PageHero
          eyebrow="An invitation to build together"
          title={"Africa for the World.\nThe World for Africa."}
          text="Meaningful partnerships begin with a shared purpose. We welcome conversations with investors, businesses, institutions and organisations looking to explore what comes next."
        />
        <Photo
          image={images.team}
          className="partnership-photo"
          priority
          sizes="100vw"
        />
        <section className="partnership-paths">
          <div>
            <Eyebrow>From Africa, outward</Eyebrow>
            <h2>
              Your ambition.
              <br />A wider horizon.
            </h2>
            <p>
              For African businesses seeking new markets, stronger visibility or
              strategic support, our connected capabilities offer a starting
              point for exploring the opportunity.
            </p>
            <TextLink href="/contact?interest=partnership">
              Explore your next market
            </TextLink>
          </div>
          <div>
            <Eyebrow>From the world, inward</Eyebrow>
            <h2>
              A new market.
              <br />
              An informed perspective.
            </h2>
            <p>
              For international organisations exploring Ghana and African
              opportunities, we begin with local context and the business
              requirements behind your ambition.
            </p>
            <TextLink href="/contact?interest=partnership">
              Start a market conversation
            </TextLink>
          </div>
        </section>
        <section className="editorial-split section-rule">
          <div>
            <Eyebrow>What we look for</Eyebrow>
            <h2>
              Shared values.
              <br />
              Mutual possibility.
            </h2>
          </div>
          <div className="editorial-prose">
            <p>
              We value relationships built on integrity, clear communication and
              a commitment to professional standards. A useful first
              conversation starts with your purpose, your priorities and where
              you see an opportunity to work together.
            </p>
            <p>
              From there, we can consider the relevant capabilities across the
              Group and define a practical next step.
            </p>
          </div>
        </section>
      </div>
      <PhilosophySequence />
      <CallToAction />
    </main>
  );
}
