import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { courses, featuredTool, teachingHighlights } from "@/content/teaching";

export const metadata: Metadata = {
  title: "Teaching — Austin Tucker",
  description:
    "Teaching portfolio at the intersection of global health and econometrics: GHP 525, PHS 2000B, GENED 1063.",
};

export default function TeachingPage() {
  return (
    <div className="mx-auto max-w-5xl px-5">
      <section className="py-16">
        <SectionLabel index="02">Teaching</SectionLabel>
        <h1 className="mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          Econometrics, taught through health
        </h1>
        <div className="prose-site mt-6 max-w-2xl">
          <p>
            The methods that answer health policy questions — instrumental
            variables, difference-in-differences, regression discontinuity —
            are usually taught in the abstract. I teach them the other way
            around: start with a health problem someone actually needs to
            solve, and build the econometrics students need to solve it. Four
            years of Harvard teaching, from doctoral methods cores to a
            600-student undergraduate lecture course.
          </p>
        </div>
      </section>

      <section className="border-t border-rule py-14">
        <Reveal>
          <SectionLabel>Featured tool</SectionLabel>
          <div className="figure-frame graph-paper mt-4 max-w-3xl p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold">
              {featuredTool.name}
            </h2>
            <p className="prose-site mt-3">{featuredTool.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
              <a
                href={featuredTool.liveUrl}
                className="border border-teal bg-teal px-4 py-2 text-white hover:bg-teal-deep"
              >
                Try it live →
              </a>
              <a
                href={featuredTool.repoUrl}
                className="border border-rule bg-paper-raised px-4 py-2 text-ink-soft hover:border-teal hover:text-teal"
              >
                Source on GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {courses.map((course) => (
        <section key={course.code} className="border-t border-rule py-14">
          <Reveal>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-mono text-sm text-hazard">
                {course.code}
              </span>
              <h2 className="font-serif text-2xl font-semibold">
                {course.title}
              </h2>
            </div>
            <p className="mt-1 font-mono text-xs text-ink-faint">
              {course.role} · {course.institution} · {course.years}
            </p>
            <p className="prose-site mt-4 max-w-2xl">{course.description}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="figure-frame mt-6 max-w-2xl p-5">
              <p className="section-label">Materials</p>
              <ul className="mt-3 space-y-2">
                {course.materials.map((m, mIdx) => (
                  <li key={m} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="font-mono text-teal">
                      {String(mIdx + 1).padStart(2, "0")}.
                    </span>
                    <span className="text-ink-soft">{m}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-xs text-ink-faint">
                Selected materials available on request — samples coming to
                this page soon.
              </p>
            </div>
          </Reveal>
        </section>
      ))}

      <section className="border-t border-rule py-14">
        <Reveal>
          <SectionLabel>Recognition</SectionLabel>
          <ul className="mt-4 max-w-2xl space-y-2">
            {teachingHighlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden className="text-hazard">
                  ◆
                </span>
                <span className="text-ink-soft">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
