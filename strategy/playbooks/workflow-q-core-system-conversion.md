# Workflow Q Playbook — Core System Conversion

> **Cycle Time**: 6–18 months | **Agents**: 8 | **Gate Keepers**: Core Systems Administrator + Compliance Officer

---

## Objective

Execute a core banking system migration that protects member data, maintains regulatory compliance throughout the transition, and delivers a reliable go-live with zero data loss and zero compliance gaps. Core conversions are the highest-risk IT events a credit union undertakes — failures are public, recoveries are painful, and NCUA scrutiny is intense. This playbook ensures every phase is gated, every risk is documented, and no go-live proceeds without the evidence that the new system is ready.

## Pre-Conditions

- [ ] Board has approved the conversion project and allocated budget
- [ ] CEO has designated a project sponsor with decision authority
- [ ] CTO/CIO has been assigned as project lead
- [ ] Compliance Officer briefed on regulatory notification requirements
- [ ] Legal counsel engaged for contract review
- [ ] Current core system vendor notified of intent per contract terms (notice period required)

## Regulatory Framework

| Regulation | Requirement | Enforcement Agent |
|-----------|-------------|-------------------|
| NCUA Part 748 | Information security and data integrity throughout conversion | CIO + Compliance Officer |
| NCUA — Member Notification | Members must be notified of material service changes | Compliance Officer + Member Services Rep |
| BSA — Data Retention | All BSA records must transfer completely and be accessible post-conversion | BSA Officer + Core Systems Admin |
| GLBA Safeguards Rule | Data security during migration; vendor due diligence | CTO + Compliance Officer |
| NCUA — Business Continuity | Board-approved BCP must cover conversion scenarios | CIO + Risk Manager |
| State data breach notification laws | Breach during conversion triggers notification requirements | Compliance Officer |
| NCUA — Examination | Examiners may review conversion planning and execution | Compliance Officer |

---

## Agent Activation Sequence

### Phase 1: Vendor Selection (CTO + CFO)

```
Activate Chief Technology Officer for core system vendor selection.

Project scope: [Full core replacement / Partial migration / Module addition]
Current core system: [Vendor / Version] | Contract expiration: [Date]
Board approval date: [Date] | Budget approved: $[Amount]

Vendor evaluation process:
1. Issue Request for Proposal (RFP) to qualified core vendors (minimum 3):
   - Fiserv DNA / Portico
   - Jack Henry Symitar / SilverLake
   - Corelation Keystone
   - Other qualified vendors per CU size and complexity
2. RFP minimum requirements:
   - Data conversion approach and track record
   - Implementation timeline and methodology
   - Credit union reference list (minimum 5 similar-size CUs)
   - Total cost of ownership (3-year and 5-year)
   - Training program scope
   - Support model post-go-live (dedicated team? Help desk SLA?)
   - Disaster recovery and business continuity capabilities
   - API/integration capabilities for third-party systems
3. Conduct vendor demonstrations with key staff present
4. Contact references — ask specifically about conversion experience, not just daily operations
5. CFO: Financial analysis of each vendor (pricing, contract terms, exit clauses)
6. Compliance Officer: Review each vendor's SSAE 18 / SOC 2 report
7. Risk Manager: Vendor risk rating for each finalist

Board recommendation package:
- Vendor comparison matrix
- Total cost of ownership analysis
- Risk assessment
- Implementation timeline
- Staff recommendation with rationale
- Contract terms summary (legal counsel review)
```

### Phase 2: Requirements Gathering & Project Planning (CTO + CIO + Core Systems Admin)

