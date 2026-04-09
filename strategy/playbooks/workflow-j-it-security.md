# Workflow J Playbook — IT Security & Incident Response

> **Cycle Time**: Hours (incident response) – Annual (security program) | **Agents**: 6 | **Gate Keepers**: IT Infrastructure Engineer + Compliance Officer

---

## Objective

Protect member data and credit union systems through a layered security program that combines rapid incident response with continuous preventive controls — fulfilling obligations under the GLBA Safeguards Rule, NCUA Part 748, and applicable state breach notification laws. When a security incident occurs, the priority sequence is: contain the threat, preserve evidence, assess regulatory notification obligations, and restore operations — in that order. The annual security program ensures these capabilities are maintained and continuously tested before an incident occurs.

## Pre-Conditions

- [ ] Written GLBA Information Security Program is current and board-approved
- [ ] Incident Response Plan is documented, tested, and accessible offline
- [ ] Security monitoring tools (SIEM, IDS/IPS, endpoint protection) are operational
- [ ] All vendor security contacts and NCUA/state agency notification contacts are on file
- [ ] Business continuity and disaster recovery plan is current and tested
- [ ] Annual penetration test has been scheduled or completed within prior 12 months

## Regulatory Framework

| Regulation | Requirement | Enforcement Agent |
|-----------|-------------|-------------------|
| GLBA Safeguards Rule (16 CFR Part 314) | Written Information Security Program; board annual report; designated qualified individual | IT Infrastructure Engineer + Compliance Officer |
| NCUA Part 748 | Incident response program; annual board reporting on information security | IT Infrastructure Engineer + Compliance Officer |
| NCUA Cybersecurity Guidance | Annual risk assessment; penetration testing; access controls; vendor oversight | IT Infrastructure Engineer |
| State Breach Notification Laws | Notification to affected individuals and state AG — timelines vary 30–90 days (many states now 30 days or less) | Compliance Officer |
| GLBA Privacy Rule | Safeguarding nonpublic personal information (NPI); vendor contracts | Core Systems Administrator + Compliance Officer |
| BSA/AML (data integrity) | Preservation of transaction records; availability for examination | Core Systems Administrator |

---

## Agent Activation Sequence

### Incident Response Protocol

#### Step 1: Incident Detection & Triage (IT Infrastructure Engineer)

```
Activate IT Infrastructure Engineer for security incident triage.

Incident ID: [INC-YYYY-NNN] | Detection date/time: [Timestamp]
Detection source: [SIEM alert / Staff report / Vendor notification / External tip / Law enforcement]
Initial description: [Brief summary of observed indicators]

IMMEDIATE triage tasks (complete within 1 hour of detection):

1. Classify the incident type:
   - MALWARE / RANSOMWARE: Unauthorized code executing on systems
   - DATA BREACH: Confirmed or suspected unauthorized access to member NPI
   - PHISHING / SOCIAL ENGINEERING: Credential compromise or attempted
   - DISTRIBUTED DENIAL OF SERVICE (DDoS): Service availability attack
   - INSIDER THREAT: Unauthorized internal access or data exfiltration
   - VENDOR / THIRD-PARTY INCIDENT: Compromise at a vendor with access to CU data
   - PHYSICAL SECURITY: Unauthorized physical access to systems or media

2. Assign severity level:
   - CRITICAL (P1): Member NPI confirmed compromised; core system down; ransomware active
     → Notify IT Infrastructure Engineer supervisor, CEO, and Compliance Officer within 1 hour
   - HIGH (P2): Suspected NPI exposure; significant system degradation; active intrusion
     → Notify within 2 hours
   - MEDIUM (P3): Isolated malware, no confirmed NPI access; phishing with no credential compromise
     → Notify within 4 hours; standard investigation workflow
   - LOW (P4): Policy violations; failed attack attempts with no compromise
     → Standard ticketing; review within 24 hours

3. Preserve evidence BEFORE remediation:
   - Take forensic image or memory capture of affected system(s) if feasible
   - Export and preserve all relevant logs: system, network, application, authentication
   - Document exact time of first detection and initial indicators of compromise (IOCs)
   - Do NOT power off systems before evidence capture unless active destruction detected

4. Open incident log:
   - Record all actions taken with timestamps
   - Identify potentially affected systems, accounts, and data classifications
   - Assess initial scope: How many members? What data? Which systems?

Escalation to Step 2 trigger:
- ANY P1 or P2 incident → Immediate escalation to containment
- Any confirmed or suspected NPI exposure → Compliance Officer notification within 1 hour
- Any ransomware or active malware → Core Systems Administrator activated immediately
```

