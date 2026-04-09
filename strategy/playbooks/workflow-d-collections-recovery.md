# Workflow D Playbook — Collections & Recovery

> **Cycle Time**: Ongoing | **Agents**: 6 | **Gate Keepers**: Collections Specialist + Compliance Officer

---

## Objective

Resolve delinquency at the earliest possible stage through member-centered outreach that protects both the member's financial health and the credit union's asset quality. Every collections interaction must reflect cooperative values — people helping people through hardship — while maintaining FDCPA-compliant communications and maximizing recovery. Preserve the member relationship wherever possible.

## Pre-Conditions

- [ ] Account is 5+ days past due (automated alert triggers Collections Specialist review)
- [ ] Member's full account history accessible (all products, relationship tenure, prior hardship history)
- [ ] Current workout authority matrix is in effect (approved by CFO/CEO)
- [ ] FDCPA / Fair Debt Collection requirements briefed for all agents

## Regulatory Framework

| Regulation | Requirement | Enforcement Agent |
|-----------|-------------|-------------------|
| FDCPA (Fair Debt Collection Practices Act) | Governs communication methods, frequency, and content | Compliance Officer |
| FCRA (Fair Credit Reporting Act) | Accurate and timely credit bureau reporting | Collections Specialist |
| ECOA / Reg B | Non-discrimination in workout decisions | Compliance Officer |
| Servicemembers Civil Relief Act (SCRA) | Rate cap and foreclosure protections for active duty military | Compliance Officer |
| State foreclosure and repossession laws | Vary by state — self-help repossession, notice requirements | Compliance Officer |

**FDCPA Key Rules (apply to third-party collectors; credit unions are generally original creditors but should adopt as best practice):**
- No contact before 8:00 AM or after 9:00 PM in member's time zone
- Cease and desist letter honored within 5 business days
- No harassment, false statements, or unfair practices
- Dispute rights notice in first written communication

---

## Agent Activation Sequence by Stage

### Stage 1: Early Delinquency (1-29 Days Past Due)

```
Activate Collections Specialist for early delinquency intervention on account [#].

Member: [Name] | Loan #: [Number] | Days past due: [N]
Product: [Auto / Personal / HELOC / Mortgage / Visa]
Amount past due: $[Amount] | Original balance: $[Amount]

Stage 1 objectives:
1. Make first contact by Day 5 — phone call preferred
2. Cure delinquency before 30-day credit bureau reporting
3. Identify any hardship — trigger Financial Advisor if hardship indicators present

Outreach sequence:
Day 5:   Automated payment reminder (text + email)
Day 7:   First live call attempt (leave message if no answer — FDCPA compliant)
Day 10:  Second live call attempt — different time of day
Day 15:  Third call attempt + written notice to address of record
Day 20:  Final Stage 1 outreach — attempt alternate contact (employer, cell vs. home)
Day 25:  Account reviewed — continue to Stage 2 if no cure

Call script (live contact):
"Hello, this is [name] calling from [Credit Union Name]. I'm calling regarding your [loan type]
account. We want to help you get current before this affects your credit. Can we discuss what's
going on and find a solution that works for you?"

Documentation required for every contact attempt:
- Date and time of attempt
- Method used (phone, text, email, mail)
- Result (spoke, left message, no answer, wrong number, mailbox full)
- Summary of any conversation
```

#### Financial Advisor Referral (if hardship identified)

```
Activate Financial Advisor for hardship assessment — TRIGGERED from Collections Stage 1.

Member: [Name] | Referred by: Collections Specialist | Date: [Date]

Hardship indicators that trigger referral:
- [ ] Member says they lost their job or had income reduction
- [ ] Member mentions medical event, divorce, or death in family
- [ ] Multiple products delinquent simultaneously
- [ ] Member references payday loans or inability to cover basic expenses
- [ ] Member expresses intent to surrender collateral voluntarily

Financial Advisor deliverables:
1. 30-minute hardship assessment conversation (phone or in-person)
2. Review budget: income, fixed expenses, variable expenses
3. Identify non-credit union debts competing for payment
4. Prepare options summary: CU workout options, community resources, nonprofit credit counseling referral
5. Handoff to Loan Officer if modification is appropriate

While Financial Advisor is engaged:
- Collections Specialist PAUSES escalated outreach (still logs required contacts)
- Loan Officer on standby for modification evaluation
```

---

### Stage 2: 30-59 Days Past Due

