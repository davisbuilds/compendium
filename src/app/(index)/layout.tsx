import Link from "next/link";
import type { ReactNode } from "react";
import { ArchiveNav } from "@/components/influence/ArchiveNav";
import "./influence.css";

export default function InfluenceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="influence-index">
      <a className="skip" href="#influence-main">Skip to content</a>
      <ArchiveNav />
      <main className="wrap" id="influence-main" tabIndex={-1}>{children}</main>
      <footer className="wrap footer">
        <Link className="footer-name" href="/">THE INFLUENCE INDEX</Link>
        <div className="footer-links">
          <Link href="/about">About the archive <span aria-hidden="true">↗</span></Link>
        </div>
      </footer>
    </div>
  );
}
