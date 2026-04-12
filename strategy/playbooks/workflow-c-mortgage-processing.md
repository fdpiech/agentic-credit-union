# Workflow C Playbook — Mortgage Processing (TRID)

> **Cycle Time**: 15-45 days | **Agents**: 6 | **Gate Keepers**: Mortgage Loan Processor + Compliance Officer

---

## Objective

Process mortgage applications from application to closing with full TRID compliance, secondary market readiness, and a closing experience the member understands and can sign with confidence. Every mortgage file must be investor-grade and examination-ready on the day of closing.

## Pre-Conditions

- [ ] Member has completed CIP/onboarding (Workflow A) or is an existing member in good standing
- [ ] Loan Officer has conducted pre-qualification conversation
- [ ] Current rate sheet and underwriting guidelines are in effect (CFO-approved)
- [ ] Appraisal management company panel is current and HVCC/AIR compliant

## Regulatory Framework

| Regulation | Requirement | Enforcement Agent |
|-----------|-------------|-------------------|
| TRID (TILA-RESPA Integrated Disclosure) | Loan Estimate ≤3 business days; Closing Disclosure ≥3 business days before close | Mortgage Loan Processor + Compliance Officer |
| RESPA | No kickbacks; accurate GFE → CD comparison | Compliance Officer |
| HMDA | Data collection and LAR reporting | Compliance Officer |
| ECOA / Reg B | Non-discrimination; adverse action ≤30 days | Loan Officer + Compliance Officer |
| FCRA | Credit authorization before pull; adverse action | Loan Officer |
| Flood Disaster Protection Act | Flood zone determination; flood insurance if applicable | Mortgage Loan Processor |

---

## Agent Activation Sequence

### Stage 1: Application (Days 1-3)

#### Step 1A: Application Interview (Loan Officer)

```
Activate Loan Officer for mortgage application intake on member [#].

Member: [Name] | Account #: [Number] | Member since: [Date]
Property: [Address or TBD] | Type: [Purchase / Refinance / HELOC]
Loan purpose: [Description] | Estimated value: $[Amount]
Requested loan amount: $[Amount]

Deliverables required:
1. Complete 1003 Uniform Residential Loan Application (or MISMO format)
2. Obtain signed credit authorization before credit pull
3. Collect all six HMDA triggers if present (application date, applicant name, income,
   property address, estimated value, loan amount) — application is "received" once all six present
4. Verbally pre-qualify: loan-to-value, income qualification, credit profile
5. Request income and asset documentation package (see documentation checklist)

HMDA data collection (required regardless of outcome):
- Collect ethnicity, race, and sex of applicant
- If applicant declines to provide, document as "information not provided by applicant in
  mail, internet, or telephone application" or "not applicable"
- Never discourage an applicant from completing this information

Application date: [Date received] — THIS DATE STARTS THE TRID CLOCK
```

#### Step 1B: Loan Estimate (Mortgage Loan Processor + Compliance Officer)

```
Activate Mortgage Loan Processor for Loan Estimate preparation.

Application #: [Number] | Application date: [Date]
TRID DEADLINE: Loan Estimate must be DELIVERED within 3 business days of application date
                (Not mailed — delivered to member; mailed = 6 business day rule applies)

Deliverables required:
1. Prepare Loan Estimate (LE) on CFPB-approved form
2. Obtain fee quotes: title search, appraisal, flood cert, recording fees
3. Calculate APR, finance charge, and total of payments accurately
4. Issue LE within 3 business days — document delivery method and timestamp
5. Do NOT collect any fees from member except bona fide credit report fee before LE delivery

Rate lock:
- If rate is not locked: use "floating" disclosures; re-issue LE if rate locks
- If rate is locked: lock expiration date on LE; rate lock confirmation to member

Compliance Officer concurrent review:
- Verify LE timing (3 business day delivery)
- Verify APR accuracy (within 1/8% tolerance for fixed; 1/4% adjustable)
- Verify any changed circumstances are documented before issuing revised LE
```

---

### Stage 2: Processing (Days 4-20)

#### Step 2A: File Assembly (Mortgage Loan Processor)

