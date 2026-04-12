# Cycle 0001 — Loan Origination

> **First Think Tank cycle.** This worked example demonstrates the full 4-phase cycle against Workflow B (Consumer Loan Origination) with two stresses: ST-01 Rate Shock Up and ST-08 Key-Staff Departure. The cycle surfaces single-point-of-failure governance gaps at Steps 3 and 6, proposes structural deltas (Alternate Gate Agent field + exception path), and closes with three merged deltas and one deferred ROADMAP item — without proposing a new agent.

---

## Metadata

- **Cycle ID**: cycle-0001
- **Start date**: 2026-04-12
- **Timebox deadline**: 2026-05-10 (4 weeks)
- **Facilitator**: Think Tank Facilitator
- **Observe target**: Workflow B — Consumer Loan Origination
- **Playbook path**: `strategy/playbooks/workflow-b-loan-origination.md`
- **Framework git SHA**: `25ba001`
- **Rotation status**: On rotation (inaugural cycle — Workflow B selected as first target per plan approval; high-volume, rich handoff structure, exposed to rate and governance stress)

---

## Observe

### Process Map

Workflow B originates consumer loans through 6 steps across 6 agents, with 2 compliance gates and 1 named exception path.

| Step | Name | Agent | Mode | Authority | Gate Type |
|------|------|-------|------|-----------|-----------|
| 1 | Application & Pre-Qualification | Loan Officer | Execute | Operational | — |
| 1 | (participant) | Member Services Representative | Advise | Operational | — |
| 2 | Underwriting Analysis | Loan Officer | Execute | Credit/Financial | — |
| 2 | (participant) | Risk Manager | Advise | Credit/Financial + Escalation | — |
| 3 | Compliance Review (Pre-Decision) | Compliance Officer | **Gate** | Compliance/Regulatory + Escalation | **Regulatory** (0 retries) |
| 4 | Decision Communication | Loan Officer | Execute | Credit/Financial | — |
| 4 | (participant) | Financial Advisor | Advise | Operational | — |
| 5 | Closing & Funding | Loan Officer | Execute | Operational | — |
| 6 | Post-Close Quality Check | Compliance Officer | **Gate** | Compliance/Regulatory + Escalation | **Routine** (1 retry → `exception-underwriting`) |

### Baseline Metrics

| Metric | Value |
|--------|-------|
| Total steps | 6 |
| Agents activated | 6 (Loan Officer, Compliance Officer, Risk Manager, Member Services Rep, Financial Advisor, Loan Underwriting Analyst via exception path) |
| Gates | 2 (Step 3: regulatory, Step 6: routine) |
| Exception paths | 1 (`exception-underwriting` — post-close quality failure) |
| Handoff boundaries | 3 (Loan Officer → Compliance Officer at Steps 3 and 6; Risk Manager → Loan Officer advisory at Step 2) |
| Cycle time | 24 hours (consumer) – 5 business days (complex) |

### Pre-Existing Observations (From Reading Alone)

1. **Steps 3 and 6 are both Compliance Officer Gates with no documented alternate.** If the Compliance Officer is unavailable, both gates stall. The Step-Level Matrix names the Compliance Officer but does not name a successor with the same Compliance/Regulatory authority lane.

2. **Step 2 (Underwriting) relies on a CFO rate sheet as a pre-condition**, but the CFO is not named in the Step-Level Matrix for Workflow B. If the rate sheet becomes invalid mid-workflow (rate shock scenario), the Loan Officer has no documented path to obtain an updated sheet within the workflow.

3. **The exception path (`exception-underwriting`) only covers post-close quality failures.** There is no exception path for a pre-decision compliance gate failure at Step 3 — that gate is regulatory (0 retries) and pauses the workflow. This is by design (a regulatory violation cannot be cured by re-evaluation), but it means a false positive at Step 3 blocks all forward progress with no degraded-mode option.

---

## Model — Baseline Run

### Scenario

