# CANVAS Handoff Templates

> Standardized templates for every type of agent-to-agent handoff in the CANVAS pipeline. Consistent handoffs prevent context loss — the leading cause of compliance gaps and member experience failures at process boundaries.

---

## 1. Standard CANVAS Handoff

Use for any agent-to-agent work transfer within any workflow.

```markdown
## CANVAS Handoff Document

### Metadata
| Field | Value |
|-------|-------|
| **From** | [Agent Name] ([Function]) |
| **To** | [Agent Name] ([Function]) |
| **Workflow** | [Workflow A–G / Cross-workflow] |
| **Member / Account Reference** | [Member # / Account # / Loan #] |
| **Priority** | [Urgent / Standard / Routine] |
| **Timestamp** | [YYYY-MM-DDTHH:MM:SSZ] |

### Member Context
- **Member background**: [Relationship tenure, products held, prior interactions, prior hardship]
- **Current state**: [What has been completed in this workflow so far]
- **Relevant files**: [Documents / records the receiving agent needs]
- **Compliance flags**: [Any regulatory timers or flags currently active]

### Deliverable Request
- **What is needed**: [Specific, measurable deliverable]
- **Acceptance criteria**:
  - [ ] [Criterion 1 — measurable]
  - [ ] [Criterion 2 — measurable]
  - [ ] [Criterion 3 — measurable]
- **Regulatory deadline**: [Any regulatory clock — e.g., adverse action 30-day, Reg E 45-day]
- **Reference materials**: [Policy, rate sheet, guidelines applicable]

### Quality Expectations
- **Must pass**: [Specific compliance or quality criteria]
- **Evidence required**: [Documentation required for file]
- **Handoff to next**: [Who receives the output next and in what format]
```

---

## 2. Onboarding → Financial Advisor Handoff

Use after account opening to route new member to needs discovery.

```markdown
## Onboarding → Financial Advisor Handoff

**Member**: [Name] | **Account #**: [Number] | **Member since**: [Date]
**Eligibility basis**: [Employment / Family / Association / Geography — specific basis]
**Products opened today**: [List all accounts and products opened]
**Primary goal stated**: [Quote or close paraphrase from member]
**Key financial observations**: [Debts mentioned, banking relationships, life events disclosed]

### Immediate Referral Opportunities (within 90 days)
- [ ] Auto loan — member mentioned [detail, timeframe]
- [ ] Checking account / direct deposit — currently at [institution]
- [ ] Credit card — carrying balance at [rate] elsewhere
- [ ] Debt consolidation — [existing obligations noted]
- [ ] Other: [Description]

### Future Referral Opportunities (90 days – 2 years)
- [ ] Mortgage — renting, interested in [timeframe]
- [ ] Retirement planning — mentioned [goal]
- [ ] Education savings — [detail]
- [ ] Business banking — [detail if applicable]

### Follow-Up
- **Scheduled appointment**: [Date/Time] — OR — None: enrolled in 30-day welcome sequence
- **Marketing segment tags**: [List segments applied]

### CIP / Compliance Status
- CIP complete: ☑ YES — verified by BSA Officer on [date]
- OFAC screen: ☑ CLEAR — documented on [date]
- Required disclosures: ☑ ALL DELIVERED — acknowledged by member
```

---

## 3. Onboarding → Loan Origination Handoff

Use when new member indicates loan interest during onboarding.

```markdown
## Onboarding → Loan Origination Handoff

**Member**: [Name] | **Account #**: [Number] | **Member since**: [Date]
**Loan inquiry**: [Product, amount, purpose — as stated by member]
**Pre-qualification discussed**: [Yes / No — brief summary of verbal discussion if yes]
**Income disclosed**: [Employer, stated income, type — DO NOT verify yet; this is member-stated]
**Collateral discussed**: [Vehicle, property, etc. if applicable]

### Compliance Status
- Credit authorization: NOT YET OBTAINED — Loan Officer MUST obtain before credit pull
- CIP status: COMPLETE — BSA Officer verified on [date]
- OFAC screen: CLEAR — documented on [date]

### Notes
[Any income or collateral information member volunteered that could accelerate underwriting]

### Next Step
Loan Officer contacts member within [1 business day] to begin Workflow B.
```

