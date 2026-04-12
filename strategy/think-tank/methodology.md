# CANVAS Think Tank Methodology

> A recurring 4-phase cycle for stressing CANVAS against real credit union processes and turning breakage into structural framework improvements. This is the *scaffolding* within which the ROADMAP Self-Improvement Protocol will eventually operate.

---

## Purpose

CANVAS ships 32 agents, 17 workflow playbooks, 10 scenario runbooks, and a two-dimensional governance matrix (Mode × Authority). It has no systematic way to improve *itself*. Retrospectives on simulator runs tend to produce narrative lessons that are hard to merge. Ad-hoc fixes accumulate without a trail from "something broke" to "this file changed." The Think Tank closes that loop.

Each cycle is anchored to one real credit union process, run with agents in character, stressed with parameterized disruptions from the catalog, and closed with structured framework deltas that land in the same files the simulator reads.

The intended outcome: **every release cycle produces at least one auditable trail of Finding → Delta → Disposition → File touched.** CANVAS becomes a framework that measurably fixes its own gaps on a ship cadence.

---

## Relationship to ROADMAP Self-Improvement Protocol

The [ROADMAP](../../ROADMAP.md) describes a Self-Improvement Protocol with six agents: Retrospective, Gap Analysis, Competitive Intel (already shipped as `cu-competitive-intelligence`), Member Persona, Game Theory Evaluation, and Roadmap Synthesis.

**Think Tank does not replace any of them.** Think Tank is the scaffolding — the cycle, the artifact format, the stress catalog, the disposition mechanism — within which those six agents will eventually operate.

| Think Tank role | ROADMAP agent | Relationship |
|---|---|---|
| Think Tank Facilitator | (none) | Runs cycles; no overlap with any ROADMAP agent |
| Framework Architect | Roadmap Synthesis | Architect drafts structural deltas *within* a cycle; Roadmap Synthesis will aggregate across cycles when it ships |
| Stress Designer | Game Theory Evaluation | Stress Designer parameterizes disruptions from the catalog; Game Theory Evaluation will model incentive-driven adversarial stresses when it ships |
| Gap Analyst | Gap Analysis | **Shipped.** Contributes to the Observe phase — compares CANVAS workflow structure against industry benchmarks and regulatory expectations |
| Think Tank Intel | Competitive Intel | **Shipped.** Surfaces external forces (fintech, peer CU, regulatory) that inform stress selection and Observe context. Distinct from the operational `cu-competitive-intelligence` agent |
| Member Persona | Member Persona | **Shipped.** Contributes to the Model phase — plays the member role in-character during baseline and stressed runs with realistic financial profiles |
| (not yet shipped) | Retrospective | Will contribute to Extract phase and cross-cycle pattern analysis |
| (not yet shipped) | Roadmap Synthesis | Will aggregate across cycles and handle deferred-item prioritization |
| (not yet shipped) | Game Theory Evaluation | Will model incentive-driven adversarial stresses in the Stress phase |

When the remaining ROADMAP agents land, they run *inside* Think Tank cycles. The Think Tank infrastructure is designed to host them, not replace them.

---

## The Four Phases

### 1. Observe

Pick one real CU process end-to-end. Map every decision, handoff, system interaction, and exception path. Use an existing workflow playbook (A–Q) as the target. Cite the simulator run(s) or framework version (git SHA) that the cycle is anchored to.

After the Facilitator maps the process, the **Gap Analyst** compares the workflow's structure against industry benchmarks and regulatory expectations (producing a Gap Report), and **Think Tank Intel** surfaces external forces relevant to the target (producing an Intel Brief). Both feed into the Observe section of the cycle report.

**Output**: Process map + Gap Report + Intel Brief + baseline metrics + list of known exception paths.

### 2. Model — Baseline Run

Run the chosen workflow with agents **in character** — not reading their cards back, but responding to the scenario with their own authority lanes, priorities, and constraints. The **Member Persona** agent plays the member role, responding in-character at interaction steps with a realistic, financially consistent profile. This produces a clean baseline so that later breakage can be attributed to the stress, not to pre-existing gaps.

**Critical discipline**: if the baseline run itself breaks, that is a pre-existing gap and must be flagged separately before the stress phase begins. The Facilitator must not let a broken baseline be attributed to the stress.

**Output**: Deliverables from each agent activation + Member Profile Card + list of any baseline-exposed gaps.

### 3. Stress Application + Model — Stressed Run

The Stress Designer picks 1–2 stresses from the [stress catalog](stress-catalog.md) and **pre-registers predicted pressure points** before the stressed run begins. The workflow then re-runs with the stress applied. Breakages are categorized as *predicted* (the Stress Designer called it in advance) or *surprise* (the Stress Designer did not).

