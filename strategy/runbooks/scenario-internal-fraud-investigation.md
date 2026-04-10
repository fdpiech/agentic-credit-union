# Runbook: Internal Fraud / Whistleblower Investigation

> **Mode**: CANVAS-Full | **Duration**: Days 1-7 (assessment) + Days 8-30 (investigation) + Day 31+ (resolution) | **Agents**: 6 | **Lead**: Internal Auditor (investigation) + CEO (authority/decisions)

> **Pattern**: Compartmentalized Investigation — Introduces "SEALED" handoffs and agent exclusion zones. Certain agents are explicitly blocked from the information loop. Need-to-know boundaries enforced within CANVAS itself. Two parallel tracks operate simultaneously: Track A (covert investigation) is sealed from the rest of the organization; Track B (normal operations) continues unaware.

---

## Scenario

The credit union has received a whistleblower report, discovered suspicious internal activity, or identified indicators of employee fraud, embezzlement, or misconduct. The investigation must be conducted covertly to preserve evidence, protect the whistleblower, and avoid tipping off the subject. This runbook establishes two parallel tracks: Track A operates under strict need-to-know with sealed handoffs; Track B represents normal credit union operations continuing without awareness of the investigation. The compartmentalization is the pattern — information flows are restricted by design, not by accident.

## When to Activate

- Whistleblower report received (anonymous hotline, direct report to CEO or Internal Auditor, board member)
- Suspicious employee activity detected through internal controls or audit procedures
- Unexplained cash shortages, general ledger discrepancies, or account irregularities linked to employee access
- Suspicious override patterns, after-hours system access, or unauthorized transaction activity
- Vendor kickback or conflict of interest allegation involving an employee
- Regulatory examination finding suggesting possible employee misconduct
- Law enforcement contact regarding a current or former employee

---

## Agent Roster

### Track A: Sealed Investigation (Need-to-Know Only)
| Agent | Role | Access Level |
|-------|------|-------------|
| **Internal Auditor** | Investigation lead — evidence gathering, forensic analysis, documentation | SEALED — full access |
| **CEO** | Authority and decision-maker — legal counsel engagement, board communication, employment actions | SEALED — full access |
| **Compliance Officer** | SAR filing assessment, regulatory obligation analysis, whistleblower protection compliance | SEALED — full access |
| **BSA Officer** | SAR preparation and filing (if financial crime), FinCEN coordination | SEALED — full access |
| **Core Systems Administrator** | Digital forensics — system access logs, transaction reconstruction, evidence preservation | SEALED — full access (technical only) |
| **CHRO** | Employment law guidance, HR action execution, separation procedures | SEALED — activated only at resolution phase |

### Track B: Normal Operations (Unaware of Investigation)
| Agent | Role | Access Level |
|-------|------|-------------|
| All other agents | Continue normal duties | NO ACCESS to Track A information |
| **Subject of investigation** | Continues normal duties — must not be alerted | EXCLUDED from all Track A information |

> **CRITICAL**: Track B agents — including the subject — must not receive any indication that an investigation is underway. Track A agents must not discuss the investigation with anyone outside Track A. All Track A communications use the SEALED handoff format defined below.

---

## SEALED Handoff Format

> Standard CANVAS handoffs are visible to all agents in the workflow. SEALED handoffs are restricted to named recipients only. This is a new handoff template variant for compartmentalized operations.

```
═══════════════════════════════════════════════════════════
SEALED HANDOFF — RESTRICTED DISTRIBUTION
═══════════════════════════════════════════════════════════
Classification: SEALED — INTERNAL INVESTIGATION
Case reference: [Case ID — assigned by Internal Auditor]
Date/Time: [Timestamp]
From: [Sending agent]
To: [Named recipient(s) ONLY — no distribution list]
═══════════════════════════════════════════════════════════

SUBJECT: [Brief factual description — no speculation]

CONTENT:
[Investigation findings, requests, or decisions]

EVIDENCE REFERENCES:
[System logs, documents, account records — with preservation status]

ACTION REQUESTED:
[Specific action needed from recipient]

RESPONSE DEADLINE: [Date/Time]

═══════════════════════════════════════════════════════════
DO NOT FORWARD — DO NOT DISCUSS OUTSIDE TRACK A
DO NOT STORE IN SHARED SYSTEMS ACCESSIBLE TO SUBJECT
Attorney-client privilege may apply — route through legal counsel
═══════════════════════════════════════════════════════════
```

