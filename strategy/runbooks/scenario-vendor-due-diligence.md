# Runbook: Emergency Critical Vendor Evaluation

> **Mode**: CANVAS-Full | **Duration**: 2-4 weeks (compressed) | **Agents**: 6 | **Lead**: Risk Manager

> **Pattern**: Scoring Convergence Funnel — Multiple independent assessment tracks run in parallel, each with independent kill authority. Any single track returning a "FAIL" blocks advancement. All tracks must pass to proceed. Compressed timeline due to crisis trigger.

---

## Scenario

A critical vendor has failed, announced end-of-life on a key product, suffered a significant data breach, or otherwise become unable to serve the credit union. The credit union must evaluate and select a replacement vendor under compressed timelines — weeks, not months. Unlike routine vendor management (Workflow M), this is a crisis-triggered evaluation where speed and rigor must coexist. Five parallel assessment tracks evaluate the replacement vendor simultaneously, and any single track has independent authority to issue a FAIL that blocks the engagement.

## When to Activate

- Critical vendor announces end-of-life, bankruptcy, or service discontinuation
- Critical vendor suffers a data breach affecting credit union member data
- Critical vendor fails SOC 2 audit with material findings affecting the credit union
- Regulatory examination finding requires vendor replacement within a defined timeline
- Critical vendor performance degrades below contractual SLAs with no remediation path
- Core processor, card processor, digital banking, or cybersecurity vendor requires emergency replacement
- Contract expiration with no renewal option and insufficient time for standard Workflow M process

---

## Agent Roster

### Assessment Track Leads (Parallel — Independent Kill Authority)
| Agent | Assessment Track | Kill Authority |
|-------|-----------------|----------------|
| **CFO** | Financial Stability Assessment | YES — can independently FAIL the vendor |
| **Core Systems Administrator** | Security and Technical Assessment | YES — can independently FAIL the vendor |
| **Compliance Officer** | Regulatory and Compliance Assessment | YES — can independently FAIL the vendor |
| **Risk Manager** | Operational Fit and Concentration Risk Assessment (Lead + dual track) | YES — can independently FAIL the vendor |

### Command and Escalation
| Agent | Role |
|-------|------|
| **Risk Manager** | Overall lead — convergence gate coordinator, board escalation |
| **CEO** | Board approval authority, contract execution authority, strategic decision |

> **Distinct from Workflow M**: Workflow M (Vendor Management & Due Diligence) is the standard 8-12 week vendor evaluation process for routine procurement. This runbook compresses that timeline to 2-4 weeks for emergency situations. It references the same evaluation criteria as Workflow M but parallelizes all assessment tracks and adds independent kill authority at each track.

---

## Regulatory Framework

| Obligation | Regulation | Owner | Deadline |
|-----------|-----------|-------|---------|
| Third-party risk management program | NCUA Supervisory Priority Guidance 2019-07 | Risk Manager | Ongoing — all vendor evaluations documented |
| GLBA Safeguards — vendor information security | 16 CFR 314 (FTC Safeguards Rule); 12 CFR 748 | Core Systems Administrator + Compliance Officer | Before contract execution — security assessment required |
| CFPB third-party oversight — service provider monitoring | CFPB Bulletin 2012-03 (updated 2024) | Compliance Officer | Documented oversight before engagement |
| NCUA concentration risk — single-vendor dependency | NCUA SPG 2019-07 | Risk Manager + CFO | Assessed before contract execution |
| BSA/AML — vendor access to member data | BSA regulations; NCUA Part 748 | Compliance Officer | Vendor BSA obligations documented in contract |
| Business continuity — vendor recovery capabilities | FFIEC BCP Handbook | Risk Manager + Core Systems Administrator | Vendor BCP reviewed and documented |
| Contract requirements — regulatory minimum terms | NCUA SPG 2019-07 Section IV | Compliance Officer | Contract includes all required regulatory provisions |

> **Critical**: NCUA SPG 2019-07 requires that vendor due diligence be commensurate with the risk and complexity of the relationship. Emergency timelines do not reduce the rigor of assessment — they compress the calendar but not the substance.

---

## Assessment Track Execution (All Tracks Launch Simultaneously)

### Track 1: Financial Stability Assessment

