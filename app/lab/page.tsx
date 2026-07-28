import Link from "next/link";

const variants = [
  {
    href: "/lab/editorial",
    name: "Editorial magazine",
    desc: "Asterisk × FT × Works in Progress — warm paper, literary serif display, hairline rules, geometric collage accents.",
  },
  {
    href: "/lab/bento",
    name: "Constructivist bento",
    desc: "De Stijl × Stella — dark ground, saturated color blocks, postcard motifs, serif display over mono captions. Current front-runner: interior stress tests at /lab/bento/research and /lab/bento/teaching (the latter fuses field-manual blueprint figures into the bento system).",
  },
  {
    href: "/lab/manual",
    name: "Field manual 2.0",
    desc: "Making Software × cybernetics — blueprint accents, figure numbering, annotated diagrams, dither dividers.",
  },
];

export default function LabIndex() {
  return (
    <div className="min-h-screen bg-neutral-950 px-6 py-12 text-neutral-100">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
          Design lab · not indexed
        </p>
        <h1 className="mt-3 font-serif text-3xl font-semibold">
          Three visual languages, one homepage
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
          Each prototype rebuilds the homepage with real site content in a
          different visual direction. Open one full-screen, or compare them
          side by side below.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {variants.map((v) => (
            <Link
              key={v.href}
              href={v.href}
              className="block border border-neutral-800 bg-neutral-900 p-5 transition-colors hover:border-neutral-500"
            >
              <h2 className="font-serif text-lg font-semibold">{v.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {v.desc}
              </p>
              <p className="mt-3 font-mono text-xs text-neutral-500">
                {v.href} →
              </p>
            </Link>
          ))}
        </div>

        <h2 className="mt-14 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
          Side by side
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {variants.map((v) => (
            <div key={v.href} className="border border-neutral-800">
              <p className="border-b border-neutral-800 bg-neutral-900 px-3 py-2 font-mono text-xs text-neutral-400">
                {v.name}
              </p>
              <iframe
                src={v.href}
                title={v.name}
                className="h-[70vh] w-full bg-white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
