# Workflow B Playbook — Loan Origination

> **Cycle Time**: 24 hours (consumer) – 5 business days (complex) | **Agents**: 6 | **Gate Keepers**: Loan Officer + Compliance Officer

---

## Objective

Originate quality consumer loans through a structured credit analysis process that serves member financial wellbeing while maintaining sound asset quality — with full ECOA, TILA, and fair lending compliance at every step. Every funded loan must be documentable and defensible.

## Pre-Conditions

- [ ] Member is active (or new membership application in progress)
- [ ] CIP complete (for new members — coordinate with Workflow A)
- [ ] Loan product and rate matrix current (CFO rate sheet in effect)

## Agent Activation Sequence

### Step 1: Application and Pre-Qualification (Loan Officer)

```
Activate Loan Officer for loan application intake on member [#].

Member: [Name] | Account #: [Number] | Member since: [Date]
Product requested: [Auto / Personal / HELOC / Home Equity / Other]
Amount: $[Amount] | Purpose: [Description] | Term: [Months]

Deliverables required:
1. Conduct member interview: purpose, amount, timeline, collateral
2. Pre-qualify verbally using current rate/product matrix — confirm eligibility
3. Obtain signed written credit authorization (REQUIRED before credit pull)
4. Pull tri-merge credit report; conduct immediate fraud screen
5. Request income documentation per product matrix
6. Log application date in core system (starts ECOA 30-day adverse action clock)

Fair lending non-negotiables:
- NEVER pre-screen informally in a way that discourages protected-class members from applying
- Log every application regardless of how the member was pre-qualified verbally
- Obtain credit authorization BEFORE pulling credit — no exceptions
- Examination scope: NCUA examines for disparate treatment (intentional discrimination) per Letter 25-CU-04 (Sep 2025). ECOA/FHA statutory protections — including disparate impact theories — remain in effect for private litigation and other enforcement channels.

Timeline: Same day application intake; credit pull within 24 hours
```

### Step 2: Underwriting Analysis (Loan Officer)

```
Activate Loan Officer for credit underwriting analysis.

Application #: [Number] | Member: [Name]
Input: Signed credit authorization, tri-merge credit report, income documents

Deliverables required:
1. Complete loan analysis worksheet:
   - Debt-to-income ratio (all monthly obligations / gross monthly income)
   - Loan-to-value ratio (loan amount / collateral value — secured loans)
   - Payment-to-income ratio (proposed payment / gross income)
2. Identify any policy exceptions; document compensating factors for each
3. Apply risk-based pricing matrix; assign credit grade
4. Prepare recommendation: Approve / Counter-Offer / Decline
5. Obtain approval authority sign-off per delegated lending limits

Exception documentation:
- Every policy exception requires written compensating factors
- Every exception above Loan Officer limits requires supervisor or credit committee approval
- Undocumented exceptions are policy violations — not permissible even for good members

Timeline: 4-8 hours (consumer); 1-2 business days (complex/exception)
```

### Step 3: Compliance Review (Compliance Officer)

```
Activate Compliance Officer for pre-decision compliance review.

Application #: [Number] | Decision: [Approve / Counter / Decline]
Input: Loan analysis worksheet, income documents, proposed terms

Deliverables required:
1. ECOA verification: Confirm no prohibited basis was considered
2. Application date logged: Confirm 30-day adverse action clock is tracked
3. TILA/Reg Z: Verify all required disclosures are prepared accurately
4. HMDA: Flag any HMDA-reportable applications (mortgage-related) for LAR recording
5. Fair lending screen: If decline or counter-offer — confirm reason codes are specific, accurate, and non-discriminatory

Compliance flags:
- If ECOA concern identified → STOP; do not fund; escalate to Compliance Officer lead
- If adverse action: Issue notice within 30 days of application date — this is non-negotiable
- HMDA: Ethnicity, race, sex data collected regardless of decision; member refusal is a valid response

Timeline: 2-4 hours (same day for consumer decisions)
```

### Step 4: Decision Communication (Loan Officer)

