# CANVAS Roadmap

Future work not yet shipped. For shipped changes, see [CHANGELOG.md](CHANGELOG.md).

## Self-Improvement Protocol — Agents that improve the system itself

A set of agents whose job is to analyze, critique, and evolve CANVAS itself across release cycles.

### Shipped: Think Tank Scaffolding

The **Think Tank** is the execution scaffolding within which the Self-Improvement agents below will operate. It provides the recurring 4-phase cycle (Observe → Model → Stress → Extract), the stress catalog, the delta disposition mechanism, and the cycle report format. Shipped in v2.1.0. See [`strategy/think-tank/README.md`](strategy/think-tank/README.md).

**Think Tank scaffolding agents (shipped v2.1.0):**
- **Think Tank Facilitator**: Runs cycles, enforces discipline, produces reports, files dispositions
- **Framework Architect**: Turns breakages into structured Findings and before/after Delta diffs
- **Stress Designer**: Selects stresses from the catalog, parameterizes disruptions, pre-registers predictions

**Think Tank analysis agents (shipped v2.2.0):**
- **Gap Analyst** (`cu-gap-analyst`): Compares Observe target against real-world CU operations and industry benchmarks → *Observe phase, produces Gap Report*
- **Think Tank Intel** (`cu-think-tank-intel`): Surfaces external forces (fintech, peer CU, regulatory) relevant to cycle targets → *Observe + Stress phases, produces Intel Brief. Distinct from the operational `cu-competitive-intelligence` agent*
- **Member Persona** (`cu-member-persona`): Creates and portrays realistic member profiles during Model runs → *Model phase, plays the member in-character with financially consistent profiles and ECOA-protected-class diversity*

### Remaining: Analysis Agents (Not Yet Shipped)

These agents will participate in Think Tank cycles when they ship (3 of original 6 remaining):

- **Retrospective Agent**: Analyzes past simulation runs and generates lessons learned after each release cycle → *will contribute to the Extract phase and cross-cycle pattern analysis*
- **Game Theory Evaluation Agent**: Models incentive structures, catches gaming/exploitation scenarios, validates cooperative alignment → *will contribute to the Stress phase with adversarial stress design*
- **Roadmap Synthesis Agent**: Aggregates insights from all analysis agents and generates prioritized enhancement proposals → *will contribute to deferred-item handling and cross-cycle prioritization*

### Protocol Flow

```
Competitive Intel → Gap Analysis → Roadmap Synthesis → Build → Retrospective → repeat
                          ↕
                    Think Tank Cycle
              (Observe → Model → Stress → Extract)
```

## Process Architecture — Standardized Models for Workflow Governance

CANVAS has working handoff templates, a gate framework with retry and exception paths, a governance matrix, and a workflow simulator. But these exist as conventions rather than formal schemas. Handoff templates are markdown prose — well-structured, but not validated against a shared field set. Gates carry different field subsets across workflows. Regulatory clocks are scattered across `ROUTER.md`, handoff templates, and individual playbooks with no centralized registry. Exception paths exist for two workflows; no standard template governs the remaining fifteen. This section defines the foundational process objects that all workflow-specific artifacts will inherit from, standardize against, and be validated by.

**Guiding principle**: Build process primitives first, then cross-workflow consistency, then workflow-specific refinement. If the primitives are right, the workflows will scale. If the primitives are wrong, inconsistencies get hard-coded and require full rewrites.

### Priority 1 — Process Primitives

These are foundational. Items 1A–1D are independent and can proceed in parallel. Items 1E and 1F have a soft dependency on 1C (Gate Model).

#### 1A. Workflow Blueprint Template

Define a standard template that every workflow playbook (A–Q) conforms to. Currently, playbooks vary in which sections they include — Workflows B and C are the most complete (agent activation, quality gate checklist, step-level matrix, exception paths, degraded-mode completion); most others omit several of these.

The template captures: trigger event, pre-conditions, stage list, step owner (with mode and authority), inputs required, outputs produced, compliance obligations per step, handoff specification, gate criteria and gate keeper, gate decisions (pass / correction-needed / material-finding), exception path references, evidence requirements, escalation chain, and completion definition.

