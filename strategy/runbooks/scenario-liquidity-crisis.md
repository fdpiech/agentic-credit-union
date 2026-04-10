# Runbook: Liquidity Crisis / Run on Deposits

> **Mode**: CANVAS-Full | **Duration**: Continuous monitoring with escalation triggers | **Agents**: 7+ (scales by tier) | **Lead**: CFO (Tiers 1-2), CEO (Tiers 3-4)

> **Pattern**: Adaptive Threshold Response — The runbook dynamically changes shape based on real-time severity tiers. Different agent squads activate at different deposit outflow thresholds. The response scales up or down as conditions change.

---

## Scenario

The credit union is experiencing abnormal deposit outflows that may signal a liquidity crisis or run on deposits. Triggers may include adverse media coverage, social media rumors, a nearby institution failure, rising rate competition, or broader economic stress. This runbook defines four severity tiers, each with a distinct agent squad, escalation protocol, and action set. The active tier is determined by real-time deposit outflow metrics. As outflows increase, additional agents activate and response intensity escalates. As conditions stabilize, the runbook de-escalates through the same tiers.

## When to Activate

- Net deposit outflows exceed 2% of total deposits in a rolling 7-day period
- Single-day deposit outflow exceeds 1% of total deposits
- Social media or news coverage creates member anxiety about credit union stability
- Nearby credit union or bank failure triggers contagion concern
- NCUA or state regulator expresses concern about liquidity position
- Internal early warning indicators breach established thresholds (ALM model, liquidity ratio)
- Significant rate competition causing accelerated deposit migration

---

## Tier Definitions

| Tier | Deposit Outflow (Rolling 30 Days) | Severity | Lead | Agent Squad |
|------|-----------------------------------|----------|------|-------------|
| **Tier 1** | ≤ 5% of total deposits | Monitoring | CFO | CFO, Deposit Operations Manager, Risk Manager |
| **Tier 2** | 5% - 15% of total deposits | Active Response | CFO | Tier 1 + CEO, Branch Manager, Marketing Manager, Compliance Officer |
| **Tier 3** | 15% - 25% of total deposits | Crisis | CEO | Tier 2 (all agents — full mobilization), NCUA/CLF coordination |
| **Tier 4** | > 25% of total deposits | Existential | CEO | Tier 3 + external advisors, NCUA direct coordination, merger exploration |

> **Escalation**: Move UP one tier when outflow metrics breach the next threshold for 2 consecutive business days. **De-escalation**: Move DOWN one tier when outflow metrics remain below the current tier threshold for 5 consecutive business days.

---

## Agent Roster

### Tier 1: Monitoring Squad
| Agent | Role |
|-------|------|
| **CFO** | Lead — liquidity monitoring, ALM model management, borrowing capacity assessment |
| **Deposit Operations Manager** | Real-time deposit flow tracking, large withdrawal monitoring, rate analysis |
| **Risk Manager** | Enterprise risk assessment, stress testing, early warning indicators |

### Tier 2: Active Response Squad (adds to Tier 1)
| Agent | Role |
|-------|------|
| **CEO** | Strategic authority, board communication, member confidence actions |
| **Branch Manager** | Branch-level withdrawal patterns, member sentiment, staff messaging |
| **Marketing Manager** | Member communications, counter-narrative messaging, deposit promotion campaigns |
| **Compliance Officer** | Regulatory notification assessment, PCA threshold monitoring, documentation |

### Tier 3-4: Full Mobilization (all agents above plus external coordination)
All Tier 1 and Tier 2 agents remain active. CEO assumes lead from CFO. External coordination with NCUA, Central Liquidity Facility (CLF), and Federal Home Loan Bank (FHLB) activated.

---

## Regulatory Framework

