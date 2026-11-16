# Compendium

The Influence Index is a retro field guide to people who shaped industries,
institutions, and culture. Browse the 67 illustrated profiles, trace events on the
timeline, compare two people, or read the seven field notes. The original
one-pagers and PDF templates are available in the Compendium Library.

The app uses Next.js App Router, React, TypeScript, and Tailwind CSS. Its content
and portraits are checked in. No environment variables or external content
service are required.

## Quick start

Use Node.js 24 and the pnpm version declared in `package.json`.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`.

## Checks

```bash
pnpm test          # ESLint, unit tests, and dead-code check
pnpm build         # Production build
```

See [Operations](docs/system/OPERATIONS.md) for browser setup and content edits.
[Architecture](docs/system/ARCHITECTURE.md) maps the routes and source, and
[Contributing](CONTRIBUTING.md) describes review and delivery.

The portraits are generated editorial illustrations. Each biographical profile
links to its sources, including the material used for its quote and fun fact.