**What already exists**: 17 playbooks in `strategy/playbooks/workflow-{a..q}-*.md` follow an informal shared pattern. The `cu-strategy.md` workflow sections have per-workflow quality gate tables with Criterion | Threshold | Evidence columns. The `workflow-engine.js` WORKFLOWS object defines steps with `name / agentId / mode / authority / description / prompt / handoffTo / gate / complianceFlags`.

**Target artifact**: `strategy/process-architecture/workflow-blueprint-template.md`

**Acceptance criteria**: Template document exists. Each of the 17 playbooks can be scored against it for field completeness (present vs. missing). The template covers all fields present in the most complete playbook (Workflow B) plus: trigger, pre-conditions, stages, step owner, inputs, outputs, compliance obligations, handoff, gate criteria, gate keeper, gate decisions, exception path, evidence, escalation, completion definition. Workflows B and C serve as reference implementations.

#### 1B. Universal Handoff Schema

Formalize the field set that all handoff templates inherit from. The existing 16 templates in `strategy/coordination/handoff-templates.md` are well-structured markdown with Metadata, Member Context, Deliverable Request, and Quality Expectations sections. But they are positioned as peers rather than parent/child, and are not validated against a shared required-field set.

Every handoff should answer: What happened so far? What is known? What remains open? What compliance flags are active? What deadline or clock is active? What evidence is attached? What decision is needed from the receiving agent?

