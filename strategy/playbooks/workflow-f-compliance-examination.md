# Workflow F Playbook — Compliance & Examination

> **Cycle Time**: Annual cycle (Q1–Q4) + on-demand for NCUA examination | **Agents**: 6 | **Gate Keepers**: Compliance Officer + Internal Auditor

---

## Objective

Operate a proactive Compliance Management System (CMS) that prevents violations before they occur — not a reactive program that discovers them during examination. Manage the NCUA examination cycle to achieve clean results with zero Material Recommendations for Action (MRAs) on CMS-covered areas. Every examination should confirm what the credit union already knows about itself.

## Pre-Conditions

- [ ] Prior year's examination report and all MRA responses are documented and closed
- [ ] Annual compliance testing calendar is drafted and approved by Compliance Officer
- [ ] Regulatory change log is current through current quarter
- [ ] BSA/AML independent testing is scheduled per BSA Policy

## Regulatory Framework

| Area | Regulation | Testing Owner |
|------|-----------|---------------|
| Consumer Lending | TILA/Reg Z, ECOA/Reg B, HMDA, FCRA | Compliance Officer |
| Deposits | Reg E, Reg CC, Truth in Savings, Privacy/GLB | Compliance Officer |
| BSA/AML | BSA, USA PATRIOT Act, OFAC | BSA Officer |
| Fair Lending | ECOA, HMDA, UDAP, UDAAP | Compliance Officer |
| Information Security | NCUA Part 748, GLBA Safeguards | Core Systems Administrator |
| Member Complaints | CFPB complaint management | Compliance Officer |
| Vendor Management | Third-party risk | Compliance Officer |

---

## Annual Compliance Cycle

### Q1: Program Review and Testing Launch (January–March)

#### Step 1A: Compliance Program Annual Review (Compliance Officer)

```
Activate Compliance Officer for annual CMS program review.

Period: Q1 [YEAR] | Last examination: [Date] | Next expected examination: [Month/Year]

Deliverables required:
1. Review and update the Compliance Management System written program:
   - Board and management oversight section (board reports, training completed)
   - Policies and procedures: Are all policies current? When were they last reviewed?
   - Compliance training program: Coverage, completion rates, new-hire requirements
   - Consumer complaint program: Intake, tracking, resolution, trend analysis
   - Compliance monitoring and testing program: Risk-based testing calendar

2. Regulatory change assessment — identify ALL regulatory changes in effect this year:
   - CFPB final rules effective this year
   - NCUA letter to credit unions (new requirements)
   - FFIEC guidance updates
   - State law changes affecting operations
   - For each change: effective date, implementation status, staff trained?

3. Compliance risk assessment update:
   - Rate each major compliance area: Inherent Risk × Control Effectiveness
   - High-risk areas get quarterly testing; medium: semi-annual; low: annual
   - Document risk assessment methodology and conclusions

4. Gap analysis vs. prior examination findings:
   - All prior MRAs: closed? (documentation required)
   - All self-identified findings: closed or remediated?
   - Any open items must be on tracking log with owner and deadline

Timeline: Complete by March 31
```

#### Step 1B: Annual Audit Plan (Internal Auditor)

```
Activate Internal Auditor to develop annual audit plan.

Basis: Compliance Officer risk assessment + enterprise risk assessment (Risk Manager)

Deliverables required:
1. Risk-based annual audit plan:
   - High-risk areas: Audit within year
   - Regulatory audits: BSA independent testing, fair lending, HMDA
   - Operational audits: Based on risk assessment
   - Coverage: Each significant risk area audited at minimum every 24 months
2. Resource plan: Internal resources vs. outsourced review requirements
3. Board Supervisory Committee presentation (Q1 committee meeting)
4. Management sign-off on audit schedule

Independence requirements:
- Internal Auditor reports to Supervisory Committee — NOT management
- No audit of areas where Internal Auditor performed the work
- External BSA audit firm engaged for BSA independent testing (if no qualified internal party)

Timeline: Draft by January 31; approved by Supervisory Committee by March 15
```

#### Step 1C: Information Security Risk Assessment (Core Systems Administrator)

```
Activate Core Systems Administrator for annual information security risk assessment.

Requirement: NCUA Part 748 / GLBA Safeguards Rule

Deliverables required:
1. Annual information security risk assessment:
   - Identify all member information systems and data flows
   - Assess threats: external cyberattack, insider threat, vendor breach, physical
   - Assess vulnerabilities: patch levels, access controls, encryption, training
   - Risk rating for each system: Critical / High / Medium / Low
   - Mitigation plan for all High and Critical findings

2. Annual review of Information Security Policy:
   - Ensure policy reflects current infrastructure
   - Board or designated committee approval required annually

3. Vendor due diligence review:
   - Core processor: Annual review of SOC 2 Type II report
   - All critical vendors: Confirm information security controls adequate
   - Document third-party risk assessments

4. Staff phishing simulation and security awareness training completion

Timeline: Complete assessment by March 31; board approval by April 30
```