| Obligation | Regulation | Owner | Deadline |
|-----------|-----------|-------|---------|
| Net worth ratio monitoring — PCA thresholds | 12 CFR 702 (Prompt Corrective Action) | CFO + Compliance Officer | Continuous — breach triggers mandatory NCUA notification |
| NCUA notification — if net worth falls below Well Capitalized | 12 CFR 702.204 | CEO + Compliance Officer | Immediate upon determination |
| CLF borrowing eligibility and activation | 12 CFR 725 (Central Liquidity Facility) | CFO | Pre-arranged if possible; emergency within 24 hours |
| FHLB advance capacity and activation | FHLB membership requirements | CFO | Pre-arranged credit lines; draw within 24 hours |
| Call report accuracy — liquidity position | NCUA Call Report (5300) | CFO | Next quarterly filing — accurate reporting of liquidity position |
| Member share insurance coverage communication | 12 CFR 740 (NCUA Share Insurance) | Compliance Officer + Marketing Manager | Immediately upon member concern — $250,000 per ownership category |
| Interagency Policy Statement on Funding and Liquidity Risk | FFIEC guidance | Risk Manager + CFO | Ongoing — policy compliance documented |

> **Critical**: Prompt Corrective Action (PCA) thresholds under 12 CFR 702 are hard regulatory triggers. If the credit union's net worth ratio falls below 7% (Well Capitalized), the NCUA must be notified and supervisory actions increase. Below 6% (Adequately Capitalized), mandatory restrictions apply. The CFO must monitor net worth impact of deposit outflows in real time.

---

## TIER 1: Monitoring Mode (≤ 5% Outflow)

```
Activate CFO — LIQUIDITY MONITORING MODE.

Trigger: Deposit outflows have reached [X]% of total deposits over [timeframe]
Current liquidity ratio: [X]%
Current net worth ratio: [X]%
On-hand cash and liquid investments: $[amount]
Available borrowing capacity: CLF $[amount] / FHLB $[amount] / Other $[amount]

DAILY MONITORING ACTIONS:
1. Deposit flow dashboard — daily net deposit change by branch, by product, by channel
2. Large withdrawal tracking — withdrawals > $100,000 flagged for review
3. Rate sensitivity analysis — are outflows rate-driven or confidence-driven?
   - Rate-driven: Members moving to higher-yielding alternatives
   - Confidence-driven: Members moving to perceived safer institutions
   (This distinction determines the Tier 2 response strategy)
4. Liquidity ratio calculation — current and projected 30/60/90-day
5. ALM model stress test — run adverse scenario on continued outflow rate
6. Borrowing capacity verification — confirm CLF and FHLB lines are active and accessible
7. Net worth ratio impact — project net worth if outflows continue at current rate

Activate Deposit Operations Manager — DEPOSIT FLOW TRACKING.

Daily actions:
1. Track net deposit changes by product type (savings, checking, money market, CDs)
2. Monitor CD maturity schedule — 30/60/90-day maturity pipeline
3. Identify members with largest balances — retention risk assessment
4. Track online and mobile transfer activity — outbound wire and ACH volume
5. Report to CFO: daily deposit flow summary

Activate Risk Manager — EARLY WARNING MONITORING.

Daily actions:
1. Update liquidity stress test with current outflow data
2. Monitor peer institution deposit trends — is this CU-specific or market-wide?
3. Social media and news monitoring — any adverse coverage mentioning the credit union?
4. Competitive rate monitoring — are competitors aggressively pricing deposits?
5. Report to CFO: risk assessment update — recommend HOLD at Tier 1 or ESCALATE to Tier 2

ESCALATION TRIGGER → TIER 2:
- Deposit outflows exceed 5% of total deposits (rolling 30 days) for 2 consecutive business days
- CFO determines confidence-driven outflows (vs. rate-driven)
- Social media or news coverage creating member anxiety
- Single-day outflow exceeds 2% of total deposits
```

---

## TIER 2: Active Response (5-15% Outflow)

