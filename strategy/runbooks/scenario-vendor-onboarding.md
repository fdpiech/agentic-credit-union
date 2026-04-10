# Runbook: Critical System Vendor Integration

> **Mode**: CANVAS-Full | **Duration**: 12 weeks | **Agents**: 8 | **Lead**: CIO

> **Pattern**: External Dependency Chain — Dual-timeline management where the credit union's internal track and the vendor's external track must synchronize at defined integration checkpoints. Introduces explicit go/no-go rollback gates at each sync point where both sides must be ready before advancing.

---

## Scenario

The credit union has selected and contracted a new critical system vendor (post-evaluation — see scenario-vendor-due-diligence.md for the selection process). Now the vendor must be integrated into credit union operations: environments provisioned, data migrated, integrations built, staff trained, and the system brought live. This runbook manages the dual-timeline coordination between the credit union's internal preparation and the vendor's external delivery, with explicit sync points where both timelines must converge. At each sync point, a go/no-go rollback gate determines whether to proceed, remediate, or roll back.

## When to Activate

- New critical system vendor contract executed (core processor, card processor, digital banking, lending platform, cybersecurity)
- Vendor integration project kickoff scheduled
- Board has approved the vendor engagement (see scenario-vendor-due-diligence.md Quality Gate #9)
- Post-merger system integration required (see scenario-merger-conversion.md)
- Core system conversion project entering implementation phase (see Workflow Q)

> **Distinct from Workflow M**: Workflow M covers vendor selection and ongoing management. This runbook covers the post-selection critical system integration with dual-timeline coordination. **Distinct from Workflow Q**: Workflow Q covers the full core system conversion lifecycle. This runbook provides the detailed dual-timeline integration framework applicable to any critical system vendor, not just core processors.

---

## Agent Roster

### CU Internal Track Team
| Agent | Role |
|-------|------|
| **CIO** | Overall lead — dual-timeline coordinator, vendor relationship manager, escalation authority |
| **Core Systems Administrator** | Technical integration lead — data mapping, API configuration, system testing |
| **IT Infrastructure Engineer** | Network, connectivity, firewall rules, environment preparation |
| **CHRO** | Staff training program design and delivery, change management |
| **Branch Manager** | Branch readiness, staff operational training, member experience during transition |
| **Marketing Manager** | Member communication plan, website updates, transition messaging |

### Governance and Risk Oversight
| Agent | Role |
|-------|------|
| **Risk Manager** | Integration risk assessment, rollback gate authority, vendor performance monitoring |
| **Compliance Officer** | Regulatory compliance validation, disclosure accuracy testing, data integrity oversight |

---

## Regulatory Framework

| Obligation | Regulation | Owner | Deadline |
|-----------|-----------|-------|---------|
| NCUA expectations for system conversions | NCUA examination guidance; SPG 2019-07 | Compliance Officer | Documented throughout conversion |
| Member notification — account access changes | NCUA guidance on system conversions | Marketing Manager + Compliance Officer | 30 days before go-live (minimum) |
| Data integrity validation — member records | NCUA examination expectations | Core Systems Administrator + Compliance Officer | Before go-live — 100% balance reconciliation |
| GLBA Safeguards — vendor data handling | 12 CFR 748; 16 CFR 314 | Compliance Officer + Risk Manager | Validated before data migration |
| Reg E — electronic fund transfer continuity | 12 CFR 1005 | Compliance Officer + Deposit Operations (support) | Verified before go-live |
| Business continuity during transition | FFIEC BCP Handbook | Risk Manager + CIO | BCP updated before go-live |
| Disclosure accuracy in new system | TILA (12 CFR 1026), Reg DD (12 CFR 707), Reg E (12 CFR 1005) | Compliance Officer | Tested and verified before go-live |

> **Critical**: NCUA examiners will review critical system conversions at the next examination. Complete documentation of the conversion process — including testing, data validation, rollback decisions, and issue resolution — is essential for a clean examination.

---

## Dual-Timeline Execution

The CU internal track and vendor external track run in parallel with four sync points where both timelines must converge. At each sync point, a rollback gate evaluates whether to proceed, remediate, or roll back.

### Timeline Overview

```
WEEK:  1----2----3----4----5----6----7----8----9----10---11---12
       |                   |                   |              |
CU:    [--- Preparation --][-- Integration ---][- Parallel Run + Go-Live -]
       |                   |                   |              |
VENDOR:[--- Environment --][-- Data/Config ---][- Testing/UAT + Go-Live -]
       |                   |                   |              |
SYNC:  Kickoff        Sync 1             Sync 2         Sync 3 / Go-Live
                   (Env Ready)       (Data Migrated)   (Parallel Complete)
```

---

### Phase 1: Preparation (Weeks 1-4)

#### CU Internal Track

```
Activate CIO — PROJECT KICKOFF AND CU PREPARATION.

Week 1: Project structure
1. Establish dual-timeline project plan with vendor project manager
2. Assign CU track owners for each workstream
3. Define sync point criteria and rollback gate requirements
4. Establish communication cadence:
   - Daily standups (CU internal)
   - Twice-weekly joint calls with vendor
   - Weekly executive status report to CEO and board liaison
5. Risk Manager: Initial integration risk assessment — document top 10 risks and mitigations

Activate Core Systems Administrator — DATA MAPPING AND INTEGRATION PLANNING.

Weeks 1-4: Technical preparation
1. Data mapping — current system fields to new system fields:
   - Member/account master data — every field mapped
   - Loan data — all products, all fields, all statuses
   - Deposit data — all products, all fields, all statuses
   - Transaction history — retention scope and format
   - Card data — coordinate with card processor
   - Document imaging / attachment migration scope
2. Integration specifications:
   - API definitions for each integration point (card processor, ACH, Fed, digital banking, etc.)
   - File transfer specifications for batch integrations
   - Real-time vs. batch determination for each integration
3. Data cleansing requirements identified — fix data quality issues BEFORE migration
4. Test environment requirements communicated to vendor

Activate IT Infrastructure Engineer — ENVIRONMENT PREPARATION.

Weeks 1-4: Infrastructure readiness
1. Network connectivity to vendor environment — VPN, dedicated circuit, or cloud connectivity
2. Firewall rules for vendor integration endpoints
3. Bandwidth assessment — sufficient for data migration and ongoing traffic?
4. Authentication and access management — SSO, MFA, service accounts
5. Monitoring tools configured for new vendor system
6. Backup and recovery procedures for transition period
```

#### Vendor External Track (Weeks 1-4)

```
VENDOR RESPONSIBILITIES (CIO monitors):
1. Provision credit union's environment (cloud or hosted)
2. Configure base system per credit union specifications
3. Establish connectivity to credit union network
4. Provide test environment with representative configuration
5. Assign dedicated implementation team with named resources
6. Deliver data migration tools and specifications
7. Provide training environment and materials
```

#### SYNC POINT 1: Environment Ready (End of Week 4)

```
ROLLBACK GATE 1 — ENVIRONMENT READY

Gate Keeper: CIO + Core Systems Administrator + IT Infrastructure Engineer

CU Track Criteria:
- [ ] Data mapping complete — all fields mapped, transformations documented
- [ ] Integration specifications finalized — all endpoints defined
- [ ] Network connectivity established and tested
- [ ] CU test environment accessible
- [ ] Data cleansing complete — source data ready for migration

Vendor Track Criteria:
- [ ] CU environment provisioned and accessible
- [ ] Base system configured per specifications
- [ ] Test environment available with representative data
- [ ] Data migration tools delivered and tested with sample data
- [ ] Implementation team assigned and engaged

GATE DECISION:
- GO: Both tracks complete — proceed to Phase 2 (Integration)
- REMEDIATE: Specific items incomplete — 1-week remediation window; re-gate at Week 5
- ROLLBACK: Material readiness gaps — pause project; escalate to CEO; renegotiate timeline with vendor
```

---

### Phase 2: Integration and Testing (Weeks 5-8)

#### CU Internal Track

```
Activate Core Systems Administrator — DATA MIGRATION AND INTEGRATION TESTING.

Weeks 5-6: Data migration
1. Test data migration — full extract from current system to vendor test environment
2. Data validation — every record reconciled:
   - Member count: source vs. destination (100% match required)
   - Account balances: source vs. destination (100% match — penny-perfect)
   - Loan balances: source vs. destination (100% match — penny-perfect)
   - Transaction history: record counts verified
3. Integration testing — each integration point tested end-to-end:
   - Card processor connectivity
   - ACH origination and receipt
   - Federal Reserve / FedLine connectivity
   - Digital banking / mobile app integration
   - Bill pay integration
   - Wire transfer connectivity
4. Document all migration issues — resolution tracked to closure

Weeks 7-8: User acceptance testing (UAT)
1. Functional testing by each department — test every workflow:
   - Account opening (Member Services)
   - Loan origination (Loan Officer)
   - Teller transactions (Branch Manager)
   - Deposit operations (Deposit Operations Manager — support role)
   - Compliance disclosures (Compliance Officer)
2. UAT issue tracking — all issues documented with severity rating
3. Severity 1 (critical) issues must be resolved before go-live — no exceptions
4. Severity 2 (major) issues must have documented workaround or resolution timeline

Activate Compliance Officer — REGULATORY COMPLIANCE TESTING.

Weeks 7-8: Compliance validation
1. Disclosure output testing — every disclosure template in new system:
   - TILA disclosures — APR accuracy (12 CFR 1026)
   - Truth in Savings disclosures — APY accuracy (12 CFR 707)
   - Reg E disclosures — electronic fund transfer terms
   - Adverse action notices — content and format
2. BSA/AML monitoring — configured and functional in new system?
3. CTR and SAR filing workflows — tested end-to-end?
4. HMDA data capture — all required fields captured accurately?
5. Reg CC holds — funds availability calculated correctly?
6. Report: Compliance testing results — PASS / FAIL with specific findings

Activate CHRO — STAFF TRAINING PROGRAM.

Weeks 5-8: Training
1. Training curriculum developed — role-based modules:
   - Teller / MSR workflows
   - Loan officer workflows
   - Back-office operations
   - Management reporting
   - System administration
2. Train-the-trainer program with vendor (Week 5-6)
3. Staff training delivery (Week 7-8):
   - All member-facing staff trained before go-live
   - Training completion tracked — 100% required
   - Practice sessions in test environment
4. Branch Manager: Coordinate branch-level training schedule
```

#### Vendor External Track (Weeks 5-8)

```
VENDOR RESPONSIBILITIES (CIO monitors):
1. Support data migration testing — resolve migration tool issues
2. Configure integrations per CU specifications
3. Resolve UAT issues — Severity 1 within 48 hours, Severity 2 within 1 week
4. Deliver final training materials
5. Conduct vendor-side integration testing for all connectivity points
6. Prepare production environment for go-live
```

#### SYNC POINT 2: Data Migrated and Tested (End of Week 8)

```
ROLLBACK GATE 2 — DATA MIGRATED AND TESTED

Gate Keeper: CIO + Core Systems Administrator + Compliance Officer + Risk Manager

CU Track Criteria:
- [ ] Data migration tested — 100% balance reconciliation achieved
- [ ] All integrations tested end-to-end — card, ACH, Fed, digital banking
- [ ] UAT complete — all Severity 1 issues resolved
- [ ] Compliance disclosure testing — all disclosures accurate
- [ ] Staff training — 100% completion for member-facing roles
- [ ] Rollback plan documented and tested

Vendor Track Criteria:
- [ ] All CU-reported issues resolved or documented with workaround
- [ ] Production environment ready for parallel run
- [ ] Vendor integration testing complete — all connectivity points verified
- [ ] Vendor support team staffed for parallel run and go-live period

GATE DECISION:
- GO: Both tracks complete — proceed to Phase 3 (Parallel Run + Go-Live)
- REMEDIATE: Specific items incomplete — 1-week remediation window; re-gate at Week 9
- ROLLBACK: Material gaps in data integrity, compliance, or integration — DO NOT proceed
  → Escalate to CEO; assess project viability; renegotiate with vendor
```

---

### Phase 3: Parallel Run and Go-Live (Weeks 9-12)

#### CU Internal Track

```
Activate CIO — PARALLEL RUN COORDINATION.

Weeks 9-10: Parallel run
1. Both systems operate simultaneously — old system remains primary
2. Daily reconciliation — new system results compared to old system:
   - End-of-day balances compared (all accounts)
   - Transaction processing compared (all transaction types)
   - Integration results compared (ACH, card, wire)
   - Disclosure output compared
3. Issue resolution — any discrepancy investigated and resolved before go-live
4. Staff gaining production experience in new system (non-member-facing transactions)

Activate Marketing Manager — MEMBER COMMUNICATION.

Weeks 9-10: Transition communication
1. Member notification (minimum 30 days before go-live):
   - What is changing — new system, potential brief service interruption
   - What is NOT changing — account numbers (if applicable), direct deposits, bill pay
   - What members need to do — update mobile app, new online banking enrollment (if required)
   - Timeline — when changes take effect
   - How to get help — branch, phone, website
2. Website transition page — FAQ, timeline, contact information
3. Branch signage and staff talking points
4. Social media — proactive messaging, monitor for member questions

Activate Core Systems Administrator — GO-LIVE PREPARATION.

Week 11: Final preparation
1. Final data migration — production extract from old system (scheduled cutover)
2. Go-live weekend plan:
   - Friday: Final data extract from old system at end of business
   - Saturday: Data migration to new production system
   - Saturday-Sunday: Full reconciliation — every balance, every account
   - Sunday: Integration testing in production — all connectivity points live
   - Sunday 6:00 PM: Go/No-Go decision
   - Monday: New system live for member transactions
3. Rollback plan staged — old system kept operational for immediate rollback if needed
4. Surge support staffing plan for go-live week

Week 12: Go-live and stabilization
1. Go-live day: All-hands support — every integration monitored
2. Branch Manager: Branch managers on floor — visible leadership, member support
3. Issue triage: Critical (service outage) → immediate vendor escalation
4. Daily reconciliation for first 5 business days post-go-live
5. Old system kept available for rollback through Week 12
6. End of Week 12: Old system decommission decision
```

#### Vendor External Track (Weeks 9-12)

```
VENDOR RESPONSIBILITIES (CIO monitors):
1. Support parallel run — resolve discrepancies within 24 hours
2. Production environment fully operational for go-live
3. Go-live weekend support — vendor team on-site or on-call 24/7
4. Post-go-live support — dedicated team for first 2 weeks
5. Issue resolution SLA: Severity 1 — 2 hours; Severity 2 — 8 hours; Severity 3 — 48 hours
```

#### SYNC POINT 3: Go-Live Gate (Sunday 6:00 PM, Week 11)

```
ROLLBACK GATE 3 — GO-LIVE DECISION

Gate Keeper: CIO + CEO + Core Systems Administrator + Compliance Officer + Risk Manager

CU Track Criteria:
- [ ] Parallel run complete — no unresolved discrepancies
- [ ] Final data migration complete — 100% balance reconciliation (penny-perfect)
- [ ] All integrations live and tested in production
- [ ] Staff trained and ready — branch managers confirm readiness
- [ ] Member communications delivered — members informed of transition
- [ ] Rollback plan tested and staged — old system ready for immediate reactivation
- [ ] Surge support staff scheduled for go-live week

Vendor Track Criteria:
- [ ] Production environment operational — all services available
- [ ] Vendor support team staffed for go-live (on-site or on-call 24/7)
- [ ] All Severity 1 and Severity 2 issues from parallel run resolved
- [ ] Vendor confirms production readiness — written sign-off

GATE DECISION:
- GO-LIVE: Both tracks complete — new system goes live Monday morning
- DELAY: Specific items need 24-48 hours — delay go-live; assess next available window
- ROLLBACK: Material issues prevent safe go-live — remain on old system; renegotiate timeline
  → CEO communicates to board; Marketing Manager communicates to members if go-live was announced
```

---

## Quality Gate Checklist

| # | Criterion | Owner | Deadline | Status |
|---|-----------|-------|---------|--------|
| 1 | Dual-timeline project plan established | CIO | Week 1 | ☐ |
| 2 | Data mapping complete — all fields | Core Systems Administrator | Week 4 | ☐ |
| 3 | Sync Point 1 — Environment Ready gate passed | CIO | Week 4 | ☐ |
| 4 | Data migration tested — 100% reconciliation | Core Systems Administrator | Week 6 | ☐ |
| 5 | All integrations tested end-to-end | Core Systems Administrator + IT Infrastructure Engineer | Week 8 | ☐ |
| 6 | Compliance disclosure testing passed | Compliance Officer | Week 8 | ☐ |
| 7 | Staff training 100% complete | CHRO + Branch Manager | Week 8 | ☐ |
| 8 | Sync Point 2 — Data Migrated gate passed | CIO + Compliance Officer | Week 8 | ☐ |
| 9 | Parallel run complete — no unresolved discrepancies | Core Systems Administrator | Week 10 | ☐ |
| 10 | Member communication delivered (30-day notice) | Marketing Manager | Week 9 | ☐ |
| 11 | Sync Point 3 — Go-Live gate passed | CIO + CEO | Week 11 | ☐ |
| 12 | Post-go-live stabilization — 5-day reconciliation clean | Core Systems Administrator + CFO | Week 12 | ☐ |

**Gate Keepers**: CIO (project authority) + Core Systems Administrator (technical readiness) + Compliance Officer (regulatory compliance) + Risk Manager (risk oversight)

**Gate Decision**:
- **GO**: Both CU and vendor tracks meet all sync point criteria — advance to next phase
- **REMEDIATE**: Specific gaps identified — remediation window granted; re-gate required
- **ROLLBACK**: Material gaps — do not advance; escalate to CEO; renegotiate with vendor
- **COMPLETE**: Post-go-live stabilization successful; old system decommissioned; board report delivered

---

## Key Risks to Manage

| Risk | Owner | Mitigation |
|------|-------|-----------|
| Data migration errors — member balances incorrect | Core Systems Administrator | 100% balance reconciliation required — no exceptions; parallel run validates |
| Vendor misses delivery milestones | CIO | Contractual SLAs with penalties; weekly milestone tracking; escalation at first miss |
| Integration failure at go-live — ACH, card, or Fed connectivity | Core Systems Administrator + IT Infrastructure Engineer | Integration tested in parallel run; rollback plan staged for immediate reactivation |
| Staff not ready — training incomplete or ineffective | CHRO + Branch Manager | 100% training completion gate; practice in test environment; go-live week surge support |
| Member confusion or service disruption | Marketing Manager + Branch Manager | 30-day advance notice; website FAQ; branch staff trained on talking points |
| Compliance disclosures inaccurate in new system | Compliance Officer | Every disclosure template tested against regulatory requirements before go-live |
| Rollback needed but old system not available | Core Systems Administrator | Old system maintained in operational state through Week 12 — no premature decommission |
| Vendor support inadequate during go-live | CIO + Risk Manager | Contractual go-live support SLA; vendor team on-site or on-call; escalation path to vendor executive |

---

## Activation Prompt

```
Activate CIO in CANVAS-Full mode for Critical System Vendor Integration.

Vendor: [Vendor Name]
System: [Core processor / Card processor / Digital banking / Lending platform / Other]
Contract execution date: [Date]
Target go-live date: [Date]
Vendor project manager: [Name]

Execute the CANVAS Vendor Integration — External Dependency Chain protocol:

DUAL TIMELINES:
- CU Track: Data mapping, staff training, process redesign, member communication
- Vendor Track: Environment setup, data migration tools, integration testing, UAT support

SYNC POINTS (both tracks must converge):
- Sync 1 (Week 4): Environment Ready — go/no-go rollback gate
- Sync 2 (Week 8): Data Migrated and Tested — go/no-go rollback gate
- Sync 3 (Week 11): Go-Live Decision — go/no-go rollback gate

Rollback plan staged at every sync point — old system maintained until Week 12.
100% data reconciliation required — penny-perfect, no exceptions.
Staff training 100% complete before go-live.
Member notification minimum 30 days before go-live.
Reference: agentic-credit-union/strategy/playbooks/workflow-m-vendor-management.md
Reference: agentic-credit-union/strategy/playbooks/workflow-q-core-system-conversion.md
```

---

*CANVAS Vendor Integration Runbook — Two timelines, three sync points, three rollback gates. The credit union and the vendor must both be ready at every gate — if either side is not, the gate does not open.*
