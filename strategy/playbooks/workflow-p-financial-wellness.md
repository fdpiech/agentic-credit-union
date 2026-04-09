# Workflow P Playbook — Member Financial Wellness Program

> **Cycle Time**: 1 session (acute crisis) – 12 months (ongoing coaching) | **Agents**: 3 | **Gate Keeper**: Financial Advisor

---

## Objective

Deliver structured, member-centered financial coaching that measurably improves the financial health of members experiencing hardship or seeking to build long-term stability — through a consistent, non-judgmental process that complies with CFPB wellness guidelines, FCRA, and UDAAP standards. Every member who completes this workflow should leave with a written plan, clear next steps, and a stronger relationship with the credit union.

## Pre-Conditions

- [ ] Member referred by internal workflow trigger, self-referral, or proactive outreach (see Triggers below)
- [ ] Member account is active and in good standing, or hardship is confirmed and collections referral has been received
- [ ] Financial Advisor availability confirmed; appointment scheduled within 5 business days of referral

## Workflow Triggers

This workflow is initiated by any of the following:

- **Hardship flag from Workflow D (Collections & Recovery)**: Member is 30+ days delinquent and has responded to collections contact with hardship claim
- **Loan Officer referral (Workflow B)**: Loan declined; advisor recommends financial coaching before reapplication
- **Mortgage referral (Workflow C)**: Member not yet mortgage-ready; income, savings, or credit improvement needed
- **Branch Manager or Member Services Rep referral**: In-branch observation of financial distress or member request for help
- **Member self-referral**: Member contacts credit union directly requesting financial coaching or budgeting help
- **Proactive outreach**: Marketing-identified segment (credit score decline, savings balance drop, new hardship-related product inquiry)

## Regulatory Framework

| Regulation | Requirement | Enforcement Agent |
|------------|-------------|-------------------|
| CFPB Financial Wellness Guidelines | Wellness advice must be member-centered, not product-pushing; documented in file | Financial Advisor |
| UDAAP (Dodd-Frank § 1031) | Financial wellness advice must not be deceptive, unfair, or abusive; no steering to high-cost products | Compliance Officer (audit) |
| FCRA (15 U.S.C. § 1681) | If credit report is accessed for counseling purposes, written authorization required; adverse action does not apply if no credit decision is made | Financial Advisor |
| State Debt Counseling Licensing | Some states require licensure for debt management plan (DMP) facilitation; do NOT facilitate DMPs directly — refer to NFCC-member agency | Financial Advisor + Compliance Officer |
| GLB Act / NCUA Part 716 | Member financial data gathered during wellness sessions is subject to the same privacy protections as account data | Financial Advisor |
| TCPA (47 U.S.C. § 227) | Outbound proactive wellness outreach by phone or text requires appropriate consent; do not use auto-dialer to new contacts without consent | Marketing Manager |

---

## Agent Activation Sequence

### Step 1: Referral & Initial Assessment (Financial Advisor)

```
Activate Financial Advisor for member financial wellness intake.

Member: [Name] | Account #: [Number] | Referral source: [Workflow D / Loan Officer / Self-referral / Branch / Proactive]
Referral date: [Date] | Appointment date: [Date]
Known trigger: [Description — e.g., 45-day delinquency on auto loan, loan decline for debt-to-income, member requested help with budget]

Deliverables required:
1. Review member account history before appointment:
   - Account tenure and product relationships
   - Recent transaction patterns (payroll deposits, ATM withdrawals, NSF frequency)
   - Current loan payment status across all accounts
   - Any prior financial wellness sessions (review notes)
2. Open the intake appointment with a non-judgmental framing:
   "We're here to help you figure out what's working and what we can do better together. Everything you share stays confidential."
3. Complete Financial Wellness Intake Form:
   - Household income (all sources): monthly net take-home
   - Fixed obligations: rent/mortgage, car payment(s), student loans, child support
   - Variable obligations: credit cards, medical bills, payday loans
   - Monthly expenses: utilities, groceries, transportation, subscriptions
   - Savings: emergency fund balance, retirement savings, any savings goals
   - Immediate trigger: what brought them in today?
4. Assess severity level:
   - ACUTE CRISIS: Unable to cover basic needs (food, shelter, utilities) — activate Step 5 (external referrals) immediately alongside continuing assessment
   - MODERATE STRESS: Meeting minimums but no cushion; one crisis away from delinquency
   - STABLE WITH GOALS: Financially stable but lacks plan to build savings, reduce debt, or prepare for major purchase
5. Document intake form in member file; obtain written consent for credit report access if credit review is planned

Privacy: All session notes are member-confidential; do NOT share with collections staff without member consent
UDAAP: Do NOT offer or suggest any credit union product at this stage — assessment only

Timeline: 45–60 minute intake session
```

