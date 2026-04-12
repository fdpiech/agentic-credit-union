# Workflow H Playbook — Fraud Detection & Dispute Resolution

> **Cycle Time**: 1 day (classification) – 45 days (Reg E final resolution) | **Agents**: 5 | **Gate Keepers**: Fraud Detection Analyst + Compliance Officer

---

## Objective

Investigate fraud claims and unauthorized transaction disputes with the speed and precision that Reg E demands — protecting members from financial harm while defending the credit union from unwarranted loss. Every fraud report is classified within hours, provisional credit decisions meet the 10-business-day mandate, and final investigation outcomes are documented with the specificity that withstands regulatory scrutiny. Cooperative values require that fraud victims be treated as members in distress, not suspects.

## Pre-Conditions

- [ ] Fraud report received via member call, branch, mobile app, or internal detection system
- [ ] Core system access available to pull full transaction history
- [ ] Fraud case management system or log active
- [ ] Compliance Officer briefed on any active fraud trends affecting the portfolio
- [ ] BSA Officer notified if SAR-level patterns are present in the queue

## Regulatory Framework

| Regulation | Requirement | Enforcement Agent |
|-----------|-------------|-------------------|
| Reg E (Electronic Fund Transfer Act) | Provisional credit within 10 business days; final resolution within 45 days (90 for foreign transactions) | Compliance Officer |
| Reg E — Error Resolution | Written notice to member of findings required; 3 business days to reverse provisional credit after adverse finding | Compliance Officer |
| BSA / FinCEN | Suspicious Activity Report (SAR) required if fraud meets reporting threshold | BSA Officer |
| FCRA | Accurate fraud-related credit bureau reporting | Fraud Detection Analyst |
| NCUA Part 748 | Information security incident documentation | Core Systems Administrator |

**Supervision note (2025-2026)**: CFPB continues to supervise depository institutions for "actual fraud against consumers with identifiable victims and measurable consumer damages" even during the broader agency curtailment. Fraud/dispute case files should be examination-ready for both NCUA and CFPB review.

**Reg E Timelines — NON-NEGOTIABLE:**
- **Day 0**: Dispute received — clock starts
- **Day 10 (business days)**: Provisional credit decision deadline — credit if investigation not complete
- **Day 45**: Final resolution and member notification
- **Day 90**: Final resolution for POS transactions initiated outside the US

---

## Agent Activation Sequence

### Step 1: Intake & Fraud Classification (Fraud Detection Analyst)

```
Activate Fraud Detection Analyst for fraud intake on account [#].

Member: [Name] | Account #: [Number] | Date reported: [Date] — REG E CLOCK STARTS TODAY
Transaction(s) disputed:
  - Date: [Date] | Amount: $[Amount] | Merchant/Description: [Description]
  - [Additional transactions if applicable]

Member's claim: [Unauthorized / Account takeover / Check fraud / Wire fraud / Internal fraud]

Fraud classification tasks:
1. Pull full 90-day transaction history — identify any other anomalous transactions
2. Review account opening date and member tenure
3. Check device/IP metadata on online transactions (if available)
4. Classify fraud type:
   - UNAUTHORIZED EFT: Card transaction member did not authorize → Reg E applies
   - ACCOUNT TAKEOVER: Credentials compromised → Reg E + escalate to IT
   - CHECK FRAUD (forged/altered): Member's check altered → UCC applies, not Reg E
   - WIRE FRAUD: Unauthorized wire transfer → Reg E does not apply; evaluate on merits
   - INTERNAL FRAUD: Employee involvement suspected → CEO + BSA Officer immediately
5. Log case in fraud tracking system: case number, date, classification, Reg E deadline calendar
6. Notify Member Services Rep to document member contact

Escalation triggers:
- Account takeover → IT Infrastructure Engineer within 1 hour (credential reset required)
- Internal fraud suspicion → CEO and BSA Officer within 30 minutes
- Loss ≥ $[threshold] → Risk Manager notification same day
```

### Step 2: Initial Member Communication (Member Services Rep)

