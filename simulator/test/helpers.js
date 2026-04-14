import { loadAllAgents } from '../canvas/agent-loader.js';
import { LLMClient } from '../canvas/llm.js';
import { WorkflowEngine } from '../canvas/workflow-engine.js';

// ─── Engine factory ───────────────────────────────────────────────────────────
// Returns a fresh engine instance (new agents + new LLM client) per call so
// that prototype patches and WorkflowContext state don't bleed between tests.

export function makeEngine() {
  const agents = loadAllAgents();
  const llm = new LLMClient({ mock: true });
  return new WorkflowEngine(agents, llm);
}

// ─── runWithOverrides ─────────────────────────────────────────────────────────
// Runs a workflow in mock mode, optionally applying _gateOverrides from the
// scenario to force gate failures (for exception-path testing).
// Suppresses stdout during the run so node:test spec output stays readable.

export async function runWithOverrides(engine, workflowId, scenario) {
  const origWrite = process.stdout.write.bind(process.stdout);
  process.stdout.write = () => true;

  const orig = WorkflowEngine.prototype.evaluateGateMock;
  if (scenario._gateOverrides) {
    WorkflowEngine.prototype.evaluateGateMock = function(gate, ctx) {
      const ov = scenario._gateOverrides[gate.name];
      if (ov?.forceFail) return { passed: false, details: ov.forceFailReason };
      return orig.call(this, gate, ctx);
    };
  }
  try {
    return await engine.run(workflowId, scenario);
  } finally {
    WorkflowEngine.prototype.evaluateGateMock = orig;
    process.stdout.write = origWrite;
  }
}

