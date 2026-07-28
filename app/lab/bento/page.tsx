import Link from "next/link";
import { workingPapers } from "@/content/papers";
import { site } from "@/content/site";

const paperCards = [
  { bg: "var(--card-sage)", topic: "Labor / Long-term care" },
  { bg: "var(--card-cobalt)", topic: "Quality / Kenya" },
  { bg: "var(--card-rose)", topic: "Capital / Migration" },
];

export default function BentoHome() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      {/* Row 1: intro + nav */}
      <div className="grid gap-4 lg:grid-cols-12">
        <section className="bn-card bg-paper-raised lg:col-span-8">
          <div
            aria-hidden
            className="bn-square left-[16%] top-[18%] h-44 w-44 opacity-90"
          />
          <div
            aria-hidden
            className="bn-circle right-[14%] top-[26%] h-48 w-48"
          />
          <div className="relative">
            <p className="bn-label text-ink-soft">Field notes — 2026</p>
            <h1 className="bn-display mt-16 text-6xl text-ink sm:text-7xl">
              Austin
              <br />
              Tucker
            </h1>
            <p className="mt-14 max-w-md leading-relaxed text-ink-soft">
              PhD candidate, health economics, Harvard. Studying who takes
              care of us when the caregiving workforce is squeezed — and what
              that work is worth.
            </p>
          </div>
        </section>

        <nav className="bn-card flex flex-col bg-(--card-vermilion) text-(--panel-ink) lg:col-span-4">
          <div className="flex flex-1 items-start justify-between">
            <div className="flex flex-col gap-5 pt-6">
              <Link href="/lab/bento/research" className="bn-nav-link">
                Research
              </Link>
              <Link href="/lab/bento/teaching" className="bn-nav-link">
                Teaching
              </Link>
              <Link href="/blog" className="bn-nav-link">
                Blog
              </Link>
              <Link href="/code" className="bn-nav-link">
                Code
              </Link>
            </div>
            <p className="bn-vertical pt-2">
              Portfolio &amp; logs // v.2026 // Cambridge MA
            </p>
          </div>
          <p className="bn-label mt-8">austin_tucker@g.harvard.edu</p>
        </nav>
      </div>

      {/* Research heading */}
      <div className="mt-12 flex items-center gap-4">
        <span
          aria-hidden
          className="h-9 w-1.5 bg-(--card-vermilion)"
        />
        <h2 className="bn-display text-4xl text-ink">
          Field Notes &amp; Research
        </h2>
      </div>

      {/* Row 2: paper postcards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {workingPapers.map((paper, i) => (
          <Link
            key={paper.slug}
            href={`/lab/bento/research/${paper.slug}`}
            className="bn-card group flex min-h-[17rem] flex-col text-(--card-ink) transition-transform hover:-translate-y-1"
            style={{ background: paperCards[i].bg }}
          >
            <div className="flex items-start justify-between">
              <p className="bn-label">{paperCards[i].topic}</p>
              <p className="bn-stamp">
                Paper
                <br />
                {paper.number}
              </p>
            </div>
            <h3 className="bn-display mt-6 text-3xl">{paper.shortTitle}</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed opacity-80">
              {paper.question}
            </p>
            <p className="mt-5 text-lg group-hover:translate-x-1 transition-transform">
              →
            </p>
          </Link>
        ))}
      </div>

      {/* Row 3: teaching / blog / code */}
      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <Link
          href="/lab/bento/teaching"
          className="bn-card flex flex-col bg-(--card-mustard) text-(--card-ink) transition-transform hover:-translate-y-1 lg:col-span-5"
        >
          <div className="flex items-start justify-between">
            <p className="bn-label">Teaching / Harvard</p>
            <p className="bn-stamp">
              3× Distinction
              <br />
              2022–24
            </p>
          </div>
          <h3 className="bn-display mt-6 text-3xl">
            Econometrics, taught through health
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed opacity-80">
            Interactive labs that run R in the browser, problem sets, and case
            studies from four years of teaching.
          </p>
          <div className="bn-lines mt-6" aria-hidden />
        </Link>

        <Link
          href="/blog"
          className="bn-card flex flex-col bg-paper-raised transition-transform hover:-translate-y-1 lg:col-span-4"
        >
          <div
            aria-hidden
            className="bn-square right-6 top-6 h-14 w-14 opacity-90"
          />
          <p className="bn-label text-ink-soft">Journal / Substack</p>
          <h3 className="bn-display mt-6 text-3xl italic text-ink">
            Occupational Hazard Ratios
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
            Essays and data stories on health, work, and the economics of who
            takes care of whom.
          </p>
          <p className="mt-5 text-lg text-(--card-vermilion)">→</p>
        </Link>

        <Link
          href="/code"
          className="bn-card flex flex-col bg-(--card-cobalt) text-(--panel-ink) transition-transform hover:-translate-y-1 lg:col-span-3"
        >
          <p className="bn-label">Code / GitHub</p>
          <h3 className="bn-display mt-6 text-3xl">Analysis in the open</h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed opacity-80">
            Replication code and teaching labs.
          </p>
          <p className="bn-label mt-5">github.com/{site.githubUser} →</p>
        </Link>
      </div>

      {/* Row 4: now — cream postcard */}
      <section className="bn-card mt-4 bg-(--ink) text-(--card-ink)">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xl">
            <p className="bn-label">Now — Summer 2026</p>
            <h3 className="bn-display mt-5 text-3xl">
              Finishing the dissertation. Open to what&apos;s next.
            </h3>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Defense expected early 2027. Looking for roles where careful
              measurement meets real decisions — global health policy,
              multilateral organizations, research-driven teams.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="bn-label mt-6 inline-block border-b-2 border-current pb-1 hover:opacity-70"
            >
              Write to me →
            </a>
          </div>
          <div className="w-full max-w-[14rem]">
            <p className="bn-stamp">
              On the market
              <br />
              2026–27
            </p>
            <div className="bn-lines mt-8" aria-hidden />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bn-label mt-10 flex flex-col gap-3 px-2 pb-6 text-ink-faint sm:flex-row sm:justify-between">
        <p>© 2026 Austin Tucker</p>
        <div className="flex gap-6">
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            email
          </a>
          <a
            href={`https://github.com/${site.githubUser}`}
            className="hover:text-ink"
          >
            github
          </a>
          <a href={site.substackUrl} className="hover:text-ink">
            substack
          </a>
          <a href={site.cvPath} className="hover:text-ink">
            cv
          </a>
        </div>
      </footer>
    </div>
  );
}
