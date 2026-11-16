import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Compendium", template: "%s · Compendium" },
  description: "The Influence Index and the Compendium library of one-pagers and templates.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body className="font-sans antialiased">{children}</body></html>;
}
