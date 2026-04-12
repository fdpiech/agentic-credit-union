# CANVAS Roadmap

Future work not yet shipped. For shipped changes, see [CHANGELOG.md](CHANGELOG.md).

## Self-Improvement Protocol — Agents that improve the system itself

A set of agents whose job is to analyze, critique, and evolve CANVAS itself across release cycles.

- **Retrospective Agent**: Analyzes past simulation runs and generates lessons learned after each release cycle
- **Gap Analysis Agent**: Compares simulation capabilities against real-world CU operations and industry benchmarks
- **Competitive Intel Agent**: Monitors fintech/CU industry, scrapes conferences and community sources, surfaces emerging patterns
- **Member Persona Agent**: Synthesizes synthetic member profiles and tests features against realistic journeys
- **Game Theory Evaluation Agent**: Models incentive structures, catches gaming/exploitation scenarios, validates cooperative alignment
- **Roadmap Synthesis Agent**: Aggregates insights from all analysis agents and generates prioritized enhancement proposals

### Protocol Flow

```
Competitive Intel → Gap Analysis → Roadmap Synthesis → Build → Retrospective → repeat
```

---

## Known drift and editorial decisions

Items surfaced during the April 2026 overnight cleanup pass. None are
bugs — each requires a human editorial judgment before implementation.

### Functional-area taxonomy disagreement between strategy docs

- `strategy/cu-strategy.md` §1.3 groups the 32 agents into **10**
  functional areas (Executive, Lending, Member Services, Operations,
  Risk & Compliance, Collections, Branch, Marketing & Strategy, Audit,
  Technology).
- `strategy/EXECUTIVE-BRIEF.md` §1 groups them into **12** functional
  areas (lending, member services, deposits, BSA/AML, compliance,
  collections, finance, marketing, technology, human resources, branch
  operations, internal audit).

Both taxonomies cover the same 32 agents but partition them
differently — one has a combined "Risk & Compliance" bucket, the
other splits it into BSA/AML + compliance; one has "Technology", the
other keeps it but also has "finance" and "human resources" as
separate areas (which don't appear in cu-strategy.md at all).
Decision needed: which taxonomy is canonical, and which doc should
conform to the other?

### Workflow name inconsistency across three sources of truth

Three places in the repo name the same workflows differently:

| Workflow | `simulator/canvas/workflow-engine.js` (engine) | `strategy/playbooks/workflow-*.md` (playbook titles) | `SETUP.md` / `README.md` headings |
|---|---|---|---|
| C | `Mortgage Processing (TRID)` | `Mortgage Processing` | `Mortgage Processing` / `Mortgage Processing (TRID)` |
| E | `Deposit Operations & BSA/AML` | `Deposit Operations` | `Deposit Operations` / `Deposit Operations & BSA/AML` |
| F | `Compliance & NCUA Examination` | `Compliance & Examination` | `Compliance & Examination` / `Compliance & NCUA Exam` |

`simulator/README.md` was aligned to the engine in the overnight
cleanup, but the higher-level docs still mirror the playbook titles.
Decision needed: pick one canonical naming and propagate it across
all sources. If engine is canonical, update playbook titles and
headings; if playbooks are canonical, update the engine's
`WORKFLOWS[id].name` strings.

### Predefined scenarios missing for workflows H–K

`simulator/simulator.js` defines 9 predefined scenarios (`--list` to
see them), all for workflows A–G plus two failure-path variants for
B and C. Workflows H (fraud), I (card services), J (IT security),
and K (BSA/AML) can only be exercised with the generic test-member
stub via `node simulator.js --workflow K`. Adding realistic scenarios
for each — e.g. a specific fraud case for H, a specific SAR-worthy
alert for K — would make the simulator usable for H–K without
requiring the user to supply their own context.

### Workflow Details prose for H–K in simulator/README.md

Round 1 added a footnote pointing readers at `strategy/playbooks/` for
H–K step-by-step walkthroughs, but `simulator/README.md` itself still
only has Workflow Details subsections for A–G. Writing the ~5-step
prose walkthroughs for H, I, J, K would bring the README to parity
with the actual simulator coverage. ~40–60 lines per workflow.

### LLM client API-key format warning is OpenAI-specific

`simulator/canvas/llm.js:13` warns if an API key doesn't start with
`sk-`:

```js
if (this.apiKey && !this.apiKey.startsWith('sk-')) {
  console.warn('[LLMClient] Warning: API key does not start with "sk-" — verify it is correct.');
}
```

But the same file supports alternative providers via `OPENAI_BASE_URL`
(Anthropic, local models, etc.), and some local models or proxies use
tokens that don't start with `sk-`. The warning is a false positive
for those users. Anthropic keys still pass (`sk-ant-...`), so the
practical impact is limited to local-model setups. Could be silenced
or scoped to the default `api.openai.com` base URL.

### README.md scenario-runbook summary wording

`README.md:13` describes the scenario runbooks as:

> Scenario runbooks for exam preparation, new product launches, mergers, and crisis response

That covers the original 4 runbooks but not the 6 added in v1.7.0
(fed rate, natural disaster, liquidity crisis, vendor due diligence,
vendor onboarding, internal fraud). The directory tree below it was
updated in the overnight cleanup, but this one-line summary still
reflects the v1.0 set. Rewording decision needed.
