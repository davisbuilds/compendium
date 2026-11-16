# Architecture

Compendium uses one Next.js App Router application with two route groups. Both
use the root document layout. The Influence Index has its own masthead and
scoped stylesheet. The original Library pages share the existing sidebar.

| URL | Route group | Content |
| --- | --- | --- |
| `/` | `(index)` | Featured comparison and searchable directory |
| `/people/[slug]` | `(index)` | Profile, sources, milestones, and related links |
| `/themes`, `/themes/[slug]` | `(index)` | Field notes and their linked profiles |
| `/timeline` | `(index)` | Milestone browser |
| `/compare?left=…&right=…` | `(index)` | Two profiles selected by slug |
| `/about` | `(index)` | Editorial and illustration notes |
| `/library` | `(library)` | Original Compendium landing page |
| `/persona/[slug]` | `(library)` | One-pagers in the existing image viewer |
| `/category/[category]` | `(library)` | Original category browse pages |
| `/template/[slug]` | `(library)` | Downloadable PDFs in the existing viewer |

The archive lives in `src/lib/influence/archive.ts` and is checked against the
schema in `src/lib/influence/types.ts`. The repository serves pixel portraits
directly from `public/content/influence/<slug>.webp`. The build prerenders known
profile and field-note routes. Directory, timeline, and comparison controls use
TypeScript Client Components. The compare page renders the selected pair on the
server from its URL query. Neither surface needs a database or a CMS.

Library data stays in `src/lib/content.ts` with persona slides and avatars in
`public/content/personas/<slug>/` and PDFs in `public/content/templates/`.
A matching one-pager slug links to its profile and vice versa.
