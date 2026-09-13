import { Breadcrumbs, Eyebrow, Photo } from "@/components/ui";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Photography credits",
  "Credits and sources for the royalty-free photography used in the Concierge Group website prototype.",
  "/credits",
);
export default function Credits() {
  return (
    <main id="main-content" className="inner-main">
      <div className="container">
        <Breadcrumbs items={[{ label: "Photography credits" }]} />
        <article className="legal-page">
          <Eyebrow>Acknowledgements</Eyebrow>
          <h1>
            A considered
            <br />
            visual perspective.
          </h1>
          <p>
            Photography is used to illustrate the Group’s business focus and
            outlook. These images do not depict Concierge-owned assets,
            employees, completed projects or Foundation programmes. The Accra
            photography shows the Group’s home-market context.
          </p>
          <div className="credit-list">
            {Object.entries(images).map(([key, image]) => (
              <section key={key}>
                <Photo image={image} sizes="(max-width: 430px) 100vw, 400px" />
                <h2>{image.category}</h2>
                <p>{image.credit}</p>
                <a href={image.source} target="_blank" rel="noreferrer">
                  View original photograph ↗
                </a>
              </section>
            ))}
          </div>
          <p>
            Photography is used under the respective Unsplash and Pexels
            licences. The typographic identity and geometric monogram are an
            original concept for this website, pending final Concierge brand
            assets.
          </p>
        </article>
      </div>
    </main>
  );
}