---

## Regulatory Framework

| Obligation | Regulation | Owner | Deadline |
|-----------|-----------|-------|---------|
| SAR filing — if suspicious activity meets threshold | 31 USC 5318(g); 12 CFR 748.1(b) | BSA Officer | Within 30 days of determination that SAR is warranted |
| SAR confidentiality — cannot disclose SAR filing or existence | 31 USC 5318(g)(2) | BSA Officer + all Track A agents | **Permanent** — no disclosure to subject or unauthorized persons, ever |
| Whistleblower protection — no retaliation | Dodd-Frank Act Section 748; SOX Section 806; state whistleblower statutes | CEO + CHRO | Ongoing — documented throughout and after investigation |
| Bond claim — fidelity bond notification | Credit union bond policy | CEO + CFO (support role) | Per bond policy terms — typically "prompt" notice upon discovery of loss |
| NCUA notification — if loss is material | NCUA examination expectations | CEO + Compliance Officer | At next examination or sooner if material to financial condition |
| Employment law — termination procedures | Federal and state employment law | CHRO | Before any employment action — legal counsel review required |
| Evidence preservation — litigation hold | Federal Rules of Civil Procedure (if litigation anticipated) | Internal Auditor + CEO | Immediately upon investigation initiation |
| Law enforcement referral — if criminal conduct confirmed | State and federal criminal statutes | CEO + Legal Counsel | Upon determination of criminal conduct — timing coordinated with counsel |

> **Critical**: 31 USC 5318(g)(2) makes it a federal crime to disclose to the subject of a SAR that a SAR has been or will be filed. This is not discretionary — it is a legal prohibition. No Track A agent may inform or hint to the subject that a SAR is being considered or filed. This prohibition is permanent and survives the investigation.

---

## TRACK A: Sealed Investigation

### Phase 1: Assessment (Days 1-7)

```
Activate Internal Auditor — INVESTIGATION INITIATED [SEALED].

Source of allegation: [Whistleblower / Internal controls / Audit finding / Examiner / Law enforcement]
Subject: [Name, Title — or "Unknown" if not yet identified]
Allegation summary: [Brief factual description]
Estimated exposure: [Dollar amount if known, or "Unknown"]
Whistleblower identity: [Known to Internal Auditor / Anonymous]

SEALED HANDOFF → CEO (Day 1):
Internal Auditor notifies CEO via sealed handoff:
1. Allegation received — factual summary
2. Preliminary assessment of credibility and materiality
3. Recommendation: Investigate / Refer to law enforcement / Insufficient basis
4. Request: CEO authorization to proceed with investigation
5. Request: CEO engage outside legal counsel (attorney-client privilege on investigation)

CEO ACTIONS (Day 1-2):
1. Authorize investigation — written authorization to Internal Auditor (sealed)
2. Engage outside legal counsel — investigation conducted under attorney direction
   - Attorney-client privilege attaches to investigation work product
   - Legal counsel directs scope and methodology
3. Determine initial Track A team — Internal Auditor + CEO + Compliance Officer + BSA Officer
4. Core Systems Administrator added to Track A ONLY if digital forensics needed
5. Board Chair notification — verbal only; no written communication yet
   - Supervisory/audit committee chair if allegation involves CEO (see Escalation section)

Activate Internal Auditor — EVIDENCE PRESERVATION [SEALED].

Evidence preservation (Days 1-3 — IMMEDIATE):
1. Identify all systems and records the subject has access to
2. SEALED HANDOFF → Core Systems Administrator:
   - Preserve all system access logs for subject — do NOT alert subject
   - Preserve email, file access, and transaction logs
   - Enable enhanced monitoring on subject's accounts and system access
   - Do NOT disable access, change permissions, or take any visible action
3. Preserve physical evidence — documents, cash counts, vault records
4. Litigation hold memo — preserve all records related to subject and affected accounts
5. Document chain of custody for all evidence from Day 1

Activate Compliance Officer — REGULATORY ASSESSMENT [SEALED].

SEALED HANDOFF from Internal Auditor → Compliance Officer (Day 2-3):
1. Assess SAR filing obligation:
   - Does the activity meet the $5,000 threshold for insider SAR filing? (12 CFR 748.1(b))
   - Note: For credit union insiders, SAR threshold is $5,000 (not $25,000)
   - If yes or possibly: BSA Officer activated for SAR preparation
2. Assess whistleblower protection obligations:
   - Document all interactions with whistleblower (if identity known)
   - No adverse employment action against whistleblower — document compliance
   - Whistleblower identity protected — do not disclose to subject or Track B agents
3. Bond claim assessment — does the allegation trigger bond notification requirements?
4. SEALED HANDOFF → CEO: Regulatory obligation summary and timeline
```

