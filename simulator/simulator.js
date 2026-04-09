#!/usr/bin/env node

import { loadAllAgents } from './canvas/agent-loader.js';
import { LLMClient } from './canvas/llm.js';
import { WorkflowEngine, WORKFLOWS } from './canvas/workflow-engine.js';
import * as display from './canvas/display.js';

// ═══════════════════════════════════════════════════════════════
// SCENARIO DEFINITIONS
// ═══════════════════════════════════════════════════════════════

const SCENARIOS = {
  'new-member': {
    name: 'New Member Onboarding',
    workflow: 'A',
    member: {
      id: 'MBR-2026-00847',
      name: 'Maria Santos',
      age: 28,
      eligibility: 'Employee of Sunrise Medical Center',
      email: 'maria.santos@email.com',
      phone: '(555) 234-5678',
      address: '1847 Oak Street, Suite 2B, Springfield, IL 62704',
      idType: "Driver's License",
      idNumber: 'S123-4567-8901',
      ssn: '***-**-1234',
    },
    context: 'Maria is joining the credit union because her employer just switched payroll to direct deposit through the CU. She currently banks with Big Bank and is frustrated with fees. She mentioned wanting to buy a car soon and eventually a house.',
  },
  'auto-loan': {
    name: 'Auto Loan Refinance',
    workflow: 'B',
    member: {
      id: 'MBR-2024-03291',
      name: 'James Rodriguez',
      memberSince: '2024-03-15',
      products: ['Share Savings', 'Share Draft Checking', 'Debit Card'],
      creditScore: 718,
      employer: 'Springfield Manufacturing Inc.',
      grossMonthlyIncome: 5200,
    },
    loan: {
      type: 'Auto Loan Refinance',
      amount: 18500,
      purpose: 'Refinance existing auto loan at Big Bank (7.9% APR)',
      term: 60,
      collateral: '2022 Honda Civic — NADA value: $21,200',
      existingLoan: { balance: 19200, rate: 7.9, payment: 389, lender: 'Big Bank' },
    },
  },
  'mortgage': {
    name: 'Mortgage Application',
    workflow: 'C',
    member: {
      id: 'MBR-2022-01104',
      name: 'Sarah & David Chen',
      memberSince: '2022-06-20',
      products: ['Joint Savings', 'Joint Checking', 'Auto Loan (paid)', 'Credit Card'],
      creditScores: { sarah: 742, david: 728 },
      combinedIncome: 11200,
    },
    loan: {
      type: 'Conventional Mortgage — Purchase',
      amount: 285000,
      purpose: 'Primary residence purchase',
      term: 360,
      property: '421 Maple Avenue, Springfield, IL 62704',
      purchasePrice: 310000,
      downPayment: 25000,
    },
  },
  'delinquent': {
    name: 'Delinquent Auto Loan',
    workflow: 'D',
    member: {
      id: 'MBR-2023-05518',
      name: 'Robert Williams',
      memberSince: '2023-09-10',
      products: ['Share Savings', 'Checking', 'Auto Loan'],
    },
    loan: {
      type: 'Auto Loan',
      loanNumber: 'LN-2023-05518',
      originalBalance: 22000,
      currentBalance: 18750,
      rate: 6.49,
      payment: 425,
      daysPastDue: 35,
      firstPaymentDue: '2023-10-15',
      lastPayment: '2026-01-20',
    },
  },
  'reg-e-dispute': {
    name: 'Reg E Dispute',
    workflow: 'E',
    member: {
      id: 'MBR-2021-02207',
      name: 'Linda Thompson',
      memberSince: '2021-04-30',
      products: ['Savings', 'Checking', 'Debit Card', 'Visa Credit Card'],
    },
    transaction: {
      date: '2026-03-15',
      amount: 1247.83,
      description: 'Online purchase — TechGadgetsPlus.com',
      disputeType: 'Unauthorized transaction',
      memberClaim: 'I did not make this purchase. My card was in my wallet. I noticed it when I checked my account online.',
      reportingDate: '2026-03-18',
      provisionalCreditDeadline: '2026-04-01',
      finalResolutionDeadline: '2026-05-02',
    },
  },
  'exam-prep': {
    name: 'NCUA Examination Preparation',
    workflow: 'F',
    context: 'Routine NCUA safety & soundness and consumer compliance examination scheduled for Q4. Last exam had 2 non-material recommendations (both closed). BSA program independent testing pending.',
  },
  'strategic-plan': {
    name: 'Annual Strategic Planning',
    workflow: 'G',
    context: 'Annual strategic planning cycle for FY2027. Board retreat scheduled for November. Key considerations: digital banking upgrade, potential branch expansion, rising interest rate environment, competitive pressure from fintech.',
  },

  // ── Failure-path test scenarios ─────────────────────────────────────────────
  // These scenarios use forceFail on gates to exercise exception paths and
  // fallback outcomes in mock mode. Run with --mock to test without an API key.

  'low-appraisal': {
    name: 'Mortgage — Low Appraisal Exception Path',
    workflow: 'C',
    member: {
      id: 'MBR-2022-01104',
      name: 'Sarah & David Chen',
      memberSince: '2022-06-20',
      products: ['Joint Savings', 'Joint Checking', 'Auto Loan (paid)', 'Credit Card'],
      creditScores: { sarah: 742, david: 728 },
      combinedIncome: 11200,
    },
    loan: {
      type: 'Conventional Mortgage — Purchase',
      amount: 285000,
      purpose: 'Primary residence purchase',
      term: 360,
      property: '421 Maple Avenue, Springfield, IL 62704',
      purchasePrice: 310000,
      downPayment: 25000,
      appraisedValue: 285000,   // $25,000 below contract price
      appraisalGap: 25000,
      ltv_at_contract: '91.9%',
      ltv_at_appraised: '100%', // exceeds guideline maximum
    },
    // forceFail injected on the Appraisal Support Gate to trigger exception path
    _gateOverrides: {
      'Appraisal Support Gate': {
        forceFail: true,
        forceFailReason: 'Appraised value $285,000 is $25,000 below contracted purchase price of $310,000. LTV at appraised value is 100%, exceeding product maximum of 95%. Two comparable sales used by appraiser are 18-24 months old and do not reflect current market. Reconsideration of Value recommended with recent comps.',
      },
    },
  },

  'loan-doc-exception': {
    name: 'Loan Origination — Post-Close Exception Underwriting Path',
    workflow: 'B',
    member: {
      id: 'MBR-2024-03291',
      name: 'James Rodriguez',
      memberSince: '2024-03-15',
      products: ['Share Savings', 'Share Draft Checking', 'Debit Card'],
      creditScore: 718,
      employer: 'Springfield Manufacturing Inc.',
      grossMonthlyIncome: 5200,
    },
    loan: {
      type: 'Auto Loan Refinance',
      amount: 18500,
      purpose: 'Refinance existing auto loan at Big Bank (7.9% APR)',
      term: 60,
      collateral: '2022 Honda Civic — NADA value: $21,200',
      existingLoan: { balance: 19200, rate: 7.9, payment: 389, lender: 'Big Bank' },
    },
    // forceFail injected on the Quality Gate to trigger exception underwriting path
    _gateOverrides: {
      'Loan Origination Quality Gate': {
        forceFail: true,
        forceFailReason: 'Post-close review identified two deficiencies: (1) Loan analysis worksheet missing payment-to-income ratio calculation — worksheet incomplete per policy; (2) TILA disclosure shows APR of 5.49% but rate note reflects 5.74% — tolerance violation of 0.25%. Both items require remediation before file can be considered examination-ready.',
      },
    },
  },
};

