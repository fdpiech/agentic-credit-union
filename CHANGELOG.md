# Changelog

All notable changes to CANVAS (Credit Union Agent Network for Value, Advice, and Service) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Roadmap and future work: see [ROADMAP.md](ROADMAP.md).

## [2.3.0] - 2026-04-12

### Added

**Initial Alignment Pass — first real-world run of the Think Tank standing-report process.** Think Tank Intel collected 25 external forces from NCUA, CFPB, FFIEC, FinCEN, fintech, and industry sources across Jan 2025 – Apr 2026, triaged them chronologically through the disposition schema, and applied the first round of framework updates.

- `strategy/think-tank/intel/standing-intel-brief-2025-2026.md` — Standing Intel Brief: 25 items across 6 force categories (NCUA regulatory, CFPB/deregulation, FFIEC/FinCEN, fraud/cyber, fintech/peer CU, structural industry), with stress catalog cross-reference, 4 potential new catalog entries identified, and noise-filtered section
- `strategy/think-tank/intel/item-log-2025-2026.md` — Item log with full chronological triage (Q1 2025 → Q1 2026), management layer (incorporate work queue, cycle planning queue, monitoring register with triggers and review dates), and period-to-period cadence (monthly → quarterly → per-release → yearly)
- `strategy/think-tank/gaps/` — Directory scaffold for future standing Gap Reports
- `strategy/think-tank/methodology.md` — Added standing report item review/disposition schema (incorporated / deferred-to-cycle / monitoring / dismissed) with item template, reviewer routing, and connection to Think Tank cycles

### Changed

**5 playbook updates from intel triage** — direct incorporations from the standing Intel Brief:

- `strategy/playbooks/workflow-b-loan-origination.md` — Fair lending exam scope narrowed to disparate treatment only (NCUA Letter 25-CU-04); ECOA/FHA statutory protections noted
- `strategy/playbooks/workflow-c-mortgage-processing.md` — Fair lending scope updated; CFPB mortgage fraud supervision note added (continues during broader curtailment)
- `strategy/playbooks/workflow-f-compliance-examination.md` — Exam scope notes added: reputation risk eliminated (Letter 25-CU-05), disparate impact removed from exam scope, fraud prevention added as standalone 2026 supervisory priority (Letter 26-CU-01)
- `strategy/playbooks/workflow-h-fraud-dispute.md` — CFPB depository fraud supervision note added
- `strategy/playbooks/workflow-a-member-onboarding.md` — Beneficial ownership verification updated per FinCEN Exceptive Order (Feb 2026): first account only, not each subsequent
- `strategy/playbooks/workflow-k-bsa-aml.md` — Beneficial ownership EDD section updated with FinCEN relief
- `ROADMAP.md` — Added 3-phase Initial Alignment Pass (Collect → Update → Validate), standing-report cadence concept, source agency table, workflow clustering
- `strategy/think-tank/README.md` — Added standing reports section with links to intel/ and gaps/ directories

### Triage Results Summary

| Disposition | Count | Description |
|-------------|-------|-------------|
| **incorporate** | 5 | Applied to 7 playbook files in this release |
| **defer-to-cycle** | 11 | Queued for Think Tank cycles (Workflows H, B, D/E, J/M, K, O, Q) |
| **monitoring** | 8 | Tracked with triggers and review dates |
| **dismiss** | 1 | Investment Adviser AML delay — low CU relevance |

---
## [2.2.0] - 2026-04-12

### Added

**3 Think Tank analysis agents** (38 agents total), expanding the self-improvement cycle with Observe-phase benchmarking, external intelligence, and in-character member role-play:

- `agents/cu-gap-analyst.md` — Compares Observe targets against real-world CU operations, industry benchmarks (NCUA, CUNA/NAFCU), and regulatory expectations. Produces evidence-based Gap Reports in the Observe phase. Looks outward (industry reality) before stress is applied.
- `agents/cu-think-tank-intel.md` — Surfaces external forces (fintech disruptions, peer CU innovations, regulatory signals, industry incidents) relevant to cycle targets. Produces Intel Briefs that inform stress selection. Distinct from the operational `cu-competitive-intelligence` agent.
- `agents/cu-member-persona.md` — Creates and portrays realistic member profiles during Model phases. Responds in-character at interaction steps with financially consistent profiles and behavioral realism. Ensures ECOA-protected-class diversity for fair lending coverage. References the 5 existing simulator personas.

