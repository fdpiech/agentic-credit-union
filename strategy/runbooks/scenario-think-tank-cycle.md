# Runbook: Think Tank Cycle

> **Mode**: CANVAS-Meta | **Duration**: 2–4 weeks per cycle | **Agents**: 3 Think Tank + domain participants | **Lead**: Think Tank Facilitator

---

## Scenario

CANVAS needs to systematically improve itself by stress-testing its own workflows and feeding structural breakages back as framework deltas. This runbook governs a single Think Tank cycle: one real credit union process, one baseline run, one stressed run, and one set of findings that either merge into the framework or land on the ROADMAP with acceptance criteria.

This is a recurring process — one cycle per release — not a one-shot exercise. See `strategy/think-tank/methodology.md` for the full protocol and `strategy/think-tank/ledger.md` for cycle history and rotation state.

## When to Activate

- **Per-release cadence**: Every major CANVAS release requires a completed Think Tank cycle. Minor releases may skip.
- **Incident-triggered**: A real CU incident (exam finding, production issue, regulatory change) justifies activating a cycle targeting the affected workflow, even if it breaks the rotation.
- **Coverage gap**: A workflow that has never been an Observe target is accumulating invisible structural debt and should be prioritized.
- **Post-merge validation**: After merging a large cross-workflow Delta set, a follow-up cycle can validate that the changes hold under stress.

---

## Agent Roster

### Think Tank Core

| Agent | Cycle Role | Mode | Authority |
|-------|-----------|------|-----------|
| **Think Tank Facilitator** | Cycle owner — runs phases, enforces discipline, produces cycle report, files dispositions | Execute | Operational + Escalation |
| **Stress Designer** | Stress selection, parameterization, pre-registration of predictions, surprise-vs-prediction tracking | Execute (stress selection) | Operational (Advise only) |
| **Framework Architect** | Turns breakages into structured Findings and before/after Delta diffs | Execute (Extract phase) | Operational (meta-artifacts only) |

### Domain Participants (Varies by Observe Target)

Activated in the Model phases to run in-character against the chosen workflow. The specific agents depend on the Observe target's Step-Level Matrix. For Workflow B (Loan Origination) as an example:

| Agent | Cycle Role | Mode | Authority |
|-------|-----------|------|-----------|
| **Loan Officer** | In-character workflow execution (Steps 1, 2, 4, 5) | Execute (within Model) | Credit/Financial |
| **Compliance Officer** | In-character Gate (Steps 3, 6) | Gate (within Model) | Compliance/Regulatory |
| **Risk Manager** | In-character Advise (Step 2) | Advise (within Model) | Credit/Financial + Escalation |
| **Member Services Representative** | In-character Advise (Step 1) | Advise (within Model) | Operational |
| **Financial Advisor** | In-character Advise (Step 4) | Advise (within Model) | Operational |

### Delta Approvers

| Agent | Approval Scope |
|-------|---------------|
| **CEO** | Strategic deltas — agent cards, playbook structure, step-matrix framework |
| **Compliance Officer** | Regulatory deltas — compliance gates, regulatory frameworks, BSA process |
| **Think Tank Facilitator** | Operational deltas — runbook sections, handoff templates, stress catalog updates |

---

## Phase 1: Observe — Process Mapping

```
Activate Think Tank Facilitator for Phase 1: Observe.

Observe target: Workflow [Letter] — [Name]
Playbook: strategy/playbooks/workflow-[letter]-[slug].md
Framework git SHA: [current HEAD SHA — captured at cycle start]

Facilitator actions:
1. Read the target playbook end-to-end: every step, every activation prompt,
   every compliance gate, every exception path
2. Read the target workflow's Step-Level Matrix: every agent, mode, and
   authority assignment
3. Map the process:
   - How many steps?
   - How many agents activated?
   - Which steps are Execute, Advise, Gate?
   - Where are the regulatory gates (zero retries)?
   - Where are the routine gates (one retry)?
   - Which exception paths are defined?
   - What handoffs cross department boundaries?
4. Capture baseline metrics:
   - Number of agents involved
   - Number of gates (regulatory and routine)
   - Number of exception paths
   - Any single-agent dependencies (steps where only one agent is Execute or
     Gate with no documented alternate)
5. Record any gaps visible from reading alone — these are pre-existing gaps,
   not attributed to stress

Deliverable: Observe section of cycle report with process map and baseline.
Gate: Facilitator confirms Observe is complete before advancing to Model.
```

---

## Phase 2: Model — Baseline Run

