# CANVAS Setup Guide

> Get started with the Credit Union Agent Network for Value, Advice, and Service (CANVAS).

## Prerequisites

- An AI agent platform that supports markdown-based agent definitions
- Access to the 32 credit union agent roles defined in `agents/`

## Quick Start

1. **Choose your mode:**
   - **CANVAS-Full**: All 32 agents for strategic initiatives (4-12 weeks)
   - **CANVAS-Process**: 5-10 agents for single workflows (1-4 weeks)
   - **CANVAS-Micro**: 2-4 agents for specific issues (1-5 days)

2. **Select a workflow:**
   - Workflow A: Member Onboarding
   - Workflow B: Loan Origination
   - Workflow C: Mortgage Processing (TRID)
   - Workflow D: Collections & Recovery
   - Workflow E: Deposit Operations & BSA/AML
   - Workflow F: Compliance & NCUA Examination
   - Workflow G: Annual Strategic Planning
   - Workflow H: Fraud Detection & Dispute Resolution
   - Workflow I: Card Services & Fraud Monitoring
   - Workflow J: IT Security & Incident Response
   - Workflow K: BSA/AML Monitoring & SAR Filing
   - Workflow L: New Product/Service Launch
   - Workflow M: Vendor Management & Due Diligence
   - Workflow N: Branch Operations & Expansion
   - Workflow O: Merger & Acquisition
   - Workflow P: Member Financial Wellness Program
   - Workflow Q: Core System Conversion

3. **Activate agents** using the prompts in `strategy/coordination/agent-activation-prompts.md`

## Directory Overview

```
agentic-credit-union/
├── agents/              # 32 AI agent definitions
│   ├── cu-ceo.md
│   ├── cu-cfo.md
│   └── ... (30 more)
│
└── strategy/            # Operational doctrine
    ├── EXECUTIVE-BRIEF.md     # Strategic overview
    ├── QUICKSTART.md          # 5-minute activation
    ├── cu-strategy.md         # Master strategy (1000+ lines)
    ├── playbooks/             # 17 workflow guides
    ├── coordination/          # Handoff & activation templates
    └── runbooks/              # Scenario response guides
```

## First Steps

1. Read `strategy/EXECUTIVE-BRIEF.md` for context
2. Review `strategy/QUICKSTART.md` for activation options
3. Pick a workflow from `strategy/playbooks/`
4. Use the activation prompts in `strategy/coordination/agent-activation-prompts.md`

## Documentation

| Document | Purpose |
|----------|---------|
| `EXECUTIVE-BRIEF.md` | Strategic overview |
| `QUICKSTART.md` | 5-minute activation guide |
| `cu-strategy.md` | Complete operational doctrine |
| `playbooks/*.md` | Step-by-step workflows |
| `runbooks/*.md` | Scenario responses |

## Support

- See `strategy/coordination/handoff-templates.md` for standard handoff formats
- Compliance guidance in workflow playbooks
- Risk management in `cu-strategy.md` Section 14