# Pixel Avatar Design

## Summary

Generate modern pixel art profile photos for each persona using Gemini, display them with CSS idle animation across the app.

## Approach

One static image per persona generated via Gemini `gemini-3-pro-image-preview`. CSS `@keyframes` provides a subtle float/bob animation. `next/image` with `image-rendering: pixelated` preserves crisp pixel edges at all sizes.

## Image Generation

- **Script:** `scripts/generate_avatars.py`
- **Model:** `gemini-3-pro-image-preview`, 1K resolution, 1:1 aspect ratio
- **Prompt template:** "Modern pixel art portrait of [name], [visual description]. Square composition, clean background, Stardew Valley / Celeste style with expressive shading. No text."
- **Output:** `public/content/personas/<slug>/avatar.png` (saved as PNG)

## Data Model

Add `avatar: string` field to `Persona` interface in `src/lib/content.ts`. Each persona gets `avatar: "avatar.png"`. Path resolves to `/content/personas/<slug>/avatar.png`.

## PixelAvatar Component

New `src/components/PixelAvatar.tsx`:

- **Props:** `slug`, `name`, `size` ("sm" | "md" | "lg" mapping to 32/40/64px)
- **Image:** `next/image` with `image-rendering: pixelated`
- **Animation:** `@keyframes pixel-bob` — 2px vertical float, 2s ease-in-out infinite
- **Fallback:** `<User />` icon on load error via `onError` state

## Integration

Replace `<User />` icon with `<PixelAvatar />` in three files:

1. `src/app/page.tsx` — home cards (size "md")
2. `src/app/persona/[slug]/PersonaPageClient.tsx` — detail header (size "lg")
3. `src/components/Sidebar.tsx` — nav items (size "sm")
