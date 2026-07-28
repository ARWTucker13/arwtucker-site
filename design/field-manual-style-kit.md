# Field Manual — portable style kit

The "field manual" graphic language (Making Software × cybernetics) used for
Austin Tucker's quantitative/instructional material. Developed in this repo's
design lab (`/lab/manual`, and fused into bento cards on `/lab/bento/teaching`).
This file is the handoff spec for porting the language to other properties —
first target: `ARWTucker13/econometrics-for-health-policy` (labs.arwtucker.com),
later the Health System Control Knobs site (`ARWTucker13/hs-site`).

Reference implementations in this repo:
- `app/lab/manual/theme.css` — full token sheet + components
- `app/lab/manual/page.tsx` — exploded-view annotated SVG pattern (FIG_001)
- `app/lab/bento/theme.css` (the `bn-fig*` block) — the fusion variant: manual
  figures embedded inside another design system
- `app/lab/bento/teaching/page.tsx` — OLS scatter + control-knobs SVG figures

## Tokens

```css
:root {
  --paper: #fbf9f4;        /* warm paper ground */
  --paper-raised: #ffffff;
  --ink: #1c1a15;
  --ink-soft: #57534a;
  --ink-faint: #8b8577;
  --rule: #ddd8ca;
  --blueprint: #2b49c7;    /* primary accent: figure ink, links, buttons */
  --blueprint-deep: #1c339a;
  --blueprint-soft: #dde4f8;
  --hazard: #d9541e;       /* secondary accent: warnings, status, emphasis */
  --hazard-soft: #f7e3d8;
  --grid-line: rgba(43, 73, 199, 0.09);
}
```

Fonts: a workhorse sans for UI (Inter), a readable serif for exposition
(Source Serif 4), and a mono that does heavy lifting (JetBrains Mono) for all
labels, numbering, annotations, and code. Mono is the voice of the system.

## Core motifs (CSS in `app/lab/manual/theme.css`)

- **Numbered section heads** — `1.0 — RESEARCH` in letterspaced uppercase mono,
  blueprint color. In the labs: module/section numbers map 1:1 (`2.3 —
  CLUSTERED STANDARD ERRORS`).
- **Dither band dividers** — 8px checkerboard band
  (`repeating-conic-gradient`, ~45% opacity) between major sections.
- **Figure frames** — dotted 1px border + solid blueprint corner ticks
  (top-left, bottom-right) + fine dot-grid background. Every plot, diagram, and
  screenshot lives in one.
- **FIG numbering** — every figure gets `FIG_00N` in rotated or inline mono;
  captions in the bracket style below.
- **Bracketed captions** — `[ CMS PBJ · DAILY PANEL ]` — mono, blueprint
  brackets, used for datasets, sources, footnote-ish metadata.
- **Annotated SVG diagrams** — hand-built, 1.3px blueprint strokes, one layer
  filled `--blueprint-soft` or `--hazard-soft` for emphasis, dashed spine,
  callout leader lines with 9px mono labels. See the care-supply-chain and
  control-knobs figures.

## Mapping onto the labs specifically

- Module landing = manual cover: numbered TOC (`1.0, 2.0, …`), dither rules.
- Each chart/plot output gets a figure frame + `FIG` number + bracket caption.
- Graded R exercise blocks become "instrument panels": framed, mono-labeled
  (`EXERCISE 3.2 · GRADED`), with hazard-orange status and a stamp-style
  "PASSED" mark on completion.
- Code/console areas: paper-raised background inside a figure frame, mono.
- Keep body exposition in the serif at a generous measure — the manual look
  comes from the apparatus around the prose, not from styling the prose itself.

## Porting notes

- The stack there is unknown until audited (likely webR + a JS shell or
  Quarto). The tokens are plain CSS custom properties — framework-agnostic.
- If the labs use Tailwind v4, copy the token bridge pattern from this repo's
  `app/globals.css` (`@theme inline` mapping raw vars to utilities). Utilities
  resolve `var()` at usage site, so scoped overrides work; never override the
  `--color-*` theme names, only the raw vars.
- Start a Claude session in the labs repo and point it at this file.
