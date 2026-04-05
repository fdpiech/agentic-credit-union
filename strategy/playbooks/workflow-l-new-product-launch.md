# Workflow L Playbook — New Product/Service Launch

> **Cycle Time**: 4–8 weeks (deposit product) – 6–12 months (loan product) | **Agents**: 6 | **Gate Keepers**: Compliance Officer + CEO

---

## Objective

Bring new financial products and services to market in a structured, compliant, and financially sound manner. Every product launch must clear compliance review, receive board notification, achieve accurate systems implementation, and be supported by trained staff before the first member transaction. No product goes live without Compliance Officer and CEO dual sign-off.

## Pre-Conditions

- [ ] Product concept written and presented to senior leadership (CEO)
- [ ] Business case template completed with revenue and cost projections (CFO)
- [ ] Compliance pre-screen requested to identify applicable regulatory framework (Compliance Officer)
- [ ] Board notified of new product initiative (required for material new products — CEO)
- [ ] Core system capability confirmed for proposed product structure (Core Systems Administrator)

## Regulatory Framework

| Area | Requirement | Owner |
|------|------------|-------|
| NCUA product authority | Federal CUs: NCUA Part 721 (incidental powers); state CUs: state charter authority | Compliance Officer |
| ECOA / Reg B | Fair lending in pricing and availability — no prohibited basis discrimination | Compliance Officer |
| UDAAP | Product features, marketing, and disclosures must not be unfair, deceptive, or abusive (CFPB authority) | Compliance Officer |
| TILA / Reg Z | Full APR disclosure, payment schedules, and right of rescission (if applicable) for loan products | Compliance Officer |
| Truth in Savings / Reg DD | APY disclosure, fee schedules, and account terms for deposit products | Compliance Officer |
| BSA/AML | New product BSA risk assessment required; update BSA risk assessment if product materially changes risk profile | BSA Officer |
| State licensing | Review state law for any additional product requirements, rate ceilings, or special disclosures | Compliance Officer |
| NCUA Part 741 | Federally insured CUs: products must remain within insured share account structure requirements | Compliance Officer |

---

## Agent Activation Sequence

### Step 1: Product Concept & Business Case (CEO + CFO)

```
Activate Credit Union CEO and CFO for new product concept review and business case development.

Product name (working): [Product Name]
Product type: [Deposit / Loan / Fee-based service / Other]
Proposed launch date: [Target Date]
Initiative sponsor: [Name/Role]

CEO deliverables:
1. Review product concept against strategic plan alignment — does this serve a documented member need?
2. Confirm NCUA charter authority for the proposed product type
3. Determine board notification requirement: material new product = board advance notice; new service line = board approval before launch
4. Assign product champion and cross-functional project team
5. Set project timeline with milestone gates

CFO deliverables:
1. Build product business case:
   - Target member segment and estimated adoption volume (Year 1 / Year 3)
   - Revenue model: interest income, fee income, or both — with rate/fee assumptions
   - Direct costs: origination cost, servicing cost, loss expectation (if loan product)
   - Indirect costs: system setup, marketing, staff training
   - Break-even analysis: minimum volume required for net-positive contribution
   - Capital impact: does new product require additional capital allocation?
2. Financial viability threshold: If projected ROA contribution at 3 years is below [X]%, recommend deferral
3. Compare proposed pricing to market — is this competitive for the target segment?

Output: Approved product concept with business case on file
Decision point: CEO approves advancement to Step 2 or returns for revision
```

### Step 2: Compliance Impact Assessment (Compliance Officer)

```
Activate Compliance Officer for new product compliance impact assessment.

Product name: [Product Name] | Product type: [Deposit / Loan / Fee-based service]
Business case reviewed: [Date]
Proposed features: [List key product features, pricing structure, and target member segment]

Deliverables required:
1. Regulatory mapping — identify all applicable federal and state regulations:
   - For loan products: TILA/Reg Z, ECOA/Reg B, HMDA (if mortgage), MLA (if open-end or consumer loan to servicemembers), SCRA considerations
   - For deposit products: Truth in Savings/Reg DD, Reg E (if transaction account), Reg D (if savings/money market)
   - For all products: UDAAP analysis, BSA/AML risk, state law
2. Fair lending analysis:
   - Will this product be available to all eligible members on consistent terms?
   - Are pricing criteria objective and applied uniformly?
   - Does product structure risk disparate impact on any protected class?
3. Disclosure requirements — identify every required disclosure with timing and format rules
4. Prohibited features: Identify any product feature that must be modified or eliminated before launch
5. BSA risk assessment: Does this product create heightened money laundering risk? (Assign Low / Medium / High)
6. Draft compliance sign-off conditions: What must be true before product can launch?

Output: Compliance impact assessment with required modifications and disclosure checklist
Escalation: If compliance barrier is identified that cannot be resolved, report to CEO within 2 business days
Timeline: 5–10 business days for deposit product; 15–20 business days for loan product
```