```
Activate Mortgage Loan Processor for file processing.

Application #: [Number] | LE delivered: [Date]

Processing checklist — order and track each item:
INCOME VERIFICATION
- [ ] Most recent 2 years W-2s or 1099s
- [ ] Most recent 30-day pay stubs (2 most recent)
- [ ] Most recent 2 years federal tax returns (if self-employed or complex income)
- [ ] Year-to-date profit & loss (self-employed — within 60 days)
- [ ] Social Security / pension / disability award letters (if applicable)
- [ ] Rental income documentation (Schedule E + lease agreements)

ASSET VERIFICATION
- [ ] Most recent 2 months bank statements (all pages, all accounts)
- [ ] Retirement account statements (most recent)
- [ ] Gift letter + donor bank statement (if gift funds)
- [ ] Evidence of earnest money deposit clearing

PROPERTY / COLLATERAL
- [ ] Appraisal ordered from approved AMC panel (AIR/HVCC compliant)
- [ ] Title search ordered (owner's + lender's policy)
- [ ] Flood zone determination certificate
- [ ] Homeowner's insurance commitment letter
- [ ] Purchase contract (purchase transactions — fully executed)

CREDIT / IDENTITY
- [ ] Tri-merge credit report with fraud score
- [ ] Written explanation for any derogatory items > 12 months old
- [ ] Verification of employment (verbal VOE within 10 days of closing)
- [ ] Social Security number verification

Timeline: Items ordered Day 4-5; majority received by Day 15-18
```

#### Step 2B: Automated Underwriting (Mortgage Loan Processor)

```
Activate Mortgage Loan Processor for automated underwriting submission.

Application #: [Number]

AUS submission:
1. Submit complete 1003 and credit report to DU (Fannie Mae) or LP (Freddie Mac)
   — or NCUA guidelines if portfolio loan
2. Enter all assets, liabilities, income, and property information accurately
3. Record AUS Finding (Approve/Eligible, Refer, Refer with Caution)
4. List all conditions from AUS Finding — these become the processing conditions
5. If REFER: Submit to manual underwriting; document with compensating factors

Risk Manager involvement:
- Trigger Risk Manager review for:
  - AUS Refer or Refer with Caution
  - LTV > 90% (or above portfolio policy)
  - DTI > 43% (ability-to-repay threshold)
  - Investment properties
  - Non-warrantable condominiums
```

---

### Stage 3: Underwriting (Days 15-25)

#### Step 3A: Credit Decision (Loan Officer)

```
Activate Loan Officer for mortgage underwriting decision.

Application #: [Number] | AUS finding: [Approve/Eligible / Refer]
Processing conditions cleared as of: [Date]

Underwriting analysis:
1. Four C's review:
   - CAPACITY: DTI ≤ 43% (or documented exception)
   - CAPITAL: Sufficient assets verified for down payment + closing costs + reserves
   - COLLATERAL: LTV within guidelines; appraisal supports value
   - CREDIT: FICO meets program minimum; derogatory items explained

2. Decision:
   - APPROVE: Issue commitment letter to member; list any remaining conditions
   - SUSPEND: Conditions required before decision (list specific conditions)
   - DENY: Issue Adverse Action Notice within 30 days of application

Exception documentation:
- Any approval outside guidelines requires signed exception approval form
- Risk Manager sign-off required for all exceptions
- Document compensating factors specifically and quantitatively

Timeline: Decision within 2-3 business days of full file assembly
```

#### Step 3B: Compliance Review (Compliance Officer)

```
Activate Compliance Officer for mid-process compliance verification.

Application #: [Number] | Decision: [Approve / Suspend / Deny]

Review:
1. Change of Circumstance (COC) disclosures:
   - Has anything changed since the original LE that requires a revised LE?
   - Qualifying COC events: rate lock, new information, member-requested changes,
     interest rate-sensitive fees expiring
   - Issue revised LE within 3 business days of COC — document the trigger

2. HMDA data integrity:
   - Confirm ethnicity, race, sex collected or documented as not provided
   - Confirm loan purpose classification is accurate
   - If denial: record denial date and reason codes on LAR

3. Adverse Action (if applicable):
   - Denial notice within 30 days of application date
   - Reason codes specific, accurate, and non-discriminatory
   - Fair lending: compare similarly-situated applicants — flag any disparities
```

---

### Stage 4: Closing Preparation (Days 25-40)

#### Step 4A: Closing Disclosure (Mortgage Loan Processor + Compliance Officer)

