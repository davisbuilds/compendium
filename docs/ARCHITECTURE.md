# Architecture

## High-Level Flow

1. Content data (personas and templates) is defined as hardcoded arrays in `src/lib/content.ts`.
2. App Router pages read content data and render server-side with client-side interactive components.
3. Sidebar provides persistent navigation across all routes.
4. Static assets (images, PDFs) live in `public/content/` and are served directly.

## App Router Structure

Uses `src/` directory with `@/` path alias.

| Route | File | Type | Purpose |
|-------|------|------|---------|
| `/` | `src/app/page.tsx` | SSR | Home with persona grid, templates, and categories |
| `/persona/[slug]` | `src/app/persona/[slug]/page.tsx` | SSR + Client | Persona detail with image slideshow |
| `/category/[category]` | `src/app/category/[category]/page.tsx` | SSR | Category-filtered content grid |
| `/template/[slug]` | `src/app/template/[slug]/page.tsx` | Client | PDF template viewer |

Layout (`src/app/layout.tsx`) wraps all routes with the Sidebar component and dark mode default.

## Content Data Model

`src/lib/content.ts` exports:

- `personas`: Array of `Persona` objects (id, name, slug, description, avatar, content items).
- `templates`: Array of `Template` objects (filename, title, description).
- `categories`: 8 categories with display names and color schemes.
- Helper functions: `getPersonaBySlug()`, `getContentByCategory()`, `getAllCategories()`.

Categories: `productivity`, `success`, `startups`, `fundraising`, `hiring`, `career`, `life-advice`, `communication`.

No CMS or database — all content is static and checked into the repo.

## Components

| Component | File | Role |
|-----------|------|------|
| `Sidebar` | `src/components/Sidebar.tsx` | Fixed desktop + mobile sheet navigation |
| `ImageSlideshow` | `src/components/ImageSlideshow.tsx` | Swiper-based carousel with zoom/pan |
| `PdfViewer` | `src/components/PdfViewer.tsx` | PDF document viewer with page navigation |
| `PixelAvatar` | `src/components/PixelAvatar.tsx` | Pixel art avatar display with bob animation |

UI primitives (shadcn-style): `badge.tsx`, `button.tsx`, `sheet.tsx`.

## Static Assets

```text
public/content/
├── personas/
│   ├── daniel-gross/         # avatar.png + content images
│   ├── elon-musk/
│   ├── marc-andreessen/
│   ├── nat-friedman/
│   ├── naval-ravikant/
│   ├── paul-graham/
│   ├── sam-altman/
│   └── tim-ferriss/
└── templates/
    ├── PersonalPlanner.pdf
    └── TimeBoxTemplate.pdf
```

## Directory Map

```text
src/app/                  # Routes and layouts
src/components/           # Feature components + ui/ primitives
src/lib/                  # Content data and utilities
public/content/           # Static images and PDFs
docs/plans/               # Implementation plans
```
