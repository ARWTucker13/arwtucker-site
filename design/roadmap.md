# Site & properties roadmap

Scaffolding shipped July 2026: bento language chosen for arwtucker.com, field-manual
language ported to labs.arwtucker.com and healthsystems.vercel.app. This roadmap
works through each element one by one. Cross-cutting themes for every item:
**legibility**, **fit on a real laptop screen**, and **copy editing**.

---

## A. arwtucker.com (personal site)

### A1. Promote bento to production — ✅ DONE 2026-07-28
- Token swap per the promotion path (bento theme.css Block A → `:root`,
  Fraunces to root layout, Block B rules into globals.css)
- Replace `app/(site)/page.tsx` with the bento composition; build the real
  Header/Footer from the bento masthead (decide: keep sticky nav bar, or the
  vermilion nav card only on home + slim bar elsewhere?)
- Retire graph-paper hero; keep `/lab` as playground
- Decide fate of editorial + manual comps (keep for reference)

### A2. Homepage (bento) legibility pass
- Mono body text on dark ground: size/weight/contrast on a 13" screen —
  consider larger mono, or serif for longer passages
- Card grid behavior between 768–1100px (awkward middle widths)
- Copy edit: intro card, card blurbs, "Now" card

### A3. Research index + paper pages
- Line length, type scale, and spacing tuning on the cream reading pages
- Working-paper PDF links (`public/papers/<slug>.pdf` + button in postcard band)
  once drafts finalize; flesh out each page's content per paper (longer
  narrative sections, key figures)
- Consider one blueprint figure per paper (mini care-supply-chain variants)
- Copy edit all four argument blocks per paper

### A4. Teaching page
- Promote `/lab/bento/teaching` composition to production `/teaching`
- Verify featured links (labs.arwtucker.com, healthsystems.vercel.app) and
  update descriptions to match the restyled sites
- OLS + control-knobs figures: sizing/legibility on mobile

### A5. Blog page (Occupational Hazard Ratios)
- Bento restyle: OHR masthead card + posts as postcards
- Optimize `public/ohr-logo.png` (753 KB for a 104px image) or replace with a
  new mark consistent with the bento language
- Decide hazard-orange treatment inside the new palette

### A6. Code page
- Bento restyle; curate which repos surface (pinned list in content/ vs. API)

### A7. Site infrastructure
- OG images (generated, bento-styled) + full metadata per page
- Favicon: keep OHR logo or new mark
- sitemap.ts excluding /lab; robots
- Accessibility/contrast audit (cream-on-color card text, mono sizes)
- Font loading: subset/weights audit, `display: swap`

---

## B. labs.arwtucker.com (econometrics modules)

### B1. Legibility & screen fit ← first
- Content column vs. sidebar vs. TOC on 13" screens; code font size;
  plot canvas sizing on small screens
- Fix 5 bare `theme_minimal()` plots that skip `theme_house()`
- Factor the duplicated `theme_house()` block into a shared include
  (`_setup-theme.qmd`) — single source of truth for the plot palette

### B2. Copy edit pass
- Module-by-module read for voice and tightness; consistent exercise
  instructions phrasing; check subtitle color-references match rendered colors

### B3. Exercise-widget polish
- Syntax-highlight token colors → field-manual set (the `--exercise-editor-hl-*`
  custom properties)
- "PASSED" stamp motif on graded success; hint/solution styling
- Loading state styling (webR download indicator)

### B4. Manual apparatus deepening
- FIG numbering + bracketed captions on plots
- Landing page as manual cover: numbered TOC cards, dither rules

### B5. Content
- Module 4 (causal inference sequence) — the numbering gap
- Future: GHP 525 / PHS 2000B week-by-week adaptation (per hs-site CLAUDE.md
  sequencing notes)

### B6. Build pipeline
- Consider GitHub Action that runs `quarto render` so `_site/` isn't
  hand-rendered before every push

---

## C. healthsystems.vercel.app (Control Knobs)

(Existing feature roadmap lives in that repo's CLAUDE.md; merged view here.)

### C1. Legibility pass ← first
- Gauge labels (9px) and knob labels (10px) are below comfortable minimums;
  contrast-check dusty gold and sage text on white/paper
- Scenario card text density; effect-level visual distinction (tint by level —
  already on that repo's roadmap)

### C2. Copy edit
- Overview framework text, knob intros, scenario descriptions (graduate-policy
  voice per its CLAUDE.md)

### C3. Features (from its roadmap, in priority order)
- Country case studies (/cases) — schema first, 2–3 gold-standard cases
- "Build Your System" mode
- Search/filter by outcome metric
- Glossary panel
- Fill 3 remaining literature gaps

---

## Suggested sequence

1. **A1 bento promotion** — locks the production tokens; everything downstream
   styles against the real thing
2. **A2–A3** — homepage + research legibility/copy (the pages committees see)
3. **B1–B2** — labs legibility + copy
4. **A4–A7** — teaching/blog/code + infrastructure
5. **C1–C2** — hs-site legibility + copy
6. **B3–B6 / C3** — deeper polish and features, interleaved with content work
   (paper PDFs, module 4, country cases)
