import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Code — Austin Tucker",
  description:
    "Replication code, teaching labs, and works in progress on GitHub.",
};

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
};

async function fetchRepos(user: string): Promise<Repo[]> {
  if (!user) return [];
  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?sort=pushed&per_page=30`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      console.error("[code page] GitHub API status:", res.status);
      return [];
    }
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork);
  } catch (err) {
    console.error("[code page] GitHub fetch failed:", err);
    return [];
  }
}

export default async function CodePage() {
  const repos = await fetchRepos(site.githubUser);

  return (
    <div className="mx-auto max-w-5xl px-5">
      <section className="py-16">
        <SectionLabel index="04">Code</SectionLabel>
        <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          Analysis in the open
        </h1>
        <div className="prose-site mt-6 max-w-2xl">
          <p>
            Research code should be inspectable. This page tracks my public
            work on GitHub — replication packages for papers, the R labs I
            built for teaching, and analysis projects in progress.
          </p>
        </div>
        {site.githubUser && (
          <p className="mt-8 font-mono text-sm">
            <a
              href={`https://github.com/${site.githubUser}`}
              className="border border-rule bg-paper-raised px-4 py-2 text-ink-soft hover:border-teal hover:text-teal"
            >
              github.com/{site.githubUser} →
            </a>
          </p>
        )}
      </section>

      <section className="border-t border-rule py-12">
        <SectionLabel>Public repositories</SectionLabel>
        {repos.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                className="figure-frame block p-5 transition-colors hover:border-teal"
              >
                <p className="font-mono text-sm font-semibold text-teal">
                  {repo.name}
                </p>
                {repo.description && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {repo.description}
                  </p>
                )}
                <p className="mt-3 font-mono text-xs text-ink-faint">
                  {repo.language ?? "—"}
                  {repo.stargazers_count > 0 &&
                    ` · ★ ${repo.stargazers_count}`}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <div className="figure-frame mt-6 max-w-2xl p-6">
            <p className="text-sm text-ink-soft">
              Repositories will appear here automatically once{" "}
              <code className="font-mono text-xs">githubUser</code> is set in{" "}
              <code className="font-mono text-xs">content/site.ts</code>.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
