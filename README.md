# Concierge Group of Companies

An editorial corporate website built in the existing Next.js 16 App Router application with TypeScript, React 19 and Tailwind CSS 4. No `src` directory.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

Stop the development server before building and starting the production server on the same port.

## Design and content

The visual system uses warm ivory, forest green, an original geometric monogram, Cormorant Garamond display typography and DM Sans interfaces. All fonts are self-hosted by `next/font`. The original monogram and wordmark are concept assets because no approved logo was supplied.

The home page has a cinematic Accra hero, company selector, keyboard-operated philosophy sequence, connected company index, geographic outlook, values, Foundation section, partnership invitation, sample editorial and closing invitation. Desktop has a company mega menu; mobile has an independently composed navigation panel with focus containment and Escape support. Reduced motion preferences are respected.

The site has 21 content routes, including seven company pages, three sample articles and the supporting corporate pages. Subsidiaries use split, panoramic and centred mastheads with sector photography and tailored copy. Missing corporate information is omitted or identified explicitly. No revenue, offices, clients, projects, leadership identities or impact outcomes have been invented.

- `data/companies.ts`: portfolio, positioning, capabilities and sector accents.
- `data/content.ts`: philosophy, principles, market direction and clearly labelled sample articles.
- `data/images.ts`: central image definitions, remote originals, local copies, alt text and credits.
- `components/`: reusable page sections and accessible interactions.
- `lib/enquiry.ts`: shared form validation and draft formatting.
- `lib/site.ts`: metadata and canonical URL conventions.
- `app/api/enquiry/route.ts`: optional server-only enquiry delivery integration.

Prototype photographs are locally stored in `public/images` and rendered with Next/Image. They illustrate business sectors and are not claims about Concierge assets, staff or programmes. The website provides a photography credits page.

## Configuration before publication

Copy `.env.example` to `.env.local` and set the confirmed site origin in `NEXT_PUBLIC_SITE_URL`. Rebuild after configuration changes. With the origin unset, previews are `noindex` and `sitemap.xml` is intentionally empty. With it configured, the application generates canonical URLs, a sitemap, robots directives, Open Graph/Twitter previews and truthful Organization structured data. Sample articles remain unindexed until replaced with approved editorial content.

The form works without external credentials: it validates the enquiry and allows the visitor to download a clearly labelled **unsent draft**. Drafts stay in browser memory; no personal information is persisted to browser storage. There is no invented contact email or simulated delivery confirmation.

To enable delivery, set `ENQUIRY_WEBHOOK_URL` to a trusted receiving service and optionally set `ENQUIRY_WEBHOOK_TOKEN`. The endpoint receives a JSON POST with `name`, `email`, `organisation`, `interest`, `message`, `consent` and `source`. It must return 2xx only after accepting the enquiry. Non-2xx responses and timeouts show an error without clearing the form. Configure the receiving service's storage, delivery, abuse protection and retention policies for production use. Supply the approved organisational privacy notice and verified contact details when that integration is ready.

Replace concept branding and prototype photography with approved corporate assets when available. Add verified leadership profiles, roles and published editorial as supplied. No CMS or recruiting backend is implied.

## Browser verification

With the production server running:

```sh
npm run test:e2e
```

The Playwright suite uses locally installed Google Chrome. Alternatively, install Playwright Chromium and remove the `channel` setting in `playwright.config.ts`. Use `QA_BASE_URL` to point tests at another local server. The draft-mode tests expect the delivery webhook to be unset.

Checks cover all content routes at mobile and desktop widths, image loading, automated WCAG A/AA checks, the nine requested responsive breakpoints, internal link/fragment validity, navigation keyboard behaviour, portfolio/philosophy/market selectors, enquiry validation and downloading, and API failure statuses. Automated accessibility tests complement visual and keyboard review; they are not a certification of complete WCAG conformance.