#### Step 2: Containment (IT Infrastructure Engineer + Core Systems Administrator)

```
Activate IT Infrastructure Engineer and Core Systems Administrator for incident containment.

Incident ID: [INC-YYYY-NNN] | Containment start: [Timestamp]
Triage findings: [Summary from Step 1]

Containment strategy selection:

SHORT-TERM CONTAINMENT (implement within 2-4 hours of detection for P1/P2):
1. Network isolation:
   - Isolate affected network segments or VLANs from production environment
   - Block identified malicious IP addresses and domains at perimeter firewall
   - Disable compromised user accounts — do NOT delete (preserve evidence)
   - Revoke active sessions for compromised credentials
   - If ransomware: Isolate affected hosts from file shares and backup systems immediately

2. Core system protection (Core Systems Administrator lead):
   - Assess whether core banking system is affected or at risk
   - If core system at risk: Activate core system vendor emergency support line
   - Switch to backup/contingency processing mode if core availability threatened
   - Preserve core system transaction logs and audit trails — do NOT alter
   - Notify core processor security team per vendor contract provisions

3. Email and communication security:
   - If phishing campaign active: Block malicious sender domains at email gateway
   - Force password reset for all potentially compromised accounts
   - Enable MFA challenge for all remote access connections during incident period

LONG-TERM CONTAINMENT (maintain while eradication proceeds):
- Maintain network monitoring on isolated segments
- Implement enhanced logging on all authentication events
- Brief all department heads: Do NOT restore systems without IT Infrastructure Engineer clearance
- Activate alternate processing procedures per business continuity plan if needed

Containment documentation:
- List every system isolated with timestamp and business impact
- List every account disabled with justification
- Confirm evidence preservation is complete before any remediation begins

Core Systems Administrator responsibilities:
- Core system integrity verification (transaction log consistency check)
- Member data access log review — identify any unauthorized data queries
- Backup system integrity check — confirm backups are clean and unaffected
- Vendor notification if core processor or critical vendor is source or affected party
```

#### Step 3: Eradication (IT Infrastructure Engineer + Software Engineer)

```
Activate IT Infrastructure Engineer and Software Engineer for threat eradication.

Incident ID: [INC-YYYY-NNN] | Containment status: [CONFIRMED CONTAINED / PARTIALLY CONTAINED]
Root cause (preliminary): [Malware variant / Vulnerability exploited / Compromised credential / Misconfiguration]

Eradication tasks:

1. Root cause analysis:
   - Identify the specific attack vector: How did the threat actor gain initial access?
   - Identify all affected systems and accounts (complete scope, not just initial discovery)
   - Identify any persistence mechanisms (scheduled tasks, registry keys, backdoors, rogue accounts)
   - Software Engineer: Review application logs for evidence of web application attacks,
     SQL injection, API abuse, or unauthorized code execution

2. Malware removal (if applicable):
   - Run full scan with updated endpoint protection on all affected and adjacent systems
   - Remove identified malware artifacts — document each item removed with hash
   - Delete rogue accounts and unauthorized scheduled tasks
   - Revoke any SSL certificates that may have been compromised

3. Vulnerability remediation:
   - Apply missing patches that were the attack vector — confirm patch level on ALL systems
   - Close exposed ports, services, and protocols not required for operations
   - Software Engineer: Patch any identified application vulnerabilities; deploy to staging first
   - Correct misconfigurations identified during forensic analysis
   - Change ALL service account and shared credentials regardless of whether confirmed compromised

4. Credential hygiene:
   - Force password reset for all user accounts in affected domain/systems
   - Rotate all API keys and service account credentials
   - Review and disable any accounts not required for current operations
   - Verify MFA enrollment for all privileged accounts

5. Eradication verification:
   - Re-scan all affected systems — confirm clean
   - Verify no remaining IOCs in network traffic
   - Software Engineer confirms no malicious code in application layer
   - Log review confirms no remaining unauthorized access

Eradication is NOT complete until: All IOCs eliminated, root cause patched, and IT Infrastructure
Engineer documents formal "eradication complete" determination with evidence.
```

