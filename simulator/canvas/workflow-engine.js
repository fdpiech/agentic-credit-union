import { WorkflowContext } from './context.js';
import * as display from './display.js';

export class WorkflowEngine {
  constructor(agents, llm, options = {}) {
    this.agents = agents;
    this.llm = llm;
    this.verbose = options.verbose || false;
    this.dryRun = options.dryRun || false;
  }

  async run(workflowId, scenario) {
    const workflow = WORKFLOWS[workflowId];
    if (!workflow) throw new Error(`Unknown workflow: ${workflowId}`);

    const ctx = new WorkflowContext(workflowId, scenario);
    display.sectionHeader(`WORKFLOW ${workflowId}: ${workflow.name.toUpperCase()}`);
    display.info(`Objective: ${workflow.objective}`);
    display.info(`Member: ${ctx.memberName} (${ctx.memberId})`);
    display.divider();

    for (let i = 0; i < workflow.steps.length; i++) {
      const step = workflow.steps[i];
      display.stepHeader(i + 1, step.name, step.agentName, step.agentId);

      // Build system prompt from agent definition
      const agent = this.agents[step.agentId];
      if (!agent) {
        display.error(`Agent not found: ${step.agentId}`);
        continue;
      }

      const systemPrompt = this.buildSystemPrompt(agent, workflow, ctx);
      const userPrompt = this.buildStepPrompt(step, scenario, ctx);

      try {
        const output = await this.llm.chat(systemPrompt, userPrompt, step.agentName, `${step.name} ${step.description}`);

        display.agentSpeak(step.agentId, step.agentName, output);

        ctx.addStep({
          agentId: step.agentId,
          agentName: step.agentName,
          stepName: step.name,
          output,
        });

        // Process handoffs
        if (step.handoffTo) {
          const targetAgent = this.agents[step.handoffTo];
          const targetName = targetAgent?.name || step.handoffTo;
          display.handoff(step.agentName, targetName, ctx.toHandoffContext());
          ctx.addHandoff({
            from: step.agentName,
            to: targetName,
            fromId: step.agentId,
            toId: step.handoffTo,
          });
        }

        // Process quality gates
        if (step.gate) {
          const gateResult = await this.evaluateGate(step.gate, ctx);
          display.gateCheck(step.gate.name, gateResult.passed, gateResult.details);
          ctx.addGateResult(gateResult);

          if (!gateResult.passed && step.gate.critical) {
            display.error(`Critical gate failed. Workflow may need remediation.`);
            if (step.gate.escalateTo) {
              display.escalation({
                to: step.gate.escalateTo,
                reason: `Critical quality gate "${step.gate.name}" failed: ${gateResult.details}`,
              });
              ctx.addEscalation({
                to: step.gate.escalateTo,
                gate: step.gate.name,
                reason: gateResult.details,
              });
            }
          }
        }

        // Process compliance flags
        if (step.complianceFlags) {
          for (const flag of step.complianceFlags) {
            display.complianceFlag(flag);
            ctx.addComplianceFlag(flag);
          }
        }

        display.divider();
      } catch (err) {
        display.error(`Step failed: ${err.message}`);
        ctx.addStep({
          agentId: step.agentId,
          agentName: step.agentName,
          stepName: step.name,
          output: `ERROR: ${err.message}`,
          error: true,
        });
      }
    }

    // Final quality gate
    if (workflow.finalGate) {
      display.sectionHeader('FINAL QUALITY GATE');
      const gateResult = await this.evaluateGate(workflow.finalGate, ctx);
      display.gateCheck(workflow.finalGate.name, gateResult.passed, gateResult.details);
      ctx.addGateResult(gateResult);
    }

    display.summary(ctx);
    return ctx;
  }

  buildSystemPrompt(agent, workflow, ctx) {
    return `You are ${agent.name}, operating within the CANVAS multi-agent framework for credit union operations.

## Your Identity
${agent.identity || agent.description}

## Your Core Mission
${agent.mission?.substring(0, 500) || 'Complete assigned tasks per CANVAS protocol.'}

## Critical Rules
${agent.rules?.substring(0, 500) || 'Follow all regulatory requirements.'}

## Communication Style
${agent.communication || 'Professional, clear, and documentation-focused.'}

## Current Context
- Workflow: ${workflow.name} (Workflow ${ctx.workflowId})
- Member: ${ctx.memberName} (${ctx.memberId})
- Steps completed so far: ${ctx.steps.length}

${ctx.steps.length > 0 ? `## Previous Agent Outputs\n${ctx.steps.map((s, i) => `### Step ${i + 1}: ${s.stepName} (${s.agentName})\n${s.output?.substring(0, 300)}`).join('\n\n')}` : ''}

Respond in character as ${agent.name}. Use the CANVAS handoff templates and deliverable formats from your definition. Be specific, document everything, and flag any compliance issues.`;
  }

  buildStepPrompt(step, scenario, ctx) {
    let prompt = step.prompt || `Complete the following task for Workflow ${ctx.workflowId}:\n\n${step.description}`;

    // Inject scenario data
    if (scenario.member) {
      prompt += `\n\n## Member Details\n${JSON.stringify(scenario.member, null, 2)}`;
    }
    if (scenario.loan) {
      prompt += `\n\n## Loan/Application Details\n${JSON.stringify(scenario.loan, null, 2)}`;
    }
    if (scenario.transaction) {
      prompt += `\n\n## Transaction Details\n${JSON.stringify(scenario.transaction, null, 2)}`;
    }

    // Inject handoff context
    if (ctx.steps.length > 0) {
      prompt += `\n\n## Previous Steps Completed\n${JSON.stringify(ctx.toHandoffContext(), null, 2)}`;
    }

