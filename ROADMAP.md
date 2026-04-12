# CANVAS Roadmap

Future work not yet shipped. For shipped changes, see [CHANGELOG.md](CHANGELOG.md).

## Self-Improvement Protocol — Agents that improve the system itself

A set of agents whose job is to analyze, critique, and evolve CANVAS itself across release cycles.

### Shipped: Think Tank Scaffolding

The **Think Tank** is the execution scaffolding within which the Self-Improvement agents below will operate. It provides the recurring 4-phase cycle (Observe → Model → Stress → Extract), the stress catalog, the delta disposition mechanism, and the cycle report format. Shipped in v2.1.0. See [`strategy/think-tank/README.md`](strategy/think-tank/README.md).

**Think Tank agents (shipped):**
- **Think Tank Facilitator**: Runs cycles, enforces discipline, produces reports, files dispositions
- **Framework Architect**: Turns breakages into structured Findings and before/after Delta diffs
- **Stress Designer**: Selects stresses from the catalog, parameterizes disruptions, pre-registers predictions

These three agents are scaffolding — they do NOT replace the six analysis agents below. When those agents ship, they will run *inside* Think Tank cycles.

### Remaining: Analysis Agents (Not Yet Shipped)

These agents will participate in Think Tank cycles when they ship:

- **Retrospective Agent**: Analyzes past simulation runs and generates lessons learned after each release cycle → *will contribute to the Extract phase and cross-cycle pattern analysis*
- **Gap Analysis Agent**: Compares simulation capabilities against real-world CU operations and industry benchmarks → *will contribute to the Observe phase*
- **Competitive Intel Agent**: Monitors fintech/CU industry, scrapes conferences and community sources, surfaces emerging patterns *(note: `cu-competitive-intelligence` already ships as a CU operational agent; this ROADMAP item is for a meta-function that feeds Think Tank cycles)*
- **Member Persona Agent**: Synthesizes synthetic member profiles and tests features against realistic journeys → *will contribute to the Model phase with in-character member interactions*
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