Surprise breakages are the most interesting output of the cycle — they are the places where CANVAS's governance model didn't see what was coming.

**Compound-stress discipline**: no more than two stresses in a single cycle without explicit Facilitator approval and rationale. Stacking stresses obscures root cause and is a named anti-pattern.

**Output**: Stressed run deliverables + breakage list (step, agent, authority lane, predicted vs. surprise).

### 4. Extract

The Framework Architect turns each breakage into a structured **Finding** with a root-cause classification, then proposes a **Delta** that cites a specific file and section. Every Finding → Delta is tagged for **Disposition**: `merged`, `deferred-to-roadmap`, or `rejected-with-rationale`.

**Closing discipline**: a cycle closes with a merged delta OR a named ROADMAP item with acceptance criteria. Narrative closures ("we learned a lot") are not acceptable. If a cycle cannot produce either, the Facilitator closes it with a `timebox-exceeded` flag and files a methodology retrospective.

**Output**: Cycle report (see `cycles/cycle-0001-loan-origination.md` for the canonical format).

---

## Core Principles

1. **Anchored to one real process per cycle.** No abstract cycles. No "let's think about CANVAS generally." Every cycle names an Observe target from workflows A–Q.
2. **In-character role-play, not card read-back.** Agents respond to the scenario. The Facilitator is explicitly authorized to reject a turn that recites the agent card and re-prompt.
3. **Breakage is the output, not the failure.** A cycle that finds nothing is a suspect cycle. A cycle that finds three structural gaps is a successful cycle.
4. **Every cycle closes with a merged delta or a ROADMAP item.** No "we learned a lot" closures.
5. **Stress always comes from the catalog.** New stresses are proposed as catalog entries *before* use. This keeps cycles comparable across time.
6. **Cycles are snapshots tied to a framework version.** Cycle metadata captures the git SHA; a cycle is not a live document.
7. **Pre-registered predictions.** The Stress Designer commits to predicted pressure points before the stressed run. Surprise vs. prediction delta is tracked.
8. **Structural fixes preferred over new agents.** The Framework Architect must justify any proposal to create a new agent against the alternatives: mode change, authority reassignment, new exception path, handoff clarification, runbook addition.

---

## Cadence and Ownership

**Cadence**: One cycle per release cycle, not calendar-based. A major release without a completed cycle is disallowed. Minor releases may skip. Tying to releases ensures findings actually land in shipped framework updates rather than accumulating in limbo.

**Cycle timebox**: 2–4 weeks per cycle. The Facilitator kills cycles that exceed the timebox and files what was learned as a partial artifact with a `timebox-exceeded` flag. This creates a self-correcting signal about methodology tractability.

**Ownership**:

| Responsibility | Owner |
|---|---|
| Scheduling cycles, running phases, producing cycle report | Think Tank Facilitator |
| Drafting framework deltas (before/after diffs) | Framework Architect |
| Selecting and parameterizing stresses; pre-registering predictions | Stress Designer |
| Merge approval on **strategic** deltas (agent cards, playbook structure, step-matrix) | CEO |
| Merge approval on **regulatory** deltas (compliance gates, regulatory frameworks) | Compliance Officer |
| Merge approval on **operational** deltas (runbook sections, handoff templates) | Think Tank Facilitator |

**Do not assign scheduling to the CEO.** The CEO card is already full of governance duties. The Facilitator exists precisely so the CEO only has to review dispositions, not run the cycle.

---

## Observe Target Rotation

Think Tank rotates through workflows A–Q via the [ledger](ledger.md), ensuring every workflow gets stressed over time rather than the same one repeatedly.

**Rotation rule**: the Facilitator picks the next un-stressed workflow from the ledger unless a real incident (exam finding, production issue, regulatory change) justifies targeting a specific workflow out of order. Breaking rotation is allowed but must be recorded in the ledger with a rationale.

After all 17 workflows have been cycled at least once, rotation restarts — and prior findings for each workflow become the baseline comparison for the next cycle on that workflow.

---

## Delta Disposition Mechanism

Every Finding produces a proposed Delta. Every Delta is tagged with one of three dispositions before the cycle closes:

### `merged`
The Delta is drafted as a before/after diff, approved by the appropriate merger (CEO, Compliance Officer, or Facilitator), and applied to the target file in the same branch as the cycle artifact.

### `deferred-to-roadmap`
The Delta is sound but cannot be merged in this cycle (too large, requires cross-workflow coordination, depends on a ROADMAP agent not yet shipped). The Facilitator creates a [ROADMAP.md](../../ROADMAP.md) entry with:
- A link back to the cycle and Finding ID
- Acceptance criteria for when the item is considered complete
- The delta proposal as a reference draft

Deferred items are not failures. They are tracked work, not lost work.

