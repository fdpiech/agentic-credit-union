# CANVAS — Credit Union Agent Network

**CANVAS** (Credit Union Agent Network for Value, Advice, and Service) is a coordinated AI agent system for credit union operations. It transforms 32 specialized AI agents into an orchestrated operational pipeline with defined workflows, compliance gates, and measurable outcomes grounded in cooperative values.

---

## Overview

The system includes:
- **32 specialized AI agents** covering every major credit union function
- **17 workflows** covering every major credit union function and regulatory obligation
- **Standardized handoff protocols** ensuring compliance at every step
- **Scenario runbooks** for exam preparation, new product launches, mergers, and crisis response

---

## Directory Structure

```
agentic-credit-union/
├── agents/                    # 32 AI agent definitions
│   ├── cu-ceo.md              # Executive leadership
│   ├── cu-cfo.md              # Finance
│   ├── cu-chro.md             # Human Resources
│   ├── cu-coo.md
│   ├── cu-cto.md
│   ├── cu-cio.md
│   ├── cu-compliance-officer.md
│   ├── cu-bsa-officer.md      # Anti-money laundering
│   ├── cu-risk-manager.md
│   ├── cu-internal-auditor.md
│   ├── cu-regulatory-affairs.md  # Regulatory Affairs Analyst
│   ├── cu-fraud-detection.md
│   ├── cu-loan-officer.md
│   ├── cu-mortgage-loan-processor.md
│   ├── cu-business-lending-officer.md
│   ├── cu-loan-underwriting.md   # Loan Underwriting Analyst
│   ├── cu-collections-specialist.md
│   ├── cu-financial-advisor.md
│   ├── cu-member-services-representative.md
│   ├── cu-branch-manager.md
│   ├── cu-marketing-manager.md
│   ├── cu-competitive-intelligence.md
│   ├── cu-card-services-specialist.md
│   ├── cu-deposit-operations-manager.md
│   ├── cu-core-systems.md      # IT: Core Systems Admin
│   ├── cu-it-infrastructure.md
│   ├── cu-it-database.md
│   ├── cu-it-services.md
│   ├── cu-it-systems-administrator.md
│   ├── cu-software-engineer.md
│   ├── cu-rpa-automation.md
│   └── cu-business-intelligence.md
│
├── strategy/                  # Operational doctrine & playbooks
│   ├── EXECUTIVE-BRIEF.md     # High-level overview
│   ├── QUICKSTART.md          # 5-minute activation guide
│   ├── ROUTER.md              # "I don't know who to ask" routing guide
│   ├── cu-strategy.md         # Master strategy document
│   ├── my-credit-union.md     # Credit union profile template
│   ├── playbooks/             # 17 workflow playbooks (A–Q)
│   │   ├── workflow-a-member-onboarding.md
│   │   ├── workflow-b-loan-origination.md
│   │   ├── workflow-c-mortgage-processing.md
│   │   ├── workflow-d-collections-recovery.md
│   │   ├── workflow-e-deposit-operations.md
│   │   ├── workflow-f-compliance-examination.md
│   │   ├── workflow-g-annual-strategic-planning.md
│   │   ├── workflow-h-fraud-dispute.md
│   │   ├── workflow-i-card-services.md
│   │   ├── workflow-j-it-security.md
│   │   ├── workflow-k-bsa-aml.md
│   │   ├── workflow-l-new-product-launch.md
│   │   ├── workflow-m-vendor-management.md
│   │   ├── workflow-n-branch-operations.md
│   │   ├── workflow-o-merger-acquisition.md
│   │   ├── workflow-p-financial-wellness.md
│   │   └── workflow-q-core-system-conversion.md
│   ├── coordination/           # Handoff & activation templates
│   │   ├── agent-activation-prompts.md
│   │   └── handoff-templates.md
│   └── runbooks/               # Scenario response guides
│       ├── scenario-exam-preparation.md
│       ├── scenario-new-product-launch.md
│       ├── scenario-merger-conversion.md
│       └── scenario-data-breach-response.md
│
├── research/                  # Supporting research
│   └── game-theory.md         # Multi-agent cooperation & trust scoring
│
└── simulator/                 # CLI workflow simulator
    ├── simulator.js           # Entry point
    ├── canvas/                # Engine modules
    └── README.md              # Simulator documentation
```

---

## The 32 Agents

| Category | Agents |
|----------|-------|
| **Executive** | CEO, CFO, CHRO, Chief Operating Officer, Chief Technology Officer, Chief Information Officer |
| **Lending** | Loan Officer, Mortgage Loan Processor, Business Lending Officer, Loan Underwriting Analyst |
| **Member Services** | Member Services Representative, Financial Advisor, Branch Manager |
| **Risk & Compliance** | Compliance Officer, BSA Officer, Risk Manager, Internal Auditor, Regulatory Affairs Analyst, Fraud Detection Analyst |
| **Operations** | Deposit Operations Manager, Card Services Specialist, Collections Specialist |
| **IT (8 agents)** | Core Systems Admin, IT Infrastructure Engineer, Database Administrator, IT Systems Administrator, Software Engineer, RPA & Automation Engineer, Business Intelligence Analyst, IT Services Manager |
| **Strategic** | Marketing Manager, Competitive Intelligence Analyst |

