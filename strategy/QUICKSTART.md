# CANVAS Quick-Start Guide

> **Get from zero to orchestrated credit union operations in 5 minutes.**

---

## What is CANVAS?

**CANVAS** (Credit Union Agent Network for Value, Advice, and Service) turns the credit union's **35 specialist AI agents** into a coordinated operational pipeline across **17 workflows (A–Q)**. Instead of activating agents one at a time and hoping they work together, CANVAS defines exactly who does what, when, and how compliance is verified at every step.

## Choose Your Mode

| I want to... | Use | Agents | Time |
|-------------|-----|--------|------|
| Run a strategic initiative or exam cycle | **CANVAS-Full** | All | 4-12 weeks |
| Execute a single workflow end-to-end | **CANVAS-Process** | 5-10 | 1-4 weeks |
| Handle a specific transaction or issue | **CANVAS-Micro** | 2-4 | 1-5 days |

---

## CANVAS-Full: Strategic Initiative or Exam Cycle

**Copy this prompt to activate the full pipeline:**

```
Activate Credit Union CEO in CANVAS-Full mode.

Initiative: [YOUR INITIATIVE NAME OR EXAM CYCLE]
Scope: [DESCRIBE SCOPE]

Execute the complete CANVAS protocol:
- Workflow F: Compliance program review and exam preparation
- Workflow G: Annual strategic planning (if applicable)
- All workflows: Compliance gates active throughout
Quality gates between every stage. Documentation required for all decisions.
Escalation protocol: Material issues to CEO within 24 hours.
Regulatory deadlines tracked and honored.
```

---

## CANVAS-Process: Run a Single Workflow

**Pick your workflow and copy the prompt:**

```
Activate [LEAD AGENT] for [WORKFLOW NAME] on [MEMBER/ACCOUNT/SCOPE].

Workflow: [A through Q]
Starting step: [Step name]
Member context: [Member # and relevant history]
Compliance flags: [Any active regulatory clocks or flags]
Complete workflow with documentation at each step.
Quality gate verification required before workflow completion.
```

### Which Workflow to Choose

| I need to... | Workflow | Lead Agent |
|-------------|----------|------------|
| Onboard a new member | A — Member Onboarding | Member Services Rep |
| Process a loan application | B — Loan Origination | Loan Officer |
| Process a mortgage | C — Mortgage Processing | Mortgage Loan Processor |
| Work a delinquent account | D — Collections & Recovery | Collections Specialist |
| Handle deposit operations | E — Deposit Operations | Deposit Operations Manager |
| Prepare for NCUA examination | F — Compliance & Exam | Compliance Officer |
| Build the annual plan and budget | G — Annual Strategic Planning | CEO |
| Investigate fraud / process a Reg E dispute | H — Fraud Detection & Dispute Resolution | Fraud Detection & Security Analyst |
| Handle card fraud, chargeback, or reissue | I — Card Services & Fraud Monitoring | Card Services Specialist |
| Respond to a security incident | J — IT Security & Incident Response | IT Infrastructure Engineer |
| File a SAR, CTR, or manage BSA monitoring | K — BSA/AML Monitoring & SAR Filing | BSA Officer |
| Launch a new product or service | L — New Product/Service Launch | Compliance Officer + CEO |
| Onboard or review a vendor | M — Vendor Management & Due Diligence | Risk Manager |
| Open, relocate, or close a branch | N — Branch Operations & Expansion | Branch Manager |
| Execute a merger or acquisition | O — Merger & Acquisition | CEO |
| Provide financial wellness coaching | P — Member Financial Wellness | Financial Wellness Advisor |
| Convert the core banking system | Q — Core System Conversion | Chief Technology Officer |

---

## CANVAS-Micro: Handle a Specific Transaction or Issue

**Pick your scenario:**

### New Member Onboarding
```
Activate Member Services Representative for new member onboarding.
Member: [Name and eligibility basis]
BSA Officer verifies CIP and OFAC.
Compliance Officer confirms disclosures before account activation.
Financial Advisor conducts needs discovery after account opening.
```

### Loan Decision
```
Activate Loan Officer for loan application on member [#].
Application: [Product, amount, purpose]
Compliance Officer reviews ECOA/TILA compliance before funding.
Risk Manager reviews if exception to policy required.
All adverse action notices issued within 30 days.
```

### BSA Alert
```
Activate BSA Officer for suspicious activity review on account [#].
Transaction details: [Amount, date, pattern observed]
Compliance Officer provides regulatory guidance.
CEO notified if SAR filing is determined appropriate.
Document all decisions in BSA file within 30 days.
```

### Member in Financial Hardship
```
Activate Financial Advisor for hardship assessment on member [#].
Situation: [Description of hardship]
Collections Specialist pauses escalated outreach during assessment.
Loan Officer evaluates modification or deferral options.
Compliance Officer confirms FDCPA-compliant communication throughout.
```

### Reg E Dispute
```
Activate Deposit Operations Manager for Reg E dispute on account [#].
Transaction: [Date, amount, description]
BSA Officer screens for fraud indicators.
10-business-day provisional credit decision.
45-day final resolution deadline tracked.
Compliance Officer verifies resolution letter accuracy.
```

### Compliance Question
```
Activate Compliance Officer for regulatory interpretation on [TOPIC].
After opinion, issue written guidance to [staff/agent].
Document in compliance knowledge base.
CEO notified if material compliance issue identified.
```

---

## Strategy Documents