```
Activate Mortgage Loan Processor for Closing Disclosure preparation.

Application #: [Number] | Scheduled closing date: [Date]
TRID DEADLINE: CD must be RECEIVED by member 3 business days BEFORE consummation
               (Not mailed — received; plan for delivery method accordingly)

CD preparation:
1. Calculate final loan terms, fees, and cash-to-close
2. Compare CD to original LE — document tolerance comparisons:
   - Zero tolerance: Origination charges, transfer taxes, owner's title (if member-selected)
   - 10% tolerance: Recording fees, third-party services (lender-selected)
   - Unlimited tolerance: Prepaid interest, insurance, third-party services (member-selected)
3. If tolerance violation identified: lender cure required within 3 calendar days of closing
4. Obtain title company's final figures; confirm with settlement agent

Compliance Officer concurrent review:
- Verify CD delivery timing (3 business day receipt before consummation)
- Verify tolerance comparisons are calculated correctly
- Confirm final APR is within required tolerance of LE APR
- Verify all required HMDA data points are captured

Internal Auditor (for loans above threshold per policy):
- Pre-close file review against origination checklist
- Random sample audit of TRID compliance
```

#### Step 4B: Final Conditions (Mortgage Loan Processor)

```
Activate Mortgage Loan Processor for final condition clearance.

Application #: [Number] | Closing date: [Date]

Final conditions checklist:
- [ ] Verbal verification of employment completed within 10 business days of closing
- [ ] Updated pay stubs current within 30 days
- [ ] Homeowner's insurance binder with lender listed as mortgagee
- [ ] Flood insurance policy (if SFHA) — coverage ≥ loan amount
- [ ] Clear title (no outstanding liens, judgments, or clouds on title)
- [ ] Purchase contract conditions satisfied (purchase transactions)
- [ ] Rate lock confirmed and current
- [ ] Final AUS re-run if material change to application data
- [ ] Mortgage insurance certificate (if LTV > 80% and MI required)
```

---

### Stage 5: Closing and Funding (Days 40-45)

#### Step 5A: Closing (Loan Officer + Mortgage Loan Processor)

```
Activate Loan Officer for mortgage closing.

Application #: [Number] | Closing date/time: [DateTime] | Location: [Address]

Closing responsibilities:
1. Explain every document to member in plain language — not a signature sprint
2. Confirm member has received and reviewed CD for at least 3 business days
3. Execute loan documents: Note, Deed of Trust/Mortgage, TILA/TIDR, Right of Rescission (refi)
4. Verify member identity at closing (compare to application and CIP)
5. Collect certified funds for closing costs (verify amount matches CD)

Right of rescission (refinances only — NOT purchase transactions):
- Member has 3 business days to rescind after signing
- Do NOT fund until rescission period expires
- Deliver 2 copies of Notice of Right to Rescind to each obligor

Funding (after rescission if applicable):
- Wire purchase price to title company / disburse payoffs
- Confirm receipt of funds by settlement agent
```

#### Step 5B: Post-Closing (Mortgage Loan Processor + Compliance Officer)

