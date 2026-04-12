# CANVAS Think Tank

A recurring 4-phase cycle that stress-tests CANVAS against real credit union processes and feeds structural breakages back as framework improvements. One process, one baseline, one stressed run, one set of diffs.

---

## Quick Links

| Artifact | Path | Purpose |
|----------|------|---------|
| **Methodology** | [`methodology.md`](methodology.md) | Principles, cadence, ownership, anti-patterns |
| **Stress Catalog** | [`stress-catalog.md`](stress-catalog.md) | 12 parameterized disruptions with pressure-point cross-reference |
| **Cycle Ledger** | [`ledger.md`](ledger.md) | Rotation tracker and historical index |
| **Runbook** | [`../runbooks/scenario-think-tank-cycle.md`](../runbooks/scenario-think-tank-cycle.md) | Executable activation prompt and phase-by-phase protocol |

### Agents (in `/agents/` — simulator requirement)

| Agent | Path | Role |
|-------|------|------|
| Think Tank Facilitator | [`../../agents/cu-think-tank-facilitator.md`](../../agents/cu-think-tank-facilitator.md) | Runs cycles, enforces discipline, produces reports, files dispositions |
| Framework Architect | [`../../agents/cu-framework-architect.md`](../../agents/cu-framework-architect.md) | Turns breakages into structured Findings and before/after Delta diffs |
| Stress Designer | [`../../agents/cu-stress-designer.md`](../../agents/cu-stress-designer.md) | Selects stresses, parameterizes disruptions, pre-registers predictions |

### Completed Cycles

| Cycle | Target | Key Finding |
|-------|--------|-------------|
| [`cycle-0001`](cycles/cycle-0001-loan-origination.md) | Workflow B — Loan Origination | Single-point-of-failure Compliance Officer gates; Alternate Gate Agent convention added to step-matrix framework |

---

## The 4-Phase Cycle

```
Observe → Model (baseline) → Stress + Model (stressed) → Extract
   │                                                          │
   │          Finding → Delta → Disposition → File touched     │
   └──────────────────── next release ────────────────────────┘
```

1. **Observe** — Pick one workflow (A–Q), map decisions, handoffs, gates, exception paths
2. **Model** — Run agents in-character under baseline conditions; flag pre-existing gaps
3. **Stress** — Apply 1–2 catalog stresses with pre-registered predictions; re-run; capture breakages
4. **Extract** — Classify findings, draft before/after diffs, tag dispositions (merged / deferred / rejected)

Every cycle closes with at least one merged Delta or a named ROADMAP entry. See [`methodology.md`](methodology.md) for the full protocol.

---

## Relationship to ROADMAP Self-Improvement Protocol

Think Tank is the **scaffolding** — the cycle, artifact format, stress catalog, and disposition mechanism — within which the six ROADMAP Self-Improvement agents (Retrospective, Gap Analysis, Competitive Intel, Member Persona, Game Theory Evaluation, Roadmap Synthesis) will eventually operate. Think Tank does not replace any of them. See [`methodology.md`](methodology.md) for the boundary table.