```
Activate Loan Officer for decision communication to member.

Application #: [Number] | Decision: [Approve / Counter / Decline]

Decision communication protocol:
APPROVE:
- Call member to communicate approval; confirm loan amount, rate, term, payment
- Schedule closing appointment (in-branch or e-sign)
- Send approval letter/email with terms

COUNTER-OFFER:
- Call member to explain what alternative structure is available and why
- Give member 30 days to accept counter-offer before application expires
- Document call attempt and outcome

DECLINE:
- Call member with primary reason(s) — in plain English, not regulatory jargon
- Discuss what would need to change and realistic timeline for improvement
- Issue written Adverse Action Notice within 30 days — REQUIRED by ECOA
- Do NOT leave a decline on voicemail without a callback invitation
- Offer to schedule 90-day action plan review (Financial Advisor referral if applicable)

Documentation:
- Log call attempt date/time even if unable to reach member
- Adverse action notice must be issued regardless of whether member was reached
```

### Step 5: Closing and Funding (Loan Officer)

```
Activate Loan Officer for loan closing and funding.

Pre-conditions:
- [ ] All approval conditions satisfied and documented
- [ ] Final income verification confirmed (within 30 days for employment-based income)
- [ ] Insurance confirmed if required (GAP, MPI, property)
- [ ] Rate lock confirmed (applicable to fixed-rate real estate only)

Closing deliverables:
1. Prepare loan package: Note, TILA disclosure, security agreement
2. Obtain member signatures (wet or e-sign per policy)
3. Deliver all required TILA/Truth-in-Lending disclosures
4. Disburse funds per disbursement instructions
5. Perfect collateral interest:
   - Auto: Hold title / submit to DMV
   - Real estate: Record deed of trust / mortgage
6. Board loan to core system: rate, term, payment, collateral code

Core system boarding accuracy checklist:
- [ ] Interest rate matches approved terms
- [ ] Payment amount correct
- [ ] Maturity date correct
- [ ] Collateral code matches actual collateral
- [ ] First payment date communicated to member

Timeline: Same day (simple consumer); 3-5 days (exception or complex collateral)
```

### Step 6: Post-Close Quality Check (Compliance Officer)

```
Activate Compliance Officer for post-close quality review.

Loan #: [Number] | Member: [Name] | Funded: [Date]

Review:
1. Adverse Action Notice issued on time (if applicable) — within 30 days of application
2. TILA disclosure accuracy: APR, finance charge, total payments — verify against funded terms
3. HMDA data recorded (if mortgage-related inquiry — any dwelling-secured application)
4. Lien confirmation received (secured loans — title/DMV/recording confirmation)
5. File archived per records retention schedule

Red flags to escalate:
- Missing adverse action notice on any decline → P1 compliance finding
- TILA disclosure with material error → corrected disclosure to member required
- Undisclosed HMDA-reportable loan → immediate correction to LAR
```

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | Signed credit authorization before credit pull | 100% — no exceptions | Signed authorization in file | ☐ |
| 2 | Loan analysis worksheet complete | 100% of approvals | Completed worksheet with DTI/LTV | ☐ |
| 3 | Policy exceptions documented with compensating factors | 100% of exceptions | Exception form with approval | ☐ |
| 4 | TILA disclosure accurate and member-acknowledged | 100% | Signed TILA in file | ☐ |
| 5 | Adverse action notice issued on time (declines/counters) | 100%, ≤30 days of application | Notice copy with delivery date | ☐ |
| 6 | Lien perfected for secured loans | 100% | Title/lien confirmation | ☐ |
| 7 | Core system boarding verified | 100% | Boarding confirmation checklist | ☐ |

**Gate Keepers**: Loan Officer (credit quality) + Compliance Officer (regulatory compliance) — dual sign-off required

**Gate Decision**:
- **COMPLETE**: All criteria met — loan file is examination-ready
- **CORRECTION NEEDED**: Specific items identified — correct within 1 business day
- **MATERIAL FINDING**: Compliance violation identified — escalate to Compliance Officer + CEO

## Step-Level Matrix

| Step | Agent | Mode | Authority |
|------|-------|------|-----------|
| 1. Application & Pre-Qualification | Loan Officer | Execute | Operational |
| 1. Application & Pre-Qualification | Member Services Representative | Advise | Operational |
| 2. Underwriting Analysis | Loan Officer | Execute | Credit/Financial |
| 2. Underwriting Analysis | Risk Manager | Advise | Credit/Financial + Escalation |
| 3. Compliance Review | Compliance Officer | Gate | Compliance/Regulatory + Escalation |
| 4. Decision Communication | Loan Officer | Execute | Credit/Financial |
| 4. Decision Communication | Financial Advisor | Advise | Operational |
| 5. Closing & Funding | Loan Officer | Execute | Operational |
| 6. Post-Close Quality Check | Compliance Officer | Gate | Compliance/Regulatory + Escalation |

