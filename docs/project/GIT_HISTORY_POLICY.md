# Git History and Branch Hygiene

Last verified: September 27, 2026

## Repository Merge Settings

Observed via `gh api repos/davisbuilds/compendium` on 2026-09-27 (public repository). Re-query mutable settings before relying on them:

- `allow_squash_merge`: `true`
- `allow_merge_commit`: `false`
- `allow_rebase_merge`: `false`
- `delete_branch_on_merge`: `true`
- `squash_merge_commit_title`: `PR_TITLE`
- `squash_merge_commit_message`: `PR_BODY`

Result:

- PR branches can contain multiple commits.
- `main` receives one squashed commit per merged PR.
- Merged remote branches are auto-deleted.

## Merge Strategy

Squash-merge only. All other merge strategies are disabled at the repository level.

## CI Gates

Tracked `.github/workflows/ci.yml` runs on pull requests and main pushes. It checks:

- `pnpm lint`
- `pnpm test:unit`
- `pnpm test:dead-code`
- `pnpm build`

Check relevant UI changes in a real browser before delivery.

## Current Limitation

The older private-tier `403` observation no longer describes this public repository. Branch protection was not re-verified in this documentation pass; query GitHub before relying on server enforcement. Review and CI remain the intended merge policy.

## Recommended Ongoing Hygiene

1. Create short-lived feature branches from `main`.
2. Open PRs early; keep them focused.
3. Merge only with **Squash and merge** after quality checks pass.
4. Before local cleanup, refresh refs, inspect attached worktrees and branch history, then delete only an individually verified, disposable branch. Preserve concurrent work and unmerged changes.
