# Runbook: Data Breach Response

> **Mode**: CANVAS-Full | **Duration**: 72-hour initial response + 30-90 day remediation | **Agents**: All | **Lead**: Core Systems Administrator + Compliance Officer + CEO

---

## Scenario

The credit union has experienced — or suspects it has experienced — a cybersecurity incident involving unauthorized access to member information or credit union systems. This runbook governs the initial response (first 72 hours), the investigation and notification phase (Days 4-30), and the remediation and recovery phase (Days 31-90+). Speed and accuracy are not in conflict: this runbook sequences both.

## When to Activate

- Unauthorized access to member account data detected (core system, online banking, card processor)
- Ransomware, malware, or other destructive cyberattack on credit union systems
- Vendor or third-party breach affecting credit union member data (notification from vendor)
- Employee-related data theft or unauthorized disclosure of member information
- Physical breach with access to systems containing member data
- Regulatory inquiry or law enforcement contact regarding a potential breach
- Any event where the Core Systems Administrator cannot rule out member data exposure

---

## Agent Roster

### Incident Command (First 72 Hours)
| Agent | Incident Role |
|-------|---------------|
| **Core Systems Administrator** | Technical lead — incident detection, containment, forensics coordination |
| **Compliance Officer** | Regulatory analysis, notification obligations, regulatory communications |
| **CEO** | Incident commander, board communication, member-facing decisions |
| **CFO** | Financial exposure assessment, cyber insurance activation, cost tracking |

### Investigation and Response Team
| Agent | Incident Role |
|-------|---------------|
| **BSA Officer** | SAR evaluation for fraud-related breaches; financial crime coordination |
| **Risk Manager** | Enterprise risk assessment, insurance claim support, loss quantification |
| **Internal Auditor** | Independent evidence preservation and documentation |
| **Branch Manager** | Branch operations continuity; member-facing communication coordination |

### Member Communication and Support Team
| Agent | Incident Role |
|-------|---------------|
| **Member Services Representative** | Member inquiry handling; breach notification support |
| **Marketing Manager** | Member communication drafting, website and branch notice |
| **Financial Advisor** | Financial wellness support for affected members; fraud impact counseling |
| **Card Services Specialist** | Card portfolio monitoring, card block and reissuance coordination |

### Recovery and Compliance
| Agent | Incident Role |
|-------|---------------|
| **Loan Officer** | Loan account fraud screening; member hardship from identity theft |
| **Deposit Operations Manager** | Deposit account monitoring; fraudulent transaction identification |
| **CHRO** | Staff communication; insider threat coordination; counseling resources |
| **Collections Specialist** | Fraud-related delinquency identification; member advocacy during recovery |

---

## Regulatory Framework

| Obligation | Regulation | Owner | Deadline |
|-----------|-----------|-------|---------|
| NCUA notification — if incident involves member data | NCUA Part 748, Appendix B; NCUA Final Rule (2023) | Compliance Officer | **72 hours** from discovery of a notifiable incident |
| FinCEN SAR filing — if fraud or suspicious activity | BSA regulations | BSA Officer | Within 30 days of determining SAR warranted |
| State data breach notification laws | State law (varies by state — typically 30-90 days from discovery) | Compliance Officer | Per applicable state law |
| Card network notification | Visa/MC network rules | Card Services Specialist + Core Systems Administrator | Within 24-72 hours per network rules |
| Member notification | State law + GLBA Safeguards | Compliance Officer + CEO | Per state law — typically 30-60 days |
| GLBA Safeguards / NCUA Part 748 incident log | 12 CFR 748 | Core Systems Administrator | Within 90 days — incident log updated |
| Law enforcement referral | If criminal activity involved | CEO + Compliance Officer | Upon identification of criminal conduct |

> **Critical**: NCUA's 2023 breach notification rule requires notification to NCUA **within 72 hours** of determining a notification incident has occurred. This is not a 72-hour investigation window — it is 72 hours from when the credit union determines the incident is notifiable.

---

## Phase 1: Detection and Containment (Hours 0-24)

### Hour 0: Incident Declaration

