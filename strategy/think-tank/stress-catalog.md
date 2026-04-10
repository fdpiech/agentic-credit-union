# CANVAS Think Tank — Stress Catalog

> A parameterized library of disruptions used in Think Tank cycles. Each entry is a reusable stress with defined parameters, trigger conditions, predicted pressure points, and linked runbooks. Stresses must come from this catalog (or be proposed as new entries before use) — see [methodology.md](methodology.md) for the catalog discipline.

---

## Entry Schema

Every catalog entry follows this schema:

| Field | Purpose |
|---|---|
| **ID** | Stable identifier (`ST-NN`) — used in cycle reports and ledgers |
| **Name** | Human-readable name |
| **Parameters** | Named variables with typical ranges; a cycle must pick specific values |
| **Trigger conditions** | How the stress arrives in the simulated environment |
| **Predicted pressure points** | Where the Stress Designer expects breakage — used for pre-registration |
| **Linked runbooks** | Existing CANVAS runbooks that partially cover this stress (if any) |
| **Cycles used** | Back-references to cycle reports that applied this stress |

New entries require: Stress Designer draft → Facilitator acceptance → methodology anti-pattern check (no stress theater, no freeform scenarios). Updates to parameter ranges are additive — don't delete historical ranges that previous cycles cited.

---

## ST-01 — Rate Shock Up

- **Parameters**
  - `magnitude`: +75 bps / +150 bps / +300 bps
  - `horizon`: 3 months (abrupt) / 6 months (ramped)
  - `yield_curve_shape`: parallel / flattening / inversion
- **Trigger conditions**: Fed policy action communicated mid-cycle; ALCO receives updated rate projections from CFO.
- **Predicted pressure points**
  - Workflow B (Loan Origination): risk-based pricing matrix becomes obsolete; counter-offer rate rises sharply; DTI math for floating-rate products shifts
  - Workflow E (Deposit Operations): deposit pricing lags competitor repricing; NIM compresses
  - Workflow G (Strategic Planning): budget assumptions invalidated mid-year
  - Step-matrix: CFO/ALCO gate decisions bunch up at rate-sensitive steps
- **Linked runbooks**: `strategy/runbooks/scenario-fed-rate-change.md`, `strategy/runbooks/scenario-liquidity-crisis.md`
- **Cycles used**: cycle-0001 (+200 bps / 60 days)

---

## ST-02 — Rate Shock Down

- **Parameters**
  - `magnitude`: -100 bps / -200 bps
  - `horizon`: 6 months (typical cutting cycle)
  - `yield_curve_shape`: steepening / parallel
- **Trigger conditions**: Fed easing cycle; mortgage rate sheets updated; prepayment notifications surge.
- **Predicted pressure points**
  - Workflow C (Mortgage Processing): refi wave; TRID re-disclosure timing under volume
  - Workflow E (Deposit Operations): deposit runoff as members chase yield elsewhere
  - Step-matrix: Mortgage Loan Processor Execute steps backlog; Compliance Officer Gate capacity strained
- **Linked runbooks**: `strategy/runbooks/scenario-fed-rate-change.md`
- **Cycles used**: —

---

## ST-03 — Delinquency Spike

- **Parameters**
  - `baseline`: current 60+ day delinquency ratio (e.g., 0.8%)
  - `target`: stressed ratio (e.g., 2.5% / 4.0%)
  - `ramp`: 60 / 90 / 180 days
  - `concentration`: unsecured / auto / HELOC / commercial
- **Trigger conditions**: Local employer layoff; economic slowdown indicator; portfolio aging effect.
- **Predicted pressure points**
  - Workflow B (Loan Origination): underwriting criteria debate; risk appetite review mid-cycle
  - Workflow D (Collections & Recovery): volume overwhelms Collections Specialist; hardship protocol triggers surge
  - Workflow H (Fraud Dispute): overlap with credit-card ATO and check kiting
  - ALLL reserve methodology: CFO and Risk Manager re-estimation
  - Step-matrix: Risk Manager Gate on charge-off recommendations becomes throughput bottleneck
- **Linked runbooks**: `strategy/runbooks/scenario-liquidity-crisis.md` (if compounded)
- **Cycles used**: —

---

## ST-04 — New Regulation / CFPB Action

- **Parameters**
  - `rule_id`: e.g., CFPB 1071 (small-business reporting), UDAAP overdraft guidance, Section 1033 (open banking data access)
  - `effective_date`: relative to cycle start (T+90 / T+180 / T+365)
  - `affected_workflows`: list
  - `enforcement_posture`: guidance / supervisory / rule
- **Trigger conditions**: Federal Register publication; NCUA Regulatory Alert; CFPB enforcement action against a peer.
- **Predicted pressure points**
  - Workflow F (Compliance Examination): exam scope expands; policy gap analysis
  - Workflow K (BSA/AML): if the rule touches transaction monitoring or reporting
  - Workflow L (New Product Launch): pipeline products require re-review
  - Step-matrix: Compliance Officer Gate on any regulated step; Regulatory Affairs Analyst Advise capacity