### Step 2: Budget Development (Financial Advisor)

```
Activate Financial Advisor for budget development session.

Member: [Name] | Severity level: [Acute / Moderate / Stable with Goals]
Input: Completed intake form from Step 1

Deliverables required:
1. Build member budget using the 50/30/20 framework as a starting point:
   - 50% needs: housing, utilities, food, transportation, minimum debt payments
   - 30% wants: dining, entertainment, subscriptions, non-essential spending
   - 20% savings and extra debt payments
   Note: adjust framework to member's actual income level — a member at 110% of budget needs different intervention than one at 85%
2. Identify the specific budget gaps:
   - Is income insufficient or is spending misaligned?
   - Are there reducible fixed costs (insurance shopping, refinance opportunity, cell plan)?
   - Are there income opportunities (second income, gig work, benefits not enrolled in)?
3. Present the budget to the member visually (printed or on screen); walk through line by line
4. Identify 2–3 specific and actionable changes the member can make in the next 30 days
5. Set monthly savings target — even $25/month is a win for a member in crisis; document agreed target
6. Document completed budget in member file; provide member with printed copy

UDAAP guardrail:
- Do NOT use the budget session to pitch credit union products
- If a refinance or consolidation opportunity is evident, flag for Step 3 — do not discuss rates or terms in this session
- Budget advice must be in the member's genuine financial interest; document your reasoning

Timeline: 45–60 minute budget session; may combine with Step 1 for moderate/stable members
```

### Step 3: Debt Payoff Planning (Financial Advisor)

```
Activate Financial Advisor and Financial Advisor for debt payoff strategy development.

Member: [Name] | Total debt identified: $[Amount]
Debt inventory:
  - [Creditor 1]: $[Balance] | [Rate]% | $[Min. Payment]/mo
  - [Creditor 2]: $[Balance] | [Rate]% | $[Min. Payment]/mo
  - [continue for all obligations]

Financial Advisor deliverables:
1. Present two debt payoff strategies and help member choose:
   - Avalanche method: pay minimums on all; throw extra cash at highest-rate debt first (mathematically optimal)
   - Snowball method: pay minimums on all; throw extra cash at smallest balance first (psychologically motivating)
2. Calculate payoff timeline for each method using available discretionary income from budget
3. Assess whether any high-rate external debt (payday loan, credit card > 20% APR) could be consolidated using credit union products — flag for Financial Advisor; do NOT present a rate without Financial Advisor involvement
4. If member is severely over-leveraged (total debt-to-income > 50%) and consolidation is not feasible: explain non-profit credit counseling via NFCC-member agency; provide referral information
   - IMPORTANT: Do NOT facilitate a debt management plan (DMP) directly — refer only; do not collect fees

Financial Advisor deliverables (activated only if consolidation opportunity exists):
1. Review credit union loan products that could meaningfully reduce member's debt cost:
   - Personal loan for credit card consolidation
   - Auto refinance (if member is paying > 2% above current market rate)
   - HELOC (if member has equity and is stable — not appropriate for acute crisis)
2. Run preliminary pre-qualification analysis (credit pull requires written authorization — obtain before proceeding)
3. If member qualifies: present terms clearly; document in writing; give member time to decide — no pressure
4. If member does not qualify today: tell them honestly what needs to improve and in what timeframe
5. Any loan origination proceeds via Workflow B with clear documentation that this originated in wellness program

UDAAP guardrail:
- Consolidation can only be presented if it genuinely reduces the member's cost or simplifies their repayment
- Do NOT consolidate if the net effect extends debt term so significantly that total interest cost increases substantially
- Document your analysis; be prepared to explain to UDAAP auditor why this recommendation was in the member's interest

Timeline: 60–90 minute session; debt payoff plan delivered in writing before member leaves
```

