# AGENTS.md

The Influence Index is a static editorial field guide to people who
shaped industries, institutions, and culture. It uses Next.js App Router, React,
TypeScript, and Tailwind. Content and portraits live in the repository; there is
no database or external content service. The former one-pager/PDF Library has
been removed. Do not restore its routes, assets, or dependencies.

## Documentation Map

- [Architecture](docs/system/ARCHITECTURE.md) — routing, data ownership, and rendering boundaries.
- [Features](docs/system/FEATURES.md) — reader capabilities and semantic limits.
- [Operations](docs/system/OPERATIONS.md) — setup, content editing, checks, and deployment.
- [Roadmap](docs/project/ROADMAP.md) — selected direction; [Backlog](docs/project/BACKLOG.md) — unresolved candidates.
- [Contributing](CONTRIBUTING.md) — contribution and review expectations; [Git policy](docs/project/GIT_HISTORY_POLICY.md) — merge and branch policy.

## Setup And Checks

Use Node.js 24 and the pnpm version in `package.json`. Install with
`pnpm install --frozen-lockfile`; use `pnpm dev` for local development.

Before pushing, run `pnpm test` (lint, unit tests, dead-code check) and
`pnpm build`. For UI/routing work, run `pnpm test:browser` and the relevant manual
checks in [Operations](docs/system/OPERATIONS.md#application-browser-verification).
`pnpm test:browser-runtime` verifies only the Chrome guard and an isolated DOM
interaction. Push only when explicitly asked.

Use red/green TDD for substantial behavior changes. The red test must fail on the
behavior being fixed, not just a missing symbol. For smaller changes, run the
relevant existing checks.

## Source Entry Points

| Responsibility | Source |
| --- | --- |
| Profiles, fields, and field notes | `src/lib/influence/archive.ts`; schema in `types.ts` |
| Derived lookups, filters, and directory payload | `src/lib/influence/data.ts`; shared formatting in `format.ts` |
| Pages and scoped design styles | `src/app/(index)/` |
| Interactive directory, timeline, comparison, navigation | `src/components/influence/` |
| Root document, shared CSS, and metadata defaults | `src/app/layout.tsx`, `src/app/globals.css` |
| Application browser checks | `tests/`; see Operations for the entry point |

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

- **Plan and hand off work.** Use the accepted conversation or task as the
  contract when it gives enough detail. Save a design, spec, or plan when it
  helps people coordinate, agree on acceptance criteria, or sequence execution.
  For unfinished work changing agents, sessions, or devices, leave a concise
  handoff when the receiving context is incomplete. Commit audience-appropriate
  documents needed for shared execution and keep their status current.
  Before retiring execution docs, preserve lasting decisions and open work in
  maintained references and repair incoming links.
  Archive reviewed completed execution docs in the ignored `docs/archive/`.
- **Push back before building.** If a request is incoherent or self-contradictory, or a spec/plan is vague or skips key decisions, stop and interview me — ask clarifying questions and confirm intent before writing code or changing files. Don't guess at scope or comply silently. (Clear, well-scoped requests don't need this.)
- **Keep docs current.** Update the owning reference when a change makes its contract, boundary, procedure, or direction inaccurate. Routine internal changes need no ceremonial doc edit.
- **Commit logically.** Commit completed work in coherent chunks as you proceed. Push only when explicitly asked.
- **Log durable follow-ups in `BACKLOG.md`.** Capture consequential design gaps,
  tech debt, and better approaches in `docs/project/BACKLOG.md`; fix small or
  blocking issues inline. Keep entries future-only, with evidence and a next step
  or revisit trigger; date/source volatile claims or label hypotheses. The
  capability-owning repo holds cross-repo detail. Agents can work directly from
  entries; use issues for discussion or coordination with one detailed owner.
  Reconcile affected entries as work lands; update `ROADMAP.md` when selected
  direction changes, not as a shipment log.
- **Re-ground after compaction.** A compaction summary loses precise paths, context, and verification state — before continuing, re-read this project's `AGENTS.md`, its reference docs, and recent commits.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
