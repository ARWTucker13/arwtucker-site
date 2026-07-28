import Link from "next/link";
import { workingPapers } from "@/content/papers";
import { publications, publicationSummary } from "@/content/publications";
import { site } from "@/content/site";

const paperColors = [
  { bg: "var(--card-sage)", topic: "Labor / Long-term care" },
  { bg: "var(--card-cobalt)", topic: "Quality / Kenya" },
  { bg: "var(--card-rose)", topic: "Capital / Migration" },
];

const blocks = [
  { key: "motivation", label: "Why it matters" },
  { key: "approach", label: "How I answer it" },
  { key: "finding", label: "What I find" },
  { key: "policy", label: "For policy" },
] as const;

export default function BentoResearch() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      {/* Page head */}
      <header className="flex flex-wrap items-end justify-between gap-4 px-2 pb-8 pt-4">
        <div>
          <p className="bn-label text-ink-faint">
            <Link href="/lab/bento" className="hover:text-ink">
              Austin Tucker
            </Link>{" "}
            / Research
          </p>
          <h1 className="bn-display mt-4 text-5xl text-ink sm:text-6xl">
            Who cares for us, and
            <br />
            what is that work worth?
          </h1>
        </div>
        <p className="bn-label max-w-xs leading-relaxed text-ink-soft">
          Three dissertation papers on healthcare labor markets, workforce
          shortages, and the substitutability of care.
        </p>
      </header>

      {/* Papers */}
      <div className="flex flex-col gap-4">
        {workingPapers.map((paper, i) => (
          <section
            key={paper.slug}
            id={paper.slug}
            className="grid gap-4 lg:grid-cols-12"
          >
            {/* Postcard face */}
            <div
              className="bn-card flex flex-col text-(--card-ink) lg:col-span-5"
              style={{ background: paperColors[i].bg }}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="bn-label">{paperColors[i].topic}</p>
                <p className="bn-stamp shrink-0">
                  Paper {paper.number}
                  <br />
                  {paper.status}
                </p>
              </div>
              <h2 className="bn-display mt-8 text-3xl sm:text-4xl">
                <Link
                  href={`/lab/bento/research/${paper.slug}`}
                  className="hover:underline"
                  style={{ textUnderlineOffset: "6px" }}
                >
                  {paper.title}
                </Link>
              </h2>
              <p className="bn-question mt-6 flex-1 text-lg leading-relaxed">
                {paper.question}
              </p>
              <Link
                href={`/lab/bento/research/${paper.slug}`}
                className="bn-label mt-6 inline-block border-b-2 border-current pb-1 hover:opacity-70"
              >
                Read the paper →
              </Link>
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-current/30 pt-4">
                {paper.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-sm font-bold">{stat.value}</p>
                    <p className="bn-label mt-1 text-[0.58rem]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reverse of the postcard: the argument */}
            <div className="bn-card grid gap-x-8 gap-y-6 bg-paper-raised sm:grid-cols-2 lg:col-span-7">
              {blocks.map((b) => (
                <div key={b.key}>
                  <p className="bn-label text-(--card-vermilion)">{b.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {paper[b.key]}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Published work — cream card */}
      <section className="bn-card mt-4 bg-(--ink) text-(--card-ink)">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-xl">
            <p className="bn-label">Published work / 2020–2022</p>
            <h2 className="bn-display mt-5 text-3xl">
              Before the dissertation
            </h2>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              {publicationSummary.count} peer-reviewed papers on the{" "}
              {publicationSummary.focus}, in {publicationSummary.venues}.
            </p>
          </div>
          <p className="bn-stamp shrink-0">
            {publicationSummary.count} papers
            <br />
            TB · HIV
          </p>
        </div>
        <ul className="bn-matlist mt-8 max-w-3xl">
          {publications.map((pub) => (
            <li key={pub.title}>
              <span className="flex-1">
                {pub.title}
                {pub.note ? `, ${pub.note}` : ""}
              </span>
              <span className="shrink-0 font-mono text-[0.68rem] uppercase tracking-wider opacity-70">
                {pub.journal} · {pub.year}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="bn-label mt-10 flex flex-col gap-3 px-2 pb-6 text-ink-faint sm:flex-row sm:justify-between">
        <p>
          <Link href="/lab/bento" className="hover:text-ink">
            ← Austin Tucker
          </Link>
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            email
          </a>
          <a href={site.cvPath} className="hover:text-ink">
            cv
          </a>
        </div>
      </footer>
    </div>
  );
}
