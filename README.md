# The Influence Index

A retro field guide to people who shaped industries, institutions, and culture.
Browse illustrated profiles, explore career milestones, compare two people, and
read field notes connecting their ideas.

Built with Next.js App Router, React, TypeScript, and Tailwind CSS. Content and
portraits are checked in. No environment variables, database, or external content
service are required.

## Quick Start

Use Node.js 24 and the pnpm version declared in `package.json`.

```bash
git clone https://github.com/davisbuilds/influence-index.git
cd influence-index
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`.

## Checks

```bash
pnpm test                 # Lint, comment ratchet, unit tests, and dead-code check
pnpm build                # Production build
pnpm test:browser         # Production-build application journeys in Chrome
pnpm test:browser-runtime # Chrome guard and isolated DOM smoke test only
```

See [Operations](docs/system/OPERATIONS.md) for browser prerequisites, coverage,
manual checks, content editing, and deployment.

## Documentation

- [AGENTS.md](AGENTS.md) — coding-agent entry point and invariants.
- [Architecture](docs/system/ARCHITECTURE.md) — routes, data ownership, and rendering.
- [Features](docs/system/FEATURES.md) — reader capabilities and limits.
- [Roadmap](docs/project/ROADMAP.md) and [Backlog](docs/project/BACKLOG.md) — direction and unresolved work.
- [Contributing](CONTRIBUTING.md) — contribution, review, and delivery expectations.

The portraits are generated editorial illustrations; ancient portraits are
artistic reconstructions. Each biographical profile links to its sources,
including the material used for its quote and fun fact.
