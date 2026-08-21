# Gulf Coast Academy TSA Website

Official website for the Gulf Coast Academy Technology Student Association
(TSA) chapter. Built with Next.js 15 (App Router), Tailwind CSS, and Framer
Motion.

## Status

✅ **Home** — fully built
🚧 Events, 2027 Themes & Problems, Calendar, Officers, About Us, Get Involved —
placeholder pages, built next.

## Brand system

Colors, fonts, and design rationale live in `DESIGN_SYSTEM.md`. All brand
tokens are wired into `tailwind.config.ts` (`navy`, `green`, `steel`) and
`app/globals.css` (font variables, focus states, buttons).

Official logo files are in `public/images/`, sourced from
`GCAITBrookside_Logos__Colors__FINAL.pdf`.

## Getting started locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Project structure

```
app/
  layout.tsx          Root layout — fonts, header, footer, skip link
  page.tsx             Home page (fully built)
  globals.css          Brand tokens, base styles, accessibility helpers
  events/               placeholder — Events catalog (next)
  themes/               placeholder — 2027 Themes & Problems (next)
  calendar/             placeholder — Chapter calendar (next)
  officers/             placeholder — Officer profiles (next)
  about/                placeholder — About GCA & chapter history (next)
  get-involved/         placeholder — Families/alumni/sponsors/volunteers (next)
components/
  Header.tsx, Footer.tsx
  CircuitBackground.tsx Animated PCB-trace hero graphic (signature element)
  Reveal.tsx             Scroll-reveal wrapper (Framer Motion)
  ComingSoon.tsx          Shared placeholder for unbuilt pages
  home/                   Home page sections (Hero, Mission, Goals, WhyJoin,
                           ParentSection, AlumniSponsors)
public/images/            Official GCA logo files
```

## Accessibility (WCAG 2.1 AA)

- Skip-to-content link, semantic landmarks (`header`, `main`, `footer`, `nav`)
- 3px high-contrast keyboard focus ring on every interactive element
- All icons are `aria-hidden`; all interactive icons have `aria-label`s
- Color pairings checked for 4.5:1 text contrast against brand navy/green/white
- `prefers-reduced-motion` respected globally
- Alt text required on every image (enforced by component structure)

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required for the current build.
4. Click **Deploy**. Vercel will build and host the site automatically on
   every push to `main`.

## Next steps

We're building the remaining pages one at a time: Events → 2027 Themes &
Problems → Calendar → Officers → About Us → Get Involved.
