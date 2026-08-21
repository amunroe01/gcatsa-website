# GCA TSA Design System

## Color tokens (`tailwind.config.ts`)

| Token | Hex | Use |
|---|---|---|
| `navy-950` | #00092E | Deepest background (hero, footer) |
| `navy-900` / `navy-800` | #001033 / #001A70 | Official brand navy — headers, headings, dark sections |
| `navy-700` | #0A2A8C | Hover state on navy |
| `navy-100` / `navy-50` | #E7EAF6 / #F4F6FC | Light tinted section backgrounds |
| `green-400` | #5BC500 | Official brand green — CTAs, accents, links on dark bg |
| `green-600` | #4CA300 | Hover state on green buttons |
| `green-100/200` | tints | Light hover backgrounds |
| `steel-500` | #7E7E82 | Official brand grey — secondary/body text on white |
| `white` | #FFFFFF | Official brand white |

**Never** place green text on white at small sizes (fails contrast) — green
is for buttons, icons, dark backgrounds, and large headings only. Body copy
on white uses `text-navy-700` or `text-steel-700`.

## Typography

Apotek Wide Black and Eurostile Medium are licensed Adobe fonts and cannot be
loaded via public CDN, so we use free, license-safe Google Fonts chosen for
the same wide/geometric, engineering-blueprint character:

| Role | Font (stand-in) | Tailwind class | Original spec |
|---|---|---|---|
| Display / H1 | Orbitron (900/800) | `font-display` | Apotek Wide – Black |
| Secondary headings | Rajdhani (600/700) | `font-heading` | Eurostile – Medium |
| Body | Bahnschrift → Segoe UI → sans-serif (system font, per brand doc) | `font-body` | Bahnschrift |
| Labels / eyebrows / data tags | JetBrains Mono | `font-mono` | — (cybersecurity/coding motif) |

If your organization licenses Apotek Wide and Eurostile via Adobe Fonts,
add the kit `<link>` in `app/layout.tsx` and update the `--font-display` /
`--font-heading` CSS variables in `globals.css` — no component changes
needed.

## Signature visual motif

A PCB circuit-trace pattern (`components/CircuitBackground.tsx`) that draws
itself in on load and pulses at the via (node) points. Used on dark
sections (hero, Goals, Alumni & Sponsors) to reinforce the "engineering /
innovation" identity without relying on generic tech clichés (no matrix
rain, no stock circuit clipart).

Dividers and list markers use a small green "via" dot (`.via-node` class)
instead of numbered badges — numbering is reserved for content that's
genuinely sequential (e.g., calendar steps, application steps), not
decorative section breaks.

## Motion

- `components/Reveal.tsx` — fade + slide-up on scroll into view, used to
  stagger cards/lists. `once: true` so it doesn't replay in a distracting way.
- Hero elements animate in once on page load.
- All animation respects `prefers-reduced-motion` (handled globally in
  `globals.css`).

## Components & patterns to reuse on future pages

- `.btn-primary` — solid green CTA button (main actions: Join, Donate, Register)
- `.btn-secondary` — outlined white button for dark backgrounds (secondary actions)
- `.eyebrow` — small green monospace label above section headings
- `.via-node` — green circuit-node dot for list bullets/dividers
- Card pattern: `rounded-xl border border-navy-100 bg-white p-7 shadow-sm hover:-translate-y-1 hover:border-green-400 hover:shadow-lg` — used in WhyJoin, reuse for Events cards, Officer cards, Sponsor tiers, etc.
- Alternate section backgrounds down the page: white → navy-50 → navy-800/950
  → white, to create rhythm without needing extra dividers.

## Accessibility checklist (apply to every new page)

- [ ] One `<h1>` per page, logical heading order after that
- [ ] All images have descriptive `alt` text (decorative images use `aria-hidden`)
- [ ] All interactive elements reachable and operable by keyboard
- [ ] Visible focus ring (inherited automatically from `globals.css`)
- [ ] Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text/UI components
- [ ] Forms have associated `<label>`s and error messaging tied via `aria-describedby`
- [ ] Landmarks: page content wrapped in `<main>`/`<section aria-labelledby>`
