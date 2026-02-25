# Compendium

Curated one-pagers, templates, and advice from entrepreneurs/technologists. Next.js 16 + React 19 + Tailwind 4 + TypeScript.

## Commands

```bash
pnpm dev    # dev server on :3000
pnpm build  # production build
pnpm lint   # eslint
```

## Testing

- Use `pnpm exec playwright test` for browser-based end-to-end UI testing.

## Architecture

- **App Router** with `src/` directory, `@/` path alias
- **Content data** lives in `src/lib/content.ts` (hardcoded arrays, no CMS)
- **Static assets** in `public/content/personas/<slug>/` (images) and `public/content/templates/` (PDFs)
- **Routes**: `/` (home), `/persona/[slug]`, `/category/[category]`, `/template/[slug]`
- **Components**: `Sidebar`, `ImageSlideshow`, `PdfViewer`, plus shadcn-style `ui/` primitives
- **Dark mode** is the default theme

## Adding Content

1. Add image/PDF to `public/content/personas/<slug>/` or `public/content/templates/`
2. Update the `personas` or `templates` array in `src/lib/content.ts`
3. Categories: productivity, success, startups, fundraising, hiring, career, life-advice, communication

## Conventions

- pnpm (not npm/yarn)
- Tailwind utility classes, dark mode via `dark:` variants
- No external data fetching; all content is static
