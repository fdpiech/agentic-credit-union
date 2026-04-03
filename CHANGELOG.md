# Changelog

All notable changes to CANVAS (Credit Union Agent Network for Value, Advice, and Service) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.1] - 2026-04-03

### Added
- **10 new agents** (24 → 34 total):
  - **C-Suite Expansion**: Chief Operating Officer, Chief Technology Officer, Chief Information Officer
  - **HIGH Priority**: Member Concierge, Competitive Intelligence Analyst, Fraud Detection Analyst
  - **MEDIUM Priority**: Regulatory Affairs Analyst, Financial Wellness Advisor, Collections Strategist, Loan Underwriting Analyst

### Changed
- **README.md**: Agent count updated (31 → 34)
- **ROUTER.md**: Added new agents to domain detection and routing tables

### Added (Research)
- **research/game-theory.md**: Game theory research for multi-agent cooperation, trust scoring, Shapley attribution

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
- **7 core workflows** for end-to-end process orchestration
- **Strategy documents**:
  - Executive Brief (strategic overview)
  - Quick-Start Guide (5-minute activation)
  - Master Strategy (complete operational doctrine)
- **7 workflow playbooks**:
  - Workflow A: Member Onboarding
  - Workflow B: Loan Origination
  - Workflow C: Mortgage Processing
  - Workflow D: Collections & Recovery
  - Workflow E: Deposit Operations
  - Workflow F: Compliance & Examination
  - Workflow G: Annual Strategic Planning
- **Coordination templates**:
  - Agent activation prompts
  - Handoff templates
- **4 scenario runbooks**:
  - NCUA Exam Preparation
  - New Product Launch
  - Merger/Conversion
  - Data Breach Response

### Documentation
- README.md with system overview
- SETUP.md with installation and quick start
- CONTRIBUTING.md for contribution guidelines
- .gitignore for common ignore patterns

---

*Initial release extracted from msitarzewski/Agency-Agents credit-union directory.*