```
Activate Chief Information Officer for requirements gathering and project planning.

Selected vendor: [Vendor] | Contract signed: [Date]
Target go-live date: [Date] | Implementation manager: [Vendor contact]

Requirements gathering:
1. Inventory all current system interfaces and integrations:
   - Card processor (Visa/MC, debit processing)
   - Online/mobile banking platform
   - Bill pay
   - ACH processor
   - Wire transfer system
   - Loan origination system (if separate)
   - Credit bureau interfaces
   - OFAC/BSA screening tools
   - Accounting/GL system
   - Statement generation
   - Other third-party integrations
2. Document each integration: vendor, API type, data flow, criticality
3. Confirm each integration's compatibility with new core — identify gaps
4. Define conversion data scope:
   - Member records: shares, loans, CDs, IRAs, checking
   - Transaction history: how many years will be converted vs. archived?
   - BSA records: all SAR and CTR history must be preserved
   - Document imaging: will documents transfer or remain in legacy system?
5. Build project plan with milestones, owners, and deadlines

Key milestones to track:
- Data mapping complete
- Parallel processing start
- Final parallel processing complete
- User acceptance testing (UAT) complete
- Staff training complete
- Member communication delivered
- Go / No-Go decision date
- Go-live date
- Post-conversion support window end
```

### Phase 3: Data Mapping & Cleansing (Core Systems Administrator + IT Systems Administrator)

```
Activate Core Systems Administrator for data mapping and cleansing.

Data mapping start date: [Date] | Mapping completion target: [Date]

Data mapping tasks:
1. Work with vendor to map every data field from current system to new system:
   - Member demographics (name, address, SSN, DOB, contact)
   - Account structures (share, loan, CD, checking account types)
   - Transaction codes and posting logic
   - Interest rate tables and accrual methods
   - Fee schedules
   - GL codes and account classifications
   - User access and permission structures
2. Identify unmapped fields — document disposition for each:
   - Will it be manually re-entered?
   - Will it be archived in legacy system?
   - Will it be discarded (confirm with Compliance Officer if regulatory record)
3. Data cleansing — fix before migration, not after:
   - Duplicate member records
   - Invalid/incomplete addresses
   - Dormant accounts requiring escheatment review
   - Loans with missing documents or incomplete data
   - Incorrect tax identification numbers
4. IT Systems Administrator: User access audit
   - Review all current user accounts and permissions
   - Remove terminated employees
   - Right-size permissions for remaining staff
   - Build new system permission structure before migration

Compliance Officer data review:
- Confirm all BSA records (CTR, SAR) are included in conversion scope
- Confirm OFAC screening data will transfer or be accessible
- Confirm member notification data (addresses) is clean for pre-go-live outreach
```

### Phase 4: Parallel Processing & Testing (Core Systems Admin + IT Infrastructure)

```
Activate Core Systems Administrator for parallel processing.

Parallel processing start: [Date] | Duration: [Weeks] | End date: [Date]

Parallel processing protocol:
1. Run transactions simultaneously in both old and new system for [N] weeks
2. Daily reconciliation — compare outputs from both systems:
   - Ending balances must match to the penny
   - Transaction counts must match
   - Interest accruals must match
   - Fee assessments must match
3. Document every discrepancy: root cause, resolution, confirmation that it's fixed
4. User Acceptance Testing (UAT) — staff must test before go-live:
   - Every transaction type processed successfully
   - Every report generated and verified accurate
   - Every interface tested end-to-end (card processor, ACH, online banking)
   - Edge cases tested: joint accounts, POD accounts, business accounts, trusts
5. Performance testing:
   - End-of-day processing completes within acceptable window
   - Online banking response times acceptable
   - ATM/debit authorization response times meet network requirements
6. Disaster recovery test:
   - Simulate system failure during processing
   - Confirm failover and recovery procedures work
   - Document recovery time objective (RTO) achieved

Go/No-Go criteria (must ALL be met before go-live):
- [ ] Zero unresolved reconciliation discrepancies
- [ ] All critical UAT test cases pass
- [ ] All interfaces confirmed operational
- [ ] DR test completed successfully
- [ ] Staff training completion ≥ 95%
- [ ] Member communication delivered
- [ ] Compliance Officer sign-off obtained
- [ ] Rollback plan documented and tested
```

### Phase 5: Member Notification (Member Services Rep + Marketing Manager)

