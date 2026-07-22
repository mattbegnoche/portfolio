---
name: design-direction
description: Design and layout conventions for the portfolio site. Use when building or styling any page or component.
---

# Design Direction

Derived from three reference sites the user picked (heyderekj.com, jonathanmoore.com, yevtam.com). Common thread across all three: restraint. Personality comes from typography and structure, not color or decoration.

## Color

- Single dark palette, no light/dark toggle — `--color-paper: #05070d` (near-black background), `--color-ink: #eef0f3` (light text). One theme, applied sitewide.
- One accent color, used sparingly — links, hover states, focus rings, active nav item, the logo mark. Nothing else gets colored.
- Accent is the blue-green from the logo: `--color-accent: #46d4b1`. Defined once in `src/styles/global.css` — always reference the token/utility (`text-accent`, `border-accent`, etc.), never hardcode the hex in a component.
- Tailwind `@theme` tokens: `--color-ink`, `--color-paper`, `--color-accent`, `--color-muted`, `--color-hairline`. Don't reach for a broader palette than this.

## Background

- Plain solid `--color-paper` background, everywhere. **No decorative background shapes** (tried a starfield + nebula-glow treatment in round 2 — explicitly rejected, don't reintroduce circles/blobs/gradients as page decoration without being asked again).
- If a future request wants a background treatment, confirm the specific look first rather than building a full effect speculatively.

## Logo

- `src/components/Logo.astro` — inline SVG mark, fill set to `currentColor` so it inherits whatever text color wraps it (in the header, that's `text-accent`).
- Used in `Header.astro` at `h-9 w-auto` (links to `/`) and as `public/favicon.svg` (hardcoded to `#1eac89` there since favicons don't inherit page CSS).
- Treat it as the one piece of non-typographic branding on the site — don't introduce other icons/illustrations without a reason.

## Typography

- One sans-serif for everything (headings, body, nav). Pick one modern, neutral system-adjacent face (e.g. system UI stack or a single Google/variable font) — do not mix multiple display fonts.
- One monospace face reserved for metadata only: dates, tags, project status, section labels. This is the typographic personality move — use it deliberately, not everywhere.
- Hierarchy comes from weight and size steps, not color.

## Layout

- Single column, vertical flow. No multi-column dashboards, no sidebar.
- Section headers use a consistent typographic marker (pick one motif and use it everywhere — e.g. a `/` or numbered prefix before each section name) rather than boxes/cards with heavy borders.
- Project entries: thumbnail/title/date/tags as a simple stacked row, not a heavy bordered card. A single hairline divider between entries is enough.
- Generous vertical whitespace between sections — err toward more breathing room, not less.

## Navigation

- Minimal, text-based nav — plain links, no button chrome. Bracket or underline treatment on hover is enough.
- Footer holds social/contact links (email, GitHub, etc.) in the same plain-text style as nav.

## Motion

- Restrained by default: simple CSS transitions (opacity/transform, ~150–250ms) on hover/focus only.
- No animation library (GSAP etc.) for round 1 — add one later only if a specific interaction actually needs it. Don't build motion infrastructure speculatively.

## Tone

- Confident and understated. Let the work and the writing carry personality; the UI should get out of the way.