**What already exists**: 16 handoff templates (Template #1 — Standard CANVAS Handoff — is closest to universal). `WorkflowContext.toHandoffContext()` in `simulator/canvas/context.js` serializes a minimal subset: `memberId`, `memberName`, `stepsCompleted`, `stepHistory`, `complianceFlags`, `sharedState`.

**Target artifact**: `strategy/process-architecture/handoff-schema.md`

**Acceptance criteria**: Schema document exists with required vs. optional field designations. Template #1 is elevated to parent schema; Templates 2–16 are annotated as specializations. `toHandoffContext()` output is mapped against the schema with a documented gap list. The schema adds active regulatory clocks, evidence summary, open items, and pending decisions as explicit named sections.

#### 1C. Standard Gate Model

Unify three overlapping gate representations into one standard model:

1. **Engine gates** — `workflow-engine.js` gate objects: `{ name, criteria, critical, escalateTo, authority, type, onFailure, exceptionPath, retryPolicy }`
2. **Playbook gates** — Quality Gate Checklist tables: `# | Criterion | Threshold | Evidence Required | Status`
3. **Framework gates** — `step-matrix-framework.md` Section 8: gate types (Regulatory / Routine), retry policy (0 vs. 1), fallback outcomes (pause / rollback / exception-path)

The unified model includes: gate name, workflow/stage reference, gate type (regulatory / routine), gate keeper (agent + mode + authority), required criteria (list), required evidence per criterion, status per criterion, decision vocabulary (pass / correction-needed / material-finding), remediation requirements on failure, escalation trigger, retry policy, fallback outcome, exception path reference, and timestamp / reviewer fields.

**Target artifact**: `strategy/process-architecture/gate-model.md`

**Acceptance criteria**: Gate model document exists. Every gate in `workflow-engine.js` (11 unique workflow gates, 3 exception gates, 7 final gates) is expressible as a model instance. Every playbook Quality Gate Checklist maps to the model's per-criterion fields. The model is consistent with `step-matrix-framework.md` Section 8. The gate decision taxonomy (pass / correction-needed / material-finding) is standardized — currently only Workflow B uses this three-tier decision.

#### 1D. Regulatory Clock Registry

Centralize all regulatory clocks into a single registry. Currently, deadlines are scattered across at least 6 files: `ROUTER.md`, handoff templates, playbooks, `cu-strategy.md`, `workflow-engine.js` gate criteria, and agent cards.

Each clock entry defines: regulation citation, trigger event, clock duration, calendar vs. business days, owner agent, evidence of satisfaction, escalation threshold (e.g., "at 80% of clock"), and applicable workflows.

**Known clocks** (minimum — registry must capture all references across the codebase):

| Clock | Duration | Day type | Regulation |
|-------|----------|----------|------------|
| Reg E provisional credit | 10 days | Business | 12 CFR 1005.11(c)(2) |
| Reg E final resolution | 45 days | Calendar | 12 CFR 1005.11(c)(1) |
| ECOA adverse action notice | 30 days | Calendar | 12 CFR 1002.9 |
| TRID Closing Disclosure | 3 days | Business | 12 CFR 1026.19(f) |
| BSA/SAR filing | 30 days | Calendar | 31 CFR 1020.320 |
| NCUA breach notification | 72 hours | Clock hours | 12 CFR Part 748 |

**Target artifact**: `strategy/process-architecture/regulatory-clock-registry.md`

**Acceptance criteria**: Registry lists every clock referenced anywhere in the codebase (minimum 6). Each entry has all fields listed above. No regulatory clock mentioned in any playbook, handoff template, or router file is missing from the registry. The clock model is compatible with `WorkflowContext.addComplianceFlag()`.

#### 1E. Standard Exception Object

Define a reusable exception/waiver flow template. Currently, only Workflows B (`exception-underwriting`) and C (`appraisal-exception`) have defined exception paths. The remaining 15 workflows have no standard template for handling gate failures that require remediation rather than outright rejection.

The exception object captures: what was detected (gate finding reference), severity classification (stop / correct / monitor — already used in Compliance Exception Report handoff template #6), compensating factors documented, reviewer assigned, approval authority checked, disposition (approve-with-conditions / require-corrective-action / escalate — already used in Workflow B), and workflow state transition (continues / pauses / escalates).

**What already exists**: 2 exception paths in `workflow-engine.js`. `WorkflowContext` fields `currentExceptionPath` (string) and `failureRecords` (array of `{ gateName, attempts, outcome, details, timestamp }`). `step-matrix-framework.md` Sections 8.3–8.4 (exception path design principles and degraded-mode completion standards).

**Target artifact**: `strategy/process-architecture/exception-object.md`

**Acceptance criteria**: Exception object template exists. The two existing exception paths (B, C) are expressible as instances. The Compliance Exception Report (handoff template #6) is compatible with the severity classification. `failureRecords` in `WorkflowContext` has a documented extension path. At least 3 additional workflows are identified as candidates for exception path definition (e.g., D/Collections — member non-responsive; E/Deposits — Reg E provisional credit denial; H/Fraud — fraud classification reversal).

#### 1F. Evidence Object

Define per-criterion evidence specifications. Quality gate checklists already have an "Evidence Required" column (e.g., "Signed authorization in file", "Completed worksheet with DTI/LTV"), but these are free-text prose without structure.

The evidence object formalizes: evidence type (document, system record, attestation, external confirmation), minimum acceptable proof, producer (which agent creates it), reviewer (which agent validates it), and retention requirement.

**What already exists**: Quality gate "Evidence Required" columns across all 17 workflow sections in `cu-strategy.md` and playbook files. Handoff template "Evidence required" fields. `step-matrix-framework.md` Section 8.4 degraded-mode requirement that "every agent action documented."

**Target artifact**: `strategy/process-architecture/evidence-object.md`

**Acceptance criteria**: Evidence object definition exists with an evidence type taxonomy. At least one workflow's quality gate checklist (Workflow B recommended) is fully mapped to evidence objects showing type, minimum proof, producer, and reviewer for each criterion. The evidence types cover all "Evidence Required" entries in `cu-strategy.md` quality gate tables.

### Priority 2 — Cross-Workflow Vocabulary

Establish shared vocabulary across all 17 workflows. Without consistent terminology, each workflow drifts into its own conventions and cross-workflow handoffs become ambiguous.

**Covers**:

- **Stage names**: application, processing, underwriting, decision, closing, post-close, monitoring
- **Status labels**: `running` / `paused` / `exception-path` / `rolled-back` / `completed` — already defined in `WorkflowContext` but not used consistently in playbook prose
- **Escalation severity classes**: P0 (immediate) / P1 (same-day) / P2 (24-hour) — already used in handoff template #10 but not standardized across workflows
- **Gate decision taxonomy**: pass / correction-needed / material-finding — currently only Workflow B uses this; others use ad hoc pass/fail language
- **Cross-workflow carry-forward fields**: What a downstream workflow inherits from an upstream workflow (e.g., Workflow A CIP status carries into Workflow B; member risk indicators carry across all workflows)

**Depends on**: 1A (Blueprint) + 1C (Gate Model)

**Target artifact**: `strategy/process-architecture/cross-workflow-vocabulary.md`

**Acceptance criteria**: Vocabulary document exists. Each term has: definition, usage context, and which workflows currently use it vs. which should adopt it. Inconsistencies across workflows are identified with resolution recommendations.

### Priority 3 — Workflow Decomposition

Using the standard schemas from Priority 1, decompose each workflow into four parallel views:

1. **Information flow** — what data moves between agents, what inputs/outputs each step requires
2. **Compliance flow** — which regulatory obligations apply at each step, what clocks start, what must be blocked until satisfied
3. **Gate flow** — where gates sit, what they check, what evidence they require, what happens on failure
4. **Governance flow** — who owns each step, who reviews, who can override, who must be informed

Additionally, model **hard-stop conditions** explicitly per workflow (e.g., onboarding: CIP not complete; lending: no credit authorization; mortgage: TRID timing violation) and separate **operational action** from **compliance validation** from **gate decision** at every step.

**Order** (highest compliance density first): A (Onboarding), B (Loan Origination), C (Mortgage), E (Deposit Operations), F (Compliance & Examination)

**Depends on**: All of Priority 1 + Priority 2

**Target artifacts**: `strategy/process-architecture/workflows/workflow-{a,b,c,e,f}-decomposition.md`

**Acceptance criteria**: Decomposition exists for at least Workflows A, B, C. Each decomposition has all four views. Hard-stop conditions are explicitly listed per workflow. Every step is classified as operational action, compliance validation, or gate decision.

### Dependency Map

```
1C (Gate Model) ─────────────────────┐
1A (Blueprint)  ──┐                  │
1B (Handoff)    ──┼─► P2 (Vocab) ───►│
1D (Clocks)     ──┘                  ├─► P3 (Decomposition)
1E (Exception)  ─► depends on 1C ───►│
1F (Evidence)   ─► depends on 1C ───►┘

Existing roadmap dependencies:
  Cross-Workflow Gate Audit ← benefits from 1C + 1D
  Initial Alignment Pass   ← benefits from 1A
```

### Relationship to Existing Roadmap Sections

**Cross-Workflow Alternate Gate Audit**: The gate audit is more effective when conducted against the Standard Gate Model (1C). The audit can verify not just "is there an alternate gate agent" but "does each gate conform to the standard model." The audit should proceed after the gate model is defined, or in parallel with the understanding that findings may require re-evaluation.

**Initial Alignment Pass**: Gap findings from Phase 1 are more actionable when measured against the Workflow Blueprint Template (1A): "Workflow X is missing fields Y and Z from the standard blueprint." Phase 2 updates can be expressed as "bring Workflow X into compliance with schemas 1A–1F." The two workstreams can overlap by cluster — process primitives don't block the alignment pass from starting.

**Self-Improvement Protocol**: No blocking dependency. Think Tank agents will benefit from formal schemas once they ship (e.g., Retrospective Agent analyzing exception path usage across simulation runs; Game Theory Agent stress-testing incentive structures within the gate model).

## Cross-Workflow Alternate Gate Audit

Review every Gate cell across all 17 workflow Step-Level Matrices (A–Q). For each Gate, either name an alternate Gate agent who holds the same authority lane, or document the step as a known single point of failure. Triggered by Think Tank cycle-0001 Finding F01 (Delta DD-0001-04).

**Acceptance criteria**: Every Gate cell across all 17 playbooks either names an alternate or documents SPOF status per the Alternate Gate Agent convention added to `strategy/step-matrix-framework.md` in DD-0001-01.

## Standing Reports — Decoupled Gap and Intel Cadence

Gap Analyst and Think Tank Intel have meaningfully different refresh rates from the full Think Tank cycle (one per release). External forces change monthly; industry benchmarks shift quarterly. Waiting for a full cycle to commission research wastes time and produces stale Observe phases.

**Proposal**: Both agents produce **standing reports** that exist as living documents, refreshed on their own cadence. When a Think Tank cycle kicks off, the Facilitator pulls the latest reports rather than commissioning them from scratch.

**Intel Brief cadence**: Monthly. External forces (fintech launches, regulatory signals, peer CU incidents) move too fast for per-release research. A standing monthly brief accumulates intelligence that any cycle can reference.

**Gap Report cadence**: Quarterly or per-release. Industry benchmarks (NCUA exam priorities, CUNA/NAFCU data, peer CU practices) shift on a slower cycle. Standing gap reports per workflow area, updated when new benchmarks publish.

**Artifact structure**: `strategy/think-tank/intel/` and `strategy/think-tank/gaps/` directories, with timestamped standing reports and a review/disposition log for each item.

**Benefits**: Continuous intelligence gathering between cycles; faster cycle startup (Observe phase already has context); historical record of how external forces and benchmark gaps evolved; option to trigger out-of-rotation cycles when intel surfaces something urgent.

**Acceptance criteria**: Directory structure, standing report templates, and a review/disposition schema for individual gap and intel items so that findings can be triaged, recommended, and tracked through to action — independently of whether a full Think Tank cycle runs.

## Initial Alignment Pass — Full-Scope Gap and Intel Baseline

Before the standing-report cadence begins, CANVAS needs an initial alignment pass: a comprehensive first run of Gap Analyst and Think Tank Intel across all 17 workflows to establish where the framework stands against industry reality. This is the "day zero" baseline that all future gap reports and intel briefs build on.

### Three-Phase Execution

**Phase 1 — Collect: Intel + Gap baseline from regulatory sources**
Gather initial base filings from NCUA (Letters to Credit Unions, Supervisory Priorities, Examiner's Guide updates), CFPB (Supervisory Highlights, enforcement actions, rulemaking), FFIEC (cybersecurity guidance, BSA/AML manual), and state regulators. Run Gap Analyst and Think Tank Intel against all 17 workflows using these sources. Produce standing Gap Reports and Intel Briefs per cluster. Triage each finding through the disposition schema. This phase is *collection and triage only* — no framework changes yet.

**Phase 2 — Update: Use findings to guide base framework updates**
The stories and items from Phase 1 become the guidance for the next round of base updates. Items dispositioned as `incorporated` are applied to playbooks, agent cards, runbooks, and the step-matrix. Items dispositioned as `deferred-to-cycle` are queued for Phase 3. Items in `monitoring` stay on the standing reports for future review. This phase produces the structural changes that close the gaps Phase 1 identified.

**Phase 3 — Validate: Full Think Tank cycle run across all workflows**
With the framework updated from Phase 2, run full Think Tank cycles (Observe → Model → Stress → Extract) across all 17 workflows to validate that the base updates hold under stress and that no new structural gaps were introduced. This is the "stress test the fixes" phase.

### Scope (Phase 1)

1. **Gap Analysis across all 17 workflows (A–Q)**: For each workflow, compare the playbook's structure (steps, gates, handoffs, exception paths, authority lanes) against real-world CU operations, NCUA examination expectations, and industry benchmarks. Produce a standing Gap Report per workflow or per workflow cluster.

2. **Intel scan across major CU function areas**: Surface current external forces (fintech, regulatory, peer CU, incidents) relevant to each functional area — lending, compliance, operations, IT, strategic. Produce an initial standing Intel Brief per functional area.

3. **Initial triage**: For each gap and intel item identified, apply the review/disposition schema from `strategy/think-tank/methodology.md` (incorporated / deferred-to-cycle / monitoring / dismissed). This produces the first populated item log.

4. **Directory structure**: Create `strategy/think-tank/gaps/` and `strategy/think-tank/intel/` with the standing reports and item logs.

### Source agencies for Phase 1

| Agency | Key sources | Relevance |
|--------|-----------|-----------|
| **NCUA** | Letters to Credit Unions, Supervisory Priorities, Examiner's Guide, Call Report data | Direct regulator — examination expectations, compliance requirements, peer benchmarks |
| **CFPB** | Supervisory Highlights, enforcement actions, proposed/final rules, compliance bulletins | Consumer compliance — fair lending, TILA/TRID, UDAAP, Reg E, Section 1033 |
| **FFIEC** | Cybersecurity Assessment Tool (CAT), BSA/AML Manual, IT Examination Handbook | IT security, BSA/AML, information security governance |
| **FinCEN** | Advisories, SAR/CTR guidance, beneficial ownership rules | BSA/AML compliance, transaction monitoring |
| **State regulators** | State-specific guidance (varies by charter state) | State consumer protection, data privacy, lending regulations |

### Workflow clusters

| Cluster | Workflows | Primary benchmarks |
|---------|-----------|-------------------|
| **Lending** | B, C, D | NCUA Examiner's Guide Ch. 10; CFPB fair lending; CUNA lending benchmarks |
| **Member services** | A, P | NCUA CIP/BSA; CFPB consumer compliance; digital channel benchmarks |
| **Compliance & risk** | F, K, H | NCUA exam process; BSA/AML guidance; Reg E/fraud benchmarks |
| **Operations** | E, I, N | Deposit operations; card network rules; branch benchmarks |
| **Strategic & IT** | G, J, L, M, O, Q | Strategic planning; cybersecurity (FFIEC CAT); vendor management; M&A; core conversion |

### Expected output (Phase 1)

- 17 standing Gap Reports (or 5 cluster-level reports with per-workflow sections)
- 5 standing Intel Briefs (one per cluster)
- An initial item log with 50–100+ items triaged through the disposition schema
- A prioritized list of items recommended for immediate incorporation (Phase 2) vs. deferred-to-cycle (Phase 3) vs. monitoring

### Execution notes

- Phase 1 is a multi-session effort. A single session should target one cluster at a time.
- The Lending cluster (B, C, D) is the natural starting point — Workflow B already has cycle-0001 findings and a dry-run Gap Report to build on.
- Each cluster produces committable artifacts that don't depend on other clusters completing first.
- Phase 2 (base updates) can begin on completed clusters while Phase 1 continues on remaining clusters — the phases can overlap by cluster.
- Phase 3 (full cycle runs) waits until Phase 2 is complete for the target workflow — don't stress-test a workflow that hasn't been updated yet.

---

## Known drift and editorial decisions

Items surfaced during the April 2026 overnight cleanup pass.
Resolved in `claude/resolve-drift-items` branch (April 2026).

| Item | Resolution |
|---|---|
| Functional-area taxonomy (10 vs 12) | Aligned EXECUTIVE-BRIEF.md to cu-strategy.md's 10 areas |
| Workflow name inconsistency (C, E, F) | Propagated engine long form across all docs and playbooks |
| H–K predefined scenarios missing | Added fraud-dispute, card-fraud-alert, ransomware-incident, structuring-alert |
| H–K workflow detail prose in simulator/README | Replaced footnote with full step-by-step walkthroughs |
| README.md runbook summary wording | Updated to cover all 10 runbook categories |

### Remaining (deferred)

**LLM client API-key format warning** — `simulator/canvas/llm.js:13`
warns on API keys not starting with `sk-`, which false-positives for
local-model setups via `OPENAI_BASE_URL`. Low impact (Anthropic keys
pass; only local-model users see the warning). Could be scoped to the
default `api.openai.com` base URL if it becomes a real friction point.