- **Linked runbooks**: `strategy/runbooks/scenario-exam-preparation.md`, `strategy/runbooks/scenario-new-product-launch.md`
- **Cycles used**: —

---

## ST-05 — Core Outage

- **Parameters**
  - `scope`: full outage / read-only / specific module (loan origination / card auth / online banking / teller)
  - `duration`: 4h / 24h / 72h
  - `cause`: core vendor incident / internal change failure / network
- **Trigger conditions**: Core vendor incident notification; failed patching window; DDoS against online banking.
- **Predicted pressure points**
  - Workflow Q (Core Conversion): BCP/DRP activation; vendor escalation
  - Workflow B (Loan Origination): application intake stalls; ECOA adverse-action clock still ticking
  - Workflow E (Deposit Operations): transaction posting backlog; Reg E dispute timelines
  - Workflow I (Card Services): card auth downgrade modes
  - Step-matrix: Core Systems Administrator Execute capacity; CEO Escalation lane for public communication
- **Linked runbooks**: `strategy/runbooks/scenario-data-breach-response.md` (if suspected breach), `strategy/runbooks/scenario-natural-disaster-response.md`
- **Cycles used**: —

---

## ST-06 — Card Rail Outage

- **Parameters**
  - `rail`: Visa/Mastercard / processor / ATM driver / PIN network
  - `duration`: 2h / 8h / 24h
  - `geography`: local / regional / national
- **Trigger conditions**: Card network incident; processor failure; ATM driver crash.
- **Predicted pressure points**
  - Workflow I (Card Services): cardholder inquiry surge; fraud monitoring false positives during failover
  - Workflow H (Fraud Dispute): Reg E timelines unaffected by outage — disputes still must be handled
  - Step-matrix: Card Services Specialist Execute capacity; Fraud Detection Analyst Gate on mass fraud events
- **Linked runbooks**: `strategy/runbooks/scenario-data-breach-response.md` (if suspected), `strategy/runbooks/scenario-natural-disaster-response.md`
- **Cycles used**: —

---

## ST-07 — Vendor Failure

- **Parameters**
  - `tier`: Tier 1 (critical, e.g., core, card processor) / Tier 2 (important) / Tier 3 (peripheral)
  - `failure_mode`: breach / bankruptcy / SLA collapse / sanctions listing / acquisition by adversary
  - `notice`: 0 days / 30 days / 90 days
- **Trigger conditions**: Vendor incident disclosure; SEC filing; law enforcement action; SLA breach pattern.
- **Predicted pressure points**
  - Workflow M (Vendor Management): due diligence package activation; contingency plan execution
  - Workflow F (Compliance): third-party oversight examination exposure
  - Workflow J (IT Security): if a breach is suspected, incident response runs in parallel
  - Step-matrix: Risk Manager Gate on vendor continuation decision
- **Linked runbooks**: `strategy/runbooks/scenario-vendor-due-diligence.md`, `strategy/runbooks/scenario-vendor-onboarding.md`
- **Cycles used**: —

---

## ST-08 — Key-Staff Departure

- **Parameters**
  - `role`: Compliance Officer / BSA Officer / CFO / Core Systems Administrator / Risk Manager / CEO
  - `notice`: 0 days (termination, death, sudden illness) / 2 weeks / planned (90+ days)
  - `successor_readiness`: named successor ready / successor in development / no successor
- **Trigger conditions**: Resignation, termination, medical event, recruitment by competitor.
- **Predicted pressure points**
  - **Every step-matrix cell where the departing role is Execute or Gate** — this is the best stress for finding single points of failure in governance
  - Workflow F (Compliance) if Compliance Officer departs: exam clock, filing obligations, gate backlogs
  - Workflow K (BSA/AML) if BSA Officer departs: SAR filing obligations, CTR backlogs
  - Workflow G (Strategic Planning) if CEO departs: board continuity
  - All regulatory gates: successor authority and independence
- **Linked runbooks**: `strategy/runbooks/scenario-internal-fraud-investigation.md` (if termination is fraud-related)
- **Cycles used**: cycle-0001 (Compliance Officer, 0 days, no named successor)

> **Note**: This is the single most productive stress for surfacing governance gaps. Almost every CANVAS Gate cell is a single point of failure in the absence of a named alternate. Cycles that use ST-08 tend to produce high-value structural deltas.

---

## ST-09 — Liquidity Crisis

- **Parameters**
  - `deposit_outflow`: 5% / 10% / 20% per week
  - `concurrent_loan_demand`: normal / elevated (e.g., line-of-credit draws)
  - `borrowing_capacity_remaining`: % of FHLB/discount window/corporate credit union lines
- **Trigger conditions**: Peer CU failure; regional banking stress; social media run; rate shock cascade.
- **Predicted pressure points**
  - Workflow E (Deposit Operations): large-dollar withdrawal handling; CTR and BSA patterns
  - Workflow G (Strategic Planning): contingency funding plan activation
  - Step-matrix: CFO Gate on borrowing decisions; CEO Escalation on board and NCUA notification