```
Activate CEO — LIQUIDITY ACTIVE RESPONSE.

Tier 2 activated: Deposit outflows have reached [X]% of total deposits
Cause assessment: [Rate-driven / Confidence-driven / Mixed]

CEO ACTIONS:
1. Board notification — verbal briefing to Board Chair; written briefing within 24 hours
2. Assess cause and direct response strategy:
   - If RATE-DRIVEN: Competitive rate response — deposit specials, rate increases
   - If CONFIDENCE-DRIVEN: Member confidence campaign — insurance messaging, stability messaging
   - If MIXED: Both strategies simultaneously
3. Authorize borrowing line activation if projected liquidity needs warrant
4. Daily situation briefings from CFO
5. Evaluate need for NCUA voluntary communication (proactive — not yet required)

Activate Branch Manager — BRANCH-LEVEL RESPONSE.

Branch actions:
1. Monitor branch-level withdrawal patterns — which branches are seeing highest outflows?
2. Staff messaging: Equip staff with approved talking points about credit union stability
3. NCUA share insurance: Every member-facing staff member must be able to explain:
   - Deposits are federally insured up to $250,000 per ownership category
   - NCUA insurance is backed by the full faith and credit of the U.S. government
   - The credit union's financial position (as approved by CEO for sharing)
4. Escalation protocol: Any member withdrawing > $50,000 — Branch Manager conversation offered
5. Report to CEO: daily branch sentiment and withdrawal pattern summary

Activate Marketing Manager — MEMBER CONFIDENCE COMMUNICATIONS.

Communication actions:
1. If CONFIDENCE-DRIVEN outflows:
   - Member communication: Credit union stability, NCUA insurance, financial strength
   - Website: NCUA insurance FAQ page, financial strength highlights
   - Social media: Counter misinformation; factual, calm, confident messaging
   - DO NOT use panic language — no "we are NOT in trouble" (confirms the narrative)
   - DO use strength language — "Your credit union is well-capitalized, federally insured, and here for you"
2. If RATE-DRIVEN outflows:
   - Deposit promotional campaign — CD specials, money market rate increase, loyalty bonus
   - Member outreach to high-balance depositors — relationship pricing, rate match
3. All communications reviewed by Compliance Officer before publication
4. Report to CEO: communication plan and deployment timeline

Activate Compliance Officer — REGULATORY MONITORING.

Regulatory actions:
1. Monitor net worth ratio — calculate impact of continued outflows on PCA category
2. PCA threshold tracking:
   - Well Capitalized: ≥ 7.0% net worth ratio
   - Adequately Capitalized: 6.0% - 6.99%
   - Undercapitalized: 4.0% - 5.99%
   - Significantly Undercapitalized: 2.0% - 3.99%
   - Critically Undercapitalized: < 2.0%
3. Document all liquidity management actions for examination file
4. Assess whether NCUA voluntary notification is appropriate (proactive communication)
5. Report to CFO: PCA projection, regulatory exposure assessment

CFO ENHANCED ACTIONS (Tier 2):
1. Activate FHLB borrowing line — draw funds to shore up liquidity position
2. Evaluate CLF borrowing as backup
3. Investment portfolio liquidity assessment — what can be liquidated quickly without significant loss?
4. Negotiate brokered CD or other wholesale funding if needed
5. Daily liquidity projection — 7/14/30/60/90-day forward outlook
6. ALCO emergency session — rate response and liquidity strategy

ESCALATION TRIGGER → TIER 3:
- Deposit outflows exceed 15% of total deposits (rolling 30 days) for 2 consecutive business days
- Net worth ratio projected to fall below 7% (Well Capitalized) within 30 days
- NCUA contacts the credit union regarding liquidity concerns
- Borrowing capacity approaching limits

DE-ESCALATION TRIGGER → TIER 1:
- Deposit outflows below 5% of total deposits (rolling 30 days) for 5 consecutive business days
- Net deposit flows turn positive for 3 consecutive business days
- Root cause addressed (rate competition neutralized or confidence restored)
```

---

## TIER 3: Crisis Mode (15-25% Outflow)

