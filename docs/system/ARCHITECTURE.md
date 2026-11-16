# Architecture

Compendium is one Next.js App Router application. The Influence Index is its only
content surface. `src/app/layout.tsx` owns the document and metadata defaults;
`src/app/(index)/layout.tsx` owns the masthead, skip link, reading area, and footer.
The route group does not appear in URLs.

| URL | Responsibility |
| --- | --- |
| `/` | Featured pairing and searchable profile directory |
| `/people/[slug]` | Profile, sources, milestones, and related links |
| `/themes`, `/themes/[slug]` | Field notes and linked profiles |
| `/timeline` | Milestone browser |
| `/compare?left=…&right=…` | Two profiles selected by slug |
| `/about` | Editorial and illustration notes |

The former Library routes (`/library`, `/persona/*`, `/category/*`, `/template/*`),
assets, viewers, and content tooling are removed. Those URLs return 404; there is
no compatibility shell or redirect to unrelated content.

## Content Ownership

`src/lib/influence/archive.ts` contains the editorial archive, typed by
`types.ts`. `data.ts` owns slug lookups, field filters, and directory projections;
`format.ts` owns search normalization, surname sorting, and comparison URLs.
Portraits are served directly from `public/content/influence/<slug>.webp`.
The favicon uses the Index mark at `src/app/icon.svg`.

Archive slugs, field-note references, portrait filenames, featured pairs, and
comparison defaults must agree. Known profiles and field notes are prerendered;
unknown slugs return not found. Editorial content is maintained as source and
requires a rebuild to change; no database or CMS is involved.

## Rendering And Styling

Server pages pass a searchable directory projection, timeline events, or comparison
options to Client Components in `src/components/influence/`. Keep full archive
imports out of client code. Comparison content is rendered on the server from
`left` and `right` query parameters; missing/invalid values use valid defaults.

The app needs a Next.js runtime for query-based comparisons. Checked-in static
content does not imply an `output: "export"` deployment.

The Index uses a fixed dark theme with its tokens and styles scoped under
`.influence-index` in `(index)/influence.css`. Shared Tailwind setup and document
fallback colors live in `src/app/globals.css`. No light/dark toggle is provided.
