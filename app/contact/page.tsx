import { Breadcrumbs, Eyebrow, PageHero, TextLink } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Contact",
  "Start a conversation with Concierge Group about business support, partnerships, our companies or career enquiries.",
  "/contact",
);
export default function Contact() {
  return (
    <main id="main-content" className="inner-main">
      <div className="container">
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <PageHero
          eyebrow="A conversation is a beginning"
          title={"Let’s explore\nwhat comes next."}
          text="Tell us about your ambition, your organisation or the opportunity you have in mind. A clear understanding is where we begin."
        />
        <div className="contact-layout">
          <aside className="contact-aside">
            <h2>
              One group.
              <br />
              An open conversation.
            </h2>
            <p>
              Whether you are exploring Ghana, looking for strategic support or
              considering a partnership, choose the area that best matches your
              enquiry.
            </p>
            <Eyebrow>Our foundation</Eyebrow>
            <p>Ghana, West Africa</p>
            <p className="contact-note">
              For a focused conversation, tell us what you are working toward
              and which capabilities may be relevant. Please avoid including
              confidential or sensitive documents.
            </p>
            <TextLink href="/companies">Explore our companies</TextLink>
          </aside>
          <ContactForm
            deliveryEnabled={Boolean(process.env.ENQUIRY_WEBHOOK_URL)}
          />
        </div>
      </div>
    </main>
  );
}