| Document | Purpose | Location |
|----------|---------|----------|
| **Master Strategy** | Complete CANVAS doctrine | `agentic-credit-union/strategy/cu-strategy.md` |
| **Workflow A Playbook** | Member onboarding & CIP | `agentic-credit-union/strategy/playbooks/workflow-a-member-onboarding.md` |
| **Workflow B Playbook** | Consumer loan origination | `agentic-credit-union/strategy/playbooks/workflow-b-loan-origination.md` |
| **Workflow C Playbook** | Mortgage TRID processing | `agentic-credit-union/strategy/playbooks/workflow-c-mortgage-processing.md` |
| **Workflow D Playbook** | Collections & recovery | `agentic-credit-union/strategy/playbooks/workflow-d-collections-recovery.md` |
| **Workflow E Playbook** | Deposit operations & BSA/AML | `agentic-credit-union/strategy/playbooks/workflow-e-deposit-operations.md` |
| **Workflow F Playbook** | Compliance & NCUA exam cycle | `agentic-credit-union/strategy/playbooks/workflow-f-compliance-examination.md` |
| **Workflow G Playbook** | Annual strategic planning | `agentic-credit-union/strategy/playbooks/workflow-g-annual-strategic-planning.md` |
| **Workflow H Playbook** | Fraud detection & dispute resolution | `agentic-credit-union/strategy/playbooks/workflow-h-fraud-dispute.md` |
| **Workflow I Playbook** | Card services & fraud monitoring | `agentic-credit-union/strategy/playbooks/workflow-i-card-services.md` |
| **Workflow J Playbook** | IT security & incident response | `agentic-credit-union/strategy/playbooks/workflow-j-it-security.md` |
| **Workflow K Playbook** | BSA/AML monitoring & SAR filing | `agentic-credit-union/strategy/playbooks/workflow-k-bsa-aml.md` |
| **Workflow L Playbook** | New product/service launch | `agentic-credit-union/strategy/playbooks/workflow-l-new-product-launch.md` |
| **Workflow M Playbook** | Vendor management & due diligence | `agentic-credit-union/strategy/playbooks/workflow-m-vendor-management.md` |
| **Workflow N Playbook** | Branch operations & expansion | `agentic-credit-union/strategy/playbooks/workflow-n-branch-operations.md` |
| **Workflow O Playbook** | Merger & acquisition | `agentic-credit-union/strategy/playbooks/workflow-o-merger-acquisition.md` |
| **Workflow P Playbook** | Member financial wellness | `agentic-credit-union/strategy/playbooks/workflow-p-financial-wellness.md` |
| **Workflow Q Playbook** | Core system conversion | `agentic-credit-union/strategy/playbooks/workflow-q-core-system-conversion.md` |
| **Activation Prompts** | Ready-to-use agent prompts | `agentic-credit-union/strategy/coordination/agent-activation-prompts.md` |
| **Handoff Templates** | Standardized handoff formats | `agentic-credit-union/strategy/coordination/handoff-templates.md` |
| **Exam Preparation Runbook** | NCUA examination cycle | `agentic-credit-union/strategy/runbooks/scenario-exam-preparation.md` |
| **New Product Launch Runbook** | New product rollout | `agentic-credit-union/strategy/runbooks/scenario-new-product-launch.md` |
| **Merger/Conversion Runbook** | Core system conversion or merger | `agentic-credit-union/strategy/runbooks/scenario-merger-conversion.md` |
| **Data Breach Response Runbook** | Cybersecurity incident response | `agentic-credit-union/strategy/runbooks/scenario-data-breach-response.md` |

---

## Key Concepts in 30 Seconds

1. **Compliance Gates** — No workflow step advances through a regulated checkpoint without documented compliance verification
2. **Context Preservation** — Every agent-to-agent handoff carries full member history and active regulatory timers
3. **Cooperative Values** — Every decision is evaluated against its impact on member financial wellbeing
4. **Evidence Over Assertion** — Documentation, not verbal confirmation, is the standard for all compliance attestations
5. **Hardship Protocol** — Any sign of member financial distress triggers the Financial Advisor referral at any workflow stage
6. **Escalation Discipline** — Material compliance issues escalate to CEO within 24 hours; no agent holds a material issue alone

---

## The Credit Union Agent Roster at a Glance

```
EXECUTIVE / STRATEGY          │ LENDING                   │ MEMBER SERVICES
Credit Union CEO              │ Loan Officer              │ Member Services Rep
CFO                           │ Business Lending Officer  │ Financial Advisor
CHRO                          │ Mortgage Loan Processor   │ Financial Wellness Advisor
Chief Operating Officer       │ Loan Underwriting Analyst │ Member Concierge
Chief Technology Officer      │                           │ Branch Manager
Chief Information Officer     │                           │
──────────────────────────────┼───────────────────────────┼──────────────────────────
RISK & COMPLIANCE             │ OPERATIONS                │ STRATEGIC / MARKETING
Compliance Officer            │ Deposit Operations Mgr    │ Marketing Manager
BSA Officer                   │ Card Services Specialist  │ Competitive Intelligence
Risk Manager                  │ Collections Specialist    │   Analyst
Internal Auditor              │ Collections Strategist    │
Regulatory Affairs Analyst    │                           │
Fraud Detection Analyst       │ IT                        │
                              │ Core Systems Admin        │
                              │ IT Infrastructure Eng     │
                              │ Database Administrator    │
                              │ IT Systems Administrator  │
                              │ Software Engineer         │
                              │ RPA & Automation Eng      │
                              │ BI Analyst                │
                              │ IT Services Manager       │
```

---

<div align="center">

**Start with a workflow. Follow the playbook. Honor the compliance gate.**

`agentic-credit-union/strategy/cu-strategy.md` — The complete doctrine

</div>
