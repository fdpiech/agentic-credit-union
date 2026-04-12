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