```
Activate Collections Specialist for Stage 2 escalation on account [#].

Member: [Name] | Loan #: [Number] | Days past due: [30-59]
Amount past due: $[Amount]

Stage 2 objectives:
1. Establish payment arrangement or formal workout agreement
2. Prevent 60-day delinquency reporting (affects member credit more severely)
3. Protect credit union from additional loss exposure

Escalated outreach:
- Phone calls: minimum 3 attempts per week (honor time-of-day rules)
- Written notice: 30-day formal demand letter (professional, not threatening)
- Consider in-person branch visit invitation if member is local

Workout options available at Stage 2 (Loan Officer to evaluate):
- Payment deferral: Move 1-2 payments to end of loan
- Payment arrangement: Reduced payment for 2-3 months
- Rate reduction: Temporary reduction to improve affordability
- Term extension: Extend maturity to reduce payment

Compliance Officer verification at Stage 2:
- All written communications reviewed for FDCPA compliance before mailing
- Confirm no prohibited collection practices have occurred
- SCRA screen: Is member active-duty military? (rate cap may apply)

Documentation:
- Every contact attempt logged with date, time, method, result
- Any conversation with member summarized including member's stated reason for delinquency
- Any workout offer made — even if declined
```

#### Loan Officer — Workout Evaluation

```
Activate Loan Officer for loan modification or workout evaluation.

Loan #: [Number] | Stage: 2 (30-59 DPD) | Referral from: Collections Specialist

Workout analysis:
1. Review current loan terms (rate, balance, payment, maturity)
2. Review member's stated hardship and income situation
3. Identify feasible workout options within current lending authority
4. Calculate modified payment under each option
5. Select recommended option; obtain approval per delegated authority
6. Present to member — focus on which option actually solves the problem

Workout documentation requirements:
- Written modification agreement signed by member before implementation
- New payment plan confirmation letter
- Core system updated to reflect modified terms
- Collections Specialist notified of workout implementation
```

---

### Stage 3: 60-89 Days Past Due

```
Activate Collections Specialist for Stage 3 escalation on account [#].

Member: [Name] | Loan #: [Number] | Days past due: [60-89]
Amount past due: $[Amount] | Outstanding balance: $[Amount]

Stage 3 objectives:
1. Execute workout agreement or initiate legal/repossession process
2. Protect credit union from charge-off loss
3. Maintain FDCPA-compliant communications throughout

Escalated actions:
- Formal workout proposal: Loan Officer prepares specific written proposal
- Deferral / extension / rate reduction offer in writing
- If secured loan and no resolution: Begin repossession / legal preparation
  (Obtain supervisor approval before initiating)

Risk Manager engagement:
- Loan review for specific reserve allocation
- Loss probability assessment: 0-100% scale
- Recommendation: continue workout vs. accelerate vs. charge-off timeline

Compliance Officer:
- Review all communications for FDCPA compliance
- Confirm proper notices delivered before any repossession action
- Verify state-specific repossession notice requirements (if applicable)
- SCRA confirmation for military members (NO self-help repossession without court order)
```

---

### Stage 4: 90+ Days Past Due — Loss Mitigation

```
Activate Risk Manager for charge-off evaluation on loan [#].

Loan #: [Number] | Days past due: 90+ | Outstanding balance: $[Amount]
All prior workout attempts: [Summary]

Risk Manager deliverables:
1. Formal loan review: probability of full recovery
2. Charge-off recommendation if loss is probable and collection efforts are exhausted
3. Reserve adjustment: increase ALLL allocation to reflect estimated loss
4. Recommendation: continue collections / accelerate / charge-off

Collections Specialist — Stage 4 actions:
1. Final demand letter: Formal acceleration notice (secured loans)
2. Coordinate collateral repossession (auto) with licensed repossession firm
   — CONFIRM no SCRA protection before repossession
   — CONFIRM proper state notice requirements met
3. Refer real estate to foreclosure attorney (mortgage — 90+ DPD per investor guidelines)
4. Continue negotiating settlement — member dignity preserved throughout

Charge-off process (Risk Manager + CFO):
- Charge-off loans at 120 days DPD (or per NCUA guidance for specific product types)
- Mortgage: 180 days DPD (or at time of foreclosure)
- Write-off requires CFO and CEO approval above threshold per policy
- NCUA Call Report: Charge-offs recorded in appropriate quarter
- ALLL update: Reserve released equal to charge-off amount
```

---

### Stage 5: Post-Charge-Off Recovery