---

## 4. Loan Origination → Collections Handoff

Use when a funded loan triggers early delinquency monitoring.

```markdown
## Loan Origination → Collections Handoff

**Member**: [Name] | **Loan #**: [Number] | **Funded**: [Date]
**Product**: [Auto / Personal / HELOC / Visa / Other]
**Original balance**: $[Amount] | **Rate**: [X]% | **Payment**: $[Amount] / [month]
**First payment due**: [Date]
**Collateral**: [Description, if secured]

### File Status
- Loan analysis complete: ☑ YES
- TILA disclosure delivered: ☑ YES — [date]
- Lien perfected: [YES / N/A — confirmation reference]
- Core system boarding verified: ☑ YES

### Collections Monitoring Triggers
- Delinquency alert threshold: 5 days past due
- Risk Manager notification: 90+ days past due
- SCRA flag: [YES / NO — active-duty military verification]

### Notes for Collections
[Any known hardship, payment plan discussions, or member circumstances disclosed at closing]
```

---

## 5. Collections → Financial Advisor — Member Hardship Referral

Use when any agent identifies member financial distress at any workflow stage.

```markdown
## Member Hardship Referral — CANVAS

**Initiating Agent**: [Agent Name] | **Workflow**: [A through G]
**Member**: [Name] | **Member #**: [Number] | **Date**: [Date]
**Products affected**: [List all delinquent or at-risk accounts]

### Hardship Indicators Observed
- [ ] Job loss / income reduction (stated or inferred from statements)
- [ ] Medical event (member mentioned or evidence in statements)
- [ ] Divorce / separation
- [ ] Death in family
- [ ] Multiple products delinquent simultaneously
- [ ] Payday loan usage detected in bank statements
- [ ] Request to close accounts or withdraw retirement funds early
- [ ] Member expressed intent to surrender collateral
- [ ] Other: [Description]

### Immediate Actions Taken
- [ ] Member referred to Financial Advisor — appointment: [Date/Time or TBD]
- [ ] Collections outreach paused pending Financial Advisor assessment
- [ ] Loan Officer notified — modification evaluation in queue
- [ ] Community resources shared: [nonprofit credit counseling, food bank, etc.]

### Workflow Impact
- [ ] Loan decision on hold pending hardship review
- [ ] Collections escalation paused — Financial Advisor leading
- [ ] Normal workflow continues — referral made as value-add
```

---

## 6. Compliance Exception Report

Use when any agent identifies a compliance issue mid-workflow.

```markdown
## CANVAS Compliance Exception Report

**Workflow**: [A–G] | **Step**: [Step name] | **Date identified**: [Date]
**Identifying Agent**: [Agent Name]
**Severity**: [ ] STOP immediately  [ ] Correct before proceeding  [ ] Monitor and document

### Issue Identified
**Regulation**: [Citation — e.g., 12 CFR 1026.19(a)(1)(ii)]
**Requirement**: [What the regulation requires]
**Observation**: [What was found — specific and factual]
**Regulatory deadline affected**: [If any timer is at risk]
**Risk**: [Regulatory / legal / reputational exposure]

### Required Action
- [ ] Stop transaction — do not proceed until resolved
- [ ] Correct document or disclosure before proceeding
- [ ] Issue required notice to member within [X] days
- [ ] Escalate to Compliance Officer immediately

### Escalation
**Escalate to**: Compliance Officer (all cases) + CEO (if material)
**Timeline**: [Immediate / Same day / Within 24 hours]
**Compliance Officer response required by**: [Deadline]

### Resolution
**Resolution**: [Describe corrective action taken]
**Resolved by**: [Agent name] | **Date**: [Date]
**Evidence of resolution**: [What documentation is now in file]
**Compliance Officer sign-off**: [Name] | [Date]
```

---

## 7. Loan Decision → Compliance Officer Handoff

Use after every loan decision (approve, counter, or decline) for compliance verification.

