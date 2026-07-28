import type { Metadata } from "next";
import Link from "next/link";
import {
  courses,
  featuredLabs,
  featuredTool,
  teachingHighlights,
} from "@/content/teaching";

export const metadata: Metadata = {
  title: "Teaching — Austin Tucker",
  description:
    "Econometrics and global health teaching portfolio: interactive labs, problem sets, and case studies from four years at Harvard.",
};

/* FIG_T01 — OLS scatter with fitted line and residuals, blueprint style */
function OlsFigure() {
  const slope = -105 / 270;
  const lineY = (x: number) => 150 + slope * (x - 40);
  const points: [number, number][] = [
    [55, 150], [80, 132], [105, 142], [130, 110], [155, 122],
    [180, 80], [205, 105], [230, 72], [255, 88], [280, 60], [300, 52],
  ];
  const residualXs = [105, 180, 255];
  return (
    <svg
      viewBox="0 0 340 210"
      role="img"
      aria-label="Scatter plot with an OLS fitted line and dashed residuals"
      className="w-full"
    >
      <line x1={30} y1={180} x2={322} y2={180} className="bn-fig-stroke" />
      <line x1={30} y1={180} x2={30} y2={18} className="bn-fig-stroke" />
      <line
        x1={40}
        y1={lineY(40)}
        x2={310}
        y2={lineY(310)}
        className="bn-fig-stroke"
      />
      {points
        .filter(([x]) => residualXs.includes(x))
        .map(([x, y]) => (
          <line
            key={x}
            x1={x}
            y1={y}
            x2={x}
            y2={lineY(x)}
            className="bn-fig-stroke-dashed"
          />
        ))}
      {points.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={2.4} className="bn-fig-dot" />
      ))}
      <text x={310} y={lineY(310) - 8} textAnchor="end" className="bn-fig-text">
        ŷ = Xβ̂
      </text>
      <text x={322} y={195} textAnchor="end" className="bn-fig-text">
        X — EXPOSURE
      </text>
      <text
        x={20}
        y={22}
        className="bn-fig-text"
        transform="rotate(-90 20 22)"
        textAnchor="end"
      >
        Y — OUTCOME
      </text>
    </svg>
  );
}

/* FIG_T02 — the five control knobs, blueprint style */
function KnobsFigure() {
  const knobs = [
    { label: "FINANCING", angle: -40 },
    { label: "PAYMENT", angle: 20 },
    { label: "ORGANIZATION", angle: -100 },
    { label: "REGULATION", angle: 60 },
    { label: "BEHAVIOR", angle: -140 },
  ];
  const tickAngles = [-150, -105, -60, -15, 30, 75, 120];
  const rad = (deg: number) => (deg * Math.PI) / 180;
  return (
    <svg
      viewBox="0 0 420 150"
      role="img"
      aria-label="Five labeled control knobs at different settings, feeding into health system outcomes"
      className="w-full"
    >
      {knobs.map((k, i) => {
        const cx = 50 + i * 80;
        const cy = 58;
        return (
          <g key={k.label}>
            <circle cx={cx} cy={cy} r={24} className="bn-fig-stroke" />
            {tickAngles.map((t) => (
              <line
                key={t}
                x1={cx + 27 * Math.cos(rad(t))}
                y1={cy + 27 * Math.sin(rad(t))}
                x2={cx + 31 * Math.cos(rad(t))}
                y2={cy + 31 * Math.sin(rad(t))}
                className="bn-fig-stroke"
              />
            ))}
            <line
              x1={cx}
              y1={cy}
              x2={cx + 17 * Math.cos(rad(k.angle))}
              y2={cy + 17 * Math.sin(rad(k.angle))}
              className="bn-fig-stroke"
              strokeWidth={2}
            />
            <circle cx={cx} cy={cy} r={2} className="bn-fig-dot" />
            <text x={cx} y={104} textAnchor="middle" className="bn-fig-text">
              {k.label}
            </text>
          </g>
        );
      })}
      <text x={210} y={134} textAnchor="middle" className="bn-fig-text">
        ↓ HEALTH SYSTEM OUTCOMES ↓
      </text>
    </svg>
  );
}

