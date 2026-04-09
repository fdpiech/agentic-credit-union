# Workflow M Playbook — Vendor Management & Due Diligence

> **Cycle Time**: 4–12 weeks (new vendor onboarding) – Annual (ongoing review) | **Agents**: 5 | **Gate Keepers**: Risk Manager + Compliance Officer

---

## Objective

Ensure every third-party vendor with access to member data, critical operational systems, or material financial impact is selected, contracted, monitored, and exited through a documented, risk-tiered process that meets NCUA supervisory expectations and protects member privacy. No vendor with access to member nonpublic personal information (NPPI) or system criticality rating of High goes live without Risk Manager and Compliance Officer dual sign-off.

## Pre-Conditions

- [ ] Business need for vendor service documented by requesting department head (Risk Manager)
- [ ] Preliminary vendor landscape survey complete — at least three candidates identified (Department Head)
- [ ] Budget authority confirmed for estimated contract value (CFO)
- [ ] Vendor management policy is current and board-approved (NCUA SPG 2019-07 requirement) (Risk Manager)

## Regulatory Framework

| Area | Requirement | Owner |
|------|------------|-------|
| NCUA SPG 2019-07 | Written vendor management program required; risk-tiered due diligence; board reporting on material third parties | Risk Manager |
| GLBA Safeguards Rule (16 CFR Part 314) | Written contracts with service providers accessing member NPPI must require appropriate safeguards; annual oversight | Compliance Officer |
| NCUA Part 748 | Information security program must address service provider oversight; annual board report | Core Systems Administrator |
| BSA/AML (31 CFR Chapter X) | Vendors performing BSA-related services must be assessed for reliability and program adequacy | BSA Officer |
| NCUA board reporting | Material vendor relationships must be reported to the board; material changes require advance notification | CEO |
| State data privacy laws | Vendors processing member data may be subject to state GLBA equivalents or consumer data protection laws | Compliance Officer |
| CFPB third-party oversight | UDAAP liability extends to vendor conduct; credit union is responsible for vendor compliance | Compliance Officer |

---

## Agent Activation Sequence

### Step 1: Vendor Need Identification (Risk Manager + Department Head)

```
Activate Risk Manager and Department Head for vendor need identification and intake.

Requesting department: [Department]
Service needed: [Description of services sought]
Business driver: [Cost reduction / Gap in capability / Regulatory requirement / System replacement]
Estimated annual contract value: $[Amount]
Estimated start date: [Date]

Risk Manager deliverables:
1. Vendor intake form: Complete standard intake with service description, data access requirements, and system integration needs
2. Initial risk classification — assign preliminary tier before due diligence:
   - Tier 1 (Critical/High): Access to member NPPI, mission-critical system dependency, or contract value > $[threshold]
   - Tier 2 (Moderate): Significant operational impact but limited NPPI access or redundant capability exists
   - Tier 3 (Low): Administrative or ancillary services; no NPPI access; easily replaceable
3. NCUA "material" determination: Document whether this vendor meets the credit union's definition of "material vendor" requiring board approval
4. Existing vendor check: Is there an existing vendor relationship that could be expanded before adding a new third party?
5. Project charter: Assign lead from Risk Management; set due diligence timeline by tier:
   - Tier 1: 8–12 weeks full due diligence
   - Tier 2: 4–6 weeks standard due diligence
   - Tier 3: 2–3 weeks streamlined due diligence

Department Head deliverables:
1. Written business requirements document: What must the vendor deliver, at what service level, by when?
2. Internal stakeholder list: Who will manage the vendor relationship day-to-day?
3. Performance baseline: If replacing an existing process, document current cost and performance

Output: Vendor intake package with preliminary tier classification
Decision point: Risk Manager approves advancement to due diligence or redirects to existing vendor
```

### Step 2: Initial Due Diligence (Risk Manager + IT Infrastructure Engineer)

