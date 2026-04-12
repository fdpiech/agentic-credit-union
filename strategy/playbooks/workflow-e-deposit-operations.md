# Workflow E Playbook — Deposit Operations & BSA/AML

> **Cycle Time**: Same day (routine) – 45 days (Reg E disputes) | **Agents**: 6 | **Gate Keepers**: Deposit Operations Manager + BSA Officer

---

## Objective

Maintain accurate, compliant deposit accounts across all transaction types — account opens, maintenance, rate changes, exception processing, disputes, and closures — while supporting BSA/AML monitoring and ensuring the credit union's funding base is sound. Every deposit operation must be completed within its regulatory window, documented for examination, and reconciled to the penny.

## Pre-Conditions

- [ ] Core system is operational and EOD processing is current
- [ ] Current rate sheet is in effect (CFO/ALCO-approved)
- [ ] BSA monitoring alerts are cleared from prior business day
- [ ] Staff compliance training is current (Reg E, Reg CC, Truth in Savings, BSA)

## Regulatory Framework

| Regulation | Requirement | Enforcement Agent |
|-----------|-------------|-------------------|
| Reg E (Electronic Fund Transfers) | Dispute resolution: 10-business-day provisional credit; 45-day final | Deposit Operations Manager + Compliance Officer |
| Reg CC (Funds Availability) | Hold disclosures and availability schedules | Deposit Operations Manager |
| Truth in Savings / Reg DD | Accurate disclosure of rates, fees, and terms | Deposit Operations Manager + Compliance Officer |
| BSA/AML — CTR | Currency Transaction Reports for cash ≥ $10,000 | BSA Officer (filed within 15 days) |
| BSA/AML — SAR | Suspicious Activity Reports | BSA Officer (decision within 30 days of trigger) |
| NCUA Part 748 | Information security and privacy | Core Systems Administrator |
| State unclaimed property law | Dormant account escheatment | Deposit Operations Manager |

---

## Agent Activation Sequence

### Routine Daily Operations

#### Step 1: Opening Processing (Deposit Operations Manager)

```
Activate Deposit Operations Manager for daily deposit operations.

Date: [Date] | Business day: [N of month]

Morning opening tasks:
1. Review overnight exception queue — items requiring manual resolution
2. Process new account openings from prior business day (digital channel)
3. Verify rate postings match current ALCO-approved rate sheet
4. Review any ACH returns from prior day; post returns per Reg E timeline
5. Check Reg E dispute queue — confirm any 10-day provisional credit deadlines today
6. Confirm prior-day EOD reconciliation completed successfully

Escalation triggers:
- Any reconciliation out-of-balance → Core Systems Administrator + Compliance Officer immediately
- Any rate posting error → CFO notification within 2 hours
- ACH returns exceeding normal threshold → BSA Officer notification
```

#### Step 2: BSA Monitoring (BSA Officer)

```
Activate BSA Officer for daily BSA/AML monitoring.

Date: [Date]

Daily monitoring tasks:
1. Review large cash transaction queue:
   - Identify all cash transactions (in or out) ≥ $10,000 for CTR requirement
   - Identify any structuring patterns (multiple transactions just below $10,000
     by the same person on same day or over multiple days)
   - Log CTR-eligible transactions; prepare FinCEN CTR (BSA E-Filing) for transactions
     not exempted — FILE WITHIN 15 CALENDAR DAYS of transaction date
2. Review AML monitoring alert queue (core system or BSA software alerts)
3. Evaluate each alert: dismiss with documented rationale or begin SAR evaluation
4. SAR evaluation queue: Decisions must be made within 30 days of triggering event
5. 314(a) list check if FinCEN updates list during the period

CTR exemptions:
- Phase I exempt: Banks, government entities (board-approved)
- Phase II exempt: Established businesses with verified high cash volume (board-approved)
- Document exemption basis in each case — never exempt without board resolution

SAR filing decision process:
- Any suspicious activity ≥ $5,000 involving an identified subject
- ANY amount if no subject can be identified
- 30-day filing window; 60 days if no subject identified
- Do NOT tip off member; do NOT block transaction (usually) — consult Compliance Officer
```