Maria Santos, member since 2019, applies for a $22,000 auto loan for a 2023 Honda CR-V. 60-month term requested. Credit score 718, DTI 34%, stable employment verified, 5 years at current employer. Standard consumer loan — no policy exceptions expected.

### Step-by-Step Baseline Results

**Step 1 — Application & Pre-Qualification (Loan Officer, Execute)**
Loan Officer conducts member interview. Product: auto loan. Amount: $22,000. Term: 60 months. Purpose: vehicle purchase. Pre-qualifies verbally using current rate matrix (5.49% APR for A-tier, 60-month auto). Obtains signed credit authorization. Pulls tri-merge — no fraud flags. Requests most recent pay stub and W-2. Application date logged in core system: ECOA 30-day clock starts.

> Member Services Representative (Advise): confirms CIP on file, member in good standing, no account holds.

**Baseline result**: Clean. No issues.

**Step 2 — Underwriting Analysis (Loan Officer, Execute)**
Loan Officer completes analysis worksheet. DTI: 34% (within 43% policy limit). LTV: 88% (within 100% auto policy). Payment-to-income: 8.2%. Credit grade: A-tier. No policy exceptions. Recommendation: Approve at 5.49% / 60 months / $420.33 payment.

> Risk Manager (Advise): no advisory input needed — straightforward file within all policy limits.

**Baseline result**: Clean. No issues.

**Step 3 — Compliance Review (Compliance Officer, Gate)**
Compliance Officer reviews: ECOA — no prohibited basis considered. Application date logged, 30-day clock tracked (Day 1). TILA disclosures prepared — APR, finance charge, total of payments verified against proposed terms. No HMDA applicability (not dwelling-secured). Fair lending screen: approval — no adverse action analysis needed.

**Gate decision**: PASS. Workflow advances.

**Step 4 — Decision Communication (Loan Officer, Execute)**
Loan Officer calls Maria Santos: approved at 5.49% / 60 months / $420.33. Schedules closing for next business day. Sends approval letter with terms.

> Financial Advisor (Advise): no advisory input triggered — standard approval, no hardship indicators.

**Baseline result**: Clean. No issues.

**Step 5 — Closing & Funding (Loan Officer, Execute)**
All approval conditions met. Income verified within 30 days. GAP insurance offered and accepted. Loan package prepared: Note, TILA disclosure, security agreement. Maria signs (e-sign). Funds disbursed. Title held pending DMV filing. Loan boarded to core: rate 5.49%, payment $420.33, maturity 60 months, collateral code AUTO.

**Baseline result**: Clean. Core boarding checklist verified.

**Step 6 — Post-Close Quality Check (Compliance Officer, Gate)**
Compliance Officer reviews funded file. TILA disclosure matches funded terms. No adverse action required (approval). Lien filing submitted to DMV. File archived per retention schedule.

**Gate decision**: PASS. Workflow complete.

### Baseline Run Summary

The baseline run completed cleanly with no gate failures and no exception paths triggered. Maria Santos's loan was originated, funded, and quality-checked without issues.