```
Activate Core Systems Administrator — INCIDENT DECLARED.

Incident type: [Suspected breach / Confirmed breach / Vendor notification / Staff report]
Discovery time: [Date/Time]
Discovery method: [System alert / Staff report / Vendor notification / Law enforcement / Member report]
Systems potentially affected: [List all systems that may be involved]
Data potentially at risk: [Member PII / Account data / Loan data / Card data / Credentials]
Estimated members potentially affected: [Number or "unknown"]

Immediate actions — within first 60 minutes:
1. Preserve and do NOT destroy any potential evidence (do NOT power off systems unless
   forensically advised — volatile memory evidence will be lost)
2. Activate IT incident response team; engage external forensics firm if available
3. Notify CEO immediately — verbal, then written within 1 hour
4. Notify Compliance Officer — regulatory clock assessment starts now
5. Isolate affected systems from network if containment is possible without evidence loss
6. Document all actions taken with timestamps from Hour 0 forward

CEO notification required: IMMEDIATE — no delay
Compliance Officer NCUA 72-hour clock: STARTS FROM DETERMINATION OF NOTIFIABLE INCIDENT
```

### Hour 1-4: Incident Command Activation

```
Activate CEO as incident commander.

Input: Core Systems Administrator initial assessment

CEO actions — first 4 hours:
1. Activate this runbook — all agents on standby
2. Contact cyber liability insurance carrier — report potential claim; obtain guidance
3. Evaluate need for external incident response firm (retain if internal capacity is limited)
4. Engage outside legal counsel — attorney-client privilege should attach to investigation
5. Brief Board Chair — verbal briefing; written update within 24 hours
6. Decision: Does this incident meet the NCUA 72-hour notification threshold?
   (Compliance Officer provides analysis — see below)

CFO concurrent:
- Pull cyber insurance policy; confirm coverage scope and reporting requirements
- Begin tracking all incident response costs (forensics, legal, notification, credit monitoring)
- Notify CFO at insurance carrier per policy terms

Compliance Officer concurrent analysis:
1. Assess whether incident meets NCUA "notification incident" threshold:
   - Is member data involved or potentially involved?
   - Has confidentiality, integrity, or availability of member information been compromised?
   If yes or possibly: NCUA 72-hour clock is running
2. Identify applicable state data breach notification laws
3. Assess card network notification obligations (if card data involved)
4. Prepare regulatory notification plan
```

### Hour 4-12: Containment and Forensics

```
Activate Core Systems Administrator for technical containment and evidence preservation.

Containment priorities (in order):
1. STOP the breach — prevent further unauthorized access or data exfiltration
   Methods: Network segmentation, credential revocation, firewall rule changes, system isolation
2. PRESERVE evidence — forensic image affected systems before remediation
   Do NOT wipe systems; do NOT restore from backup before forensic image
3. ASSESS scope — determine what data was accessed, exfiltrated, or compromised
   - Log analysis: What systems were accessed? What data was touched?
   - Timeline reconstruction: When did this start? How long did access exist?
   - Data inventory: What member data fields were accessible in affected systems?

External forensics firm (if retained):
- Provide access to affected systems under attorney direction (preserve privilege)
- Do NOT share forensics findings externally without legal counsel review
- Preserve chain of custody for all digital evidence

BSA Officer concurrent:
- Review affected accounts for suspicious transactions (fraud, unauthorized withdrawals)
- SAR evaluation: Is this a financial crime requiring SAR filing?
- Coordinate with law enforcement if criminal activity is identified
```

### Hour 12-24: Preliminary Scope Assessment

```
Activate Compliance Officer for preliminary regulatory scope determination.

By end of Hour 24, assess and document:
1. Member data at risk — specific data fields confirmed or possibly compromised:
   - [ ] Social Security numbers
   - [ ] Account numbers
   - [ ] Login credentials / passwords
   - [ ] Card numbers (full PAN, CVV, expiration)
   - [ ] Loan information
   - [ ] Transaction history
   - [ ] Other PII: [specify]

2. Regulatory notification obligations triggered:
   - [ ] NCUA notification required within 72 hours — YES / LIKELY / EVALUATING
   - [ ] Card network notification required — YES / NO / EVALUATING
   - [ ] Law enforcement referral appropriate — YES / NO
   - [ ] State breach notification law triggered — State(s): [list]
   - [ ] Member notification required — Estimated timeline: [date]

3. NCUA 72-hour notification decision:
   - Has the credit union determined this is a "notification incident" per NCUA Part 748 Appendix B?
   - If YES or if determination cannot be made within 72 hours: NOTIFY NCUA
   - Notification to NCUA does NOT require full forensics completion — notify with what is known

Card Services Specialist concurrent:
- If card data is potentially compromised:
  - Notify card processor immediately per network rules
  - Begin card portfolio fraud monitoring — enhanced transaction alerts
  - Assess need for card block and reissuance (scale and cost analysis)
  - Card network mandatory reporting: Visa within 24 hours of initial detection;
    Mastercard within 72 hours per network security rules
```