```
Activate CFO — VENDOR FINANCIAL STABILITY ASSESSMENT.

Vendor: [Vendor Name]
Service: [Critical service being replaced]
Assessment deadline: [Date — Week 2]

FINANCIAL ASSESSMENT CRITERIA:
1. Financial statements review — audited financials (3 years if available):
   - Revenue trend — stable, growing, or declining?
   - Profitability — operating income positive? Net income trend?
   - Debt-to-equity ratio — overleveraged?
   - Cash flow — operating cash flow positive?
   - Going concern opinion from auditor? Any qualifications?

2. Funding and ownership:
   - Ownership structure — private equity, publicly traded, founder-owned?
   - Recent funding rounds or capital events?
   - Risk of acquisition, pivoting, or sunsetting the product?
   - Customer concentration — is the vendor overly dependent on a few large clients?

3. Insurance and bonding:
   - Errors and omissions (E&O) insurance — adequate coverage?
   - Cyber liability insurance — coverage amount and scope?
   - Fidelity bond — if vendor handles member funds?

4. Financial stability score:
   - PASS: Stable financials, adequate insurance, reasonable ownership structure
   - CONDITIONAL: Minor concerns that can be mitigated through contract terms
   - FAIL: Material financial instability, inadequate insurance, or going concern risk

CFO DECISION: [PASS / CONDITIONAL / FAIL]
If FAIL → vendor eliminated — notify Risk Manager immediately
```

### Track 2: Security and Technical Assessment

```
Activate Core Systems Administrator — VENDOR SECURITY AND TECHNICAL ASSESSMENT.

SECURITY ASSESSMENT CRITERIA:
1. SOC 2 Type II report review:
   - Report date — current (within 12 months)?
   - Scope — does it cover the services the credit union will use?
   - Exceptions or qualifications — any material findings?
   - Complementary User Entity Controls (CUECs) — what must the CU implement?

2. Information security program:
   - Encryption — data at rest and in transit (minimum AES-256 / TLS 1.2+)
   - Access controls — multi-factor authentication, role-based access, privileged access management
   - Incident response plan — documented, tested, notification timeline
   - Vulnerability management — patching cadence, penetration testing frequency
   - Data handling — data classification, retention, destruction policies

3. Technical architecture assessment:
   - Integration method — API, file transfer, real-time, batch?
   - Uptime SLA — what availability does the vendor guarantee?
   - Disaster recovery — RPO and RTO commitments?
   - Data residency — where is credit union data stored? (US-only required)
   - Scalability — can the vendor handle the credit union's volume?

4. Penetration test results:
   - Third-party penetration test — recent results available?
   - Critical or high findings — remediated?

5. Security and technical score:
   - PASS: SOC 2 clean, strong security program, viable technical architecture
   - CONDITIONAL: Minor findings with documented remediation timeline
   - FAIL: No SOC 2, material security gaps, unacceptable technical risk

Core Systems Administrator DECISION: [PASS / CONDITIONAL / FAIL]
If FAIL → vendor eliminated — notify Risk Manager immediately
```

### Track 3: Regulatory and Compliance Assessment

```
Activate Compliance Officer — VENDOR REGULATORY AND COMPLIANCE ASSESSMENT.

COMPLIANCE ASSESSMENT CRITERIA:
1. Regulatory experience:
   - Does the vendor serve other NCUA-regulated credit unions?
   - Familiarity with credit union regulatory requirements (TILA, Reg E, BSA, etc.)?
   - Any regulatory enforcement actions against the vendor?
   - CFPB service provider examination history (if applicable)?

2. Contract regulatory requirements (NCUA SPG 2019-07):
   - [ ] Right to audit — credit union and NCUA examination access
   - [ ] Subcontractor disclosure and approval requirements
   - [ ] Data ownership — credit union owns its data; portability guaranteed
   - [ ] Termination provisions — adequate transition period and data return
   - [ ] Confidentiality and data security obligations
   - [ ] Insurance requirements — E&O, cyber liability, general liability
   - [ ] Business continuity and disaster recovery commitments
   - [ ] Regulatory compliance obligations — BSA, GLBA, applicable consumer regulations
   - [ ] Notification obligations — breaches, material changes, subcontractor changes
   - [ ] Indemnification provisions — vendor liability for negligence and breach

3. GLBA Safeguards compliance:
   - Vendor's information security program documented?
   - Vendor contractually obligated to protect member nonpublic personal information?
   - Vendor incident notification timeline acceptable (≤ 72 hours)?

4. BSA/AML considerations:
   - If vendor accesses member data: BSA obligations documented?
   - If vendor processes transactions: AML monitoring responsibilities defined?

5. Compliance score:
   - PASS: Regulatory experience adequate, all contract requirements met, GLBA compliant
   - CONDITIONAL: Contract modifications needed but vendor willing to negotiate
   - FAIL: Vendor unwilling to meet regulatory contract requirements, or material compliance risk

Compliance Officer DECISION: [PASS / CONDITIONAL / FAIL]
If FAIL → vendor eliminated — notify Risk Manager immediately
```

### Track 4: Operational Fit Assessment

