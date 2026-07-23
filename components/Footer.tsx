import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-10 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-5 font-mono text-xs">
          <a href={`mailto:${site.email}`} className="text-ink-soft hover:text-teal">
            email
          </a>
          {site.githubUser && (
            <a
              href={`https://github.com/${site.githubUser}`}
              className="text-ink-soft hover:text-teal"
            >
              github
            </a>
          )}
          {site.substackUrl && (
            <a href={site.substackUrl} className="text-ink-soft hover:text-teal">
              substack
            </a>
          )}
          <a href={site.cvPath} className="text-ink-soft hover:text-teal">
            cv
          </a>
        </div>
      </div>
    </footer>
  );
}