**Mode key:** Execute — owns the deliverable, one per step; Advise — contributes expertise, workflow does not wait; Gate — veto authority, workflow stops until cleared.

**Authority key:** Operational — process execution; Credit/Financial — lending and financial judgments; Compliance/Regulatory — regulatory determinations; Escalation — stop/elevate decisions.

---

## Common Compliance Risks

| Risk | Prevention | If Identified |
|------|-----------|---------------|
| Adverse action notice not issued | Track 30-day clock from application date | Issue immediately; log late notice | 
| Credit pull without authorization | Require signed form BEFORE pull | Cannot retroactively cure — document and escalate |
| HMDA not recorded | Flag all dwelling-secured applications at intake | Correct LAR before annual submission |
| Prohibited basis in decision | Train on ECOA factors; independent review of declines | Stop decision; Compliance Officer review |
| Income not verified | Income verification required for all applications | Re-verify; do not fund unverified income |

---

## Exception Paths

### `exception-underwriting` — Post-Close Quality Gate Failure

**Triggered when:** The Loan Origination Quality Gate fails after one retry attempt. This indicates a deficiency in the completed loan file that the post-close review could not clear.

**Retry behavior:** The Quality Gate is a routine gate. On first failure, the gate evaluator receives the specific finding and re-evaluates. If still failing after one retry, the exception path activates.

**Contrast with Pre-Decision Compliance Gate:** The Pre-Decision Compliance Gate is a regulatory gate (zero retries). If that gate fails, the workflow pauses immediately — no exception path. Exception underwriting only applies to post-close quality deficiencies.

---

#### Exception Step 1: Exception Underwriting Review
**Agent:** Loan Underwriting Analyst (Execute, Credit/Financial authority)
**Handoff to:** Risk Manager

Review all gate findings from the failed post-close quality check. For each deficiency:

1. **Identify by regulation** — cite the specific rule (e.g., ECOA Reg B §202.9 — adverse action notice; TILA Reg Z §1026.23 — right of rescission notice)
2. **Classify as curable or uncurable:**
   - **Curable:** TILA inaccuracy, incomplete analysis worksheet, missing lien confirmation — can be remediated with corrective action
   - **Uncurable:** Adverse action notice not issued within 30 days of application date, credit pull without authorization — the violation is already a fact
3. **Prepare exception request** with documented compensating factors for curable items
4. **Flag uncurable items** for immediate Compliance Officer and CEO notification — these require regulatory counsel involvement

The Loan Underwriting Analyst does not make the final disposition. That is the Risk Manager's authority.

**Deliverable:** Exception underwriting memorandum with each finding classified, compensating factors documented for curable items, and uncurable items flagged with regulatory citation.

---

#### Exception Step 2: Risk Manager Exception Decision
**Agent:** Risk Manager (Gate, Credit/Financial + Escalation authority)

Review the exception underwriting memorandum. Each finding requires an individual disposition:

| Disposition | When to Apply | Requirements |
|-------------|--------------|--------------|
| **Approve with conditions** | Curable deficiency with documented compensating factors | Specific corrective action, responsible party, and completion date |
| **Require corrective action** | Curable deficiency that needs remediation before approval | Name the action required, the party responsible, and the deadline |
| **Escalate to CEO** | Uncurable finding, systemic issue, or regulatory exposure beyond Risk Manager authority | Written escalation memo with regulatory citation and recommended response |

**No bundled approvals.** Each finding is dispositioned individually. A memo that approves "all curable items" without specifying them is not a valid disposition.

**Gate:** Exception Underwriting Gate (routine, fallback: pause)
- Pass: All findings dispositioned. Curable items have remediation plans with owners. Uncurable items escalated to CEO.
- Fail: Any finding without a documented disposition — workflow pauses for manual review.

---

#### Degraded-Mode Completion Standard for Loan Origination

A loan origination that routes through exception underwriting is still a loan origination. The minimum viable completion requires:

- All post-close deficiencies documented with regulatory citations
- Curable deficiencies: remediation plan with named owner and completion date
- Uncurable deficiencies: CEO notification with written escalation memo
- Adverse action notice obligations: tracked against original 30-day clock (exception path does not reset the clock)
- Exception underwriting decision: signed by Risk Manager with authority documentation

A loan file that exits exception underwriting with every finding dispositioned is a documentable, defensible file. A loan file that exits with unresolved findings is not.

---

*Workflow B is complete when Loan Officer and Compliance Officer both confirm the quality gate, the funded loan is boarding-verified, and all regulatory documentation is archived.*
