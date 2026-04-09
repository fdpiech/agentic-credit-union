# Changelog

All notable changes to CANVAS (Credit Union Agent Network for Value, Advice, and Service) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - TBD

### Added

**Self-Improvement Protocol — Agents that improve the system itself**

- **Retrospective Agent**: Analyzes past simulation runs, generates lessons learned after each release cycle
- **Gap Analysis Agent**: Compares simulation capabilities against real-world CU operations and industry benchmarks
- **Competitive Intel Agent**: Monitors fintech/CU industry, scrapes conferences/Reddit, surfaces emerging patterns
- **Member Persona Agent**: Synthesizes synthetic member profiles, tests features against realistic journeys
- **Game Theory Evaluation Agent**: Models incentive structures, catches gaming/exploitation scenarios, validates cooperative alignment
- **Roadmap Synthesis Agent**: Aggregates insights from all analysis agents, generates prioritized enhancement proposals

**Protocol Flow**: Competitive Intel → Gap Analysis → Roadmap Synthesis → Build → Retrospective → repeat

---

## [2.1.0] - 2026-04-09

### Changed

**Agent consolidation — 35 → 32 agents (3 redundant pairs merged)**

- **Financial Advisor** absorbs Financial Wellness Advisor: Wellness coaching capabilities (budget development, debt payoff planning, savings goal coaching, external resource referrals, progress monitoring) become the Financial Advisor's "Coaching mode." Workflow P now activates the Financial Advisor in Coaching mode. All hardship assessments, onboarding discovery, and coaching engagements flow through one agent operating at the right intensity for the situation.

- **Collections Specialist** absorbs Collections Strategist: Portfolio-level strategic thinking (risk segmentation, workout program design, loss forecasting, queue strategy, agency placement, strategic planning input) folds into the Collections Specialist's Advanced Capabilities and a new daily/weekly/monthly/quarterly strategic cadence. The member-interaction and portfolio-strategy functions were always one job — now they're one agent.

- **Member Services Representative** absorbs Member Concierge: MSR gains a "Coordination Mode" that activates when a member's issue spans multiple departments or has been unresolved across 3+ days/agents. In Coordination Mode, the MSR shifts from direct service to end-to-end case ownership: maps open items, briefs specialists, maintains a daily member callback cadence, and closes with a COO process-improvement note.

### Removed

- `agents/cu-financial-wellness.md` — capabilities merged into `cu-financial-advisor.md`
- `agents/cu-collections-strategist.md` — capabilities merged into `cu-collections-specialist.md`
- `agents/cu-member-concierge.md` — capabilities merged into `cu-member-services-representative.md`

### Updated

- `strategy/ROUTER.md`: Financial Wellness → Financial Advisor (Coaching mode); Member Concierge → Member Services Representative (Coordination Mode); Collections Strategist removed from co-routing
- `strategy/cu-strategy.md`: All agent tables, workflow tables, coordination matrix, and activation triggers updated
- `strategy/coordination/agent-activation-prompts.md`: Merged agent prompts removed; surviving agent prompts expanded with absorbed responsibilities
- `strategy/playbooks/workflow-p-financial-wellness.md`: All Financial Wellness Advisor references updated to Financial Advisor
- `strategy/EXECUTIVE-BRIEF.md`, `README.md`, `strategy/QUICKSTART.md`: Agent count updated to 32

---

## [2.0.1] - 2026-04-05

### Added

- **11 new agents** (24 → 35 total):
  - **C-Suite Expansion**: Chief Operating Officer, Chief Technology Officer, Chief Information Officer
  - **Member Services**: Member Concierge
  - **Risk & Compliance**: Fraud Detection Analyst, Regulatory Affairs Analyst
  - **Lending**: Loan Underwriting Analyst
  - **Operations**: Collections Strategist
  - **Member Services**: Financial Wellness Advisor
  - **Strategic**: Competitive Intelligence Analyst
  - **IT**: IT Systems Administrator
- **10 new workflow playbooks** (7 → 17 total, A–Q):
  - **Critical (H–K)**: Fraud Detection & Dispute Resolution, Card Services & Fraud Monitoring, IT Security & Incident Response, BSA/AML Monitoring & SAR Filing
  - **High Priority (L–M, Q)**: New Product/Service Launch, Vendor Management & Due Diligence, Core System Conversion
  - **Medium Priority (N–P)**: Branch Operations & Expansion, Merger & Acquisition, Member Financial Wellness Program
- **Simulator support for workflows H–K**: Mock responses for fraud investigation, card fraud, security incidents, and SAR/CTR filing
- **`research/game-theory.md`**: Game theory research for multi-agent cooperation, trust scoring, and Shapley value attribution
- **`strategy/my-credit-union.md`**: Credit union profile template for customizing CANVAS to a specific institution

### Changed

- **`strategy/ROUTER.md`**: Domain detection and single-agent routing updated for all 17 workflows and all 35 agents
- **`README.md`**: Workflow table expanded to all 17 workflows organized by priority tier; agent table updated to 35 agents
- **`strategy/QUICKSTART.md`**: "Which Workflow to Choose" table updated to include H–Q
- **`strategy/EXECUTIVE-BRIEF.md`**: Deliverables updated to reflect 17 workflow playbooks and 35 agents
- **`simulator/README.md`**: Workflow table updated with H–K simulator support
- **`simulator/package.json`**: Version bumped to 2.0.1

---

## [1.0.0] - 2026-03-25

### Added

- **24 AI agent definitions** covering all major credit union functions:
  - Executive: CEO, CFO, CHRO
  - Lending: Loan Officer, Mortgage Loan Processor, Business Lending Officer
  - Member Services: Member Services Rep, Financial Advisor, Branch Manager
  - Risk & Compliance: Compliance Officer, BSA Officer, Risk Manager, Internal Auditor
  - Operations: Deposit Operations Manager, Card Services Specialist, Collections Specialist
  - IT: Core Systems Admin, IT Infrastructure Engineer, Database Administrator, Software Engineer, RPA & Automation Engineer, Business Intelligence Analyst, IT Services Manager
  - Other: Marketing Manager
- **7 core workflow playbooks** (A–G):
  - Workflow A: Member Onboarding & CIP
  - Workflow B: Consumer Loan Origination
  - Workflow C: Mortgage Processing (TRID)
  - Workflow D: Collections & Recovery
  - Workflow E: Deposit Operations & BSA/AML
  - Workflow F: Compliance & NCUA Exam Preparation
  - Workflow G: Annual Strategic Planning
- **CLI simulator** with mock (no API key) and live LLM modes for workflow A–G
- **`strategy/ROUTER.md`**: Routing guide for "I don't know who to ask" entry point
- **Strategy documents**:
  - `strategy/EXECUTIVE-BRIEF.md` — Strategic overview and recommendations
  - `strategy/QUICKSTART.md` — 5-minute workflow activation guide
  - `strategy/cu-strategy.md` — Complete operational doctrine (1,000+ lines)
- **Coordination templates**:
  - `strategy/coordination/agent-activation-prompts.md`
  - `strategy/coordination/handoff-templates.md`
- **4 scenario runbooks**:
  - NCUA Exam Preparation
  - New Product Launch
  - Merger/Conversion
  - Data Breach Response
- **Project scaffolding**: README.md, SETUP.md, CONTRIBUTING.md, LICENSE, .gitignore

---

*Initial release extracted from msitarzewski/Agency-Agents credit-union directory.*