```
Activate Risk Manager — VENDOR OPERATIONAL FIT ASSESSMENT.

OPERATIONAL FIT CRITERIA:
1. Service delivery model:
   - Implementation timeline — can the vendor meet the credit union's emergency deadline?
   - Implementation team — dedicated resources, experience with similar implementations?
   - Training and onboarding — what does the vendor provide?
   - Ongoing support model — dedicated account manager, support hours, escalation path?
   - Service level agreements — response times, resolution times, availability?

2. Reference checks:
   - Minimum 3 credit union references (preferably similar asset size)
   - Reference questions: implementation experience, ongoing support quality, issue resolution
   - Any references report significant service failures?

3. Business continuity:
   - Vendor BCP and DR plan — documented and tested?
   - Last DR test date and results?
   - Geographic redundancy — multiple data centers?
   - Recovery commitments align with credit union needs?

4. Exit strategy:
   - Data portability — can the credit union extract its data in usable format?
   - Transition assistance — vendor contractually obligated to support migration away?
   - Transition timeline — how long to move to another vendor if needed?

5. Operational fit score:
   - PASS: Vendor can meet timeline, strong references, adequate BCP, viable exit strategy
   - CONDITIONAL: Minor concerns manageable with contract terms or process adjustments
   - FAIL: Cannot meet timeline, poor references, or no viable exit strategy

Risk Manager DECISION: [PASS / CONDITIONAL / FAIL]
If FAIL → vendor eliminated — notify Risk Manager (self-document)
```

### Track 5: Concentration Risk Assessment

```
Activate Risk Manager + CFO — CONCENTRATION RISK ASSESSMENT.

CONCENTRATION RISK CRITERIA:
1. Vendor dependency analysis:
   - How many critical services does this vendor provide to the credit union?
   - If this vendor fails, what is the impact on credit union operations?
   - Is there a viable alternative if this vendor relationship fails?

2. Industry concentration:
   - What percentage of credit unions in the credit union's asset class use this vendor?
   - If this vendor fails, is the impact industry-wide or institution-specific?
   - NCUA has expressed concern about vendor concentration in specific service areas

3. Geographic and operational concentration:
   - Is the vendor's primary operation in a disaster-prone area?
   - Single point of failure in vendor's infrastructure?

4. Cost concentration:
   - What percentage of the credit union's vendor budget goes to this vendor?
   - Are pricing terms reasonable for the service scope?
   - Total cost of ownership vs. alternatives?

5. Concentration risk score:
   - PASS: Acceptable concentration risk, alternatives exist, pricing reasonable
   - CONDITIONAL: Elevated concentration risk — mitigated by contract terms or BCP
   - FAIL: Unacceptable concentration risk — single point of failure with no mitigation

Risk Manager + CFO DECISION: [PASS / CONDITIONAL / FAIL]
If FAIL → vendor eliminated
```

---

## Convergence Gate

**Gate Keeper**: Risk Manager (coordinator) + CEO (final authority)

All five assessment tracks must reach their decision before the convergence gate opens. The gate evaluates the combined results.

| Track | Lead | Decision | Conditional Notes |
|-------|------|----------|-------------------|
| Financial Stability | CFO | [PASS / CONDITIONAL / FAIL] | |
| Security / Technical | Core Systems Administrator | [PASS / CONDITIONAL / FAIL] | |
| Regulatory / Compliance | Compliance Officer | [PASS / CONDITIONAL / FAIL] | |
| Operational Fit | Risk Manager | [PASS / CONDITIONAL / FAIL] | |
| Concentration Risk | Risk Manager + CFO | [PASS / CONDITIONAL / FAIL] | |

### Gate Decision Rules

```
IF any track = FAIL:
   → VENDOR REJECTED — no exceptions
   → Risk Manager documents rejection rationale
   → Return to vendor search or activate contingency plan

IF all tracks = PASS:
   → VENDOR APPROVED — proceed to contract negotiation
   → Risk Manager prepares board approval package

IF mix of PASS and CONDITIONAL:
   → CONDITIONAL APPROVAL — proceed to contract negotiation with conditions
   → Conditional items must be resolved in contract terms before execution
   → Risk Manager documents conditions and required contract provisions
   → CEO reviews conditions and confirms acceptance before board submission
```

---

## Post-Gate: Contract and Board Approval (Week 3-4)

```
Activate CEO — CONTRACT NEGOTIATION AND BOARD APPROVAL.

Contract negotiation:
1. Compliance Officer: All NCUA SPG 2019-07 required terms included in contract
2. CFO: Pricing, payment terms, and total cost of ownership confirmed
3. Core Systems Administrator: Technical SLAs, integration specifications, support terms
4. Risk Manager: All CONDITIONAL items from assessment tracks addressed in contract
5. CEO: Contract reviewed by outside counsel if contract value warrants

Board approval package:
1. Risk Manager: Vendor assessment summary — all 5 track results
2. CFO: Financial analysis — cost, ROI, budget impact
3. Compliance Officer: Regulatory compliance confirmation
4. Core Systems Administrator: Technical feasibility confirmation
5. Risk Manager: Recommendation memo — proceed / do not proceed
6. CEO: Present to board — motion and vote required for critical vendor contract

Board decision:
- APPROVED: Contract executed; proceed to vendor onboarding (see scenario-vendor-onboarding.md)
- APPROVED WITH CONDITIONS: Specific board conditions must be met before contract execution
- REJECTED: Return to vendor search; activate contingency plan
```

