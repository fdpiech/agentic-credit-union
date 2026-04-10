# Runbook: Fed Rate Change Response

> **Mode**: CANVAS-Full | **Duration**: 48 hours | **Agents**: 10 | **Lead**: CFO

> **Pattern**: Cascade Fan-Out — One external trigger causes a synchronized parallel burst across nearly every functional area. Massive parallelism with tight convergence checkpoints rather than sequential phases.

---

## Scenario

The Federal Open Market Committee (FOMC) has announced a change to the federal funds target rate. Whether a rate increase or decrease, the credit union must reprice lending products, adjust deposit rates, update ALM models, communicate changes to members, and verify compliance with Truth in Savings and TILA disclosure requirements — all within 48 hours. Every functional area moves simultaneously from a single trigger event. The CFO orchestrates convergence checkpoints at 4, 24, and 48 hours to ensure all workstreams align.

## When to Activate

- FOMC announces a federal funds rate change (increase or decrease)
- FOMC signals imminent rate change with high certainty (pre-positioning)
- Emergency inter-meeting rate action by the Federal Reserve
- Significant market rate movement that forces credit union rate response even absent FOMC action

---

## Agent Roster

### Command and Coordination
| Agent | Role |
|-------|------|
| **CFO** | Lead — ALM model update, NIM impact analysis, convergence checkpoint authority, board briefing |
| **CEO** | Strategic authority, board communication, member-facing messaging approval |

### Lending Workstream (Parallel — launches at Hour 0)
| Agent | Role |
|-------|------|
| **Loan Officer** | Consumer rate repricing, pipeline impact analysis, rate lock decisions |
| **Mortgage Loan Processor** | Mortgage rate lock management, pipeline repricing, secondary market impact |
| **Business Lending Officer** | Commercial and business loan rate adjustments, variable-rate portfolio impact |

### Deposit Workstream (Parallel — launches at Hour 0)
| Agent | Role |
|-------|------|
| **Deposit Operations Manager** | Deposit rate changes, CD special repricing, money market tier adjustments |

### Communication Workstream (Parallel — launches at Hour 0)
| Agent | Role |
|-------|------|
| **Marketing Manager** | Rate communications, website updates, branch signage, member notifications |
| **Financial Advisor** | Member outreach for rate-sensitive accounts, CD maturity counseling, refinance opportunities |

### Systems and Compliance Workstream (Parallel — launches at Hour 0)
| Agent | Role |
|-------|------|
| **Core Systems Administrator** | Core system rate table updates, disclosure template updates, digital banking rate display |
| **Compliance Officer** | Truth in Savings notice requirements, TILA APR disclosure accuracy, UDAAP review of communications |

---

## Regulatory Framework

| Obligation | Regulation | Owner | Deadline |
|-----------|-----------|-------|---------|
| Truth in Savings — advance notice for rate decreases on deposit accounts | 12 CFR 707.5 (Reg DD) | Deposit Operations Manager + Compliance Officer | **30 days advance notice** for rate decreases on existing accounts |
| Truth in Savings — advertised rate accuracy | 12 CFR 707.4 (Reg DD) | Marketing Manager + Compliance Officer | Immediately upon rate change — all ads must reflect current rates |
| TILA — APR disclosure accuracy on new loans | 12 CFR 1026 (Reg Z) | Loan Officer + Compliance Officer | Before first loan closed at new rate |
| TILA — variable rate adjustment notices | 12 CFR 1026.20(c) | Loan Officer + Compliance Officer | Per loan agreement terms (typically 25-45 days before adjustment) |
| NCUA interest rate risk expectations | NCUA Letter to Credit Unions 22-CU-04; NCUA IRR Supervisory Framework | CFO | Ongoing — ALM model updated within reporting cycle |
| HMDA — rate data accuracy | 12 CFR 1003 (Reg C) | Mortgage Loan Processor | Ongoing — rate recorded at time of action taken |
| UDAAP — rate change marketing | 12 CFR 1031 | Compliance Officer | All communications reviewed before publication |

> **Critical**: Reg DD requires **30 days advance written notice** before decreasing rates on existing deposit accounts. A rate decrease cannot be applied to existing accounts immediately — only to new accounts and new CD terms. Rate increases on variable-rate deposit accounts take effect per account agreement terms.

---

## Cascade Fan-Out Execution

All workstreams launch simultaneously at Hour 0 (FOMC announcement). The CFO coordinates three convergence checkpoints where all workstreams must report status.

### Hour 0: FOMC Announcement — All Workstreams Launch

