"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PixelAvatar } from "@/components/PixelAvatar";
import { categories, type Category, type Persona } from "@/lib/content";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function getCategoryStyle(categoryId: Category): string {
  const cat = categories.find((c) => c.id === categoryId);
  return cat?.color || "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200";
}

export function PersonaPageClient({ persona }: { persona: Persona | null }) {
  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(null);

  if (!persona) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 p-6">
        <h1 className="text-2xl font-bold">Persona not found</h1>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  // Get all unique categories for this persona
  const personaCategories = Array.from(
    new Set(persona.content.flatMap((item) => item.categories))
  );

  // Filter content by selected category
  const filteredContent = selectedCategory
    ? persona.content.filter((item) => item.categories.includes(selectedCategory))
    : persona.content;

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <div className="flex items-start gap-4">
          <PixelAvatar slug={persona.slug} name={persona.name} size="lg" />
          <div>
            <h1 className="text-3xl font-bold">{persona.name}</h1>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              {persona.description}
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      {personaCategories.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-medium text-neutral-500">
            Filter by category
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(null)}
            >
              All ({persona.content.length})
            </Badge>
            {personaCategories.map((cat) => {
              const count = persona.content.filter((item) =>
                item.categories.includes(cat)
              ).length;
              return (
                <Badge
                  key={cat}
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    getCategoryStyle(cat),
                    selectedCategory === cat && "ring-2 ring-neutral-900 ring-offset-2 dark:ring-neutral-100"
                  )}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {categories.find((c) => c.id === cat)?.label || cat} ({count})
                </Badge>
              );
            })}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="rounded-lg border bg-white p-6 dark:bg-neutral-900">
        <ImageSlideshow
          items={filteredContent}
          personaSlug={persona.slug}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
      </div>
    </div>
  );
}