---

## Phase 2: Notification and Investigation (Days 2-30)

### Day 2-3: Regulatory Notifications

```
Activate Compliance Officer for regulatory notification execution.

NCUA NOTIFICATION (72-hour deadline from determination):
File via NCUA's secure message center or as directed by NCUA:
Required content:
1. Credit union name, charter number, and main office location
2. General description of the incident
3. Data types involved (to extent known)
4. Estimated members affected (if known; "unknown" is acceptable if genuinely unknown)
5. Whether law enforcement has been notified
6. Contact person at credit union for NCUA follow-up

Note: NCUA notification does NOT trigger any public disclosure obligation.
NCUA will determine if supervisory action or examination follow-up is needed.

CARD NETWORK NOTIFICATION (if card data involved):
- Visa CIRT (Cybersecurity Incident Response Team): notify per network rules
- Mastercard SDP (Site Data Protection): notify per network rules
- Coordinate with card processor — they may have direct network reporting obligations
- Network will assign investigation case number

CEO notification to Board Chair:
- Written summary by Hour 72 — incident description, response actions, known risks
- Full board briefing at next board meeting or special meeting if severity warrants
```

### Day 4-14: Investigation and Scope Confirmation

```
Activate Core Systems Administrator (with forensics firm) for full investigation.

Investigation deliverables by Day 14:
1. CONFIRMED data exposure inventory:
   - Specific records affected: account numbers, SSNs, transaction data, etc.
   - Number of members confirmed affected
   - Timeframe of unauthorized access (start date to containment date)
   - Attack vector: How did the unauthorized party gain access?

2. Indicators of Compromise (IOCs):
   - Malware signatures, IP addresses, attack patterns
   - Used to enhance monitoring and prevent recurrence

3. Data exfiltration determination:
   - Was data accessed only, or was it extracted/exfiltrated?
   - If exfiltrated: what volume? to where?

4. Forensics report (attorney-directed — maintain privilege)

Compliance Officer concurrent:
- Refine regulatory notification obligations based on confirmed scope
- Prepare member notification letter (draft for legal and CEO review)
- Identify credit monitoring service provider for member notification package
- State law analysis: Which states' breach notification laws apply?
  (Based on member residence addresses — breach notification laws are member-location-based)

Internal Auditor:
- Independent documentation of evidence preservation and chain of custody
- Review incident timeline for any documentation gaps
- Validate containment measures are effective
```

### Day 14-30: Member Notification

```
Activate CEO + Compliance Officer + Marketing Manager for member notification.

Member notification requirements:
1. Content requirements (GLBA / state law):
   - Description of incident
   - Types of information involved
   - Actions the credit union has taken
   - Actions members can take to protect themselves
   - Contact information for questions
   - Free credit monitoring offer (industry standard and most state law requirement)

2. Notification method:
   - Written notification to affected members at last known address
   - Email notification where available (supplement to written — not replacement in most states)
   - Website notice (general breach notice page)
   - Branch notice / FAQ document for staff

3. CEO letter to members:
   - Personal, direct, and honest — not legal-speak
   - Acknowledge what happened without speculation
   - What the credit union is doing to protect them now
   - Free credit monitoring enrollment instructions
   - Dedicated phone number for breach-related questions

Marketing Manager:
- Coordinate notification letter production and mailing
- Update website with breach notice and FAQ page
- Prepare branch FAQ document for Member Services staff
- Do NOT issue press release without CEO and legal counsel approval
- Social media: Monitor for member questions; respond to direct inquiries; do not amplify

Member Services Representative (surge protocol):
- Dedicated breach response phone line staffed and scripted
- Common questions and answers prepared and approved by Compliance Officer
- Escalation protocol: complex fraud situations → Financial Advisor + Collections Specialist
- Track all member contacts related to breach for documentation

Financial Advisor:
- Available for affected members with identity theft and fraud recovery needs
- Familiar with identity theft resolution steps (credit freeze, dispute processes, monitoring)
- Refer to Federal Trade Commission (IdentityTheft.gov) resources
- Coordinate with Loan Officer and Collections Specialist for members with fraud on their accounts

CFO concurrent:
- Cyber insurance claim in progress — document all costs
- Credit monitoring service contract: negotiate member access
- Financial impact assessment: fraud losses, notification costs, remediation costs, potential regulatory fines
```