```markdown
## Loan Decision → Compliance Officer Handoff

**Loan Officer**: [Name] | **Application #**: [Number] | **Date**: [Date]
**Member**: [Name] | **Account #**: [Number]
**Application date**: [Date] — ECOA 30-day adverse action clock started
**Decision**: [ ] Approve  [ ] Counter-offer  [ ] Decline
**Product**: [Auto / Personal / HELOC / Mortgage / Business]
**Amount**: $[Amount] | **Rate**: [X]% | **Term**: [N months]

### If Approve
- [ ] TILA disclosure prepared and accurate (APR, finance charge, total payments)
- [ ] Loan analysis worksheet complete with DTI and LTV documented
- [ ] All conditions satisfied (list): [Conditions]

### If Counter-Offer
- [ ] Reason for counter documented (not a prohibited basis)
- [ ] Counter terms documented: [Amount / Rate / Term]
- [ ] Member notified — 30-day acceptance window tracked

### If Decline
- [ ] Decline reasons documented — specific and non-discriminatory
- [ ] Adverse Action Notice prepared — MUST be issued within 30 days of [application date]
- [ ] Reason codes accurate and specific (not generic "credit")
- [ ] ECOA: No prohibited basis in decision

### HMDA
- [ ] HMDA-reportable: [YES / NO]
- [ ] If YES: LAR entry date / action taken code: [Code]
- [ ] Ethnicity, race, sex collected or documented as not provided

### Compliance Officer Review Required
Compliance Officer confirms the above before funding (approvals) or adverse action delivery (declines).
```

---

## 8. Collections → Risk Manager — Charge-Off Recommendation

Use at Stage 4 (90+ DPD) when charge-off is being evaluated.

```markdown
## Collections → Risk Manager Charge-Off Referral

**Collections Specialist**: [Name] | **Date**: [Date]
**Loan #**: [Number] | **Member**: [Name] | **Product**: [Type]
**Days past due**: [N] | **Outstanding balance**: $[Amount]
**Date of first delinquency**: [Date] — for FCRA 7-year reporting clock

### Collections History
| Stage | Date | Action | Result |
|-------|------|--------|--------|
| Stage 1 | [Date] | [Actions] | [Result] |
| Stage 2 | [Date] | [Actions] | [Result] |
| Stage 3 | [Date] | [Actions] | [Result] |
| Stage 4 | [Date] | [Actions] | [Result to date] |

### Workout Attempts
- Deferral offered: [YES / NO — if yes, member response]
- Extension offered: [YES / NO — if yes, member response]
- Rate reduction offered: [YES / NO — if yes, member response]
- Modification agreement executed: [YES / NO]
- Financial Advisor hardship assessment: [Completed / Not triggered]

### Collateral Status (secured loans)
- Collateral type: [Auto / Real estate / Other]
- Estimated current value: $[Amount]
- Lien position: [1st / 2nd]
- Repossession status: [Not initiated / In process / Completed]

### Risk Manager Deliverable Required
1. Formal loss probability assessment (0–100%)
2. Charge-off recommendation: [Recommend / Do not recommend]
3. ALLL reserve adjustment recommendation
4. NCUA Call Report coding for this loan

### Approval Authority
- Below $[X]: Collections Specialist + Compliance Officer
- Above $[X]: CFO + CEO approval required
```

---

## 9. CFO → Branch Manager — Rate Sheet Handoff

Use when ALCO approves rate changes requiring branch implementation.

```markdown
## CFO → Branch Manager Rate Sheet Update

**Issued by**: CFO | **Date of ALCO Decision**: [Date]
**Effective date**: [Date] | **Branch implementation by**: [Date — day before effective]

### Rate Changes
| Product | Current Rate | New Rate | Change | Advance Notice Delivered |
|---------|-------------|----------|--------|--------------------------|
| [Product] | [X]% | [X]% | [+/- bps] | [YES / NO — required if decrease] |

### Compliance Notes
- Rate DECREASE on non-maturity deposits: 30-calendar-day advance notice REQUIRED (Reg DD)
- Rate INCREASE: No advance notice required
- All Truth in Savings disclosures updated: [YES — date / NO — in process, ETA]
- Website rate posting updated: [YES / NO — ETA]

### Branch Actions Required
- [ ] Update branch rate boards and signage by [date]
- [ ] Brief all Member Services staff on new rates
- [ ] Ensure all staff can explain rate change rationale in member-friendly terms
- [ ] Update any printed rate materials — discard outdated versions

### ALCO Context for Staff
[One sentence explaining why rates are changing — for staff to communicate to members if asked]
```