---

### Q2: Compliance Testing Execution (April–June)

#### Step 2A: Consumer Lending Testing (Compliance Officer)

```
Activate Compliance Officer for consumer lending compliance testing.

Testing period: Q2 [YEAR]

TILA / Reg Z — Consumer Loan Disclosure Testing:
Sample: [N] closed consumer loans (risk-based: at minimum 25 loans)
Test each for:
- [ ] TILA disclosure delivered before consummation (APR, finance charge, total payments)
- [ ] APR calculation accuracy (within 1/8% tolerance for fixed)
- [ ] Payment schedule accurate
- [ ] Credit authorization signed before credit pull
Findings: Document errors by loan number; calculate error rate; determine if systemic

ECOA / Reg B — Equal Credit Opportunity Act Testing:
Sample: [N] applications including approvals, declines, and counter-offers
Test each for:
- [ ] Adverse action notice issued within 30 days of application
- [ ] Adverse action notice contains specific reasons (not generic)
- [ ] No prohibited basis appeared in decision-making
- [ ] HMDA data collected regardless of outcome
Findings: Flag any disparities in approval rates by protected class for fair lending review

HMDA — Home Mortgage Disclosure Act Data Integrity:
Sample: 100% of HMDA-reportable applications from prior calendar year (or current YTD)
Test each for:
- [ ] Application date accurate
- [ ] Action taken accurate (originated, approved not accepted, denied, withdrawn, incomplete)
- [ ] Ethnicity, race, sex collected or documented as not provided
- [ ] Loan purpose classified correctly
- [ ] Rate spread calculated correctly (if applicable)
Findings: Resubmit corrected LAR before deadline if error rate > 5%

FCRA — Fair Credit Reporting Act:
Sample: Consumer loan files
Test for: Credit authorization obtained before pull; adverse action notices include credit bureau contact info

Timeline: Testing complete by June 15; findings report by June 30
```

#### Step 2B: BSA/AML Independent Testing (Internal Auditor or External Firm)

```
Activate Internal Auditor (or external BSA audit firm) for BSA independent testing.

Requirement: BSA regulation requires independent testing of BSA/AML program
Frequency: Annual (or more frequent for high-risk institutions)

Testing scope:
1. CIP Program Testing:
   Sample: [N] new accounts opened in prior 12 months
   Test: All four CIP elements collected (name, DOB, address, ID number)?
         Verification method documented? OFAC screen documented?
   
2. SAR Process Testing:
   Review: All SAR filings and all documented no-file decisions in prior 12 months
   Test: Narratives complete and accurate? Filed within 30 days? No-file decisions documented?
   
3. CTR Process Testing:
   Review: All CTR filings and exemptions
   Test: All CTR-eligible transactions identified? Filed within 15 days?
         Exemptions current and board-approved?
   
4. AML Monitoring Testing:
   Review: Monitoring alert disposition logs
   Test: All alerts documented? Escalated appropriately? SAR decisions timely?
   
5. Staff Training Testing:
   Review: Training completion records
   Test: All staff trained within 12 months? Training content current?

Output: Written BSA audit report with findings and management responses
Timeline: Complete by June 30
```

---

### Q3: Remediation and Examination Preparation (July–September)

#### Step 3A: Findings Remediation (Compliance Officer)

```
Activate Compliance Officer for compliance testing findings remediation.

Input: Q2 testing reports; BSA audit report; Internal Audit findings

Remediation process for each finding:
1. Classify finding severity:
   - CRITICAL: Regulatory deadline missed; systemic violation; exam-reportable → immediate
   - SIGNIFICANT: Error rate above threshold; process breakdown → correct within 30 days
   - MODERATE: Isolated errors; documentation gap → correct within 60 days
   - MINOR: Best-practice gap; low risk → correct within 90 days

2. For each finding:
   - Root cause analysis (why did this happen?)
   - Corrective action plan with specific steps and owner
   - Target completion date
   - Evidence of completion (what proof will be on file?)

3. Verify completion:
   - Each corrective action verified with evidence before marking "closed"
   - Re-testing required for systemic findings
   - Internal Auditor validates closure for significant and critical findings

Target: All significant and critical findings CLOSED by September 30 before examination
```

#### Step 3B: NCUA Examination Preparation (Compliance Officer + all agents)