```
Activate Member Services Rep for fraud case member communication.

Fraud Case #: [Number] | Member: [Name] | Date: [Date]

Same-day member communication requirements:
1. Acknowledge receipt of fraud report — oral or written
2. Provide case number and expected timeline
3. Collect additional detail from member:
   - Was card in member's possession at time of transaction?
   - Has member shared credentials with anyone?
   - Any recent phishing emails or suspicious calls?
   - Last time member used card before disputed transaction
4. Deliver Reg E rights notice (if applicable):
   "You have the right to review the documents we used in our investigation.
    You will receive a written notice of our findings within 45 calendar days."
5. Advise member of provisional credit eligibility
6. If check fraud or wire fraud: Advise that Reg E may not apply; explain process difference

Documentation:
- Log all member statements verbatim — these are evidence
- Note member's cooperation level and consistency of account
- If member expresses financial hardship due to fraud: Refer to Financial Advisor
```

### Step 3: Evidence Collection (Fraud Detection Analyst)

```
Activate Fraud Detection Analyst for evidence collection on Case #[Number].

Evidence collection checklist:
ELECTRONIC TRANSACTIONS:
- [ ] Transaction records: date, time, terminal ID, merchant ID, authorization code
- [ ] Card present / card not present indicator
- [ ] Device fingerprint and IP address (for online transactions)
- [ ] Velocity analysis: how many transactions in 24-48 hours before dispute?
- [ ] Location data: was card used in multiple geographies within short timeframe?
- [ ] Card status at time of transaction (was card reported lost before transaction?)

CHECK FRAUD:
- [ ] Front and back image of disputed check
- [ ] Comparison to prior authenticated checks (signature, MICR line)
- [ ] Contact drawee bank for check information
- [ ] Review of check clearing timeline and bank of first deposit

WIRE FRAUD:
- [ ] Full wire instruction record (beneficiary, account, routing, amount, memo)
- [ ] Callback verification record — was callback completed per policy?
- [ ] Who authorized the wire in the core system?
- [ ] Compare instruction to any prior wire history for this member

INTERNAL FRAUD:
- [ ] Identify all employees with system access to the affected account during the fraud window
- [ ] Core system audit log: all transactions and access events on affected account
- [ ] Cross-reference with employee access logs (Core Systems Administrator)
- [ ] PRESERVE ALL LOGS — do not destroy evidence; notify legal counsel

Contact card processor / network:
- Submit dispute through card network portal for card-present fraud
- Request merchant documentation for card-not-present chargebacks
- Note chargeback deadline by reason code
```

### Step 4: Provisional Credit Decision (Fraud Detection Analyst + Compliance Officer)

```
Activate Compliance Officer for provisional credit review — Case #[Number].

Business day count from dispute receipt: [N of 10]

Provisional credit decision logic (Reg E):
- GRANT provisional credit if:
  → Investigation will not be complete by business Day 10
  → Member provided timely notification (within 60 days of statement)
  → Disputed transaction is covered by Reg E (EFT, debit card)
- DO NOT grant provisional credit if:
  → Investigation IS complete before Day 10 (issue final finding instead)
  → Transaction is check or wire fraud (Reg E does not cover)
  → Member cannot substantiate claim (ATM/POS only — narrow exception)

If provisional credit is granted:
1. Apply credit to account within Day 10 — document exact time applied
2. Deliver written notice to member: amount credited, date, next steps
3. Compliance Officer logs credit in Reg E tracking ledger

Compliance Officer attestation:
"I have reviewed the Reg E applicability analysis and confirm that the
provisional credit decision is correct, properly documented, and delivered
within the statutory 10-business-day window."
```

### Step 5: Investigation (Fraud Detection Analyst)

```
Activate Fraud Detection Analyst to complete fraud investigation on Case #[Number].

Investigation analysis:
1. Review all collected evidence against member's claim
2. Card fraud determination factors:
   - Was card physically present? (chip transaction = card present, higher burden for member)
   - Any prior use of card in same location as fraud?
   - Is fraud pattern consistent with known compromised merchant or data breach?
   - Member's spending pattern: does disputed transaction fit profile?
3. Check fraud determination:
   - Is payee / amount / signature altered from original?
   - Is MICR line consistent with authentic checks?
   - Forgery vs. unauthorized use vs. counterfeit?
4. Wire fraud determination:
   - Was callback procedure followed? Documented?
   - Was there any indication of social engineering (urgent, unusual beneficiary)?
   - Was member deceived by impersonation (IRS scam, romance scam, etc.)?

Finding options:
- UNAUTHORIZED: Member did not authorize — full credit; charge card network
- AUTHORIZED: Member authorized transaction (knowingly or through negligence) — deny
- MERCHANT ERROR: Transaction posted incorrectly — pursue chargeback with merchant
- PROCESSING ERROR: Institution error — credit and correct
- INCONCLUSIVE: Insufficient evidence — resolve in member's favor (Reg E requirement)

BSA Officer concurrent review:
- Evaluate case for SAR consideration: Is the fraud pattern suspicious activity ≥$5,000?
- Document SAR evaluation decision with rationale in BSA log
```

