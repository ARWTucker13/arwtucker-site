"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-rule bg-paper/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-baseline justify-between px-5 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight hover:text-teal"
        >
          {site.name}
        </Link>
        <nav className="flex gap-5 font-mono text-xs lowercase tracking-wider">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "font-medium text-teal underline underline-offset-8 decoration-2"
                    : "text-ink-soft hover:text-ink"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