#### Step 3: Transaction Processing (Deposit Operations Manager)

```
Activate Deposit Operations Manager for transaction and exception processing.

Routine transaction processing:
1. Post all ACH credits and debits per NACHA settlement rules
2. Process check clearing items and returns
3. Apply wire transfers (incoming and outgoing)
4. Process member-requested account maintenance (address, beneficiary, ownership changes)
5. Apply dividend postings per declared rate schedule

Hold placement (Reg CC):
- Apply holds per funds availability policy:
  - Next-day: Government checks, cashier's checks, first $225 of all checks
  - 2-day: Local checks (under expedited availability)
  - Exception holds: Reasonable belief of non-payment, repeated overdrafts, large deposits
- REQUIRED when hold placed: Deliver written Reg CC hold notice to member at time of hold
  (In-person: give at counter; mail: same business day)
- Do NOT place exception holds on eligible payroll, government, or cashier's checks without documentation

Overdraft processing:
- Apply overdraft privilege per current policy (opt-in required for ATM/POS)
- Sequence posting per documented policy (must be disclosed in account agreement)
- Assess NSF/OD fees per fee schedule disclosed in Truth in Savings
```

#### Step 4: End-of-Day Reconciliation (Core Systems Administrator + Deposit Operations Manager)

```
Activate Core Systems Administrator for EOD processing.

EOD tasks:
1. Execute EOD processing in core system — confirm all transactions posted
2. Run daily balancing: general ledger vs. deposit account trial balance
3. Generate member statement files (for periodic statement production)
4. Confirm ACH file transmission to Fed or correspondent (same-day ACH: noon and 5pm)
5. Run information security monitoring — access logs, anomaly alerts
6. Generate management reports: deposit balances, new accounts, closures, rates
7. Archive system logs per information security policy

Core Systems Administrator escalation triggers:
- Any GL out-of-balance → Deposit Operations Manager + CFO immediately
- Any cybersecurity alert → Core Systems Administrator + Compliance Officer within 1 hour
- Core system performance issue → Escalate per business continuity plan
```

---

### Periodic Operations

#### Weekly / Monthly (Deposit Operations Manager)

```
Activate Deposit Operations Manager for periodic deposit operations.

WEEKLY:
1. Review dormant/inactive account report — accounts with no member-initiated activity
   - Notify member per state dormancy trigger schedule
   - Flag accounts approaching state-required escheatment timeline
2. Review accounts with exception holds — confirm holds released on time
3. Review overdraft program performance metrics

MONTHLY:
1. Rate change implementation (when ALCO directs):
   - Obtain written rate change authorization from CFO
   - Update core system rate tables — verify accuracy against authorization
   - Update Rate/Fee Schedule and Truth in Savings disclosures
   - Post updated disclosures on website; available in branch
   - Advance notice required for rate decreases on non-maturity accounts (Reg DD):
     Written or electronic notice at least 30 calendar days before effective date
2. Dividend declaration and posting:
   - Post per declared rate and declared period
   - Verify core system accuracy after posting
   - Board dividend declaration meeting minutes archived
3. Escheatment processing:
   - Identify accounts that have reached state dormancy period (typically 3-5 years)
   - Issue required due diligence notices to last known address
   - Remit unclaimed funds to state on required annual schedule
   - File state unclaimed property report

CFO concurrent — rate analysis:
- Deposit composition analysis (share savings, checking, money market, share certs)
- Cost-of-funds calculation vs. prior month and budget
- Deposit rate positioning vs. competitor survey
- ALCO recommendation for next rate decision
```

---

### Exception Handling Procedures

#### Reg E Dispute (Electronic Fund Transfer Dispute)

