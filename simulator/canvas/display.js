export const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
};

const AGENT_COLORS = {
  'ceo': '\x1b[35m',
  'cfo': '\x1b[36m',
  'loan-officer': '\x1b[32m',
  'compliance-officer': '\x1b[31m',
  'bsa-officer': '\x1b[33m',
  'member-services-representative': '\x1b[34m',
  'financial-advisor': '\x1b[36m',
  'collections-specialist': '\x1b[33m',
  'risk-manager': '\x1b[35m',
  'mortgage-loan-processor': '\x1b[32m',
  'deposit-operations-manager': '\x1b[34m',
  'branch-manager': '\x1b[36m',
  'marketing-manager': '\x1b[35m',
  'internal-auditor': '\x1b[33m',
  'core-systems-administrator': '\x1b[32m',
  'chro': '\x1b[36m',
  'card-services-specialist': '\x1b[34m',
  'rpa-automation': '\x1b[32m',
  'business-intelligence': '\x1b[36m',
  'it-infrastructure': '\x1b[32m',
  'it-database': '\x1b[34m',
  'it-services': '\x1b[36m',
  'it-systems-administrator': '\x1b[32m',
  'software-engineer': '\x1b[35m',
  'business-lending-officer': '\x1b[32m',
};

function agentColor(agentId) {
  return AGENT_COLORS[agentId] || COLORS.white;
}

export function banner() {
  console.log(`
${COLORS.bright}${COLORS.cyan}╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ${COLORS.magenta}█████╗ █████╗ ███╗   ██╗██╗   ██╗ █████╗ ███████╗${COLORS.cyan}        ║
║  ${COLORS.magenta}██╔════╝██╔══██╗████╗  ██║██║   ██║██╔══██╗██╔════╝${COLORS.cyan}        ║
║  ${COLORS.magenta}██║     ███████║██╔██╗ ██║██║   ██║███████║███████╗${COLORS.cyan}        ║
║  ${COLORS.magenta}██║     ██╔══██║██║╚██╗██║╚██╗ ██╔╝██╔══██║╚════██║${COLORS.cyan}        ║
║  ${COLORS.magenta}╚██████╗██║  ██║██║ ╚████║ ╚████╔╝ ██║  ██║███████║${COLORS.cyan}        ║
║  ${COLORS.magenta} ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝${COLORS.cyan}        ║
║                                                              ║
║   Credit Union Agent Network                                ║
║   for Value, Advice, and Service                            ║
║   Multi-Agent Simulator v1.0                                ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝${COLORS.reset}
`);
}

export function sectionHeader(title) {
  const line = '═'.repeat(60);
  console.log(`\n${COLORS.bright}${COLORS.cyan}${line}`);
  console.log(`  ${title}`);
  console.log(`${line}${COLORS.reset}\n`);
}

export function stepHeader(stepNum, stepName, agentName, agentId) {
  const c = agentColor(agentId);
  const line = '─'.repeat(50);
  console.log(`\n${c}${line}`);
  console.log(`${COLORS.bright}${c}  STEP ${stepNum}: ${stepName}`);
  console.log(`  Agent: ${agentName}${COLORS.reset}`);
  console.log(`${c}${line}${COLORS.reset}\n`);
}

export function agentSpeak(agentId, agentName, text) {
  const c = agentColor(agentId);
  const prefix = `${c}${COLORS.bright}[${agentName}]${COLORS.reset} `;
  const lines = text.split('\n');
  for (const line of lines) {
    console.log(`${prefix}${line}`);
  }
  console.log();
}

export function handoff(from, to, context) {
  console.log(`\n${COLORS.yellow}${COLORS.bright}  ══ HANDOFF ══════════════════════════════════════`);
  console.log(`  From: ${from}`);
  console.log(`  To:   ${to}`);
  console.log(`  Member: ${context.memberName} (${context.memberId})`);
  console.log(`  Steps completed: ${context.stepsCompleted}`);
  console.log(`  ═══════════════════════════════════════════════${COLORS.reset}\n`);
}

export function gateCheck(gateName, passed, details) {
  const icon = passed ? `${COLORS.green}PASS` : `${COLORS.red}FAIL`;
  console.log(`\n${COLORS.bright}  QUALITY GATE: ${gateName}`);
  console.log(`  [${icon}${COLORS.bright}]${COLORS.reset}`);
  if (details) {
    console.log(`  ${COLORS.dim}${details}${COLORS.reset}`);
  }
  console.log();
}

export function complianceFlag(flag) {
  console.log(`\n${COLORS.red}${COLORS.bright}  COMPLIANCE FLAG: ${flag.type || 'Unknown'}`);
  console.log(`  ${flag.description}${COLORS.reset}\n`);
}

export function escalation(escalation) {
  console.log(`\n${COLORS.bgRed}${COLORS.white}${COLORS.bright}  ESCALATION: ${escalation.to}`);
  console.log(`  ${escalation.reason}${COLORS.reset}\n`);
}

export function summary(ctx) {
  const s = ctx.summary();
  console.log(`\n${COLORS.bright}${COLORS.cyan}╔══════════════════════════════════════════════════════════════╗`);
  console.log(`║                    WORKFLOW SIMULATION SUMMARY              ║`);
  console.log(`╠══════════════════════════════════════════════════════════════╣`);
  console.log(`║  Workflow:       ${String(s.workflow).padEnd(42)}║`);
  console.log(`║  Member:         ${String(s.member).padEnd(42)}║`);
  console.log(`║  Steps:          ${String(s.stepsCompleted).padEnd(42)}║`);
  console.log(`║  Handoffs:       ${String(s.handoffs).padEnd(42)}║`);
  console.log(`║  Gates Passed:   ${String(s.gatesPassed).padEnd(42)}║`);
  console.log(`║  Gates Failed:   ${String(s.gatesFailed).padEnd(42)}║`);
  console.log(`║  Comp. Flags:    ${String(s.complianceFlags).padEnd(42)}║`);
  console.log(`║  Escalations:    ${String(s.escalations).padEnd(42)}║`);
  console.log(`║  Elapsed:        ${(s.elapsedSeconds + 's').padEnd(42)}║`);
  console.log(`╚══════════════════════════════════════════════════════════════╝${COLORS.reset}\n`);
}

export function info(msg) {
  console.log(`${COLORS.dim}  i ${msg}${COLORS.reset}`);
}

export function error(msg) {
  console.log(`${COLORS.red}${COLORS.bright}  ERROR: ${msg}${COLORS.reset}`);
}

export function success(msg) {
  console.log(`${COLORS.green}  OK ${msg}${COLORS.reset}`);
}

export function divider() {
  console.log(`${COLORS.dim}  ${'·'.repeat(56)}${COLORS.reset}`);
}

export function workflowMenu(workflows) {
  console.log(`\n${COLORS.bright}Available Workflows:${COLORS.reset}\n`);
  for (const [id, wf] of Object.entries(workflows)) {
    console.log(`  ${COLORS.cyan}${id}${COLORS.reset} — ${COLORS.bright}${wf.name}${COLORS.reset}`);
    console.log(`    ${COLORS.dim}${wf.description}${COLORS.reset}`);
    console.log(`    Agents: ${COLORS.yellow}${wf.agents.join(', ')}${COLORS.reset}`);
    console.log();
  }
}
