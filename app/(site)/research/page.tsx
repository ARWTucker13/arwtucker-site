import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { workingPapers } from "@/content/papers";
import { publications, publicationSummary } from "@/content/publications";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Research — Austin Tucker",
  description:
    "Dissertation research on healthcare labor markets, plus published work on TB and HIV care delivery in sub-Saharan Africa.",
};

const sections = [
  { key: "motivation", label: "Why it matters" },
  { key: "approach", label: "How I answer it" },
  { key: "finding", label: "What I find" },
  { key: "policy", label: "What it means for policy" },
] as const;

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-5">
      <section className="py-16">
        <SectionLabel index="01">Research</SectionLabel>
        <h1 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          Healthcare labor markets, workforce shortages, and the
          substitutability of care
        </h1>
        <div className="prose-site mt-6 max-w-2xl">
          <p>
            Health systems are, above all, made of people. My dissertation
            studies what happens when the supply of those people shifts — when
            caregivers gain or lose childcare, when immigration policy changes
            who is available to work, and when the providers on shift shape the
            care a mother receives. Three papers, three margins of the same
            question.
          </p>
        </div>
      </section>

      {/* Working papers */}
      {workingPapers.map((paper) => (
        <section
          key={paper.slug}
          id={paper.slug}
          className="scroll-mt-24 border-t border-rule py-16"
        >
          <Reveal>
            <p className="font-mono text-xs text-hazard">
              WORKING PAPER {paper.number} · {paper.status.toUpperCase()}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-2xl font-semibold leading-snug">
              {paper.title}
            </h2>
            <p className="prose-site mt-4 max-w-2xl italic text-ink-soft">
              {paper.question}
            </p>
          </Reveal>

          {/* Stats strip */}
          <Reveal delay={100}>
            <div className="graph-paper figure-frame mt-8 grid max-w-2xl grid-cols-3 divide-x divide-rule">
              {paper.stats.map((stat) => (
                <div key={stat.label} className="px-4 py-5 text-center">
                  <p className="font-mono text-xl font-semibold text-teal">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 max-w-2xl space-y-8">
            {sections.map(({ key, label }, i) => (
              <Reveal key={key} delay={i * 60}>
                <h3 className="section-label">{label}</h3>
                <p className="prose-site mt-2">{paper[key]}</p>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      {/* Published work */}
      <section id="published" className="scroll-mt-24 border-t border-rule py-16">
        <Reveal>
          <SectionLabel>Published work</SectionLabel>
          <h2 className="mt-3 font-serif text-2xl font-semibold">
            TB &amp; HIV economics
          </h2>
          <p className="prose-site mt-4 max-w-2xl">
            Before the dissertation, my research measured the{" "}
            {publicationSummary.focus} — {publicationSummary.count}{" "}
            peer-reviewed papers in {publicationSummary.venues}. Selected work:
          </p>
        </Reveal>
        <ul className="mt-8 max-w-3xl divide-y divide-rule border-y border-rule">
          {publications.map((pub) => (
            <li key={pub.title} className="flex items-baseline gap-4 py-4">
              <span className="font-mono text-xs text-ink-faint">
                {pub.year}
              </span>
              <div>
                <p className="font-serif font-medium leading-snug">
                  {pub.href ? (
                    <a href={pub.href} className="hover:text-teal">
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                  {pub.role === "first-author" && (
                    <span className="ml-2 align-middle font-mono text-[0.6rem] uppercase tracking-wider text-hazard">
                      first author
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-sm text-ink-soft">
                  {pub.journal}
                  {pub.note ? ` · ${pub.note}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-sm">
          <a href={site.cvPath} className="text-teal hover:underline">
            Full publication list in CV →
          </a>
        </p>
      </section>
    </div>
  );
}