```
Activate Collections Specialist for post-charge-off recovery on account [#].

Loan #: [Number] | Charge-off date: [Date] | Charged-off balance: $[Amount]
Account status: Charged off — recovery efforts continue

Recovery strategies:
1. Direct collection: Continue outreach (member may pay after charge-off)
2. Settlement negotiation: Accept lump sum less than full balance
   — Settlement authority requires CFO/CEO approval above threshold
   — 1099-C required if forgiven debt exceeds $600 (IRS requirement)
3. Third-party placement: Assign to collection agency or attorney (obtain Compliance Officer
   approval for third-party agreements — FDCPA extends to these parties)
4. Legal judgment: File suit for larger balances; obtain and execute judgment
5. Offset: Apply to share account balances (per account agreement authorization)

Credit bureau reporting post-charge-off:
- Continue reporting as charged off with balance
- Report payments received post-charge-off (reduce reported balance)
- FCRA: Maximum 7 years from date of first delinquency (not charge-off date)
- Debt settlement: Report as "settled" with $0 balance after 1099-C

Risk Manager monthly reporting:
- Total charged-off balance
- Recovery rate on prior-year charge-offs
- Recovery rate by product type
- NCUA Call Report accuracy (charged-off loans removed from loan portfolio)
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | First contact attempt ≤5 business days from due date | 100% | Contact log with timestamp | ☐ |
| 2 | All collection communications FDCPA-compliant | 100% | Communication log reviewed by Compliance Officer | ☐ |
| 3 | Credit bureau reporting accurate and timely | Monthly — 100% | Data furnishing verification | ☐ |
| 4 | Workout agreements documented and signed | 100% of workouts | Signed modification agreement | ☐ |
| 5 | SCRA screen completed before repossession | 100% | SCRA verification document | ☐ |
| 6 | Charge-off recommendations reviewed by Risk Manager | 100% | Risk Manager sign-off | ☐ |
| 7 | NCUA delinquency and charge-off reporting accurate | 100% — quarterly | Call Report reconciliation | ☐ |
| 8 | 1099-C issued for forgiven debt ≥$600 | 100% | IRS filing confirmation | ☐ |

**Gate Keepers**: Collections Specialist (process compliance) + Compliance Officer (regulatory compliance) — dual sign-off at each stage advancement

**Gate Decision**:
- **CONTINUE**: Stage-appropriate actions completed; advance to next stage if no resolution
- **WORKOUT ACTIVE**: Loan Officer modification in place; pause escalated collection
- **CHARGE-OFF**: Risk Manager and CFO approve; remove from delinquency; begin recovery
- **LEGAL ACTION**: Compliance Officer approves process; attorney engaged per policy

---

## Step-Level Matrix

| Step | Agent | Mode | Authority |
|------|-------|------|-----------|
| 1. Early Intervention (1–29 DPD) | Collections Specialist | Execute | Operational |
| 2. Hardship Screening | Financial Advisor | Execute | Operational |
| 2. Hardship Screening | Collections Specialist | Advise | Credit/Financial |
| 3. Escalated Outreach (30–59 DPD) | Collections Specialist | Execute | Operational |
| 3. Escalated Outreach (30–59 DPD) | Compliance Officer | Advise | Compliance/Regulatory + Escalation |
| 4. Workout Evaluation | Loan Officer | Execute | Credit/Financial |
| 4. Workout Evaluation | Risk Manager | Advise | Credit/Financial + Escalation |
| 4. Workout Evaluation | Collections Specialist | Advise | Credit/Financial |
| 5. Compliance — FDCPA Review | Compliance Officer | Gate | Compliance/Regulatory + Escalation |

**Mode key:** Execute — owns the deliverable, one per step; Advise — contributes expertise, workflow does not wait; Gate — veto authority, workflow stops until cleared.

**Authority key:** Operational — process execution; Credit/Financial — lending and financial judgments; Compliance/Regulatory — regulatory determinations; Escalation — stop/elevate decisions.

---

## Financial Hardship Member Referral Protocol

When any agent identifies hardship at any workflow stage, complete and route this form:

```markdown
## Member Hardship Referral — CANVAS

**Initiating Agent**: [Agent Name] | **Workflow**: [A through G]
**Member**: [Member #] | **Date**: [Date]
**Products affected**: [List all delinquent or at-risk accounts]

### Hardship Indicators Observed
- [ ] Job loss / income reduction (stated or inferred from statements)
- [ ] Medical event (member mentioned or evidence in statements)
- [ ] Divorce / separation
- [ ] Death in family
- [ ] Multiple products delinquent simultaneously
- [ ] Payday loan usage in statements
- [ ] Request to close accounts or withdraw retirement funds early
- [ ] Other: [Description]

### Immediate Actions Taken
- [ ] Member referred to Financial Advisor — appointment: [Date/Time or TBD]
- [ ] Collections outreach paused pending Financial Advisor assessment
- [ ] Loan Officer notified — modification evaluation in queue
- [ ] Community resource information provided (nonprofit credit counseling, food bank, etc.)

### Workflow Impact
- [ ] Loan decision on hold pending assessment
- [ ] Collections escalation paused
- [ ] Normal workflow continues — referral as value-add
```

---

## Collections Performance Metrics

| Metric | Target | Measurement Frequency |
|--------|--------|-----------------------|
| First contact rate (≤5 DPD) | ≥ 90% | Weekly |
| 30+ day delinquency ratio | ≤ peer average | Monthly |
| 60+ day delinquency ratio | ≤ peer average | Monthly |
| Net charge-off rate | ≤ peer average | Monthly (NCUA Call Report) |
| Recovery rate (prior year charge-offs) | ≥ 25% on unsecured | Annual |
| Workout success rate | ≥ 60% of workouts remain current 6 months | Quarterly |
| FDCPA compliance violations | Zero | Continuous |

---

*Workflow D is complete (for a specific account) when the delinquency is cured, a sustainable workout agreement is in place, or a charge-off has been approved and recorded with all required documentation. Recovery efforts continue post-charge-off until the statute of limitations or write-down below threshold.*
