# Pixel Avatars Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Generate modern pixel art avatars for each persona via Gemini and display them with CSS animation across the app.

**Architecture:** Python script generates one avatar per persona, saved to `public/content/personas/<slug>/avatar.png`. A `PixelAvatar` React component renders them with `next/image` and CSS bob animation. Three existing files swap the generic `<User />` icon for the new component.

**Tech Stack:** Python (google-genai, Pillow), Next.js 16, React 19, Tailwind 4, next/image

---

### Task 1: Generate avatar images with Gemini

**Files:**
- Create: `scripts/generate_avatars.py`
- Output: `public/content/personas/*/avatar.png` (8 files)

**Step 1: Create the generation script**

```python
import os
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

PERSONAS = [
    ("daniel-gross", "Daniel Gross, young tech entrepreneur with dark hair and glasses"),
    ("elon-musk", "Elon Musk, distinctive sharp features and short hair"),
    ("marc-andreessen", "Marc Andreessen, tall bald man with a broad smile"),
    ("nat-friedman", "Nat Friedman, friendly face with short brown hair and beard"),
    ("naval-ravikant", "Naval Ravikant, Indian-American man with salt-and-pepper hair"),
    ("paul-graham", "Paul Graham, older man with receding reddish hair and thoughtful expression"),
    ("sam-altman", "Sam Altman, young man with light brown hair and clean-shaven face"),
    ("tim-ferriss", "Tim Ferriss, athletic build with short dark hair"),
]

BASE_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "content", "personas")

for slug, description in PERSONAS:
    print(f"Generating avatar for {slug}...")
    prompt = (
        f"Modern pixel art portrait of {description}. "
        "Bust shot, clean solid-color background, Stardew Valley / Celeste style "
        "with expressive shading and warm colors. No text, no watermarks."
    )
    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=[prompt],
        config=types.GenerateContentConfig(
            response_modalities=["TEXT", "IMAGE"],
            image_config=types.ImageConfig(
                aspect_ratio="1:1",
                image_size="1K",
            ),
        ),
    )
    out_dir = os.path.join(BASE_DIR, slug)
    os.makedirs(out_dir, exist_ok=True)
    for part in response.parts:
        if part.inline_data:
            img = part.as_image()
            img.save(os.path.join(out_dir, "avatar.png"), format="PNG")
            print(f"  Saved {slug}/avatar.png")
            break
    else:
        print(f"  WARNING: No image generated for {slug}")
```

**Step 2: Install Python dependencies and run**

Run: `pip install google-genai Pillow`
Run: `python scripts/generate_avatars.py`
Expected: 8 `avatar.png` files created under `public/content/personas/*/`

**Step 3: Verify images exist**

Run: `ls public/content/personas/*/avatar.png`
Expected: 8 files listed

**Step 4: Commit**

```bash
git add scripts/generate_avatars.py public/content/personas/*/avatar.png
git commit -m "feat: generate pixel art avatars for all personas"
```

---

### Task 2: Add avatar field to Persona data model

**Files:**
- Modify: `src/lib/content.ts:18-24` (Persona interface)
- Modify: `src/lib/content.ts:43-198` (personas array)

**Step 1: Add avatar to Persona interface**

In `src/lib/content.ts`, add `avatar` field to the `Persona` interface:

```ts
export interface Persona {
  id: string;
  name: string;
  slug: string;
  description: string;
  avatar: string;
  content: ContentItem[];
}
```

**Step 2: Add avatar to each persona entry**

Add `avatar: "avatar.png",` to every persona object in the `personas` array, after the `description` field. All 8 personas get the same filename since they live in different directories.

**Step 3: Verify build**

Run: `pnpm build`
Expected: Build succeeds (TypeScript will catch any missing `avatar` fields)

**Step 4: Commit**

```bash
git add src/lib/content.ts
git commit -m "feat: add avatar field to Persona data model"
```

---

### Task 3: Create PixelAvatar component

**Files:**
- Create: `src/components/PixelAvatar.tsx`

**Step 1: Create the component**

```tsx
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
```

**Step 2: Add the keyframe animation to globals.css**

In `src/app/globals.css`, add:

```css
@keyframes pixel-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

.animate-pixel-bob {
  animation: pixel-bob 2s ease-in-out infinite;
}
```

**Step 3: Verify build**

Run: `pnpm build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/components/PixelAvatar.tsx src/app/globals.css
git commit -m "feat: add PixelAvatar component with bob animation"
```

---

### Task 4: Integrate avatars into home page

**Files:**
- Modify: `src/app/page.tsx:2` (imports)
- Modify: `src/app/page.tsx:48-49` (persona card icon)

**Step 1: Replace User icon with PixelAvatar**

In `src/app/page.tsx`:

1. Add import: `import { PixelAvatar } from "@/components/PixelAvatar";`
2. Remove `User` from the lucide-react import (keep `FileText`, `ArrowRight`)
3. Replace the persona card icon block (the `<div>` with `<User />` inside) with:

```tsx
<PixelAvatar slug={persona.slug} name={persona.name} size="md" />
```

**Step 2: Verify dev server**

Run: `pnpm dev`
Navigate to `http://localhost:3000` and verify avatars appear in persona cards with bob animation.

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: use pixel avatars on home page persona cards"
```

---

### Task 5: Integrate avatars into persona detail page

**Files:**
- Modify: `src/app/persona/[slug]/PersonaPageClient.tsx:5` (imports)
- Modify: `src/app/persona/[slug]/PersonaPageClient.tsx:61-63` (header icon)

**Step 1: Replace User icon with PixelAvatar**

In `PersonaPageClient.tsx`:

1. Add import: `import { PixelAvatar } from "@/components/PixelAvatar";`
2. Remove `User` from the lucide-react import (keep `ArrowLeft`)
3. Replace the header icon block (the `<div>` wrapping `<User />` at line 61-63) with:

```tsx
<PixelAvatar slug={persona.slug} name={persona.name} size="lg" />
```

**Step 2: Verify dev server**

Navigate to any persona page (e.g. `/persona/sam-altman`) and verify the large avatar appears with animation.

**Step 3: Commit**

```bash
git add src/app/persona/[slug]/PersonaPageClient.tsx
git commit -m "feat: use pixel avatars on persona detail page"
```

---

### Task 6: Integrate avatars into sidebar

**Files:**
- Modify: `src/components/Sidebar.tsx:6` (imports)
- Modify: `src/components/Sidebar.tsx:78-79` (nav item icon)

**Step 1: Replace User icon with PixelAvatar**

In `Sidebar.tsx`:

1. Add import: `import { PixelAvatar } from "@/components/PixelAvatar";`
2. Remove `User` from the lucide-react import (keep `Menu`, `FileText`, `Home`)
3. In the personas `.map()` block, replace `icon={<User className="h-4 w-4" />}` with:

```tsx
icon={<PixelAvatar slug={persona.slug} name={persona.name} size="sm" />}
```

**Step 2: Verify dev server**

Check sidebar on desktop and mobile (hamburger menu). Avatars should appear at 32px next to each persona name.

**Step 3: Commit**

```bash
git add src/components/Sidebar.tsx
git commit -m "feat: use pixel avatars in sidebar navigation"
```

---

### Task 7: Final verification and cleanup

**Step 1: Full build check**

Run: `pnpm build`
Expected: Build succeeds with no errors or warnings

**Step 2: Lint check**

Run: `pnpm lint`
Expected: No lint errors

**Step 3: Final commit (if any cleanup needed)**

```bash
git add -A
git commit -m "chore: pixel avatar cleanup"
```
