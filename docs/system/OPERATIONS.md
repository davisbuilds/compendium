# Operations

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Useful Commands

```bash
pnpm dev            # Dev server
pnpm build          # Production build
pnpm start          # Start production server
pnpm lint           # ESLint
pnpm test:dead-code # Static unreferenced export/file check
```

## Environment Variables

No environment variables are required. The app runs entirely with static content.

## CI

Workflow: `.github/workflows/ci.yml`

Triggers:

- Pull requests to `main`
- Pushes to `main`

Required checks:

- `pnpm lint`
- `pnpm test:dead-code`
- `pnpm build`

CI uses Node.js 24 and `pnpm install --frozen-lockfile`.

## Adding Content

### New persona

1. Create directory: `public/content/personas/<slug>/`.
2. Add `avatar.png` and content images.
3. Ensure filenames match `src/lib/content.ts` exactly, including case.
4. Add persona entry to the `personas` array in `src/lib/content.ts`.
5. Assign appropriate categories from: `productivity`, `success`, `startups`, `fundraising`, `hiring`, `career`, `life-advice`, `communication`.
6. Run `pnpm build` to catch missing static assets and route-generation errors.

### New template

1. Add PDF to `public/content/templates/`.
2. Add template entry to the `templates` array in `src/lib/content.ts`.
3. Keep `template.filename` ending in `.pdf`; route slugs are derived from the filename.
4. Run `pnpm build`.

### New category

1. Add category to the `Category` type union in `src/lib/content.ts`.
2. Add display name and color scheme to the `categories` object.

## Deployment

- Target platform: Vercel (zero-config with Next.js).
- No environment variables needed for deployment.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Persona page 404s | Confirm `slug` in `src/lib/content.ts` matches the route URL. |
| Image or avatar missing | Confirm file exists under `public/content/personas/<slug>/` and case matches exactly. |
| Template page 404s | Confirm `template.filename` ends in `.pdf` and exists under `public/content/templates/`. |
| Dead-code check fails | Remove the unused export/file, add a real reference, or add a documented exception in `scripts/dead-code-check.mjs`. |
| Build fails during static generation | Check `src/lib/content.ts` for invalid category ids, missing assets, or unsupported `ContentItem.type`. |

## Browser runtime

Chromium projects use installed Google Chrome with a separate temporary Playwright
profile. Install Chrome before browser tests; run `pnpm test:browser-runtime` to
check the version guard. The suite's global setup rejects Chrome older than
156.0.8078.79 (CVE-2026-76024) before loading test pages. Playwright 1.64.1's bundled
Chromium 156.0.8078.4 does not meet this floor. Project names and snapshot paths
remain `chromium`.

`PLAYWRIGHT_CHROME_EXECUTABLE_PATH` can select an explicitly provisioned Chrome
for Testing executable; its actual reported version must pass the same guard.
There is no fallback to bundled Chromium. macOS uses its installed Chrome and
Chromium sandbox. No browser CI is configured in this repository; install and update Chrome on
the machine running the suite.
Revisit the temporary browser choice when a stable Playwright browser manifest
includes the fix; qualify that browser through the consumer tests before changing
back. This version floor addresses the named CVE, not all future browser advisories.
