# Master Ecosystem Roadmap

The full teaching/research web ecosystem, one component at a time.
Drafted 2026-07-28; Phase 1 revised same day to Austin's priorities.
Scaffolding live: arwtucker.com (bento), labs.arwtucker.com +
healthsystems.vercel.app (field-manual).

## Principles

- **Committee-first sequencing.** Austin is on the 2026–27 market; applications go
  out Sept–Nov 2026. The Phase 1 targets below aim at **mid-Oct 2026**.
- **One design language.** Bento (personal site) + field-manual (technical/teaching
  material). Spec: `design/field-manual-style-kit.md`. The PPTX/Quarto template
  system in TeachingDecks gets aligned to it — no palette forks.
- **Two stacks only.** Quarto/webR for document-like teaching; Next.js for app-like
  interactives. The Flask TB sim gets rebuilt as a Next mini-app in Phase 3.
- **Subdomains under arwtucker.com.** labs.✓ · knobs. (hs-site) · care. (Labor of
  Health) · sections. (interactive sessions) · innovation. — personal site as hub.
- **Blog is Substack-canonical.** Writing happens on Substack; the site's blog page
  is an RSS-fed index (already built).
- **Content vs. build.** 🖊 marks Austin-owned content work (writing, research,
  recording); everything else is buildable in-session. They run in parallel.

---

## End-state vision (what "done" means per teaching package)

The completed econometrics package = lab modules + **a teaching video series**
(entry-level econometrics for health policy) with accompanying slides/animations,
episode-paired to modules, worked code examples, grounded in real health policy/
global health papers. The completed knobs package = the site + **a control-knobs
video series** grounded in the health systems literature, likewise page-paired.
Videos are the capstone, **not** Phase 1 work — foundations begin Phase 2.

## Phase 1 — Application season (now → mid-Oct 2026)

Five priorities. P1 and P2 are the twin #1s; P4 and P5 are the site-level focus.

### P1. Dissertation drafts 🖊 (with session support) — top priority
Finish the three paper drafts as far as possible with **finalized tables and
figures**. Session-supportable: figure/table design in the house style, replication
package structure and cleanup, prose editing. The drafts gate P3's PDFs.

### P2. Blog — 5 posts by mid-Oct, one every 2 weeks 🖊 — top priority
Cadence is the commitment: **one completed, published post every two weeks**
starting now (≈5 by mid-Oct). Session-supportable: drafting support, data-story
figures in house style, page restyle, logo optimization. Candidate arc: (1) what
a hazard ratio is — the title essay; (2) the childcare–caregiving channel (Paper
1 for civilians); (3) who delivers your delivery (Paper 2); (4) machines vs.
caregivers (Paper 3 setup); (5) an econometrics-in-plain-English piece that
cross-links the labs.

### P3. Research pages — legible, succinct, why-it-matters
Rework each paper page to be maximally readable while staying short: tightened
narrative that leads with why the research matters, finalized figures rendered in
the blueprint style, working-paper **PDF buttons** (`public/papers/<slug>.pdf`),
and **links to the reproduction package for each paper** (decide per paper: public
repo vs. "available on request" until publishable). Abstract + BibTeX blocks.

### P4. Econometrics labs — first-half content COMPLETE at site level
All site-level content done by end of Phase 1 for the non-causal half of the
curriculum, with **maximum legibility** (13" screen fit, column/TOC widths, code
size, plot sizing, the 5 bare `theme_minimal()` plots, shared `theme_house()`
include) and **deep interactivity** — every estimation and inference concept gets
a manipulable component (resample buttons, vary-n sliders, cluster toggles, ICC
dials), not just run-this-code blocks. Coverage, in order:
1. **OLS estimation & inference** — revise modules 1–3 (existing)
2. **Non-linear models** — new module: binary outcomes, logit/probit, marginal
   effects, count models (fills the module-4 gap)
3. **Longitudinal data** — revise/extend module 6 (FE/RE, within/between)
4. **Multi-level models** — new module: hierarchical structure, variance
   decomposition, when RE is a model vs. a fix (direct tie to Paper 2's
   facility/provider/delivery decomposition)
(The causal-inference sequence — randomization, DiD, RD, IV — is the second half,
Phase 2; PHS 2000B materials remain staged for it.)

### P5. HS Knobs site — DONE: legibility, functionality, literature, UX
Site complete by end of Phase 1 — **cleaner to use, read, and learn from**: the
C1 legibility pass (gauge/knob label sizes, contrast, scenario-card density,
effect-level visual distinction), a **literature review pass** over the 45 papers
and scenario ratings (verify, fill the 3 gaps, tighten macro-takeaways)
🖊-assisted, feature review of what's confusing (compare-mode discoverability,
metric filtering), and selected new functionality from its roadmap (effect-level
tints; earliest useful pieces of search/filter).

**Supporting Phase 1 items (smaller, slot between the five):** homepage/site
legibility + copy pass (A2); code page curation + repo READMEs (A6); OG images,
sitemap, favicon, analytics, knobs.arwtucker.com DNS (A7).

---

## Phase 2 — Winter 2026–27