#### Step 4: Recovery (Core Systems Administrator + IT Infrastructure Engineer)

```
Activate Core Systems Administrator for system recovery and restoration.

Incident ID: [INC-YYYY-NNN] | Eradication confirmed: [Timestamp]
Systems to restore: [List of affected systems]
Recovery Point Objective (RPO): [Per BCP — typically last clean backup]
Recovery Time Objective (RTO): [Per BCP — specify hours]

Recovery sequence:

1. Clean backup verification:
   - Identify last known clean backup prior to incident (confirm backup integrity with hash)
   - Verify backup was taken before compromise — review backup logs for IOC timing
   - If backup media is affected: Escalate to core processor for data recovery options

2. System restoration:
   - Restore from clean backup in isolated environment first — verify system integrity
   - Apply all security patches BEFORE reconnecting to production network
   - Change all service account credentials on restored systems
   - Verify application configuration files are clean (check against baseline)

3. Core banking system restoration (Core Systems Administrator lead):
   - Coordinate with core processor for any required data recovery or re-processing
   - Verify transaction integrity: All transactions from outage period are accounted for
   - Run reconciliation: GL balances match deposit and loan system totals
   - Confirm member account data integrity — spot audit affected accounts
   - Obtain written confirmation from core processor that system is clean and restored

4. Controlled reconnection:
   - Reconnect systems to production network in phases — monitor each phase
   - IT Infrastructure Engineer monitors for any re-infection indicators
   - Enhanced logging enabled on all restored systems for minimum 30 days post-incident
   - Do NOT restore full user access until IT Infrastructure Engineer clears each system

5. Member service restoration:
   - Confirm all member-facing systems operational: online banking, mobile, ATM network
   - Test transactions across all channels before announcing service restoration
   - Notify members of service restoration (without disclosing security details)

Recovery sign-off: Core Systems Administrator + IT Infrastructure Engineer dual confirmation
required before incident is classified as "systems restored."
```

#### Step 5: Post-Incident Review (IT Infrastructure Engineer + Risk Manager)