### Step 3: Pricing & Terms Development (CFO + Compliance Officer)

```
Activate CFO and Compliance Officer for product pricing and terms finalization.

Product name: [Product Name]
Compliance impact assessment received: [Date]
Required modifications from Step 2: [List]

CFO deliverables:
1. Final rate/fee matrix:
   - Pricing tiers (if risk-based — loan products) with rate ranges for each tier
   - Fee schedule (origination fees, late fees, overdraft fees, maintenance fees — as applicable)
   - Minimum/maximum amounts and terms
   - Prepayment terms (loan products)
2. Rate floor/ceiling analysis: Ensure pricing is within NCUA usury limits (18% federal CU ceiling unless NCUA waiver; verify state ceiling if state-chartered)
3. ALCO review: Does new product affect asset/liability duration or rate sensitivity? If yes, present to ALCO before finalizing
4. Margin analysis: Confirm product achieves minimum contribution margin under base, stress, and rate scenarios

Compliance Officer deliverables:
1. Review all pricing tiers and fees for ECOA/fair lending compliance
2. Draft all required disclosures:
   - Loan products: TILA/Reg Z initial disclosure and Loan Estimate (if mortgage)
   - Deposit products: Truth in Savings disclosure with APY, fees, and terms
3. Review fee schedule for UDAAP compliance — are fees reasonable and clearly disclosed?
4. Confirm MLA compliance (loan products): Verify Military Annual Percentage Rate (MAPR) does not exceed 36% for covered borrowers
5. State usury and fee compliance confirmation

Output: Final approved rate/fee matrix + draft disclosure forms
Joint sign-off required: CFO (financial viability) + Compliance Officer (regulatory compliance)
```

### Step 4: System & Process Requirements (Core Systems Administrator + Software Engineer)

```
Activate Core Systems Administrator and Software Engineer for system implementation of new product.

Product name: [Product Name]
Approved rate/fee matrix received: [Date]
Target launch date: [Date]
Core system platform: [Platform name/version]

Core Systems Administrator deliverables:
1. Product setup in core system:
   - Create new product code(s) with all required fields
   - Configure rate table, fee schedule, and term parameters per approved matrix
   - Set up automatic disclosure generation (TILA or Truth in Savings as applicable)
   - Configure account statements and member-facing descriptions
2. Reporting: Verify new product appears in all required regulatory reports:
   - Call Report (NCUA 5300): Confirm correct classification code
   - HMDA LAR (if mortgage product): Confirm flagging logic
   - BSA transaction monitoring: Confirm product is included in monitoring rules
3. Testing plan: Unit test all product configurations before parallel testing begins
4. Rollback plan: Document steps to disable product if post-launch defects are found

Software Engineer deliverables:
1. Digital channel implementation (if applicable):
   - Online application workflow or account opening flow
   - Member-facing product page with accurate features and disclosures
   - e-Signature integration for required disclosure acknowledgment
2. Interface testing: Confirm core system product code passes data correctly to all downstream systems (loan servicing, deposit ops, statement vendor, HMDA tool)
3. Data retention: Confirm all transaction data for new product routes to compliant archive

Output: System implementation complete with sign-off; test results documented
Pre-launch certification: Core Systems Administrator certifies system is ready; Software Engineer certifies digital channel is ready
Timeline: 2–4 weeks (deposit product); 4–10 weeks (loan product with digital application)
```

### Step 5: Staff Training Plan (CHRO)

```
Activate CHRO for new product staff training program development and delivery.

Product name: [Product Name]
System implementation completion date: [Date]
Launch date: [Target]
Staff to train: [List roles — Loan Officers, MSRs, Branch Manager, Call Center, etc.]

Deliverables required:
1. Training curriculum:
   - Product features and member benefits (who should have this product and why)
   - Eligibility criteria, application process, and required documentation
   - Pricing and how to explain it to members in plain language
   - Required disclosures: when to provide, how to explain, how to obtain acknowledgment
   - Prohibited practices: what staff cannot say or do in marketing/selling this product
   - Systems walkthrough: how to originate or open the product in the core system
2. Training delivery:
   - Required training for all frontline staff with member-facing contact: complete BEFORE launch date
   - Assessment: minimum passing score of [X]% on product knowledge test
   - Training log: document completion by employee name and date
3. Job aids:
   - Product quick-reference card for branch and call center staff
   - Frequently asked questions document
   - Escalation path if staff encounters a situation outside standard procedures
4. Post-launch support: First two weeks — identify a product champion per branch/department for real-time staff questions

Output: Training completion log showing 100% of designated staff trained before launch date
CHRO certification: Confirm all frontline staff are trained and assessed before CEO authorizes launch
```

