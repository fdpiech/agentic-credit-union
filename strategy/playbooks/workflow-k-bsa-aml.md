# Workflow K Playbook — BSA/AML Monitoring & SAR Filing

> **Cycle Time**: Same day (CTR/OFAC) – 60 days (SAR) | **Agents**: 5 | **Gate Keepers**: BSA Officer + Compliance Officer

---

## Objective

Execute the credit union's Bank Secrecy Act program with the rigor FinCEN and NCUA examiners expect — detecting suspicious activity, filing accurate and timely reports, screening every transaction against the OFAC list, and maintaining the documentation discipline that makes the program defensible under examination. This workflow is the authoritative BSA reference for the full program; Workflow E covers BSA as part of daily deposit operations. BSA failures are not recoverable with apologies — they result in civil money penalties, consent orders, and personal liability for officers.

## Pre-Conditions

- [ ] BSA monitoring system (automated alerts) is active and alert queue is current
- [ ] FinCEN 314(a) list has been checked within the current period (updated twice monthly)
- [ ] OFAC SDN list is current (updated at OFAC's direction — check before every wire and account opening)
- [ ] CTR exemption list is board-approved and current
- [ ] BSA Officer has documented authority and appropriate training (CAMS or equivalent recommended)
- [ ] SAR filing access to FinCEN BSA E-Filing System is active

## Regulatory Framework

| Regulation | Requirement | Deadline | Enforcement Agent |
|-----------|-------------|----------|-------------------|
| BSA — Currency Transaction Report (CTR) | File FinCEN 112 for cash transactions ≥ $10,000 | 15 calendar days from transaction | BSA Officer |
| BSA — Suspicious Activity Report (SAR) | File FinCEN 111 for suspicious activity ≥ $5,000 (identified subject) or any amount (no subject) | 30 days from detection; 60 days if no subject identified | BSA Officer + Compliance Officer |
| OFAC — Blocked Transactions | Screen all transactions; block and report any SDN hits | Immediately upon detection | BSA Officer |
| USA PATRIOT Act — 314(a) | Respond to FinCEN information requests within 14 days | 14 days from request date | BSA Officer |
| USA PATRIOT Act — CIP | Verify customer identity before account opening | Before account activation | BSA Officer + Member Services Rep |
| BSA — CTR Exemptions | Board-approved Phase I and Phase II exemptions only | Annual review required | BSA Officer + Board |
| NCUA BSA Examination | Annual independent BSA audit required | Annual | Internal Auditor |

**Non-negotiable filing deadlines — missing these triggers examination findings and potential civil money penalties.**

---

## Agent Activation Sequence

### Step 1: Transaction Monitoring Alert Review (BSA Officer)

```
Activate BSA Officer for daily BSA/AML transaction monitoring.

Date: [Date] | Monitoring period: [Previous business day / week]

Daily alert queue review:
1. Open automated monitoring system — review all alerts generated since last review
2. For each alert, document in BSA case log:
   - Account number and member name
   - Alert type (large cash, structuring, velocity, high-risk country, high-risk merchant)
   - Transaction(s) triggering alert: date, amount, description
   - Initial risk assessment: LOW / MEDIUM / HIGH
3. Large cash transaction queue:
   - Identify ALL cash transactions (in or out) ≥ $10,000 from prior business day
   - Confirm each against CTR exemption list
   - Non-exempt transactions: open CTR case — FILE WITHIN 15 CALENDAR DAYS
   - Exempt transactions: document exemption basis by account and transaction
4. Structuring detection:
   - Flag any pattern of cash transactions just below $10,000 by same person on same or
     consecutive days — structuring is a federal crime regardless of the underlying funds
   - Do NOT alert the member — structuring investigation is confidential
5. Prioritize HIGH-risk alerts for same-day investigation

Escalation triggers:
- Any potential structuring pattern → Begin SAR evaluation immediately
- Any transaction involving OFAC-listed country → OFAC screen immediately (Step 7)
- Any alert involving an employee account → CEO + Internal Auditor within 1 hour
```

### Step 2: Alert Investigation (BSA Officer)

```
Activate BSA Officer for alert investigation on Case #[Number].

Account #: [Number] | Alert type: [Type] | Detection date: [Date]
SAR decision deadline: [Detection date + 30 days] — HARD DEADLINE

Investigation steps:
1. Pull complete transaction history — minimum 12 months
2. Review account opening file: CIP documents, stated purpose, expected activity
3. Compare actual transaction pattern to stated purpose:
   - Does the volume and frequency match what was expected at account opening?
   - Are transactions consistent with the member's known occupation/business?
   - Are there unexplained large round-dollar transactions?
   - Is there rapid movement of funds (in and immediately out)?
4. Run member name through FinCEN 314(a) list (if currently active period)
5. Check OFAC SDN list for member name and any known associates
6. Obtain context from relationship staff (Branch Manager, Loan Officer):
   - What is this member's business or occupation?
   - Any known explanation for the transaction pattern?
   - DO NOT tell the member an investigation is underway
7. Document ALL findings — both inculpatory and exculpatory
8. Review any prior SAR history on this member (check BSA case log)

Risk factors that elevate SAR probability:
- Transactions inconsistent with stated business or occupation
- Member unable or unwilling to explain large cash activity
- Structuring pattern (multiple transactions just below $10,000)
- Use of nominees or third parties to conduct transactions
- Rapid movement of large funds with no clear business purpose
- Transactions involving high-risk jurisdictions (FATF blacklist/greylist countries)
```

### Step 3: Suspicious Activity Assessment (BSA Officer + Compliance Officer)

```
Activate Compliance Officer for SAR assessment on Case #[Number].

Case #: [Number] | Detection date: [Date] | SAR deadline: [Date]
Account #: [Number] | Amount(s) involved: $[Amount]
Investigation summary: [Brief description of activity and findings]

Joint assessment — BSA Officer + Compliance Officer:
1. Does the activity meet the SAR filing threshold?
   - ≥ $5,000 AND identified subject: mandatory evaluation
   - Any amount AND no identified subject: mandatory evaluation
   - Activity that involves a known or suspected violation of law: mandatory evaluation
2. Is the activity suspicious — i.e., has no reasonable lawful explanation?
3. Is the activity consistent with known BSA red flags (FinCEN advisories)?
4. Would a reasonable person in our position suspect criminal activity?

SAR assessment outcomes:
- FILE: Activity is suspicious, threshold met → proceed to Step 5
- MONITOR: Activity is borderline, insufficient evidence → 60-day enhanced monitoring;
  re-evaluate; document monitoring decision
- CLOSE — NO FILE: Reasonable explanation exists → document specific rationale
  (required even for no-file decisions — "we looked and found nothing" must be written down)

Compliance Officer attestation required for all SAR decisions:
"I have reviewed the investigation file for Case #[Number] and concur with
the [FILE / MONITOR / NO-FILE] determination. Rationale: [Specific basis]."
```

### Step 4: SAR Decision — File / Monitor / Close (BSA Officer)

```
Activate BSA Officer for SAR filing decision on Case #[Number].

SAR decision: [FILE / MONITOR / CLOSE]
Decision date: [Date] | Detection date: [Date] | Days elapsed: [N of 30/60]

If MONITOR:
- Set enhanced monitoring parameters in BSA system
- Calendar re-evaluation date: detection date + 60 days
- Document monitoring criteria: what additional activity would trigger a SAR?
- Notify Compliance Officer of monitoring status

If CLOSE — NO FILE:
- Document specific rationale: what facts support the conclusion that activity
  is NOT suspicious? Generic "not suspicious" is insufficient for examination
- BSA Officer and Compliance Officer both sign off
- Close case in BSA log; retain file minimum 5 years

If FILE → proceed to Step 5

CEO notification (all SAR filings):
- Notify CEO that a SAR is being filed — date, account type, general nature
- DO NOT share SAR content with CEO or any person not authorized to know
- DO NOT notify the member — EVER — tipping off is a federal crime (31 U.S.C. § 5318(g)(2))
- DO NOT place a hold or close the account without Compliance Officer guidance
  (account action can tip off the subject)
```

### Step 5: SAR Preparation & Filing (BSA Officer)

```
Activate BSA Officer for SAR preparation on Case #[Number].

SAR filing deadline: [Date] — FILE BEFORE THIS DATE

SAR narrative preparation (most important part of the filing):
The SAR narrative must answer: WHO, WHAT, WHEN, WHERE, WHY, and HOW.
It must be specific, factual, and complete — examiners read narratives.

Required narrative elements:
1. WHO: Describe the subject(s) — name, account number, relationship to the CU
2. WHAT: Describe the suspicious transactions in specific detail — dates, amounts,
   descriptions, counterparties
3. WHEN: Provide exact transaction dates; explain the timeframe of activity
4. WHERE: Identify the channels (branch, ATM, ACH, wire, online) and locations
5. WHY: Explain why the activity is suspicious — what red flags were present;
   what explanations were considered and rejected
6. HOW: Describe the method of the suspicious activity

SAR preparation checklist:
- [ ] All required fields completed in FinCEN BSA E-Filing System
- [ ] Narrative is specific and factual — no vague language ("suspicious activity occurred")
- [ ] Correct filing type selected (initial / corrected / continuing activity)
- [ ] Subject information complete (name, DOB, address, SSN/TIN if known)
- [ ] Transaction information attached with all relevant dates and amounts
- [ ] Narrative reviewed and approved by Compliance Officer before submission

Filing:
1. Submit SAR via FinCEN BSA E-Filing System
2. Retain BSA E-Filing confirmation number
3. Log in SAR register: case number, subject, filing date, confirmation number
4. Archive complete investigation file — retain minimum 5 years from filing date

Compliance Officer final review:
- Narrative is complete, specific, and accurate
- No information that would tip off the subject
- Filed within the required deadline
- Confirmation number logged
```

### Step 6: CTR Processing (BSA Officer)

```
Activate BSA Officer for Currency Transaction Report processing.

Transaction date: [Date] | CTR filing deadline: [Transaction date + 15 calendar days]
Account #: [Number] | Cash amount: $[Amount] | Direction: [IN / OUT]

CTR processing:
1. Confirm transaction is not exempt (check board-approved exemption list)
2. Collect required information if not already in system:
   - Individual conducting transaction: full legal name, address, DOB, SSN/TIN, ID type and number
   - Person on whose behalf transaction is conducted (if different)
   - Transaction type (currency received / disbursed / exchanged)
   - Exact amount
3. Complete FinCEN Form 112 (CTR) via BSA E-Filing System
4. Submit before 15-calendar-day deadline
5. Log filing: date, account, amount, confirmation number

Multiple transaction aggregation:
- Aggregate multiple same-day cash transactions by the same person — treat as one transaction
- If multiple transactions total ≥ $10,000: CTR required even if each is below $10,000
- Structuring (intentionally breaking up to avoid CTR) is itself a crime — document the pattern
  and evaluate for SAR filing regardless of CTR filing

CTR exemptions (board-approved only):
- Phase I: Banks, government entities — automatic exemption, no annual review required
- Phase II: Listed businesses, payroll customers — requires annual board approval
- Never exempt a customer without documented board resolution
- Exemptions are subject to NCUA examination review
```

### Step 7: OFAC Match Investigation (BSA Officer)

```
Activate BSA Officer for OFAC match investigation.

Match type: [Exact / Partial / Phonetic] | SDN name: [Name]
Account/transaction: [Details] | Match detected: [Date/Time]

IMMEDIATE ACTIONS — Do not wait:
1. BLOCK the transaction or account access immediately
2. DO NOT process the transaction or allow funds movement
3. Notify Compliance Officer within 30 minutes of detection
4. Notify CEO within 1 hour

OFAC match evaluation:
1. Compare the match to the SDN entry in full (not just name — check DOB, nationality,
   address, aliases, and any other identifiers)
2. Determine if it is a true match or false positive:
   - TRUE MATCH: Name + at least one other identifier matches the SDN entry
   - FALSE POSITIVE: Name similarity only, no other identifiers match
3. For TRUE MATCH:
   - Block all funds and property of the SDN
   - File OFAC report via OFAC's reporting system within 10 business days
   - Retain blocked property per OFAC regulations
   - Consult legal counsel before taking any further action
4. For FALSE POSITIVE:
   - Document the comparison analysis in detail
   - Clear the block; process the transaction
   - Log the false positive in BSA records with rationale

Compliance Officer:
- Review and concur on true match / false positive determination
- Coordinate with legal counsel on true match reporting obligations
- Ensure no member notification occurs for true matches (OFAC prohibited)
```

### Step 8: Enhanced Due Diligence (BSA Officer)

```
Activate BSA Officer for Enhanced Due Diligence (EDD) on Account #[Number].

EDD trigger: [New account high-risk / Ongoing monitoring flag / Periodic review]
Member type: [Individual / Business / Non-profit / PEP / MSB]

EDD requirements by member type:

POLITICALLY EXPOSED PERSONS (PEP) — foreign government officials and their families:
- Obtain senior management approval before opening account
- Identify source of wealth and source of funds
- Conduct enhanced ongoing monitoring
- Annual review of account activity vs. stated purpose

MONEY SERVICES BUSINESSES (MSB):
- Verify MSB is registered with FinCEN (check FinCEN MSB Registrant Search)
- Obtain list of MSB services offered
- Review state licensing requirements for the MSB's activities
- Enhanced transaction monitoring: cash-intensive by nature

HIGH-RISK BUSINESSES (cash-intensive, international, complex ownership):
- Obtain ownership structure documentation (beneficial ownership — all owners ≥ 25%)
- Verify beneficial owner identities per CIP requirements
- Understand expected transaction patterns in writing at account opening
- Annual review

EDD documentation:
- All EDD findings documented in member file
- Source of wealth / source of funds documented with supporting evidence
- Senior management approval documented (for PEPs)
- Annual review dates calendared and tracked
```

### Step 9: Regulatory Examination Support (BSA Officer + Internal Auditor)

```
Activate BSA Officer for BSA examination preparation.

Examination type: [NCUA / State regulator / FinCEN] | Expected date: [Date]

Pre-examination documentation assembly:
1. BSA Policy and Procedures — current version, board-approved
2. BSA risk assessment — updated within prior 12 months
3. BSA training records — all staff, BSA Officer, and board
4. CTR filing log — all CTRs filed in examination period with confirmation numbers
5. SAR register — all SAR decisions (file and no-file) with rationale
6. CTR exemption list — current board-approved exemptions
7. OFAC screening documentation — procedures and any match investigations
8. CIP documentation — sample of recent account openings
9. 314(a) response documentation — all FinCEN requests and responses
10. Independent BSA audit report — prior year, with findings and corrective actions

Internal Auditor — annual BSA independent testing:
- Test CTR filing completeness and timeliness (sample)
- Test SAR decision quality (are no-file rationales adequate?)
- Test OFAC screening procedures (is the list current? Are procedures followed?)
- Test CIP completeness (random sample of new accounts)
- Test BSA training completion rates
- Issue written audit report with findings and recommendations
- Track corrective actions to completion

Compliance Officer examination coordination:
- Brief examiner on BSA program structure and recent enhancements
- Respond to examiner information requests within agreed timeline
- Escalate any Material Recommendations for Action (MRAs) to CEO same day
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | CTRs filed within 15 calendar days of transaction | 100% | CTR log with FinCEN confirmation numbers | ☐ |
| 2 | SAR decisions made within 30 days of detection (60 if no subject) | 100% | SAR case log with decision dates | ☐ |
| 3 | OFAC screening performed on all new accounts and wires | 100% | Screening log or system documentation | ☐ |
| 4 | OFAC true matches reported within 10 business days | 100% | OFAC report confirmation | ☐ |
| 5 | 314(a) requests responded to within 14 days | 100% | FinCEN request log with response dates | ☐ |
| 6 | All SAR no-file decisions documented with specific rationale | 100% | BSA case log entries | ☐ |
| 7 | CTR exemptions reviewed and board-approved annually | Annual | Board resolution and exemption list | ☐ |
| 8 | Annual independent BSA audit completed with written report | Annual | Audit report and corrective action log | ☐ |
| 9 | BSA training current for all staff | 100% | Training completion records | ☐ |

**Gate Keepers**: BSA Officer (program execution) + Compliance Officer (regulatory oversight) — dual sign-off monthly on CTR/SAR metrics; joint annual review of full program

**Gate Decision**:
- **COMPLIANT**: All filing deadlines met; SAR decisions documented; OFAC current — examination-ready
- **DEFICIENT ITEM**: Specific filing or decision overdue — BSA Officer corrects immediately; Compliance Officer notified; late filing evaluated
- **MATERIAL FINDING**: CTR or SAR deadline missed, OFAC screening lapse, or program gap — CEO notified same day; FinCEN voluntary self-disclosure evaluated with legal counsel

---

## Handoff Templates

### Any Agent → BSA Officer (Suspicious Activity Referral)

```
## Suspicious Activity Referral — CANVAS BSA

Referring agent: [Agent name] | Date: [Date] | Workflow: [A–Q]
Member: [Name] | Account #: [Number]

Activity observed:
[Describe the transaction(s) or behavior that raised concern]

Why it seemed suspicious:
[What about this activity was inconsistent with normal member behavior or
what red flag was observed?]

Action already taken:
- [ ] Transaction processed normally (no hold placed)
- [ ] Transaction held pending BSA review
- [ ] Member was NOT informed of this referral

BSA Officer: 30-day SAR decision clock starts from [Today's date].
```

### BSA Officer → Compliance Officer (SAR Filing Notification)

```
## SAR Filing Notification

Case #: [Number] | Filing date: [Date] | FinCEN confirmation #: [Number]
Account type: [Individual / Business] | General nature: [Brief description — no SAR content]

This notification confirms a SAR was filed. SAR content is confidential and is
not included in this notification per 31 U.S.C. § 5318(g)(2).

Compliance Officer: please confirm receipt and log in compliance tracking system.
```

### BSA Officer → CEO (SAR Summary — No Content)

```
## SAR Filing Summary — CEO Notification

Date: [Date]
A Suspicious Activity Report was filed with FinCEN today.
Account type: [Individual / Business / Employee]
General category of activity: [e.g., "structuring," "unusual wire activity"]

Per federal law, SAR content cannot be disclosed. No further details
can be shared. Do not discuss this filing with any person outside the
BSA function without consulting Compliance Officer.
```

---

## BSA Program Performance Metrics

| Metric | Target | Measurement Frequency |
|--------|--------|-----------------------|
| CTR filing timeliness | 100% within 15 calendar days | Monthly |
| SAR decision timeliness | 100% within 30/60 days | Monthly |
| OFAC screening completeness | 100% of new accounts and wires | Monthly |
| 314(a) response rate | 100% within 14 days | Per request |
| SAR no-file documentation rate | 100% with written rationale | Monthly |
| BSA training completion | 100% of staff annually | Annual |
| Independent audit findings — repeat findings | Zero | Annual |

---

*Workflow K is the authoritative BSA program reference. It is never "complete" — it is a continuous program that operates every business day. Workflow E (Deposit Operations) covers BSA as part of daily deposit processing. The annual independent audit and NCUA examination cycle are the formal closure events for each program year. Any Material Recommendation for Action from an examiner resets the clock and requires corrective action documentation within the examiner's specified timeframe.*
