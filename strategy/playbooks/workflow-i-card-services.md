# Workflow I Playbook — Card Services & Fraud Monitoring

> **Cycle Time**: Same day (fraud alerts) – 120 days (chargebacks) | **Agents**: 4 | **Gate Keepers**: Card Services Specialist + Fraud Detection Analyst

---

## Objective

Manage the full debit and credit card lifecycle — issuance, reissuance, fraud alert response, chargeback representation, and ongoing monitoring — with the speed card brands require and the compliance discipline NCUA expects. A compromised card resolved in hours protects member funds and preserves trust. A chargeback filed on time recovers institutional losses. A fraud pattern caught early prevents the next loss.

## Pre-Conditions

- [ ] Card management platform accessible (issuer processor / card brand portal)
- [ ] Card fraud monitoring system (TCS, Falcon, or equivalent) active and alerts current
- [ ] Current card portfolio parameters loaded (velocity limits, geographic restrictions)
- [ ] Card brand chargeback deadlines reference available (reason code matrix)
- [ ] Embossing / card production pipeline confirmed operational

## Regulatory Framework

| Regulation | Requirement | Enforcement Agent |
|-----------|-------------|-------------------|
| Reg E (Electronic Fund Transfer Act) | Dispute resolution for debit card unauthorized transactions | Card Services Specialist + Compliance Officer |
| Visa / Mastercard Operating Rules | Chargeback rights, time limits, card reissuance standards | Card Services Specialist |
| PCI DSS | Cardholder data security standards | IT Infrastructure Engineer |
| NCUA Part 748 | Member data security and breach notification | Core Systems Administrator |
| CFPB / UDAAP | Card fee disclosure; no unfair, deceptive, or abusive practices | Compliance Officer |

**Chargeback Deadlines — NON-NEGOTIABLE (time limits by reason code):**
- **Fraud chargebacks (10.4, 10.5):** 120 days from transaction or expected delivery
- **Authorization-related (11.x):** 75 days from transaction
- **Service / Processing (12.x, 13.x):** 120 days from expected delivery
- **Missing from missed deadline = permanent loss — file on time**

---

## Agent Activation Sequence

### New Card Issuance & Reissuance

#### Step 1: Card Request Processing (Card Services Specialist)

```
Activate Card Services Specialist for card issuance/reissuance.

Member: [Name] | Account #: [Number] | Request type: [NEW / REISSUE / LOST / STOLEN / DAMAGED]
Requested by: [Member / Branch / Fraud Detection / Bulk reissue] | Date: [Date]

Card issuance workflow:
1. Verify member identity (lost/stolen/reissue — enhanced verification required)
2. Check account standing: delinquency, frozen accounts, fraud restrictions
3. For LOST or STOLEN:
   - Immediately suppress existing card in card management platform
   - Open fraud investigation if recent unauthorized transactions present
   - Escalate to Fraud Detection Analyst if suspicious activity detected
4. Enter card order in card management platform:
   - Confirm embossing data (name as it appears on card)
   - Confirm mailing address — verify with member verbally for stolen/compromised cards
   - Set card status to ORDERED
5. For STOLEN with confirmed fraud: Coordinate with Fraud Detection Analyst before issuing
   new card (ensure fraud case is open and Reg E clock documented)

Card production timelines:
- Standard: 7-10 business days (standard mail)
- Rush: 2-3 business days (overnight — member pays fee per fee schedule)
- Bulk reissue (data breach): Coordinate with Core Systems Administrator for batch production

Activation setup:
- Confirm IVR or mobile activation method is active for new card
- Log issuance in member account notes with date and reason
```

#### Step 2: Fraud Rule Review (Fraud Detection Analyst)

```
Activate Fraud Detection Analyst for card fraud rule review — concurrent with reissuance.

Reissuance trigger: [LOST / STOLEN / COMPROMISED / BULK REISSUE]
Account #: [Number]

Fraud rule review tasks:
1. Pull 90-day transaction history — identify unauthorized transactions not yet disputed
2. If reissue triggered by data breach: Check fraud monitoring system for unauthorized activity
3. Confirm all unauthorized transactions are captured for Reg E dispute
4. Verify existing fraud parameters are set appropriately for this member's profile:
   - Daily transaction limits
   - Geographic restrictions (international block if member is domestic-only)
   - Card-not-present velocity controls
5. If prior fraud pattern exists: Flag for enhanced monitoring on new card

For bulk reissuance (data breach):
- Coordinate with Card Services Specialist on member communication timeline
- Identify highest-risk accounts for proactive outreach (high transaction frequency)
- Prepare fraud alert messaging for member notification
```

