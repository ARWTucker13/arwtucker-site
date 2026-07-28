import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design Lab — Austin Tucker",
  robots: { index: false, follow: false },
};

const variants = [
  { href: "/lab/editorial", label: "editorial" },
  { href: "/lab/bento", label: "bento" },
  { href: "/lab/manual", label: "manual" },
];

export default function LabLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-[100] flex items-baseline gap-4 border-b border-white/15 bg-black px-4 py-2 font-mono text-xs text-white/70">
        <Link href="/lab" className="font-semibold text-white hover:underline">
          LAB
        </Link>
        {variants.map((v) => (
          <Link key={v.href} href={v.href} className="hover:text-white">
            {v.label}
          </Link>
        ))}
        <Link href="/" className="ml-auto hover:text-white">
          ← site
        </Link>
      </div>
      {children}
    </div>
  );
}
