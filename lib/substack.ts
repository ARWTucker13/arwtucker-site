// Fetch and parse the Substack RSS feed server-side. Substack serves RSS at
// <publication>/feed; we parse the handful of fields we need without an XML
// dependency. Revalidated hourly so the page stays fresh without a rebuild.

export type FeedPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};

function extract(block: string, tag: string): string {
  const match = block.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i")
  );
  if (!match) return "";
  return match[1]
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();
}

export async function fetchSubstackPosts(
  substackUrl: string,
  limit = 10
): Promise<FeedPost[]> {
  if (!substackUrl) return [];
  try {
    const res = await fetch(`${substackUrl.replace(/\/$/, "")}/feed`, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "personal-site-rss-reader" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    return items.slice(0, limit).map((item) => ({
      title: stripHtml(extract(item, "title")),
      link: extract(item, "link"),
      pubDate: extract(item, "pubDate"),
      description: stripHtml(extract(item, "description")).slice(0, 280),
    }));
  } catch {
    return [];
  }
}

export function formatDate(pubDate: string): string {
  const d = new Date(pubDate);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
