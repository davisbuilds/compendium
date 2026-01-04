"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User, FileText, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { personas, templates } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItem({ href, children, icon, isActive, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50"
          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
      )}
    >
      {icon}
      {children}
    </Link>
  );
}

interface SidebarContentProps {
  onNavigate?: () => void;
}

function SidebarContent({ onNavigate }: SidebarContentProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Logo/Title */}
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold" onClick={onNavigate}>
          <span className="text-xl">Productiv</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        {/* Home */}
        <div className="mb-6">
          <NavItem
            href="/"
            icon={<Home className="h-4 w-4" />}
            isActive={pathname === "/"}
            onClick={onNavigate}
          >
            Home
          </NavItem>
        </div>

        {/* Personas */}
        <div className="mb-6">
          <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Personas
          </h3>
          <div className="space-y-1">
            {personas.map((persona) => (
              <NavItem
                key={persona.id}
                href={`/persona/${persona.slug}`}
                icon={<User className="h-4 w-4" />}
                isActive={pathname === `/persona/${persona.slug}`}
                onClick={onNavigate}
              >
                {persona.name}
              </NavItem>
            ))}
          </div>
        </div>

        {/* Templates */}
        <div>
          <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Templates
          </h3>
          <div className="space-y-1">
            {templates.map((template) => (
              <NavItem
                key={template.filename}
                href={`/template/${template.filename.replace(".pdf", "")}`}
                icon={<FileText className="h-4 w-4" />}
                isActive={pathname === `/template/${template.filename.replace(".pdf", "")}`}
                onClick={onNavigate}
              >
                {template.title}
              </NavItem>
            ))}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <p className="text-xs text-neutral-500">
          A collection of productivity tips from successful entrepreneurs
        </p>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Header with Hamburger */}
      <div className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-white px-4 lg:hidden dark:bg-neutral-950">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="-ml-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72">
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
            </SheetHeader>
            <SidebarContent onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
        <Link href="/" className="font-semibold">
          Productiv
        </Link>
      </div>

      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r bg-white lg:block dark:bg-neutral-950">
        <SidebarContent />
      </aside>
    </>
  );
}