```
Activate Member Services Rep for member notification — conversion communication.

Notification timeline: Begin [N weeks] before go-live | Go-live date: [Date]

Member notification requirements:
1. NCUA requires adequate advance notice of material service changes
   - Minimum 30 days advance notice recommended
   - Coordinate with Compliance Officer on required notice period
2. Notification channels:
   - Statement message (prior cycle before go-live)
   - Email to members with email on file
   - Branch notices (lobby posters, teller handouts)
   - Website notice
   - Social media (if applicable)
3. Required notification content:
   - Date of conversion
   - Expected service interruption window (if any)
   - What members need to do (if anything — e.g., re-enroll in online banking)
   - Account number changes (if applicable)
   - New routing number (if changing)
   - Contact information for questions
4. High-impact member segments — proactive outreach:
   - Members with active online banking (new login credentials)
   - Members with scheduled ACH payments (routing number change impacts these)
   - Business members (complex accounts, multiple users)
   - Members with automatic loan payments from external accounts

Marketing Manager:
- Draft all member-facing communication
- Compliance Officer reviews all communication for accuracy
- Test all digital communication delivery (email open rates, broken links)
```

### Phase 6: Go-Live Cutover (Core Systems Admin + CTO + IT Infrastructure)

```
Activate Core Systems Administrator for go-live cutover execution.

Go-live date: [Date] | Cutover window: [Start time] – [End time]
Go/No-Go decision time: [Time — typically 24–48 hours before cutover]

Final Go/No-Go decision (CTO + Compliance Officer + CFO):
- Review final parallel processing reconciliation
- Confirm all pre-conditions met (Step 4 checklist)
- Confirm vendor support team is on-site or available
- Confirm rollback plan is ready
- Formal GO or NO-GO decision — document in board minutes or CEO memo

Cutover execution:
1. Final end-of-day processing in old system — confirm EOD complete
2. Extract final data from old system — confirm extraction complete
3. Load data into new system
4. Run post-load validation: record counts, balance totals, spot checks
5. Activate new system
6. Confirm all interfaces are live:
   - ATM/debit processing active
   - Online banking active
   - ACH processing active
   - Card authorization active
7. Confirm real-time monitoring is active
8. Open for business — notify branch staff the system is live

Rollback trigger — immediately revert to old system if:
- Post-load validation fails
- Any interface is not operational within [N] hours
- Balance discrepancy discovered that cannot be resolved quickly
- Vendor advises rollback

Post-cutover monitoring — first 72 hours:
- Core Systems Admin: monitor system performance continuously
- IT Infrastructure: monitor all interface connections
- Member Services Rep: field member calls; escalate system issues immediately
- CTO: daily status briefing to CEO during first week
```

### Phase 7: Post-Conversion Support (Core Systems Admin + IT Systems Admin)

```
Activate Core Systems Administrator for post-conversion support.

Go-live date: [Date] | Vendor intensive support window: [N weeks]
Internal support escalation: Core Systems Admin → CTO → Vendor

Post-conversion support protocol:
1. Vendor intensive support: vendor team on-site or immediately available for [N weeks]
2. Daily issues log: all system issues, workarounds, and resolutions documented
3. Escalation matrix:
   - Member-impacting issues → Core Systems Admin + Member Services Rep within 1 hour
   - Data integrity questions → Core Systems Admin + Compliance Officer same day
   - Interface failures → IT Infrastructure + vendor within 30 minutes
   - Security incidents → IT Infrastructure + Compliance Officer + CEO immediately
4. Legacy system access:
   - Maintain read-only access to old system for [N months] for reference lookups
   - Do not process any transactions in old system after go-live
   - Document old system decommission date

IT Systems Administrator:
- Monitor all user access and permissions — clean up any incorrect permissions
- Confirm all staff can access required functions
- Reset any accounts with failed first logins
- Update IT asset inventory to reflect new system

BSA Officer:
- Confirm all BSA monitoring alerts are active in new system
- Confirm OFAC screening is operational
- Confirm CTR and SAR filing access is intact
- Run test alert to confirm monitoring system is connected
```

