"use client";

import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories, type ContentItem, type Category } from "@/lib/content";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSlideshowProps {
  items: ContentItem[];
  personaSlug: string;
  selectedCategory: Category | null;
  onCategoryClick: (category: Category) => void;
}

function getCategoryStyle(categoryId: Category): string {
  const cat = categories.find((c) => c.id === categoryId);
  return cat?.color || "bg-neutral-100 text-neutral-800";
}

export function ImageSlideshow({
  items,
  personaSlug,
  selectedCategory,
  onCategoryClick,
}: ImageSlideshowProps) {
  const imageItems = items.filter((item) => item.type === "image");

  if (imageItems.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg border border-dashed">
        <p className="text-neutral-500">No images available</p>
      </div>
    );
  }

  // For single image, no slideshow needed
  if (imageItems.length === 1) {
    const item = imageItems[0];
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {item.categories.map((cat) => (
            <Badge
              key={cat}
              variant="outline"
              className={cn(
                getCategoryStyle(cat),
                selectedCategory === cat && "ring-2 ring-neutral-900 ring-offset-2"
              )}
              onClick={() => onCategoryClick(cat)}
            >
              {categories.find((c) => c.id === cat)?.label || cat}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <ZoomableImage
          src={`/content/personas/${personaSlug}/${item.filename}`}
          alt={item.title}
        />
      </div>
    );
  }

  // Multiple images - use slideshow
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      navigation
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      spaceBetween={30}
      slidesPerView={1}
      className="rounded-lg"
    >
      {imageItems.map((item) => (
        <SwiperSlide key={item.filename}>
          <div className="space-y-4 pb-12">
            <div className="flex flex-wrap gap-2">
              {item.categories.map((cat) => (
                <Badge
                  key={cat}
                  variant="outline"
                  className={cn(
                    getCategoryStyle(cat),
                    selectedCategory === cat && "ring-2 ring-neutral-900 ring-offset-2"
                  )}
                  onClick={() => onCategoryClick(cat)}
                >
                  {categories.find((c) => c.id === cat)?.label || cat}
                </Badge>
              ))}
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <ZoomableImage
              src={`/content/personas/${personaSlug}/${item.filename}`}
              alt={item.title}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

interface ZoomableImageProps {
  src: string;
  alt: string;
}

function ZoomableImage({ src, alt }: ZoomableImageProps) {
  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.5}
      maxScale={4}
      centerOnInit
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <div className="relative">
          {/* Zoom Controls */}
          <div className="absolute right-2 top-2 z-10 flex gap-1">
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full shadow-md"
              onClick={() => zoomIn()}
            >
              <ZoomIn className="h-4 w-4" />
              <span className="sr-only">Zoom in</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full shadow-md"
              onClick={() => zoomOut()}
            >
              <ZoomOut className="h-4 w-4" />
              <span className="sr-only">Zoom out</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full shadow-md"
              onClick={() => resetTransform()}
            >
              <RotateCcw className="h-4 w-4" />
              <span className="sr-only">Reset zoom</span>
            </Button>
          </div>

          {/* Image Container */}
          <div className="zoom-container overflow-hidden rounded-lg border bg-neutral-50 dark:bg-neutral-900">
            <TransformComponent
              wrapperStyle={{
                width: "100%",
                height: "auto",
                minHeight: "300px",
                maxHeight: "70vh",
              }}
              contentStyle={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="h-auto max-h-[70vh] w-auto max-w-full object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </TransformComponent>
          </div>

          {/* Instructions */}
          <p className="mt-2 text-center text-xs text-neutral-500">
            Use scroll or pinch to zoom. Drag to pan.
          </p>
        </div>
      )}
    </TransformWrapper>
  );
}
