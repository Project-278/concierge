import { Breadcrumbs, Eyebrow, TextLink } from "@/components/ui";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Privacy information",
  "How this Concierge Group website preview handles enquiry information, local drafts and photography.",
  "/privacy",
);
export default function Privacy() {
  const enabled = Boolean(process.env.ENQUIRY_WEBHOOK_URL);
  return (
    <main id="main-content" className="inner-main">
      <div className="container">
        <Breadcrumbs items={[{ label: "Privacy information" }]} />
        <article className="legal-page">
          <Eyebrow>Website information</Eyebrow>
          <h1>
            Your information.
            <br />
            Handled with care.
          </h1>
          <p>
            This page describes the information handling implemented in this
            website preview.
          </p>
          <h2>Enquiry details</h2>
          <p>
            {enabled
              ? "When you submit an enquiry, your name, email address, optional organisation, area of interest and message are sent to the configured enquiry service so that your request can be considered. Please only include information relevant to your enquiry."
              : "The enquiry form currently prepares a draft in your browser. It does not send your name, email address, organisation or message to Concierge Group. A download is created only when you choose to save your draft."}
          </p>
          <h2>Browser storage</h2>
          <p>
            This website does not use analytics or advertising trackers. Enquiry
            drafts are held in the page’s memory and are not saved to cookies or
            local storage. A draft is cleared when the page is closed or
            reloaded. Copies you download remain on your device until you delete
            them.
          </p>
          <h2>Technical requests</h2>
          <p>
            Your browser requests pages, fonts and images from the website host.
            The hosting environment may process standard connection information
            to serve these requests. This application does not add a separate
            visitor tracking service.
          </p>
          <h2>Photography</h2>
          <p>
            Prototype photographs are served from this website. Credit links
            lead to external photography websites, which have their own privacy
            information.
          </p>
          <h2>Before sharing information</h2>
          <p>
            Please do not include sensitive personal information or confidential
            documents in an enquiry. The published contact details and full
            organisational privacy notice will be added when confirmed.
          </p>
          <TextLink href="/contact">Back to your enquiry</TextLink>
        </article>
      </div>
    </main>
  );
}
