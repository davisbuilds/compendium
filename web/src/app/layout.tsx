import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compendium",
  description:
    "A curated collection of one-pagers, templates, and advice from successful entrepreneurs and technologists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-white dark:bg-neutral-950">
          <Sidebar />
          {/* Main Content - offset for sidebar on desktop */}
          <main className="lg:pl-64">
            <div className="min-h-screen">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