### Phase 8: Post-Conversion Review (CTO + CIO + Compliance Officer)

```
Activate Chief Technology Officer for post-conversion review.

Review schedule: 30 days / 60 days / 90 days post-go-live

30-Day Review:
- Issues log summary: how many issues, how resolved, any outstanding?
- Member impact: how many member calls/complaints related to conversion?
- Interface performance: are all integrations stable?
- Staff feedback: what's working, what's not?
- Vendor performance: did they deliver on SLAs?

60-Day Review:
- Reconciliation verification: are end-of-month balances correct?
- Regulatory reporting: has the first NCUA Call Report been filed accurately?
- BSA: have CTRs and SARs continued without interruption?
- Performance: is the system meeting performance expectations?

90-Day Review:
- Formal post-implementation assessment document
- Lessons learned: what would we do differently?
- Vendor scorecard: did they deliver what was promised?
- Outstanding contract items: anything vendor still owes?
- Legacy system decommission: is it safe to decommission old system?
- Board report: brief board on conversion outcome and any remaining items

Compliance Officer post-conversion audit:
- Verify NCUA notification obligations were met
- Confirm member notification was delivered as required
- Confirm BSA records transferred completely (pull sample CTRs and SARs)
- Confirm data retention policy for legacy system data
- Document any examination-relevant facts about the conversion
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | Vendor selected via documented RFP process with board approval | Required | Board minutes + vendor selection memo | ☐ |
| 2 | All interfaces mapped and compatibility confirmed before parallel processing | 100% | Integration inventory with compatibility status | ☐ |
| 3 | Zero unresolved parallel processing reconciliation discrepancies at go-live | 100% | Final reconciliation sign-off document | ☐ |
| 4 | All critical UAT test cases passed | 100% | UAT test log with outcomes | ☐ |
| 5 | Staff training completion ≥ 95% before go-live | ≥ 95% | Training completion records | ☐ |
| 6 | Member notification delivered ≥ 30 days before go-live | Required | Notification delivery confirmation | ☐ |
| 7 | Rollback plan documented and tested | Required | Rollback procedure document + test record | ☐ |
| 8 | BSA continuity confirmed post-go-live (alerts, CTR, SAR access) | 100% | BSA Officer attestation | ☐ |
| 9 | 90-day post-conversion review completed and reported to board | Required | Board report and minutes | ☐ |

**Gate Keepers**: Core Systems Administrator (technical readiness) + Compliance Officer (regulatory readiness) — dual sign-off required at Go/No-Go decision point; no go-live proceeds without both signatures

**Gate Decision**:
- **GO**: All pre-conditions met, all test cases passed, member notification delivered, rollback plan ready
- **NO-GO**: Any unresolved reconciliation discrepancy, failed UAT, incomplete training, or missing member notification — conversion is postponed; vendor notified; new date set
- **ROLLBACK**: Post-go-live issue meets rollback trigger criteria — revert to old system immediately; CTO + CEO decide on new go-live date

---

## Core Conversion Performance Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Parallel processing reconciliation accuracy | 100% match — zero discrepancies | Daily during parallel period |
| UAT test case pass rate | 100% critical, ≥ 95% total | Pre-go-live |
| Staff training completion | ≥ 95% before go-live | Pre-go-live |
| Member notification delivery | ≥ 30 days advance notice | Pre-go-live |
| Go-live interface uptime (first 72 hours) | 100% | Post-go-live monitoring |
| Member complaint volume (conversion-related) | Fewer than [N] per 1,000 members | 30-day post review |
| 30-day outstanding issues | Zero critical, ≤ 5 minor | 30-day review |

---

*Workflow Q is complete when the 90-day post-conversion review is delivered to the board, the legacy system is decommissioned on schedule, all outstanding vendor items are resolved, and the Compliance Officer confirms that BSA, data retention, and member notification obligations were met throughout the conversion. A clean NCUA examination of the first post-conversion cycle is the ultimate validation.*