// ─── Scenario data ────────────────────────────────────────────────────────────
// SCENARIOS is a local const in simulator.js (not exported), so the test data
// is inlined here. Kept in sync with simulator/simulator.js lines 12–298.

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
  'fraud-dispute': {
    name: 'Fraud Detection — Unauthorized Card Purchase',
    workflow: 'H',
    member: {
      id: 'MBR-2023-04412',
      name: 'Patricia Morgan',
      memberSince: '2023-08-15',
      products: ['Share Savings', 'Share Draft Checking', 'Visa Debit Card', 'Online Banking'],
    },
    transaction: {
      date: '2026-04-01',
      amount: 1247.83,
      merchant: 'TechGadgetsPlus.com',
      category: 'Online Electronics',
      description: 'Unauthorized online purchase — member reports card was never out of possession.',
    },
    dispute: {
      type: 'Unauthorized transaction — card-not-present fraud',
      reportingDate: '2026-04-03',
      memberClaim: 'I did not make this purchase. My debit card has been in my wallet the entire time. I noticed the charge when I logged into online banking. I have never heard of this merchant.',
      provisionalCreditDeadline: '2026-04-17',
      investigationDeadline: '2026-05-17',
    },
    context: 'Established member reports unauthorized online purchase. Card was never lost or stolen — likely card-number compromise. Reg E 10-business-day provisional credit clock starts on reporting date. Full investigation required within 45 days.',
  },
  'card-fraud-alert': {
    name: 'Card Services — Overseas Fraud Alert',
    workflow: 'I',
    member: {
      id: 'MBR-2022-03885',
      name: 'David Kim',
      memberSince: '2022-11-01',
      products: ['Share Savings', 'Checking', 'Visa Debit Card', 'Visa Credit Card'],
      homeLocation: 'Springfield, IL',
    },
    card: {
      type: 'Visa Debit',
      last4: '4421',
      issueDate: '2025-06-15',
      status: 'Active',
    },
    alert: {
      timestamp: '2026-04-08T14:32:00Z',
      amount: 2100.00,
      merchant: 'SH Electronics Ltd.',
      location: 'Shanghai, China',
      category: 'Electronics — High-Value',
      velocityFlag: '3 transactions totaling $4,850 in 6 hours',
      geolocationMismatch: true,
      riskScore: 'HIGH',
    },
    context: 'Real-time fraud monitoring flagged a high-value overseas electronics purchase. Member has no travel history on file. Velocity pattern shows 3 large transactions in 6 hours from a single overseas location. Requires immediate card suspension, member contact, fraud-vs-false-positive determination, and potential chargeback filing.',
  },
  'ransomware-incident': {
    name: 'IT Security — Ransomware on File Server',
    workflow: 'J',
    incident: {
      severity: 'P1 — Critical',
      type: 'Ransomware',
      detectedAt: '2026-04-10T02:15:00Z',
      affectedSystem: 'Member Records File Server (FS-MBR-01)',
      description: 'Active file encryption detected on member-records backup server. Ransom note displayed demanding 5 BTC. Network monitoring shows lateral movement attempt to core banking system was blocked by firewall rules.',
      dataExposure: {
        membersAffected: 5000,
        dataTypes: ['Names', 'Addresses', 'SSN (encrypted at rest)', 'Account Numbers'],
        exfiltrationEvidence: 'Under investigation — no confirmed exfiltration yet',
      },
      containmentStatus: 'Server isolated from network. Core banking system confirmed unaffected.',
    },
    context: 'Ransomware detected on the member-records file server at 2:15 AM. Automatic network isolation triggered. Core banking and transaction systems are unaffected. Requires full incident response: containment verification, eradication, backup restoration, regulatory notification assessment (GLBA, state breach notification laws), member notification decision, and board briefing.',
  },
  'structuring-alert': {
    name: 'BSA/AML — Cash Structuring Alert',
    workflow: 'K',
    member: {
      id: 'MBR-2026-00315',
      name: 'Apex Consulting LLC (Marcus Webb, authorized signer)',
      memberSince: '2026-01-20',
      products: ['Business Checking'],
      accountPurpose: 'Consulting services — stated monthly deposit volume $15,000–$25,000',
    },
    transaction: {
      pattern: 'Daily cash deposits at branch',
      period: '2026-03-15 through 2026-03-28 (14 business days)',
      amounts: [9500, 9800, 9600, 9750, 9500, 9800, 9700, 9500, 9800, 9600, 9750, 9500, 9800, 9600],
      totalCash: 133700,
      averageDeposit: 9550,
      branchLocations: ['Main Branch', 'West Side Branch'],
      ctrsFiledToDate: 0,
    },
    alert: {
      type: 'Structuring — possible evasion of CTR reporting threshold',
      triggeredBy: 'Automated monitoring: 14 consecutive cash deposits below $10,000 threshold',
      riskIndicators: [
        'All deposits fall between $9,500 and $9,800 — just below $10,000 CTR threshold',
        'Account opened 8 weeks ago with stated volume of $15K–$25K/month; actual deposits are $133K in 14 days',
        'Cash-intensive activity inconsistent with consulting business type',
        'Deposits split across two branch locations',
      ],
    },
    context: 'Automated BSA monitoring flagged a structuring pattern on a new business account. Daily cash deposits consistently just below the $10,000 CTR threshold. Total deposits ($133,700) far exceed the stated account purpose. Requires SAR investigation, 12-month relationship review, FinCEN 314(a) check, and within 30 days either SAR filing with narrative or documented no-file decision with supervisory approval.',
  },
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
      appraisedValue: 285000,
      appraisalGap: 25000,
      ltv_at_contract: '91.9%',
      ltv_at_appraised: '100%',
    },
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
    _gateOverrides: {
      'Loan Origination Quality Gate': {
        forceFail: true,
        forceFailReason: 'Post-close review identified two deficiencies: (1) Loan analysis worksheet missing payment-to-income ratio calculation — worksheet incomplete per policy; (2) TILA disclosure shows APR of 5.49% but rate note reflects 5.74% — tolerance violation of 0.25%. Both items require remediation before file can be considered examination-ready.',
      },
    },
  },
};

// Maps workflow ID → happy-path scenario
export const HAPPY_PATH_SCENARIOS = {
  A: SCENARIOS['new-member'],
  B: SCENARIOS['auto-loan'],
  C: SCENARIOS['mortgage'],
  D: SCENARIOS['delinquent'],
  E: SCENARIOS['reg-e-dispute'],
  F: SCENARIOS['exam-prep'],
  G: SCENARIOS['strategic-plan'],
  H: SCENARIOS['fraud-dispute'],
  I: SCENARIOS['card-fraud-alert'],
  J: SCENARIOS['ransomware-incident'],
  K: SCENARIOS['structuring-alert'],
};

export const EXCEPTION_SCENARIOS = {
  'low-appraisal': SCENARIOS['low-appraisal'],
  'loan-doc-exception': SCENARIOS['loan-doc-exception'],
};
