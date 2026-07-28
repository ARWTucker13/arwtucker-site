import Link from "next/link";
import { workingPapers } from "@/content/papers";
import { publicationSummary } from "@/content/publications";
import { site } from "@/content/site";

function CareSupplyChainDiagram() {
  // Exploded-view diagram: five layers of the care supply chain.
  const layers = [
    {
      cy: 70,
      cls: "mn-stroke",
      name: "POLICY SHOCKS",
      side: "right",
      caption: "SCHOOLS · IMMIGRATION · WAGES",
    },
    {
      cy: 175,
      cls: "mn-fill",
      name: "CAREGIVING WORKFORCE",
      side: "left",
      caption: "CNAs · NURSES · MIDWIVES",
    },
    {
      cy: 280,
      cls: "mn-stroke",
      name: "CARE DELIVERY",
      side: "right",
      caption: "NURSING HOMES · WARDS",
    },
    {
      cy: 385,
      cls: "mn-fill-hazard",
      name: "PATIENT HEALTH",
      side: "left",
      caption: "QUALITY · TIMELINESS",
    },
    {
      cy: 490,
      cls: "mn-stroke-dashed",
      name: "MEASUREMENT",
      side: "right",
      caption: "PAYROLL DATA · CLINICAL OBS.",
    },
  ] as const;

  return (
    <svg
      viewBox="0 0 440 540"
      role="img"
      aria-label="Exploded diagram of the care supply chain: policy shocks act on the caregiving workforce, which delivers care that produces patient health, observed through measurement."
      className="w-full"
    >
      {/* spine */}
      <line x1={220} y1={24} x2={220} y2={518} className="mn-stroke-dashed" />

      {layers.map((l) => {
        const left = l.side === "left";
        const edgeX = left ? 125 : 315;
        const labelX = left ? 8 : 432;
        const lineEndX = left ? 100 : 340;
        return (
          <g key={l.name}>
            {/* isometric plate */}
            <polygon
              points={`125,${l.cy} 220,${l.cy - 38} 315,${l.cy} 220,${l.cy + 38}`}
              className={l.cls}
            />
            {/* callout leader */}
            <line
              x1={edgeX}
              y1={l.cy}
              x2={lineEndX}
              y2={l.cy}
              className="mn-stroke"
              strokeWidth={1}
            />
            <circle cx={lineEndX} cy={l.cy} r={1.8} fill="var(--teal)" />
            <text
              x={labelX}
              y={l.cy - 6}
              textAnchor={left ? "start" : "end"}
              className="mn-diagram-label-blue"
            >
              {l.name}
            </text>
            <text
              x={labelX}
              y={l.cy + 12}
              textAnchor={left ? "start" : "end"}
              className="mn-diagram-label"
            >
              {l.caption}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ManualHome() {
  return (
    <div>
      {/* Masthead */}
      <header className="mx-auto max-w-6xl px-6 pt-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="mn-wordmark text-4xl sm:text-5xl">
            Austin
            <br />
            Tucker
          </h1>
          <div className="max-w-md lg:text-right">
            <p className="prose-site">
              A working manual for the economics of care — who provides it,
              what it costs, and what happens when it&apos;s scarce.
            </p>
            <nav className="mt-4 flex gap-5 font-mono text-sm text-ink-soft lg:justify-end">
              <Link href="/research" className="hover:text-teal">
                research
              </Link>
              <Link href="/teaching" className="hover:text-teal">
                teaching
              </Link>
              <Link href="/blog" className="hover:text-teal">
                blog
              </Link>
              <Link href="/code" className="hover:text-teal">
                code
              </Link>
            </nav>
          </div>
        </div>
        <div className="mn-dither mt-8" aria-hidden />
      </header>

      {/* Hero spread: prose left, figure right */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[7fr_5fr]">
        <div>
          <p className="mn-section">0.0 — Abstract</p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Who cares for us, and what is that work worth?
          </h2>
          <div className="prose-site mt-7 max-w-xl">
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
          <div className="mt-9 flex flex-wrap gap-3 font-mono text-sm">
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
          <p className="mn-bracket mt-10">
            Health economics · Global health · Econometrics
          </p>
        </div>

        <figure className="mn-frame mn-dotgrid relative p-6 pr-10">
          <span className="mn-figlabel absolute right-3 top-6">
            Fig_001 · The care supply chain
          </span>
          <CareSupplyChainDiagram />
          <figcaption className="mn-bracket mt-4">
            Exploded view · shocks propagate downward
          </figcaption>
        </figure>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mn-dither" aria-hidden />
      </div>

      {/* Research */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="mn-section">1.0 — Research</p>
        <h2 className="mt-4 font-serif text-3xl font-semibold">
          Three dissertation papers
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {workingPapers.map((paper) => (
            <article key={paper.slug} className="flex flex-col">
              <p className="font-mono text-xs text-hazard">
                FIG_0{paper.number.slice(-2)} · {paper.status.toUpperCase()}
              </p>
              <h3 className="mt-3 font-serif text-xl font-semibold leading-snug">
                <Link
                  href={`/research#${paper.slug}`}
                  className="hover:text-teal"
                >
                  {paper.shortTitle}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {paper.question}
              </p>
              <div className="mn-frame mn-dotgrid mt-5 grid grid-cols-3 divide-x divide-rule">
                {paper.stats.map((stat) => (
                  <div key={stat.label} className="p-3">
                    <p className="font-mono text-sm font-semibold text-teal">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-wider text-ink-faint">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href={`/research#${paper.slug}`}
                className="mn-bracket mt-4 inline-block hover:text-teal"
              >
                Full specification →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mn-dither" aria-hidden />
      </div>

      {/* Teaching / Blog / Code */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-3">
        <div>
          <p className="mn-section">2.0 — Teaching</p>
          <h3 className="mt-4 font-serif text-xl font-semibold">
            Econometrics, taught through health
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Interactive labs that run R in the browser, problem sets, and case
            studies from four years at Harvard — three Certificates of
            Distinction along the way.
          </p>
          <Link href="/teaching" className="mn-bracket mt-4 inline-block hover:text-teal">
            Browse the portfolio →
          </Link>
        </div>
        <div>
          <p className="mn-section">3.0 — Blog</p>
          <h3 className="mt-4 font-serif text-xl font-semibold">
            Occupational <span className="text-hazard">Hazard</span> Ratios
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Essays and data stories on health, work, and the economics of who
            takes care of whom.
          </p>
          <Link href="/blog" className="mn-bracket mt-4 inline-block hover:text-teal">
            Latest posts →
          </Link>
        </div>
        <div>
          <p className="mn-section">4.0 — Code</p>
          <h3 className="mt-4 font-serif text-xl font-semibold">
            Analysis in the open
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Replication code, teaching labs, and works in progress on GitHub.
          </p>
          <Link href="/code" className="mn-bracket mt-4 inline-block hover:text-teal">
            github.com/{site.githubUser} →
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mn-dither" aria-hidden />
      </div>

      {/* Now + footer */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="mn-section">5.0 — Now</p>
        <div className="prose-site mt-5 max-w-2xl">
          <p>
            I&apos;m finishing my dissertation (defense expected early 2027)
            and looking for roles where careful measurement meets real
            decisions — in global health policy, multilateral organizations,
            and research-driven teams. If that sounds like your work,{" "}
            <a href={`mailto:${site.email}`}>I&apos;d love to hear from you</a>.
          </p>
        </div>
      </section>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-xs text-ink-faint sm:flex-row sm:justify-between">
          <p>© 2026 Austin Tucker · rev 2.0</p>
          <div className="flex gap-5">
            <a href={`mailto:${site.email}`} className="hover:text-teal">
              email
            </a>
            <a
              href={`https://github.com/${site.githubUser}`}
              className="hover:text-teal"
            >
              github
            </a>
            <a href={site.substackUrl} className="hover:text-teal">
              substack
            </a>
            <a href={site.cvPath} className="hover:text-teal">
              cv
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