```
Activate Think Tank Facilitator for Phase 2: Model — Baseline Run.

Run the target workflow clean — no stress applied — with agents in character.

Activation sequence:
1. Activate each agent listed in the Step-Level Matrix, in step order
2. Each agent responds in character to the scenario, making decisions
   based on their authority lane and the information available to them
3. At each Gate step, the Gate agent evaluates the prior deliverable and
   either passes or fails it with specific findings
4. At each Advise step, the Advise agent contributes expertise as they
   see fit — the workflow does not wait

In-character discipline:
- Agents respond to the scenario — they do NOT read back their agent card
- Facilitator rejects any turn that recites the card and re-prompts with
  the specific decision being asked
- Agents operate with the constraints, priorities, and incomplete
  information their real-world counterparts would have

Baseline-before-stress discipline:
- If the baseline run breaks (a Gate fails, a handoff is unclear, an
  authority lane is ambiguous), flag it as a PRE-EXISTING GAP
- Pre-existing gaps are NOT attributed to the stress in Phase 3
- Pre-existing gaps may generate their own Findings in Phase 4

Deliverable: Model — Baseline Run section of cycle report.
Gate: Facilitator confirms baseline run is complete and pre-existing gaps
are documented before advancing to Stress.
```

---

## Phase 3: Stress Application + Model — Stressed Run

### Sub-Phase 3a: Stress Selection and Pre-Registration

```
Activate Stress Designer for stress selection and pre-registration.

Input: Observe process map, baseline run results, target workflow Step-Level
Matrix, stress catalog (strategy/think-tank/stress-catalog.md)

Stress Designer actions:
1. Select 1–2 stresses from the catalog with specific parameter values
   Reference: strategy/think-tank/stress-catalog.md — Pressure Point
   Cross-Reference table for the target workflow
2. Articulate the question this cycle is meant to answer
   (Must be specific and falsifiable — not "will things break" but
   "does Workflow [X] have a single point of failure at [step] under [stress]?")
3. Pre-register predicted pressure points BEFORE the stressed run:
   - Name: step, agent, authority lane, expected failure mode
   - Confidence: High / Medium / Low
   - What would be surprising: failures outside the prediction set
4. Cap at 2 stresses without Facilitator approval; rationale required for 2

Deliverable: Stress selection + pre-registration record in cycle report.
Gate: Facilitator confirms predictions are recorded before stressed run begins.
```

### Sub-Phase 3b: Stressed Model Run

```
Activate Think Tank Facilitator for Phase 3b: Stressed Model Run.

Apply the selected stress(es) to the scenario and re-run the workflow.

Execution:
1. Announce the stress to all participants:
   "The environment has changed: [stress description with parameters]"
2. Re-activate each agent in step order under the stressed conditions
3. Agents respond in character to the changed environment
4. Record where the model breaks:
   - Which step?
   - Which agent?
   - Which authority lane?
   - What was the specific failure mode?
   - Did a Gate agent lack the information to make a determination?
   - Did a handoff fail because the receiving agent's constraints changed?
   - Did an authority lane become a bottleneck?
5. Categorize each breakage:
   - PREDICTED: Stress Designer called this in the pre-registration
   - SURPRISE: Stress Designer did not predict this breakage

Surprise breakages are the most valuable output of the cycle.

Deliverable: Model — Stressed Run section of cycle report with breakage table.
Gate: Facilitator confirms all breakages are categorized before advancing
to Extract.
```

---

## Phase 4: Extract — Findings, Deltas, Dispositions

### Sub-Phase 4a: Findings

```
Activate Framework Architect for Phase 4a: Structural Findings.

Input: Breakage list from Phase 3b, pre-existing gap list from Phase 2

Framework Architect actions:
1. For each breakage (and each pre-existing gap), create a Finding:
   - Finding ID: cycle-NNNN-FNN
   - Breakage description
   - Root-cause classification (one of):
     [ ] missing step
     [ ] wrong mode
     [ ] wrong authority
     [ ] missing exception path
     [ ] undocumented handoff
     [ ] missing agent
     [ ] operator error
   - Affected files and sections
2. Operator errors are NOT framework gaps — file as training/retrospective
   notes, not Deltas
3. Cluster symptoms that share a common root cause — one Delta per root
   cause, not per symptom

Deliverable: Extract — Structural Findings section of cycle report.
```

### Sub-Phase 4b: Framework Deltas