```
Activate CFO — FOMC RATE CHANGE TRIGGER.

Rate change: [+/- XX basis points]
New federal funds target range: [X.XX% - X.XX%]
Effective date: [Date]
FOMC statement summary: [Key language on economic outlook and forward guidance]

IMMEDIATE ACTIONS (within 60 minutes of announcement):
1. Convene rate response team — all workstream leads notified
2. Pull current ALM model — begin NIM impact analysis
3. Determine preliminary rate response:
   - Lending rate changes: direction, magnitude, effective date
   - Deposit rate changes: direction, magnitude, effective date
   - CD special strategy: new rates, terms, promotional approach
4. Issue rate change directive to all workstream leads with preliminary targets
5. Begin board briefing preparation — impact analysis due at 4-hour checkpoint
```

### Lending Workstream (Hours 0-24)

```
Activate Loan Officer — CONSUMER RATE REPRICING.

Input: CFO rate change directive with target rate adjustments

Consumer lending actions (Hours 0-4):
1. Calculate new consumer loan rates — auto, personal, HELOC, credit card
2. Pipeline impact analysis — applications in process at old rates
   - Rate locks: Honor existing locks per policy
   - Pending applications: Apply rate at time of decision per policy
3. Variable-rate portfolio impact — calculate payment changes for existing borrowers
4. Draft rate matrix update for CEO/CFO approval
5. Report to CFO at 4-hour checkpoint: proposed rates, pipeline impact, member impact estimate

Consumer lending implementation (Hours 4-24):
1. Update rate sheets and marketing collateral
2. Notify branch and call center staff of new rates
3. Process rate changes in core system (coordinate with Core Systems Administrator)
4. Variable-rate adjustment notices queued per loan agreement terms
5. Report to CFO at 24-hour checkpoint: implementation complete, exceptions noted

Activate Mortgage Loan Processor — MORTGAGE RATE LOCK MANAGEMENT.

Mortgage actions (Hours 0-4):
1. Rate lock inventory — all locks in pipeline with expiration dates
2. Secondary market pricing update — investor rate sheet changes
3. Pipeline repricing analysis — impact on gain-on-sale margins
4. Float-down policy assessment — do current locks qualify for float-down?
5. Report to CFO at 4-hour checkpoint: lock inventory, margin impact, pipeline value

Mortgage implementation (Hours 4-24):
1. Update mortgage rate sheets for all products (fixed, ARM, jumbo)
2. Contact borrowers with expiring locks — extension or renegotiation
3. Recalculate Loan Estimates for applications in process (TRID re-disclosure if changed circumstance applies)
4. Report to CFO at 24-hour checkpoint: all locks managed, re-disclosures issued

Activate Business Lending Officer — COMMERCIAL RATE ADJUSTMENTS.

Business lending actions (Hours 0-4):
1. Variable-rate commercial portfolio analysis — payment and covenant impact
2. New commercial rate pricing — prime-based and treasury-based spreads
3. Line of credit repricing — existing facilities with variable pricing
4. Identify commercial borrowers requiring proactive outreach (large exposure, covenant-sensitive)
5. Report to CFO at 4-hour checkpoint: portfolio impact, proposed commercial rates

Business lending implementation (Hours 4-24):
1. Update commercial rate sheets
2. Proactive outreach to key commercial members — rate change impact discussion
3. Variable-rate adjustment processing per facility agreements
4. Report to CFO at 24-hour checkpoint: implementation complete
```

### Deposit Workstream (Hours 0-24)

```
Activate Deposit Operations Manager — DEPOSIT RATE CHANGES.

Input: CFO rate change directive with target deposit rate adjustments

Deposit actions (Hours 0-4):
1. Calculate new deposit rates — savings, money market, checking (if interest-bearing), CDs
2. Competitive rate analysis — peer credit union and bank rate positioning
3. CD special strategy — new promotional rates and terms for rate environment
4. Cost of funds impact analysis — total deposit expense change projection
5. Reg DD compliance check:
   - Rate DECREASE on existing accounts: 30-day advance notice REQUIRED
   - Rate INCREASE on existing accounts: effective per account agreement (typically immediate)
   - New account rates: change effective immediately
6. Report to CFO at 4-hour checkpoint: proposed rates, cost of funds impact, Reg DD timeline

Deposit implementation (Hours 4-24):
1. Update core system rate tables (coordinate with Core Systems Administrator)
2. If rate decrease: prepare 30-day advance notice letters for existing accountholders
3. If rate increase: process rate change per account agreement terms
4. New CD specials configured and ready for promotion
5. Report to CFO at 24-hour checkpoint: implementation complete, notices queued
```

