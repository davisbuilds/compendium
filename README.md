# Compendium

Static Next.js site for curated one-pagers, templates, and advice from successful
entrepreneurs and technologists.

## Agent Setup

New here? Paste the prompt below into your coding agent (Claude Code, Codex, etc.) and it will install, verify, and tell you how to launch the site.

```text
Set up the `compendium` repo for me. It's a curated one-pager/template site built
with Next.js 16, React 19, Tailwind 4, and TypeScript. All content is static
(hardcoded in `src/lib/content.ts`) — there are no env vars or secrets.

Do this, in order:
1. Install deps with pnpm (not npm/yarn): `pnpm install` from the repo root. Clone
   https://github.com/davisbuilds/compendium.git and cd in first if needed.
2. Verify it builds: run `pnpm lint`, `pnpm test:dead-code`, then `pnpm build`.
   All should pass. If any fail, show me the error and stop.
3. Report back: confirm lint + dead-code + build passed, and give me the command to run it
   (`pnpm dev`, then open http://localhost:3000).

Don't commit anything.
```

Prefer to do it yourself? The manual steps are below.

## What It Does

- Presents curated founder/operator one-pagers and templates.
- Keeps content static in `src/lib/content.ts`.
- Uses a Next.js 16 / React 19 / Tailwind 4 frontend.
- Ships without runtime secrets or environment variables.
- Includes a dead-code check for the small static app surface.

## Quick Start

Requirements:

- Node.js compatible with Next.js 16
- pnpm

```bash
git clone https://github.com/davisbuilds/compendium.git
cd compendium
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Common Commands

```bash
pnpm dev             # Start local dev server
pnpm lint            # ESLint
pnpm test:dead-code  # Static dead-code check
pnpm build           # Production build
pnpm start           # Start production server after build
```

## Code Layout

```text
src/app/          Next.js App Router routes
src/components/   UI components
src/lib/          Static content and shared helpers
scripts/          Dead-code check
docs/             System, project, and plan docs
```

## Documentation

- Agent implementation guidance: [AGENTS.md](AGENTS.md)
- Architecture and code organization: [docs/system/ARCHITECTURE.md](docs/system/ARCHITECTURE.md)
- Feature reference: [docs/system/FEATURES.md](docs/system/FEATURES.md)
- Setup and operations: [docs/system/OPERATIONS.md](docs/system/OPERATIONS.md)
- Product roadmap snapshot: [docs/project/ROADMAP.md](docs/project/ROADMAP.md)
- Git history and branch policy: [docs/project/GIT_HISTORY_POLICY.md](docs/project/GIT_HISTORY_POLICY.md)
- Contributor workflow and PR expectations: [CONTRIBUTING.md](CONTRIBUTING.md)

## Current Boundaries

- Content is static and repo-authored.
- There are no runtime env vars or secrets.
- `pnpm lint`, `pnpm test:dead-code`, and `pnpm build` are the expected local gates.