### Step 4: Savings Goal Setting (Financial Advisor)

```
Activate Financial Advisor and Financial Advisor for savings goal-setting session.

Member: [Name] | Monthly savings capacity identified: $[Amount]
Budget surplus available for savings: $[Amount]/month
Existing savings: Emergency fund $[Amount] | Other savings $[Amount]

Financial Advisor deliverables:
1. Prioritize savings goals in the following order (explain the rationale to the member):
   Priority 1: Emergency fund — target $1,000 starter fund first; then build to 3–6 months of expenses
   Priority 2: High-cost debt payoff (parallel with emergency fund for acute-crisis members)
   Priority 3: Retirement savings — even $25/month into an IRA is a positive habit; explain tax benefit
   Priority 4: Goal-based savings (car, home down payment, education, vacation)
2. Match each goal to an appropriate credit union savings product:
   - Emergency fund: share savings with auto-transfer from checking
   - Short-term goal (< 2 years): share certificate (ladder strategy if > $1,000)
   - Retirement: IRA (Traditional or Roth depending on tax situation — refer to tax professional for tax advice)
   - Home down payment: tiered savings account with goal tracking
3. Open accounts or set up auto-transfers if member agrees — do NOT pressure; document consent
4. For members with retirement savings opportunity: provide IRA educational materials; do NOT provide tax advice

Financial Advisor deliverables:
1. Tie savings goals back to the budget developed in Step 2 — confirm the savings targets are realistic
2. Set a 30-day check-in appointment to review whether auto-transfer is working
3. Document savings goals and product enrollment in member wellness file

UDAAP guardrail:
- Investment products with market risk require appropriate suitability disclosure
- Do NOT recommend investment products to a member who lacks a funded emergency fund and is in active financial stress
- Savings goal must be achievable with the member's actual income — do not set unrealistic targets that will discourage the member

Timeline: 45–60 minute session; savings plan documented and accounts set up by end of session
```

### Step 5: External Resource Referrals (Financial Advisor)

```
Activate Financial Advisor for external resource identification and referral.

Member: [Name] | Severity: [Acute / Moderate / Stable]
Specific gaps identified: [List: food insecurity / utility shutoff / housing / medical / legal / other]

Deliverables required:
1. Assess whether member needs emergency resources (activate immediately for ACUTE severity):
   - Food assistance: local food bank, SNAP application assistance
   - Utility shutoff prevention: LIHEAP (Low Income Home Energy Assistance Program); utility company hardship programs
   - Housing: local HUD-approved housing counselor; emergency rental assistance programs
   - Medical debt: hospital financial assistance programs; state Medicaid enrollment
2. Credit counseling referral (if debt management plan may be appropriate):
   - Refer ONLY to NFCC-member agencies (National Foundation for Credit Counseling — nfcc.org)
   - Provide agency name, phone number, and website; do NOT make the appointment for the member
   - Document referral in file; do NOT receive any compensation or benefit from the referral
3. Legal resources (if bankruptcy inquiry or wage garnishment is active):
   - Refer to local legal aid society or state bar lawyer referral service
   - Do NOT provide legal advice — acknowledge the concern, normalize seeking counsel, refer
4. Benefits enrollment (if member may qualify for government benefits they are not receiving):
   - Benefits.gov screening tool
   - State-specific benefit programs (EITC, childcare assistance, utility assistance)
5. Employer assistance programs: EAP counseling, payroll advance programs

State licensing compliance:
- In states requiring licensure for debt counseling, referral to an NFCC agency satisfies the member's need without triggering the licensing requirement
- Document that we are providing referral only, not DMP facilitation, and that no fee is charged

Timeline: Referral list provided in writing to member during or immediately after the relevant session
```