### `rejected-with-rationale`
The Delta was drafted but the merger rejected it. The rationale must be specific and documented in the cycle report. "Not comfortable with this" is not a rationale. Specific objections are.

---

## Anti-Patterns

Named so Facilitators can reject them mid-cycle:

1. **Ritual cycles with no merges.** The cycle runs, produces a report, and nothing changes in any file. Mitigation: every cycle closes with at least one merged delta or a named ROADMAP item.
2. **Architecture astronauts.** Framework Architect proposes elegant abstractions disconnected from the files CANVAS actually ships. Mitigation: every Delta must cite a specific target file, section, and line range.
3. **Scope creep into ROADMAP Self-Improvement.** The Facilitator starts absorbing Retrospective, Gap Analysis, Member Persona, Game Theory, and Roadmap Synthesis responsibilities. Mitigation: the Facilitator coordinates with those agents when they ship and does not stand in for them.
4. **Stress theater.** Stresses are picked to produce interesting-looking failures rather than to probe suspected weak points. Mitigation: pre-registered predictions; surprise-vs-prediction delta is tracked.
5. **Card read-back.** Agents recite their own cards instead of responding to the scenario. Mitigation: Facilitator rejects the turn and re-prompts with the specific decision being asked.
6. **The worked example becomes the only example.** One cycle sits as reference forever. Mitigation: cadence requirement + visible cycle counter in the ledger.
7. **Cycle artifact rot.** Cycles reference playbook versions that later change, leaving the cycle report pointing at ghosts. Mitigation: cycle metadata must capture the framework git SHA; a cycle is a snapshot, not a live document.
8. **Compound stress masking.** Three or four stresses stacked at once obscure which stress caused which breakage. Mitigation: two-stress cap without explicit Facilitator approval.
9. **New-agent reflex.** Every breakage is "solved" by proposing a new agent. Mitigation: Framework Architect must justify new agents against mode/authority/exception-path/handoff alternatives.

---

## Link to Step-Matrix Framework

Every Framework Architect delta must conform to the conventions in [`strategy/step-matrix-framework.md`](../step-matrix-framework.md):

- **Mode**: Execute, Advise, or Gate (mutually exclusive per agent per step)
- **Authority**: Operational, Credit/Financial, Compliance/Regulatory, or Escalation
- **Gate type**: Regulatory (0 retries) or Routine (1 retry, overridable)
- **Fallback outcome**: `pause`, `rollback`, or `exception-path`

A Delta that proposes a new Gate must state the Gate type and fallback outcome. A Delta that proposes reassigning authority must state the receiving agent's current lanes and whether the change adds a new lane or clarifies an existing one.

**Changes to the step-matrix-framework itself require Compliance Officer and CEO sign-off** — this is enforced in the step-matrix-framework doc and applies to Think Tank cycles as well.

---

## Cycle Report Template

The canonical structure for every cycle report. See `cycles/cycle-0001-loan-origination.md` for a complete worked example.

```
# Cycle NNNN — [Observe Target]

## Metadata
- Cycle ID, dates, Facilitator
- Observe target (workflow + playbook path)
- Simulator run references (if applicable)
- Framework git SHA (snapshot pointer)

## Observe
- Process map (steps, handoffs, system touches, exception paths)
- Baseline metrics

## Model — Baseline Run
- Agent activations, decisions, deliverables
- Pre-existing gaps flagged separately (not attributed to stress)

## Stress Application
- Stress(es) drawn from catalog with parameters
- Pre-registered predicted pressure points (from Stress Designer)

## Model — Stressed Run
- Breakages by step, agent, authority lane
- Categorized as predicted or surprise

## Extract — Structural Findings
- Finding ID (cycle-NNNN-F01, F02, ...)
- Breakage description
- Root-cause classification: [missing step / wrong mode / wrong authority / missing exception path / undocumented handoff / missing agent / operator error]
- Affected files and sections

## Proposed Framework Deltas
- Delta ID → Finding ID mapping
- Target file and section
- Before/after diff
- Disposition: [merged / deferred-to-roadmap / rejected-with-rationale]
- Approver (CEO / Compliance Officer / Facilitator)

## Deferred Items
- ROADMAP routing with rationale and acceptance criteria

## Cycle Retrospective
- What the cycle revealed about Think Tank methodology itself
```

The critical mechanical chain: **Finding → Delta → Disposition → File touched.** That chain makes every cycle auditable and measurable.

---

## Activation

To start a cycle, use the runbook: [`strategy/runbooks/scenario-think-tank-cycle.md`](../runbooks/scenario-think-tank-cycle.md).

To review historical cycles and rotation state, see the [ledger](ledger.md).

---

*CANVAS Think Tank — anchored in real processes, stressed against the catalog, closed with structural deltas. The cycle that makes CANVAS improve itself.*
