import Link from "next/link";
import { workingPapers } from "@/content/papers";
import { publicationSummary } from "@/content/publications";
import { site } from "@/content/site";

const navItems = [
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/blog", label: "Journal" },
  { href: "/code", label: "Code" },
];

export default function EditorialHome() {
  return (
    <div>
      {/* Masthead bar */}
      <header className="border-b border-ink/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-6 py-4">
          <Link
            href="/"
            className="font-serif text-lg font-semibold tracking-tight"
          >
            Austin Tucker
          </Link>
          <nav className="ed-kicker flex flex-wrap gap-4 text-ink-soft sm:gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-teal">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Split hero */}
      <section className="grid min-h-[82vh] lg:grid-cols-[5fr_7fr]">
        {/* Brick panel */}
        <div className="relative flex flex-col justify-between bg-(--panel) px-8 py-12 text-(--panel-ink) sm:px-12">
          <p className="ed-kicker opacity-80">Study — Austin Tucker</p>
          <div className="py-14">
            <h1 className="font-serif text-6xl leading-[1.02] sm:text-7xl">
              <span className="block italic">The</span>
              <span className="block italic">Labor</span>
              <span className="mt-3 block italic">— of Care</span>
            </h1>
            <p className="mt-8 font-serif text-xl">
              Health Economics
              <br />& Global Health
            </p>
          </div>
          <p className="ed-kicker max-w-xs leading-relaxed opacity-80">
            PhD candidate, Harvard University.
            <br />
            Who cares for us, and what is
            <br />
            that work worth?
          </p>
        </div>

        {/* Statement of intent */}
        <div className="relative flex flex-col justify-center overflow-hidden px-8 py-16 sm:px-14">
          {/* Collage accents */}
          <div
            aria-hidden
            className="absolute right-14 top-10 h-16 w-16 bg-(--collage-orange)"
          />
          <div
            aria-hidden
            className="absolute right-24 top-20 h-20 w-20 rounded-full bg-(--collage-blue) mix-blend-multiply"
          />
          <div
            aria-hidden
            className="absolute -right-8 top-[7.5rem] h-px w-64 bg-ink"
          />

          <div className="max-w-xl">
            <p className="ed-kicker border-b border-ink pb-2 text-ink-soft">
              Statement of intent
            </p>
            <div className="ed-prose mt-8">
              <p className="text-[1.35rem] leading-[1.7]">
                My dissertation asks who takes care of us when the{" "}
                <span className="ed-accent">caregiving workforce</span> is
                squeezed — by school closures, by immigration policy, by the
                daily realities of{" "}
                <span className="ed-accent-2">understaffed delivery wards</span>
                .
              </p>
              <p className="text-ink-soft">
                Before that, I spent years measuring the{" "}
                {publicationSummary.focus} — work published in{" "}
                {publicationSummary.venues}.
              </p>
            </div>
            <div className="ed-kicker mt-10 flex flex-wrap gap-3">
              <Link
                href="/research"
                className="border border-teal bg-teal px-5 py-3 text-paper-raised hover:bg-teal-deep"
              >
                Read the research →
              </Link>
              <a
                href={site.cvPath}
                className="border border-ink/40 px-5 py-3 text-ink-soft hover:border-teal hover:text-teal"
              >
                CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research — top stories */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="ed-rule pt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="ed-kicker text-teal">No. 01 — Research</p>
            <p className="ed-kicker text-ink-faint">
              Three dissertation papers
            </p>
          </div>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight">
            Who cares for us, and what is that work worth?
          </h2>
        </div>

        <div className="ed-cells mt-10 grid sm:grid-cols-3">
          {workingPapers.map((paper) => (
            <article
              key={paper.slug}
              className="flex flex-col py-8 sm:px-8 sm:py-2 sm:first:pl-0 sm:last:pr-0"
            >
              <p className="ed-kicker text-hazard">
                Paper {paper.number} · {paper.status}
              </p>
              <h3 className="mt-4 font-serif text-2xl leading-snug">
                <Link
                  href={`/research#${paper.slug}`}
                  className="hover:text-teal"
                >
                  {paper.shortTitle}
                </Link>
              </h3>
              <p className="mt-4 flex-1 leading-relaxed text-ink-soft">
                {paper.question}
              </p>
              <div className="ed-dotted mt-6 pt-4">
                <Link
                  href={`/research#${paper.slug}`}
                  className="ed-kicker text-ink hover:text-teal"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Teaching / Journal / Code — boxed features */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="border border-ink/50 bg-paper-raised">
            <div className="border-b border-ink/50 px-6 py-5">
              <h3 className="font-serif text-2xl">
                Econometrics, taught through health
              </h3>
              <p className="ed-kicker mt-3 text-ink-faint">
                Teaching · Harvard
              </p>
            </div>
            <div className="px-6 py-5 leading-relaxed text-ink-soft">
              Labs, problem sets, and case studies from four years of teaching —
              including interactive econometrics modules that run R in the
              browser, and three Certificates of Distinction.
            </div>
            <div className="flex items-baseline justify-between border-t border-ink/50 px-6 py-4">
              <p className="ed-kicker text-ink-faint">Three courses</p>
              <Link href="/teaching" className="ed-kicker hover:text-teal">
                Browse →
              </Link>
            </div>
          </article>

          <article className="border border-ink/50 bg-(--hazard-soft)">
            <div className="border-b border-ink/50 px-6 py-5">
              <h3 className="font-serif text-2xl italic">
                Occupational Hazard Ratios
              </h3>
              <p className="ed-kicker mt-3 text-hazard">
                The journal · Substack
              </p>
            </div>
            <div className="px-6 py-5 leading-relaxed text-ink-soft">
              Essays and data stories on health, work, and the economics of who
              takes care of whom.
            </div>
            <div className="flex items-baseline justify-between border-t border-ink/50 px-6 py-4">
              <p className="ed-kicker text-ink-faint">Occasional</p>
              <Link href="/blog" className="ed-kicker hover:text-teal">
                Latest posts →
              </Link>
            </div>
          </article>

          <article className="border border-ink/50 bg-paper-raised">
            <div className="border-b border-ink/50 px-6 py-5">
              <h3 className="font-serif text-2xl">Analysis in the open</h3>
              <p className="ed-kicker mt-3 text-ink-faint">Code · GitHub</p>
            </div>
            <div className="px-6 py-5 leading-relaxed text-ink-soft">
              Replication code, teaching labs, and works in progress —
              econometrics you can run, not just read.
            </div>
            <div className="flex items-baseline justify-between border-t border-ink/50 px-6 py-4">
              <p className="ed-kicker text-ink-faint">
                github.com/{site.githubUser}
              </p>
              <Link href="/code" className="ed-kicker hover:text-teal">
                See more →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Now */}
      <section className="mx-auto max-w-2xl px-6 pb-24 text-center">
        <p className="ed-asterisk" aria-hidden>
          ⁂
        </p>
        <p className="ed-kicker mt-6 text-ink-faint">Now — Summer 2026</p>
        <div className="ed-dropcap ed-prose mt-8 text-left">
          <p>
            I&apos;m finishing my dissertation (defense expected early 2027)
            and looking for roles where careful measurement meets real
            decisions — in global health policy, multilateral organizations,
            and research-driven teams. If that sounds like your work,{" "}
            <a href={`mailto:${site.email}`}>I&apos;d love to hear from you</a>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="ed-rule mx-auto max-w-6xl px-6 pb-12 pt-6">
        <div className="ed-kicker flex flex-col gap-3 text-ink-faint sm:flex-row sm:justify-between">
          <p>© 2026 Austin Tucker</p>
          <div className="flex gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-teal">
              Email
            </a>
            <a
              href={`https://github.com/${site.githubUser}`}
              className="hover:text-teal"
            >
              GitHub
            </a>
            <a href={site.substackUrl} className="hover:text-teal">
              Substack
            </a>
            <a href={site.cvPath} className="hover:text-teal">
              CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