---

## Phase 3: Remediation and Recovery (Days 31-90+)

### System Remediation

```
Activate Core Systems Administrator for full system remediation.

Remediation priorities:
1. Remove all malware, backdoors, and unauthorized access mechanisms confirmed by forensics
2. Rebuild compromised systems from clean baselines (do NOT restore from backups that may contain malware)
3. Implement enhanced controls identified in forensics report:
   - Patch management: Apply all outstanding critical patches
   - Access controls: Privileged access management; remove all unnecessary access
   - Multi-factor authentication: Implement on all remote access and privileged accounts
   - Network segmentation: Separate core banking data from general business network
   - Endpoint detection and response (EDR) deployment
   - Enhanced monitoring and SIEM if not already in place

4. Penetration test (third-party) after remediation:
   - External penetration test to verify perimeter security
   - Internal network test to verify segmentation effectiveness
   - Social engineering test (phishing simulation) for staff training validation

5. Updated information security risk assessment:
   - Update NCUA Part 748 / GLBA Safeguards risk assessment to reflect new threat intelligence
   - Present updated assessment to board for approval

Board approval required:
- Updated information security policy reflecting remediation and new controls
- Revised information security risk assessment
- IT remediation plan and investment budget
```

### Regulatory Follow-Up

```
Activate Compliance Officer for regulatory follow-up and examination preparation.

NCUA follow-up:
1. Provide NCUA with updated incident report — confirmed scope, remediation actions, notifications sent
2. NCUA may schedule targeted examination of information security program
3. Prepare examination response package:
   - Forensics summary (attorney-directed — share agreed portions only)
   - Remediation plan with completion dates
   - Member notification documentation
   - Updated information security risk assessment
   - Staff training completion records

State regulatory notifications:
- Confirm all required state breach notification letters were filed with state attorneys general
- Some states require notification to state regulator (not just consumers)
- File confirmations and maintain in compliance records

BSA/SAR follow-up:
- If SAR filed: Maintain confidentiality; monitor for any follow-up from FinCEN or law enforcement
- If criminal investigation: Cooperate with law enforcement through legal counsel

Compliance Officer 90-day report:
- Full incident timeline and response documentation
- All regulatory notifications filed (copies on record)
- Member notification summary: number notified, method, response rate
- Credit monitoring enrollment: members enrolled, cost
- Financial losses: fraud losses attributed to breach, insurance recovery
- Remediation status: all actions completed or in progress with expected completion dates
```

### Post-Incident Board Report

```
Activate CEO for post-incident board report.

Board report (at board meeting within 90 days of incident):
1. Incident summary: What happened, how it was detected, root cause
2. Response timeline: Decision points, regulatory notifications, member notification
3. Scope: Members affected, data types compromised, financial impact
4. Remediation: Technical, operational, and compliance actions taken
5. Financial impact: Direct costs, insurance recovery, cyber insurance lesson learned
6. Forward risk: Ongoing monitoring, enhanced controls, residual risk assessment
7. Staff accountability: Were any process failures identified? Has corrective action been taken?
8. Recommendations: Policy, control, and investment changes for board approval

Board actions required:
- [ ] Accept incident report — motion and vote
- [ ] Approve updated information security policy
- [ ] Approve information security remediation budget (if additional investment required)
- [ ] Authorize CEO to continue regulatory cooperation as appropriate
```