- **Linked runbooks**: `strategy/runbooks/scenario-liquidity-crisis.md`
- **Cycles used**: —

---

## ST-10 — Member Run / Reputational Event

- **Parameters**
  - `trigger_type`: social media rumor / local news / peer CU failure / cybersecurity incident disclosure
  - `outflow_rate`: 2% / 5% / 10% of shares per week
  - `branch_lobby_surge`: normal / elevated / severe
- **Trigger conditions**: Viral post; investigative reporting; peer failure news; data breach disclosure.
- **Predicted pressure points**
  - Workflow E (Deposit Operations): withdrawal surge; CTR filings; cash logistics
  - Workflow N (Branch Operations): lobby capacity; member communication scripts
  - Step-matrix: Marketing Manager Advise on messaging; CEO Escalation for media; Branch Manager Execute on lobby management
- **Linked runbooks**: `strategy/runbooks/scenario-natural-disaster-response.md` (communication patterns), `strategy/runbooks/scenario-liquidity-crisis.md` (if outflows sustain)
- **Cycles used**: —

---

## ST-11 — Fraud Wave

- **Parameters**
  - `vector`: card-not-present (CNP) / synthetic identity / check kiting / account takeover (ATO) / business email compromise
  - `volume`: baseline × 5 / × 20 / × 50
  - `concentration`: hours / days / sustained over weeks
- **Trigger conditions**: Dark-market data dump; seasonal pattern; new kit in the wild.
- **Predicted pressure points**
  - Workflow H (Fraud Dispute): Reg E timelines under volume; triage capacity
  - Workflow I (Card Services): card blocking and reissuance operational load
  - Workflow K (BSA/AML): SAR filing backlog; pattern correlation with other AML typologies
  - Step-matrix: Fraud Detection Analyst Gate on classification; BSA Officer Gate on SAR determinations
- **Linked runbooks**: `strategy/runbooks/scenario-data-breach-response.md` (if correlated), `strategy/runbooks/scenario-internal-fraud-investigation.md` (if insider suspected)
- **Cycles used**: —

---

## ST-12 — Exam Finding / MRA

- **Parameters**
  - `severity`: DOR (Document of Resolution) / MRA (Matter Requiring Attention) / formal action (LUA, C&D)
  - `topic`: BSA/AML / Fair lending / IRR / Liquidity / Cybersecurity / Consumer compliance
  - `response_deadline`: 30 / 60 / 90 days
- **Trigger conditions**: NCUA exam closing meeting; correspondence from regional office; CFPB supervisory letter.
- **Predicted pressure points**
  - Workflow F (Compliance Examination): response drafting, evidence compilation
  - Workflow G (Strategic Planning): budget reallocation for remediation
  - **All escalation lanes up to CEO and board** — tests whether the step-matrix escalation conventions actually work under external pressure
  - Step-matrix: CEO Escalation on regulator communication; Compliance Officer Gate on remediation adequacy; Internal Auditor Advise on independent verification
- **Linked runbooks**: `strategy/runbooks/scenario-exam-preparation.md`
- **Cycles used**: —

---

## Pressure Point Cross-Reference

Quick index of which stresses pressure each workflow most. Use this when selecting stresses for a cycle.

| Workflow | Primary stresses |
|---|---|
| A — Member Onboarding | ST-04, ST-05, ST-08 |
| B — Loan Origination | ST-01, ST-03, ST-08, ST-04 |
| C — Mortgage Processing | ST-01, ST-02, ST-05 |
| D — Collections & Recovery | ST-03, ST-11 |
| E — Deposit Operations | ST-01, ST-02, ST-09, ST-10, ST-11 |
| F — Compliance Examination | ST-04, ST-12, ST-08 |
| G — Annual Strategic Planning | ST-01, ST-09, ST-12 |
| H — Fraud Dispute | ST-06, ST-11 |
| I — Card Services | ST-06, ST-11 |
| J — IT Security | ST-05, ST-07 |
| K — BSA/AML | ST-04, ST-11, ST-08 |
| L — New Product Launch | ST-04 |
| M — Vendor Management | ST-07 |
| N — Branch Operations | ST-05, ST-10 |
| O — Merger & Acquisition | ST-09, ST-12 |
| P — Financial Wellness | ST-03 |
| Q — Core Conversion | ST-05, ST-07 |

---

## Proposing New Entries

A cycle that encounters a scenario not covered by the catalog should:

1. Pause the Model-stressed run
2. Stress Designer drafts a new entry in this file with a proposed `ST-NN` ID
3. Facilitator reviews for anti-pattern compliance (parameterized, not freeform; predicts pressure points; links to any existing runbook)
4. Entry is added, and the cycle proceeds using the new entry
5. Catalog entry is committed as part of the cycle's Delta set (disposition: `merged`)

New entries must not delete or renumber existing entries. The catalog is append-only for ID stability.

---

*CANVAS Stress Catalog — twelve parameterized disruptions that pressure-test the framework. If the scenario you need isn't here, propose it before you run it.*