### Changed

- `strategy/think-tank/methodology.md` — Updated ROADMAP relationship table; Observe phase now includes Gap Report and Intel Brief; Model phase now includes Member Persona role-play
- `strategy/runbooks/scenario-think-tank-cycle.md` — Added 3 new agents to roster; added Phase 1b (concurrent Gap Analysis and Intel Brief); added Member Persona to Model phases; updated Stress Designer input
- `strategy/think-tank/README.md` — Added 3 new agents to quick-links table
- `agents/cu-think-tank-facilitator.md` — Updated ROADMAP integration section: 3 agents now shipped, 3 remaining
- `README.md` — Agent count 35 → 38; Think Tank row updated to 6 agents
- `ROADMAP.md` — Gap Analysis, Competitive Intel, and Member Persona moved from "Not Yet Shipped" to "Shipped"; 3 remaining (Retrospective, Game Theory Evaluation, Roadmap Synthesis)

---

## [2.1.0] - 2026-04-12

### Added

**Think Tank — a recurring self-improvement cycle that stress-tests CANVAS against real CU processes and feeds structural breakages back as framework improvements.**

- **3 new agents** (35 total):
  - `agents/cu-think-tank-facilitator.md` — Runs cycles, enforces discipline, produces reports, files delta dispositions
  - `agents/cu-framework-architect.md` — Turns breakages into structured Findings and before/after Delta diffs against specific files
  - `agents/cu-stress-designer.md` — Selects and parameterizes stresses from the catalog, pre-registers predicted pressure points

- **Think Tank methodology and infrastructure** (`strategy/think-tank/`):
  - `methodology.md` — 4-phase cycle protocol (Observe → Model → Stress → Extract), cadence, ownership, delta disposition mechanism, 9 named anti-patterns
  - `stress-catalog.md` — 12 parameterized disruptions (rate shock up/down, delinquency spike, new regulation, core/card outage, vendor failure, key-staff departure, liquidity crisis, member run, fraud wave, exam finding) with strict entry schema and workflow pressure-point cross-reference
  - `ledger.md` — Cycle rotation tracker and historical index
  - `README.md` — Index linking all Think Tank artifacts across canonical locations

- **Think Tank cycle runbook** (`strategy/runbooks/scenario-think-tank-cycle.md`):
  - Executable activation prompt and phase-by-phase protocol, mirroring the existing runbook format
  - Agent roster, quality gate checklist (12 criteria), delta disposition template

- **Worked example: Cycle 0001 — Loan Origination** (`strategy/think-tank/cycles/cycle-0001-loan-origination.md`):
  - Complete 4-phase cycle against Workflow B with two stresses: ST-01 Rate Shock Up (+200 bps / 60 days) and ST-08 Key-Staff Departure (Compliance Officer, 0-day notice)
  - 5 breakages surfaced, 4 Findings classified (3 structural gaps + 1 operator error dismissed)
  - 3 merged Deltas: Alternate Gate Agent field added to step-matrix framework, alternate gates named for Workflow B Steps 3 and 6, `exception-compliance-vacancy` path added
  - 1 deferred ROADMAP item: Cross-Workflow Alternate Gate Audit across all 17 playbooks

### Changed

- `README.md` — Agent count updated 32 → 35; Think Tank agents added to agent table; directory tree updated; Think Tank added to overview and resources
- `ROADMAP.md` — Self-Improvement Protocol restructured: shipped scaffolding (Think Tank) distinguished from remaining analysis agents; Cross-Workflow Alternate Gate Audit added as a new ROADMAP item from cycle-0001

---

## [2.0.0] - 2026-04-10

Cumulative milestone release consolidating all 1.x work. CANVAS is now a complete multi-agent operating model for a mid-size credit union, with explicit governance, first-class failure handling, and a scenario runbook library.

### Highlights since 1.0.0