    return prompt;
  }

  async evaluateGate(gate, ctx) {
    // In mock mode, use rule-based gate evaluation
    if (this.llm.mock) {
      return this.evaluateGateMock(gate, ctx);
    }

    // In live mode, ask LLM to evaluate
    const systemPrompt = `You are a quality gate evaluator for the CANVAS multi-agent credit union framework.
Evaluate whether the quality gate criteria have been met based on the workflow context.
Respond with ONLY a JSON object: {"passed": boolean, "details": string}`;

    const userPrompt = `## Quality Gate: ${gate.name}

Criteria:
${gate.criteria || 'All steps completed successfully.'}

## Workflow Context
${JSON.stringify(ctx.toHandoffContext(), null, 2)}

Evaluate whether this gate passes or fails.`;

    try {
      const response = await this.llm.chat(systemPrompt, userPrompt, 'Gate Evaluator', gate.name);
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return { passed: true, details: response.substring(0, 200) };
    } catch {
      return { passed: false, details: 'Gate evaluation failed: parse error — requires manual review' };
    }
  }

  evaluateGateMock(gate, ctx) {
    // Simple rule-based: pass if all expected steps completed
    const passed = ctx.steps.length > 0 && !ctx.steps.some(s => s.error);
    return {
      passed,
      details: passed
        ? `All ${ctx.steps.length} steps completed successfully. Documentation archived.`
        : 'One or more steps had errors. Review required.',
    };
  }
}

// ═══════════════════════════════════════════════════════════════════
// WORKFLOW DEFINITIONS
// ═══════════════════════════════════════════════════════════════════

