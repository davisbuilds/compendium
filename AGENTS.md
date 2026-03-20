# AGENTS.md

Guidance for coding agents working in this repository.

Curated one-pagers, templates, and advice from entrepreneurs/technologists. Next.js 16 + React 19 + Tailwind 4 + TypeScript.

## Commands

```bash
pnpm dev    # dev server on :3000
pnpm build  # production build
pnpm lint   # eslint
```

## Key Files Reference

| Purpose | Location |
|---------|----------|
| Content data (all personas, templates, categories) | `src/lib/content.ts` |
| Root layout + dark mode + sidebar shell | `src/app/layout.tsx` |
| Sidebar navigation (mobile sheet + desktop fixed) | `src/components/Sidebar.tsx` |
| Image slideshow with zoom/pan | `src/components/ImageSlideshow.tsx` |
| PDF viewer with page nav + zoom | `src/components/PdfViewer.tsx` |
| Pixel avatar with fallback | `src/components/PixelAvatar.tsx` |
| Home page | `src/app/page.tsx` |
| Persona detail page | `src/app/persona/[slug]/page.tsx` |
| Template viewer page | `src/app/template/[slug]/page.tsx` |
| Category listing page | `src/app/category/[category]/page.tsx` |

## Architecture

- **App Router** with `src/` directory, `@/` path alias
- **Content data** lives in `src/lib/content.ts` (hardcoded arrays, no CMS)
- **Static assets** in `public/content/personas/<slug>/` (images) and `public/content/templates/` (PDFs)
- **Routes**: `/` (home), `/persona/[slug]`, `/category/[category]`, `/template/[slug]`
- **Dark mode** is the only theme — no light/dark toggle

## Testing

**Pre-push check**: Before pushing updates to the remote, run `pnpm lint` and `pnpm build`.

**TDD**: Use red/green TDD for new features and major changes.

**Key patterns**:
- Use `pnpm exec playwright test` for browser-based end-to-end UI testing.

## Adding Content

1. Add image/PDF to `public/content/personas/<slug>/` or `public/content/templates/`
2. Add `avatar.png` to `public/content/personas/<slug>/` (required per persona)
3. Update the `personas` or `templates` array in `src/lib/content.ts`
4. Categories: productivity, success, startups, fundraising, hiring, career, life-advice, communication

## Implementation Gotchas

1. **Asset paths are convention-driven**: Persona images at `public/content/personas/<slug>/<filename>`, templates at `public/content/templates/<filename>`, avatars at `public/content/personas/<slug>/avatar.png`. Filenames are case-sensitive — match exactly what's in `content.ts`.

2. **Template slug ↔ filename coupling**: Sidebar links strip `.pdf` from `template.filename`, and the template page reverses this to look up the template. Filenames in `content.ts` must end with `.pdf`.

3. **`ContentItem.type` controls rendering**: `"image"` items go through `ImageSlideshow`, `"pdf"` items are handled separately. No other types are supported.

4. **No runtime data fetching**: All content is static and hardcoded in `content.ts`. Adding content requires a code change and rebuild.

## Conventions

- pnpm (not npm/yarn)
- Tailwind utility classes, dark mode via `dark:` variants
