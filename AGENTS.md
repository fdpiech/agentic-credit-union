# AGENTS.md

> Conventions for any AI coding tool working on this repository.

## What this repo is

**CANVAS** (Credit Union Agent Network for Value, Advice, and Service) is
a coordinated multi-agent framework for credit union operations: 32
specialized agent definitions, 17 workflow playbooks, doctrinal strategy
documents, and a CLI simulator that orchestrates the agents through
workflows in mock or live LLM mode.

For the full project description, agent roster, workflow catalog, and
deployment modes see [`README.md`](README.md). This file does **not**
restate that material — it documents the conventions an automated
contributor needs to follow when modifying the repo.

## Who this file is for

You are an AI coding tool (Claude Code, Piechieclaw, or any other
agentic tool) making changes to this repository. Read this file **before**
you start. Everything here applies regardless of which tool you are.

Claude Code has an additional overlay at [`CLAUDE.md`](CLAUDE.md) with
Claude-specific tooling notes. All other tools read only this file.

## Authoritative sources

When a topic is covered in an existing document, go there instead of
re-deriving it:

| Topic | Source |
|---|---|
| Project description, agent list, workflow catalog, disclaimer | [`README.md`](README.md) |
| Installation and activation walkthrough | [`SETUP.md`](SETUP.md) |
| Simulator CLI, flags, modes, env vars, architecture | [`simulator/README.md`](simulator/README.md) |
| Vulnerability disclosure policy | [`SECURITY.md`](SECURITY.md) |
| Human contributor PR flow | [`CONTRIBUTING.md`](CONTRIBUTING.md) |
| 5-minute activation | [`strategy/QUICKSTART.md`](strategy/QUICKSTART.md) |
| Full operational doctrine (core vs. specialized workflow split, handoff rules, escalation) | [`strategy/cu-strategy.md`](strategy/cu-strategy.md) |

## Key facts to know up front

- **Default branch is `master`**, not `main`. Don't rename — the branch
  ruleset, SECURITY.md, and every doc reference `master`.
- **32 agents** live in `agents/cu-*.md`. **17 workflow playbooks** live
  in `strategy/playbooks/workflow-{a..q}-*.md`. The simulator engine in
  `simulator/canvas/workflow-engine.js` currently implements **11 of
  them** (A–K); the remaining six (L–Q) exist as playbooks only.
- Agent files are **YAML frontmatter + markdown body**. The loader at
  [`simulator/canvas/agent-loader.js`](simulator/canvas/agent-loader.js)
  is forgiving: malformed frontmatter produces a warning and a filename
  fallback, not a crash.
- The agent loader is **CWD-agnostic** — it resolves paths via
  `import.meta.dirname`. You can run `node simulator/simulator.js` from
  the repo root, from `simulator/`, or from anywhere else.
- **There is no test runner and no linter.** `npm test` in `simulator/`
  runs a single mock workflow as a smoke check. Don't claim "tests pass"
  — describe what you actually ran.
- **Only npm dependency is `yaml`** (in `simulator/package.json`). Don't
  add dependencies casually; each one expands supply-chain surface.

## Common commands

```bash
# Install simulator dependencies (required once per clone)
cd simulator && npm install

# Help and listings
node simulator.js --help
node simulator.js --list

# Run a workflow in mock mode (no API key needed)
node simulator.js --mock --workflow A

# Run live against an OpenAI-compatible API
OPENAI_API_KEY=sk-... node simulator.js --workflow A

# Mock smoke test across all implemented workflows
for w in A B C D E F G H I J K; do
  node simulator.js --mock --workflow $w 2>&1 | tail -12
done
```

If `OPENAI_API_KEY` is unset the simulator auto-falls back to mock mode
with a visible info line — running without a key will succeed, not error.

## Agent file conventions

Every file in `agents/` follows the same template. Canonical examples:
[`agents/cu-ceo.md`](agents/cu-ceo.md) and
[`agents/cu-loan-officer.md`](agents/cu-loan-officer.md).

**Frontmatter** (YAML, delimited by `---`):

```yaml
---
name: Chief Executive Officer
description: One-line role summary.
color: indigo
---
```

**Body** (markdown, emoji-headed H2 sections in roughly this order):

