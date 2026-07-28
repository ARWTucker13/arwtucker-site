import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import { fetchSubstackPosts, formatDate } from "@/lib/substack";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Occupational Hazard Ratios — Austin Tucker",
  description:
    "Essays and data stories on health, work, and the economics of who takes care of whom.",
};

export default async function BlogPage() {
  const posts = await fetchSubstackPosts(site.substackUrl);

  return (
    <div className="mx-auto max-w-5xl px-5">
      <section className="py-16">
        <SectionLabel index="03">Blog</SectionLabel>
        <div className="mt-3 flex items-center gap-6">
          <div className="figure-frame shrink-0 p-1">
            <Image
              src="/ohr-logo.png"
              alt="Occupational Hazard Ratios logo — four panels showing a worker in a hard hat, a network diagram, a DNA helix, and a heart with a medical cross"
              width={104}
              height={104}
              priority
            />
          </div>
          <h1 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Occupational{" "}
            <span className="text-hazard">Hazard</span> Ratios
          </h1>
        </div>
        <div className="prose-site mt-6 max-w-2xl">
          <p>
            An epidemiologist&apos;s hazard ratio measures how much more likely
            something bad is to happen to one group than another. This blog
            applies that instinct to work itself: essays and data stories on
            health, labor, and the economics of who takes care of whom.
          </p>
        </div>
        {site.substackUrl && (
          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <a
              href={site.substackUrl}
              className="border border-hazard bg-hazard px-4 py-2 text-white hover:opacity-90"
            >
              Read &amp; subscribe on Substack →
            </a>
          </div>
        )}
      </section>

      <section className="border-t border-rule py-12">
        <SectionLabel>Latest posts</SectionLabel>
        {posts.length > 0 ? (
          <ul className="mt-6 max-w-3xl divide-y divide-rule border-y border-rule">
            {posts.map((post) => (
              <li key={post.link}>
                <a href={post.link} className="group block py-5">
                  <p className="font-mono text-xs text-ink-faint">
                    {formatDate(post.pubDate)}
                  </p>
                  <h2 className="mt-1 font-serif text-xl font-semibold leading-snug group-hover:text-hazard">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {post.description}
                      {post.description.length >= 280 ? "…" : ""}
                    </p>
                  )}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="figure-frame graph-paper mt-6 max-w-2xl p-6">
            <p className="font-serif text-lg">First post in the works.</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              New essays land here automatically the moment they&apos;re
              published.
              {site.substackUrl && (
                <>
                  {" "}
                  <a
                    href={site.substackUrl}
                    className="text-hazard underline underline-offset-4"
                  >
                    Subscribe on Substack
                  </a>{" "}
                  to get them by email.
                </>
              )}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