// ═══════════════════════════════════════════════════════════════
// CLI
// ═══════════════════════════════════════════════════════════════

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    mock: false,
    workflow: null,
    scenario: null,
    list: false,
    help: false,
    model: null,
    verbose: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--mock':
      case '-m':
        opts.mock = true;
        break;
      case '--workflow':
      case '-w':
        if (i + 1 >= args.length) { display.error('--workflow requires a value'); process.exit(1); }
        opts.workflow = args[++i].toUpperCase();
        break;
      case '--scenario':
      case '-s':
        if (i + 1 >= args.length) { display.error('--scenario requires a value'); process.exit(1); }
        opts.scenario = args[++i];
        break;
      case '--list':
      case '-l':
        opts.list = true;
        break;
      case '--help':
      case '-h':
        opts.help = true;
        break;
      case '--model':
        if (i + 1 >= args.length) { display.error('--model requires a value'); process.exit(1); }
        opts.model = args[++i];
        break;
      case '--verbose':
      case '-v':
        opts.verbose = true;
        break;
    }
  }

  return opts;
}

function printHelp() {
  display.banner();
  console.log(`
${display.COLORS.bright}CANVAS Multi-Agent Credit Union Simulator${display.COLORS.reset}

${display.COLORS.bright}USAGE:${display.COLORS.reset}
  node simulator.js [options]

${display.COLORS.bright}OPTIONS:${display.COLORS.reset}
  -w, --workflow <A-K>              Run a specific workflow (A–G original, H–K critical new)
  -s, --scenario <name>             Use a predefined scenario
  -m, --mock                        Run in mock mode (no API key needed)
  -l, --list                        List available workflows and scenarios
  -v, --verbose                     Verbose output
  --model <name>                    LLM model to use (default: gpt-4o-mini)
  -h, --help                        Show this help

${display.COLORS.bright}EXAMPLES:${display.COLORS.reset}
  # List workflows and scenarios
  node simulator.js --list

  # Run new member onboarding (mock mode)
  node simulator.js --mock --scenario new-member

  # Run loan origination with live LLM
  OPENAI_API_KEY=sk-... node simulator.js --scenario auto-loan

  # Run any workflow with mock
  node simulator.js --mock --workflow A

${display.COLORS.bright}ENVIRONMENT VARIABLES:${display.COLORS.reset}
  OPENAI_API_KEY      OpenAI API key (required for live mode)
  OPENAI_BASE_URL     Custom API endpoint (for compatible APIs)
  CANVAS_MODEL        Model name (default: gpt-4o-mini)
`);
}