- `## 🧠 Your Identity & Memory`
- `## 🎯 Your Core Mission`
- `## 🚨 Critical Rules You Must Follow`
- `## 🏛️ Your Decision Authority`
- `## 📊 [Role]-Level Deliverables`
- `## 🔄 Your Workflow Process`
- `## 📋 Key [Topic] Reference`
- `## 💭 Your Communication Style`
- `## 🔄 Learning & Memory`
- `## 🎯 Your Success Metrics`
- `## 🚀 Advanced Capabilities`

Not every agent has every section; use the canonical examples above as
the model and match the section titles exactly where you can, so the
loader's section extraction keeps working.

[`CONTRIBUTING.md`](CONTRIBUTING.md) describes the human authoring
workflow for agent and strategy edits.

## Strategy document conventions

- **Playbooks** in `strategy/playbooks/workflow-{a..q}-*.md` follow a
  consistent shape: objective → pre-conditions → ordered agent
  activation sequence with fenced activation prompts → compliance and
  quality gates → timelines.
- **Runbooks** in `strategy/runbooks/scenario-*.md` describe
  situation-specific agent coordination patterns (cascade fan-out,
  parallel track with sealed handoff, etc.) with explicit compliance
  gates and escalation thresholds.
- Cross-references between strategy docs are required to stay accurate.
  If you move or rename a strategy file, grep for the old path before
  committing.

## Simulator code conventions (`simulator/`)

- **Module system**: ES modules (`"type": "module"` in `package.json`).
- **Indentation**: 2 spaces.
- **Naming**: `camelCase` for variables/functions, `UPPERCASE` for
  constants and exported maps (`WORKFLOWS`, `SCENARIOS`).
- **Comments**: minimal. Only where the logic isn't self-evident.
- **Error messages**: include enough context to act on — e.g.
  `` `Agent not found: ${id}. Available: ${Object.keys(agents).join(', ')}` ``.
- **Style reference**:
  [`simulator/canvas/agent-loader.js`](simulator/canvas/agent-loader.js)
  is a good canonical example of the project's idiom.

## Git workflow

The branch ruleset on `master` requires every change to go through a
pull request. Only the repository admin (`fdpiech`) can bypass the
ruleset to merge. Your PR will sit open until the admin merges it — do
not expect to self-approve.

**Branch naming**: `<tool-name>/<short-kebab-description>[-<random-suffix>]`.
Observed examples on this repo: `claude/secure-github-repo-oYQCe`,
`claude/fix-repo-gotchas`, `claude/add-agents-and-claude-md`,
`dependabot/github_actions/actions/checkout-6`. Use your tool's name as
the prefix (`claude/...`, `piechieclaw/...`, etc.).

**Commit message format**:
- Subject: verb-phrase imperative, ≤72 chars. No conventional-commit
  prefix (`feat:`, `fix:`, etc.) — the repo doesn't use them.
- Body: explain **why**, not **what**. Reference concrete file paths and
  line numbers when fixing bugs. Wrap at ~72 chars.
- **Trailer**: always include an AI authorship trailer for
  AI-generated commits, e.g.:
  ```
  Co-authored-by: Claude <noreply@anthropic.com>
  ```
  Substitute your tool's equivalent if you are not Claude.

**Do not**:
- Squash commits locally; let the GitHub PR UI handle the merge mode.
- `--force-push` a branch that has an open PR unless you own the PR and
  have a reason — force-pushes invalidate prior review state.
- Commit directly to `master` — the ruleset will block it anyway, but
  don't even try.

## Security posture

Full policy: [`SECURITY.md`](SECURITY.md). Key operational rules for
automated contributors:

- **Never commit secrets.** Push protection on this repo will block
  known provider tokens at the server, but you are the primary
  safeguard. The hardened `.gitignore` covers common env / key / cred
  patterns — don't add exceptions.
- **SHA-pin third-party GitHub Actions.** Floating tags (`@v2`,
  `@main`) are supply-chain risk. Dependabot is configured for the
  `github-actions` ecosystem and will propose updates automatically
  against SHA-pinned entries.
- **Don't add a custom CodeQL workflow.** CodeQL default setup is
  already enabled via the UI and a committed workflow file would
  conflict with it.
- **Don't rename `master` to `main`.** The ruleset, SECURITY.md,
  CHANGELOG history, and internal cross-references all depend on
  `master`. Renaming is out of scope and breaks things silently.

## When in doubt

If a convention isn't documented here, in one of the sources above, or
in a matching existing file in the tree, **ask the repository owner
before inventing one**. Consistency with what's already in the repo is
worth more than elegant new patterns.
