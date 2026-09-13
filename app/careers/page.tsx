import { Breadcrumbs, Eyebrow, PageHero, TextLink } from "@/components/ui";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Careers",
  "Explore the principles and professional culture behind Concierge Group. Verified career opportunities will be published here when available.",
  "/careers",
);
export default function Careers() {
  return (
    <main id="main-content" className="inner-main">
      <div className="container">
        <Breadcrumbs items={[{ label: "Careers" }]} />
        <PageHero
          eyebrow="People & possibility"
          title={"Bring your perspective.\nBuild with purpose."}
          text="Our ambition calls for curiosity, professional excellence and people who see the value in working across disciplines."
          image={images.consult}
        />
        <section className="career-culture section-rule">
          <div>
            <Eyebrow>How we think about work</Eyebrow>
            <h2>
              Good work begins
              <br />
              with good principles.
            </h2>
            <p>
              Across our businesses, the way we work matters. Our values set an
              expectation for thoughtful decisions, clear communication and
              respect for the people around us.
            </p>
          </div>
          <div>
            {[
              {
                title: "Professional excellence",
                text: "Take care with the details. Approach each responsibility with clarity and a commitment to doing the work well.",
              },
              {
                title: "Curiosity & collaboration",
                text: "Ask useful questions, consider different perspectives and recognise the strength of connected capabilities.",
              },
              {
                title: "Integrity & responsibility",
                text: "Act with honesty, treat people with respect and understand the wider consequences of a decision.",
              },
            ].map((p) => (
              <div className="career-principle" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="empty-state" id="opportunities">
          <Eyebrow>Career opportunities</Eyebrow>
          <h2>The next chapter starts here.</h2>
          <p>
            No vacancies are currently published on this website. Verified roles
            and application instructions will be added when available.
          </p>
          <TextLink href="/contact?interest=careers">
            Make a careers enquiry
          </TextLink>
        </section>
      </div>
    </main>
  );
}
