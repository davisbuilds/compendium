import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "The Influence Index", template: "%s · Influence Index" },
  description: "The Influence Index: an illustrated field guide to people who shaped industries, institutions, and culture.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body className="font-sans antialiased">{children}</body></html>;
}
