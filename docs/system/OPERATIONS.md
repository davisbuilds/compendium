# Operations

## Local Development

Use Node.js 24 and the pnpm version declared in `package.json`.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`. No application environment variables, secrets,
database, or external content service are required.

## Verification

```bash
pnpm test           # Lint, comment ratchet, node:test unit tests, and dead-code check
pnpm build          # Type checking and production route generation
pnpm test:browser   # Build and run application journeys in installed Chrome
```

Lint, the comment ratchet, unit tests, dead-code checks, and build are the
pre-push gates. Run browser checks for UI/routing changes. CI runs the five
non-browser checks separately on pull requests to `main` and pushes to `main`;
`.github/workflows/ci.yml` owns its toolchain pins and behavior. Publication
hygiene and workflow security have their own workflows.
[Git policy](../project/GIT_HISTORY_POLICY.md) distinguishes CI execution from the
last observed branch-protection settings.

Unit tests check archive identity, assets, fields, finite milestone years, source
URL structure, field-note references, and key rendered links/not-found behavior.
They do not fact-check the writing or exercise browser interactions.

### Application Browser Verification

`pnpm test:browser` builds the app, then runs
`scripts/app-browser.config.ts` against a server it owns on port 3018. The suite
uses the installed-Chrome guard below, waits for readiness, and shuts down its
server. An existing process on that port causes failure rather than reuse.
To inspect a separately started or deployed build, set `PLAYWRIGHT_APP_BASE_URL`
and invoke `pnpm exec playwright test --config scripts/app-browser.config.ts`;
that mode does not build, start, or stop the target. Establish which revision is
served before interpreting results.

`tests/influence.spec.ts` covers:

- Search, field filtering, empty results, recovery, and sorting.
- Navigation and profile sources/comparison links without retired Library links.
- Comparison selections surviving URL changes/reload and invalid-input defaults.
- Field-note links and timeline filters.
- Narrow mobile layouts without horizontal overflow.
- Retired Library routes/assets returning 404, with live Index page/portrait
  positive controls.

Playwright retains failure traces/screenshots in `test-results/` and an HTML
report in `playwright-report/`. Use `pnpm exec playwright show-report` to inspect
it. These generated directories are ignored by Git and lint. The browser-runtime
smoke command is a separate prerequisite check, not app coverage.

For presentation changes, also inspect screenshots at desktop and mobile widths.
Check focus visibility and the skip link, portrait loading, source-link context,
approximate/BCE dates, and readability of long profile/comparison content. The
suite samples these flows; it is not a full accessibility or editorial audit.

## Adding Content

1. Edit `src/lib/influence/archive.ts`, following `types.ts`. Use unique profile
   IDs/slugs, a valid field ID, and at least one finite, dated milestone. Use
   negative years for BCE and `approx` for approximate dates. Keep milestones
   chronologically ordered; profile pages preserve their input order.
2. Add a square portrait at `public/content/influence/<slug>.webp`. Record how
   illustrations were produced and confirm publication rights for any reference
   material. Preserve the generated-illustration disclosure in About and any
   profile-specific reconstruction note.
3. Supply profile sources, idea sources, quote URL/context, and fun-fact source.
   Check that the material supports each claim and attribution, including a
   translator where applicable. A source-shaped URL or green integrity test is
   not an editorial check.
4. Field notes refer to existing profile slugs. For slug changes, search notes,
   featured pairings, comparison defaults, links, and portrait paths together.
5. Run the checks above, then inspect the affected profile, directory, timeline,
   field note, and comparison in the browser.

Content changes require a rebuild. A build alone does not prove an asset exists;
unit tests check registered portraits and browser checks exercise their consumers.
The original Library content, asset directories, helper scripts, and viewer
packages are removed. Add new material through the Influence archive workflow.

## Deployment

Build and run as a standard Next.js app (`pnpm build`, then `pnpm start`), or use
the Next.js integration on Vercel. No application secrets are needed. Query-based
comparisons render on the server; preserve a Next.js runtime rather than using a
static-export deployment. Verify the deployed directory, profile, field note,
timeline, and comparison before claiming it is healthy.

### Vercel

The Vercel project is `influence-index` in the `davisbuilds-projects` team. It uses
Next.js and Node.js 24.x, with framework-default build/install commands and the
pnpm version pinned by `package.json`. No application secrets are required.

Vercel's Git integration is connected: it builds a preview deployment for every
pull request and deploys each commit on `main` to production. Merging a PR is
therefore a production deploy; confirm the PR head's preview deployment
succeeded before merging. Use the CLI below only for a deploy outside that flow.

From a clean checkout at the intended commit:

```bash
vc link --yes --project influence-index --scope davisbuilds-projects
vc deploy --dry --json
vc deploy --prod --yes --scope davisbuilds-projects
```

Review the dry-run file manifest before uploading. `.vercelignore` excludes local
browser reports and other verification output; CLI deployments do not inherit
all Git ignore rules. The CLI-created `.vercel/` project link and local environment
files stay untracked. See [Vercel's file-exclusion reference](https://vercel.com/docs/deployments/vercel-ignore).

After deployment, inspect its production aliases and source commit with `vc inspect`.
Run the application browser suite against the public production alias:

```bash
PLAYWRIGHT_APP_BASE_URL=https://REPLACE_WITH_PRODUCTION_HOST pnpm exec playwright test --config scripts/app-browser.config.ts
```

Use the actual alias reported by Vercel; a ready build is not proof that the
public URL or server-rendered comparison route works.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Profile or field note 404s | Archive slug, static params, and deployed build freshness. |
| Portrait missing | Exact archive slug, filename case, and `public/content/influence/`. |
| Compare selection differs on reload | `left`/`right` query values, valid slugs, and server-rendered defaults. |
| Browser server startup fails | Port 3018 must be free; stop only a process you own or use an explicit target. |
| Browser cannot launch | Installed Chrome, version guard, and optional executable override below. |
| Comment ratchet fails | Delete the new comment, or start it with `WHY:` when it records a non-obvious decision. After deleting comments, run `python3 scripts/check_comments.py --update`. |
| Dead-code check fails | Remove unused code, add a real consumer, or document a necessary exception in `scripts/dead-code-check.mjs`. |
| Old persona/template URL 404s | Expected: those routes and their content have been retired. |

## Browser Runtime

Chromium projects use installed Google Chrome with a separate temporary Playwright
profile. Install Chrome before browser checks. `pnpm test:browser-runtime` tests
the version guard and an isolated DOM interaction; it does not load the app.

`scripts/browser-runtime.cjs` owns the minimum Chrome version for CVE-2026-76024.
The bundled Chromium in the locked Playwright version is below that floor, so
there is no fallback to it. `PLAYWRIGHT_CHROME_EXECUTABLE_PATH` can select a
provisioned Chrome for Testing executable; its reported version must pass the
same guard. macOS uses Chrome's sandbox. No browser CI is configured; install and
update Chrome on the machine running the suite.

Revisit this temporary choice when a stable Playwright browser manifest includes
the fix; qualify it through consumer checks before changing back. This floor
addresses the named CVE, not all future browser advisories.