```
Activate CEO — LIQUIDITY CRISIS MODE.

Tier 3 activated: Deposit outflows have reached [X]% of total deposits
Net worth ratio: [X]% — PCA category: [Well Capitalized / Adequately Capitalized / ...]
Available liquidity: $[amount] (cash + borrowing capacity remaining)
Projected days of liquidity at current outflow rate: [X] days

CEO CRISIS ACTIONS:
1. Emergency board session — full briefing on liquidity position
   - Current outflow rate and trend
   - Liquidity position and projected runway
   - Borrowing capacity remaining
   - Net worth ratio and PCA implications
   - Management action plan
   - Board decisions required: borrowing authorization, rate authority, contingency planning
2. NCUA proactive communication — contact regional office
   - Provide accurate, complete picture of liquidity position
   - Demonstrate management competence and action plan
   - Request CLF emergency access if not already activated
   - Proactive disclosure is ALWAYS better than NCUA discovering the crisis independently
3. Legal counsel engagement — review options, obligations, and contingency planning
4. All non-essential expenditures frozen
5. Lending authority restricted — new loan originations paused or reduced to conserve cash

CFO CRISIS ACTIONS:
1. Maximum FHLB borrowing — draw full available capacity
2. CLF emergency borrowing activation
3. Investment portfolio liquidation plan — identify securities for immediate sale
4. Federal funds purchased — interbank borrowing if available
5. Brokered deposits — emergency wholesale funding (note: NCUA restrictions for undercapitalized CUs)
6. Hourly liquidity tracking — real-time dashboard to CEO
7. Cash management: Ensure sufficient vault cash at all branches; coordinate with Fed cash services

ALL AGENTS — FULL MOBILIZATION:
- All Tier 1 and Tier 2 agents continue their assigned duties at maximum intensity
- Branch Manager: Extended hours if needed; manage any physical queuing for withdrawals calmly
- Marketing Manager: Intensified member confidence campaign; CEO video message to members
- Compliance Officer: PCA compliance monitoring; prepare NCUA notifications if thresholds breached
- Deposit Operations Manager: Large withdrawal coordination; wire transfer volume management

ESCALATION TRIGGER → TIER 4:
- Deposit outflows exceed 25% of total deposits (rolling 30 days)
- Net worth ratio falls below Adequately Capitalized (< 6.0%)
- All borrowing capacity exhausted
- NCUA initiates supervisory action

DE-ESCALATION TRIGGER → TIER 2:
- Deposit outflows below 15% of total deposits (rolling 30 days) for 5 consecutive business days
- Borrowing lines stabilized — capacity rebuilding
- Net worth ratio stabilized above 7%
```

---

## TIER 4: Existential Threat (> 25% Outflow)

```
Activate CEO — EXISTENTIAL THREAT PROTOCOL.

Tier 4 activated: Deposit outflows have exceeded 25% of total deposits
Net worth ratio: [X]% — PCA category: [Adequately Capitalized / Undercapitalized / ...]
Remaining liquidity: $[amount]
Borrowing capacity: [Exhausted / $amount remaining]

CEO ACTIONS:
1. NCUA direct coordination — daily communication with regional director
   - Full transparency on position and trajectory
   - Request all available assistance and guidance
   - Understand NCUA's supervisory posture and expectations
2. Emergency board session:
   - Conservatorship risk assessment — what are NCUA's options?
   - Merger exploration — identify potential merger partners
   - Voluntary liquidation assessment — member impact analysis
3. Outside financial advisor or investment banker retained (with NCUA coordination)
4. Staff communication — honest, controlled messaging; prevent staff exodus
5. Member communication — CEO message emphasizing NCUA insurance protection

CONTINGENCY PLANNING:
1. Merger exploration:
   - Identify willing and capable merger partners
   - Preliminary merger discussions (NCUA may facilitate)
   - Member impact analysis — which outcome best protects member interests?
2. Purchase and assumption preparation:
   - If NCUA determines conservatorship: cooperate fully
   - Prepare complete data packages for potential acquirers
   - Member and staff communication plans for each scenario
3. NCUA conservatorship coordination:
   - If NCUA places CU in conservatorship, all authority transfers to NCUA conservator
   - Management role: cooperate, provide information, support transition
   - Member communication: NCUA insurance protects deposits up to $250,000

DE-ESCALATION TRIGGER → TIER 3:
- Deposit outflows below 25% for 5 consecutive business days
- New capital or liquidity injection obtained
- Merger partner identified with binding commitment
- NCUA confirms continued operating authority
```

---

## Quality Gate Checklist