### Step 6: Progress Monitoring & Follow-Up (Financial Advisor)

```
Activate Financial Advisor for ongoing progress monitoring and coaching continuity.

Member: [Name] | Program start date: [Date] | Severity at intake: [Acute / Moderate / Stable]
Agreed check-in cadence: [Monthly / Quarterly / As-needed]
Goals established: [List from Steps 2–4]

30-Day Check-In:
1. Review account data: Did the auto-transfer execute? Is the emergency fund growing?
2. Review budget adherence: Were there any unexpected expenses? How did the member respond?
3. Celebrate wins explicitly — even a $25 deposit to savings is a win worth naming
4. Troubleshoot barriers: What made it hard? What support is needed?
5. Confirm debt payoff plan is in motion: extra payment applied to target debt?

90-Day Review:
1. Run updated member financial snapshot:
   - Emergency fund balance vs. target
   - Total debt balance vs. 90-day-ago baseline
   - Credit score change (with authorization — obtain separately; not required for review)
   - NSF frequency vs. baseline
2. Assess whether severity level has changed: has ACUTE moved to MODERATE?
3. Adjust plan if life circumstances have changed (job loss, new income, new expense)
4. Determine whether member has progressed to goal: loan readiness, mortgage readiness, investment readiness — trigger appropriate next workflow if so

12-Month Outcome Assessment:
1. Complete Financial Wellness Outcome Report:
   - Net worth change from intake to 12 months
   - Debt reduction achieved
   - Savings balance achieved
   - Products opened during the program (loans, IRA, certificates)
   - Self-reported member confidence score (1–10 scale)
2. Determine program completion status:
   - GRADUATED: Member has met primary goals and has a self-sufficient plan
   - CONTINUING: Member making progress but has not yet reached goals; extend program
   - REFERRED: Member needs services beyond credit union scope; ensure external referrals are active

Referral triggers from ongoing monitoring:
- Delinquency recurrence → re-activate Workflow D contact with hardship context
- Loan readiness achieved → refer to Loan Officer (Workflow B) with Wellness Advisor summary
- Mortgage readiness achieved → refer to Mortgage Loan Officer (Workflow C)
- Savings milestone reached → Financial Advisor investment review

Timeline: 30-day check-in, 90-day review, and 12-month outcome assessment are mandatory for all members at MODERATE or ACUTE severity
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | Intake form completed and severity assessed | 100% of referrals | Signed intake form in member file | ☐ |
| 2 | Written budget delivered to member | 100% of sessions beyond intake | Budget document in file; copy given to member | ☐ |
| 3 | Debt payoff plan documented in writing | 100% of members with debt | Written debt payoff plan in file | ☐ |
| 4 | Credit report authorization obtained before any credit pull | 100% — no exceptions | Signed FCRA authorization in file | ☐ |
| 5 | Any external referrals documented (NFCC, legal aid, benefits) | 100% of referrals made | Referral log with agency name and date | ☐ |
| 6 | UDAAP guardrail: no product presented without documented member-benefit analysis | 100% | Advisor notes documenting rationale for any product suggestion | ☐ |
| 7 | 30-day and 90-day check-ins completed (ACUTE/MODERATE severity) | 100% | Check-in notes in member wellness file | ☐ |
| 8 | 12-month outcome report completed | 100% of active program members | Outcome report in file; results reported to management | ☐ |

**Gate Keeper**: Financial Advisor — review required at 90-day milestone for any member where a credit union product was recommended; confirm coaching quality, member progress, and product suitability

**Gate Decision**:
- **COMPLETE — GRADUATED**: Member has met stated goals; file closed with outcome report; enrolled in ongoing periodic outreach
- **COMPLETE — REFERRED OUT**: Member's needs exceed credit union scope; all external referrals documented; file closed with referral summary
- **CONTINUING**: Member in active progress; program extended with updated goals and next check-in date
- **ESCALATE**: Member in acute crisis with immediate safety or housing need — Financial Advisor contacts Branch Manager and activates emergency resource referrals immediately

---

## Financial Wellness Program Performance Metrics

| Metric | Target | Measurement Frequency |
|--------|--------|-----------------------|
| Referral-to-appointment rate | ≥ 80% of referrals complete intake appointment | Monthly |
| Budget completion rate | ≥ 90% of intake members complete budget session | Monthly |
| 30-day check-in completion rate | ≥ 85% of ACUTE/MODERATE members | Monthly |
| Average debt reduction at 12 months (program completers) | ≥ 15% reduction vs. intake balance | Annually |
| Average savings balance at 12 months (program completers) | ≥ $500 increase vs. intake balance | Annually |
| Member self-reported confidence score at 12 months | ≥ 7.0 / 10.0 average | Annually |
| Loan readiness referrals generated (program → Workflow B/C) | Track volume; no minimum | Quarterly |
| UDAAP findings from compliance audit of wellness sessions | Zero | Annually (compliance audit) |

---

## Handoff Templates

### Referring Workflow → Financial Advisor

```markdown
## Financial Wellness Referral