### Step 6: Final Disposition (Fraud Detection Analyst + Compliance Officer)

```
Activate Compliance Officer for final disposition on Case #[Number].

Business days elapsed: [N of 45]

Final disposition checklist:
[ ] Investigation finding documented with supporting evidence referenced
[ ] Finding: [UNAUTHORIZED / AUTHORIZED / MERCHANT ERROR / PROCESSING ERROR]

If UNAUTHORIZED (member prevails):
1. Confirm permanent credit already applied (provisional → permanent)
2. Reissue card if card-present fraud (Card Services Specialist)
3. Force password/PIN reset if account takeover
4. Deliver written notice: "Investigation complete. [Amount] credit is permanent."
5. Submit chargeback to card network (if applicable — Card Services Specialist)

If AUTHORIZED (institution prevails):
1. Reverse provisional credit — 3-business-day advance notice to member REQUIRED
2. Written notice must include:
   - Date of reversal
   - Member's right to request documentation used in investigation
   - Member's right to bring civil suit within 1 year
3. Maintain file for minimum 2 years

Compliance Officer final attestation:
"I confirm that this case was resolved within the 45-day Reg E window,
all required notices were delivered, and the outcome is properly documented."
```

### Step 7: Recovery Assessment (Risk Manager)

```
Activate Risk Manager for fraud loss assessment on Case #[Number].

Completed cases — monthly aggregation:

Loss metrics:
- Gross fraud loss: $[Amount]
- Recovered via chargeback: $[Amount]
- Recovered via insurance (if applicable): $[Amount]
- Net fraud loss: $[Amount]

Recovery actions available:
1. Card network chargeback (Card Services Specialist — time-sensitive, pursue immediately)
2. ACH return via NACHA rules (within return window)
3. Subrogation to member (if member was negligent — document basis)
4. Bond/insurance claim (fidelity bond for internal fraud)
5. Law enforcement referral for significant losses or pattern fraud

Risk Manager quarterly reporting:
- Fraud loss by type (card, check, wire, ACH, internal)
- Chargeback recovery rate by reason code
- SAR filing rate on fraud cases
- Trend analysis: are losses increasing? New fraud vectors?
- Recommendation: policy or control changes to reduce fraud exposure
```

### Step 8: Member Notification & Closing (Member Services Rep)