### Phase 2: Investigation (Days 8-30)

```
Activate Internal Auditor — FULL INVESTIGATION [SEALED].

Investigation methodology (under legal counsel direction):
1. Transaction analysis:
   - Reconstruct all transactions touched by subject for relevant period
   - Identify patterns: round-dollar amounts, just-below-threshold, end-of-day, override patterns
   - Trace funds: Where did the money go? Personal accounts? Vendor accounts? Cash?
   - Quantify exposure: Total confirmed loss + total suspected loss

2. System access analysis:
   SEALED HANDOFF → Core Systems Administrator:
   - Pull complete access logs for subject — login times, systems accessed, transactions processed
   - Identify after-hours access, weekend access, remote access patterns
   - Identify override usage — frequency, amounts, accounts affected
   - Identify any access to accounts with no business justification
   - Compare subject's activity patterns to peer employees (anomaly detection)

3. Document and record review:
   - Loan files (if lending fraud): Are loans to related parties? Fictitious borrowers?
   - Account records (if embezzlement): Are accounts in subject's name or family?
   - Vendor records (if kickback): Vendor relationship to subject?
   - Cash records (if cash theft): Cash count discrepancies, vault access logs
   - General ledger entries: Unusual adjustments, suspense account activity

4. Interview planning (if appropriate — legal counsel directs):
   - Do NOT interview the subject until evidence gathering is substantially complete
   - Witness interviews: Colleagues who may have relevant observations
   - Interviews conducted by Internal Auditor or legal counsel — not by subject's supervisor
   - All interviews documented contemporaneously

SEALED HANDOFF → CEO — WEEKLY INVESTIGATION UPDATE:
1. Evidence summary — what has been confirmed, what remains under investigation
2. Exposure update — confirmed losses, estimated total exposure
3. Subject behavior — any indication subject is aware of investigation?
4. Timeline — expected completion date for investigation
5. Recommendations — any immediate action needed?

Activate BSA Officer — SAR PREPARATION [SEALED] (if triggered).

SEALED HANDOFF from Compliance Officer → BSA Officer:
1. SAR preparation — if suspicious activity confirmed:
   - Complete SAR narrative — factual, detailed, no conclusions about guilt
   - Include: Who, what, when, where, how, how much
   - Reference supporting documentation (do not attach to SAR)
   - File within 30 days of determination that SAR is warranted
2. SAR CONFIDENTIALITY REMINDER:
   - Do NOT inform the subject that a SAR is being filed — federal crime (31 USC 5318(g)(2))
   - Do NOT inform Track B agents about SAR filing
   - SAR filing is confidential — even within the credit union, only Track A agents know
3. FinCEN coordination — if FinCEN or law enforcement contacts CU about the SAR, route through legal counsel
```

### Phase 3: Resolution (Day 31+)

