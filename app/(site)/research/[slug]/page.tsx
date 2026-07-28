import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { workingPapers } from "@/content/papers";
import { site } from "@/content/site";

// Accent per paper = the postcard color the reader clicked, darkened to a
// text-safe ink for use on cream paper.
const paperMeta: Record<
  string,
  { topic: string; card: string; cardInk: string; accent: string; soft: string }
> = {
  "schools-nursing-homes": {
    topic: "Labor / Long-term care",
    card: "#7b8d6c",
    cardInk: "#221d14",
    accent: "#556344",
    soft: "#e6eadd",
  },
  "obstetric-care-kenya": {
    topic: "Quality / Kenya",
    card: "#3d64b0",
    cardInk: "#f7e9c7",
    accent: "#33549b",
    soft: "#dfe6f4",
  },
  "immigrant-labor-capital": {
    topic: "Capital / Migration",
    card: "#c08d80",
    cardInk: "#221d14",
    accent: "#9d5747",
    soft: "#f0ded8",
  },
};

const sections = [
  { key: "motivation", label: "Why it matters" },
  { key: "approach", label: "How I answer it" },
  { key: "finding", label: "What I find" },
  { key: "policy", label: "What it means for policy" },
] as const;

export function generateStaticParams() {
  return workingPapers.map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const paper = workingPapers.find((p) => p.slug === slug);
  if (!paper) return {};
  return {
    title: `${paper.shortTitle} — Austin Tucker`,
    description: paper.question,
  };
}

export default async function PaperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = workingPapers.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const paper = workingPapers[index];
  const meta = paperMeta[slug];
  const prev =
    workingPapers[(index + workingPapers.length - 1) % workingPapers.length];
  const next = workingPapers[(index + 1) % workingPapers.length];

  return (
    <div
      className="bn-reading min-h-screen"
      style={
        {
          "--accent": meta.accent,
          "--accent-soft": meta.soft,
        } as React.CSSProperties
      }
    >
      {/* Postcard band — continuity with the card the reader clicked */}
      <div style={{ background: meta.card, color: meta.cardInk }}>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-6 py-3">
          <Link href="/research" className="bn-label hover:opacity-70">
            ← All research
          </Link>
          <p className="bn-label">{meta.topic}</p>
          <p className="bn-label">
            Paper {paper.number} · {paper.status}
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 pb-20">
        {/* Header */}
        <header className="pt-12">
          <p className="rd-kicker">
            Working paper {paper.number} — {paper.status}
          </p>
          <h1 className="rd-display mt-5 text-4xl sm:text-5xl">
            {paper.title}
          </h1>
          <p className="rd-standfirst mt-7">{paper.question}</p>
          <p className="mt-7 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Austin Tucker · Harvard University · 2026
          </p>
        </header>

        {/* Stats strip */}
        <Reveal>
          <div
            className="mt-10 grid grid-cols-3 divide-x divide-rule border-y-2 border-ink"
            style={{ background: "var(--accent-soft)" }}
          >
            {paper.stats.map((stat) => (
              <div key={stat.label} className="px-4 py-4">
                <p
                  className="font-mono text-lg font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-soft">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Body */}
        {sections.map((section, i) => (
          <Reveal key={section.key}>
            <section className="mt-12">
              <div className="flex items-baseline gap-4">
                <p className="rd-kicker">
                  0{i + 1} — {section.label}
                </p>
                <div
                  className="h-px flex-1"
                  style={{ background: "var(--rule)" }}
                />
              </div>
              <div className={`rd-prose mt-5 ${i === 0 ? "rd-dropcap" : ""}`}>
                <p>{paper[section.key]}</p>
              </div>
            </section>
          </Reveal>
        ))}

        {/* Prev / next postcards */}
        <Reveal>
          <div className="rd-rule mt-16 pt-8">
            <p className="rd-kicker">Continue reading</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { paper: prev, label: "Previous" },
                { paper: next, label: "Next" },
              ].map(({ paper: p, label }) => {
                const m = paperMeta[p.slug];
                return (
                  <Link
                    key={label}
                    href={`/research/${p.slug}`}
                    className="bn-card transition-transform hover:-translate-y-1"
                    style={{
                      background: m.card,
                      color: m.cardInk,
                      padding: "1.25rem",
                    }}
                  >
                    <p className="bn-label">
                      {label} · Paper {p.number}
                    </p>
                    <p className="bn-display mt-3 text-xl">{p.shortTitle}</p>
                    <p className="mt-3 text-lg">→</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Reading-page footer */}
        <footer className="mt-14 flex flex-col gap-3 border-t border-rule pt-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint sm:flex-row sm:justify-between">
          <Link href="/" className="hover:text-ink">
            ← Austin Tucker
          </Link>
          <div className="flex gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              email
            </a>
            <a href={site.cvPath} className="hover:text-ink">
              cv
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
}