```
Activate Deposit Operations Manager for Reg E dispute processing.

Account #: [Number] | Transaction date: [Date] | Amount: $[Amount]
Transaction description: [Description] | Member claim: [Nature of dispute]
Dispute received date: [Date] — THIS DATE STARTS THE REG E CLOCK

Reg E Timeline:
- Day 0: Dispute received — log dispute; provisional credit decision clock starts
- Day 10 (business days): Provisional credit decision deadline
  → If investigation not complete by Day 10: MUST grant provisional credit
  → Only exception: Member cannot demonstrate loss (unauthorized ATM/POS only)
- Day 45: Final resolution deadline
  → Resolve and notify member in writing of result
  → If finding for institution: Reverse provisional credit with 3-day notice to member

BSA Officer concurrent review:
- Screen transaction for fraud indicators
- If fraud pattern suspected: Flag for SAR evaluation
- If confirmed fraud (not just error): Escalate to fraud investigation protocol

Dispute investigation steps:
1. Obtain all transaction records: date, time, terminal/merchant, IP address, device ID
2. Review card usage patterns around disputed transaction
3. Contact card network or merchant (for merchant disputes) or issuing processor (for unauthorized)
4. Document investigation findings
5. Determine finding: Authorized / Unauthorized / Processing error / Merchant error

Compliance Officer verification:
- Reg E required notices accurate and delivered on time
- Provisional credit applied correctly if applicable
- Final notice sent per regulatory requirements

Reg CC Hold Override:
- Deposit Operations Manager + Compliance Officer review required
- Document basis for override (reasonable cause, large deposit exception, etc.)
- Member must receive written notice at time of hold
```

#### Account Freeze / Legal Hold

```
Activate Compliance Officer for account freeze or legal hold.

Account #: [Number] | Basis: [Subpoena / Court order / IRS levy / Internal hold]
Received from: [Law enforcement / Court / Government agency]
Date received: [Date]

Compliance Officer actions:
1. Verify legal sufficiency of order or levy (consult legal counsel if unclear)
2. Notify Core Systems Administrator to apply account restriction in core system
3. Do NOT notify member if law enforcement order prohibits notification (gag order)
4. If no prohibition: Notify member of hold in compliance with applicable law
5. Respond to requesting party within required timeframe
6. Maintain strict confidentiality of BSA-related holds (SAR-related — never disclose)

Deposit Operations Manager:
- Apply core system restriction flag
- Prevent any debits from restricted account
- Earnings continue to accrue per normal processing
- Document restriction in account notes with legal basis

Core Systems Administrator:
- Implement access restrictions per Compliance Officer instructions
- Log all access to restricted account for audit trail
```

#### BSA/AML Alert — Suspicious Activity

