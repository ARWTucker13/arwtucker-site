# Master Ecosystem Roadmap

The full teaching/research web ecosystem, one component at a time.
Drafted 2026-07-28 with all scaffolding live: arwtucker.com (bento),
labs.arwtucker.com + healthsystems.vercel.app (field-manual).

## Principles

- **Committee-first sequencing.** Austin is on the 2026–27 market; applications go
  out Sept–Nov 2026. Everything a hiring committee will see ships by **mid-Oct 2026**
  (the Phase 1 line below). Depth and new properties follow.
- **One design language.** Bento (personal site) + field-manual (technical/teaching
  material). Spec: `design/field-manual-style-kit.md`. The PPTX/Quarto template
  system in TeachingDecks gets updated to match (item 10) — no palette forks.
- **Two stacks only.** Quarto/webR for document-like teaching (labs, sessions);
  Next.js for app-like interactives (hs-site, role-plays, explorables). The Flask
  TB sim gets rebuilt as a Next mini-app when its turn comes (item 15); no new stacks.
- **Subdomains under arwtucker.com.** labs.✓ · knobs. (hs-site) · care. (Labor of
  Health) · sections. (interactive sessions) · innovation. — the personal site is
  the hub that links them all.
- **Blog is Substack-canonical.** Writing happens on Substack (email list from day
  one); the site's blog page is a well-designed RSS-fed index (already built).
- **Content vs. build.** Items marked 🖊 are Austin-owned content work (writing,
  recording, finalizing drafts); everything else is buildable in-session. Content
  and build tasks within a phase run in parallel.

---

## Ordered priority list

### Phase 1 — Application season (now → mid-Oct 2026)

1. **Research pages deep-dive** — per-paper narrative expansion beyond the four
   blocks, PDF buttons wired to `public/papers/<slug>.pdf`, one blueprint figure
   per paper, abstract + BibTeX; copy edit. 🖊 finalize working-paper PDFs.
2. **Homepage + site legibility/copy pass** — mono body sizing on dark ground,
   card grid at 768–1100px widths, copy edit every card.
3. **Blog launch** — bento restyle of the OHR index page, optimize/replace the
   753 KB logo. 🖊 write 2–3 Substack posts (the page is empty until then).
4. **Code page curation** — pinned repo list in `content/`, better descriptions,
   READMEs for the four public repos (they're portfolio surface now).
5. **Site infrastructure** — OG images, sitemap (excluding /lab), favicon decision
   (OHR logo vs. new bento mark), contrast audit, Vercel analytics, and DNS:
   point knobs.arwtucker.com at hs-site.
6. **Labs polish** — legibility/screen-fit on 13" screens (column/TOC widths, code
   size, plot canvas), fix the 5 bare `theme_minimal()` plots, factor the
   duplicated `theme_house()` into a shared include; copy pass over 5 modules.

**Mid-Oct 2026 line: everything above is what committees see. Ship it.**

### Phase 2 — Winter 2026–27 (teaching depth + flagship)

7. **Labs causal-inference sequence** — Module 4 (binary outcomes) + randomization,
   DiD, RD, IV. Source material already staged in TeachingDecks: PHS 2000B IV/RDD
   labs, GHP 525 labs 11–12, problem sets with solutions.
8. **Labor of Health explorable** (care.arwtucker.com) — new Next.js repo. The
   dissertation as public scholarship: the care supply chain as a living system.
   Readers pull policy levers (school closures, immigration restrictions, wages)
   and watch workforce → delivery → outcomes respond, parameterized by the actual
   estimates from the three papers. Bento × blueprint tokens. Doubles as job-talk
   material — build before spring flyouts.
9. **Knobs: country case studies + legibility** — the case-study schema + 2–3
   gold-standard cases (per hs-site CLAUDE.md), plus the C1 legibility pass
   (9px gauge labels, 10px knob labels, dusty-gold contrast).
10. **Template system → field-manual** — update `templates/build_template.py`
    tokens/fonts (automate the Georgia→Source Serif swap), align
    `templates/quarto-theme.scss` with the labs theme, single-source the theme
    (or a documented sync step) so the two copies stop drifting.

### Phase 3 — Spring/summer 2027 (new properties + media)

11. **Interactive section sessions** (sections.arwtucker.com) — start with the two
    born-interactive GENED 1063 weeks: **Zika role-play** and **UK sugar-tax
    negotiation** as Next mini-apps, plus two document-like sessions in Quarto
    (Cancer Alley, health-systems country cases). This establishes the session
    format that everything else (FPH quiz, future courses) follows.
