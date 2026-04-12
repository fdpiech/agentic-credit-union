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