#### Step 3: Member Activation & Communication (Card Services Specialist + Member Services Rep)

```
Activate Member Services Rep for card delivery confirmation and activation support.

Member: [Name] | New card issued: [Date] | Expected delivery: [Date]

Member communication:
1. Notify member of card mailing (if not in-branch pickup)
2. Provide activation instructions: IVR number or mobile app activation
3. Advise member to destroy old card (if reissue)
4. For fraud-related reissue: Remind member to update any recurring payments
   (subscriptions, autopay accounts) with new card number
5. Answer any activation questions; escalate to Card Services Specialist if technical issue

Card activation confirmation:
- Confirm activation in card management platform within 30 days
- Unactivated cards after 30 days: Member Services Rep outreach to confirm card received
- If card not received: Cancel and reissue (free reissue for member); document in fraud log
```

---

### Fraud Alert Management

#### Step 4: Real-Time Fraud Alert Response (Fraud Detection Analyst)

```
Activate Fraud Detection Analyst for fraud alert response.

Alert source: [Falcon / TCS / Card processor / Member call]
Alert type: [Velocity / Geographic anomaly / High-risk merchant / CNP spike / Other]
Account #: [Number] | Alert time: [Time]

Fraud alert triage (real-time — target response: <15 minutes):
1. Pull alert details: transaction(s) flagged, amount, merchant, time, location
2. Compare to member's established spending profile:
   - Geographic location (is member traveling? Match to recent branch/ATM activity)
   - Merchant category (does this fit member's pattern?)
   - Transaction amount (is this consistent with member's normal transaction size?)
3. Decision:

   BLOCK + CONTACT:
   - Transaction velocity is anomalous (5+ transactions in 1 hour)
   - Geographic impossibility (transaction 1,000+ miles from prior transaction in <2 hours)
   - High-risk merchant with no prior relationship
   → Apply soft block; call member immediately; confirm or deny each transaction

   MONITOR + LOG:
   - Slightly above normal velocity but not extreme
   - New merchant but plausible based on member profile
   → Log alert; increase monitoring sensitivity; no member contact unless next alert fires

   CLEAR + DOCUMENT:
   - Alert is consistent with known pattern (seasonal spending, travel member reported)
   → Clear alert with documented rationale; no member contact required

Member contact script (if blocking):
"Hello, I'm calling from [Credit Union Name] fraud monitoring. We've detected
some activity on your card that's outside your normal pattern and want to
confirm these transactions with you. Do you have a moment?"
```

#### Step 5: Chargeback Processing (Card Services Specialist)

```
Activate Card Services Specialist for chargeback filing on Case #[Number].

Fraud case: [Number] | Transaction date: [Date] | Amount: $[Amount]
Card brand: [Visa / Mastercard] | Reason code: [Code]
Chargeback deadline: [Date] — FILE BEFORE THIS DATE OR RIGHT IS WAIVED

Chargeback process:
1. Confirm Reg E dispute has been opened and Fraud Detection Analyst has classified case
2. Gather required documentation per reason code:
   - 10.4 / 10.5 (Fraud — card present / card not present): Dispute form + member affidavit
   - 13.1 (Merchandise not received): Member statement + proof of order
   - 12.4 (Incorrect amount): Transaction receipt + actual amount evidence
3. Submit chargeback through card brand portal before deadline
4. Track chargeback status: pre-arbitration, arbitration timelines
5. If merchant provides representment documentation: Forward to Fraud Detection Analyst for evaluation
6. If re-presentment upheld: Notify Fraud Detection Analyst — case moves to Reg E final finding

Chargeback documentation archive:
- All chargeback submissions with timestamps
- Merchant representment documentation
- Final determination (won / lost / withdrawn)
- Recovery amount credited to institution account
```

---

### Ongoing Card Portfolio Monitoring