12. **Knobs explainer videos** 🖊 — produced videos: script → storyboard (motion
    graphics from the site itself + recorded VO) → edit → YouTube embeds. One per
    knob + one framework overview. Needs a small production pipeline; scripts are
    buildable, recording is Austin-owned.
13. **Knobs: Build-Your-System mode** — then search/filter, glossary.
14. **Innovation in Health** (innovation.arwtucker.com) — three modules:
    **diffusion & adoption** (interactive diffusion curves, the 17-year lag),
    **value & priority-setting** (interactive ICERs/league tables — ties to the
    TB/HIV costing work), **R&D pipeline & incentives** (push/pull funding,
    neglected-disease market failures). Automation/capital-margin content lives
    in the Labor site, not here.
15. **TB mining sim rebuild + FPH quiz** — retire the Flask prototype, rebuild as
    a Next mini-app under sections. using the established session format; FPH
    Python quiz follows the same pattern.

---

## Component detail

### 1 · Research pages (arwtucker.com/research)
**State:** postcard index + cream color-coded paper pages live; scroll reveal;
four argument blocks per paper. **Next:** item 1. **Depends on:** 🖊 paper drafts
for PDFs; content expansion can precede final PDFs (mark "draft available on
request" until then).

### 2 · Econometrics labs (labs.arwtucker.com)
**State:** 5 modules live (5,500 lines of qmd), field-manual styled, webR graded
exercises. `_site/` is committed and served verbatim — **must `quarto render`
before every push** (consider a GitHub Action later). **Next:** item 6, then 7.
**Assets staged:** TeachingDecks/GHP 525 (labs 1–12, problem sets), PHS2000B (IV,
RDD). Exercise-widget polish (syntax-highlight tokens, PASSED stamp) rides with 7.

### 3 · Interactive section sessions (sections.arwtucker.com — new)
**State:** 13 weeks of raw GENED 1063 material in TeachingDecks (A/B/C convention,
8 weeks with decks); zero conversion. **Decision:** hybrid stack — Quarto for
document-sessions, Next mini-apps for role-plays/simulations. **Next:** item 11.
**Format goal:** each session = one self-contained interactive artifact a TF could
run a section from, or a student could work through solo.

### 4 · HS Control Knobs (knobs.arwtucker.com)
**State:** live, field-manual restyled; 50 scenarios, 45 papers, comparisons,
cross-knob interactions. Own roadmap in its CLAUDE.md. **Next:** DNS (item 5),
then items 9 → 12 → 13.

### 5 · Labor of Health explorable (care.arwtucker.com — new)
**State:** concept only — but the design language (care-supply-chain FIG_001, the
bento paper postcards) and the empirical content (three dissertation papers) exist.
**Decision:** single flagship explorable essay, not a course. **Next:** item 8.
Structure sketch: five acts mirroring the supply chain — shocks → workforce →
delivery → outcomes → measurement — each with one interactive figure driven by
real estimates (0.27 CNA hours per 10pp in-person schooling; −2.4pp post-handoff
quality; Bartik capital-margin results when ready).

### 6 · Innovation in Health (innovation.arwtucker.com — new)
**State:** concept only. **Decision:** three pillars (diffusion, value, R&D
incentives). **Next:** item 14, after the sections format exists (reuses its
interactive-module pattern).

### 7 · Blog — Occupational Hazard Ratios
**State:** Substack wired, RSS index built, zero posts. **Decision:**
Substack-canonical. **Next:** item 3. 🖊 Post ideas already implicit in the work:
the childcare–caregiving channel; what a hazard ratio is (title essay); who takes
care of us (dissertation overview for civilians).

### 8 · Code / GitHub
**State:** live API-fed listing. **Next:** item 4. The repos themselves are now
portfolio surface: econometrics-for-health-policy, hs-site, arwtucker-site need
real READMEs (with screenshots of the new designs).

### 9 · Infrastructure & templates
**State:** no OG images/sitemap/analytics; TeachingDecks template system on the
old terracotta palette. **Next:** items 5 and 10. **Decision:** templates move to
field-manual — one language across screen, slides, and print.

---

## Change log

- 2026-07-28 — Roadmap drafted; scaffolding phase complete (bento production on
  arwtucker.com; field-manual on labs + hs-site; design lab at /lab).
