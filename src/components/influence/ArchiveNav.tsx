"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { href: "/", label: "People" },
  { href: "/themes", label: "Themes" },
  { href: "/timeline", label: "Timeline" },
  { href: "/compare", label: "Compare" },
];

export function ArchiveNav() {
  const path = usePathname();
  const active = path === "/" || path.startsWith("/people/") ? "/" : path;

  return (
    <header className="masthead">
      <div className="wrap topbar">
        <Link className="brand" href="/" aria-label="The Influence Index home">
          <Image src="/content/influence/index-mark.svg" alt="" width={31} height={31} unoptimized />
          <span>COMPENDIUM<span className="brand-dim">/INDEX</span></span>
        </Link>
        <nav aria-label="Archive views">
          {sections.map(({ href, label }) => (
            <Link key={href} href={href}
              aria-current={active === href || active.startsWith(href + "/") ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="byline" href="/about">DAVIS BUILDS <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
