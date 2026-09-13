import { ButtonLink, Eyebrow } from "@/components/ui";
export default function NotFound() {
  return (
    <main id="main-content" className="inner-main">
      <div className="container not-found">
        <Eyebrow>404 · A different direction</Eyebrow>
        <h1>
          Let’s find
          <br />
          your next step.
        </h1>
        <p>
          The page you are looking for is not here. Explore the Group to find
          our companies, capabilities and perspectives.
        </p>
        <ButtonLink href="/">Return to the group</ButtonLink>
      </div>
    </main>
  );
}