- **32 AI agents** across Executive, Lending, Member Services, Risk & Compliance, Operations, and IT (up from 24, then rationalized from 35 → 32)
- **17 workflow playbooks** (A–Q) covering member onboarding, consumer and mortgage lending, collections, deposits, compliance, strategic planning, fraud detection, card services, IT security, BSA/AML, product launch, vendor management, branch operations, M&A, financial wellness, and core conversion (up from 7)
- **10 scenario runbooks**: NCUA Exam, New Product Launch, Merger/Conversion, Data Breach Response, Fed Rate Change (Cascade Fan-Out), Natural Disaster Response (Macro/Micro Split), Liquidity Crisis (Adaptive Threshold Response), Vendor Due Diligence (Scoring Convergence Funnel), Vendor Onboarding (External Dependency Chain), Internal Fraud Investigation (Parallel Track with Sealed Handoff)
- **Step-level governance matrix** on every workflow step: explicit mode (`execute` / `advise` / `gate`) × decision authority (`operational` / `credit-financial` / `compliance-regulatory` / `escalation`)
- **Decision authority lanes** baked into every agent personality and handoff template, with explicit out-of-lane scope
- **First-class failure handling** in the workflow engine: retry policies, fallback outcomes, named exception paths, and status/rollback tracking
- **Sharpened compliance boundaries**: three lines of defense, front/back-office deposit split, explicit branch authority limits
- **CLI simulator** with mock and live-LLM modes covering workflows A–K, including exception-path scenarios (low appraisal, loan doc exception)
- **Router, strategy doctrine, executive brief, quickstart, handoff templates, and activation prompts** all kept in sync

### Simulator

- `simulator/package.json`: bumped to `2.0.0`
- `simulator/package-lock.json`: bumped to `2.0.0`

### Notes

This release renumbers prior 2.x changelog entries as 1.x. The previously documented 2.0.1 is now 1.1.0, and 2.1.0 is now 1.2.0. No code was reverted — the renumbering reclassifies the release history so the 2.0.0 milestone reflects the full cumulative scope since 1.0.0.

---

## [1.7.0] - 2026-04-10

### Added

**Six new CANVAS scenario runbooks**, each illustrating a distinct multi-agent coordination pattern:

- **`strategy/runbooks/scenario-fed-rate-change.md`** — Fed Rate Change Response (Cascade Fan-Out pattern): CFO broadcast triggers parallel repricing analysis across deposit, lending, ALCO, and treasury teams
- **`strategy/runbooks/scenario-natural-disaster-response.md`** — Natural Disaster Response (Macro/Micro Split pattern): Crisis command splits into macro (continuity, liquidity, vendor) and micro (member outreach, branch ops, claims) tracks
- **`strategy/runbooks/scenario-liquidity-crisis.md`** — Liquidity Crisis (Adaptive Threshold Response pattern): ALCO thresholds drive escalating response tiers with CFO gates at each level
- **`strategy/runbooks/scenario-vendor-due-diligence.md`** — Vendor Due Diligence (Scoring Convergence Funnel pattern): Parallel scoring tracks (security, financial, operational, compliance) converge to a single vendor risk rating
- **`strategy/runbooks/scenario-vendor-onboarding.md`** — Vendor Onboarding (External Dependency Chain pattern): Sequential gates across contracts, IT integration, compliance review, and go-live readiness
- **`strategy/runbooks/scenario-internal-fraud-investigation.md`** — Internal Fraud Investigation (Parallel Track with Sealed Handoff): Track A (HR/Legal) and Track B (Internal Audit / Fraud Analyst) run in parallel with sealed evidence handoff, CEO-only escalation, and regulatory reporting gates

---

## [1.6.0] - 2026-04-09

### Added

**Decision authority lanes on all agent personalities and handoff templates.**

- Each of the 31 active agent files gains a `## Your Decision Authority` section stating:
  - Which authority lane(s) the agent holds (Operational / Credit-Financial / Compliance-Regulatory / Escalation), with a description of what that covers for their specific role
  - What the agent does NOT decide, with role-specific out-of-lane scope (e.g., "You do not make credit decisions" for Compliance Officer; "You do not make compliance determinations — that requires a Compliance/Regulatory Gate" for Loan Officer)