```
Activate CEO — RESOLUTION DECISIONS [SEALED].

Input: Internal Auditor final investigation report (under attorney-client privilege)

DECISION FRAMEWORK:
1. Is the allegation SUBSTANTIATED?
   - YES — proceed to employment action + financial recovery + law enforcement referral assessment
   - PARTIALLY — proceed with documented findings; note unresolved elements
   - UNSUBSTANTIATED — document investigation; close case; protect whistleblower from retaliation

2. If SUBSTANTIATED — CEO decisions (legal counsel advises):

   a. Employment action:
      SEALED HANDOFF → CHRO (CHRO now activated into Track A):
      - Termination for cause — documentation package
      - Legal counsel review of termination — employment law compliance
      - Separation procedure: Escort from premises, system access revoked simultaneously
      - CHRO coordinates with Core Systems Administrator: Disable all access at moment of separation
      - Exit interview: Conducted by legal counsel or Internal Auditor — not CHRO alone
      - Do NOT mention SAR filing during termination — ever

   b. Financial recovery:
      - Fidelity bond claim — CEO + CFO prepare claim per bond policy
      - Restitution demand — legal counsel drafts
      - Civil litigation assessment — cost-benefit of pursuing recovery
      - Insurance claim documentation — Internal Auditor provides evidence package

   c. Law enforcement referral:
      - CEO + legal counsel determine whether to refer to law enforcement
      - If referring: Coordinate timing with employment action
      - Provide law enforcement with evidence package (legal counsel manages disclosure)
      - Cooperate with investigation — but through legal counsel

   d. Board report:
      - CEO presents full investigation report to board (executive session)
      - Board actions: Accept report, authorize financial recovery actions, approve any policy changes
      - If loss is material: Discuss NCUA notification and call report impact

3. If UNSUBSTANTIATED:
   - Internal Auditor: Document complete investigation and basis for conclusion
   - CEO: Ensure whistleblower is protected — no adverse action, no stigma
   - Compliance Officer: Confirm no SAR filing obligation
   - Close case file — retain per record retention policy

TRACK A → TRACK B TRANSITION:
Once the subject has been separated (or case closed), Track A information may be
partially disclosed to Track B agents on a need-to-know basis:
- Branch Manager: Informed of personnel change (not investigation details)
- CHRO: Manages organizational communication about departure
- CFO: Informed of financial impact for accounting and reporting purposes
- Track B agents receive NO details about SAR filing — SAR confidentiality is permanent
```

---

## TRACK B: Normal Operations

```
Track B is not a set of instructions — it is a constraint.

TRACK B RULE: All agents NOT listed in Track A continue their normal duties
as defined by their standard workflows and playbooks. They receive NO information
about the investigation. This includes:

- No changes to the subject's duties, access, or schedule (unless CEO determines
  the risk of continued access outweighs the risk of alerting the subject)
- No unusual audit requests directed at the subject's area (route through
  Internal Auditor's normal audit program to avoid suspicion)
- No changes to reporting relationships or supervision that would signal investigation
- No "casual" inquiries to the subject's colleagues about the subject's behavior

IF a Track B agent independently discovers suspicious activity:
1. The discovering agent should report to Internal Auditor or CEO per normal policy
2. Internal Auditor assesses whether the report relates to the existing investigation
3. If related: The discovering agent is briefed ONLY to the extent necessary and
   added to Track A if required — otherwise thanked and asked to keep the report confidential
4. The discovering agent is NOT told about the existing investigation scope or findings
```

---

## Escalation: When the Subject Is a Senior Leader

```
SPECIAL PROTOCOL — Subject is CEO, CFO, or other senior executive:

If the subject of the investigation IS the CEO:
- Internal Auditor reports directly to Board Chair or Supervisory Committee Chair
- CEO is EXCLUDED from Track A entirely
- Board Chair assumes CEO's Track A role (authority and decisions)
- Outside legal counsel engaged by Board Chair — not by CEO
- Board Chair authorizes all investigation actions
- NCUA may need to be notified if CEO fraud is confirmed

If the subject is another C-suite executive:
- CEO remains in Track A but the subject is excluded
- Internal Auditor reports to CEO with Board Chair awareness
- Subject's direct reports continue normal operations (Track B)
- Legal counsel advises on specific employment and regulatory implications

In all cases: The subject must NOT have any role in, awareness of, or
influence over the investigation — regardless of their position.
```

---

## Quality Gate Checklist