function printList() {
  display.banner();
  display.sectionHeader('AVAILABLE WORKFLOWS');

  for (const [id, wf] of Object.entries(WORKFLOWS)) {
    console.log(`  ${display.COLORS.cyan}${display.COLORS.bright}Workflow ${id}${display.COLORS.reset} — ${display.COLORS.bright}${wf.name}${display.COLORS.reset}`);
    console.log(`    ${display.COLORS.dim}${wf.description}${display.COLORS.reset}`);
    console.log(`    Agents: ${display.COLORS.yellow}${wf.agents.join(', ')}${display.COLORS.reset}`);
    console.log();
  }

  display.sectionHeader('PREDEFINED SCENARIOS');

  for (const [key, scenario] of Object.entries(SCENARIOS)) {
    console.log(`  ${display.COLORS.green}${display.COLORS.bright}${key}${display.COLORS.reset} → Workflow ${scenario.workflow} — ${scenario.name}`);
    if (scenario.member) {
      console.log(`    ${display.COLORS.dim}Member: ${scenario.member.name} (${scenario.member.id})${display.COLORS.reset}`);
    }
    if (scenario.context) {
      console.log(`    ${display.COLORS.dim}${scenario.context.substring(0, 80)}...${display.COLORS.reset}`);
    }
    console.log();
  }
}

async function main() {
  const opts = parseArgs();

  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  if (opts.list) {
    printList();
    process.exit(0);
  }

  // Determine workflow and scenario
  let scenario, workflowId;

  if (opts.scenario) {
    scenario = SCENARIOS[opts.scenario];
    if (!scenario) {
      display.error(`Unknown scenario: ${opts.scenario}`);
      console.log(`\nAvailable scenarios: ${Object.keys(SCENARIOS).join(', ')}`);
      process.exit(1);
    }
    workflowId = scenario.workflow;
  } else if (opts.workflow) {
    workflowId = opts.workflow;
    scenario = {
      name: `Custom — Workflow ${workflowId}`,
      workflow: workflowId,
      member: {
        id: `MBR-${Date.now()}`,
        name: 'Test Member',
        memberSince: '2024-01-01',
      },
      context: 'Custom workflow run.',
    };
  } else {
    printHelp();
    process.exit(0);
  }

  // Load agents
  display.banner();
  display.sectionHeader('INITIALIZING CANVAS SIMULATOR');
  display.info(`Mode: ${opts.mock ? 'MOCK (no API key required)' : 'LIVE (LLM-powered)'}`);
  display.info(`Workflow: ${workflowId} — ${WORKFLOWS[workflowId]?.name || 'Unknown'}`);
  display.info(`Scenario: ${scenario.name}`);

  let agents;
  try {
    agents = loadAllAgents();
    display.success(`Loaded ${Object.keys(agents).length} agent definitions`);
  } catch (err) {
    display.error(`Failed to load agents: ${err.message}`);
    process.exit(1);
  }

  // Initialize LLM client
  const llm = new LLMClient({
    mock: opts.mock,
    model: opts.model,
  });

  if (opts.mock) {
    display.info('Mock mode: Using simulated agent responses');
  } else if (!process.env.OPENAI_API_KEY) {
    display.error('OPENAI_API_KEY not set. Use --mock for simulation mode.');
    process.exit(1);
  }

  // Apply gate overrides for failure-path test scenarios (mock mode only)
  // _gateOverrides: { [gateName]: { forceFail, forceFailReason } }
  if (opts.mock && scenario._gateOverrides) {
    display.info(`Applying ${Object.keys(scenario._gateOverrides).length} gate override(s) for failure-path testing`);
    for (const [gateName, override] of Object.entries(scenario._gateOverrides)) {
      display.info(`  Gate override: "${gateName}" → forceFail=${override.forceFail}`);
    }
    // Patch the engine's evaluateGateMock to check scenario overrides
    const origEvaluateGateMock = WorkflowEngine.prototype.evaluateGateMock;
    WorkflowEngine.prototype.evaluateGateMock = function(gate, ctx) {
      const override = scenario._gateOverrides[gate.name];
      if (override?.forceFail) {
        return {
          passed: false,
          details: override.forceFailReason || `Forced gate failure for scenario testing: ${gate.name}`,
        };
      }
      return origEvaluateGateMock.call(this, gate, ctx);
    };
  }

  // Run workflow
  const engine = new WorkflowEngine(agents, llm, { verbose: opts.verbose });

  try {
    await engine.run(workflowId, scenario);
  } catch (err) {
    display.error(`Simulation failed: ${err.message}`);
    if (opts.verbose) console.error(err.stack);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