7. **Video series foundations + production** — curriculum map (episode ↔
   module/page pairings for both series), scripts 🖊-assisted, slide/animation
   pipeline (forces the PPTX template alignment), recording setup + YouTube
   channel; record/edit/publish first episodes and embed on labs + knobs pages.
8. **Labor of Health explorable** (care.arwtucker.com) — the dissertation as a
   living system: policy levers (school closures, immigration, wages) → workforce
   → delivery → outcomes, parameterized by the papers' actual estimates. Ready
   before spring flyouts; doubles as job-talk material.
9. **Labs causal-inference sequence** — randomization, DiD, RD, IV from the staged
   PHS 2000B / GHP 525 materials; exercise-widget polish (syntax tokens, PASSED
   stamp) rides along.
10. **Knobs: country case studies** — schema + 2–3 gold-standard cases, then the
    automated pipeline (per its CLAUDE.md).
11. **Template system fully aligned** — whatever P6 didn't already force:
    build_template.py tokens/fonts automated, single-source Quarto theme.

## Phase 3 — Spring/summer 2027

12. **Interactive section sessions** (sections.arwtucker.com) — Zika role-play +
    UK sugar-tax negotiation as Next mini-apps; Cancer Alley + health-systems
    country cases as Quarto sessions. Establishes the session format.
13. **Knobs: Build-Your-System mode**, search/filter completion, glossary.
14. **Innovation in Health** (innovation.arwtucker.com) — diffusion & adoption;
    value & priority-setting (ICERs, league tables — ties to TB/HIV costing
    work); R&D pipeline & incentives. Automation content lives in Labor site.
15. **TB mining sim rebuild + FPH quiz** — Next mini-app under sections., using
    the established session format.

---

## Component detail

### Research pages (arwtucker.com/research)
**State:** postcard index + cream color-coded paper pages live. **Next:** P2.
**Depends on:** P1 drafts for PDFs/figures; reproduction-package visibility
decision per paper (public repo vs. request). Candidate repos to clean for
linking: nh-school-closures / NHLaborSubstitution (P1), DeliveryObservations (P2).

### Econometrics labs (labs.arwtucker.com)
**State:** 5 modules live, field-manual styled, webR graded exercises. `_site/`
committed and served verbatim — **`quarto render` before every push** (CI render
worth adding during P4). **Next:** P4 revision + new non-linear and multilevel
modules; causal sequence in Phase 2. Interactivity bar: each concept gets a
manipulable component (sliders/toggles driving webR plots — e.g. resample
buttons, vary-n sliders, cluster-count toggles, ICC dials for multilevel).

### Video series (capstone workstream)
**State:** nothing exists. **Decision:** produced videos, YouTube-hosted, embedded
per module/page — the capstone that completes each teaching package, begun in
Phase 2 once Phase 1 site content is done. Two series:
*Econometrics for Health Policy* (paired with lab modules, worked R examples,
anchored in real global-health papers) and *The Control Knobs* (paired with knob
pages, anchored in the health-systems literature). Slides/animations reuse the
sites' own blueprint figures; PPTX template alignment is a prerequisite.

### HS Control Knobs (knobs.arwtucker.com)
**State:** live, restyled; 50 scenarios, 45 papers. **Next:** P5, then country
cases (Phase 2), Build-Your-System (Phase 3). DNS move in supporting items.

### Blog — Occupational Hazard Ratios
**State:** Substack wired, RSS index built, zero posts. **Next:** P3 — 5–6 posts
by mid-Oct is the pacing item; page restyle is quick by comparison.

### Labor of Health explorable (care.arwtucker.com — new)
**State:** concept + design language + empirical content ready. **Next:** Phase 2
item 8. Five acts mirroring the supply chain, each one interactive figure driven
by real estimates (0.27 CNA hours per 10pp in-person schooling; −2.4pp
post-handoff quality; capital-margin results when ready).

### Innovation in Health (innovation.arwtucker.com — new)
**State:** concept only. **Next:** Phase 3 item 14, reusing the sections pattern.

### Interactive sections (sections.arwtucker.com — new)
**State:** 13 weeks of raw GENED 1063 material staged in TeachingDecks; hybrid
stack decided. **Next:** Phase 3 item 12.

### Code / GitHub
**State:** live API-fed listing. **Next:** supporting item — curation + READMEs
(repos are portfolio surface; reproduction packages make this matter more).

### Infrastructure & templates
**State:** no OG/sitemap/analytics; templates on old terracotta palette.
**Next:** supporting items + P6 template pull-forward.

---

## Change log

- 2026-07-28 — Roadmap drafted; scaffolding phase complete.
- 2026-07-28 — Phase 1 revised to Austin's six priorities: dissertation drafts,
  research pages with reproduction links, 5–6 blog posts, labs
  legibility/interactivity across OLS→non-linear→longitudinal→multilevel, knobs
  legibility/functionality/literature, video-series foundations. Causal-inference
  modules and Labor explorable shifted to Phase 2.
- 2026-07-28 (later) — Clarified: videos are the end-state capstone per teaching
  package, not Phase 1 work (foundations move to Phase 2). Phase 1 = five
  priorities; twin #1s are dissertation writing and the biweekly blog cadence
  (5 posts by mid-Oct); site-level focus is completing the labs first half and
  the knobs pass.