```
Activate BSA Officer for suspicious activity investigation on account [#].

Account #: [Number] | Alert type: [Monitoring software / Staff referral / External tip]
Transaction(s) flagged: [Date(s), amount(s), description(s)]
Alert received: [Date] — 30-day SAR decision clock starts

Investigation process:
1. Pull complete transaction history (12 months minimum)
2. Review account opening documents and CIP file
3. Compare transaction patterns to member's stated purpose
4. Check for structuring (transactions just below $10,000 threshold)
5. Run name through FinCEN 314(a) list (if new period active)
6. Contact relationship officer (Branch Manager, Loan Officer) for context — DO NOT alert member
7. Document all findings in SAR log

SAR decision:
- FILE: Complete FinCEN SAR with all required narrative fields; file within 30 days
- DO NOT FILE: Document specific reasons why filing is NOT warranted (required)
- CONTINUE MONITORING: Set enhanced monitoring parameters; re-evaluate at 60 days

Compliance Officer verification:
- SAR narrative is complete, specific, and factually accurate
- SAR filed timely (within 30 days of triggering date)
- SAR log entry complete (even for no-file decisions)

CEO notification:
- Notify CEO of SAR filing (but not SAR content — tipping off prohibition)
- No member notification — EVER (criminal violation to tip off subject of SAR)
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | CTRs filed within 15 calendar days of transaction | 100% | CTR filing log with FinCEN confirmation | ☐ |
| 2 | SAR decisions made within 30 days of triggering event | 100% | SAR evaluation log (file or no-file documented) | ☐ |
| 3 | Reg E disputes resolved within 45 business days | 100% | Dispute resolution log with outcome letter | ☐ |
| 4 | Provisional credit applied by Day 10 (if applicable) | 100% | Core system credit record | ☐ |
| 5 | Reg CC hold disclosures delivered at time of hold | 100% | Hold notice delivery log | ☐ |
| 6 | Rate change disclosures issued 30+ days before effective date | 100% | Disclosure delivery records | ☐ |
| 7 | Daily GL reconciliation completed | 100% — every business day | Reconciliation report | ☐ |
| 8 | Dormant account notices sent per state law timeline | 100% | Notice delivery records | ☐ |
| 9 | Escheatment remitted per state schedule | Annual | State filing confirmation | ☐ |

**Gate Keepers**: Deposit Operations Manager (operational accuracy) + BSA Officer (BSA/AML compliance) — dual sign-off monthly

**Gate Decision**:
- **CURRENT**: All obligations met within required timelines — operations examination-ready
- **DELINQUENT ITEM**: Specific obligation overdue — Deposit Operations Manager corrects same day; Compliance Officer notified
- **MATERIAL FINDING**: CTR or SAR deadline missed — Compliance Officer + CEO notified immediately; late filing or voluntary disclosure evaluated

---

## Step-Level Matrix

| Step | Agent | Mode | Authority |
|------|-------|------|-----------|
| 1. Reg E Dispute Intake | Member Services Representative | Execute | Operational |
| 2. BSA/Fraud Screening | BSA Officer | Execute | Compliance/Regulatory |
| 2. BSA/Fraud Screening | Fraud Detection & Security Analyst | Advise | Compliance/Regulatory |
| 3. Provisional Credit & Investigation | Deposit Operations Manager | Execute | Operational |
| 3. Provisional Credit & Investigation | BSA Officer | Advise | Compliance/Regulatory |
| 4. Compliance Verification | Compliance Officer | Gate | Compliance/Regulatory + Escalation |

**Mode key:** Execute — owns the deliverable, one per step; Advise — contributes expertise, workflow does not wait; Gate — veto authority, workflow stops until cleared.

**Authority key:** Operational — process execution; Credit/Financial — lending and financial judgments; Compliance/Regulatory — regulatory determinations; Escalation — stop/elevate decisions.

---

## Common Deposit Compliance Risks

| Risk | Prevention | If Identified |
|------|-----------|---------------|
| CTR filed late | Alert-based daily review of cash transactions | File immediately; document reason for late filing |
| Reg E 10-day provisional credit missed | Calendar alert from dispute receipt date | Apply credit immediately; document; notify Compliance Officer |
| Hold notice not delivered | Workflow step: hold notice is a required pre-condition to hold | Remove hold or deliver retroactive notice; Compliance Officer review |
| Rate decrease without 30-day advance notice | CFO rate change process includes disclosure timeline | Cannot retroactively cure — document; notify Compliance Officer |
| Structuring not detected | Staff training; automated monitoring thresholds | Evaluate for SAR filing; document investigation |
| SAR tipping off member | BSA training; SAR-related freeze never mentioned to member | Cease disclosure immediately; legal counsel consultation |

---

## Deposit Operations Performance Metrics

| Metric | Target | Measurement Frequency |
|--------|--------|-----------------------|
| CTR filing timeliness | 100% within 15 days | Monthly |
| SAR decision timeliness | 100% within 30 days | Monthly |
| Reg E dispute resolution | 100% within 45 days | Monthly |
| Daily GL reconciliation success | 100% — zero out-of-balance items | Daily |
| Rate posting accuracy | Zero errors | Per rate change |
| Dormant account compliance | 100% per state schedule | Annual |

---

*Workflow E is complete for a given period when the Deposit Operations Manager and BSA Officer confirm all daily, weekly, and monthly obligations are current, all disputes are within regulatory windows, and BSA/AML reporting obligations are met. Ongoing — review at each compliance examination cycle.*