### Communication Workstream (Hours 0-48)

```
Activate Marketing Manager — RATE COMMUNICATIONS.

Marketing actions (Hours 0-4):
1. Draft rate change member communication — email, website, branch signage
2. Update website rate pages — remove old rates IMMEDIATELY (Reg DD: advertised rates must be current)
3. Draft social media messaging — factual, not promotional until Compliance Officer review
4. Prepare branch rate display updates
5. Submit ALL communications to Compliance Officer for UDAAP and Reg DD review
6. Report to CFO at 4-hour checkpoint: draft communications ready for compliance review

Marketing implementation (Hours 4-24):
1. Publish approved website rate updates
2. Send approved member email communication
3. Distribute branch signage and rate display updates
4. Report to CFO at 24-hour checkpoint: all channels updated

Marketing verification (Hours 24-48):
1. Verify all public-facing rate information is consistent and current
2. Monitor member inquiries and social media — identify FAQ needs
3. Report to CFO at 48-hour checkpoint: all communications verified

Activate Financial Advisor — MEMBER OUTREACH.

Member outreach actions (Hours 0-24):
1. Identify rate-sensitive member segments:
   - CD maturities within 30 days — rate change impacts renewal decisions
   - Large deposit balances — retention risk in rate decrease / opportunity in increase
   - Variable-rate loan holders — payment change communication
   - Members with maturing rate locks
2. Prepare outreach scripts for each segment
3. Begin proactive outreach to high-value members — phone and secure message
4. Report to CFO at 24-hour checkpoint: outreach initiated, member sentiment summary

Member outreach completion (Hours 24-48):
1. Complete outreach to all identified rate-sensitive members
2. Document member feedback and concerns
3. Escalate retention risks to CEO
4. Report to CFO at 48-hour checkpoint: outreach complete, retention risk summary
```

### Systems and Compliance Workstream (Hours 0-48)

```
Activate Core Systems Administrator — SYSTEM RATE TABLE UPDATES.

System actions (Hours 0-4):
1. Prepare rate table changes in test environment first — verify calculation accuracy
2. Validate disclosure templates generate correct APR/APY at new rates
3. Verify digital banking and mobile app rate displays pull from updated tables
4. Coordinate with card processor for credit card rate changes (if applicable)
5. Report to CFO at 4-hour checkpoint: test environment validated, production changes ready

System implementation (Hours 4-24):
1. Apply rate table changes to production — lending and deposit
2. Verify online banking rate displays updated
3. Verify mobile app rate displays updated
4. Verify loan origination system calculating correctly at new rates
5. Report to CFO at 24-hour checkpoint: all systems updated and verified

Activate Compliance Officer — DISCLOSURE AND REGULATORY COMPLIANCE.

Compliance actions (Hours 0-4):
1. Review all proposed rate changes for regulatory compliance:
   - Reg DD: 30-day notice requirement for deposit rate decreases
   - Reg Z: APR disclosure accuracy on new loan applications
   - UDAAP: No deceptive or misleading rate communications
2. Review and approve all Marketing Manager communications before publication
3. Verify Truth in Savings disclosures reflect new rates
4. Report to CFO at 4-hour checkpoint: compliance review complete, approvals issued

Compliance verification (Hours 24-48):
1. Post-implementation audit — sample new loan disclosures for APR accuracy
2. Verify website, branch, and digital channel rate consistency
3. Confirm Reg DD notices prepared for any deposit rate decreases
4. Variable-rate adjustment notice review — content and timing per 12 CFR 1026.20(c)
5. Report to CFO at 48-hour checkpoint: compliance verified across all channels
```

---

## Convergence Checkpoints

### 4-Hour Checkpoint: Analysis Complete

**Gate Keeper**: CFO

| Workstream | Required Deliverable | Owner | Status |
|-----------|---------------------|-------|--------|
| ALM / NIM | NIM impact analysis and board briefing draft | CFO | ☐ |
| Consumer Lending | Proposed consumer rates and pipeline impact | Loan Officer | ☐ |
| Mortgage | Lock inventory and margin impact | Mortgage Loan Processor | ☐ |
| Commercial | Portfolio impact and proposed commercial rates | Business Lending Officer | ☐ |
| Deposits | Proposed deposit rates and cost of funds impact | Deposit Operations Manager | ☐ |
| Communications | Draft communications ready for compliance review | Marketing Manager | ☐ |
| Systems | Test environment validated; production changes ready | Core Systems Administrator | ☐ |
| Compliance | Regulatory review complete; approvals issued | Compliance Officer | ☐ |