---

## 10. Compliance Officer → CEO — Material Compliance Issue Escalation

Use when any material compliance issue, examination finding, or regulatory risk is identified.

```markdown
## Material Compliance Issue Escalation — CANVAS

**From**: Compliance Officer | **To**: Credit Union CEO
**Date**: [Date] | **Time**: [Time]
**Urgency**: [ ] Immediate (P0)  [ ] Same day (P1)  [ ] 24 hours (P2)

### Issue Summary
**Regulation**: [Citation]
**Issue description**: [Clear, factual description — 2-3 sentences]
**How discovered**: [Internal testing / Examination / Staff report / Transaction review]
**Date of occurrence (if known)**: [Date]
**Members affected**: [Number / None identified]
**Dollar amount at risk**: [If applicable]

### Regulatory Exposure
**Potential violation**: [Yes / Possible / Under evaluation]
**Examination risk**: [Likely MRA / Possible finding / Monitoring item]
**Required regulatory filing or disclosure**: [SAR / Voluntary disclosure / None]
**Legal counsel required**: [Yes / Evaluate / No]

### Immediate Actions Taken
- [ ] Transaction stopped
- [ ] Corrective disclosure issued to member(s)
- [ ] File documentation complete
- [ ] Legal counsel contacted

### CEO Decision Required
- [ ] Approve corrective action plan (details below)
- [ ] Authorize voluntary disclosure to NCUA (details below)
- [ ] Authorize legal counsel engagement
- [ ] Board notification at next board meeting

### Proposed Corrective Action
[Specific steps, owner, and timeline for remediation]

**Target resolution date**: [Date]
**Compliance Officer follow-up**: [Date — when Compliance Officer will report status to CEO]
```

---

## 11. CEO → Board — Examination Results Handoff

Use to present NCUA examination report to the Board of Directors.

```markdown
## CEO → Board — Examination Results Presentation

**Presented by**: Credit Union CEO
**Board meeting date**: [Date]
**Examination conducted**: [Month-Year] by NCUA [Region / State regulator]
**Examination type**: [Safety & Soundness / Consumer Compliance / BSA / Combined]

### Overall Result
**Rating**: [CAMEL / CAMELS composite — if disclosed]
**Number of MRAs (Material Recommendations for Action)**: [N]
**Number of recommendations (non-material)**: [N]

### MRA Summary
| # | Finding Area | Regulation | Corrective Action | Owner | Target Date |
|---|-------------|-----------|-------------------|-------|-------------|
| 1 | [Area] | [Cite] | [Action] | [Name] | [Date] |
| 2 | [Area] | [Cite] | [Action] | [Name] | [Date] |

### Recommendations Summary
| # | Recommendation | Management Response | Status |
|---|---------------|---------------------|--------|
| 1 | [Description] | [Response] | [In progress / Complete] |

### Management Strengths Noted by Examiners
[Any areas of positive examiner commentary]

### Board Actions Required
- [ ] Accept examination report — motion and vote
- [ ] Approve management response — motion and vote  
- [ ] Direct management to complete corrective actions by target dates
- [ ] Schedule follow-up review of MRA status at [future board meeting]

### Next Examination
Expected: [Month/Year — estimated based on exam cycle]
Compliance Officer will begin examination preparation: [Q3 / Date]
```

---

## Usage Guide

| Situation | Template to Use |
|-----------|----------------|
| Any agent-to-agent work transfer | Standard CANVAS Handoff (#1) |
| New member referred to Financial Advisor | Onboarding → Financial Advisor (#2) |
| New member with loan interest | Onboarding → Loan Origination (#3) |
| Funded loan entering monitoring | Loan Origination → Collections (#4) |
| Member hardship identified at any stage | Hardship Referral (#5) |
| Compliance issue identified mid-workflow | Compliance Exception Report (#6) |
| Loan decision (any outcome) | Loan Decision → Compliance Officer (#7) |
| 90+ DPD — charge-off consideration | Collections → Risk Manager (#8) |
| ALCO rate change to implement | CFO → Branch Manager Rate Sheet (#9) |
| Material compliance issue | Compliance Officer → CEO Escalation (#10) |
| Examination results to board | CEO → Board Presentation (#11) |
