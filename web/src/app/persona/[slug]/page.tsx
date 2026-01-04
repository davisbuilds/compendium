"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";
import { getPersonaBySlug, categories, type Category } from "@/lib/content";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function getCategoryStyle(categoryId: Category): string {
  const cat = categories.find((c) => c.id === categoryId);
  return cat?.color || "bg-neutral-100 text-neutral-800";
}

export default function PersonaPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const persona = getPersonaBySlug(slug);
  const [selectedCategory, setSelectedCategory] = React.useState<Category | null>(null);

  if (!persona) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 p-6">
        <h1 className="text-2xl font-bold">Persona not found</h1>
        <Button variant="outline" onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
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
          className="mb-4 inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
            <User className="h-8 w-8 text-neutral-600 dark:text-neutral-400" />
          </div>
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
                    getCategoryStyle(cat),
                    selectedCategory === cat && "ring-2 ring-neutral-900 ring-offset-2"
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