```
Activate IT Infrastructure Engineer and Risk Manager for post-incident review.

Incident ID: [INC-YYYY-NNN] | Systems restored: [Timestamp]
Post-incident review meeting: [Schedule within 5 business days of containment]

Lessons learned review agenda:

1. Incident timeline reconstruction:
   - Initial compromise datetime (estimated) vs. detection datetime — what was the dwell time?
   - Detection gap analysis: Why was it not detected sooner? What would have caught it earlier?
   - Response timeline: Did the team meet RTO/RPO targets? Where were the delays?
   - Communication timeline: Were notifications made within required timeframes?

2. Technical findings:
   - Attack vector: How did the threat actor gain access?
   - Was this a known vulnerability with available patch? Why was it not patched?
   - Were monitoring tools adequate? Did alerts fire? Were they acted on?
   - Were backup and recovery procedures effective?

3. Risk Manager assessment — business impact:
   - Estimated financial impact: Lost revenue, recovery costs, potential regulatory fines
   - Operational impact: Hours of downtime, transactions affected, member complaints
   - Reputational impact assessment
   - Cyber insurance claim evaluation — notify insurer per policy requirements

4. Control gap analysis:
   - Identify specific controls that failed or were absent
   - Rate each gap: Critical (fix within 30 days) / High (fix within 60 days) / Medium (90 days)
   - Assign owner and deadline for each remediation item

5. Program improvement recommendations:
   - Security awareness training gaps identified
   - Technology investments required
   - Policy or procedure updates needed
   - Vendor security requirements to update

Post-incident review report:
- Written report completed within 10 business days of incident closure
- Distributed to: CEO, Compliance Officer, IT Infrastructure Engineer, Risk Manager
- Retained in incident file for minimum 5 years
- Action items tracked in risk register with owner and due date
```

#### Step 6: Regulatory Notification Assessment (Compliance Officer)

```
Activate Compliance Officer for regulatory notification obligation assessment.

Incident ID: [INC-YYYY-NNN] | NPI involved: [YES / NO / UNDER INVESTIGATION]
Approximate number of members affected: [Number or range]
Nature of NPI exposed: [Account numbers / SSNs / Transaction history / Login credentials / Other]
Date of confirmed breach determination: [Date] — NOTIFICATION CLOCKS START HERE

Step 1 — Assess notification obligations for EACH applicable requirement:

NCUA PART 748 NOTIFICATION:
- Requirement: Report to NCUA if incident rises to level of a significant security event
- Threshold: Unauthorized access to member NPI or significant disruption to operations
- Timeline: Contact NCUA regional office — no fixed statutory timeline but prompt notification expected
- Method: Call NCUA regional office; follow up in writing
- Content: Nature of incident, systems affected, NPI exposure scope, containment status
- Action required: [ ] YES — notify NCUA within [N] business days  [ ] NO — document rationale

STATE BREACH NOTIFICATION LAWS (assess for each state where affected members reside):
- Identify which states' laws apply based on affected member addresses
- Common thresholds and timelines:
  * California (CCPA): 45 days from determination; AG notification if >500 CA residents
  * New York SHIELD Act: Expedient notice; AG notification required
  * Texas: 60 days from determination
  * Florida: 30 days from determination; FDLE notification if >500 residents
  * Many states: 30–45 days from determination or discovery
- For EACH applicable state: [ ] Notification required  [ ] Threshold not met — document
- Consult legal counsel for multi-state breach with significant member count

FEDERAL TRADE COMMISSION (FTC) / GLBA SAFEGUARDS RULE:
- Notify FTC if security event meets reporting threshold under revised Safeguards Rule
- FTC notification form available at FTC.gov
- Timeline: 30 days from discovery of a reportable event

Step 2 — Engage legal counsel if:
- More than 500 members affected
- Any uncertainty about notification obligations
- Law enforcement requests delay in member notification
- Potential for litigation

Step 3 — Coordinate notification with CEO:
- CEO approves all regulatory notifications before submission
- Board notification: Material security incident → next board meeting (or special session)
- Document all decisions with rationale, including decisions NOT to notify
```

#### Step 7: Member Notification (if required) (Compliance Officer + Member Services Rep)