---

## The 17 Workflows

### Core Workflows (A–G)

| Workflow | Description | Lead Agent |
|----------|-------------|------------|
| **A** | Member Onboarding & CIP | Member Services Rep |
| **B** | Consumer Loan Origination | Loan Officer |
| **C** | Mortgage Processing (TRID) | Mortgage Loan Processor |
| **D** | Collections & Recovery | Collections Specialist |
| **E** | Deposit Operations & BSA/AML | Deposit Operations Manager |
| **F** | Compliance & NCUA Exam | Compliance Officer |
| **G** | Annual Strategic Planning | CEO |

### Critical Workflows (H–K)

| Workflow | Description | Lead Agent |
|----------|-------------|------------|
| **H** | Fraud Detection & Dispute Resolution | Fraud Detection & Security Analyst |
| **I** | Card Services & Fraud Monitoring | Card Services Specialist |
| **J** | IT Security & Incident Response | IT Infrastructure Engineer |
| **K** | BSA/AML Monitoring & SAR Filing | BSA Officer |

### High-Priority Workflows (L–M, Q)

| Workflow | Description | Lead Agent |
|----------|-------------|------------|
| **L** | New Product/Service Launch | Compliance Officer + CEO |
| **M** | Vendor Management & Due Diligence | Risk Manager |
| **Q** | Core System Conversion | Chief Technology Officer |

### Medium-Priority Workflows (N–P)

| Workflow | Description | Lead Agent |
|----------|-------------|------------|
| **N** | Branch Operations & Expansion | Branch Manager |
| **O** | Merger & Acquisition | CEO |
| **P** | Member Financial Wellness Program | Financial Advisor (Coaching mode) |

---

## Three Deployment Modes

| Mode | Agents | Timeline | Use Case |
|------|-------|----------|----------|
| **CANVAS-Full** | All 32 | 4-12 weeks | Strategic initiatives, exam cycles |
| **CANVAS-Process** | 5-10 | 1-4 weeks | Single workflow end-to-end |
| **CANVAS-Micro** | 2-4 | 1-5 days | Specific transaction or issue |

---

## Simulator

Run workflow simulations from the command line. The simulator orchestrates agents through workflows with mock or live LLM responses.

```bash
cd simulator
npm install
node simulator.js --mock --workflow A
```

**Mock mode** — hardcoded responses, no API key. Good for demos, training, and testing.
**Live mode** — real LLM via OpenAI-compatible API. Good for evaluating AI coordination quality.

```bash
# Run all simulator-supported workflows (A–G core, H–K critical)
for w in A B C D E F G H I J K; do node simulator.js --mock --workflow $w; done
```

See [`simulator/README.md`](simulator/README.md) for full documentation.

---

## Key Principles

1. **Compliance Gates** — No workflow step advances through a regulated checkpoint without documented compliance verification
2. **Context Preservation** — Every agent-to-agent handoff carries full member history and active regulatory timers
3. **Cooperative Values** — Every decision evaluated against its impact on member financial wellbeing
4. **Evidence Over Assertion** — Documentation, not verbal confirmation, is the standard for all compliance attestations
5. **Hardship Protocol** — Any sign of member financial distress triggers Financial Advisor referral at any workflow stage
6. **Escalation Discipline** — Material compliance issues escalate to CEO within 24 hours

---

## Disclaimer

CANVAS is a **framework and reference implementation** intended to support credit union operational design, training, and AI workflow exploration. It is not a licensed financial product, compliance system, or legal advisory tool.

- **AI agents do not replace human judgment.** All outputs should be reviewed by qualified staff before action is taken on member accounts, loan decisions, or regulatory filings.
- **Compliance and regulatory decisions require licensed professionals.** BSA/AML filings, NCUA examination responses, and legal matters must be handled by appropriately credentialed personnel in accordance with applicable law.
- **No warranties are provided.** This framework is offered as-is. Users are solely responsible for validating its suitability for their institution's specific regulatory environment and operational needs.
- **Member data is your responsibility.** If this framework is deployed with real member information, ensure your implementation meets GLBA, NCUA, and applicable state privacy requirements.

---

## Quick Start

See [`strategy/QUICKSTART.md`](strategy/QUICKSTART.md) for 5-minute activation.

For the full operational doctrine, see [`strategy/cu-strategy.md`](strategy/cu-strategy.md).

---

## Resources

| Document | Purpose |
|----------|---------|
| `strategy/EXECUTIVE-BRIEF.md` | Strategic overview and recommendations |
| `strategy/QUICKSTART.md` | Activate any workflow in 5 minutes |
| `strategy/cu-strategy.md` | Complete operational doctrine (1000+ lines) |
| `strategy/playbooks/*.md` | Step-by-step workflow guides |
| `strategy/coordination/*.md` | Ready-to-use prompts and handoff templates |
| `strategy/runbooks/*.md` | Scenario response guides |
| `simulator/README.md` | Simulator installation and usage |
| `strategy/ROUTER.md` | "I don't know who to ask" — routing guide |

---

*CANVAS: 32 Agents. 17 Workflows. One Unified Credit Union Strategy.*