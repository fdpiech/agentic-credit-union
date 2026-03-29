export class WorkflowContext {
  constructor(workflowId, scenario) {
    this.workflowId = workflowId;
    this.scenario = scenario;
    this.memberId = scenario.member?.id || `MBR-${Date.now()}`;
    this.memberName = scenario.member?.name || 'Unknown Member';
    this.steps = [];
    this.handoffs = [];
    this.gates = [];
    this.complianceFlags = [];
    this.escalations = [];
    this.sharedState = {};
    this.startTime = new Date();
  }

  addStep(stepResult) {
    this.steps.push({
      ...stepResult,
      timestamp: new Date().toISOString(),
      stepIndex: this.steps.length,
    });
  }

  addHandoff(handoff) {
    this.handoffs.push({
      ...handoff,
      timestamp: new Date().toISOString(),
    });
  }

  addGateResult(gateResult) {
    this.gates.push(gateResult);
  }

  addComplianceFlag(flag) {
    this.complianceFlags.push({
      ...flag,
      timestamp: new Date().toISOString(),
    });
  }

  addEscalation(escalation) {
    this.escalations.push({
      ...escalation,
      timestamp: new Date().toISOString(),
    });
  }

  setShared(key, value) {
    this.sharedState[key] = value;
  }

  getShared(key) {
    return this.sharedState[key];
  }

  getStepHistory() {
    return this.steps.map(s => ({
      agent: s.agentName,
      step: s.stepName,
      output: s.output?.substring(0, 200) + '...',
    }));
  }

  toHandoffContext() {
    return {
      memberId: this.memberId,
      memberName: this.memberName,
      stepsCompleted: this.steps.length,
      stepHistory: this.getStepHistory(),
      complianceFlags: this.complianceFlags,
      sharedState: this.sharedState,
    };
  }

  summary() {
    const elapsed = ((Date.now() - this.startTime.getTime()) / 1000).toFixed(1);
    return {
      workflow: this.workflowId,
      member: `${this.memberName} (${this.memberId})`,
      stepsCompleted: this.steps.length,
      handoffs: this.handoffs.length,
      gatesPassed: this.gates.filter(g => g.passed).length,
      gatesFailed: this.gates.filter(g => !g.passed).length,
      complianceFlags: this.complianceFlags.length,
      escalations: this.escalations.length,
      elapsedSeconds: parseFloat(elapsed),
    };
  }
}