- Standard CANVAS Handoff template (#1) gains five new metadata fields: Sender Mode, Sender Decision Authority, Receiver Mode, Receiver Decision Authority, Receiver Out-of-Lane Scope
- Handoff templates #2–16 each gain a Decision Authority Context block pre-filled with mode and authority for the specific agents involved, stating what the receiving agent does NOT decide in that handoff

---

## [1.5.0] - 2026-04-09

### Added

**First-class failure handling in the workflow engine.** Three things were previously missing: a retry policy per gate, a concrete fallback outcome when retries are exhausted, and named exception paths for predictable failure scenarios. Failure was logged but the workflow continued regardless.

- **Retry policy per gate**: regulatory gates = 0 retries, routine gates = 1, overridable via `retryPolicy.maxRetries`
- **Fallback outcomes** when retries are exhausted: `pause`, `rollback`, or named `exception-path`
- **Named exception paths** that reuse the execution engine with full context (`exception-underwriting`, `appraisal-exception`)
- **Workflow status tracking**: `running` | `paused` | `exception-path` | `rolled-back` | `completed`
- **Failure records** and current exception path tracked in context
- **Exception-path scenarios** added to Workflow B (curable vs. uncurable loan doc deficiencies) and Workflow C (low appraisal, with four disposition options and TRID Changed Circumstance guidance)
- **Simulator scenarios**: `low-appraisal` and `loan-doc-exception` for mock-mode testing with `forceFail` gate overrides
- **`strategy/step-matrix-framework.md` Section 8** — Failure Handling Protocol (gate types, retry policy, fallback outcomes, exception paths, degraded-mode completion standard)

### Changed

- `simulator/canvas/workflow-engine.js`: added `evaluateGateWithRetry()`, extracted `executeSteps()`, escalation on gate failure, `forceFail` for scenario testing
- `simulator/canvas/context.js`: added `status` field, `failureRecords` array, `currentExceptionPath`, `setStatus()`, `addFailureRecord()`, `setCurrentExceptionPath()`
- `simulator/canvas/display.js`: added `gateRetry()`, `exceptionBranch()`, `workflowPaused()`, `workflowRollback()`; `summary()` now renders status and exception path

---

## [1.4.0] - 2026-04-09

### Added

**Step-level governance matrix on all 17 CANVAS workflows.**

Every workflow step now explicitly declares, per agent, a two-dimensional governance contract that was previously implicit in narrative playbooks:

- **Mode** (mutually exclusive per agent per step): `execute` | `advise` | `gate`
- **Decision Authority** (1–2 lanes per agent): `operational` | `credit-financial` | `compliance-regulatory` | `escalation`

### New files and updates

- **`strategy/step-matrix-framework.md`** (NEW): master reference defining both dimensions, authority assignments for all 35 agents, interaction rules, and conflict resolution protocol
- **`## Step-Level Matrix` table** added to all 17 playbooks (`workflow-a` through `workflow-q`)
- **`simulator/canvas/workflow-engine.js`**: added `mode`, `authority`, and `advisors[]` fields to all step definitions in Workflows A–K; added `authority` field to gate objects; added explicit gate objects to B-3 (Pre-Decision Compliance) and C-3 (TRID Loan Estimate Check) where veto authority existed implicitly but was not modeled

No behavioral changes to `WorkflowEngine` execution logic — the new fields are governance metadata consumed by operators and documentation.

---

## [1.3.0] - 2026-04-09

### Changed

**Sharpened agent boundaries: compliance lines of defense, deposit front/back-office split, branch authority limits.**

- **Compliance Officer** (`agents/cu-compliance-officer.md`): first/second-line testing framing; explicit Compliance/Regulatory decision authority; CO leads management response to Internal Audit findings
- **Internal Auditor** (`agents/cu-internal-auditor.md`): third-line framing; Compliance Management System as an explicit audit area; explicit rule that IA reports findings but does not make compliance determinations — management decides the response
- **Deposit Operations Manager** (`agents/cu-deposit-operations-manager.md`): back-office identity; Reg CC and Reg E resolution as DOM Compliance/Regulatory authority; Reg E dispute resolution workflow added; clarified that MSR does intake, DOM owns resolution
- **Member Services Representative** (`agents/cu-member-services-representative.md`): Reg E intake-only rule; Reg CC hold decisions belong to DOM; intake boundary added to Support Branch Operations section
- **Branch Manager** (`agents/cu-branch-manager.md`): compliance section reframed as operational implementation; Authority Limits section added with explicit no-credit-decisions, no-compliance-rulings, no-rate-setting rules

---

## [1.2.0] - 2026-04-09

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
- `strategy/cu-strategy.md`: all agent tables, workflow tables, coordination matrix, and activation triggers updated
- `strategy/coordination/agent-activation-prompts.md`: merged agent prompts removed; surviving agent prompts expanded with absorbed responsibilities
- `strategy/playbooks/workflow-p-financial-wellness.md`: all Financial Wellness Advisor references updated to Financial Advisor
- `strategy/EXECUTIVE-BRIEF.md`, `README.md`, `strategy/QUICKSTART.md`: agent count updated to 32

---

## [1.1.0] - 2026-04-05

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