| # | Criterion | Owner | Deadline | Status |
|---|-----------|-------|---------|--------|
| 1 | Daily deposit flow monitoring dashboard operational | CFO + Deposit Operations Manager | Tier 1 activation | ☐ |
| 2 | Borrowing capacity verified — CLF and FHLB lines confirmed accessible | CFO | Tier 1 activation | ☐ |
| 3 | Net worth ratio and PCA impact calculated | Compliance Officer + CFO | Each tier activation | ☐ |
| 4 | Board notified of liquidity situation | CEO | Tier 2 activation (within 24 hours) | ☐ |
| 5 | Member confidence communications deployed | Marketing Manager | Tier 2 activation (within 48 hours) | ☐ |
| 6 | Branch staff equipped with approved talking points and insurance facts | Branch Manager | Tier 2 activation | ☐ |
| 7 | NCUA proactive communication initiated | CEO + Compliance Officer | Tier 3 activation | ☐ |
| 8 | Emergency board session convened | CEO | Tier 3 activation (within 48 hours) | ☐ |
| 9 | All borrowing lines fully drawn | CFO | Tier 3 — as needed | ☐ |
| 10 | Contingency planning initiated (merger / conservatorship preparation) | CEO | Tier 4 activation | ☐ |
| 11 | All actions documented for regulatory examination file | Compliance Officer | Ongoing — all tiers | ☐ |
| 12 | De-escalation criteria met — tier reduction confirmed | CFO + CEO | Per de-escalation triggers | ☐ |

**Gate Keepers**: CFO (Tiers 1-2 — liquidity management authority) + CEO (Tiers 3-4 — enterprise survival authority) + Compliance Officer (all tiers — regulatory compliance)

**Gate Decision (Tier Transitions)**:
- **ESCALATE**: Outflow metrics breach next tier threshold for 2 consecutive business days — activate higher tier
- **HOLD**: Metrics within current tier — maintain current response intensity
- **DE-ESCALATE**: Outflow metrics below current tier threshold for 5 consecutive business days — reduce to lower tier
- **RESOLVED**: Net deposit flows positive for 10 consecutive business days; all borrowing lines repaid or on schedule; board briefed on resolution

---

## Key Risks to Manage

| Risk | Owner | Mitigation |
|------|-------|-----------|
| Member panic from social media rumors | Marketing Manager + CEO | Rapid factual response; NCUA insurance messaging; CEO member communication |
| PCA threshold breach — mandatory NCUA action | CFO + Compliance Officer | Real-time net worth monitoring; proactive NCUA communication before breach |
| Borrowing capacity exhausted | CFO | Diversified borrowing sources (CLF, FHLB, Fed funds, brokered CDs); early activation |
| Staff anxiety causing service degradation | CHRO + Branch Manager | Honest staff communication; approved talking points; visible leadership |
| Contagion from nearby institution failure | CEO + Marketing Manager | Differentiation messaging; emphasize CU-specific financial strength |
| Brokered deposit restrictions for undercapitalized CUs | CFO + Compliance Officer | Monitor PCA status; access brokered funding while still Well Capitalized |
| Liquidity crisis masking underlying asset quality problem | Risk Manager + Internal Auditor | Independent loan portfolio review; ensure liquidity crisis is not a solvency crisis |

---

## Activation Prompt

```
Activate CFO in CANVAS-Full mode for Liquidity Crisis — Adaptive Threshold Response.

Current deposit outflow: [X]% of total deposits over [timeframe]
Current tier: [Tier 1 / Tier 2 / Tier 3 / Tier 4]
Net worth ratio: [X]%
Liquidity ratio: [X]%
Available borrowing capacity: CLF $[X] / FHLB $[X]
Cause assessment: [Rate-driven / Confidence-driven / Mixed / Unknown]

Execute the CANVAS Liquidity Crisis — Adaptive Threshold Response protocol:
- Tier 1 (≤5%): Monitoring mode — CFO + Deposit Ops + Risk Manager
- Tier 2 (5-15%): Active response — add CEO, Branch, Marketing, Compliance
- Tier 3 (15-25%): Crisis mode — full mobilization, NCUA/CLF coordination
- Tier 4 (>25%): Existential — conservatorship prep, merger exploration

Escalation: 2 consecutive business days above tier threshold.
De-escalation: 5 consecutive business days below tier threshold.
Net worth ratio and PCA impact calculated at every tier transition.
NCUA proactive communication initiated at Tier 3 — do not wait for Tier 4.
Reference: agentic-credit-union/strategy/playbooks/workflow-e-deposit-operations.md
Reference: agentic-credit-union/strategy/playbooks/workflow-g-annual-strategic-planning.md
```

---

*CANVAS Liquidity Crisis Runbook — Liquidity crises are managed in tiers, not phases. The response scales with the threat — activate early, escalate decisively, de-escalate deliberately, and never let the first sign of stability become complacency.*