```
Activate Mortgage Loan Processor for post-closing processing.

Loan #: [Number] | Closing date: [Date] | Funded: [Date]

Post-closing tasks:
1. Record deed of trust / mortgage at county recorder — confirm recording information
2. Board loan to core system:
   - Loan type, purpose, lien position
   - Property address and type
   - Rate, term, payment, maturity
   - HMDA data elements
3. Order final title policy (lender's title insurance)
4. Ship file to secondary market investor (if applicable) — within investor's required timeline
5. HMDA LAR entry: Record final disposition (originated, denied, withdrawn, incomplete)

Compliance Officer final sign-off:
- HMDA data accuracy confirmed
- TRID file documentation complete (LE + CD delivery evidence)
- Post-closing QC checklist signed
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | Loan Estimate delivered ≤3 business days of application | 100% | LE with delivery timestamp | ☐ |
| 2 | Changed-circumstance disclosures issued when required | 100% | COC documentation with trigger | ☐ |
| 3 | Closing Disclosure received ≥3 business days before consummation | 100% | CD delivery confirmation | ☐ |
| 4 | Appraisal ordered from approved AMC panel | 100% | Appraisal order confirmation | ☐ |
| 5 | All income and assets independently verified | 100% | Verification documents in file | ☐ |
| 6 | AUS findings on file | 100% | DU/LP Finding report | ☐ |
| 7 | Right-of-rescission period honored (refinances) | 100% | Rescission period documentation | ☐ |
| 8 | Flood zone determination on file | 100% | FEMA flood cert | ☐ |
| 9 | Lien recorded | 100% | Recording confirmation | ☐ |
| 10 | HMDA data recorded | 100% HMDA-reportable loans | LAR data entry confirmed | ☐ |

**Gate Keepers**: Mortgage Loan Processor (file completeness) + Compliance Officer (regulatory compliance) — dual sign-off required

**Gate Decision**:
- **COMPLETE**: All criteria met — mortgage file is examination-ready and investor-deliverable
- **CORRECTION NEEDED**: Specific items identified — correct within 2 business days
- **TRID VIOLATION**: Disclosure timing error — lender cure required; Compliance Officer determines remediation amount and process
- **MATERIAL FINDING**: Regulatory violation — escalate to Compliance Officer + CEO immediately

---

## Step-Level Matrix

| Step | Agent | Mode | Authority |
|------|-------|------|-----------|
| 1. Application & Loan Estimate | Loan Officer | Execute | Credit/Financial |
| 1. Application & Loan Estimate | Compliance Officer | Advise | Compliance/Regulatory |
| 2. Processing — Document Collection | Mortgage Loan Processor | Execute | Operational |
| 3. Compliance — TRID & HMDA Check | Compliance Officer | Gate | Compliance/Regulatory + Escalation |
| 4. Underwriting & Conditions | Loan Officer | Execute | Credit/Financial |
| 4. Underwriting & Conditions | Risk Manager | Advise | Credit/Financial + Escalation |
| 5. Closing Preparation — Closing Disclosure | Mortgage Loan Processor | Execute | Operational |
| 5. Closing Preparation — Closing Disclosure | Compliance Officer | Advise | Compliance/Regulatory |
| 6. Closing, Funding & Post-Close | Mortgage Loan Processor | Execute | Operational |
| 6. Closing, Funding & Post-Close | Compliance Officer | Gate | Compliance/Regulatory + Escalation |

**Mode key:** Execute — owns the deliverable, one per step; Advise — contributes expertise, workflow does not wait; Gate — veto authority, workflow stops until cleared.

**Authority key:** Operational — process execution; Credit/Financial — lending and financial judgments; Compliance/Regulatory — regulatory determinations; Escalation — stop/elevate decisions.

---

## TRID Timing Reference Card

| Milestone | Timing Requirement | What Resets the Clock |
|-----------|-------------------|----------------------|
| Loan Estimate delivery | ≤3 business days of application | Application date |
| Revised LE (COC) | ≤3 business days of COC event | COC trigger date |
| Closing Disclosure delivery | ≥3 business days before consummation | Consummation date |
| Adverse Action Notice | ≤30 days of application | Application date |
| Appraisal copy to applicant | ≥3 business days before consummation | Consummation date |

## Common TRID/Mortgage Compliance Risks

| Risk | Prevention | If Identified |
|------|-----------|---------------|
| LE not delivered within 3 days | LE calendar alert from application intake | Cannot cure late LE — document and escalate |
| Tolerance violation on CD | Compare CD vs. LE at CD prep stage | Lender cure required within 3 days of closing |
| CD not delivered 3 days early | Schedule closing date with buffer | Delay closing; do not proceed without 3-day wait |
| Appraisal not delivered to applicant | Deliver at least 3 business days before close | Delay closing until 3 days after delivery |
| HMDA data missing | Collect at application; verify at CD | Correct LAR before annual submission date |
| Flood insurance gap | Order flood cert at application | Obtain flood policy before funding; delay if needed |

---

*Workflow C is complete when the Mortgage Loan Processor and Compliance Officer both confirm the quality gate, the deed is recorded, HMDA data is on the LAR, and the loan file is archived as examination-ready.*

---

## Exception Paths

### `appraisal-exception` — Appraisal Support Gate Failure

**Triggered when:** The Appraisal Support Gate fails after one retry attempt (one reconsideration of value or re-review). The appraised value does not support the contracted purchase price within LTV guidelines.

**Retry behavior:** The Appraisal Support Gate is a routine gate. On first failure, the gate evaluator receives the specific finding (gap amount, LTV impact, comparable support) and re-evaluates — typically after a Reconsideration of Value (ROV) request. If the appraisal still does not support value after one re-evaluation, the exception path activates.

**Contrast with TRID gates:** The TRID Loan Estimate Compliance Gate and TRID Compliance Gate are regulatory gates (zero retries). Those gates pause the workflow immediately on failure. The appraisal exception path only applies to value support failures.

**TRID notice:** If the low appraisal changes any fee disclosed on the Loan Estimate (e.g., PMI rate changes due to LTV shift, lender fee changes due to product change), this constitutes a Changed Circumstance requiring a revised Loan Estimate and a new 3-business-day waiting period before consummation.

---

#### Exception Step 1: Low Appraisal Options Analysis
**Agent:** Loan Officer (Execute, Credit/Financial authority)
**Handoff to:** Risk Manager

Present the member with all available paths forward. Each option must be documented with specific numbers:

| Option | Description | Requirements |
|--------|------------|--------------|
| **Reconsideration of Value (ROV)** | Request the AMC re-examine the appraisal using specific comparable sales the appraiser may have overlooked | Must provide specific comps with sale date, address, adjusted value; submit formal ROV to AMC; underwriting suspended pending result |
| **Increase down payment** | Member contributes additional funds to bring LTV into guidelines | Calculate exact additional amount required; confirm member's ability to fund; document source of funds |
| **Renegotiate purchase price** | Seller accepts lower price equal to or below appraised value | Require updated executed purchase agreement; re-underwriting required; TRID Changed Circumstance if fees change |
| **Withdraw application** | Member elects to cancel; adverse action notice required | Adverse action notice with accurate reason codes within 30 days of application date |

Document the gap amount, the resulting LTV at contracted price vs. appraised value, each option with specific dollar amounts, and the member's indicated preference.

**Deliverable:** Low appraisal options memorandum with all four options presented with specific figures and member's elected path.

---

#### Exception Step 2: Risk Manager Appraisal Exception Decision
**Agent:** Risk Manager (Gate, Credit/Financial + Escalation authority)

Review the options memorandum and issue a disposition for the member's elected path:

**If ROV:** Confirm that specific comparable sales were identified and submitted. Note that underwriting is suspended pending the AMC's ROV response. Set a timeline for ROV receipt. If ROV succeeds (value supported), workflow resumes at Underwriting & Conditions. If ROV fails, the Risk Manager reconvenes to disposition the remaining options.

**If additional down payment:** Confirm the new LTV meets product guidelines. Document the exception basis if any LTV policy waiver is required. Note the updated closing date to accommodate revised closing disclosure timing. Confirm source of funds documentation.

**If price renegotiation:** Require the updated executed purchase agreement before re-underwriting begins. Identify whether fee changes constitute a TRID Changed Circumstance — if so, revised LE required with new 3-day wait. Note updated closing date.

**If withdrawal/denial:** Confirm the adverse action notice will be issued within 30 days of the original application date with reason codes that accurately describe the appraisal deficiency. Note: "appraisal did not support value" is an accurate reason code; "collateral not sufficient" is acceptable; "credit denied" alone is not specific enough.

**LTV exception authority:** If the member's elected path requires an LTV exception beyond Risk Manager delegated authority, escalate to CEO with a written exception request.

**Gate:** Appraisal Exception Gate (routine, fallback: pause)
- Pass: Elected path has documented disposition with conditions. TRID Changed Circumstance identified if applicable. Adverse action notice prepared if applicable.
- Fail: No documented disposition — workflow pauses for manual review.

---

#### Degraded-Mode Completion Standard for Mortgage Processing

A mortgage that routes through appraisal exception handling is still a mortgage. The minimum viable completion requires:

- Appraised value gap documented with specific numbers
- All four options presented to member with specific figures
- Member's elected path documented and Risk Manager-approved
- TRID Changed Circumstance assessed and disclosed if applicable
- Adverse action notice obligations tracked against original 30-day clock (exception path does not reset the clock)
- Rate lock expiration monitored — extended processing timelines may require rate lock extension

A mortgage file that exits appraisal exception handling with an approved path and documented conditions is a documentable, defensible file moving forward. A mortgage that exits with no disposition is a stalled file creating regulatory and member-service risk.

---