---

## Quality Gate Checklist

| # | Criterion | Owner | Deadline | Status |
|---|-----------|-------|---------|--------|
| 1 | Emergency vendor evaluation activated — all track leads assigned | Risk Manager | Day 1 | ☐ |
| 2 | Financial stability assessment complete | CFO | Week 2 | ☐ |
| 3 | Security and technical assessment complete | Core Systems Administrator | Week 2 | ☐ |
| 4 | Regulatory and compliance assessment complete | Compliance Officer | Week 2 | ☐ |
| 5 | Operational fit assessment complete | Risk Manager | Week 2 | ☐ |
| 6 | Concentration risk assessment complete | Risk Manager + CFO | Week 2 | ☐ |
| 7 | Convergence gate decision rendered — all tracks evaluated | Risk Manager | Week 2 | ☐ |
| 8 | Contract negotiation complete with all required terms | CEO + Compliance Officer | Week 3 | ☐ |
| 9 | Board approval obtained | CEO | Week 3-4 | ☐ |
| 10 | Transition plan from failed vendor documented | Core Systems Administrator + Risk Manager | Week 4 | ☐ |

**Gate Keepers**: Risk Manager (convergence gate coordinator) + CEO (final authority and board liaison)

**Gate Decision**:
- **APPROVED**: All tracks PASS — vendor cleared for contract execution
- **CONDITIONAL**: Mixed PASS/CONDITIONAL — contract must resolve conditions before execution
- **REJECTED**: Any track FAIL — vendor eliminated; restart search or activate contingency
- **CONTINGENCY**: No acceptable vendor identified — interim service plan activated; extended search authorized

---

## Key Risks to Manage

| Risk | Owner | Mitigation |
|------|-------|-----------|
| Emergency timeline causes corners to be cut on due diligence | Risk Manager | Compress calendar, not substance — all 5 tracks must complete fully |
| Vendor provides incomplete or misleading information | All track leads | Independent verification — SOC 2 reports, financial statements, reference checks |
| Single vendor candidate — no alternatives | Risk Manager + CEO | Begin evaluation of 2+ vendors if possible; document sole-source justification if only one |
| Board approval delayed — extends timeline | CEO | Pre-brief board chair; emergency board session authority |
| Contract terms inadequate — regulatory exposure | Compliance Officer | NCUA SPG 2019-07 checklist applied to every contract — no exceptions |
| Failed vendor transition gap — service interruption | Core Systems Administrator | Overlap period in transition plan; interim manual processes documented |
| Staff capacity to evaluate while managing operations | Risk Manager + CEO | Temporary reassignment or outside consultant for assessment support |

---

## Activation Prompt

```
Activate Risk Manager in CANVAS-Full mode for Emergency Critical Vendor Evaluation.

Failed/failing vendor: [Vendor Name]
Critical service affected: [Service description]
Reason for emergency evaluation: [Failure / EOL / Breach / Regulatory / Performance]
Replacement vendor candidate(s): [Vendor name(s)]
Timeline constraint: [Weeks available before service gap]

Execute the CANVAS Emergency Vendor Evaluation — Scoring Convergence Funnel protocol:

PARALLEL ASSESSMENT TRACKS (all launch simultaneously):
- Track 1: Financial Stability (CFO) — independent kill authority
- Track 2: Security / Technical (Core Systems Administrator) — independent kill authority
- Track 3: Regulatory / Compliance (Compliance Officer) — independent kill authority
- Track 4: Operational Fit (Risk Manager) — independent kill authority
- Track 5: Concentration Risk (Risk Manager + CFO) — independent kill authority

CONVERGENCE GATE: ALL tracks must PASS or CONDITIONAL — single FAIL = vendor rejected
Contract negotiation and board approval follow gate clearance.
Any track lead can independently kill the evaluation at any time.
Reference: agentic-credit-union/strategy/playbooks/workflow-m-vendor-management.md
Reference: agentic-credit-union/strategy/playbooks/workflow-q-core-system-conversion.md
```

---

*CANVAS Emergency Vendor Evaluation Runbook — Speed does not reduce rigor. Five independent assessments, five independent kill switches, one convergence gate. Every track must pass — no exceptions, no overrides.*
