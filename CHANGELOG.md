# Changelog

All notable changes to CANVAS (Credit Union Agent Network for Value, Advice, and Service) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