```
Activate Member Services Rep for case closing communication — Case #[Number].

Final member communication:
1. Confirm written final notice was delivered (Compliance Officer confirmed)
2. If unauthorized: Verify member understands new card/credential procedures
3. If denied: Confirm member received dispute documentation and legal rights notice
4. Offer Financial Advisor referral if fraud caused member financial hardship
5. Document member's response to final resolution

Fraud prevention coaching (for all resolved cases):
- Provide credit union fraud prevention resource (card alerts, account notifications)
- Remind member of card freeze capabilities in mobile app
- Encourage strong credential practices

Close case file:
- Final outcome logged
- All documents archived (minimum 2 years per Reg E; 5 years for SAR-related)
- Metrics submitted to Fraud Detection Analyst for monthly reporting
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | Fraud intake completed within 24 hours of report | 100% | Case log timestamp | ☐ |
| 2 | Reg E provisional credit decision made by Day 10 | 100% | Reg E tracking ledger | ☐ |
| 3 | Final resolution delivered within 45 days | 100% | Case closure date vs. intake date | ☐ |
| 4 | Member notification letter delivered for all final determinations | 100% | Delivery confirmation | ☐ |
| 5 | SAR evaluation documented for every fraud case ≥$5,000 | 100% | BSA SAR log | ☐ |
| 6 | Card reissued within 5 business days for confirmed card fraud | 100% | Card production log | ☐ |
| 7 | Internal fraud cases escalated to CEO within 30 minutes of identification | 100% | Escalation log | ☐ |
| 8 | Chargeback filed within card network deadline (by reason code) | 100% | Chargeback submission log | ☐ |

**Gate Keepers**: Fraud Detection Analyst (investigation quality) + Compliance Officer (Reg E timeliness) — dual sign-off at provisional credit decision and final disposition

**Gate Decision**:
- **CURRENT**: All cases within Reg E windows; findings documented; chargebacks filed — examination-ready
- **AT RISK**: Case approaching Day 10 or Day 45 deadline without resolution — Compliance Officer escalates immediately
- **BREACH**: Reg E deadline missed — Compliance Officer + CEO same day; late provisional credit applied immediately; examination disclosure evaluated

---

## Step-Level Matrix

| Step | Agent | Mode | Authority |
|------|-------|------|-----------|
| 1. Fraud Report Intake & Classification | Fraud Detection & Security Analyst | Execute | Compliance/Regulatory |
| 1. Fraud Report Intake & Classification | Member Services Representative | Advise | Operational |
| 2. Initial Member Communication | Member Services Representative | Execute | Operational |
| 2. Initial Member Communication | Fraud Detection & Security Analyst | Advise | Compliance/Regulatory |
| 3. Investigation | Fraud Detection & Security Analyst | Execute | Compliance/Regulatory |
| 3. Investigation | BSA Officer | Advise | Compliance/Regulatory |
| 3. Investigation | Risk Manager | Advise | Credit/Financial + Escalation |
| 4. Provisional Credit & Reg E Compliance | Compliance Officer | Gate | Compliance/Regulatory + Escalation |
| 5. Final Disposition & Member Notification | Compliance Officer | Gate | Compliance/Regulatory + Escalation |

**Mode key:** Execute — owns the deliverable, one per step; Advise — contributes expertise, workflow does not wait; Gate — veto authority, workflow stops until cleared.

**Authority key:** Operational — process execution; Credit/Financial — lending and financial judgments; Compliance/Regulatory — regulatory determinations; Escalation — stop/elevate decisions.

---

## Handoff Templates

### Fraud Detection → BSA Officer (SAR Threshold)

```
## Fraud → BSA Referral

Case #: [Number] | Date: [Date]
Fraud type: [Type] | Loss amount: $[Amount]
Subject: [Member name and account #, if known]

SAR evaluation basis:
- Amount meets ≥$5,000 threshold with identified subject: [Y/N]
- Fraud pattern indicates criminal enterprise (not isolated error): [Y/N]
- Prior SAR activity on this member or related parties: [Y/N]

Fraud Detection Analyst recommendation: [FILE SAR / EVALUATE / NO SAR]
Supporting documentation attached: [Y/N]

BSA Officer — 30-day decision clock: [Date of referral + 30 days]
```

### Fraud Detection → Risk Manager (Loss Assessment)

```
## Fraud Loss Referral

Case #: [Number] | Fraud type: [Type]
Gross loss: $[Amount] | Recovery potential: $[Amount]
Finding: [UNAUTHORIZED / AUTHORIZED / PROCESSING ERROR]

Recovery actions initiated:
- [ ] Chargeback filed: [Date filed / N/A]
- [ ] ACH return filed: [Date filed / N/A]
- [ ] Law enforcement referral: [Date / N/A]
- [ ] Insurance notification: [Date / N/A]

Risk Manager — please review for reserve impact and trend reporting.
```

---

## Fraud Performance Metrics

| Metric | Target | Measurement Frequency |
|--------|--------|-----------------------|
| Provisional credit timeliness (Day 10) | 100% | Monthly |
| Final resolution timeliness (Day 45) | 100% | Monthly |
| Chargeback recovery rate | ≥ 60% of eligible disputes | Monthly |
| SAR filing rate on qualifying fraud | 100% | Monthly |
| Net fraud loss as % of assets | ≤ peer average | Quarterly |
| Average case resolution time | ≤ 21 days | Monthly |
| Member satisfaction post-resolution | ≥ 80% favorable | Quarterly |

---

*Workflow H is complete for a given case when the final disposition is documented, all required member notices are delivered, chargeback or recovery action is filed, and the Reg E tracking record is closed within 45 calendar days of intake. SAR evaluation must be documented regardless of filing outcome.*
