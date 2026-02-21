"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

const sizes = {
  sm: 32,
  md: 40,
  lg: 64,
} as const;

type PixelAvatarSize = keyof typeof sizes;

interface PixelAvatarProps {
  slug: string;
  name: string;
  size: PixelAvatarSize;
  className?: string;
}

export function PixelAvatar({ slug, name, size, className }: PixelAvatarProps) {
  const [error, setError] = useState(false);
  const px = sizes[size];

  if (error) {
    return (
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800",
          className
        )}
        style={{ width: px, height: px }}
      >
        <User
          className="text-neutral-600 dark:text-neutral-400"
          style={{ width: px * 0.5, height: px * 0.5 }}
        />
      </div>
    );
  }

  return (
    <Image
      src={`/content/personas/${slug}/avatar.png`}
      alt={`${name} pixel art avatar`}
      width={px}
      height={px}
      className={cn(
        "shrink-0 rounded-full animate-pixel-bob [image-rendering:pixelated]",
        className
      )}
      onError={() => setError(true)}
    />
  );
}
