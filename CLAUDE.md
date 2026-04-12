# CLAUDE.md

**Read [`AGENTS.md`](AGENTS.md) first.** Every convention in AGENTS.md
applies to Claude Code. This file only adds Claude-Code-specific notes.

## GitHub MCP tools

This repo is reachable via the `mcp__github__*` MCP tool family.
Commonly useful tools for day-to-day work here:

- `mcp__github__list_branches`
- `mcp__github__list_commits`
- `mcp__github__list_pull_requests`
- `mcp__github__pull_request_read`
- `mcp__github__get_file_contents`
- `mcp__github__list_issues`

**Known limitation**: no branch-protection / ruleset API is exposed.
Any changes to the `master` ruleset, code-security settings, or
collaborator permissions must be done by the repo admin in the GitHub
UI. Do not try to "fix" protection gaps via MCP — offer instructions
and let the admin apply them.

The MCP server occasionally disconnects mid-session. When that
happens, re-load the specific tools you need via
`ToolSearch` with `select:<tool_name>,<tool_name>`.

## TodoWrite

Use `TodoWrite` for any task with three or more distinct steps. Mark
items complete immediately as each one finishes — do not batch.

## Parallel tool calls

Batch independent reads into a single message. Sequential calls are
only for genuine dependencies (one result feeds the next). Typical
parallelizable batch on this repo: `list_branches` +
`list_pull_requests` + `get_file_contents` for the same PR, all in one
message.

## Plan mode

For multi-file refactors, doc-generation tasks (like adding AGENTS.md
and this file), or anything that touches more than a handful of files,
default to plan mode so the user can review before execution. Single
trivial edits do not need plan mode.

## Branch naming

Use `claude/<short-kebab-description>[-<random-suffix>]`. Claude Code
auto-generates a short random suffix when spawning a new session
branch; keep it. Past branches on this repo: `claude/secure-github-repo-oYQCe`,
`claude/prepare-release-2-LG3Q9`, `claude/fix-repo-gotchas`,
`claude/add-agents-and-claude-md`.

## Commit HEREDOC pattern

Multi-line commit messages with the AI trailer must be passed via a
HEREDOC to preserve formatting and the trailing newline:

```bash
git commit -m "$(cat <<'EOF'
Short verb-phrase subject ≤72 chars

Body paragraph explaining why, wrapped at ~72 chars. Reference
concrete file paths and line numbers for bug fixes.

Co-authored-by: Claude <noreply@anthropic.com>
EOF
)"
```

Do not use `git commit -m "..."` with literal `\n` escapes — they
won't format correctly on GitHub.

## When uncertain

If AGENTS.md doesn't cover it and nothing similar exists in the tree,
ask the repository owner before inventing a convention. Consistency
with what's already in the repo is worth more than clever new
patterns.
