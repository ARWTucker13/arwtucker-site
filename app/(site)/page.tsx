import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { workingPapers } from "@/content/papers";
import { publicationSummary } from "@/content/publications";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5">
      {/* Hero */}
      <section className="graph-paper -mx-5 border-b border-rule px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="section-label mb-6">
            Health economics · Global health · Econometrics
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Hi, I&apos;m Austin Tucker.
          </h1>
          <div className="prose-site mt-6 max-w-2xl">
            <p>
              I&apos;m a health economist and PhD candidate at Harvard studying
              how healthcare labor markets work — and what happens to patients
              when they don&apos;t. My dissertation asks who takes care of us
              when the caregiving workforce is squeezed: by school closures, by
              immigration policy, by the daily realities of understaffed
              delivery wards.
            </p>
            <p>
              Before that, I spent years measuring the{" "}
              {publicationSummary.focus} — work published in{" "}
              {publicationSummary.venues}.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <Link
              href="/research"
              className="border border-teal bg-teal px-4 py-2 text-white hover:bg-teal-deep"
            >
              Read the research →
            </Link>
            <a
              href={site.cvPath}
              className="border border-rule bg-paper-raised px-4 py-2 text-ink-soft hover:border-teal hover:text-teal"
            >
              CV (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Research preview */}
      <section className="py-16">
        <Reveal>
          <SectionLabel index="01">Research</SectionLabel>
          <h2 className="mt-3 font-serif text-2xl font-semibold">
            Who cares for us, and what is that work worth?
          </h2>
          <p className="mt-2 max-w-2xl text-ink-soft">
            Three dissertation papers on healthcare labor markets, workforce
            shortages, and the substitutability of care.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {workingPapers.map((paper, i) => (
            <Reveal key={paper.slug} delay={i * 90}>
              <Link
                href={`/research#${paper.slug}`}
                className="figure-frame block h-full p-5 transition-colors hover:border-teal"
              >
                <p className="font-mono text-xs text-hazard">
                  PAPER {paper.number} · {paper.status.toUpperCase()}
                </p>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug">
                  {paper.shortTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {paper.question}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Teaching + Blog + Code, compact row */}
      <section className="grid gap-10 border-t border-rule py-16 sm:grid-cols-3">
        <Reveal>
          <SectionLabel index="02">Teaching</SectionLabel>
          <h3 className="mt-3 font-serif text-xl font-semibold">
            Econometrics, taught through health
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Labs, problem sets, and case studies from four years of teaching
            econometrics and global health at Harvard — three Certificates of
            Distinction along the way.
          </p>
          <Link
            href="/teaching"
            className="mt-3 inline-block font-mono text-sm text-teal hover:underline"
          >
            Browse the portfolio →
          </Link>
        </Reveal>
        <Reveal delay={90}>
          <SectionLabel index="03">Blog</SectionLabel>
          <h3 className="mt-3 font-serif text-xl font-semibold">
            Occupational Hazard Ratios
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Essays and data stories on health, work, and the economics of who
            takes care of whom.
          </p>
          <Link
            href="/blog"
            className="mt-3 inline-block font-mono text-sm text-teal hover:underline"
          >
            Latest posts →
          </Link>
        </Reveal>
        <Reveal delay={180}>
          <SectionLabel index="04">Code</SectionLabel>
          <h3 className="mt-3 font-serif text-xl font-semibold">
            Analysis in the open
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Replication code, teaching labs, and works in progress on GitHub.
          </p>
          <Link
            href="/code"
            className="mt-3 inline-block font-mono text-sm text-teal hover:underline"
          >
            See what I&apos;m building →
          </Link>
        </Reveal>
      </section>

      {/* Now */}
      <section className="border-t border-rule py-16">
        <Reveal>
          <SectionLabel>Now</SectionLabel>
          <div className="prose-site mt-4 max-w-2xl">
            <p>
              I&apos;m finishing my dissertation (defense expected early 2027)
              and looking for roles where careful measurement meets real
              decisions — in global health policy, multilateral organizations,
              and research-driven teams. If that sounds like your work,{" "}
              <a href={`mailto:${site.email}`}>I&apos;d love to hear from you</a>.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