**Pre-existing gaps confirmed from reading** (observation #1): Steps 3 and 6 both depend on the Compliance Officer as the sole Gate agent. The baseline run did not expose this because the Compliance Officer was available and the file was clean. The gap is structural — it will be tested under stress.

---

## Stress Application

### Stress Selection

| Stress | Catalog ID | Parameters | Rationale |
|--------|-----------|------------|-----------|
| **Rate Shock Up** | ST-01 | +200 bps over 60 days, parallel curve shift | Pressures Step 2 (pricing matrix becomes obsolete mid-pipeline), Step 4 (counter-offers surge as approved rates no longer competitive), and the CFO rate-sheet pre-condition. Tests whether Workflow B can handle a rate environment that moves faster than its cycle time. |
| **Key-Staff Departure** | ST-08 | Compliance Officer, 0-day notice (sudden departure — termination, medical emergency), no named successor | Directly probes the pre-existing observation: Steps 3 and 6 are single-point-of-failure Compliance Officer gates. Tests whether the framework has any mechanism to continue loan origination when the sole Gate agent at two regulated checkpoints is unavailable. |

**Question this cycle is meant to answer**: Does Workflow B have a structural single point of failure at its Compliance Officer gates, and does a concurrent rate shock compound the impact by increasing the volume of files waiting at those gates?

**Why two stresses**: These naturally co-occur (a rate shock increases volume and decision complexity at the same time that staffing events happen independently). They are diagnostically separable: rate shock pressures Steps 2 and 4 (pricing, counter-offers); key-staff departure pressures Steps 3 and 6 (gates). Breakages at Steps 2/4 are attributable to ST-01; breakages at Steps 3/6 are attributable to ST-08; breakages at their intersection (volume backlog at an understaffed gate) are attributable to the compound.

### Pre-Registered Predictions (Stress Designer)

**Recorded before stressed run.**

| # | Workflow Step | Agent | Authority Lane | Expected Failure Mode | Confidence |
|---|-------------|-------|----------------|----------------------|------------|
| P1 | Step 2 — Underwriting | Loan Officer | Credit/Financial | Pricing matrix becomes obsolete; DTI calculations shift as rate rises push payments higher; counter-offers become the norm rather than the exception | High |
| P2 | Step 3 — Compliance Review | Compliance Officer | Compliance/Regulatory | Gate is unmanned — no named alternate. All pre-decision compliance reviews stall. ECOA 30-day clock keeps running while the gate is blocked. | High |
| P3 | Step 4 — Decision Communication | Loan Officer | Credit/Financial | Counter-offer volume surges; members who were pre-qualified at lower rates receive different terms; communication complexity increases | Medium |
| P4 | Step 6 — Post-Close Quality Check | Compliance Officer | Compliance/Regulatory | Gate is unmanned — same agent dependency as Step 3. Funded loans accumulate without post-close review. | High |

**What I would be surprised by**: Breakage at Step 1 (application intake should be rate-insensitive) or Step 5 (closing is operational, not rate-sensitive once approved). Also, any breakage in the Risk Manager advisory role — Rate shock is in their wheelhouse and they should adapt.

---

## Model — Stressed Run

### Environment Change Announcement

> **The environment has changed:**
> 1. The Federal Reserve has raised rates +200 basis points over the past 60 days. The CFO's rate sheet has been updated twice, but pipeline applications were pre-qualified under the old sheet. Current auto loan rate for A-tier, 60 months: **7.49% APR** (up from 5.49%).
> 2. The Compliance Officer has departed with zero notice effective this morning. No successor is named. No alternate Gate agent is documented for Steps 3 or 6. The Internal Auditor is on staff and holds Compliance/Regulatory authority for audit findings, but is not listed in Workflow B's Step-Level Matrix.

### Stressed Run: Step-by-Step Results

**Step 1 — Application & Pre-Qualification (Loan Officer, Execute)**
Loan Officer conducts member interview for James Rodriguez — $28,000 auto loan, 60 months. Pre-qualifies using the *current* rate sheet (7.49%). No confusion at intake — the current sheet is in effect and the Loan Officer uses it correctly. Application logged, ECOA clock starts.

> Member Services Representative (Advise): confirms CIP, member in good standing.

**Result**: No breakage. As predicted — application intake is rate-insensitive.

---

**Step 2 — Underwriting Analysis (Loan Officer, Execute)**
Loan Officer pulls credit and income docs. Credit score 695, DTI on original application estimate was 36%. But at 7.49% the monthly payment is $562 (vs. ~$473 at the pre-shock rate). Recalculated DTI: **39.8%** — still within the 43% policy limit, but now borderline. The pricing matrix assigns B-tier at 695 credit score, pushing the rate to **8.24%** and DTI to **41.1%**.

The Loan Officer faces a decision the workflow doesn't explicitly address: the member was verbally pre-qualified at a rate that no longer exists. The pre-qualification was correct at the time but is now misleading. Should the Loan Officer:
- Counter-offer at the new rate without discussing the pre-qualification?
- Acknowledge the pre-qualification and explain the rate change?
- Re-run the pre-qualification conversation from scratch?

The playbook's Step 1 says "pre-qualify verbally using current rate/product matrix" but does not address what happens when the matrix changes between pre-qualification and underwriting.

> Risk Manager (Advise): flags that DTI at 41.1% is approaching the 43% limit. Recommends the Loan Officer consider a shorter term (48 months) to reduce payment, or a smaller loan amount. Also notes that if rates continue rising, the pipeline of pre-qualified-at-lower-rate applications will produce a wave of counter-offers — the workflow should expect elevated counter-offer volume.

**BREAKAGE — B1**: The pricing matrix changed between Step 1 (pre-qualification) and Step 2 (underwriting). The workflow has no documented protocol for stale pre-qualifications. The Loan Officer improvises — the decision is correct but undocumented.

**BREAKAGE — B2**: The Risk Manager's advisory about elevated counter-offer volume has no documented pathway. The Risk Manager advises, but there is no mechanism in Workflow B to trigger a pipeline review or rate-sheet change notification to in-flight applications. The advisory disappears into the specific file rather than escalating to a systemic response.

---

**Step 3 — Compliance Review (Compliance Officer, Gate) — BLOCKED**

The Compliance Officer is unavailable (ST-08: 0-day departure).

The workflow reaches Step 3 and **stalls**. This is a regulatory gate (0 retries). The playbook says "Activate Compliance Officer for pre-decision compliance review." There is no alternate activation. The Step-Level Matrix names only the Compliance Officer at this step.

**BREAKAGE — B3** (CRITICAL): **Step 3 is a single point of failure.** No alternate Gate agent is named. The workflow cannot advance. The ECOA 30-day adverse action clock continues running on every application in the pipeline. If the gate remains unmanned for more than a few days, applications will approach or exceed their ECOA deadlines without a compliance review, creating a regulatory exposure.

Questions the framework does not answer:
- Who can act as alternate Gate at Step 3 with Compliance/Regulatory authority?
- Can the Internal Auditor (who holds Compliance/Regulatory authority for audit findings) serve as an emergency compliance gate? What are the independence implications?
- Can the BSA Officer (who holds Compliance/Regulatory authority for BSA/AML) serve as a general compliance gate? The BSA Officer's authority is scoped to BSA/AML — fair lending and TILA are outside that scope.
- Is there a time-limited emergency protocol that allows loans to fund with a deferred compliance review, subject to a post-facto review within N days?

The Facilitator notes: this is the highest-value finding of the cycle. The breakage is structural — it exists at the step-matrix level, not at the operator level.

---

**Step 4 — Decision Communication (Loan Officer, Execute) — BLOCKED**

Cannot execute. Step 4 depends on Step 3 (compliance review clears the decision before it is communicated). With Step 3 blocked, Step 4 is blocked.

**BREAKAGE — B4**: Cascading blockage. The Loan Officer cannot communicate a decision — approve, counter, or decline — because the compliance gate has not cleared. The member is waiting. The ECOA clock is running. The Loan Officer has no documented authority to communicate *any* decision without a compliance review.

> Financial Advisor (Advise): no advisory input possible — the workflow has not reached a decision stage.

---

**Step 5 — Closing & Funding (Loan Officer, Execute) — BLOCKED**

Cannot execute. Depends on Step 4 (member acceptance of terms).

---

**Step 6 — Post-Close Quality Check (Compliance Officer, Gate) — BLOCKED**

Even if Steps 4 and 5 could somehow proceed (they can't), Step 6 is the same Compliance Officer who is unavailable. The post-close quality gate is a second single point of failure for the same absent agent.

**BREAKAGE — B5**: Step 6 is the same SPOF as Step 3, for the same agent. Any loan that was already past Step 3 before the departure (e.g., loans in the pipeline that cleared compliance review yesterday) can fund at Step 5 but will accumulate at Step 6 without post-close review. Funded loans without quality review accumulate regulatory exposure.

### Stressed Run Breakage Summary

| ID | Step | Agent(s) | Lane | Failure Mode | Stress | Predicted? |
|----|------|----------|------|-------------|--------|-----------|
| B1 | Step 2 | Loan Officer | Credit/Financial | Stale pre-qualification — no protocol for rate-sheet change between Steps 1 and 2 | ST-01 | **Predicted (P1)** — partially; predicted pricing pressure but not the specific stale-pre-qual gap |
| B2 | Step 2 | Risk Manager → (systemic) | Credit/Financial + Escalation | Risk Manager advisory about pipeline-wide counter-offer wave has no escalation path within Workflow B | ST-01 | **Surprise** — did not predict that the advisory mechanism would fail to escalate |
| B3 | Step 3 | Compliance Officer (absent) | Compliance/Regulatory | **SPOF**: sole Gate agent absent; regulatory gate unmanned; ECOA clocks running | ST-08 | **Predicted (P2)** |
| B4 | Step 4 | Loan Officer (blocked) | Credit/Financial | Cascading blockage from Step 3 — no decision can be communicated | ST-08 | **Predicted (P3)** — partially; predicted counter-offer complexity from rate shock, got total blockage from staff departure instead |
| B5 | Step 6 | Compliance Officer (absent) | Compliance/Regulatory | Same SPOF as B3; funded loans accumulate without post-close review | ST-08 | **Predicted (P4)** |

### Surprise-vs-Prediction Summary (Stress Designer)

- **Predictions matched**: P1 (partially — pricing pressure confirmed, stale-pre-qual gap was a bonus), P2 (fully), P3 (partially — blockage was total, not just complex), P4 (fully)
- **Surprise breakages**: B2 — Risk Manager advisory about systemic rate impact has no escalation pathway within Workflow B. The advisory was correct and timely, but it stays inside the individual loan file. There is no mechanism for "this is not about this loan, this is about all loans in the pipeline."
- **Prediction accuracy**: 4 of 5 breakages predicted (with varying match quality). 1 genuine surprise.
- **Signal strength**: Medium-high. The SPOF findings were expected (that was the question we designed the cycle to answer). The surprise (B2 — systemic advisory gap) is a genuinely new structural insight.

---

## Extract — Structural Findings

### Finding cycle-0001-F01 — Single Point of Failure at Compliance Officer Gates

**Breakage(s)**: B3, B5
**Root-cause classification**: `wrong authority` (no alternate Gate agent documented)
**Affected files**:
- `strategy/step-matrix-framework.md` — Section 2 (Dimension 1 — Mode), Gate definition: does not require naming an alternate Gate agent
- `strategy/playbooks/workflow-b-loan-origination.md` — Step-Level Matrix: Steps 3 and 6 name only the Compliance Officer as Gate with no successor
**Is this a training issue or a structural gap?**: **Structural gap.** The framework does not require or even support naming an alternate Gate agent. No operator action could have avoided this — the structure doesn't have the field.

### Finding cycle-0001-F02 — Stale Pre-Qualification Gap

**Breakage**: B1
**Root-cause classification**: `missing step` (no protocol for rate-sheet change between Steps 1 and 2)
**Affected files**:
- `strategy/playbooks/workflow-b-loan-origination.md` — Step 2 (Underwriting Analysis): no rate-sheet staleness check or re-pre-qualification protocol
**Is this a training issue or a structural gap?**: **Structural gap.** The playbook's Step 1 says "pre-qualify using current rate/product matrix" but does not address what happens when the matrix changes before Step 2 completes. The Loan Officer improvised correctly, but improvisation is not a framework.

### Finding cycle-0001-F03 — Systemic Advisory Escalation Gap

**Breakage**: B2
**Root-cause classification**: `undocumented handoff` (Risk Manager systemic advisory has no escalation path within Workflow B)
**Affected files**:
- `strategy/playbooks/workflow-b-loan-origination.md` — Step 2, Risk Manager Advise role: no mechanism to escalate from "this file has a risk" to "all files in the pipeline have this risk"
- `strategy/coordination/handoff-templates.md` — no template for systemic-risk advisory escalation from within a single-file workflow
**Is this a training issue or a structural gap?**: **Structural gap.** The Risk Manager's advisory was correct and timely. The framework's Advise mode is designed for per-file input. There is no mode or handoff for "this observation applies to the pipeline, not just this loan."

### Finding cycle-0001-F04 — Cascading Blockage (Steps 4–6)

**Breakage**: B4
**Root-cause classification**: `operator error` — not a framework gap
**Rationale**: Steps 4, 5, and 6 correctly blocked when Step 3 (a regulatory gate) could not clear. This is the intended behavior of a regulatory gate failure: the workflow pauses. The problem is not that Steps 4–6 blocked — the problem is that Step 3 is a SPOF (addressed in F01). Cascading blockage is a *symptom* of F01, not a separate root cause.
**Action**: Filed as retrospective note. No Delta.

---

## Proposed Framework Deltas

### Delta DD-0001-01 — Add Alternate Gate Agent Field to Step-Matrix Framework

**Maps to Finding**: cycle-0001-F01
**Target file**: `strategy/step-matrix-framework.md`
**Target section**: Section 2 — Dimension 1 — Mode — Gate definition
**Approver**: CEO (strategic — step-matrix framework change) + Compliance Officer (regulatory — affects compliance gates)

**Alternatives considered**:
- Mode change: No — the Gate mode is correct; the issue is that only one agent holds it
- Authority reassignment: No — the Compliance/Regulatory authority lane is correct for compliance gates
- Exception path addition: Partially addresses it (see DD-0001-03), but does not fix the structural absence of the alternate-gate concept
- Handoff clarification: No — this is not a handoff issue; it's a governance structure issue
- Runbook addition: No — a runbook for "compliance officer is unavailable" doesn't fix the step-matrix gap
- Agent card amendment: No — the issue is in the framework, not in any individual agent card

#### Before

```markdown
### Gate

> You have veto authority at a defined checkpoint. The workflow stops until you clear it. You don't produce the work product — you evaluate it against your decision authority. A gate decision is binary: pass or fail with specific findings.

- Gate agents evaluate prior work; they do not produce the primary deliverable.
- A failed gate requires documented findings. "I'm not comfortable with this" is not a gate finding — specific criterion failures are.
- There is typically one Gate agent per checkpoint, though a workflow step can have the Gate agent coincide with an Execute agent if that agent both produced a sub-deliverable (e.g., a compliance checklist) and clears the workflow.
- Gate agents cannot be overruled silently. Disagreement with a gate decision activates the Escalation lane.
```

#### After

```markdown
### Gate

> You have veto authority at a defined checkpoint. The workflow stops until you clear it. You don't produce the work product — you evaluate it against your decision authority. A gate decision is binary: pass or fail with specific findings.

- Gate agents evaluate prior work; they do not produce the primary deliverable.
- A failed gate requires documented findings. "I'm not comfortable with this" is not a gate finding — specific criterion failures are.
- There is typically one Gate agent per checkpoint, though a workflow step can have the Gate agent coincide with an Execute agent if that agent both produced a sub-deliverable (e.g., a compliance checklist) and clears the workflow.
- Gate agents cannot be overruled silently. Disagreement with a gate decision activates the Escalation lane.
- **Alternate Gate Agent**: Every Gate cell in a workflow Step-Level Matrix should name an alternate agent who holds the same authority lane and can serve as Gate if the primary is unavailable. The alternate operates under the same gate type (regulatory or routine) and the same fallback outcome. If no qualified alternate exists, the step must document this as a known single point of failure. Alternate gate activation requires Escalation-lane authorization from the CEO or the departing agent's supervisor.
```

**Disposition**: `merged`
**Approval date**: 2026-04-12
**Rationale**: Both CEO and Compliance Officer concur — naming alternates is a governance hygiene improvement that reduces SPOF risk across all 17 workflows. Think Tank cycle-0001 demonstrated that a single Compliance Officer departure blocks 100% of loan origination.

---

### Delta DD-0001-02 — Name Alternate Gate Agents for Workflow B Steps 3 and 6

**Maps to Finding**: cycle-0001-F01
**Target file**: `strategy/playbooks/workflow-b-loan-origination.md`
**Target section**: Step-Level Matrix
**Approver**: Compliance Officer (regulatory — compliance gate assignment)

#### Before

```markdown
| Step | Agent | Mode | Authority |
|------|-------|------|-----------|
| 3. Compliance Review | Compliance Officer | Gate | Compliance/Regulatory + Escalation |
| 6. Post-Close Quality Check | Compliance Officer | Gate | Compliance/Regulatory + Escalation |
```

#### After

```markdown
| Step | Agent | Mode | Authority | Alternate Gate |
|------|-------|------|-----------|----------------|
| 3. Compliance Review | Compliance Officer | Gate | Compliance/Regulatory + Escalation | BSA Officer (Compliance/Regulatory authority for BSA/AML; fair lending and TILA review require CEO authorization for scope expansion) |
| 6. Post-Close Quality Check | Compliance Officer | Gate | Compliance/Regulatory + Escalation | Internal Auditor (Compliance/Regulatory authority for audit findings; post-close review is within audit scope; note: alternate activation must not compromise audit independence for the same file) |
```

**Note on alternate selection**: The BSA Officer is chosen for Step 3 because pre-decision compliance review (ECOA, TILA, fair lending) is closest to the BSA Officer's regulatory analysis skillset, though it requires explicit CEO authorization for scope expansion beyond BSA/AML. The Internal Auditor is chosen for Step 6 because post-close quality review is naturally within audit scope, but independence must be maintained — the Internal Auditor cannot serve as both quality reviewer and subsequent auditor of the same loan file.

**Disposition**: `merged`
**Approval date**: 2026-04-12

---

### Delta DD-0001-03 — Add Exception Path `exception-compliance-vacancy`

**Maps to Finding**: cycle-0001-F01
**Target file**: `strategy/playbooks/workflow-b-loan-origination.md`
**Target section**: Exception Paths (after existing `exception-underwriting` section)
**Approver**: Compliance Officer (regulatory — compliance gate modification) + CEO (strategic — new exception path)

#### Before

No `exception-compliance-vacancy` path exists.

#### After

```markdown
### `exception-compliance-vacancy` — Compliance Officer Gate Unavailable

**Triggered when:** The primary Compliance Officer Gate agent at Step 3 or Step 6 is unavailable (departure, medical leave, extended absence) and no temporary reassignment has been made.

**Activation criteria:**
- Primary Compliance Officer is confirmed unavailable (not merely delayed)
- CEO has authorized alternate Gate activation via Escalation lane
- Alternate Gate agent has been briefed on scope and limitations

**Exception Step 1: Alternate Gate Activation (CEO, Escalation)**
CEO authorizes the alternate Gate agent to serve at the affected step(s). Authorization is time-limited (not to exceed 30 calendar days without board notification). CEO documents:
- Which steps the alternate is authorized for
- Scope limitations (e.g., BSA Officer at Step 3 may review ECOA and TILA but must escalate complex fair lending questions to outside compliance counsel)
- Review cadence: all alternate-gated files receive a retroactive review by the permanent or replacement Compliance Officer within 60 days

**Exception Step 2: Alternate Gate Execution**
The alternate Gate agent reviews the file under the same gate criteria as the primary. Any finding the alternate is not confident evaluating is escalated to the CEO with a recommendation to engage outside compliance counsel.

**Exception Step 3: Retroactive Review**
When a permanent or replacement Compliance Officer is in place, all files gated by the alternate are reviewed retroactively. Any deficiency identified in the retroactive review is handled per the standard quality gate protocol (correction needed or material finding).

**Degraded-mode standard:**
- All alternate-gated files are flagged in the core system for retroactive review
- ECOA 30-day adverse action clocks are tracked normally — the alternate gate does not reset the clock
- This exception path does not apply to SAR filing obligations or BSA/AML determinations, which remain with the BSA Officer under their own authority lane regardless of Compliance Officer availability
```

**Disposition**: `merged`
**Approval date**: 2026-04-12

---

### Delta DD-0001-04 — Cross-Workflow Alternate Gate Audit

**Maps to Finding**: cycle-0001-F01 (systemic extension)
**Target file**: All 17 workflow playbooks (`strategy/playbooks/workflow-[a-q]-*.md`)
**Target section**: Step-Level Matrix in each playbook
**Approver**: CEO + Compliance Officer

**Description**: Audit every Gate cell across all 17 workflow Step-Level Matrices and either (a) name an alternate Gate agent or (b) document the step as a known SPOF. This Delta is too large for a single cycle — it touches 17 files and requires domain-specific alternate selection for each.

**Disposition**: `deferred-to-roadmap`
**ROADMAP entry**: "Cross-Workflow Alternate Gate Audit — review every Gate cell in workflows A–Q; name alternates per the Alternate Gate Agent convention added in DD-0001-01; document any steps where no qualified alternate exists as known SPOFs. Triggered by Think Tank cycle-0001 Finding F01. Acceptance criteria: every Gate cell across all 17 playbooks either names an alternate or documents SPOF status."

---

## Deferred Items

| Delta ID | Finding | Target | Disposition | ROADMAP Entry |
|----------|---------|--------|-------------|---------------|
| DD-0001-04 | cycle-0001-F01 | All 17 workflow playbooks | deferred-to-roadmap | Cross-Workflow Alternate Gate Audit |

**Note on F02 (stale pre-qualification) and F03 (systemic advisory escalation)**: These findings are real structural gaps but are lower severity than F01. Rather than draft Deltas in this cycle, they are logged here for the next cycle that targets Workflow B (after rotation completes). When Workflow B comes up again, cycle findings F02 and F03 should be the first items the Facilitator reviews in Phase 1 (Observe).

---

## Cycle Retrospective

### What this cycle revealed about Think Tank methodology

1. **The 4-phase structure worked as designed.** The baseline run was clean, confirming that the SPOF would not have been found without stress. The stress exposed the gap. The Extract produced specific diffs against specific files. The mechanical chain (Finding → Delta → Disposition → File) held.

2. **Two stresses was the right number.** ST-01 (rate shock) and ST-08 (key-staff departure) were diagnostically separable: rate-related breakages at Steps 2/4 vs. vacancy-related breakages at Steps 3/6. The compound effect (volume × vacancy) was observable as an interaction, not a confound.

3. **Pre-registration added real value.** The Stress Designer predicted 4 of 5 breakages. The one surprise (B2 — systemic advisory escalation gap) was the most structurally novel finding and would not have been identified as "surprise" without the pre-registration record.

4. **F04 (cascading blockage) as operator error was the right call.** The Architect correctly identified it as a symptom of F01, not a separate root cause. One Delta per root cause, not per symptom, is the right discipline.

5. **F02 and F03 were deliberately not promoted to Deltas in this cycle.** The Facilitator chose to focus the cycle's merge budget on the highest-severity finding (F01) rather than spread across three lower-severity Deltas. This is a judgment call — future cycles may handle it differently — but for an inaugural cycle, landing three merged Deltas on one root cause plus a ROADMAP deferral is a strong outcome.

6. **The worked example should NOT become the template for cycle severity.** Not every cycle will produce a critical SPOF. Some cycles will find only minor structural gaps or operator-error patterns. That is fine — the methodology should not create pressure to find dramatic breakages.

### Methodology improvements for future cycles

- **Add a "prior cycle findings" review to Phase 1 (Observe)** — when a workflow comes back on rotation, the Facilitator should check whether previous cycle findings (like F02 and F03) have been addressed or are still open. This is noted in the methodology doc but should be made explicit in the runbook's Phase 1 activation prompt.
- **Consider adding the "Alternate Gate" column to the Step-Level Matrix template** — now that DD-0001-01 has merged, new playbooks should include it from the start.

---

*Cycle 0001 complete. Three merged deltas, one deferred ROADMAP item, one surprise finding, zero new agents proposed. The framework is structurally stronger than it was before the cycle ran.*