---

## Quality Gate Checklist

| # | Criterion | Owner | Deadline | Status |
|---|-----------|-------|---------|--------|
| 1 | Incident declared and Core Systems Administrator activated | Core Systems Administrator | Hour 0 | ☐ |
| 2 | CEO and Compliance Officer notified | Core Systems Administrator | Hour 1 | ☐ |
| 3 | Cyber insurance carrier notified | CFO | Hour 4 | ☐ |
| 4 | Legal counsel engaged (privilege) | CEO | Hour 4 | ☐ |
| 5 | Evidence preserved — forensic imaging before remediation | Core Systems Administrator | Hour 12 | ☐ |
| 6 | NCUA notification filed (if notifiable incident) | Compliance Officer | 72 hours from determination | ☐ |
| 7 | Card network notification filed (if card data) | Card Services Specialist | Per network rules | ☐ |
| 8 | Board Chair briefed — written summary | CEO | 72 hours | ☐ |
| 9 | Scope determination complete — members affected confirmed | Core Systems Administrator + Forensics | Day 14 | ☐ |
| 10 | Member notification letters mailed | Marketing Manager | Per state law deadline | ☐ |
| 11 | Credit monitoring service available to affected members | CFO | With member notification | ☐ |
| 12 | All applicable state AG notifications filed | Compliance Officer | Per state law deadline | ☐ |
| 13 | System remediation and penetration test complete | Core Systems Administrator | Day 60-90 | ☐ |
| 14 | Updated information security risk assessment board-approved | Core Systems Administrator | Day 90 | ☐ |
| 15 | Full board incident report presented | CEO | Within 90 days | ☐ |

**Gate Keepers**: Core Systems Administrator (technical containment) + Compliance Officer (regulatory compliance) + CEO (member and board communication) — all three required at each gate decision

**Gate Decision**:
- **CONTAINED**: Breach is stopped; no further unauthorized access; evidence preserved
- **NOTIFIED**: All regulatory and member notifications complete within required timelines
- **REMEDIATED**: Systems rebuilt; enhanced controls implemented; independent penetration test passed
- **CLOSED**: Board report presented; insurance claim resolved; all regulatory matters closed

---

## NCUA 72-Hour Notification Template

```
To: NCUA [Regional Director / Appropriate NCUA Contact]
From: [Credit Union Name], Charter #[Number]
Date: [Date/Time]
Subject: Cybersecurity Incident Notification — NCUA Part 748

Credit Union: [Name]
Charter Number: [Number]
Main Office Address: [Address]
CEO: [Name] | Phone: [Number] | Email: [Email]
Compliance Contact: [Name] | Phone: [Number]

INCIDENT DESCRIPTION:
Date/time of discovery: [Date/Time]
Incident type: [Ransomware / Unauthorized access / Third-party breach / Insider threat / Other]
Description: [Brief factual description of what occurred — 3-5 sentences]
Attack vector (if known): [How access was gained]

DATA INVOLVED (as known at time of notification):
Types of member information potentially at risk:
  [ ] Social Security numbers / Tax ID numbers
  [ ] Account numbers (deposit or loan)
  [ ] Card numbers
  [ ] Login credentials / passwords
  [ ] Transaction history
  [ ] Other PII: [Specify]

Estimated members potentially affected: [Number or "Unknown — investigation in progress"]

RESPONSE ACTIONS TAKEN:
  [ ] Affected systems isolated from network
  [ ] External forensics firm engaged
  [ ] Law enforcement notified: Agency: [Name]
  [ ] Card network notified
  [ ] Cyber insurance claim initiated

CURRENT STATUS:
  [ ] Incident is contained — no further unauthorized access
  [ ] Containment in progress — active investigation
  [ ] Source of breach is: [Identified / Under investigation]

CREDIT UNION CONTACT FOR NCUA FOLLOW-UP:
[Name], [Title] — [Phone] — [Email]

We will provide a supplemental report as our investigation progresses.
```

---

## Incident Communications Decision Tree