```
Activate Compliance Officer and Member Services Rep for member breach notification.

Incident ID: [INC-YYYY-NNN]
Notification decision: REQUIRED — [Regulatory authority / Basis]
Member notification deadline: [Date — per most restrictive applicable state law]
Affected members: [Number] | Notification method: [Mail / Email / Phone / Combination]

Member notification letter — required content (state law minimum):
1. Description of the incident (plain language — what happened, when)
2. Categories of NPI involved (e.g., account numbers, Social Security numbers)
3. What the credit union has done in response
4. What affected members should do to protect themselves:
   - Contact the credit union to discuss account protections
   - Place fraud alerts with the three major credit bureaus (Equifax, Experian, TransUnion)
   - Consider credit freeze if SSN or account numbers exposed
   - Monitor account activity and credit reports
5. Credit union contact information and hours (include dedicated breach response line)
6. Free credit monitoring offer (if SSNs were exposed — evaluate per incident scope)

Member Services Rep responsibilities:
- Staff the member inquiry response line before notifications go out
- Briefing document: What Members Services staff can and cannot disclose
   - CAN confirm: A security incident occurred; what members should do to protect themselves
   - CANNOT disclose: Technical details of the attack, exact number affected, perpetrator identity
- Track all member calls: Volume, nature of questions, accounts that request additional action
- Escalate to Compliance Officer: Any member reporting actual fraud or financial loss
- Escalate to BSA Officer: Any request that appears to be probing for SAR-related information

Compliance Officer — notification execution checklist:
- [ ] Legal counsel approved notification letter content
- [ ] CEO approved notification letter
- [ ] Notification mailed/sent by: [Deadline date]
- [ ] Proof of mailing/delivery archived in incident file
- [ ] State AG notification filed (where required)
- [ ] FTC notification filed (if required)
- [ ] NCUA notification on file
- [ ] Member response tracking log active
```

#### Step 8: Board Reporting (CEO + Compliance Officer)

```
Activate CEO and Compliance Officer for board incident report and annual security program report.

INCIDENT REPORT TO BOARD (present at next scheduled meeting — or special session if P1 incident):

Report contents:
1. Incident summary:
   - What occurred, when, and how it was detected
   - Systems and data affected — number of members impacted
   - Financial impact estimate (recovery costs, regulatory exposure, insurance claim status)
2. Response summary:
   - Timeline from detection to containment and recovery
   - Regulatory notifications made (without compromising any law enforcement request)
   - Member notification status
3. Root cause and lessons learned:
   - What vulnerability or control failure enabled the incident?
   - Has that specific gap been remediated?
4. Action items:
   - Outstanding remediation items with owner and target date
   - Any investments or policy changes requiring board approval

Board decisions required:
- [ ] Approve any budget required for remediation investments
- [ ] Approve any policy changes arising from lessons learned
- [ ] Note incident in board minutes (required for NCUA examination record)

ANNUAL GLBA / NCUA PART 748 BOARD SECURITY REPORT (present annually — Q4 or per board schedule):

Required content (GLBA Safeguards Rule / NCUA guidance):
1. Status of the Written Information Security Program:
   - Was the program reviewed and updated during the year?
   - Any changes to program structure or designated Qualified Individual?
2. Risk assessment results:
   - Summary of annual information security risk assessment findings
   - Key risk areas identified; mitigation status
3. Security testing results:
   - Annual penetration test: findings and remediation status
   - Vulnerability scanning: frequency and open critical findings
   - Phishing simulation results and training completion rates
4. Incidents during the year:
   - Summary of all P1–P3 incidents (non-sensitive summary — no SAR-related details)
   - Any regulatory notifications made
5. Vendor security oversight:
   - SOC 2 review status for critical vendors
   - Any vendor security issues identified
6. Coming-year program priorities and budget requirements

Board sign-off: Board resolution acknowledging annual security program report required annually.
```

---

## Quality Gate Checklist