| # | Criterion | Owner | Deadline | Status |
|---|-----------|-------|---------|--------|
| 1 | Investigation authorized by CEO (or Board Chair if CEO is subject) | CEO | Day 1 | ☐ |
| 2 | Outside legal counsel engaged — privilege established | CEO | Day 2 | ☐ |
| 3 | Evidence preservation initiated — system logs, documents, records | Internal Auditor + Core Systems Administrator | Day 3 | ☐ |
| 4 | SAR filing obligation assessed | Compliance Officer | Day 7 | ☐ |
| 5 | Whistleblower protection documented | Compliance Officer + CEO | Day 7 | ☐ |
| 6 | Investigation report complete — findings documented | Internal Auditor | Day 30 | ☐ |
| 7 | SAR filed (if warranted) — within 30 days of determination | BSA Officer | Per regulatory deadline | ☐ |
| 8 | Employment action executed (if substantiated) — legal counsel reviewed | CEO + CHRO | Day 31+ | ☐ |
| 9 | Bond claim filed (if applicable) | CEO + CFO | Per bond policy | ☐ |
| 10 | Board report delivered (executive session) | CEO | Day 31+ | ☐ |
| 11 | Law enforcement referral made (if applicable) | CEO + Legal Counsel | Per counsel advice | ☐ |
| 12 | Case file complete — retained per policy | Internal Auditor | Day 45 | ☐ |

**Gate Keepers**: Internal Auditor (investigation integrity) + CEO (authority and decisions) + Compliance Officer (regulatory compliance)

**Gate Decision**:
- **INVESTIGATING**: Track A active; evidence gathering in progress; Track B unaware
- **SUBSTANTIATED**: Allegation confirmed — proceed to employment action, financial recovery, law enforcement assessment
- **UNSUBSTANTIATED**: Investigation complete — no finding; case closed; whistleblower protected
- **CLOSED**: All actions complete — employment action taken, bond claim filed, SAR filed, board reported, case file sealed

---

## Key Risks to Manage

| Risk | Owner | Mitigation |
|------|-------|-----------|
| Subject becomes aware of investigation — destroys evidence or flees | Internal Auditor + Core Systems Administrator | Evidence preserved first; no visible changes to subject's access or duties until resolution |
| SAR tipping violation — someone tells the subject about SAR | BSA Officer + all Track A agents | Explicit prohibition in every sealed handoff; legal counsel reinforces at every meeting |
| Whistleblower retaliation — actual or perceived | CEO + CHRO | Document all employment actions regarding whistleblower; no adverse changes during or after investigation |
| Attorney-client privilege waived by careless disclosure | CEO + Legal Counsel | All investigation work product routed through counsel; sealed handoffs only |
| Investigation scope creep — additional subjects discovered | Internal Auditor + CEO | Expand Track A carefully; each new subject gets separate sealed case file |
| Track B agent independently discovers same issue | Internal Auditor | Absorb into Track A with minimum disclosure; thank and compartmentalize |
| Loss exceeds bond coverage | CEO + CFO | Early bond carrier notification; assess supplemental recovery options |
| Employment action challenged — wrongful termination claim | CHRO + Legal Counsel | Legal counsel reviews all employment actions before execution; documentation complete |

---

## Activation Prompt

```
Activate Internal Auditor in CANVAS-Full mode for Internal Fraud Investigation.

Allegation source: [Whistleblower / Internal controls / Audit finding / Examiner / Law enforcement]
Subject: [Name, Title — or "Unknown"]
Allegation type: [Embezzlement / Cash theft / Loan fraud / Vendor kickback / Conflict of interest / Other]
Estimated exposure: [$Amount or "Unknown"]
Whistleblower identity: [Known / Anonymous]

Execute the CANVAS Internal Fraud Investigation — Compartmentalized Investigation protocol:

TRACK A (SEALED — need-to-know only):
- Phase 1: Assessment — Days 1-7 (evidence preservation, regulatory assessment)
- Phase 2: Investigation — Days 8-30 (transaction analysis, forensics, interviews)
- Phase 3: Resolution — Day 31+ (employment action, financial recovery, law enforcement)

TRACK B (NORMAL OPERATIONS):
- All non-Track A agents continue normal duties — unaware of investigation
- Subject continues normal duties — must not be alerted

All Track A communications use SEALED handoff format.
SAR confidentiality is absolute — 31 USC 5318(g)(2) — no disclosure to subject, ever.
Attorney-client privilege established through outside legal counsel from Day 1.
Whistleblower protection documented throughout.
Reference: agentic-credit-union/strategy/playbooks/workflow-k-bsa-aml.md
Reference: agentic-credit-union/strategy/playbooks/workflow-f-compliance-examination.md
```

---

*CANVAS Internal Fraud Investigation Runbook — The most sensitive operation a credit union conducts. Two tracks, one truth: the investigation runs in the sealed track while the organization runs in the open track. The wall between them is the pattern.*
