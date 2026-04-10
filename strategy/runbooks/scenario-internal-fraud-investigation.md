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
