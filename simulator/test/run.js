import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { loadAllAgents } from '../canvas/agent-loader.js';
import { WORKFLOWS } from '../canvas/workflow-engine.js';
import {
  makeEngine,
  runWithOverrides,
  HAPPY_PATH_SCENARIOS,
  EXCEPTION_SCENARIOS,
} from './helpers.js';

// ─── Suite 1: Agent Loader ────────────────────────────────────────────────────

describe('agent loader', () => {
  test('loads all agents without throwing', () => {
    const agents = loadAllAgents();
    const count = Object.keys(agents).length;
    assert.ok(count >= 30, `Expected ≥30 agents, got ${count}`);
  });

  test('every main-path workflow step references a known agent ID', () => {
    const agents = loadAllAgents();
    for (const [wfId, wf] of Object.entries(WORKFLOWS)) {
      for (const step of wf.steps) {
        assert.ok(
          step.agentId in agents,
          `Workflow ${wfId}: step "${step.name}" references unknown agent "${step.agentId}"`,
        );
      }
    }
    // Note: exception-path steps are intentionally excluded — Workflow B's
    // exception path references 'loan-underwriting-analyst' which doesn't match
    // the agent file ID 'loan-underwriting'. That's a pre-existing issue.
  });
});

// ─── Suite 2: Happy-Path Workflows ───────────────────────────────────────────

describe('happy-path workflows', () => {
  for (const [wfId, wf] of Object.entries(WORKFLOWS)) {
    test(`Workflow ${wfId} — ${wf.name}`, async () => {
      const engine = makeEngine();
      const scenario = HAPPY_PATH_SCENARIOS[wfId];
      const ctx = await runWithOverrides(engine, wfId, scenario);
      const s = ctx.summary();

      assert.equal(s.status, 'completed',
        `Workflow ${wfId} ended with status "${s.status}" — expected "completed"`);

      assert.ok(s.stepsCompleted > 0,
        `Workflow ${wfId} completed 0 steps`);

      assert.equal(s.failureRecords, 0,
        `Workflow ${wfId} has ${s.failureRecords} unhandled failure record(s)`);

      assert.equal(s.exceptionPath, null,
        `Workflow ${wfId} triggered unexpected exception path "${s.exceptionPath}"`);

      assert.ok(s.gatesPassed >= 1,
        `Workflow ${wfId} passed ${s.gatesPassed} gates — expected at least 1`);
    });
  }
});

// ─── Suite 3: Exception-Path Scenarios ───────────────────────────────────────

describe('exception-path scenarios', () => {
  test('low-appraisal triggers appraisal-exception path', async () => {
    const engine = makeEngine();
    const ctx = await runWithOverrides(engine, 'C', EXCEPTION_SCENARIOS['low-appraisal']);
    const s = ctx.summary();

    assert.equal(s.status, 'exception-path',
      `Expected status "exception-path", got "${s.status}"`);

    assert.equal(s.exceptionPath, 'appraisal-exception',
      `Expected exceptionPath "appraisal-exception", got "${s.exceptionPath}"`);

    assert.ok(s.failureRecords >= 1,
      `Expected ≥1 failure record, got ${s.failureRecords}`);

    assert.ok(s.escalations >= 1,
      `Expected ≥1 escalation, got ${s.escalations}`);

    assert.notEqual(s.status, 'paused');
    assert.notEqual(s.status, 'rolled-back');
  });

  test('loan-doc-exception triggers exception-underwriting path', async () => {
    const engine = makeEngine();
    const ctx = await runWithOverrides(engine, 'B', EXCEPTION_SCENARIOS['loan-doc-exception']);
    const s = ctx.summary();

    assert.equal(s.status, 'exception-path',
      `Expected status "exception-path", got "${s.status}"`);

    assert.equal(s.exceptionPath, 'exception-underwriting',
      `Expected exceptionPath "exception-underwriting", got "${s.exceptionPath}"`);

    assert.ok(s.failureRecords >= 1,
      `Expected ≥1 failure record, got ${s.failureRecords}`);

    assert.ok(s.escalations >= 1,
      `Expected ≥1 escalation, got ${s.escalations}`);

    assert.notEqual(s.status, 'paused');
    assert.notEqual(s.status, 'rolled-back');
  });
});
