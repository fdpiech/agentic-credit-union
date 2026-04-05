# CANVAS Simulator

CLI tool for running credit union workflow simulations. Orchestrates 35 AI agents across 7 workflows with mock and live LLM modes.

## Quick Start

```bash
cd simulator
npm install

# Run with mock responses (no API key needed)
node simulator.js --mock --workflow A

# Run with a live LLM
export OPENAI_API_KEY=sk-your-key
node simulator.js --workflow A
```

That's it. You should see a color-coded simulation of a member onboarding workflow with agent handoffs and compliance gates.

## Requirements

- **Node.js** 18+ (ESM support required)
- **npm** (for dependency installation)
- **OpenAI API key** (only for live mode — mock mode works without one)

## Installation

```bash
git clone https://github.com/fdpiech/agentic-credit-union.git
cd agentic-credit-union/simulator
npm install
```

The only dependency is [`yaml`](https://www.npmjs.com/package/yaml) for parsing agent definition files.

## Usage

```
node simulator.js [options]
```

### Options

| Flag | Short | Description |
|------|-------|-------------|
| `--workflow <A\|B\|C\|D\|E\|F\|G>` | `-w` | Run a specific workflow |
| `--scenario <name>` | `-s` | Use a predefined scenario |
| `--mock` | `-m` | Run in mock mode (no API key needed) |
| `--list` | `-l` | List available workflows and scenarios |
| `--help` | `-h` | Show help |

### Examples

```bash
# List all available workflows
node simulator.js --list

# Run member onboarding in mock mode
node simulator.js --mock --workflow A

# Run loan origination
node simulator.js --mock --workflow B

# Run all workflows sequentially (quick smoke test)
for w in A B C D E F G; do
  echo "=== Workflow $w ==="
  node simulator.js --mock --workflow $w 2>&1 | tail -12
done
```

## Workflows

| ID | Name | Agents | Steps | Description |
|----|------|--------|-------|-------------|
| **A** | Member Onboarding & CIP | 5 | 6 | New member enrollment with BSA/CIP compliance, account opening, needs discovery |
| **B** | Loan Origination | 5 | 6 | Auto loan application through post-close quality review |
| **C** | Mortgage Processing | 5 | 6 | Mortgage application, TRID compliance, closing disclosure |
| **D** | Collections & Recovery | 5 | 5 | Early delinquency intervention through financial hardship resolution |
| **E** | Deposit Operations | 4 | 4 | Deposit disputes, Reg E handling, operational resolution |
| **F** | Compliance & Examination | 5 | 5 | NCUA exam preparation, BSA testing, board briefing |
| **G** | Annual Strategic Planning | 5 | 5 | Environmental scan, financial feasibility, budget, board presentation |

### Workflow Details

**Workflow A — Member Onboarding & CIP**
1. Initial Contact & Eligibility (Member Services Rep)
2. CIP/BSA Verification (BSA Officer)
3. Account Opening & Disclosures (Member Services Rep)
4. Needs Discovery (Financial Advisor)
5. Cross-Sell & Welcome Sequence (Marketing Manager)
6. Quality Gate — Compliance Verification (Compliance Officer)

**Workflow B — Loan Origination**
1. Application & Pre-Qualification (Loan Officer)
2. Credit & Income Verification (Underwriter)
3. Loan Analysis & Decision (Underwriter)
4. Pre-Decision Compliance Review (Compliance Officer)
5. Decision Communication (Loan Officer)
6. Post-Close Quality Review (Internal Auditor)

**Workflow C — Mortgage Processing**
1. Application & Loan Estimate (Mortgage Loan Officer)
2. Document Collection & Processing (Mortgage Loan Processor)
3. Underwriting Decision (Underwriter)
4. Closing Disclosure Preparation (Closing Coordinator)
5. Closing & Funding (Closing Coordinator)
6. TRID Compliance Gate (Compliance Officer)

**Workflow D — Collections & Recovery**
1. Early Delinquency Detection (Collections Specialist)
2. Member Outreach & Contact (Collections Specialist)
3. Hardship Assessment (Financial Advisor)
4. Payment Arrangement & Compliance (Collections Specialist)
5. Resolution Gate (Compliance Officer)

**Workflow E — Deposit Operations**
1. Dispute Intake & Documentation (Deposit Operations Manager)
2. Investigation & Research (IT Systems / Core Systems)
3. Resolution & Member Communication (Deposit Operations Manager)
4. Reg E Compliance Gate (Compliance Officer)

**Workflow F — Compliance & Examination**
1. Exam Preparation & Document Assembly (Compliance Officer)
2. BSA/AML Independent Testing (BSA Officer)
3. Fair Lending Analysis (Compliance Officer)
4. Corrective Action Tracking (Internal Auditor)
5. Board Compliance Briefing (CEO)

**Workflow G — Annual Strategic Planning**
1. Environmental Scan (CEO)
2. Financial Feasibility & Budget (CFO)
3. Board Strategic Presentation (CEO)
4. Risk Assessment & Approval (Risk Manager)
5. Implementation Planning Gate (Compliance Officer)

## Modes

### Mock Mode (`--mock`)

Uses hardcoded responses for each workflow step. No API key required. Good for:
- Testing the simulator without API costs
- Demonstrating workflow structure and agent handoffs
- Training staff on credit union processes
- Development and debugging

Mock responses are contextually distinct per step — they contain realistic credit union scenarios including BSA/CIP verification, loan underwriting worksheets, compliance gates, and more.

### Live Mode (default)

Sends real prompts to an OpenAI-compatible API. Requires `OPENAI_API_KEY`. Good for:
- Testing how LLMs handle credit union compliance scenarios
- Evaluating agent coordination quality
- Generating novel workflow variations

#### Configuration

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `OPENAI_API_KEY` | (required) | API key for the LLM provider |
| `OPENAI_BASE_URL` | `https://api.openai.com/v1` | Base URL for OpenAI-compatible API |
| `CANVAS_MODEL` | `gpt-4o-mini` | Model to use for live mode |

```bash
# Use with OpenAI
export OPENAI_API_KEY=sk-your-key
node simulator.js --workflow A

# Use with a different provider
export OPENAI_API_KEY=your-key
export OPENAI_BASE_URL=https://api.anthropic.com/v1
export CANVAS_MODEL=claude-sonnet-4-20250514
node simulator.js --workflow A

# Use with a local model
export OPENAI_BASE_URL=http://localhost:11434/v1
export CANVAS_MODEL=llama3
node simulator.js --workflow A
```

## Architecture

```
simulator/
├── simulator.js              # CLI entry point, argument parsing, display
├── canvas/
│   ├── workflow-engine.js    # Workflow execution, step sequencing, gate evaluation
│   ├── llm.js                # LLM client (OpenAI-compatible) with mock fallback
│   ├── agent-loader.js       # Loads agent definitions from ../agents/*.md
│   ├── context.js            # Workflow context and state tracking
│   └── display.js            # Color-coded terminal output formatting
├── package.json
└── .gitignore
```

### How It Works

1. **Load agents** — Reads `../agents/cu-*.md` files (YAML frontmatter + markdown body)
2. **Parse workflow** — Selects a workflow definition (A–G) with ordered steps
3. **Execute steps** — Each step calls an agent with context from previous steps
4. **Evaluate gates** — Compliance/quality gates check workflow state between steps
5. **Display results** — Color-coded output with handoff visualization

## Agent Definitions

The simulator loads agent definitions from `../agents/`. Each agent is a markdown file with YAML frontmatter:

```markdown
---
name: Compliance Officer
role: Chief Compliance Officer
department: Compliance
color: red
---

## Your Core Mission
Ensure all credit union operations comply with federal and state regulations...
```

The simulator extracts key sections:
- **Identity** — Agent role and background
- **Mission** — Primary responsibilities
- **Rules** — Compliance and operational rules
- **Deliverables** — Expected outputs per workflow

## Compliance Gates

Quality gates are evaluated between workflow steps. In mock mode, gates pass if all prior steps completed without errors. In live mode, the LLM evaluates gate criteria against the workflow context.

**Gate evaluation fails closed** — if the gate cannot be evaluated (parse error, missing data), it defaults to `FAIL` and requires manual review. This ensures compliance workflows never advance on uncertainty.

## Exit Codes

| Code | Meaning |
|------|---------|
| `0` | Workflow completed successfully |
| `1` | Workflow failed or blocked (gate failure, step error, or missing CLI args) |
| `2` | Fatal error (unhandled exception) |

## Troubleshooting

**`Error: Cannot find package 'yaml'`**
```bash
cd simulator && npm install
```

**`Error: OPENAI_API_KEY not set`**
```bash
# Use mock mode instead
node simulator.js --mock --workflow A
```

**`Error: Agent not found`**
Make sure you're running from the `simulator/` directory. The agent loader looks for `../agents/cu-*.md`.

**Timeout on LLM calls**
Live mode has a 30-second timeout per request. If the API is slow, the simulator will retry 3 times with exponential backoff (1s, 2s, 4s). Check your `OPENAI_BASE_URL` is correct.

## License

See [LICENSE](../LICENSE) in the repository root.