```
Activate Risk Manager and IT Infrastructure Engineer for vendor due diligence.

Vendor(s) under review: [Vendor Name(s)]
Tier classification: [1 / 2 / 3]
Due diligence scope: [Tier-appropriate checklist below]

Risk Manager deliverables — financial and operational due diligence:
1. Financial stability assessment:
   - Request most recent 2 years of audited financial statements (or Dun & Bradstreet / equivalent for smaller vendors)
   - Review for liquidity concerns, going concern language, or significant debt load
   - Assess business continuity: Is vendor financially stable enough to fulfill a multi-year contract?
2. Operational references:
   - Obtain minimum 3 client references of comparable size and complexity
   - Ask specifically: service uptime, issue escalation responsiveness, data incident history
3. Business continuity / disaster recovery:
   - Request vendor BCP/DRP documentation; confirm RPO and RTO commitments
   - For Tier 1 vendors: Require evidence of BCP/DRP testing within prior 12 months
4. Subcontractor / fourth-party risk:
   - Identify material subcontractors; confirm flow-down of security and data requirements
5. Regulatory and legal history:
   - Search for regulatory enforcement actions, material litigation, or data breach history
   - Check CFPB, OCC, and applicable state enforcement databases

IT Infrastructure Engineer deliverables — technical and security due diligence (Tier 1 and 2):
1. Security assessment questionnaire (based on CIS or NIST framework):
   - Encryption standards (in transit and at rest) for member data
   - Access control methodology: MFA requirements, privileged access management
   - Vulnerability management: Patch cadence and penetration testing frequency
2. SOC 2 Type II report review (required for Tier 1 vendors with NPPI access):
   - Review control objectives and exceptions; escalate material exceptions to Risk Manager
3. Network integration requirements:
   - Document all data flows between credit union and vendor
   - Confirm firewall rules, API security standards, and data transfer protocols
4. Data residency: Where is member data hosted? Confirm US jurisdiction or assess cross-border risk

Output: Due diligence report with pass/fail on each criterion by tier
Escalation: If Tier 1 vendor fails SOC 2 review or financial stability threshold → do not proceed; report to Risk Manager and Department Head
Timeline: Per tier — see Step 1
```

### Step 3: Vendor Risk Assessment (Risk Manager + Compliance Officer)

```
Activate Risk Manager and Compliance Officer for formal vendor risk assessment.

Vendor name: [Vendor Name]
Due diligence report received: [Date]
Tier classification (confirmed): [1 / 2 / 3]

Risk Manager deliverables:
1. Inherent risk score — rate each dimension Low / Medium / High:
   - NPPI access: [Y/N] — extent of member data access
   - System criticality: Impact of vendor outage on member service and operations
   - Concentration risk: Is this the sole provider for a critical function?
   - Financial stability: Result of due diligence assessment
   - Geographic / regulatory risk: Offshore operations or third-country data processing
   - Subcontractor risk: Material fourth-party exposure
2. Residual risk score after applying vendor controls (from due diligence):
   - Document control gaps and planned mitigations
3. Risk acceptance memo: For any residual risk rated High — Risk Manager documents rationale for proceeding and mitigating controls
4. Exit strategy assessment: How would we replace this vendor if the relationship ends unexpectedly? What is the estimated transition cost and time? (Required for all Tier 1 and material vendors)
5. Vendor risk register: Add vendor to enterprise vendor risk register with tier, risk score, and next review date

Compliance Officer deliverables:
1. GLBA Safeguards Rule compliance:
   - Confirm contract will include required GLBA service provider provisions: appropriate safeguards requirement; right to audit; incident notification ≤72 hours (align with NCUA 12 CFR 748 Appendix B)
2. CFPB third-party liability analysis:
   - Does vendor interact with members (collections calls, loan servicing portal, marketing)?
   - If yes: Document UDAAP monitoring plan for vendor conduct
3. BSA/AML impact:
   - Does vendor perform any BSA-related function (transaction monitoring, SAR filing support, CIP)?
   - If yes: Assess vendor BSA program adequacy; document in BSA risk assessment
4. Regulatory approval requirements:
   - Federal CUs: Confirm NCUA does not require prior approval for the specific service type
   - Check for state regulatory notification requirements if state-chartered

Output: Signed vendor risk assessment with inherent risk, residual risk, and exit strategy documented
Joint sign-off: Risk Manager + Compliance Officer before advancing to contract negotiation
```

### Step 4: Contract Review & Negotiation (Compliance Officer + CFO)

