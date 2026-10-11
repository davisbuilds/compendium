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

## Branch Protection

Verified 2026-10-11 with
`gh api repos/davisbuilds/compendium/branches/main/protection`:
`main` requires these GitHub Actions checks before merge:

- `Lint, dead code, and build` (CI)
- `check` (Publication Hygiene)

Branches need not be up to date with `main`, no reviews are required, and admins
are not enforced. Required checks match job names, so rename a job and its entry
in the protection rule together. `Workflow Security Audit` is path-filtered and
deliberately not required: a required check that never runs blocks every merge.

## Recommended Ongoing Hygiene

1. Create short-lived feature branches from `main`.
2. Open PRs early; keep them focused.
3. Merge only with **Squash and merge** after quality checks pass.
4. Before local cleanup, refresh refs, inspect attached worktrees and branch history, then delete only an individually verified, disposable branch. Preserve concurrent work and unmerged changes.
