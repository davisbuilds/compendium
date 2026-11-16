import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";

export default function LibraryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Sidebar />
      <main className="min-h-screen lg:pl-64">{children}</main>
    </div>
  );
}