```
Activate Compliance Officer and CFO for vendor contract review and negotiation.

Vendor name: [Vendor Name]
Vendor risk assessment approved: [Date]
Draft contract version: [Version number / Date]

Compliance Officer deliverables — required contractual provisions:
1. GLBA Safeguards Rule minimum provisions (non-negotiable for NPPI vendors):
   - Vendor must maintain appropriate administrative, technical, and physical safeguards
   - Vendor must notify credit union within [72 hours] of confirmed or suspected data breach
   - Credit union retains right to audit vendor security practices (at reasonable frequency)
   - Vendor must comply with all applicable federal and state privacy laws
2. CFPB/UDAAP provisions (member-facing vendors):
   - Vendor must comply with all applicable consumer protection laws
   - Vendor must cooperate with regulatory examination of records related to credit union
3. Data ownership and return/destruction:
   - All member data is property of the credit union; vendor has no independent data rights
   - Upon contract termination, vendor must return or certify destruction of all member data within [30 days]
4. Regulatory examination access:
   - Credit union regulators (NCUA, CFPB, state) retain right to examine vendor records related to services provided

CFO deliverables — commercial and financial review:
1. Pricing validation: Is the proposed fee structure consistent with market comparison and business case?
2. Price escalation clause: Cap annual fee increases at [X]% or CPI; reject open-ended escalation rights
3. Term and termination:
   - Confirm termination for convenience right with reasonable notice period (90–180 days standard)
   - Confirm termination for cause right; define "cause" to include regulatory non-compliance
   - Exit assistance: Vendor must provide [X] months of transition assistance upon termination
4. SLA penalties: Are financial remedies for SLA failures adequate to cover credit union costs?
5. Liability cap negotiation: Attempt to remove or raise liability cap for data breach events
6. Insurance requirements:
   - General liability: Minimum $[amount]
   - Cyber/E&O insurance: Minimum $[amount] for any vendor with NPPI access
   - Workers' compensation and auto (if applicable)

Output: Redlined contract with all required provisions confirmed or issues flagged
Legal review: Refer to legal counsel for contracts above $[threshold] or with unusual risk profile
Approval authority: CFO approves financial terms; Compliance Officer certifies regulatory provisions
```

### Step 5: Board Approval (if material vendor) (CEO + Board)

```
Activate CEO for board approval of material vendor relationship.

Vendor name: [Vendor Name]
Material vendor determination: [Yes — board approval required / No — CEO approval sufficient]
Contract value: $[Amount] over [Term] years
Vendor risk tier: [1 / 2 / 3]
Contract terms approved by: CFO [Date] + Compliance Officer [Date]

CEO deliverables — board presentation:
1. Board memo / presentation covering:
   - Business rationale: Why this vendor? What problem does it solve?
   - Vendor overview: Company overview, financial stability, reference summary
   - Risk summary: Risk tier, inherent and residual risk scores, key risk mitigants
   - Contract summary: Term, pricing, SLAs, and key protective provisions
   - Exit strategy: How we exit if needed and estimated transition cost
   - Compliance summary: GLBA, UDAAP, and applicable regulatory provisions confirmed
2. Board questions to address:
   - Is this vendor financially stable? What happens if they fail?
   - How do we get member data back if we need to terminate?
   - Who is responsible for ongoing oversight?
3. Board resolution language: "The Board of Directors approves the engagement of [Vendor Name] for [Service] at an estimated annual cost of $[Amount] subject to execution of a contract containing the provisions presented."

Board approval threshold (define in vendor management policy):
- Contract value > $[amount] per year, OR
- Access to member NPPI for > [X] members, OR
- Mission-critical system with no redundant backup

Output: Board resolution in meeting minutes; CEO authorized to execute contract
If board does not approve: Return to negotiation or terminate vendor selection process
```

### Step 6: Onboarding & Implementation (Core Systems Administrator + IT Infrastructure Engineer)

```
Activate Core Systems Administrator and IT Infrastructure Engineer for vendor onboarding and technical implementation.

Vendor name: [Vendor Name]
Signed contract date: [Date]
Go-live target: [Date]
Service description: [Brief description of what is being implemented]

Core Systems Administrator deliverables:
1. Integration project plan:
   - System integration points: document every interface between CU systems and vendor
   - Data file layouts: confirm formats, frequency, and transmission protocols
   - Test environment setup: establish vendor connectivity in test before production
2. User provisioning:
   - Create vendor access credentials per minimum necessary access principle
   - No shared credentials — each vendor user requires individual account
   - Document all vendor access rights in access control log
3. Integration testing:
   - Execute full integration test with production-like data volumes
   - Verify data flows in both directions; confirm no data truncation or field mapping errors
   - Sign off on integration test results before go-live

IT Infrastructure Engineer deliverables:
1. Network security implementation:
   - Configure firewall rules for vendor connectivity — whitelist by IP range, protocol, and port
   - Implement network monitoring / alerting for vendor connection anomalies
   - Confirm VPN or encrypted transmission channel is active before any NPPI transmission
2. Security baseline verification:
   - Confirm vendor MFA is active for all accounts with CU system access
   - Verify encryption in transit (TLS 1.2 minimum; TLS 1.3 preferred) and at rest
3. Incident escalation path: Confirm with vendor their 24/7 contact for security incidents and system outages
4. Monitoring baseline: Establish baseline normal-traffic profile; configure alerts for anomalies

Output: Implementation complete; go-live approved by Core Systems Administrator + IT Infrastructure Engineer
Pre-go-live checklist:
- [ ] Signed contract on file
- [ ] All required legal provisions confirmed (Compliance Officer sign-off)
- [ ] Integration tests passed and results documented
- [ ] Network security controls active and verified
- [ ] Staff trained on vendor interaction workflows
- [ ] Vendor contact list (account manager, technical escalation, security incident) documented
```

