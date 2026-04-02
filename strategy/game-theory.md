# Credit Union Game Theory — Research Findings

_Last updated: 2026-04-02_

---

## Executive Summary

Game theory provides a rigorous mathematical framework for modeling how credit union agents can cooperate, compete, and negotiate. The core insight: **credit unions are naturally cooperative games** — member-owned, member-controlled institutions where cooperation benefits all members.

---

## 1. Foundational Concepts

### 1.1 Multi-Agent Orchestration

**Source:** "Multi-Agent Collaboration via Evolving Orchestration" (arXiv 2505.19591, NeurIPS 2025)

| Concept | Application to CANVAS |
|---------|----------------------|
| Centralized orchestrator ("puppeteer") directs agents dynamically | CANVAS supervisor agent |
| RL-trained to adaptively sequence/prioritize agents | Dynamic task routing |
| Emergent compact reasoning structures | Self-optimizing workflows |

**Key insight:** A centralized orchestrator that learns to direct sub-agents is directly applicable to CANVAS. The supervisor agent can use RL to learn optimal agent orchestration patterns.

---

### 1.2 Trust via Tit-for-Tat

**Source:** Robert Axelrod, "The Evolution of Cooperation" (1980s tournaments)

| Property | Description |
|----------|-------------|
| **Nice** | Initiates cooperation |
| **Provocable** | Defects after opponent defects |
| **Forgiving** | Cooperates again after opponent cooperates |
| **Clear** | Predictable strategy |

**Application to CANVAS agents:**

```
IF agent receives cooperative handoff:
    ACCEPT and proceed
ELSE IF agent receives defensive handoff:
    ESCALATE to supervisor
ELSE:
    MAINTAIN current state
```

**Why it matters:** Tit-for-Tat won repeated prisoner's dilemma tournaments — it's simple, robust, and builds trust over time. Perfect for member-facing agent handoffs.

---

### 1.3 Hyperagents — Self-Improving Agents

**Source:** "Hyperagents" (arXiv 2603.19461, March 2026)

| Concept | Application |
|---------|-------------|
| Self-referential agents | Can modify their own prompts |
| Meta-cognitive self-modification | Auto-Dream memory consolidation |
| Open-ended improvement | Ongoing agent enhancement |

**Application:** Hyperagents concept enables the Auto-Dream feature from the enhancement plan — agents that improve their own learning processes.

---

## 2. Cooperative Game Theory

### 2.1 Shapley Value — Fair Distribution

**Source:** Lloyd Shapley (1951)

| Property | Description |
|----------|-------------|
| **Efficiency** | Total payoff distributed |
| **Symmetry** | Equal contributions → equal payoffs |
| **Additivity** | Sum of parts equals whole |
| **Dummy player** | Zero-contribution players get nothing |

**Application:** Shapley value can calculate each agent's contribution to member outcomes. Useful for:
- Attribution reporting (which agent solved the member's issue)
- Resource allocation (compute costs fairly)
- Performance metrics

---

### 2.2 The Core — Stability

**Source:** Gillies/Edgeworth (1881), formalised by Shapley

| Concept | Definition |
|---------|------------|
| **Core** | Allocations where no coalition can benefit by leaving |
| **Empty core** | Unstable — some members would leave |
| **Balanced game** | Game with non-empty core |

**CU Stability Test:**

```
FOR each potential coalition of members:
    IF coalition value > their current allocation:
        CORE is EMPTY → unstable
        BREAK
IF no coalition can improve:
    CORE is NON-EMPTY → stable
```

**Why it matters:** Credit unions that offer better value than members could get elsewhere have a non-empty core — stable membership. CANVAS agents help maintain this by delivering superior member experience.

---

### 2.3 Principal-Agent Problem

**Source:** Economics literature

| Role | CU Mapping |
|------|-----------|
| **Principal** | Member (owns the CU) |
| **Agent** | CU staff/agents (acts for members) |
| **Agency cost** | Deviation from member's interest |

**Application to CANVAS:**
- Agents optimize for member benefit, not CU convenience
- Transparency: members see what agents see/do
- Accountability: audit trails for all decisions

---

## 3. Strategic Frameworks for Agents

### 3.1 Agent Interaction Matrix

| Member → Agent | Cooperative Response | Defensive Response |
|---------------|---------------------|-------------------|
| **Cooperative** | Full authority | Limited scope |
| **Defensive** | Offer help | Escalate |

### 3.2 Negotiation Protocols

**Source:** Jennings et al. (2001), "Automated negotiation: prospects, methods and challenges"

| Protocol | Use Case |
|---------|----------|
| **Offer-Counteroffer** | Loan terms, rates |
| **Auction** | Loan pricing |
| **Mediation** | Dispute resolution |
| **Coalition formation** | Group lending |

---

## 4. Benchmarks

### 4.1 PokerBattle.ai (LLM Poker Tournament)

| Rank | Model | Final Bankroll |
|------|-------|----------------|
| 🥇 | OpenAI o3 | $136,691 |
| 🥈 | Claude Sonnet 4.5 | $133,641 |
| 🥉 | Grok | $128,796 |
| #4 | DeepSeek R1 | $118,416 |
| #5 | Gemini 2.5 Pro | $114,655 |

**Relevance:** Multi-agent strategic reasoning benchmark. LLMs ranked by poker performance directly applicable to negotiation agents.

---

### 4.2 TensorFlow Agents (TF-Agents)

| Algorithm | Use Case |
|-----------|----------|
| **DQN** | Q-learning for decisions |
| **PPO** | Policy optimization |
| **SAC** | Continuous control |
| **Multi-armed Bandits** | A/B testing, routing |

**Library:** `tensorflow/agents` — production-ready RL for agent training.

---

## 5. Gaps & Opportunities

| Gap | Opportunity |
|-----|-------------|
| No published LLM game theory benchmarks | Build CANVAS benchmark |
| No CU-specific game theory | First-mover advantage |
| Principal-agent often ignored in AI | Make it explicit in agent design |
| Trust scoring is rule-based | RL-learned trust |

---

## 6. Recommended Implementation

### Phase 1: Trust Foundation
- Implement Tit-for-Tat in handoff protocols
- Add trust score that updates based on outcomes

### Phase 2: Dynamic Orchestration
- Add RL-trained supervisor (TF-Agents)
- Self-optimizing task routing

### Phase 3: Shapley Attribution
- Calculate per-agent contribution
- Transparent reporting

### Phase 4: Self-Improvement
- Apply Hyperagents concept
- Auto-Dream memory consolidation

---

## References

1. Dang et al. (2025). "Multi-Agent Collaboration via Evolving Orchestration." arXiv:2505.19591
2. Zhang et al. (2026). "Hyperagents." arXiv:2603.19461
3. Axelrod, R. (1984). "The Evolution of Cooperation"
4. Shapley, L. (1953). "A Value for n-Person Games." Annals of Math Study 28
5. Edgeworth, F. (1881). "Mathematical Psychics"
6. Jennings et al. (2001). "Automated negotiation: prospects, methods and challenges."

---

_This document feeds into the CANVAS enhancement plan._