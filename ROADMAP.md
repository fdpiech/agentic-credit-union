# CANVAS Roadmap

Future work not yet shipped. For shipped changes, see [CHANGELOG.md](CHANGELOG.md).

## Self-Improvement Protocol — Agents that improve the system itself

A set of agents whose job is to analyze, critique, and evolve CANVAS itself across release cycles.

### Shipped: Think Tank Scaffolding

The **Think Tank** is the execution scaffolding within which the Self-Improvement agents below will operate. It provides the recurring 4-phase cycle (Observe → Model → Stress → Extract), the stress catalog, the delta disposition mechanism, and the cycle report format. Shipped in v2.1.0. See [`strategy/think-tank/README.md`](strategy/think-tank/README.md).

**Think Tank scaffolding agents (shipped v2.1.0):**
- **Think Tank Facilitator**: Runs cycles, enforces discipline, produces reports, files dispositions
- **Framework Architect**: Turns breakages into structured Findings and before/after Delta diffs
- **Stress Designer**: Selects stresses from the catalog, parameterizes disruptions, pre-registers predictions

**Think Tank analysis agents (shipped v2.2.0):**
- **Gap Analyst** (`cu-gap-analyst`): Compares Observe target against real-world CU operations and industry benchmarks → *Observe phase, produces Gap Report*
- **Think Tank Intel** (`cu-think-tank-intel`): Surfaces external forces (fintech, peer CU, regulatory) relevant to cycle targets → *Observe + Stress phases, produces Intel Brief. Distinct from the operational `cu-competitive-intelligence` agent*
- **Member Persona** (`cu-member-persona`): Creates and portrays realistic member profiles during Model runs → *Model phase, plays the member in-character with financially consistent profiles and ECOA-protected-class diversity*

### Remaining: Analysis Agents (Not Yet Shipped)

These agents will participate in Think Tank cycles when they ship (3 of original 6 remaining):

- **Retrospective Agent**: Analyzes past simulation runs and generates lessons learned after each release cycle → *will contribute to the Extract phase and cross-cycle pattern analysis*
- **Game Theory Evaluation Agent**: Models incentive structures, catches gaming/exploitation scenarios, validates cooperative alignment → *will contribute to the Stress phase with adversarial stress design*
- **Roadmap Synthesis Agent**: Aggregates insights from all analysis agents and generates prioritized enhancement proposals → *will contribute to deferred-item handling and cross-cycle prioritization*

### Protocol Flow

```
Competitive Intel → Gap Analysis → Roadmap Synthesis → Build → Retrospective → repeat
                          ↕
                    Think Tank Cycle
              (Observe → Model → Stress → Extract)
```

## Cross-Workflow Alternate Gate Audit

Review every Gate cell across all 17 workflow Step-Level Matrices (A–Q). For each Gate, either name an alternate Gate agent who holds the same authority lane, or document the step as a known single point of failure. Triggered by Think Tank cycle-0001 Finding F01 (Delta DD-0001-04).

**Acceptance criteria**: Every Gate cell across all 17 playbooks either names an alternate or documents SPOF status per the Alternate Gate Agent convention added to `strategy/step-matrix-framework.md` in DD-0001-01.

## Standing Reports — Decoupled Gap and Intel Cadence

Gap Analyst and Think Tank Intel have meaningfully different refresh rates from the full Think Tank cycle (one per release). External forces change monthly; industry benchmarks shift quarterly. Waiting for a full cycle to commission research wastes time and produces stale Observe phases.

**Proposal**: Both agents produce **standing reports** that exist as living documents, refreshed on their own cadence. When a Think Tank cycle kicks off, the Facilitator pulls the latest reports rather than commissioning them from scratch.

**Intel Brief cadence**: Monthly. External forces (fintech launches, regulatory signals, peer CU incidents) move too fast for per-release research. A standing monthly brief accumulates intelligence that any cycle can reference.

**Gap Report cadence**: Quarterly or per-release. Industry benchmarks (NCUA exam priorities, CUNA/NAFCU data, peer CU practices) shift on a slower cycle. Standing gap reports per workflow area, updated when new benchmarks publish.

**Artifact structure**: `strategy/think-tank/intel/` and `strategy/think-tank/gaps/` directories, with timestamped standing reports and a review/disposition log for each item.

**Benefits**: Continuous intelligence gathering between cycles; faster cycle startup (Observe phase already has context); historical record of how external forces and benchmark gaps evolved; option to trigger out-of-rotation cycles when intel surfaces something urgent.

**Acceptance criteria**: Directory structure, standing report templates, and a review/disposition schema for individual gap and intel items so that findings can be triaged, recommended, and tracked through to action — independently of whether a full Think Tank cycle runs.

---

## Known drift and editorial decisions

Items surfaced during the April 2026 overnight cleanup pass.
Resolved in `claude/resolve-drift-items` branch (April 2026).

| Item | Resolution |
|---|---|
| Functional-area taxonomy (10 vs 12) | Aligned EXECUTIVE-BRIEF.md to cu-strategy.md's 10 areas |
| Workflow name inconsistency (C, E, F) | Propagated engine long form across all docs and playbooks |
| H–K predefined scenarios missing | Added fraud-dispute, card-fraud-alert, ransomware-incident, structuring-alert |
| H–K workflow detail prose in simulator/README | Replaced footnote with full step-by-step walkthroughs |
| README.md runbook summary wording | Updated to cover all 10 runbook categories |

### Remaining (deferred)

**LLM client API-key format warning** — `simulator/canvas/llm.js:13`
warns on API keys not starting with `sk-`, which false-positives for
local-model setups via `OPENAI_BASE_URL`. Low impact (Anthropic keys
pass; only local-model users see the warning). Could be scoped to the
default `api.openai.com` base URL if it becomes a real friction point.