export const WORKFLOWS = {
  A: {
    id: 'A',
    name: 'Member Onboarding & CIP',
    description: 'Enroll new members with complete documentation, BSA/CIP compliance, and product relationship setup.',
    objective: 'Complete member onboarding with full compliance and needs discovery.',
    agents: ['member-services-representative', 'bsa-officer', 'compliance-officer', 'financial-advisor', 'marketing-manager'],
    steps: [
      {
        name: 'Initial Contact & Eligibility',
        agentId: 'member-services-representative',
        agentName: 'Member Services Representative',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'bsa-officer', agentName: 'BSA Officer', authority: ['compliance-regulatory'] },
        ],
        description: 'Verify field of membership eligibility, explain cooperative difference, collect ID and documentation.',
        prompt: 'Begin new member onboarding. Verify eligibility, collect documentation, explain cooperative ownership structure. Open share savings account.',
        handoffTo: 'bsa-officer',
      },
      {
        name: 'CIP / BSA Verification',
        agentId: 'bsa-officer',
        agentName: 'BSA Officer',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [
          { agentId: 'compliance-officer', agentName: 'Compliance Officer', authority: ['compliance-regulatory', 'escalation'] },
        ],
        description: 'Verify identity per BSA CIP. Screen against OFAC/SDN and FinCEN 314(a) lists.',
        prompt: 'Perform Customer Identification Program verification. Screen against OFAC/SDN list and FinCEN 314(a). Document results in CIP file.',
        handoffTo: 'member-services-representative',
      },
      {
        name: 'Account Opening & Disclosures',
        agentId: 'member-services-representative',
        agentName: 'Member Services Representative',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'compliance-officer', agentName: 'Compliance Officer', authority: ['compliance-regulatory'] },
        ],
        description: 'Open share savings, deliver Truth in Savings and privacy disclosures, configure digital banking.',
        prompt: 'CIP is clear. Open share savings and checking accounts. Deliver Truth in Savings, privacy notice, and Reg CC disclosures. Configure online banking and mobile app.',
      },
      {
        name: 'Needs Discovery',
        agentId: 'financial-advisor',
        agentName: 'Financial Advisor',
        mode: 'execute',
        authority: ['operational'],
        advisors: [],
        description: '5-minute financial wellness conversation. Identify immediate and future needs.',
        prompt: 'Conduct financial needs discovery with new member. Identify current banking relationships, debts, and financial goals. Create referral list with priorities.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Cross-Sell & Welcome Sequence',
        agentId: 'marketing-manager',
        agentName: 'Marketing Manager',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'financial-advisor', agentName: 'Financial Advisor', authority: ['credit-financial'] },
        ],
        description: 'Enroll member in welcome email sequence and marketing segments based on needs discovery.',
        prompt: 'Activate 30-day welcome email sequence. Apply marketing segment tags based on needs discovery. Prepare cross-sell campaign enrollments.',
      },
      {
        name: 'Quality Gate — Compliance Verification',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'gate',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [],
        description: 'Verify CIP complete, OFAC clear, disclosures delivered. Sign off on new member file.',
        prompt: 'Perform compliance quality gate verification. Confirm CIP file complete, OFAC screen clear, all required disclosures delivered and acknowledged. Approve or flag for remediation.',
        gate: {
          name: 'CIP/BSA Compliance Gate',
          criteria: 'CIP identity verification 100% complete. OFAC/SDN screen negative. Required disclosures (Truth in Savings, Privacy, Reg CC) delivered and acknowledged.',
          critical: true,
          escalateTo: 'ceo',
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
    ],
    finalGate: {
      name: 'Onboarding Complete Gate',
      criteria: 'All onboarding steps completed. CIP file complete. Disclosures delivered. Needs discovery performed. Member file archived per retention policy.',
    },
  },

  B: {
    id: 'B',
    name: 'Loan Origination',
    description: 'Originate quality consumer loans with full ECOA, TILA, and fair lending compliance.',
    objective: 'Process loan application from intake through closing with compliant documentation.',
    agents: ['loan-officer', 'member-services-representative', 'compliance-officer', 'risk-manager', 'financial-advisor', 'collections-specialist'],
    steps: [
      {
        name: 'Application & Pre-Qualification',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'member-services-representative', agentName: 'Member Services Representative', authority: ['operational'] },
        ],
        description: 'Conduct member interview, obtain credit authorization, pull credit, request income docs.',
        prompt: 'Begin loan application intake. Conduct member interview for auto loan refinance. Obtain signed credit authorization, pull tri-merge credit report, conduct fraud screen. Request income documentation.',
        handoffTo: 'loan-officer',
      },
      {
        name: 'Underwriting Analysis',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        mode: 'execute',
        authority: ['credit-financial'],
        advisors: [
          { agentId: 'risk-manager', agentName: 'Risk Manager', authority: ['credit-financial', 'escalation'] },
        ],
        description: 'Complete loan analysis worksheet. Calculate DTI, LTV, payment-to-income. Make credit recommendation.',
        prompt: 'Perform underwriting analysis. Complete loan analysis worksheet with DTI, LTV calculations. Apply risk-based pricing matrix. Prepare recommendation: Approve, Counter, or Decline.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Compliance Review',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'gate',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [],
        description: 'Verify ECOA compliance, TILA disclosures, adverse action tracking, HMDA flags.',
        prompt: 'Perform pre-decision compliance review on loan application. Verify ECOA compliance, confirm application date logged for adverse action clock, check TILA disclosure accuracy, flag HMDA-reportable applications.',
        handoffTo: 'loan-officer',
        gate: {
          name: 'Pre-Decision Compliance Gate',
          criteria: 'ECOA: no prohibited basis considered. Application date logged for adverse action clock. TILA disclosures prepared accurately. HMDA-reportable applications flagged for LAR.',
          critical: true,
          escalateTo: 'ceo',
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
      {
        name: 'Decision Communication',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        mode: 'execute',
        authority: ['credit-financial'],
        advisors: [
          { agentId: 'financial-advisor', agentName: 'Financial Advisor', authority: ['operational'] },
        ],
        description: 'Communicate decision to member. For declines, issue adverse action notice within 30 days.',
        prompt: 'Communicate loan decision to member. Application is APPROVED. Confirm terms, schedule closing, send approval letter. Document communication in member notes.',
      },
      {
        name: 'Closing & Funding',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        mode: 'execute',
        authority: ['operational'],
        advisors: [],
        description: 'Prepare loan documents, obtain signatures, disburse funds, perfect collateral interest.',
        prompt: 'Process loan closing. Prepare loan package: Note, TILA disclosure, security agreement. Obtain member signatures. Disburse funds. Perfect lien interest. Board to core system.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Post-Close Quality Check',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'gate',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [],
        description: 'Verify adverse action notices, TILA accuracy, HMDA data, file archival.',
        prompt: 'Perform post-close quality review. Verify TILA disclosure accuracy, adverse action notice compliance, HMDA data recording, lien confirmation. Archive file per retention policy.',
        gate: {
          name: 'Loan Origination Quality Gate',
          criteria: 'Credit authorization signed before pull. Loan analysis complete. TILA accurate. Adverse action issued if applicable. Lien perfected.',
          critical: true,
          escalateTo: 'ceo',
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
    ],
    finalGate: {
      name: 'Loan Funding Complete Gate',
      criteria: 'All quality criteria met. Loan file examination-ready. Both Loan Officer and Compliance Officer sign-off obtained.',
    },
  },

  C: {
    id: 'C',
    name: 'Mortgage Processing (TRID)',
    description: 'Process mortgage applications from application to closing with full TRID compliance.',
    objective: 'Deliver a saleable, compliant mortgage loan file through all TRID stages.',
    agents: ['mortgage-loan-processor', 'loan-officer', 'compliance-officer', 'risk-manager'],
    steps: [
      {
        name: 'Application & Loan Estimate',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        mode: 'execute',
        authority: ['credit-financial'],
        advisors: [
          { agentId: 'compliance-officer', agentName: 'Compliance Officer', authority: ['compliance-regulatory'] },
        ],
        description: 'Application interview, pre-qualification, deliver Loan Estimate within 3 business days.',
        prompt: 'Begin mortgage application intake. Conduct application interview. Deliver Loan Estimate within 3 business days. Initiate rate lock per pipeline policy.',
        handoffTo: 'mortgage-loan-processor',
      },
      {
        name: 'Processing — Document Collection',
        agentId: 'mortgage-loan-processor',
        agentName: 'Mortgage Loan Processor',
        mode: 'execute',
        authority: ['operational'],
        advisors: [],
        description: 'Order appraisal, title, flood cert. Collect income/asset docs. Run automated underwriting.',
        prompt: 'Begin mortgage processing. Order appraisal, title search, flood certification. Collect and verify all income and asset documents. Run automated underwriting (DU/LP).',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Compliance — TRID & HMDA Check',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'gate',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [],
        description: 'Verify Loan Estimate timing and accuracy. HMDA data collection. Change-of-circumstance review.',
        prompt: 'Perform TRID compliance review. Verify Loan Estimate delivery timing and accuracy. Confirm HMDA data collection. Review any change-of-circumstance disclosures.',
        handoffTo: 'mortgage-loan-processor',
        gate: {
          name: 'TRID Loan Estimate Compliance Gate',
          criteria: 'Loan Estimate delivered within 3 business days of application. LE accurately reflects fees within tolerance. HMDA data fields collected. Any change-of-circumstance has valid basis and re-disclosure.',
          critical: true,
          escalateTo: 'ceo',
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
      {
        name: 'Underwriting & Conditions',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        mode: 'execute',
        authority: ['credit-financial'],
        advisors: [
          { agentId: 'risk-manager', agentName: 'Risk Manager', authority: ['credit-financial', 'escalation'] },
        ],
        description: 'Final credit decision. Satisfy underwriting conditions. Exception review if needed.',
        prompt: 'Make final credit decision on mortgage application. Review and satisfy all underwriting conditions. Document any guideline exceptions with compensating factors.',
        handoffTo: 'mortgage-loan-processor',
      },
      {
        name: 'Closing Preparation — Closing Disclosure',
        agentId: 'mortgage-loan-processor',
        agentName: 'Mortgage Loan Processor',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'compliance-officer', agentName: 'Compliance Officer', authority: ['compliance-regulatory'] },
        ],
        description: 'Prepare Closing Disclosure. Deliver 3 business days before closing. Coordinate with title.',
        prompt: 'Prepare Closing Disclosure. Verify CD accuracy against Loan Estimate (tolerance comparison). Deliver CD at least 3 business days before scheduled closing. Coordinate with title company.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Closing, Funding & Post-Close',
        agentId: 'mortgage-loan-processor',
        agentName: 'Mortgage Loan Processor',
        mode: 'execute',
        authority: ['operational'],
        advisors: [],
        description: 'Closing table, funding, lien recording, secondary market delivery, HMDA LAR entry.',
        prompt: 'Complete mortgage closing and funding. Coordinate closing table. Fund after right-of-rescission period if applicable. Record deed of trust. Prepare secondary market delivery. Enter HMDA LAR data.',
        gate: {
          name: 'TRID Compliance Gate',
          criteria: 'Loan Estimate delivered within 3 business days. Closing Disclosure delivered 3+ business days before close. All income/assets verified. HMDA recorded.',
          critical: true,
          escalateTo: 'compliance-officer',
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
    ],
    finalGate: {
      name: 'Mortgage Closing Complete Gate',
      criteria: 'TRID timing requirements met. CD accurate. All conditions satisfied. Lien recorded. File investor-ready.',
    },
  },

  D: {
    id: 'D',
    name: 'Collections & Recovery',
    description: 'Resolve delinquency through member-centered outreach protecting member and credit union.',
    objective: 'Cure delinquency at earliest stage or manage recovery through compliant processes.',
    agents: ['collections-specialist', 'loan-officer', 'financial-advisor', 'compliance-officer', 'risk-manager'],
    steps: [
      {
        name: 'Early Intervention (1-29 DPD)',
        agentId: 'collections-specialist',
        agentName: 'Collections Specialist',
        mode: 'execute',
        authority: ['operational'],
        advisors: [],
        description: 'Automated reminder at Day 5, first live contact at Day 10, second attempt at Day 20.',
        prompt: 'Begin early delinquency outreach for member loan. Automated payment reminder sent Day 5. Conduct first live outreach attempt (phone). Log contact attempt with date, time, method, result.',
        handoffTo: 'financial-advisor',
      },
      {
        name: 'Hardship Screening',
        agentId: 'financial-advisor',
        agentName: 'Financial Advisor',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'collections-specialist', agentName: 'Collections Specialist', authority: ['credit-financial'] },
        ],
        description: 'Screen for financial hardship indicators. Trigger assessment if indicators present.',
        prompt: 'Screen member for financial hardship indicators. Conduct budget review if hardship detected. Identify modification or counseling options. Document assessment in member file.',
        handoffTo: 'collections-specialist',
      },
      {
        name: 'Escalated Outreach (30-59 DPD)',
        agentId: 'collections-specialist',
        agentName: 'Collections Specialist',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'compliance-officer', agentName: 'Compliance Officer', authority: ['compliance-regulatory', 'escalation'] },
        ],
        description: 'Intensified outreach. Request payment arrangement. FDCPA-compliant communication.',
        prompt: 'Escalated collection effort for 30+ DPD account. Conduct phone + written notice outreach. Request payment arrangement. All communications must be FDCPA-compliant. Log every contact attempt.',
        handoffTo: 'loan-officer',
      },
      {
        name: 'Workout Evaluation',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        mode: 'execute',
        authority: ['credit-financial'],
        advisors: [
          { agentId: 'risk-manager', agentName: 'Risk Manager', authority: ['credit-financial', 'escalation'] },
          { agentId: 'collections-specialist', agentName: 'Collections Specialist', authority: ['credit-financial'] },
        ],
        description: 'Evaluate loan modification, deferral, extension, or rate reduction options.',
        prompt: 'Evaluate workout options for delinquent member loan. Consider deferral, extension, rate reduction. Document modification terms. Execute workout agreement if member agrees.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Compliance — FDCPA Review',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'gate',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [],
        description: 'Verify FDCPA-compliant communication practices. Credit bureau reporting accuracy.',
        prompt: 'Review collections communications for FDCPA compliance. Verify credit bureau reporting accuracy. Confirm SCRA verification before any repossession consideration.',
        gate: {
          name: 'Collections Compliance Gate',
          criteria: 'All communications FDCPA-compliant. Credit bureau reporting accurate. Workout documented if executed. SCRA verified.',
          critical: true,
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
    ],
    finalGate: {
      name: 'Collections Resolution Gate',
      criteria: 'Delinquency resolved (cured, workout, or escalated per policy). All communications compliant and documented.',
    },
  },

  E: {
    id: 'E',
    name: 'Deposit Operations & BSA/AML',
    description: 'Maintain compliant deposit accounts with BSA/AML monitoring.',
    objective: 'Process deposit operations with full regulatory compliance and BSA/AML monitoring.',
    agents: ['deposit-operations-manager', 'bsa-officer', 'compliance-officer', 'member-services-representative'],
    steps: [
      {
        name: 'Reg E Dispute Intake',
        agentId: 'member-services-representative',
        agentName: 'Member Services Representative',
        mode: 'execute',
        authority: ['operational'],
        advisors: [],
        description: 'Document Reg E dispute. Collect transaction details. Initiate provisional credit clock.',
        prompt: 'Intake Reg E dispute from member. Document transaction details: date, amount, description. Notify member of 10-business-day provisional credit timeline and 45-day resolution window.',
        handoffTo: 'bsa-officer',
      },
      {
        name: 'BSA/Fraud Screening',
        agentId: 'bsa-officer',
        agentName: 'BSA Officer',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [
          { agentId: 'fraud-detection', agentName: 'Fraud Detection & Security Analyst', authority: ['compliance-regulatory'] },
        ],
        description: 'Screen for fraud indicators. Determine if SAR filing is warranted.',
        prompt: 'Screen Reg E dispute for fraud indicators. Evaluate transaction patterns. Determine if suspicious activity report (SAR) filing is warranted. Document screening results.',
        handoffTo: 'deposit-operations-manager',
      },
      {
        name: 'Provisional Credit & Investigation',
        agentId: 'deposit-operations-manager',
        agentName: 'Deposit Operations Manager',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'bsa-officer', agentName: 'BSA Officer', authority: ['compliance-regulatory'] },
        ],
        description: 'Apply provisional credit by Day 10. Conduct investigation. Resolve within 45 days.',
        prompt: 'Process Reg E dispute resolution. Apply provisional credit within 10 business days. Conduct investigation. Prepare final resolution within 45-day window. Document all actions.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Compliance Verification',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'gate',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [],
        description: 'Verify Reg E timeline compliance. Review resolution letter accuracy.',
        prompt: 'Verify Reg E dispute resolution compliance. Confirm provisional credit applied within 10 business days. Review resolution letter for accuracy. Confirm 45-day deadline met.',
        gate: {
          name: 'Reg E Compliance Gate',
          criteria: 'Provisional credit applied within 10 business days. Final resolution within 45 days. Resolution letter accurate. BSA screening complete.',
          critical: true,
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
    ],
    finalGate: {
      name: 'Deposit Operations Complete Gate',
      criteria: 'All deposit operations compliant. BSA/AML monitoring complete. Reg E timelines honored.',
    },
  },

  F: {
    id: 'F',
    name: 'Compliance & NCUA Examination',
    description: 'Proactive compliance management and NCUA examination preparation.',
    objective: 'Achieve clean examination results through proactive compliance management.',
    agents: ['compliance-officer', 'internal-auditor', 'bsa-officer', 'ceo', 'core-systems-administrator'],
    steps: [
      {
        name: 'Annual Compliance Program Review',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'execute',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [
          { agentId: 'internal-auditor', agentName: 'Internal Auditor', authority: ['compliance-regulatory'] },
        ],
        description: 'Annual program review and gap assessment. Update testing calendar.',
        prompt: 'Conduct annual compliance program review. Perform gap assessment against current regulatory requirements. Update annual compliance testing calendar for the year.',
        handoffTo: 'internal-auditor',
      },
      {
        name: 'BSA/AML Program Review',
        agentId: 'bsa-officer',
        agentName: 'BSA Officer',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [
          { agentId: 'compliance-officer', agentName: 'Compliance Officer', authority: ['compliance-regulatory', 'escalation'] },
        ],
        description: 'Annual BSA/AML program review. Independent testing. Risk assessment update.',
        prompt: 'Conduct annual BSA/AML program review. Perform independent testing. Update BSA risk assessment. Review CIP, SAR/CTR processes. Verify training completion.',
        handoffTo: 'internal-auditor',
      },
      {
        name: 'Independent Audit Testing',
        agentId: 'internal-auditor',
        agentName: 'Internal Auditor',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [
          { agentId: 'compliance-officer', agentName: 'Compliance Officer', authority: ['compliance-regulatory', 'escalation'] },
        ],
        description: 'Risk-based audit of high-risk areas. Independent compliance testing.',
        prompt: 'Execute risk-based audit plan. Perform independent compliance testing in high-risk areas. Issue audit findings with management response requirements. Track open items.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Findings Remediation & Exam Prep',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'execute',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [
          { agentId: 'bsa-officer', agentName: 'BSA Officer', authority: ['compliance-regulatory'] },
        ],
        description: 'Close open findings. Assemble pre-examination document package. Brief staff.',
        prompt: 'Close all open compliance testing findings. Assemble NCUA pre-examination document package. Brief management team on exam process. Prepare staff for examiner interactions.',
        handoffTo: 'ceo',
      },
      {
        name: 'Board Compliance Briefing',
        agentId: 'ceo',
        agentName: 'Credit Union CEO',
        mode: 'gate',
        authority: ['escalation'],
        advisors: [],
        description: 'Present compliance status to board. Brief on examination readiness.',
        prompt: 'Prepare board compliance briefing. Present compliance program status, open findings, examination readiness. Report any material compliance issues. Obtain board acknowledgment.',
        gate: {
          name: 'Examination Readiness Gate',
          criteria: 'All compliance testing complete. Findings closed. BSA independent testing done. Documents assembled. Staff trained.',
          critical: true,
          authority: ['escalation'],
        },
      },
    ],
    finalGate: {
      name: 'Examination Readiness Gate',
      criteria: 'All testing complete. Findings closed. Document package assembled. Board briefed. Zero open MRAs.',
    },
  },

  G: {
    id: 'G',
    name: 'Annual Strategic Planning',
    description: 'Develop and execute 3-year strategic plan and annual operating budget.',
    objective: 'Board-approved strategic plan and budget with aligned organizational execution.',
    agents: ['ceo', 'cfo', 'branch-manager', 'chro', 'marketing-manager', 'compliance-officer', 'risk-manager'],
    steps: [
      {
        name: 'Environmental Scan',
        agentId: 'ceo',
        agentName: 'Credit Union CEO',
        mode: 'execute',
        authority: ['escalation'],
        advisors: [
          { agentId: 'cfo', agentName: 'CFO', authority: ['credit-financial', 'escalation'] },
          { agentId: 'compliance-officer', agentName: 'Compliance Officer', authority: ['compliance-regulatory', 'escalation'] },
        ],
        description: 'Commission environmental scan from all functional leaders. SWOT analysis.',
        prompt: 'Commission environmental scan. Synthesize peer benchmarking, regulatory horizon, risk landscape, member satisfaction, and technology assessment into SWOT analysis.',
        handoffTo: 'cfo',
      },
      {
        name: 'Financial Feasibility',
        agentId: 'cfo',
        agentName: 'CFO',
        mode: 'execute',
        authority: ['credit-financial', 'escalation'],
        advisors: [
          { agentId: 'risk-manager', agentName: 'Risk Manager', authority: ['credit-financial', 'escalation'] },
        ],
        description: 'Peer benchmarking. Financial feasibility modeling for each strategic priority.',
        prompt: 'Conduct peer group financial benchmarking using NCUA call report data. Model financial feasibility for proposed strategic priorities. Project capital impact.',
        handoffTo: 'ceo',
      },
      {
        name: 'Strategic Prioritization',
        agentId: 'ceo',
        agentName: 'Credit Union CEO',
        mode: 'execute',
        authority: ['escalation'],
        advisors: [
          { agentId: 'cfo', agentName: 'CFO', authority: ['credit-financial', 'escalation'] },
          { agentId: 'branch-manager', agentName: 'Branch Manager', authority: ['operational', 'escalation'] },
        ],
        description: 'Draft 3-5 strategic priorities with 3-year outcome definitions.',
        prompt: 'Draft strategic priorities based on environmental scan and financial feasibility. Define 3-year outcome metrics for each priority. Present to senior leadership for input.',
        handoffTo: 'cfo',
      },
      {
        name: 'Annual Budget',
        agentId: 'cfo',
        agentName: 'CFO',
        mode: 'execute',
        authority: ['credit-financial', 'escalation'],
        advisors: [
          { agentId: 'ceo', agentName: 'Credit Union CEO', authority: ['escalation'] },
        ],
        description: 'Draft annual budget aligned to strategic priorities. Stress test scenarios.',
        prompt: 'Draft annual operating budget aligned to strategic priorities. Consolidate departmental resource requests. Run budget stress test (rate scenario, recession scenario).',
        handoffTo: 'ceo',
      },
      {
        name: 'Board Adoption',
        agentId: 'ceo',
        agentName: 'Credit Union CEO',
        mode: 'gate',
        authority: ['escalation'],
        advisors: [],
        description: 'Board strategic planning session. Present plan and budget. Obtain adoption.',
        prompt: 'Prepare board strategic planning presentation. Present 3-year strategic plan, annual budget with scenario analysis. Obtain board adoption vote. Communicate plan to all staff.',
        gate: {
          name: 'Board Adoption Gate',
          criteria: 'Environmental scan complete. Financial feasibility modeled. Board adopts plan by Dec 31. Budget approved. Goals aligned.',
          critical: true,
          authority: ['escalation'],
        },
      },
    ],
    finalGate: {
      name: 'Strategic Planning Complete Gate',
      criteria: 'Board-approved strategic plan and budget. Individual goals aligned. Execution monitoring in place.',
    },
  },

  H: {
    id: 'H',
    name: 'Fraud Detection & Dispute Resolution',
    description: 'Investigate fraud claims and resolve Reg E disputes with compliant provisional credit and final disposition.',
    objective: 'Resolve fraud and dispute claims within Reg E timelines with documented investigation and member communication.',
    agents: ['fraud-detection', 'compliance-officer', 'member-services-representative', 'bsa-officer', 'risk-manager'],
    steps: [
      {
        name: 'Fraud Report Intake & Classification',
        agentId: 'fraud-detection',
        agentName: 'Fraud Detection & Security Analyst',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [
          { agentId: 'member-services-representative', agentName: 'Member Services Representative', authority: ['operational'] },
        ],
        description: 'Classify fraud type, open case, start Reg E clock if applicable.',
        prompt: 'Intake fraud report. Classify type: unauthorized ACH, card fraud, check fraud, wire fraud, or internal fraud. Open case file. If Reg E-covered transaction: start 10-business-day provisional credit clock. Collect initial evidence: transaction records, member statement, device/IP data.',
        handoffTo: 'member-services-representative',
      },
      {
        name: 'Initial Member Communication',
        agentId: 'member-services-representative',
        agentName: 'Member Services Representative',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'fraud-detection', agentName: 'Fraud Detection & Security Analyst', authority: ['compliance-regulatory'] },
        ],
        description: 'Contact member same day. Gather facts. Set expectations on timeline.',
        prompt: 'Contact fraud-reporting member. Gather complete transaction details: date, amount, merchant, how they discovered the fraud. Explain investigation timeline: Reg E provisional credit decision within 10 business days; final resolution within 45 days. Do NOT pre-adjudicate the claim.',
        handoffTo: 'fraud-detection',
      },
      {
        name: 'Investigation',
        agentId: 'fraud-detection',
        agentName: 'Fraud Detection & Security Analyst',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [
          { agentId: 'bsa-officer', agentName: 'BSA Officer', authority: ['compliance-regulatory'] },
          { agentId: 'risk-manager', agentName: 'Risk Manager', authority: ['credit-financial', 'escalation'] },
        ],
        description: 'Collect evidence. Review transaction patterns. Contact networks/processors.',
        prompt: 'Conduct fraud investigation. Pull full transaction history, device fingerprints, IP addresses, merchant data. Contact card network or ACH originator for records. Compare dispute to known fraud patterns. Check for SAR-reportable activity. Document all findings in case file.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Provisional Credit & Reg E Compliance',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'gate',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [],
        description: 'Evaluate provisional credit obligation. Ensure Day 10 deadline met.',
        prompt: 'Evaluate Reg E provisional credit obligation. If investigation not complete by Day 10: apply provisional credit to member account today. Verify correct amount, document application in case file. Confirm provisional credit letter sent to member. Set Day 45 final resolution deadline alert.',
        handoffTo: 'fraud-detection',
        gate: {
          name: 'Reg E Day-10 Provisional Credit Gate',
          criteria: 'Provisional credit decision made by Day 10. If credit applied: amount correct, member notified in writing. If credit withheld: documentation supports exception.',
          critical: true,
          escalateTo: 'compliance-officer',
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
      {
        name: 'Final Disposition & Member Notification',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'gate',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [],
        description: 'Issue final determination. Notify member in writing. Close or escalate.',
        prompt: 'Issue final fraud/dispute determination based on investigation findings. If unauthorized: confirm permanent credit; send final resolution letter. If authorized (member responsible): reverse provisional credit with 3-business-day notice; document evidence basis. Refer confirmed fraud patterns to BSA Officer for SAR evaluation. Close case file.',
        gate: {
          name: 'Reg E Final Resolution Gate',
          criteria: 'Final determination documented with evidence. Member notified in writing within 45 business days. Provisional credit correctly resolved. SAR referral made if applicable.',
          critical: true,
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
    ],
    finalGate: {
      name: 'Fraud Case Closure Gate',
      criteria: 'Investigation complete with documented findings. Reg E timelines met. Member notified. Case file archived. SAR referred if applicable. Loss recorded if applicable.',
    },
  },

  I: {
    id: 'I',
    name: 'Card Services & Fraud Monitoring',
    description: 'Manage debit/credit card lifecycle including fraud alerts, reissuance, chargebacks, and PIN services.',
    objective: 'Maintain card program integrity with real-time fraud monitoring, member-responsive reissuance, and compliant chargeback processing.',
    agents: ['card-services-specialist', 'fraud-detection', 'member-services-representative', 'it-infrastructure'],
    steps: [
      {
        name: 'Fraud Alert Triage',
        agentId: 'fraud-detection',
        agentName: 'Fraud Detection & Security Analyst',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [],
        description: 'Review real-time fraud alert. Score risk. Decide: block, challenge, or pass.',
        prompt: 'Triage incoming card fraud alert from monitoring system. Review: transaction amount, merchant category, velocity patterns, geolocation, device fingerprint. Score risk: LOW (pass), MEDIUM (soft decline/challenge), HIGH (hard block). If HIGH: suspend card immediately and trigger member notification.',
        handoffTo: 'card-services-specialist',
      },
      {
        name: 'Card Suspension & Member Contact',
        agentId: 'card-services-specialist',
        agentName: 'Card Services Specialist',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'fraud-detection', agentName: 'Fraud Detection & Security Analyst', authority: ['compliance-regulatory'] },
        ],
        description: 'Suspend compromised card. Contact member. Confirm fraud or false positive.',
        prompt: 'Suspend card flagged for fraud. Initiate member contact via automated fraud alert (text/call). If member confirms fraud: proceed to reissue and dispute. If member confirms legitimate transaction (false positive): remove block, document the false positive, update fraud rules to reduce future false positives for this member profile.',
        handoffTo: 'card-services-specialist',
      },
      {
        name: 'Chargeback Processing',
        agentId: 'card-services-specialist',
        agentName: 'Card Services Specialist',
        mode: 'execute',
        authority: ['operational'],
        advisors: [],
        description: 'File chargeback with card network. Track reason code deadlines.',
        prompt: 'Process card chargeback with Visa/Mastercard network. Select correct reason code based on dispute type (unauthorized, non-receipt, defective goods, etc.). Compile required documentation per reason code. Submit within network deadline (varies: 45-120 days by reason code). Track chargeback status.',
        handoffTo: 'fraud-detection',
      },
      {
        name: 'Card Reissue & Case Closure',
        agentId: 'card-services-specialist',
        agentName: 'Card Services Specialist',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'fraud-detection', agentName: 'Fraud Detection & Security Analyst', authority: ['compliance-regulatory'] },
        ],
        description: 'Reissue replacement card. Update recurring payments. Close case.',
        prompt: 'Reissue replacement card with new PAN. Update card production queue for standard mail (5-7 business days) or rush delivery if hardship. Advise member to update recurring billing merchants. Confirm activation process. Update fraud case file with resolution. Monitor new card for 30 days post-reissue.',
        gate: {
          name: 'Card Services Resolution Gate',
          criteria: 'Compromised card suspended. Chargeback filed within network deadline. Replacement card ordered. Member notified of resolution. Reg E provisional credit applied if applicable.',
          critical: false,
          authority: ['operational'],
        },
      },
    ],
    finalGate: {
      name: 'Card Case Closure Gate',
      criteria: 'Fraud alert resolved. Card reissued. Chargeback filed within deadline. Member notified. Case documented for pattern analysis.',
    },
  },

  J: {
    id: 'J',
    name: 'IT Security & Incident Response',
    description: 'Respond to cybersecurity incidents and fulfill GLBA/NCUA Part 748 information security program obligations.',
    objective: 'Contain, eradicate, and recover from security incidents while meeting regulatory notification requirements and maintaining board oversight.',
    agents: ['it-infrastructure', 'core-systems', 'software-engineer', 'compliance-officer', 'risk-manager', 'ceo'],
    steps: [
      {
        name: 'Incident Detection & Triage',
        agentId: 'it-infrastructure',
        agentName: 'IT Infrastructure Engineer',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'compliance-officer', agentName: 'Compliance Officer', authority: ['compliance-regulatory', 'escalation'] },
          { agentId: 'ceo', agentName: 'Credit Union CEO', authority: ['escalation'] },
        ],
        description: 'Classify incident. Assess scope. Activate response team.',
        prompt: 'Triage security incident alert. Classify severity: P1 (active breach/ransomware/data exfiltration), P2 (malware/unauthorized access detected), P3 (vulnerability/policy violation). Assess scope: number of systems affected, data types involved, member data exposure? Activate appropriate response team. For P1/P2: notify Compliance Officer and CEO immediately.',
        handoffTo: 'core-systems',
      },
      {
        name: 'Containment',
        agentId: 'core-systems',
        agentName: 'Core Systems Administrator',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'it-infrastructure', agentName: 'IT Infrastructure Engineer', authority: ['operational'] },
        ],
        description: 'Isolate affected systems. Preserve evidence. Prevent lateral movement.',
        prompt: 'Execute containment procedures. Isolate affected systems from network. Preserve evidence: disk images, log files, memory dumps before remediation. Block malicious IPs/domains at firewall. Revoke compromised credentials. Verify core banking system integrity — if core affected: activate business continuity plan. Document all containment actions with timestamps.',
        handoffTo: 'it-infrastructure',
      },
      {
        name: 'Eradication & Recovery',
        agentId: 'it-infrastructure',
        agentName: 'IT Infrastructure Engineer',
        mode: 'execute',
        authority: ['operational'],
        advisors: [
          { agentId: 'core-systems', agentName: 'Core Systems Administrator', authority: ['operational'] },
        ],
        description: 'Remove threat. Restore systems from clean backups. Verify integrity.',
        prompt: 'Execute eradication and recovery. Remove malware/threat actor access. Patch exploited vulnerability. Restore affected systems from last-known-clean backup (verify backup integrity before restore). Run security scan on restored systems. Restore systems to production in controlled sequence. Monitor for threat reoccurrence for 72 hours post-recovery.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Regulatory Notification Assessment',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'gate',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [],
        description: 'Assess notification obligations: NCUA, state breach laws, member notification.',
        prompt: 'Assess regulatory notification obligations based on incident scope. NCUA Part 748: Does incident meet "security incident" definition requiring board reporting? State breach notification laws: Was unencrypted member personal information exposed? (Most states: 30-day notification clock from discovery). GLBA: Update Information Security Program if root cause reveals program gap. Prepare notification drafts for any required recipients. CEO decision required for member notification.',
        handoffTo: 'ceo',
        gate: {
          name: 'Regulatory Notification Gate',
          criteria: 'Notification obligations assessed for all applicable laws (NCUA, state, GLBA). Decision documented with legal basis. Notification sent within required window if triggered.',
          critical: true,
          escalateTo: 'ceo',
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
      {
        name: 'Post-Incident Review & Board Report',
        agentId: 'ceo',
        agentName: 'Chief Executive Officer',
        mode: 'gate',
        authority: ['escalation'],
        advisors: [],
        description: 'Brief board. Approve remediation plan. Report to NCUA if required.',
        prompt: 'Conduct post-incident review. Brief board at next meeting (or emergency session for P1): incident timeline, scope, containment actions, regulatory notifications sent, member impact. Approve IT remediation and security improvement plan. For NCUA: prepare annual Information Security Program report update. Document board acknowledgment.',
        gate: {
          name: 'Incident Closure Gate',
          criteria: 'Threat eradicated. Systems restored. All notifications sent within required windows. Board briefed. Remediation plan approved. Post-incident documentation archived.',
          critical: true,
          authority: ['escalation'],
        },
      },
    ],
    finalGate: {
      name: 'Security Incident Closure Gate',
      criteria: 'Threat contained and eradicated. Systems restored to clean state. Regulatory notifications sent. Board briefed. Lessons learned documented. GLBA program updated if applicable.',
    },
  },

  K: {
    id: 'K',
    name: 'BSA/AML Monitoring & SAR Filing',
    description: 'Execute the full BSA/AML compliance program: transaction monitoring, SAR investigations, CTR filing, and OFAC screening.',
    objective: 'Maintain a fully compliant BSA/AML program with timely SAR and CTR filings, documented investigations, and examination-ready records.',
    agents: ['bsa-officer', 'compliance-officer', 'risk-manager', 'member-services-representative', 'core-systems'],
    steps: [
      {
        name: 'Transaction Monitoring Alert Review',
        agentId: 'bsa-officer',
        agentName: 'BSA Officer',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [],
        description: 'Review automated monitoring alerts. Dismiss or escalate to investigation.',
        prompt: 'Review BSA transaction monitoring alert queue. For each alert: assess transaction context against member profile and stated account purpose. Decision: DISMISS with documented rationale, or INVESTIGATE (open SAR case — 30-day filing clock begins). CTR queue: identify all cash transactions ≥$10,000 from prior business day — CTR must be filed within 15 calendar days. Document every alert disposition.',
        handoffTo: 'bsa-officer',
      },
      {
        name: 'SAR Investigation',
        agentId: 'bsa-officer',
        agentName: 'BSA Officer',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [
          { agentId: 'member-services-representative', agentName: 'Member Services Representative', authority: ['operational'] },
          { agentId: 'compliance-officer', agentName: 'Compliance Officer', authority: ['compliance-regulatory', 'escalation'] },
        ],
        description: 'Investigate suspicious activity. Pull history. Contact relationship officers.',
        prompt: 'Conduct SAR investigation. Pull 12-month transaction history for flagged account. Review CIP file and account opening purpose. Contact relationship officer (Branch Manager, Loan Officer) for member context — do NOT contact member. Check FinCEN 314(a) list. Review for structuring patterns (transactions designed to avoid $10,000 CTR threshold). Document all findings in SAR log.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'SAR Decision & Filing',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        mode: 'gate',
        authority: ['compliance-regulatory', 'escalation'],
        advisors: [],
        description: 'Review investigation. File SAR or document no-file decision. Notify CEO.',
        prompt: 'Review SAR investigation findings. Decision: FILE (suspicious activity ≥$5,000 with identified subject; any amount if no subject) or NO FILE (document specific basis). If filing: review SAR narrative for completeness — must be factually specific, no speculation, sufficient for law enforcement. File via FinCEN BSA E-Filing within 30 days of detection. Notify CEO of SAR filing (not content — tipping-off prohibition). NEVER notify member.',
        handoffTo: 'bsa-officer',
        gate: {
          name: 'SAR Filing Compliance Gate',
          criteria: 'SAR decision made within 30 days of trigger. If filed: narrative complete, filed via FinCEN E-Filing, confirmation retained. If not filed: specific documented rationale. CEO notified. No member notification.',
          critical: true,
          escalateTo: 'compliance-officer',
          authority: ['compliance-regulatory', 'escalation'],
        },
      },
      {
        name: 'CTR Processing & OFAC Screening',
        agentId: 'bsa-officer',
        agentName: 'BSA Officer',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [],
        description: 'File CTRs within 15 days. Process OFAC hits with required freeze and reporting.',
        prompt: 'Process Currency Transaction Reports for all cash transactions ≥$10,000. Verify no exemption applies (Phase I: banks/government; Phase II: established cash businesses with board approval). File CTR via FinCEN BSA E-Filing within 15 calendar days. OFAC screening: review any SDN list matches — confirmed match requires immediate account freeze and OFAC reporting within 10 business days. Document all CTR filings and OFAC outcomes.',
      },
      {
        name: 'BSA Program Examination Support',
        agentId: 'bsa-officer',
        agentName: 'BSA Officer',
        mode: 'execute',
        authority: ['compliance-regulatory'],
        advisors: [],
        description: 'Maintain examination-ready BSA program documentation. Support annual audit.',
        prompt: 'Prepare BSA program documentation for examination readiness. Compile: SAR log (filed and no-file decisions), CTR filing register with FinCEN confirmations, OFAC screening log, CIP exception report, 314(a) search log, training records, independent audit results. Confirm BSA Policy Board approval is current. Present to Compliance Officer for examination preparation.',
        gate: {
          name: 'BSA Program Readiness Gate',
          criteria: 'SAR log complete (all decisions documented). CTR filings current. OFAC log maintained. CIP exception report current. Training records up to date. BSA Policy board-approved within last 12 months.',
          critical: true,
          authority: ['compliance-regulatory'],
        },
      },
    ],
    finalGate: {
      name: 'BSA Program Cycle Closure Gate',
      criteria: 'All monitoring alerts dispositioned. SARs filed timely. CTRs filed timely. OFAC hits resolved. Program documentation examination-ready. Board BSA report current.',
    },
  },
};
