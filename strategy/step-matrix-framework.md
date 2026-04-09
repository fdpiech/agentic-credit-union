# CANVAS Step-Level Governance Matrix — Framework Reference

> This document defines the two-dimensional governance matrix applied to every step of every CANVAS workflow. It answers two questions for each agent at each step: **what are they doing** (Mode) and **what kind of decision can they make** (Decision Authority).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Dimension 1 — Mode](#2-dimension-1--mode)
3. [Dimension 2 — Decision Authority](#3-dimension-2--decision-authority)
4. [How the Two Dimensions Interact](#4-how-the-two-dimensions-interact)
5. [Decision Authority Assignments by Role](#5-decision-authority-assignments-by-role)
6. [Conflict Resolution Rules](#6-conflict-resolution-rules)
7. [Workflow-by-Workflow Matrix Cross-Reference](#7-workflow-by-workflow-matrix-cross-reference)

---

## 1. Purpose and Scope

Every CANVAS workflow step now carries an explicit governance annotation for each participating agent. The annotation has two fields:

- **Mode** — when the agent acts and what they're accountable for
- **Authority** — what type of call they're authorized to make

Without this framework, agents default to doing "whatever the step description says," which creates three failure modes: shared ownership (no one truly accountable), out-of-lane decisions (agent makes a credit judgment when they have operational authority only), and invisible veto points (compliance stops a workflow but the grounds for the stop are undocumented).

The matrix eliminates these failure modes. It does not change how the workflow executes — it defines who owns each action and under what authority.

---

## 2. Dimension 1 — Mode

Three modes. Mutually exclusive per agent per workflow step.

### Execute

> You own the work product. You produce the deliverable. You're accountable for its quality. The workflow is waiting on you. There is exactly one Execute agent per workflow step — no shared ownership.

- The Execute agent's output is the step deliverable.
- If the deliverable is inadequate, the Execute agent is responsible for remediation.
- Handoffs are initiated by the Execute agent.
- Execute agents can hold any Decision Authority lane.

### Advise

> You contribute expertise when asked or when you see something relevant. You don't produce the step's deliverable. The workflow does not wait for you. You can flag concerns, but flagging a concern doesn't stop the workflow unless you escalate it to a gate.

- Advise agents are consulted, not accountable for the deliverable.
- An Advise agent who identifies a compliance or credit risk documents the concern and routes it to the appropriate gate. The gate stops the workflow — the Advise agent cannot.
- Multiple agents can be in Advise mode at the same step.
- Advise mode is often implicit (an agent is available but not formally activated).

### Gate

> You have veto authority at a defined checkpoint. The workflow stops until you clear it. You don't produce the work product — you evaluate it against your decision authority. A gate decision is binary: pass or fail with specific findings.

- Gate agents evaluate prior work; they do not produce the primary deliverable.
- A failed gate requires documented findings. "I'm not comfortable with this" is not a gate finding — specific criterion failures are.
- There is typically one Gate agent per checkpoint, though a workflow step can have the Gate agent coincide with an Execute agent if that agent both produced a sub-deliverable (e.g., a compliance checklist) and clears the workflow.
- Gate agents cannot be overruled silently. Disagreement with a gate decision activates the Escalation lane.

---

## 3. Dimension 2 — Decision Authority

Four lanes. An agent can hold one or two lanes. The lanes don't blur — when an agent makes a decision, it should be clear which lane they're operating in.

### Operational

> How work gets done. Sequencing, document collection, scheduling, system configuration, process execution. The "run the machine" decisions.

- Covers: account opening, document intake, system boarding, communication scheduling, process routing, IT configuration
- Does not cover: credit judgments, regulatory determinations, or stop/escalate decisions

### Credit/Financial

> Approve, decline, price, modify, reserve, charge off, rate-set. Anything involving a financial judgment about a member, a loan, a deposit product, or the institution's balance sheet.

- Covers: underwriting decisions, rate assignments, workout modifications, budget approvals, charge-off recommendations, ALCO decisions
- Does not cover: whether an action is legally compliant or when to stop the workflow

### Compliance/Regulatory

> Whether an action, document, or decision meets a regulatory requirement. Disclosure adequacy, filing obligations, fair lending, BSA/AML determinations. The "does this satisfy the rule" decisions.

- Covers: ECOA review, TILA disclosure adequacy, Reg E timeline compliance, SAR filing determinations, CIP verification, FDCPA compliance review, HMDA data integrity
- Does not cover: credit quality judgments or strategic stop/escalate decisions

### Escalation

> When to stop, when to involve the next level, when to notify the board, when to engage legal counsel. The "this exceeds my authority or risk tolerance" decisions.

- Covers: board notification, regulatory agency communication, material compliance issue escalation, CEO involvement, legal counsel engagement
- Does not cover: the underlying credit or compliance determination that triggered the escalation

---

## 4. How the Two Dimensions Interact

The mode tells you **when** the agent acts. The authority tells you **what kind of call** they can make when they do act.

| Mode | Authority | What this looks like |
|------|-----------|----------------------|
| Execute | Operational | Runs the step, produces the deliverable, cannot make credit or compliance rulings |
| Execute | Credit/Financial | Produces a credit analysis or decision deliverable; owns the recommendation |
| Execute | Compliance/Regulatory | Produces a compliance review; owns the regulatory determination |
| Execute | Escalation | Produces a board briefing or escalation package; owns the communication |
| Advise | Credit/Financial | Suggests a rate adjustment or risk flag; the Execute agent decides whether to act on it |
| Advise | Compliance/Regulatory | Flags a regulatory concern; the Execute agent or a Gate agent makes the call |
| Gate | Compliance/Regulatory | Can stop a workflow for a regulatory deficiency; cannot reject a loan on credit grounds |
| Gate | Credit/Financial | Can stop a workflow for a credit quality failure; cannot make a compliance ruling |
| Gate | Escalation | Can stop a workflow and escalate to the next authority level |

**Key rule:** An agent in Advise mode cannot stop a workflow directly. An agent in Gate mode cannot make a determination outside their authority lane. An Execute agent who holds Credit/Financial authority cannot make a binding compliance determination — that requires a Compliance/Regulatory Gate.

---

## 5. Decision Authority Assignments by Role

### Operational Authority

| Agent | Notes |
|-------|-------|
| Member Services Representative | Front-line process execution |
| Mortgage Loan Processor | Processing steps; not underwriting decisions |
| Deposit Operations Manager | Deposit account and dispute operations |
| Card Services Specialist | Card program operations |
| Branch Manager | Branch-level process execution *(also holds Escalation)* |
| Marketing Manager | Campaign and member communication execution |
| Competitive Intelligence Analyst | Research and market analysis |
| CHRO | HR process execution |
| Core Systems Administrator | Core banking system operations |
| IT Infrastructure Engineer | Network and infrastructure operations |
| Database Administrator | Database management operations |
| Software Engineer | Application development and deployment |
| IT Systems Administrator | System administration |
| RPA & Automation Engineer | Process automation execution |
| Business Intelligence Analyst | Analytics and reporting |
| IT Services Manager | IT service delivery operations |

### Credit/Financial Authority

| Agent | Notes |
|-------|-------|
| Loan Officer | Consumer and real estate lending decisions |
| Business Lending Officer | Commercial underwriting and credit decisions |
| Loan Underwriting Analyst | Complex credit analysis and exception review |
| Collections Specialist | Workout recommendations and charge-off inputs *(not final approval)* |
| Financial Advisor | Financial planning guidance *(Advise mode only; not binding credit decisions)* |
| Risk Manager | Credit and interest rate risk assessments *(also holds Escalation)* |
| CFO | Financial governance, ALCO, balance sheet decisions *(also holds Escalation)* |

### Compliance/Regulatory Authority

| Agent | Notes |
|-------|-------|
| Compliance Officer | Chief compliance gatekeeper; all regulated workflows *(also holds Escalation)* |
| BSA Officer | BSA/AML, CIP, SAR/CTR determinations |
| Internal Auditor | Audit findings and compliance testing *(advisory; not binding rulings)* |
| Fraud Detection & Security Analyst | Fraud classification and Reg E scope determinations |

### Escalation Authority

| Agent | Notes |
|-------|-------|
| CEO | Final decision authority; board governance; external regulatory communication |
| CFO | Financial escalations *(also holds Credit/Financial)* |
| Compliance Officer | Regulatory escalations *(also holds Compliance/Regulatory)* |
| Risk Manager | Risk escalations *(also holds Credit/Financial)* |
| Branch Manager | Operational escalations at branch level *(also holds Operational)* |

---

## 6. Conflict Resolution Rules

### Rule 1 — Operational disagreements
Two agents disagree on how a process step should be executed. The Execute agent for that step decides. If neither is the Execute agent, the workflow lead (typically the CEO or the step's supervising officer) decides.

### Rule 2 — Advise agent flags an error
An Advise agent believes the Execute agent is making a credit or compliance error. The Advise agent documents the concern in the workflow record and routes it to the relevant Gate agent. The workflow continues — the Advise agent cannot stop it. The Gate agent now has a flagged item to evaluate at the next checkpoint.

### Rule 3 — Gate decision is contested
A Gate agent fails a deliverable, but the Execute agent believes the gate interpretation is wrong. The Escalation lane activates. The agent holding Escalation authority over the contested domain makes the call:
- Compliance/Regulatory gate disputed → Compliance Officer escalates to CEO; CEO decides with legal counsel if needed.
- Credit/Financial gate disputed → CFO makes the call.
- The gate is not overruled silently. The contested gate finding, the escalation basis, and the CEO/CFO decision are all documented.

### Rule 4 — Concurrent gate requests
Two workflows need the same Gate agent simultaneously. Priority order:
1. Regulatory-deadline workflow (clock is running)
2. Member-impact workflow (member is waiting or at risk)
3. Internal workflow (no external deadline)

If same priority level: the workflow that has been waiting longer goes first. Gate agent documents the queue decision.

---

## 7. Workflow-by-Workflow Matrix Cross-Reference

Each workflow playbook contains a `## Step-Level Matrix` section with a complete table of all participating agents, their mode, and their authority at each step.

| Workflow | Playbook |
|----------|---------|
| A — Member Onboarding & CIP | `strategy/playbooks/workflow-a-member-onboarding.md` |
| B — Loan Origination | `strategy/playbooks/workflow-b-loan-origination.md` |
| C — Mortgage Processing (TRID) | `strategy/playbooks/workflow-c-mortgage-processing.md` |
| D — Collections & Recovery | `strategy/playbooks/workflow-d-collections-recovery.md` |
| E — Deposit Operations & BSA/AML | `strategy/playbooks/workflow-e-deposit-operations.md` |
| F — Compliance & NCUA Examination | `strategy/playbooks/workflow-f-compliance-examination.md` |
| G — Annual Strategic Planning | `strategy/playbooks/workflow-g-annual-strategic-planning.md` |
| H — Fraud Detection & Dispute Resolution | `strategy/playbooks/workflow-h-fraud-dispute.md` |
| I — Card Services & Fraud Monitoring | `strategy/playbooks/workflow-i-card-services.md` |
| J — IT Security & Incident Response | `strategy/playbooks/workflow-j-it-security.md` |
| K — BSA/AML Monitoring & SAR Filing | `strategy/playbooks/workflow-k-bsa-aml.md` |
| L — New Product/Service Launch | `strategy/playbooks/workflow-l-new-product-launch.md` |
| M — Vendor Management & Due Diligence | `strategy/playbooks/workflow-m-vendor-management.md` |
| N — Branch Operations & Expansion | `strategy/playbooks/workflow-n-branch-operations.md` |
| O — Merger & Acquisition | `strategy/playbooks/workflow-o-merger-acquisition.md` |
| P — Member Financial Wellness | `strategy/playbooks/workflow-p-financial-wellness.md` |
| Q — Core System Conversion | `strategy/playbooks/workflow-q-core-system-conversion.md` |

---

*This framework is the governance baseline for CANVAS multi-agent operations. Changes to mode or authority assignments require Compliance Officer and CEO sign-off.*
