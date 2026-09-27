# AGENTS.md

Guidance for coding agents working in this repository.

Curated one-pagers, templates, and advice from entrepreneurs/technologists. Next.js 16 + React 19 + Tailwind 4 + TypeScript.

## Documentation Map

- `CONTRIBUTING.md` — contribution scope, review expectations, and delivery policy.
- `docs/system/ARCHITECTURE.md` — high-level flow, App Router structure, content data model, components, static-asset conventions, directory map.
- `docs/system/FEATURES.md` — persona/template/category pages, navigation, persona roster, dark mode.
- `docs/system/OPERATIONS.md` — local dev, commands, env vars, CI, adding content (persona/template/category), deployment.
- `docs/project/ROADMAP.md` — current direction and product scope.
- `docs/project/BACKLOG.md` — future-only durable follow-ups.
- `docs/project/GIT_HISTORY_POLICY.md` — merge strategy and branch hygiene.

## Commands

```bash
pnpm dev    # dev server on :3000
pnpm build  # production build
pnpm lint   # eslint
pnpm test:unit      # node:test suite (content/rendering/utils)
pnpm test:dead-code # static unreferenced export/file check
```

## Key Files Reference

| Purpose | Location |
| :----- | :----- |
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

- **Pre-push check**: Before pushing to the remote, run `pnpm lint`, `pnpm test:unit`, `pnpm test:dead-code`, and `pnpm build`.
- **TDD**: red/green for new features, major refactors, and large changes. The red step must fail for the behavior you're about to fix — a test that fails only because the symbol doesn't exist yet is a stub, not a red test; write the signature first, then a test that fails on the behavior. Skip the red step for code with no behavior to assert, and cover it after. For smaller edits, still run the relevant existing tests before wrapping up.
- **E2E**: `pnpm exec playwright test` for browser-based end-to-end UI testing.

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

## Working Agreement

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
