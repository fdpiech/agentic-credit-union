# CANVAS — Credit Union Agent Network

**CANVAS** (Credit Union Agent Network for Value, Advice, and Service) is a coordinated AI agent system for credit union operations. It transforms 35 specialized AI agents into an orchestrated operational pipeline with defined workflows, compliance gates, and measurable outcomes grounded in cooperative values.

---

## Overview

The system includes:
- **35 specialized AI agents** covering every major credit union function
- **7 core workflows** for end-to-end process orchestration
- **Standardized handoff protocols** ensuring compliance at every step
- **Scenario runbooks** for exam preparation, new product launches, mergers, and crisis response

---

## Directory Structure

```
agentic-credit-union/
├── agents/                    # 35 AI agent definitions
│   ├── cu-ceo.md              # Executive leadership
│   ├── cu-cfo.md              # Finance
│   ├── cu-chro.md             # Human Resources
│   ├── cu-chief-operating-officer.md
│   ├── cu-chief-technology-officer.md
│   ├── cu-chief-information-officer.md
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
│   ├── cu-collections-strategist.md
│   ├── cu-financial-advisor.md
│   ├── cu-financial-wellness.md  # Financial Wellness Advisor
│   ├── cu-member-services-representative.md
│   ├── cu-member-concierge.md
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
└── strategy/                  # Operational doctrine & playbooks
    ├── EXECUTIVE-BRIEF.md     # High-level overview
    ├── QUICKSTART.md          # 5-minute activation guide
    ├── cu-strategy.md         # Master strategy document
    ├── playbooks/             # 7 workflow playbooks
    │   ├── workflow-a-member-onboarding.md
    │   ├── workflow-b-loan-origination.md
    │   ├── workflow-c-mortgage-processing.md
    │   ├── workflow-d-collections-recovery.md
    │   ├── workflow-e-deposit-operations.md
    │   ├── workflow-f-compliance-examination.md
    │   └── workflow-g-annual-strategic-planning.md
    ├── coordination/           # Handoff & activation templates
    │   ├── agent-activation-prompts.md
    │   └── handoff-templates.md
    └── runbooks/               # Scenario response guides
        ├── scenario-exam-preparation.md
        ├── scenario-new-product-launch.md
        ├── scenario-merger-conversion.md
        └── scenario-data-breach-response.md
│
└── simulator/                 # CLI workflow simulator
    ├── simulator.js           # Entry point
    ├── canvas/                # Engine modules
    └── README.md              # Simulator documentation
```

---

## The 35 Agents

| Category | Agents |
|----------|-------|
| **Executive** | CEO, CFO, CHRO, Chief Operating Officer, Chief Technology Officer, Chief Information Officer |
| **Lending** | Loan Officer, Mortgage Loan Processor, Business Lending Officer, Loan Underwriting Analyst |
| **Member Services** | Member Services Rep, Financial Advisor, Financial Wellness Advisor, Branch Manager, Member Concierge |
| **Risk & Compliance** | Compliance Officer, BSA Officer, Risk Manager, Internal Auditor, Regulatory Affairs Analyst, Fraud Detection Analyst |
| **Operations** | Deposit Operations Manager, Card Services Specialist, Collections Specialist, Collections Strategist |
| **IT (8 agents)** | Core Systems Admin, IT Infrastructure Engineer, Database Administrator, IT Systems Administrator, Software Engineer, RPA & Automation Engineer, Business Intelligence Analyst, IT Services Manager |
| **Strategic** | Marketing Manager, Competitive Intelligence Analyst |

---

## The 7 Workflows

| Workflow | Description | Lead Agent |
|----------|-------------|------------|
| **A** | Member Onboarding & CIP | Member Services Rep |
| **B** | Consumer Loan Origination | Loan Officer |
| **C** | Mortgage Processing (TRID) | Mortgage Loan Processor |
| **D** | Collections & Recovery | Collections Specialist |
| **E** | Deposit Operations & BSA/AML | Deposit Operations Manager |
| **F** | Compliance & NCUA Exam | Compliance Officer |
| **G** | Annual Strategic Planning | CEO |

---

## Three Deployment Modes

| Mode | Agents | Timeline | Use Case |
|------|-------|----------|----------|
| **CANVAS-Full** | All 35 | 4-12 weeks | Strategic initiatives, exam cycles |
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
# Run all workflows
for w in A B C D E F G; do node simulator.js --mock --workflow $w; done
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

*CANVAS: 35 Agents. 7 Workflows. One Unified Credit Union Strategy.*