```
UNAUTHORIZED ACCESS DETECTED OR SUSPECTED
│
├── STEP 1: Preserve evidence + notify CEO + notify Compliance Officer (Hour 0-1)
│
├── STEP 2: Activate cyber insurance + engage legal counsel (Hour 1-4)
│
├── STEP 3: Assess — does this involve MEMBER DATA?
│   ├── YES or POSSIBLY → NCUA 72-hour clock is running
│   └── NO (internal systems only, no member data) → Document; no NCUA notification required
│
├── STEP 4: CARD DATA involved?
│   ├── YES → Card network notification per network rules (24-72 hours)
│   └── NO → Proceed
│
├── STEP 5: NCUA notification (if triggered) — file before 72-hour deadline
│
├── STEP 6: Scope determination — forensics (Days 1-14)
│
├── STEP 7: Member notification (per state law after scope confirmed)
│   ├── Send written notification to all affected members
│   ├── File state AG notifications per state law
│   └── Provide free credit monitoring
│
└── STEP 8: Remediation + Board report (Days 30-90)
```

---

## Key Risks to Manage

| Risk | Owner | Mitigation |
|------|-------|-----------|
| Missing the NCUA 72-hour notification window | Compliance Officer | Clock starts at determination, not at breach discovery — decide early, notify early |
| Evidence destroyed before forensics complete | Core Systems Administrator | Policy: do not power off or wipe systems without forensic direction |
| Attorney-client privilege lost over investigation | CEO + Legal Counsel | Engage legal counsel at Hour 4; direct forensics through counsel |
| Card network penalties for late notification | Card Services Specialist | Know network rules; notify before deadline even with incomplete information |
| Member identity theft from breach data | Financial Advisor | Proactive credit freeze resources in notification letter; dedicated support line |
| Staff speculation or unauthorized disclosure | CHRO | All breach communications routed through Compliance Officer; no unauthorized staff comments |
| Regulatory enforcement for notification failure | Compliance Officer | Err on the side of notification when uncertain — voluntary disclosure preferred |
| Media disclosure before member notification | CEO + Marketing Manager | No press release until member notification is ready; legal counsel reviews all public statements |
| Recurrence — attacker retains persistent access | Core Systems Administrator | Full remediation before restoration; penetration test required after rebuild |

---

## Common Data Breach Pitfalls

| Pitfall | Prevention |
|---------|-----------|
| Assuming "no evidence of exfiltration" means no breach | Absence of evidence is not evidence of absence — notify when uncertain |
| Starting remediation before forensic imaging | IT policy: forensic image first; remediation second — always |
| Providing incomplete or inaccurate information to NCUA | Notify with what is known; update as investigation progresses |
| Notifying NCUA after the deadline because investigation wasn't complete | NCUA notification does not require complete forensic findings |
| Notifying members before regulatory notifications are filed | Regulatory notifications first; member notifications after |
| Issuing a press release before members are notified | Members first; media after members have been notified |
| Underestimating scope — discovering more affected members after initial notification | Document supplemental notifications; notify additional members promptly |

---

## Activation Prompt

```
Activate Core Systems Administrator in CANVAS-Full mode for Cybersecurity Data Breach Response.

Incident type: [Suspected / Confirmed breach / Vendor notification]
Discovery time: [Date/Time]
Systems involved: [Description]
Data potentially affected: [Member data types]
Members potentially affected: [Number / Unknown]

Execute the CANVAS Data Breach Response protocol:
- Phase 1: Detection and containment — Hours 0-24
- Phase 2: Notification and investigation — Days 2-30
- Phase 3: Remediation and recovery — Days 31-90+

NCUA 72-hour notification clock is running from determination of notifiable incident.
Evidence preservation is a hard requirement — do NOT wipe or restore systems before forensic imaging.
CEO and Board Chair notification: within 72 hours.
Legal counsel engaged: Hour 4 (attorney-client privilege on investigation).
All external communications routed through CEO and Compliance Officer.
Reference: agentic-credit-union/strategy/playbooks/workflow-f-compliance-examination.md
Reference: agentic-credit-union/strategy/cu-strategy.md Section 14 (Risk Management)
```

---

*CANVAS Data Breach Response Runbook — In a breach, the first 72 hours determine both the regulatory outcome and the member trust outcome. Contain fast, preserve evidence, notify on time, and communicate with the honesty members deserve from a cooperative.*
