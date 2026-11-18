# AGENTS.md

The Influence Index is a static editorial field guide to people who shaped
industries, institutions, and culture, built with Next.js App Router, React,
TypeScript, and Tailwind. Content and portraits live in the repository; there is
no database or external content service. The former one-pager/PDF Library has
been removed. Do not restore its routes, assets, or dependencies.

## Documentation Map

- [Architecture](docs/system/ARCHITECTURE.md) — routing, data ownership, rendering boundaries, and where each concern lives in `src/`.
- [Features](docs/system/FEATURES.md) — reader capabilities and semantic limits.
- [Operations](docs/system/OPERATIONS.md) — setup, content editing, checks, browser verification, and deployment.
- [Roadmap](docs/project/ROADMAP.md) — selected direction; [Backlog](docs/project/BACKLOG.md) — unresolved candidates.
- [Contributing](CONTRIBUTING.md) — contribution and review expectations; [Git policy](docs/project/GIT_HISTORY_POLICY.md) — merge settings, required checks, and branch hygiene.

## Verification

Use Node.js 24 and `pnpm install --frozen-lockfile`. The gate, matching CI, is
`pnpm test` (lint, unit tests, dead-code check) and `pnpm build`. For UI or
routing work, also run `pnpm test:browser` and the relevant manual checks in
[Operations](docs/system/OPERATIONS.md#application-browser-verification).
`pnpm test:browser-runtime` verifies only the Chrome guard and an isolated DOM
interaction, not the application.

## Boundaries To Preserve

- `(index)` is a route group, not part of the URL. The homepage is `/`; profiles
  use `/people/[slug]`. The former `/library`, `/persona/*`, `/category/*`, and
  `/template/*` URLs and their assets intentionally return 404.
- Profile and field-note routes are generated from archive slugs. Keep IDs/slugs
  unique, milestone years finite, field IDs valid, and field-note profile
  references resolvable. Slug changes also affect featured/default comparisons,
  shared URLs, and portrait paths; search all consumers before changing them.
- Portraits are square `public/content/influence/<slug>.webp` files. Match filename
  case exactly. Keep the Index mark in `public/content/influence/index-mark.svg`
  and its app-icon copy at `src/app/icon.svg` consistent.
- Keep the full editorial archive on the server. Directory/timeline/compare controls
  receive their required projections. Comparisons use `left` and `right` slug
  query parameters and must survive a reload or shared link.
- Content edits require a rebuild. Preserve sources for quotes, ideas, and fun
  facts, and disclose generated portraits and historical reconstructions.
  Structural tests do not establish factual accuracy or publication rights;
  follow [Operations](docs/system/OPERATIONS.md#adding-content).
- The Index has one dark theme. Keep its design tokens and CSS scoped under
  `.influence-index`; root defaults also cover framework not-found pages. There
  is no theme toggle.

## Working Agreement

- **Clarify before building** when a request is vague, contradictory, or skips a
  key decision; clear, well-scoped requests need no interview.
- **Fix small issues now; backlog the rest.** Fix simple, quick, or blocking
  issues in this repo as part of the current change and call them out. Record in
  `docs/project/BACKLOG.md` only what can't be finished now or needs the
  maintainer's decision; don't open a branch or PR just for a backlog entry.
  Keep entries future-only, with evidence and a next step or revisit trigger,
  and update `ROADMAP.md` when selected direction changes, not as a shipment log.
- **Keep docs current** when a change makes a documented contract, boundary,
  procedure, or direction stale.
- **Plan and hand off work.** Reuse clear task context. Save planning docs when
  decisions, acceptance, or coordination need persistence. Leave a brief
  handoff only when needed to resume unfinished work. Commit shared docs and
  keep status current. Before archiving reviewed, completed docs in ignored
  `docs/archive/`, preserve lasting decisions and open work in maintained docs
  and repair links.
- **Commit and push.** Commit coherent chunks, staging by explicit path. Push
  your task branch and open a PR once the work is complete and the local gate
  passes; don't push directly to `main`.
- **Merge** only under the standing merge authority in the maintainer's
  workspace instructions, or when the maintainer asks. Without those
  instructions in context, leave the PR for the maintainer.
- **Re-ground after compaction** in source, this file, the owning docs, and
  recent commits. A summary and your own earlier proposals are not user approval.

## Git

Squash-merge only; merged branches are deleted. `main` requires the
`Lint, dead code, and build` and `check` jobs; the
[Git policy](docs/project/GIT_HISTORY_POLICY.md) owns the details. Vercel's Git
integration builds a preview for every PR and deploys each `main` commit, so
**merging deploys production**: a successful Vercel preview deployment of the
PR head is required before merging.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
