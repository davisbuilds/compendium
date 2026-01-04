"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, User } from "lucide-react";
import { getContentByCategory, categories, type Category } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.category as Category;

  const category = categories.find((c) => c.id === categoryId);
  const content = getContentByCategory(categoryId);

  if (!category) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 p-6">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <Button variant="outline" onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
    );
  }

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
          <Badge className={`${category.color} text-lg px-4 py-2`}>
            {category.label}
          </Badge>
          <div>
            <h1 className="text-3xl font-bold">{category.label}</h1>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              {content.length} {content.length === 1 ? "item" : "items"} in this
              category
            </p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      {content.length === 0 ? (
        <div className="flex h-64 items-center justify-center rounded-lg border border-dashed">
          <p className="text-neutral-500">No content in this category</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.map(({ persona, item }) => (
            <Link
              key={`${persona.id}-${item.filename}`}
              href={`/persona/${persona.slug}`}
              className="group overflow-hidden rounded-lg border bg-white transition-all hover:border-neutral-300 hover:shadow-lg dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src={`/content/personas/${persona.slug}/${item.filename}`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <User className="h-3 w-3 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <span className="text-sm text-neutral-500">{persona.name}</span>
                </div>
                <h3 className="font-semibold group-hover:text-blue-600">
                  {item.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.categories.map((cat) => (
                    <Badge
                      key={cat}
                      variant="outline"
                      className={`text-xs ${
                        categories.find((c) => c.id === cat)?.color || ""
                      }`}
                    >
                      {categories.find((c) => c.id === cat)?.label || cat}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
