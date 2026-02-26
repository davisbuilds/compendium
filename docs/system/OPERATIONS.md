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
```

## Environment Variables

No environment variables are required. The app runs entirely with static content.

## CI

No CI pipeline. Quality gates are manual:

- `pnpm lint`
- `pnpm build`

## Adding Content

### New persona

1. Create directory: `public/content/personas/<slug>/`.
2. Add `avatar.png` and content images.
3. Add persona entry to the `personas` array in `src/lib/content.ts`.
4. Assign appropriate categories from: `productivity`, `success`, `startups`, `fundraising`, `hiring`, `career`, `life-advice`, `communication`.

### New template

1. Add PDF to `public/content/templates/`.
2. Add template entry to the `templates` array in `src/lib/content.ts`.

### New category

1. Add category to the `Category` type union in `src/lib/content.ts`.
2. Add display name and color scheme to the `categories` object.

## Deployment

- Target platform: Vercel (zero-config with Next.js).
- No environment variables needed for deployment.