```
Activate Compliance Officer for NCUA examination preparation.

Expected examination: [Month] [Year]
Examination type: [Safety & Soundness / Consumer Compliance / BSA / Combined]

Pre-examination document package — assemble and organize:
BOARD AND GOVERNANCE
- [ ] Board meeting minutes — prior 12 months (or examination cycle)
- [ ] Supervisory Committee minutes — prior 12 months
- [ ] Board-approved policies (all major policies with approval dates)
- [ ] Strategic plan and current-year budget
- [ ] Capital plan (if applicable)

FINANCIAL
- [ ] NCUA 5300 Call Reports — prior 4 quarters
- [ ] Current financial statements (month-end)
- [ ] Investment portfolio schedule
- [ ] Loan portfolio schedule with delinquency aging
- [ ] ALLL calculation and methodology
- [ ] Liquidity analysis and contingency funding plan
- [ ] ALCO meeting minutes — prior 12 months

LENDING
- [ ] Loan policy (current board-approved version)
- [ ] Loan origination procedures
- [ ] Loan file sample (per examiner request — typically 25-50 files)
- [ ] HMDA LAR (current year YTD and prior year final)
- [ ] Delinquency reports and workout tracking

DEPOSITS
- [ ] Deposit operations procedures
- [ ] Rate/fee schedules and Truth in Savings disclosures
- [ ] Reg E complaint/dispute log
- [ ] Dormant account/escheatment schedule

COMPLIANCE AND BSA
- [ ] Compliance Management System documentation
- [ ] Compliance testing results — prior year
- [ ] BSA/AML program documentation (BSA Policy, procedures, training records)
- [ ] SAR log (filing confirmations — NOT SAR content, which is confidential)
- [ ] CTR log and exemption list
- [ ] OFAC screen documentation
- [ ] CIP procedures and testing results
- [ ] Staff training completion records

INFORMATION SECURITY
- [ ] Information security policy (board-approved)
- [ ] Annual risk assessment
- [ ] Incident response plan
- [ ] Business continuity / disaster recovery plan
- [ ] Vendor management list with due diligence status

Timeline: Full package assembled by [DATE — 30 days before expected examination arrival]
```

#### Step 3C: All-Hands Examination Briefing (CEO + all agents)

```
Activate Credit Union CEO for pre-examination staff briefing.

Agenda for briefing:
1. Examination scope and expected timing
2. Examiner document request process:
   - All document requests fulfilled within 24 hours
   - Route all examiner communication through Compliance Officer
   - Do NOT provide documents directly without Compliance Officer awareness
3. Examiner interview protocol:
   - Answer questions directly and factually
   - "I don't know — let me confirm and get back to you" is always acceptable
   - Do NOT speculate or volunteer beyond what is asked
   - Report any examiner concern to Compliance Officer immediately
4. Document organization:
   - All documents provided to examiners are tracked (what was provided, when)
   - Obtain receipts or maintain log of document production
5. Draft findings protocol:
   - All draft findings reviewed by Compliance Officer before management response
   - Factual inaccuracies in draft: Provide documented correction with evidence
   - Policy findings: Prepare management response and corrective action plan

Timeline: Briefing completed at least 2 weeks before expected examination
```

---

### Q4: Examination Execution and Reporting (October–December)

#### Step 4A: On-Site Examination Management (Compliance Officer)

```
Activate Compliance Officer for examination management.

Examination period: [Dates]
Lead examiner: [Name] | Examination team: [Number of examiners]

Daily examination management:
1. Morning check-in with lead examiner — any pending requests?
2. All document requests logged and fulfilled within 24 hours
3. Route all informal conversations with examiners through daily log
4. Brief CEO and relevant managers on examiner activity each day

Handling examiner concerns during examination:
- When examiner identifies a concern: LISTEN; do NOT argue
- Ask: "May I provide additional context or documentation?"
- Respond to document requests within 24 hours — no exceptions
- If examiner identifies a genuine finding: Acknowledge; offer corrective action timeline

Document the examination:
- List of all documents provided (with dates)
- Log of all formal and informal conversations with examiners
- Notes on any areas of examiner focus

At conclusion:
- Exit interview: Note all preliminary findings and concerns
- Compliance Officer prepares written summary for CEO and board
```

#### Step 4B: Examination Response (Compliance Officer + CEO)