```
Activate Framework Architect for Phase 4b: Framework Deltas.

For each Finding that is NOT an operator error, draft a Delta:
1. Delta ID: DD-NNNN-NN, mapped to Finding ID
2. Target file (absolute path) and section (heading or line range)
3. Before/after diff — exact text, matching the target file's format
4. Approver assignment:
   - CEO: strategic (agent cards, playbook structure, step-matrix)
   - Compliance Officer: regulatory (compliance gates, regulatory framework)
   - Facilitator: operational (runbooks, handoffs, stress catalog)
5. For new-agent proposals: document why mode change, authority
   reassignment, exception path, handoff clarification, runbook
   addition, and agent card amendment are all insufficient

Convention-compliance check before routing:
- [ ] Target file exists
- [ ] Before text matches current file
- [ ] After text matches surrounding format
- [ ] Regulatory Deltas routed to Compliance Officer
- [ ] Step-matrix Deltas routed to CEO AND Compliance Officer

Deliverable: Proposed Framework Deltas section of cycle report.
```

### Sub-Phase 4c: Disposition and Closure

```
Activate Think Tank Facilitator for Phase 4c: Disposition and Closure.

For each Delta:
1. Route to assigned approver
2. Approver review:
   - MERGED: Delta approved; apply the before/after diff to the target file
   - DEFERRED-TO-ROADMAP: Sound but cannot merge now; create ROADMAP entry
     with link to Finding ID and acceptance criteria
   - REJECTED-WITH-RATIONALE: Specific rationale required ("not comfortable"
     is not a rationale)
3. Record disposition in cycle report

Stress Designer concurrent:
- Produce surprise-vs-prediction summary
- Update stress catalog "Cycles used" back-references
- Flag any catalog entries whose predicted pressure points need updating

Cycle closure checklist:
- [ ] Every Finding has an ID and root-cause classification
- [ ] Every non-operator-error Finding has a Delta
- [ ] Every Delta has a disposition (merged / deferred / rejected)
- [ ] At least one Delta is merged OR one ROADMAP entry created
- [ ] Prediction accuracy summary recorded
- [ ] Cycle report filed as strategy/think-tank/cycles/cycle-NNNN-[slug].md
- [ ] Ledger updated (strategy/think-tank/ledger.md)
- [ ] Next rotation target noted in ledger

Deliverable: Complete cycle report + updated ledger.
```

---

## Quality Gate Checklist

| # | Criterion | Owner | Gate |
|---|-----------|-------|------|
| 1 | Observe target is a named workflow (A–Q) from the ledger rotation | Facilitator | Phase 1 entry |
| 2 | Framework git SHA captured at cycle start | Facilitator | Phase 1 entry |
| 3 | Baseline run completed before stress applied | Facilitator | Phase 2 → Phase 3 |
| 4 | Pre-existing gaps documented separately from stress breakages | Facilitator | Phase 2 → Phase 3 |
| 5 | Stress predictions pre-registered before stressed run | Stress Designer | Phase 3a → Phase 3b |
| 6 | No more than 2 stresses without Facilitator rationale | Stress Designer | Phase 3a |
| 7 | All breakages categorized as predicted or surprise | Facilitator | Phase 3b → Phase 4 |
| 8 | All Findings have root-cause classification | Framework Architect | Phase 4a |
| 9 | All non-operator-error Findings have Deltas | Framework Architect | Phase 4b |
| 10 | All Deltas have dispositions | Facilitator | Phase 4c |
| 11 | At least one merged Delta or ROADMAP entry | Facilitator | Cycle closure |
| 12 | Cycle report filed and ledger updated | Facilitator | Cycle closure |

---

## Activation Prompt

```
Activate Think Tank Facilitator in CANVAS-Meta mode for Think Tank Cycle.

Cycle ID: cycle-[NNNN]
Observe target: Workflow [Letter] — [Name]
Playbook: strategy/playbooks/workflow-[letter]-[slug].md
Framework git SHA: [SHA]
Timebox: [Start date] to [End date] ([N] weeks)
Rotation status: [On rotation / Broken rotation for: reason]

Execute the CANVAS Think Tank Cycle protocol:
- Phase 1: Observe — map the target workflow end-to-end
- Phase 2: Model — Baseline Run (clean, no stress)
- Phase 3: Stress + Model — Stressed Run (catalog stresses, pre-registered predictions)
- Phase 4: Extract — Findings, Deltas, Dispositions

Cycle discipline:
- Baseline before stress. Pre-existing gaps flagged separately.
- Pre-registered predictions before stressed run. Surprises tracked.
- In-character role-play. Card read-back rejected.
- Every cycle closes with at least one merged Delta or ROADMAP entry.
- Timebox enforced: if deadline hits, close with partial report + timebox-exceeded flag.

Reference: strategy/think-tank/methodology.md
Reference: strategy/think-tank/stress-catalog.md
Reference: strategy/think-tank/ledger.md
Reference: strategy/step-matrix-framework.md
```

---

*CANVAS Think Tank Cycle Runbook — one process, one baseline, one stressed run, one set of diffs. The cycle that makes the framework improve itself.*