### Step 6: Marketing & Disclosure Review (Marketing Manager + Compliance Officer)

```
Activate Marketing Manager and Compliance Officer for launch marketing and disclosure package review.

Product name: [Product Name]
Launch date: [Target]
Approved disclosures from Step 3: [Date]

Marketing Manager deliverables:
1. Member communication plan:
   - Launch announcement: email, in-branch signage, website, social media (as appropriate)
   - Target segment: Which members will receive direct outreach? How selected?
   - Message framework: Key benefits, who it's for, how to apply — in plain member language
   - Timeline: When does each communication channel go live?
2. Draft all marketing materials:
   - Email or direct mail copy
   - Branch collateral (flyers, posters, teller memos)
   - Website product page
   - Social media posts (if applicable)

Compliance Officer deliverables — review ALL marketing materials before release:
1. UDAAP screen: Is every claim accurate, not misleading, and substantiated?
2. Required disclosures present: All materials that quote a rate or APY must include required disclosures (Reg DD APY disclosure; TILA representative example if loan)
3. Fair lending: Marketing does not target or exclude any protected class; is it accessible in required languages?
4. "NCUA Insured" language: Required on all share account marketing
5. MLA: If advertising to a broad member base, include MLA disclosures if product is available to covered borrowers
6. Approval log: Document each marketing piece reviewed, date reviewed, and findings

Output: Marketing package approved with Compliance Officer sign-off on every piece
Hard rule: No marketing material is released without Compliance Officer written approval
```

### Step 7: Soft Launch / Pilot (Branch Manager + Member Services Rep)

```
Activate Branch Manager and Member Services Representative for new product pilot.

Product name: [Product Name]
Pilot scope: [Branch(es) selected / Member segment / Volume cap]
Pilot period: [Start date] to [End date — typically 2–4 weeks]
System live: [Confirmed date]

Branch Manager deliverables:
1. Select pilot cohort: [X] transactions or [X] accounts during pilot window
2. Member feedback collection: Brief member survey or staff-captured feedback after each product interaction
3. Staff observation: Monitor for process gaps, systems issues, or member confusion points
4. Escalation log: Document every error, system issue, or compliance question that arises during pilot
5. Weekly pilot status report to CEO and Core Systems Administrator

Member Services Rep deliverables:
1. Execute product transactions under pilot conditions — document each with outcome and notes
2. Identify any disclosure delivery gaps: Was the member given the correct disclosure at the right moment?
3. Track processing time: How long does a typical origination or account opening take end-to-end?
4. Collect member questions that were not answered by current training or materials

Pilot exit criteria — ALL must be met before proceeding to full launch:
- [ ] No system configuration errors identified in core or digital channel
- [ ] All required disclosures confirmed to be delivering correctly 100% of the time
- [ ] Staff can process the product within acceptable time parameters without escalation
- [ ] No compliance issues identified during pilot period
- [ ] Member feedback is net positive

Output: Pilot completion report with go/no-go recommendation to CEO
If any exit criterion is not met: resolve defect, extend pilot, and re-evaluate — do NOT proceed to full launch
```

### Step 8: Full Launch (Marketing Manager + CEO)

```
Activate Marketing Manager and CEO for full product launch authorization and execution.

Product name: [Product Name]
Pilot completion report received: [Date]
Compliance Officer launch sign-off: [Date]
CEO authorization required before any member-facing communication goes live

CEO deliverables:
1. Review pilot completion report — confirm all pilot exit criteria were met
2. Review Compliance Officer launch sign-off — confirm all regulatory requirements are certified met
3. Issue formal launch authorization (written memo or email — retained in product file)
4. Board notification: If product is material, report launch to board at next meeting with summary of product, target market, and initial volume expectations
5. Set 30/60/90-day success metrics: What are we measuring and what triggers a product review?

Marketing Manager deliverables:
1. Execute launch communications per approved plan from Step 6:
   - Release all pre-approved materials on schedule
   - Coordinate in-branch materials deployment
   - Activate digital channel with live product page and application flow
2. Track early engagement metrics:
   - Email open rate and click-through
   - Application volume vs. projection (Week 1 and Week 2)
   - Branch inquiry volume
3. Monitor for member complaints or questions — surface to Compliance Officer within 24 hours
4. Launch debrief: Report actual vs. projected launch engagement to CEO within 10 business days

Output: Product live in market; launch metrics tracked; board notification complete
Hard rule: CEO written authorization required before launch — verbal authorization not sufficient
```