| # | Criterion | Threshold | Evidence Required | Status |
|---|-----------|-----------|-------------------|--------|
| 1 | P1/P2 incident: CEO and Compliance Officer notified within 1 hour | 100% | Incident log timestamps | ☐ |
| 2 | Evidence preserved before remediation begins | 100% | Forensic capture documentation | ☐ |
| 3 | State breach notification sent within applicable deadline | 100% — per most restrictive state | Proof of mailing; AG filing confirmation | ☐ |
| 4 | NCUA notification made for qualifying security events | 100% | NCUA correspondence on file | ☐ |
| 5 | Post-incident review report completed within 10 business days | 100% | Signed PIR report | ☐ |
| 6 | Annual information security risk assessment completed | Annual | Risk assessment report with board approval | ☐ |
| 7 | Annual penetration test completed | Annual | Penetration test report; remediation plan | ☐ |
| 8 | Written GLBA Information Security Program board-approved | Annual | Board meeting minutes | ☐ |
| 9 | Annual security report presented to board | Annual | Board meeting minutes | ☐ |
| 10 | Quarterly access reviews completed (privileged accounts) | Quarterly | Access review sign-off documentation | ☐ |

**Gate Keepers**: IT Infrastructure Engineer (technical program completeness) + Compliance Officer (regulatory notification obligations) — dual sign-off required to close any P1 or P2 incident and for annual program attestation

**Gate Decision**:
- **INCIDENT CLOSED**: All containment, eradication, and recovery steps complete; regulatory notifications made; post-incident review documented; board notified — incident may be formally closed
- **INCIDENT OPEN**: Outstanding containment, notification, or remediation obligations — IT Infrastructure Engineer identifies specific open items; daily status update to CEO until resolved
- **REGULATORY EXPOSURE**: Notification deadline at risk of being missed — Compliance Officer + CEO immediately; legal counsel engaged; late notification filed with documented explanation

---

## Step-Level Matrix

| Step | Agent | Mode | Authority |
|------|-------|------|-----------|
| 1. Incident Detection & Triage | IT Infrastructure Engineer | Execute | Operational |
| 1. Incident Detection & Triage | Compliance Officer | Advise | Compliance/Regulatory + Escalation |
| 1. Incident Detection & Triage | CEO | Advise | Escalation |
| 2. Containment | Core Systems Administrator | Execute | Operational |
| 2. Containment | IT Infrastructure Engineer | Advise | Operational |
| 3. Eradication & Recovery | IT Infrastructure Engineer | Execute | Operational |
| 3. Eradication & Recovery | Core Systems Administrator | Advise | Operational |
| 4. Regulatory Notification Assessment | Compliance Officer | Gate | Compliance/Regulatory + Escalation |
| 5. Post-Incident Review & Board Report | CEO | Gate | Escalation |

**Mode key:** Execute — owns the deliverable, one per step; Advise — contributes expertise, workflow does not wait; Gate — veto authority, workflow stops until cleared.

**Authority key:** Operational — process execution; Credit/Financial — lending and financial judgments; Compliance/Regulatory — regulatory determinations; Escalation — stop/elevate decisions.

---

## Performance Metrics

| Metric | Target | Measurement Frequency |
|--------|--------|-----------------------|
| Mean time to detect (MTTD) | Trend toward ≤ 24 hours for P1/P2 | Per incident; annual trend |
| Mean time to contain (MTTC) | ≤ 4 hours for P1; ≤ 24 hours for P2 | Per incident; annual trend |
| Breach notification timeliness | 100% within applicable state deadline | Per incident |
| Annual penetration test completion | Annual | Annual |
| Critical/High vulnerabilities remediated | ≤ 30 days for Critical; ≤ 60 days for High | Monthly scan review |
| Security awareness training completion | 100% of staff annually | Annual |
| Quarterly privileged access reviews | 4 per year — zero overdue | Quarterly |
| Board annual security report presented | Annual — Q4 | Annual |
| Phishing simulation click rate | Trend below 5% | Per simulation (min. annually) |

---

*Workflow J is complete for a given incident when the IT Infrastructure Engineer and Compliance Officer confirm: threat is eradicated, systems are restored, all regulatory notification obligations have been met, post-incident review is documented, and the board has been briefed. The annual security program cycle is complete when the board has approved the Written Information Security Program, the annual penetration test and risk assessment are on file, and the annual security report has been presented to the board.*