#### Step 6: Cardholder Velocity & Portfolio Monitoring (Fraud Detection Analyst)

```
Activate Fraud Detection Analyst for card portfolio monitoring.

Period: [Daily / Weekly] | Date: [Date]

Portfolio monitoring tasks:
DAILY:
1. Review overnight fraud alert queue — clear, block, or escalate each alert
2. Check for any high-value CNP (card-not-present) authorizations > $[threshold]
3. Review any declined transaction patterns (potential card testing by fraudsters)
4. Confirm no cards blocked in error (false positives requiring member contact)

WEEKLY:
1. Fraud loss report: new losses vs. prior week, trend vs. prior month
2. Chargeback pipeline review: pending chargebacks and deadlines
3. False positive rate analysis: are fraud rules blocking legitimate transactions?
4. Rule tuning recommendation: any parameters requiring adjustment?

Monthly reporting to Risk Manager:
- Gross card fraud loss
- Chargeback recovery rate
- Net fraud loss by card type (debit / credit / prepaid)
- False positive rate
- Fraud type breakdown (CNP, counterfeit, lost/stolen, account takeover)
- Recommended portfolio rule adjustments
```

#### Step 7: Travel Notification Processing (Card Services Specialist)

```
Activate Card Services Specialist for travel notification.

Member: [Name] | Account #: [Number]
Travel destination(s): [Countries/States] | Travel dates: [Start] – [End]
Notification received via: [Branch / Phone / Mobile app / Online banking]

Travel notification process:
1. Document travel request in card management platform:
   - Geographic exception: Allow transactions in [Destination] for [Date range]
   - International flag: Enable international authorization if domestic-only card
2. Note any specific concerns (first-time international, high-risk destination)
3. Advise member:
   - International transaction fee (per fee schedule)
   - Emergency card replacement process while abroad
   - Credit union international contact number
4. Remove travel exception upon return date or member notification
5. Log notification for fraud monitoring context (reduces false positives during travel)
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | Compromised card suppressed within 1 hour of confirmed fraud | 100% | Card management platform log | ☐ |
| 2 | Card reissuance ordered within 1 business day of confirmed loss/theft | 100% | Card order log with timestamp | ☐ |
| 3 | Fraud alerts cleared or actioned within 15 minutes (real-time) | ≥ 95% | Alert queue log | ☐ |
| 4 | Chargebacks filed before card brand deadline | 100% | Chargeback submission timestamps | ☐ |
| 5 | Reg E dispute opened for all unauthorized debit card transactions | 100% | Reg E tracking ledger | ☐ |
| 6 | PCI DSS controls verified annually | Annual | PCI assessment report | ☐ |
| 7 | False positive rate (legitimate transactions blocked) | ≤ 5% of alerts | Weekly fraud monitoring report | ☐ |
| 8 | Unactivated cards followed up within 30 days | 100% | Card activation log | ☐ |

**Gate Keepers**: Card Services Specialist (operations and chargebacks) + Fraud Detection Analyst (fraud monitoring and alert quality) — dual sign-off monthly

**Gate Decision**:
- **CURRENT**: All chargebacks filed timely; fraud alerts current; card issuance within SLA — examination-ready
- **CHARGEBACK AT RISK**: Approaching deadline — Card Services Specialist escalates to Compliance Officer same day
- **FRAUD SPIKE**: Loss trending above peer average — Risk Manager + CEO briefed within 24 hours; rule adjustment recommendation within 48 hours

---

## Card Services Performance Metrics

| Metric | Target | Measurement Frequency |
|--------|--------|-----------------------|
| Fraud alert response time | ≤ 15 minutes (real-time) | Daily |
| Card reissuance cycle time | ≤ 1 business day to order | Daily |
| Chargeback filing timeliness | 100% before deadline | Monthly |
| Chargeback win rate | ≥ 50% of filed chargebacks | Monthly |
| Net card fraud loss / total card volume | ≤ peer average | Monthly |
| False positive block rate | ≤ 5% | Weekly |
| Member card activation rate | ≥ 95% within 30 days | Monthly |

---

*Workflow I is ongoing — card fraud monitoring and alert response operate continuously. Chargeback cases close upon final card brand determination. Monthly portfolio reviews ensure fraud controls are calibrated to current threat patterns and member behavior.*
