import Link from "next/link";
import { User, FileText, ArrowRight } from "lucide-react";
import { personas, templates, categories } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Productiv
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          A curated collection of one-pagers, templates, and productivity tips
          from successful entrepreneurs and technologists.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Browse by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <Badge
                variant="outline"
                className={`${category.color} text-sm transition-transform hover:scale-105`}
              >
                {category.label}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Personas Grid */}
      <div className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">Personas</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {personas.map((persona) => (
            <Link
              key={persona.id}
              href={`/persona/${persona.slug}`}
              className="group rounded-lg border bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <User className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold group-hover:text-blue-600">
                    {persona.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                    {persona.description}
                  </p>
                  <p className="mt-2 text-xs text-neutral-400">
                    {persona.content.length}{" "}
                    {persona.content.length === 1 ? "item" : "items"}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Templates */}
      <div>
        <h2 className="mb-6 text-xl font-semibold">Templates</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Link
              key={template.filename}
              href={`/template/${template.filename.replace(".pdf", "")}`}
              className="group rounded-lg border bg-white p-4 transition-all hover:border-neutral-300 hover:shadow-md dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
                  <FileText className="h-5 w-5 text-red-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold group-hover:text-blue-600">
                    {template.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {template.description}
                  </p>
                  <p className="mt-2 text-xs text-neutral-400">PDF Template</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