### Step 9: Post-Launch Review — 30 / 60 / 90 Days (CFO + Compliance Officer)

```
Activate CFO and Compliance Officer for post-launch product performance review.

Product name: [Product Name]
Review cycle: [30-day / 60-day / 90-day]
Launch date: [Date]

CFO deliverables:
1. Volume vs. projection: Actual accounts opened or loans originated vs. business case assumption
2. Revenue vs. projection: Actual interest income or fee income vs. business case
3. Cost vs. projection: Direct costs — origination, servicing, losses (loan products) vs. business case
4. Margin analysis: Actual contribution margin vs. minimum threshold from business case
5. At 90 days: Provide go-forward recommendation — continue as-is, modify pricing/terms, or discontinue
6. Capital impact: Confirm capital consumption is within projected range; no capital adequacy concern

Compliance Officer deliverables:
1. Complaint review: Compile all member complaints related to the product — categorize and trend
2. Regulatory incident review: Were there any regulatory misses (disclosure failure, adverse action timing, etc.) during the launch period?
3. Fair lending monitoring: Review early approval/denial data for any disparate impact patterns
4. Mystery shop review (if applicable): Were product terms and disclosures consistently delivered?
5. BSA/AML monitoring: Were any suspicious activity patterns identified for the new product type?
6. At 90 days: Compliance Officer certifies product is operating in compliance or identifies required remediations

Output: Joint 90-day product review report to CEO and Board
Board reporting: Material new products require 90-day performance report in board materials
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | Business case completed and CFO-approved | 100% of new products | Signed business case on file | ☐ |
| 2 | Compliance impact assessment completed before system build | 100% | Compliance assessment document on file | ☐ |
| 3 | All required disclosures drafted, reviewed, and approved | 100% of applicable disclosures | Compliance-approved disclosure set in product file | ☐ |
| 4 | Core system product configuration tested and certified | 100% pass on test plan | Signed test results document | ☐ |
| 5 | All frontline staff trained and assessed before launch | 100% of designated staff | Training completion log with assessment scores | ☐ |
| 6 | All marketing materials reviewed and approved by Compliance Officer | 100% of materials | Compliance approval log per piece | ☐ |
| 7 | Pilot completed with all exit criteria met | 100% exit criteria | Pilot completion report | ☐ |
| 8 | CEO written launch authorization issued | Required before launch | CEO authorization memo in product file | ☐ |
| 9 | Board notified of material new product | At or before launch | Board minutes or advance notification memo | ☐ |
| 10 | 90-day post-launch review completed | Within 95 days of launch | Joint CFO + Compliance Officer review report | ☐ |

**Gate Keepers**: Compliance Officer (regulatory compliance) + CEO (strategic and financial authorization) — dual sign-off required at Step 8

**Gate Decision**:
- **COMPLETE**: All criteria met — product file is examination-ready; launch authorized
- **HOLD**: Open defect from pilot or missing compliance approval — resolve before launch date
- **CANCELLED**: Compliance barrier cannot be resolved or business case no longer supported — CEO notifies board; product file retained 7 years

---

## Performance Metrics

| Metric | Definition | Target | Measurement Frequency |
|--------|-----------|--------|-----------------------|
| Launch-to-market cycle time | Calendar days from concept approval to member availability | ≤ 60 days (deposit); ≤ 180 days (loan) | Per launch |
| Disclosure accuracy rate | % of product transactions where disclosure delivered correctly and on time | 100% | Monthly (90-day review; then quarterly) |
| Adoption rate — Year 1 | Actual accounts/originations vs. business case projection | ≥ 75% of projection | Monthly |
| Contribution margin — 90-day | Actual revenue less direct costs vs. business case minimum margin | At or above business case floor | 90-day review |
| Member complaint rate | Complaints per 1,000 active product accounts | < 2 per 1,000 | Monthly |
| Staff training completion | % of designated staff trained before launch | 100% | Pre-launch |
| Post-launch regulatory incidents | Count of compliance deficiencies identified in 90-day review | 0 material findings | 90-day review |

---

*Workflow L is complete when Compliance Officer and CEO have both signed the launch authorization, the 90-day post-launch review is on file, and the product is confirmed compliant and financially tracking to the approved business case.*
