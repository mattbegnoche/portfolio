---
name: design-direction
description: Design and layout conventions for the portfolio site. Use when building or styling any page or component.
---

# Design Direction

Round 3: rebuilt to match a Webflow export the user preferred (`matt-begnoche-dev.webflow/`, kept in the repo as a design reference only — its HTML/CSS/JS is not used directly, everything is rebuilt in Astro + Tailwind v4). This **replaces** the earlier minimalist/monochrome direction from rounds 1–2 — don't mix the two.

## Color

- Light theme: white page background (`--color-paper`), near-black text (`--color-ink`), grey surface for cards/nav (`--color-surface: #f7f7f7`).
- Accent: `--color-accent: #1e6ef4` (blue), `--color-accent-dark: #1a5ecf` for hover.
- Status/success color: `--color-green: #35c759` (online-status dot, etc).
- Muted/secondary text: use `text-black/50` or `text-ink/50` (Tailwind opacity modifier), not a separate token.
- Hairline borders: `--color-hairline` (~7% black).

## Radii — used everywhere, favor the largest tokens

- Scale: `--radius-xxxs`(8px) → `--radius-xxl`(32px), plus `--radius-pill`(1000px) and native `rounded-full` for circles.
- `xxl` is the dominant "big card" radius (bento cards, work cards). `pill` is for buttons/badges/nav container. Don't undersize — err toward the bigger end of the scale.

## Typography

- Sans: **Inter** (self-hosted via `@fontsource/inter`, weights 300–700), used everywhere — headings, body, nav.
- Mono: **DM Mono** (`@fontsource/dm-mono`, weight 400/500), used sparingly for metadata/eyebrow labels (`font-mono text-xs uppercase text-ink/50`) and the one code-snippet mockup on the About-cards "Coding Since" card.

## Components & pattern library

- `PillNav.astro` — fixed bottom-center floating pill nav (Home/Works/About icons + divider + accent "Say Hi" mailto button). Active page gets `bg-accent text-white`; inactive gets `text-ink/70 hover:bg-black/5`.
- `Ticker.astro` — CSS-only marquee (two rows, opposite `animation-direction`, `prefers-reduced-motion` disables it), pastel `emoji-pill` chips (9 named color pairs defined in `global.css` — `.pill-default`, `.pill-warm-beige`, etc). **Stats are placeholders (`X+`) pending real numbers — don't invent figures.**
- `AboutCards.astro` — bento grid of cards (`rounded-xxl bg-surface`) mixing personal facts, emoji, and Matt's real memoji images (`public/images/memoji/`).
- `TechStack.astro` — 4-category tool list using real brand SVGs from `public/images/tools/` (not an icon font/library — these are the actual Webflow-exported brand assets).
- `WorkCard.astro` — project card (cover image optional, graceful "No preview yet" fallback), links to `/works/[id]`.
- `SkillBlock.astro`, `ExperienceBlock.astro`, `ValueBlock.astro`, `QuoteBlock.astro` — About/work-detail building blocks.
- Emoji illustrations (`public/images/emoji/`, 33 files) are used pervasively as lightweight decoration — this design embraces that, unlike the earlier "no decorative shapes" rule from round 2 (which is superseded).

## Pages

- Full multi-page: `/` (Home), `/works` (listing), `/works/[id]` (detail), `/about`, `/404`, `/changelog`, `/licenses`.
- Every page's primary section has `id="hero"` — footer's "Back to Top" links to `#hero` on the current page.

## Content accuracy

- Project data schema (`src/content.config.ts`) matches the Webflow CMS fields (`type`, `role`, `year`, `cover`, `icon`, `mockup`, `quote`, `attribution`, `avatar`) — the export's own CMS CSV was unmodified template demo data, not reused as content, only as a schema reference.
- Never port Webflow-template bugs/placeholders at face value: fix leftover template branding (e.g. "Jordan Bluren", `hello@bluren.dev`) rather than carrying them over. When real data isn't available yet (social URLs, project screenshots, ticker stats), leave an obvious placeholder (`href="#"` + TODO comment, "No preview yet", `X+`) rather than fabricating something that reads as real.

## Motion

- Marquee ticker (CSS `@keyframes`, no JS library) is the one sanctioned continuous-motion element. Otherwise stay restrained: simple hover/focus color transitions only.