const courseColors = [
  "var(--card-cobalt)",
  "var(--card-rose)",
  "var(--card-sage)",
];

export default function TeachingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      {/* Page head */}
      <header className="flex flex-wrap items-end justify-between gap-4 px-2 pb-8 pt-4">
        <div>
          <p className="bn-label text-ink-faint">
            <Link href="/" className="hover:text-ink">
              Austin Tucker
            </Link>{" "}
            / Teaching
          </p>
          <h1 className="bn-display mt-4 text-5xl text-ink sm:text-6xl">
            Econometrics,
            <br />
            taught through health
          </h1>
        </div>
        <p className="bn-label max-w-xs leading-relaxed text-ink-soft">
          Four years of labs, problem sets, and case studies at Harvard — built
          so students estimate, not just read.
        </p>
      </header>

      {/* Row 1: featured labs + featured tool */}
      <div className="grid gap-4 lg:grid-cols-12">
        <section className="bn-card flex flex-col bg-(--card-mustard) text-(--card-ink) lg:col-span-7">
          <div className="flex items-start justify-between gap-4">
            <p className="bn-label">Featured / Interactive labs</p>
            <p className="bn-stamp shrink-0">
              Runs R
              <br />
              in browser
            </p>
          </div>
          <h2 className="bn-display mt-6 text-3xl sm:text-4xl">
            {featuredLabs.name}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-80">
            {featuredLabs.description}
          </p>
          <div className="bn-fig mt-6 p-4">
            <OlsFigure />
          </div>
          <p className="bn-figlabel mt-3">
            Fig_T01 · OLS — residuals minimized
          </p>
          <div className="bn-label mt-6 flex gap-6">
            <a
              href={featuredLabs.liveUrl}
              className="border-b-2 border-current pb-1 hover:opacity-70"
            >
              Open the labs →
            </a>
            <a href={featuredLabs.repoUrl} className="hover:opacity-70">
              Source
            </a>
          </div>
        </section>

        <section className="bn-card flex flex-col bg-paper-raised lg:col-span-5">
          <p className="bn-label text-ink-soft">Featured tool</p>
          <h2 className="bn-display mt-6 text-3xl text-ink">
            {featuredTool.name}
          </h2>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
            {featuredTool.description}
          </p>
          <div className="bn-fig mt-6 p-4">
            <KnobsFigure />
          </div>
          <p className="bn-figlabel mt-3">Fig_T02 · Five knobs, one system</p>
          <div className="bn-label mt-6 flex gap-6 text-ink">
            <a
              href={featuredTool.liveUrl}
              className="border-b-2 border-current pb-1 hover:text-ink-soft"
            >
              Turn the dials →
            </a>
            <a href={featuredTool.repoUrl} className="hover:text-ink-soft">
              Source
            </a>
          </div>
        </section>
      </div>

      {/* Row 2: courses */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {courses.map((course, i) => (
          <section
            key={course.code}
            className="bn-card flex flex-col text-(--card-ink)"
            style={{ background: courseColors[i] }}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="bn-label">
                {course.code} / {course.years}
              </p>
              <p className="bn-stamp shrink-0">{course.role}</p>
            </div>
            <h3 className="bn-display mt-6 text-2xl">{course.title}</h3>
            <p className="bn-label mt-2">{course.institution}</p>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              {course.description}
            </p>
            <ul className="bn-matlist mt-6">
              {course.materials.map((m) => (
                <li key={m}>
                  <span className="flex-1">{m}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Row 3: recognition — cream card */}
      <section className="bn-card mt-4 bg-(--ink) text-(--card-ink)">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="bn-label">Recognition</p>
            <h2 className="bn-display mt-5 text-3xl">
              Students noticed. So did the Bok Center.
            </h2>
            <ul className="bn-matlist mt-6 max-w-xl">
              {teachingHighlights.map((h) => (
                <li key={h}>
                  <span className="flex-1">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="bn-stamp shrink-0">
            3× Distinction
            <br />
            2022–24
          </p>
        </div>
      </section>
    </div>
  );
}