**Decision**: CFO approves final rate changes → workstreams proceed to implementation

### 24-Hour Checkpoint: Implementation Complete

**Gate Keeper**: CFO + CEO

| Workstream | Required Deliverable | Owner | Status |
|-----------|---------------------|-------|--------|
| Consumer Lending | New rates live in system; staff notified; rate sheets updated | Loan Officer | ☐ |
| Mortgage | Locks managed; re-disclosures issued; new rates posted | Mortgage Loan Processor | ☐ |
| Commercial | Commercial rates updated; key borrowers contacted | Business Lending Officer | ☐ |
| Deposits | Rate tables updated; Reg DD notices prepared if applicable | Deposit Operations Manager | ☐ |
| Communications | Website, email, branch signage all updated | Marketing Manager | ☐ |
| Systems | All production systems updated and verified | Core Systems Administrator | ☐ |
| Member Outreach | High-value member outreach initiated | Financial Advisor | ☐ |

**Decision**: CFO + CEO confirm implementation complete → move to verification phase

### 48-Hour Checkpoint: Verification and Close

**Gate Keeper**: CFO + Compliance Officer

| Workstream | Required Deliverable | Owner | Status |
|-----------|---------------------|-------|--------|
| Compliance | Post-implementation audit complete — disclosures accurate | Compliance Officer | ☐ |
| Communications | All channels verified consistent and current | Marketing Manager | ☐ |
| Member Outreach | All rate-sensitive member outreach complete | Financial Advisor | ☐ |
| Board Briefing | Board rate change impact report finalized | CFO | ☐ |

**Decision**:
- **COMPLETE**: All workstreams verified — rate change response closed
- **EXCEPTIONS**: Specific items require follow-up — assign owners with 5-day deadline
- **ESCALATION**: Material issue identified — CEO convenes leadership for resolution

---

## Key Risks to Manage

| Risk | Owner | Mitigation |
|------|-------|-----------|
| Advertised rates not updated — Reg DD violation | Marketing Manager + Core Systems Administrator | Website and digital rates updated within 4 hours; branch signage within 24 hours |
| Deposit rate decrease applied without 30-day notice | Deposit Operations Manager + Compliance Officer | Compliance Officer gate at 4-hour checkpoint; no rate decrease on existing accounts without notice |
| Loan APR disclosures inaccurate at new rates | Loan Officer + Compliance Officer | Test environment validation before production; post-implementation sample audit |
| Member attrition from rate decrease (deposits) or rate increase (loans) | Financial Advisor + CEO | Proactive outreach to rate-sensitive members within 48 hours |
| Variable-rate borrower payment shock | Loan Officer + Financial Advisor | Proactive communication; hardship options available for affected members |
| Inconsistent rates across channels (branch vs. online vs. mobile) | Core Systems Administrator | Single rate table source; all channels verified at 24-hour checkpoint |
| Competitive positioning error — rates set too high or too low | CFO | Competitive analysis at 4-hour checkpoint; ALCO review within 7 days |

---

## Activation Prompt

```
Activate CFO in CANVAS-Full mode for Fed Rate Change Response.

FOMC action: [Rate increase / Rate decrease] of [XX] basis points
New target range: [X.XX% - X.XX%]
Effective date: [Date]
Forward guidance: [Summary of FOMC statement]

Execute the CANVAS Fed Rate Change Response — Cascade Fan-Out protocol:
- Hour 0: All workstreams launch simultaneously
- Hour 4 checkpoint: Analysis complete — CFO approves final rates
- Hour 24 checkpoint: Implementation complete — all systems and communications updated
- Hour 48 checkpoint: Verification complete — compliance audit passed

All workstreams report to CFO at each convergence checkpoint.
Compliance Officer approval required on all member-facing communications before publication.
Reg DD 30-day notice required for any deposit rate decrease on existing accounts.
Board briefing prepared by 48-hour checkpoint.
Reference: agentic-credit-union/strategy/playbooks/workflow-b-loan-origination.md
Reference: agentic-credit-union/strategy/playbooks/workflow-e-deposit-operations.md
Reference: agentic-credit-union/strategy/playbooks/workflow-g-annual-strategic-planning.md
```

---

*CANVAS Fed Rate Change Response Runbook — When the Fed moves, every function moves simultaneously. Converge at checkpoints, not at the finish line.*