### Step 7: Ongoing Monitoring — Annual Minimum (Risk Manager)

```
Activate Risk Manager for annual vendor monitoring review.

Vendor name: [Vendor Name] | Tier: [1 / 2 / 3]
Last review date: [Date] | Contract expiration: [Date]
Review trigger: [Annual scheduled / Material change in vendor / Incident response / Contract renewal]

Annual review deliverables (scope by tier):
Tier 1 (Critical/High) — full annual review:
1. Financial stability re-assessment:
   - Request updated financial statements; re-evaluate going-concern risk
   - Check for ownership changes, mergers, or material regulatory actions since last review
2. Security posture re-assessment:
   - Request updated SOC 2 Type II report; compare to prior year for new exceptions
   - Request evidence of annual penetration test completion
   - Review any security incidents or near-misses since last review
3. SLA performance review:
   - Uptime vs. SLA commitment — full 12-month performance data
   - Incident count and resolution time vs. SLA
   - Any SLA credits owed but not yet claimed?
4. Compliance re-screen:
   - Any new regulatory enforcement actions against vendor?
   - Any changes in vendor subcontractors that affect data flow?
5. Relationship health: Assess whether relationship is functioning well or showing strain

Tier 2 (Moderate) — streamlined annual review:
1. Financial health check (news search + reference to last full assessment)
2. SOC 2 report update (if available) or written attestation of continued compliance
3. SLA performance summary

Tier 3 (Low) — annual attestation:
1. Written vendor confirmation of continued compliance with contract terms
2. No material change in service scope, ownership, or subcontractors

Output: Annual monitoring report filed in vendor file; vendor risk register updated
Escalation triggers — Risk Manager escalates to Compliance Officer and CEO immediately if:
- Vendor confirms or suspects a data breach affecting CU member data
- Vendor financial distress (bankruptcy filing, going concern audit qualification)
- Regulatory enforcement action against vendor related to services provided to the CU
- Material subcontractor change not pre-approved in contract
```

### Step 8: Contract Renewal / Termination (Risk Manager + CFO)