```
Activate Compliance Officer for examination findings response.

Input: Draft examination report with MRAs and recommendations

Response process for each finding:
1. Review draft finding: Is it factually accurate?
   - If factual error: Provide specific documentation correction within response window
   - Do NOT dispute findings that are accurate — it damages relationship with examiner
2. Management response format for each MRA:
   - Acknowledgment: "Management agrees with this finding."
   - Root cause: Brief, honest explanation of why this occurred
   - Corrective action: Specific steps already taken and planned
   - Timeline: Specific target dates for each corrective action step
   - Owner: Named individual responsible for completion

CEO deliverable:
- Present examination results to board at next board meeting
- Board motion to accept examination report and approve management response
- Board minutes document the examination presentation

Timeline: Management responses due within examination report response window (typically 30 days)
```

#### Step 4C: Annual Compliance Report (Compliance Officer)

```
Activate Compliance Officer for annual compliance report.

Board report contents:
1. Summary of compliance testing completed during the year
2. Open findings status (from internal testing and examination)
3. Regulatory changes implemented during the year
4. Staff compliance training completion statistics
5. Member complaint summary (volume, categories, resolution times)
6. BSA summary (training completion, program status — do NOT include SAR details)
7. Coming year regulatory change calendar with high-impact items highlighted

Timeline: Annual report presented to board at December meeting (or year-end committee meeting)
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | Annual compliance testing calendar completed | 100% of planned tests by Q3 | Testing reports on file | ☐ |
| 2 | All significant and critical findings closed before examination | 100% by September 30 | Closed finding with evidence | ☐ |
| 3 | BSA independent testing complete | Annual | BSA audit report | ☐ |
| 4 | Pre-exam document package assembled | 100% of requested documents | Document index | ☐ |
| 5 | Staff compliance training completion | 100% by December 31 | Training completion records | ☐ |
| 6 | Information security program board-approved | Annual | Board approval minutes | ☐ |
| 7 | HMDA LAR submitted by March 1 deadline | Annual | FinCEN HMDA submission confirmation | ☐ |
| 8 | Examination management responses filed within window | 100% | Management response with board minutes | ☐ |
| 9 | Annual compliance report presented to board | Annual | Board meeting minutes | ☐ |

**Gate Keepers**: Compliance Officer (CMS program) + Internal Auditor (independent verification) — dual confirmation required for examination readiness

**Gate Decision**:
- **EXAMINATION READY**: All tests complete, all critical findings closed, document package assembled — proceed to examination
- **NOT READY**: Open critical findings or missing documentation — Compliance Officer identifies specific gaps; CEO notified
- **MATERIAL FINDING**: Unresolved MRA or regulatory enforcement risk — CEO + Board immediate notification; legal counsel engagement evaluated

---

## Step-Level Matrix

| Step | Agent | Mode | Authority |
|------|-------|------|-----------|
| 1. Annual Compliance Program Review | Compliance Officer | Execute | Compliance/Regulatory + Escalation |
| 1. Annual Compliance Program Review | Internal Auditor | Advise | Compliance/Regulatory |
| 2. BSA/AML Program Review | BSA Officer | Execute | Compliance/Regulatory |
| 2. BSA/AML Program Review | Compliance Officer | Advise | Compliance/Regulatory + Escalation |
| 3. Independent Audit Testing | Internal Auditor | Execute | Compliance/Regulatory |
| 3. Independent Audit Testing | Compliance Officer | Advise | Compliance/Regulatory + Escalation |
| 4. Findings Remediation & Exam Prep | Compliance Officer | Execute | Compliance/Regulatory + Escalation |
| 4. Findings Remediation & Exam Prep | BSA Officer | Advise | Compliance/Regulatory |
| 5. Board Compliance Briefing | CEO | Gate | Escalation |

**Mode key:** Execute — owns the deliverable, one per step; Advise — contributes expertise, workflow does not wait; Gate — veto authority, workflow stops until cleared.

**Authority key:** Operational — process execution; Credit/Financial — lending and financial judgments; Compliance/Regulatory — regulatory determinations; Escalation — stop/elevate decisions.

---

## Compliance Program Performance Metrics

| Metric | Target | Measurement Frequency |
|--------|--------|-----------------------|
| NCUA examination MRAs (CMS-covered areas) | Zero | Annual |
| Compliance testing calendar completion | 100% by Q3 | Quarterly |
| Critical findings closed before examination | 100% | Annual |
| Staff compliance training completion | 100% by December 31 | Annual |
| HMDA LAR accuracy (resubmission required) | Zero resubmissions | Annual |
| Fair lending pricing disparities | Zero unexplained | Annual |
| Member complaint resolution time | 100% within 30 days | Monthly |
| BSA independent testing — no program deficiencies | Zero critical BSA findings | Annual |

---

*Workflow F is complete when the Compliance Officer confirms all annual testing is done, all findings are closed or have documented remediation plans, the examination has been conducted and management responses filed, and the annual compliance report has been presented to the board. Cycle resets for the next year.*
