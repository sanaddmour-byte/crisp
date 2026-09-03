# Crisp Yield Partners — Marketing Site

Bilingual (EN/AR) marketing site for Crisp Yield Partners, a construction capital
advisory firm. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Local Development

Requirements: Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # Next.js/ESLint checks
```

## Deployment

The app is a standard Next.js App Router project and deploys to Vercel with no
extra configuration:

1. Push this repository to GitHub (or your Git provider of choice).
2. Import the repo in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — accept the defaults and deploy.

For any other Node hosting, run `npm run build` then `npm run start`.

### GitHub Pages preview

`.github/workflows/deploy-pages.yml` builds a static export and publishes it to
GitHub Pages on every push to `main`. One-time setup: in the repo's
**Settings → Pages**, set **Source** to **GitHub Actions**; the workflow does
the rest. The live preview is served at
`https://<owner>.github.io/crisp/`.

This is a static export (`next build` with `output: "export"`, triggered by
the `GITHUB_PAGES_EXPORT=true` env var the workflow sets — local
`npm run dev`/`npm run build` are unaffected), so two things differ from the
Vercel deployment:

- It's served from the `/crisp` subpath (`basePath`/`assetPrefix` are set
  accordingly when `GITHUB_PAGES_EXPORT=true`), not the domain root.
- The contact form's `/api/contact` route isn't included in a static export
  (Next.js drops API routes from `output: "export"` builds), so on this
  preview the form will show its error state on submit. It works normally
  on Vercel and in local dev, where the API route is served.

## Folder Structure

```
app/
  layout.tsx                 Root layout: fonts, LanguageProvider, Header/Footer
  globals.css                Tailwind layers + scroll-reveal animation
  page.tsx                   Home
  capital-feasibility/       Capital & Feasibility vertical page
  technical-due-diligence/   Technical Due Diligence vertical page (anchor)
  corporate-operations/      Corporate Operations vertical page
  about/                     About / Founder page
  contact/                   Contact page
  api/contact/route.ts       Stubbed contact form submit handler (see TODO below)

components/                  Shared, presentational UI (Header, Footer, CTAButton,
                              PageHero, VerticalSections, ContactForm, etc.)

content/                     All page copy, in English and Arabic, as typed
                              objects (Localized<T> = { en: T; ar: T }). This is
                              the layer to swap out first if the site moves to a
                              CMS later — each file's shape maps cleanly to a
                              CMS content model.

lib/
  i18n.ts                    Locale type, default locale, localStorage key
  LanguageContext.tsx        React context: current locale, dir (ltr/rtl),
                              setLocale/toggleLocale, persisted to localStorage
```

## Internationalization / RTL

- The language toggle lives in the header (desktop and mobile) and the footer.
- Selection is persisted to `localStorage` (`cyp-locale`) and restored on
  return visits.
- Switching to Arabic sets `dir="rtl"` and `lang="ar"` on `<html>`, which flips
  the entire layout direction (not just text), and switches the font to Noto
  Sans Arabic. English uses Inter.
- A small inline script in `app/layout.tsx` applies the stored locale's
  `dir`/`lang` before hydration to avoid a flash of the wrong direction.
- **The Arabic copy in `content/*.ts` is a first draft, written for this
  build.** It has not been reviewed by a native Arabic speaker or a
  professional translator. Have it reviewed before launch.

## Content Notes

- No CMS is wired up for v1. All copy lives in `content/*.ts` as plain,
  typed objects — deliberately structured (flat fields, arrays of
  `{ title, description }`, etc.) so it can be lifted into a CMS (Sanity,
  Contentful, etc.) later with minimal remodeling.
- Per the brief, the site does not name real clients, cite dollar-figure
  results, or expose internal financial-modeling assumptions (conversion
  rates, CAC, gain-share formulas, baseline-lock mechanics). The Technical
  Due Diligence page's "Illustrative Scenarios" are explicitly labeled as
  composite, non-verified examples.
- Contact details (`contact@crispyieldpartners.com`, `+962 XX XXX XXXX`) are
  placeholders throughout — update `content/nav.ts` and `content/contact.ts`
  with real details before launch.

## TODO — Contact Form Backend

`app/api/contact/route.ts` currently validates the incoming payload and logs
it to the server console. **It does not send an email or create a CRM
record.** Before launch, wire it to a real provider, for example:

- Transactional email (Resend, SendGrid, Postmark) to notify the team, and/or
- A CRM (HubSpot, Salesforce, Pipedrive) to create a lead record.

The route already returns `{ ok: true }` / `{ ok: false, error }` shapes that
the form UI (`components/ContactForm.tsx`) expects, so swapping the internals
is a self-contained change — no frontend changes should be required.

## Known Housekeeping

- `npm audit` reports a small number of high-severity advisories from
  dev-only/transitive packages (`eslint-config-next`'s bundled `glob`, and
  Next.js's internally bundled `postcss`). These do not affect the shipped
  app and will clear on a future Next.js minor/major upgrade; tracked here
  rather than forced through a breaking major-version bump as part of this
  build.