**Member**: [Name] | **Account #**: [Number] | **Referring Agent**: [Name + Role]
**Referring Workflow**: [A / B / C / D / Other] | **Referral Date**: [Date]

**Trigger reason**: [e.g., Loan declined — DTI 52%; Auto loan 60 days delinquent; Member requested help in branch]
**Known financial context**: [Income level, debt situation, any relevant account observations]
**Urgency level**: [Acute — immediate contact needed / Standard — within 5 business days]

**Member's awareness**: [Member was told to expect a call / Member requested this referral / Proactive outreach — member not yet contacted]
**Best contact method**: [Phone / Email / In-branch preference]
**Consent to share data with Wellness Advisor**: [Yes — member acknowledged referral / No — outreach only, no account data shared until member consents]
```

### Financial Advisor → Loan Officer (Workflow B/C Handoff)

```markdown
## Financial Wellness → Loan Readiness Handoff

**Member**: [Name] | **Account #**: [Number] | **Wellness program start date**: [Date]
**Wellness Advisor**: [Name]

**Program summary**: Member completed [N] months of financial wellness coaching.
**Credit score at intake**: [Score] | **Credit score current**: [Score] | **Change**: [+/- points]
**Debt-to-income at intake**: [%] | **DTI current**: [%]
**Savings balance at intake**: $[Amount] | **Savings balance current**: $[Amount]

**Loan readiness assessment**:
- [ ] Emergency fund established (≥ $500)
- [ ] No current delinquencies on any account
- [ ] Debt-to-income within qualifying range for requested product
- [ ] Stable income documented (last 2 pay stubs / 2 years tax returns)

**Product the member is ready for**: [Auto loan / Personal loan / Mortgage / HELOC / Other]
**Member's stated goal**: [e.g., Purchase a reliable vehicle to maintain employment; Purchase first home]
**Notes for Loan Officer**: [Any context that will help the Loan Officer serve this member well]
```

---

*Workflow P is complete when the Financial Advisor and Financial Advisor confirm the member has either graduated with documented goal achievement, been successfully referred to appropriate external resources, or is actively continuing in a well-documented ongoing program with a clear next milestone.*