```
Activate Risk Manager and CFO for contract renewal or termination decision.

Vendor name: [Vendor Name] | Contract expiration date: [Date]
Review trigger: [Scheduled renewal — start 6 months before expiration / Performance failure / Regulatory concern / Strategic change]

Risk Manager deliverables:
1. Renewal recommendation based on full annual monitoring history:
   - Vendor performance vs. SLA over contract term
   - Risk profile change since last full due diligence
   - Any unresolved findings from annual reviews
   - Market alternatives: Has the vendor landscape improved? Is competitive re-bid warranted?
2. Re-bid determination:
   - Full competitive re-bid required if: contract value > $[threshold], significant performance issues, or >3-year initial term
   - Sole-source renewal documentation required if waiving competitive process
3. Exit strategy activation (if terminating):
   - Initiate exit plan documented in Step 3; activate transition timeline
   - Member data return/destruction: Trigger contractual data return clause
   - Notify affected staff of transition timeline and responsibilities
   - Transition plan presented to CEO and board (if material vendor)

CFO deliverables:
1. Financial re-negotiation targets:
   - Benchmark current pricing against market and peer credit union data
   - Identify fee components eligible for reduction or elimination
   - Negotiate price cap extension for renewal term
2. Contract value approval:
   - Renewal contract value within original board-approved threshold: CFO approval
   - Renewal contract value exceeds prior threshold: Re-present to board for approval
3. Budget alignment: Confirm renewal cost fits within multi-year budget plan

Output: Executed renewal contract or documented termination plan with data return confirmation
Board notification: Any material vendor termination or significant contract change reported at next board meeting
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | Vendor intake form and preliminary tier classification complete | 100% of new vendors | Signed intake form on file | ☐ |
| 2 | Due diligence completed at tier-appropriate scope | 100% of vendors | Due diligence report with all required elements | ☐ |
| 3 | Formal vendor risk assessment with exit strategy | 100% of Tier 1 and 2 vendors | Signed risk assessment in vendor file | ☐ |
| 4 | Contract contains all required GLBA and data security provisions | 100% of NPPI-access vendors | Compliance Officer contract sign-off on file | ☐ |
| 5 | Board approval obtained for material vendors | 100% of material vendors | Board resolution in meeting minutes | ☐ |
| 6 | Integration testing passed and documented before go-live | 100% | Signed test results | ☐ |
| 7 | Vendor access provisioned with minimum-necessary rights; no shared credentials | 100% | Access control log | ☐ |
| 8 | Annual monitoring completed for all Tier 1 and 2 vendors | Annual; 100% of in-scope vendors | Annual monitoring report in vendor file | ☐ |
| 9 | Vendor risk register current and board-reportable | Updated after each review | Vendor risk register with dates and tier classifications | ☐ |
| 10 | Contract renewal or termination documented with data return confirmation | 100% of expired contracts | Renewal contract or data destruction certificate on file | ☐ |

**Gate Keepers**: Risk Manager (vendor risk program) + Compliance Officer (regulatory compliance) — dual sign-off required at Step 3 (risk assessment) and Step 4 (contract compliance provisions)

**Gate Decision**:
- **COMPLETE**: All criteria met — vendor file is examination-ready; ongoing monitoring scheduled
- **REMEDIATION REQUIRED**: Open finding in due diligence or contract — vendor cannot go live until resolved
- **ESCALATE**: Tier 1 vendor with High residual risk or failed data security assessment — Risk Manager reports to CEO and Board within 5 business days

---

## Step-Level Matrix

| Step | Agent | Mode | Authority |
|------|-------|------|-----------|
| 1. Vendor Need Identification | Risk Manager | Execute | Credit/Financial + Escalation |
| 1. Vendor Need Identification | Branch Manager | Advise | Operational + Escalation |
| 2. Initial Due Diligence | Risk Manager | Execute | Credit/Financial + Escalation |
| 2. Initial Due Diligence | IT Infrastructure Engineer | Advise | Operational |
| 3. Vendor Risk Assessment | Risk Manager | Execute | Credit/Financial + Escalation |
| 3. Vendor Risk Assessment | Compliance Officer | Advise | Compliance/Regulatory + Escalation |
| 4. Contract Review & Negotiation | Compliance Officer | Execute | Compliance/Regulatory + Escalation |
| 4. Contract Review & Negotiation | CFO | Advise | Credit/Financial + Escalation |
| 5. Board Approval (material vendor) | CEO | Gate | Escalation |
| 6. Onboarding & Implementation | Core Systems Administrator | Execute | Operational |
| 6. Onboarding & Implementation | IT Infrastructure Engineer | Advise | Operational |
| 7. Ongoing Monitoring — Annual | Risk Manager | Execute | Credit/Financial + Escalation |
| 8. Contract Renewal / Termination | Risk Manager | Execute | Credit/Financial + Escalation |
| 8. Contract Renewal / Termination | CFO | Advise | Credit/Financial + Escalation |

**Mode key:** Execute — owns the deliverable, one per step; Advise — contributes expertise, workflow does not wait; Gate — veto authority, workflow stops until cleared.

**Authority key:** Operational — process execution; Credit/Financial — lending and financial judgments; Compliance/Regulatory — regulatory determinations; Escalation — stop/elevate decisions.

---

## Performance Metrics

| Metric | Definition | Target | Measurement Frequency |
|--------|-----------|--------|-----------------------|
| Annual monitoring completion rate | % of Tier 1 and 2 vendors with completed annual review | 100% by anniversary date | Annual (tracked monthly) |
| SLA breach rate | # of SLA breaches across active vendor portfolio | < 2 per Tier 1 vendor per year | Quarterly |
| Vendor data incidents | # of confirmed data breaches or NPPI exposures attributed to vendors | 0 per year | Immediate escalation; annual tally |
| Contract expiration visibility | # of contracts expiring within 90 days without renewal action initiated | 0 | Monthly |
| Due diligence cycle time | Calendar days from intake approval to contract execution | ≤ 60 days (Tier 2/3); ≤ 90 days (Tier 1) | Per onboarding |
| Board reporting currency | Material vendor report presented to board | Annual minimum; within 60 days of material change | Per board meeting |
| Vendor risk register accuracy | % of active vendors in register with current tier and review date | 100% | Quarterly |

---

*Workflow M is complete when Risk Manager and Compliance Officer have both signed the vendor risk assessment and contract compliance review, the vendor is live with documented monitoring scheduled, and the vendor is entered in the active vendor risk register.*
