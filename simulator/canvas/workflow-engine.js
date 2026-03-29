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
      const response = await this.llm.chat(systemPrompt, userPrompt, 'Gate Evaluator');
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
        description: 'Verify field of membership eligibility, explain cooperative difference, collect ID and documentation.',
        prompt: 'Begin new member onboarding. Verify eligibility, collect documentation, explain cooperative ownership structure. Open share savings account.',
        handoffTo: 'bsa-officer',
      },
      {
        name: 'CIP / BSA Verification',
        agentId: 'bsa-officer',
        agentName: 'BSA Officer',
        description: 'Verify identity per BSA CIP. Screen against OFAC/SDN and FinCEN 314(a) lists.',
        prompt: 'Perform Customer Identification Program verification. Screen against OFAC/SDN list and FinCEN 314(a). Document results in CIP file.',
        handoffTo: 'member-services-representative',
      },
      {
        name: 'Account Opening & Disclosures',
        agentId: 'member-services-representative',
        agentName: 'Member Services Representative',
        description: 'Open share savings, deliver Truth in Savings and privacy disclosures, configure digital banking.',
        prompt: 'CIP is clear. Open share savings and checking accounts. Deliver Truth in Savings, privacy notice, and Reg CC disclosures. Configure online banking and mobile app.',
      },
      {
        name: 'Needs Discovery',
        agentId: 'financial-advisor',
        agentName: 'Financial Advisor',
        description: '5-minute financial wellness conversation. Identify immediate and future needs.',
        prompt: 'Conduct financial needs discovery with new member. Identify current banking relationships, debts, and financial goals. Create referral list with priorities.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Cross-Sell & Welcome Sequence',
        agentId: 'marketing-manager',
        agentName: 'Marketing Manager',
        description: 'Enroll member in welcome email sequence and marketing segments based on needs discovery.',
        prompt: 'Activate 30-day welcome email sequence. Apply marketing segment tags based on needs discovery. Prepare cross-sell campaign enrollments.',
      },
      {
        name: 'Quality Gate — Compliance Verification',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        description: 'Verify CIP complete, OFAC clear, disclosures delivered. Sign off on new member file.',
        prompt: 'Perform compliance quality gate verification. Confirm CIP file complete, OFAC screen clear, all required disclosures delivered and acknowledged. Approve or flag for remediation.',
        gate: {
          name: 'CIP/BSA Compliance Gate',
          criteria: 'CIP identity verification 100% complete. OFAC/SDN screen negative. Required disclosures (Truth in Savings, Privacy, Reg CC) delivered and acknowledged.',
          critical: true,
          escalateTo: 'ceo',
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
        description: 'Conduct member interview, obtain credit authorization, pull credit, request income docs.',
        prompt: 'Begin loan application intake. Conduct member interview for auto loan refinance. Obtain signed credit authorization, pull tri-merge credit report, conduct fraud screen. Request income documentation.',
        handoffTo: 'loan-officer',
      },
      {
        name: 'Underwriting Analysis',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        description: 'Complete loan analysis worksheet. Calculate DTI, LTV, payment-to-income. Make credit recommendation.',
        prompt: 'Perform underwriting analysis. Complete loan analysis worksheet with DTI, LTV calculations. Apply risk-based pricing matrix. Prepare recommendation: Approve, Counter, or Decline.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Compliance Review',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        description: 'Verify ECOA compliance, TILA disclosures, adverse action tracking, HMDA flags.',
        prompt: 'Perform pre-decision compliance review on loan application. Verify ECOA compliance, confirm application date logged for adverse action clock, check TILA disclosure accuracy, flag HMDA-reportable applications.',
        handoffTo: 'loan-officer',
      },
      {
        name: 'Decision Communication',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        description: 'Communicate decision to member. For declines, issue adverse action notice within 30 days.',
        prompt: 'Communicate loan decision to member. Application is APPROVED. Confirm terms, schedule closing, send approval letter. Document communication in member notes.',
      },
      {
        name: 'Closing & Funding',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        description: 'Prepare loan documents, obtain signatures, disburse funds, perfect collateral interest.',
        prompt: 'Process loan closing. Prepare loan package: Note, TILA disclosure, security agreement. Obtain member signatures. Disburse funds. Perfect lien interest. Board to core system.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Post-Close Quality Check',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        description: 'Verify adverse action notices, TILA accuracy, HMDA data, file archival.',
        prompt: 'Perform post-close quality review. Verify TILA disclosure accuracy, adverse action notice compliance, HMDA data recording, lien confirmation. Archive file per retention policy.',
        gate: {
          name: 'Loan Origination Quality Gate',
          criteria: 'Credit authorization signed before pull. Loan analysis complete. TILA accurate. Adverse action issued if applicable. Lien perfected.',
          critical: true,
          escalateTo: 'ceo',
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
        description: 'Application interview, pre-qualification, deliver Loan Estimate within 3 business days.',
        prompt: 'Begin mortgage application intake. Conduct application interview. Deliver Loan Estimate within 3 business days. Initiate rate lock per pipeline policy.',
        handoffTo: 'mortgage-loan-processor',
      },
      {
        name: 'Processing — Document Collection',
        agentId: 'mortgage-loan-processor',
        agentName: 'Mortgage Loan Processor',
        description: 'Order appraisal, title, flood cert. Collect income/asset docs. Run automated underwriting.',
        prompt: 'Begin mortgage processing. Order appraisal, title search, flood certification. Collect and verify all income and asset documents. Run automated underwriting (DU/LP).',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Compliance — TRID & HMDA Check',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        description: 'Verify Loan Estimate timing and accuracy. HMDA data collection. Change-of-circumstance review.',
        prompt: 'Perform TRID compliance review. Verify Loan Estimate delivery timing and accuracy. Confirm HMDA data collection. Review any change-of-circumstance disclosures.',
        handoffTo: 'mortgage-loan-processor',
      },
      {
        name: 'Underwriting & Conditions',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        description: 'Final credit decision. Satisfy underwriting conditions. Exception review if needed.',
        prompt: 'Make final credit decision on mortgage application. Review and satisfy all underwriting conditions. Document any guideline exceptions with compensating factors.',
        handoffTo: 'mortgage-loan-processor',
      },
      {
        name: 'Closing Preparation — Closing Disclosure',
        agentId: 'mortgage-loan-processor',
        agentName: 'Mortgage Loan Processor',
        description: 'Prepare Closing Disclosure. Deliver 3 business days before closing. Coordinate with title.',
        prompt: 'Prepare Closing Disclosure. Verify CD accuracy against Loan Estimate (tolerance comparison). Deliver CD at least 3 business days before scheduled closing. Coordinate with title company.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Closing, Funding & Post-Close',
        agentId: 'mortgage-loan-processor',
        agentName: 'Mortgage Loan Processor',
        description: 'Closing table, funding, lien recording, secondary market delivery, HMDA LAR entry.',
        prompt: 'Complete mortgage closing and funding. Coordinate closing table. Fund after right-of-rescission period if applicable. Record deed of trust. Prepare secondary market delivery. Enter HMDA LAR data.',
        gate: {
          name: 'TRID Compliance Gate',
          criteria: 'Loan Estimate delivered within 3 business days. Closing Disclosure delivered 3+ business days before close. All income/assets verified. HMDA recorded.',
          critical: true,
          escalateTo: 'compliance-officer',
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
        description: 'Automated reminder at Day 5, first live contact at Day 10, second attempt at Day 20.',
        prompt: 'Begin early delinquency outreach for member loan. Automated payment reminder sent Day 5. Conduct first live outreach attempt (phone). Log contact attempt with date, time, method, result.',
        handoffTo: 'financial-advisor',
      },
      {
        name: 'Hardship Screening',
        agentId: 'financial-advisor',
        agentName: 'Financial Advisor',
        description: 'Screen for financial hardship indicators. Trigger assessment if indicators present.',
        prompt: 'Screen member for financial hardship indicators. Conduct budget review if hardship detected. Identify modification or counseling options. Document assessment in member file.',
        handoffTo: 'collections-specialist',
      },
      {
        name: 'Escalated Outreach (30-59 DPD)',
        agentId: 'collections-specialist',
        agentName: 'Collections Specialist',
        description: 'Intensified outreach. Request payment arrangement. FDCPA-compliant communication.',
        prompt: 'Escalated collection effort for 30+ DPD account. Conduct phone + written notice outreach. Request payment arrangement. All communications must be FDCPA-compliant. Log every contact attempt.',
        handoffTo: 'loan-officer',
      },
      {
        name: 'Workout Evaluation',
        agentId: 'loan-officer',
        agentName: 'Loan Officer',
        description: 'Evaluate loan modification, deferral, extension, or rate reduction options.',
        prompt: 'Evaluate workout options for delinquent member loan. Consider deferral, extension, rate reduction. Document modification terms. Execute workout agreement if member agrees.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Compliance — FDCPA Review',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        description: 'Verify FDCPA-compliant communication practices. Credit bureau reporting accuracy.',
        prompt: 'Review collections communications for FDCPA compliance. Verify credit bureau reporting accuracy. Confirm SCRA verification before any repossession consideration.',
        gate: {
          name: 'Collections Compliance Gate',
          criteria: 'All communications FDCPA-compliant. Credit bureau reporting accurate. Workout documented if executed. SCRA verified.',
          critical: true,
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
        description: 'Document Reg E dispute. Collect transaction details. Initiate provisional credit clock.',
        prompt: 'Intake Reg E dispute from member. Document transaction details: date, amount, description. Notify member of 10-business-day provisional credit timeline and 45-day resolution window.',
        handoffTo: 'bsa-officer',
      },
      {
        name: 'BSA/Fraud Screening',
        agentId: 'bsa-officer',
        agentName: 'BSA Officer',
        description: 'Screen for fraud indicators. Determine if SAR filing is warranted.',
        prompt: 'Screen Reg E dispute for fraud indicators. Evaluate transaction patterns. Determine if suspicious activity report (SAR) filing is warranted. Document screening results.',
        handoffTo: 'deposit-operations-manager',
      },
      {
        name: 'Provisional Credit & Investigation',
        agentId: 'deposit-operations-manager',
        agentName: 'Deposit Operations Manager',
        description: 'Apply provisional credit by Day 10. Conduct investigation. Resolve within 45 days.',
        prompt: 'Process Reg E dispute resolution. Apply provisional credit within 10 business days. Conduct investigation. Prepare final resolution within 45-day window. Document all actions.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Compliance Verification',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        description: 'Verify Reg E timeline compliance. Review resolution letter accuracy.',
        prompt: 'Verify Reg E dispute resolution compliance. Confirm provisional credit applied within 10 business days. Review resolution letter for accuracy. Confirm 45-day deadline met.',
        gate: {
          name: 'Reg E Compliance Gate',
          criteria: 'Provisional credit applied within 10 business days. Final resolution within 45 days. Resolution letter accurate. BSA screening complete.',
          critical: true,
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
        description: 'Annual program review and gap assessment. Update testing calendar.',
        prompt: 'Conduct annual compliance program review. Perform gap assessment against current regulatory requirements. Update annual compliance testing calendar for the year.',
        handoffTo: 'internal-auditor',
      },
      {
        name: 'BSA/AML Program Review',
        agentId: 'bsa-officer',
        agentName: 'BSA Officer',
        description: 'Annual BSA/AML program review. Independent testing. Risk assessment update.',
        prompt: 'Conduct annual BSA/AML program review. Perform independent testing. Update BSA risk assessment. Review CIP, SAR/CTR processes. Verify training completion.',
        handoffTo: 'internal-auditor',
      },
      {
        name: 'Independent Audit Testing',
        agentId: 'internal-auditor',
        agentName: 'Internal Auditor',
        description: 'Risk-based audit of high-risk areas. Independent compliance testing.',
        prompt: 'Execute risk-based audit plan. Perform independent compliance testing in high-risk areas. Issue audit findings with management response requirements. Track open items.',
        handoffTo: 'compliance-officer',
      },
      {
        name: 'Findings Remediation & Exam Prep',
        agentId: 'compliance-officer',
        agentName: 'Compliance Officer',
        description: 'Close open findings. Assemble pre-examination document package. Brief staff.',
        prompt: 'Close all open compliance testing findings. Assemble NCUA pre-examination document package. Brief management team on exam process. Prepare staff for examiner interactions.',
        handoffTo: 'ceo',
      },
      {
        name: 'Board Compliance Briefing',
        agentId: 'ceo',
        agentName: 'Credit Union CEO',
        description: 'Present compliance status to board. Brief on examination readiness.',
        prompt: 'Prepare board compliance briefing. Present compliance program status, open findings, examination readiness. Report any material compliance issues. Obtain board acknowledgment.',
        gate: {
          name: 'Examination Readiness Gate',
          criteria: 'All compliance testing complete. Findings closed. BSA independent testing done. Documents assembled. Staff trained.',
          critical: true,
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
        description: 'Commission environmental scan from all functional leaders. SWOT analysis.',
        prompt: 'Commission environmental scan. Synthesize peer benchmarking, regulatory horizon, risk landscape, member satisfaction, and technology assessment into SWOT analysis.',
        handoffTo: 'cfo',
      },
      {
        name: 'Financial Feasibility',
        agentId: 'cfo',
        agentName: 'CFO',
        description: 'Peer benchmarking. Financial feasibility modeling for each strategic priority.',
        prompt: 'Conduct peer group financial benchmarking using NCUA call report data. Model financial feasibility for proposed strategic priorities. Project capital impact.',
        handoffTo: 'ceo',
      },
      {
        name: 'Strategic Prioritization',
        agentId: 'ceo',
        agentName: 'Credit Union CEO',
        description: 'Draft 3-5 strategic priorities with 3-year outcome definitions.',
        prompt: 'Draft strategic priorities based on environmental scan and financial feasibility. Define 3-year outcome metrics for each priority. Present to senior leadership for input.',
        handoffTo: 'cfo',
      },
      {
        name: 'Annual Budget',
        agentId: 'cfo',
        agentName: 'CFO',
        description: 'Draft annual budget aligned to strategic priorities. Stress test scenarios.',
        prompt: 'Draft annual operating budget aligned to strategic priorities. Consolidate departmental resource requests. Run budget stress test (rate scenario, recession scenario).',
        handoffTo: 'ceo',
      },
      {
        name: 'Board Adoption',
        agentId: 'ceo',
        agentName: 'Credit Union CEO',
        description: 'Board strategic planning session. Present plan and budget. Obtain adoption.',
        prompt: 'Prepare board strategic planning presentation. Present 3-year strategic plan, annual budget with scenario analysis. Obtain board adoption vote. Communicate plan to all staff.',
        gate: {
          name: 'Board Adoption Gate',
          criteria: 'Environmental scan complete. Financial feasibility modeled. Board adopts plan by Dec 31. Budget approved. Goals aligned.',
          critical: true,
        },
      },
    ],
    finalGate: {
      name: 'Strategic Planning Complete Gate',
      criteria: 'Board-approved strategic plan and budget. Individual goals aligned. Execution monitoring in place.',
    },
  },
};
