import https from 'https';
import http from 'http';

export class LLMClient {
  constructor(options = {}) {
    this.apiKey = options.apiKey || process.env.OPENAI_API_KEY;
    this.model = options.model || process.env.CANVAS_MODEL || 'gpt-4o-mini';
    this.baseUrl = options.baseUrl || process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
    this.temperature = options.temperature || 0.7;
    this.maxTokens = options.maxTokens || 2048;
    this.mock = options.mock || false;

    if (this.apiKey && !this.apiKey.startsWith('sk-')) {
      console.warn('[LLMClient] Warning: API key does not start with "sk-" — verify it is correct.');
    }
  }

  async chat(systemPrompt, userPrompt, agentName, stepDescription) {
    if (this.mock) {
      return this.mockResponse(systemPrompt, userPrompt, agentName, stepDescription);
    }

    if (!this.apiKey) {
      throw new Error('OPENAI_API_KEY not set. Use --mock for simulation mode or set your API key.');
    }

    // Retry with exponential backoff (3 retries: 1s, 2s, 4s)
    const maxRetries = 3;
    let lastError;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      if (attempt > 0) {
        const delay = Math.pow(2, attempt - 1) * 1000;
        console.warn(`[LLMClient] Retrying in ${delay}ms (attempt ${attempt}/${maxRetries})...`);
        await new Promise(r => setTimeout(r, delay));
      }
      try {
        return await this._makeRequest(systemPrompt, userPrompt);
      } catch (err) {
        lastError = err;
        // Only retry on transient errors: network (no statusCode), 429, 5xx
        if (attempt < maxRetries && (!err.statusCode || err.statusCode === 429 || (err.statusCode >= 500 && err.statusCode <= 503))) {
          continue;
        }
        throw err;
      }
    }
    throw lastError;
  }

  async _makeRequest(systemPrompt, userPrompt) {
    const body = JSON.stringify({
      model: this.model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: this.temperature,
      max_tokens: this.maxTokens,
    });

    const url = new URL(`${this.baseUrl}/chat/completions`);
    const isHttps = url.protocol === 'https:';
    const lib = isHttps ? https : http;

    return new Promise((resolve, reject) => {
      const req = lib.request({
        hostname: url.hostname,
        port: url.port || (isHttps ? 443 : 80),
        path: url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Length': Buffer.byteLength(body),
        },
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const parsed = JSON.parse(data);
            if (parsed.error) {
              const err = new Error(`LLM API error: ${parsed.error.message}`);
              err.statusCode = res.statusCode;
              reject(err);
            } else {
              resolve(parsed.choices?.[0]?.message?.content || '');
            }
          } catch (e) {
            reject(new Error(`Failed to parse LLM response: ${e.message}`));
          }
        });
      });
      // 30-second timeout to prevent indefinite hangs
      req.setTimeout(30000, () => {
        req.destroy(new Error('LLM API request timed out after 30 seconds'));
      });
      req.on('error', reject);
      req.write(body);
      req.end();
    });
  }

  mockResponse(systemPrompt, userPrompt, agentName, stepDescription) {
    const agent = agentName || 'Agent';
    // Use stepDescription for clean detection (avoids contamination from injected context)
    const desc = (stepDescription || '').toLowerCase();

    // STEP-SPECIFIC DETECTION using clean step description (order matters - most specific first)

    // Post-close quality review
    if (desc.includes('post-close') || desc.includes('post-close quality')) {
      return this._mockPostClose(agent, desc);
    }
    // Pre-decision compliance review
    if (desc.includes('pre-decision') || desc.includes('compliance review') || (desc.includes('ecoa') && desc.includes('tila'))) {
      return this._mockComplianceReview(agent, desc);
    }
    // Closing & funding
    if ((desc.includes('closing') || desc.includes('fund')) && (desc.includes('loan') || desc.includes('disburse'))) {
      return this._mockLoanClosing(agent, desc);
    }
    // Decision communication
    if (desc.includes('decision') && desc.includes('communicat')) {
      return this._mockLoanDecision(agent, desc);
    }
    // Underwriting analysis
    if (desc.includes('underwriting') || desc.includes('loan analysis') || desc.includes('credit analysis')) {
      return this._mockLoanUnderwriting(agent, desc);
    }
    // Loan application intake
    if (desc.includes('application') && (desc.includes('pre-qualif') || desc.includes('intake') || desc.includes('credit pull'))) {
      return this._mockLoanApplication(agent, desc);
    }
    // CIP / BSA verification
    if (desc.includes('cip') || desc.includes('identity') || desc.includes('ofac') || desc.includes('screening') || desc.includes('bsa')) {
      return this._mockBSA(agent, desc);
    }
    // Account opening & disclosures
    if (desc.includes('account opening') || desc.includes('disclosure') || (desc.includes('account') && desc.includes('digital'))) {
      return this._mockOnboardingAccount(agent, desc);
    }
    // Onboarding eligibility
    if (desc.includes('onboarding') || desc.includes('eligibility') || desc.includes('initial contact')) {
      return this._mockOnboardingEligibility(agent, desc);
    }
    // Quality gate / compliance gate verification (must be before generic compliance)
    if (desc.includes('quality gate') || desc.includes('compliance verification') || desc.includes('sign off') || desc.includes('sign-off')) {
      return this._mockComplianceGate(agent, desc);
    }
    // Marketing / welcome sequence (must be before financial advisor)
    if (desc.includes('welcome sequence') || desc.includes('cross-sell') || desc.includes('marketing') || desc.includes('email sequence') || desc.includes('segment')) {
      return this._mockMarketing(agent, desc);
    }
    // Financial needs discovery / advisor
    if (desc.includes('needs discovery') || desc.includes('financial wellness') || desc.includes('hardship') || desc.includes('financial advisor')) {
      return this._mockFinancialAdvisor(agent, desc);
    }
    // Collections
    if (desc.includes('collections') || desc.includes('delinquen') || desc.includes('outreach') || desc.includes('past due')) {
      return this._mockCollections(agent, desc);
    }
    // Mortgage
    if (desc.includes('mortgage') || desc.includes('loan estimate') || desc.includes('closing disclosure') || desc.includes('trid') || desc.includes('appraisal')) {
      return this._mockMortgage(agent, desc);
    }
    // Fraud investigation (Workflow H) — before generic Reg E
    if (desc.includes('fraud report') || desc.includes('fraud intake') || desc.includes('fraud classification') || desc.includes('fraud investigation') || (desc.includes('fraud') && desc.includes('investigation'))) {
      return this._mockFraudInvestigation(agent, desc);
    }
    // Card fraud / chargeback (Workflow I)
    if (desc.includes('fraud alert triage') || desc.includes('card suspension') || desc.includes('chargeback') || desc.includes('card reissue') || (desc.includes('card') && desc.includes('fraud'))) {
      return this._mockCardFraud(agent, desc);
    }
    // IT security incident (Workflow J)
    if (desc.includes('incident detection') || desc.includes('containment') || desc.includes('eradication') || desc.includes('security incident') || (desc.includes('incident') && desc.includes('response'))) {
      return this._mockSecurityIncident(agent, desc);
    }
    // SAR investigation / CTR / OFAC (Workflow K)
    if (desc.includes('sar investigation') || desc.includes('sar decision') || desc.includes('sar filing') || desc.includes('ctr processing') || desc.includes('transaction monitoring alert')) {
      return this._mockSARCTR(agent, desc);
    }
    // Reg E dispute
    if (desc.includes('reg e') || desc.includes('dispute') || desc.includes('provisional credit')) {
      return this._mockRegE(agent, desc);
    }
    // Strategic planning
    if (desc.includes('environmental scan') || desc.includes('strategic') || desc.includes('swot') || desc.includes('annual planning')) {
      return this._mockStrategic(agent, desc);
    }
    // CFO / financial
    if (desc.includes('budget') || desc.includes('financial feasibility') || desc.includes('capital') || desc.includes('peer benchmark')) {
      return this._mockCFO(agent, desc);
    }
    // Board briefing
    if (desc.includes('board') || desc.includes('briefing') || desc.includes('presentation')) {
      return this._mockBoardBriefing(agent, desc);
    }

    return `[${agent}] Task completed per CANVAS protocol. All deliverables produced and documented.`;
  }

  _mockOnboardingEligibility(agent, prompt) {
    return `## Member Onboarding — Step Complete

**Eligibility**: Verified — employee of Sunrise Medical Center, field of membership satisfied.
**ID Verification**: Government-issued driver's license (IL D1234567) and Social Security card collected.
**Documents Signed**: Membership application, signature card, account agreements.
**Member Goal Stated**: "I want to save for a house down payment and get better rates on my auto loan."

**Initial Observations**:
- Currently banks with Big Bank — frustrated with $12/mo checking fee
- Car loan at 7.9% APR — interested in refinancing
- Carrying $4,200 credit card balance at 22.9% APR elsewhere
- Renting apartment — 18-month homeownership target

Ready for BSA/CIP verification and account opening.`;
  }

  _mockOnboardingAccount(agent, prompt) {
    return `## Account Opening & Disclosures — Complete

**Accounts Opened**:
- Share Savings (primary membership account) — $25 initial deposit
- Share Draft Checking — with free debit card

**Disclosures Delivered & Acknowledged**:
- Truth in Savings (NCUA Part 707) — dividend rates, fees, terms explained ✓
- Privacy Notice (GLB) — data sharing practices disclosed ✓
- Reg CC Funds Availability — hold policy explained ✓
- E-Sign Agreement — member opted in for electronic statements ✓

**Digital Banking Configured**:
- Online banking: Activated with temporary password
- Mobile app: Download link sent via SMS
- eStatements: Enrolled — paper statements discontinued
- Debit card: Ordered — 7-10 business day delivery

**Automatic Transfers Set Up**:
- $200/payroll → Share Savings (member-initiated)

File complete. CIP clear. Accounts active.`;
  }

  _mockBSA(agent, prompt) {
    return `## BSA/CIP Verification — Complete

**Customer Identification Program (CIP)**:
- Name: Maria Santos — Verified against government-issued driver's license ✓
- Date of Birth: 03/15/1997 — Verified ✓
- Address: 1847 Oak Street, Suite 2B, Springfield, IL 62704 — Verified (utility bill) ✓
- SSN: ***-**-1234 — Verified against name and DOB ✓

**OFAC/SDN Screening**: CLEAR — no matches found on SDN list
**FinCEN 314(a) Screening**: CLEAR — current list checked as of today
**Beneficial Ownership**: N/A — individual membership (not business account)

**CIP File Status**: COMPLETE — all four required elements documented and verified.
**SAR Indicators**: None identified. No suspicious patterns in available information.

CIP file archived per BSA record retention (5 years). Account eligible for activation.`;
  }

  _mockLoanApplication(agent, prompt) {
    return `## Loan Application & Pre-Qualification — Complete

**Member Interview Summary**:
- Purpose: Refinance 2022 Honda Civic auto loan from Big Bank
- Current loan: $19,200 balance at 7.9% APR, $389/mo, 48 months remaining
- Requested: $18,500 at lower rate, 60-month term
- Timeline: Wants to close within 2 weeks

**Credit Authorization**: Signed — obtained before credit pull ✓
**Tri-Merge Credit Report Pulled**: TransUnion, Equifax, Experian

**Immediate Fraud Screen**: CLEAR
- SSN matches name and address history
- No synthetic identity indicators
- No recent address changes or new file flags
- No alerts on OFAC or fraud databases

**Income Documentation Requested**:
- Last 2 pay stubs (employer: Springfield Manufacturing Inc.)
- Most recent W-2

**Application Logged in Core System**: Application date recorded — ECOA 30-day adverse action clock started.

Ready for underwriting analysis.`;
  }

  _mockLoanUnderwriting(agent, prompt) {
    return `## Loan Analysis Worksheet — Auto Loan Refinance

### Applicant Profile
**Applicant**: James Rodriguez | **Co-Applicant**: None
**Member since**: 2024-03-15 | **Relationship**: Savings, Checking, Debit Card

### Request
**Product**: Auto Loan Refinance | **Amount**: $18,500 | **Term**: 60 months
**Purpose**: Refinance existing auto loan at Big Bank (7.9% APR)
**Collateral**: 2022 Honda Civic — NADA Clean Retail: $21,200

### Credit Analysis
**FICO Score**: 718 (TransUnion)
**Credit Grade**: B (per risk-based pricing matrix)
**Derogatory History**: 1×30-day late payment — 18 months ago (member cited medical hardship)
**Open Revolving Utilization**: 34% ($4,200 / $12,400 available)
**Inquiries (12 months)**: 2 (both auto-related — rate shopping)
**Notable**: Strong 12-month payment trend since late payment

### Capacity Analysis
| Income Source | Gross Monthly | Verified By |
|--------------|---------------|-------------|
| Primary employment | $5,200 | Paystub (current) |
| **Total Gross Monthly Income** | **$5,200** | |

| Liability | Monthly Payment | Balance |
|-----------|----------------|---------|
| Credit card (min) | $105 | $4,200 |
| Student loan (IDR) | $185 | $12,000 |
| Current auto (Big Bank) | $389 | $19,200 |
| Other installment | $1,168 | — |
| **Proposed new auto payment** | **$355** | **$18,500** |
| **Total Monthly Debt (with new)** | **$1,813** | |

**DTI**: $1,813 / $5,200 = **34.9%** | Policy max (Grade B): 45% | WITHIN ✓

### Collateral Analysis
**LTV**: $18,500 / $21,200 = **87.3%** | Policy max (auto): 100% | WITHIN ✓

### Decision
**Recommendation**: APPROVE
- Amount: $18,500 | Rate: 5.74% APR (Base 4.49% + 1.25% Grade B adjustment)
- Term: 60 months | Payment: $355.42/mo
- Member saves: $33.58/mo and 2.16% APR vs. current loan
- **No policy exceptions** — within DTI, LTV, and credit guidelines
- **Within delegated lending authority** — no escalation required

ECOA application logged. 30-day adverse action clock active.`;
  }

  _mockComplianceReview(agent, prompt) {
    if (prompt.includes('pre-decision') || prompt.includes('compliance review')) {
      return `## Pre-Decision Compliance Review — Complete

**ECOA Verification**: No prohibited basis considered in credit decision ✓
- Decision based solely on: credit score, DTI, LTV, income verification
- No protected class data in underwriting file

**Application Date Tracking**: Logged — 30-day adverse action clock active ✓
- Application received: Today
- Deadline for adverse action (if needed): 30 calendar days

**TILA/Reg Z Disclosures**: Prepared and accurate ✓
- APR: 5.74% — matches approved rate
- Finance charge: Calculated correctly for 60-month term
- Total of payments: Verified

**HMDA**: Auto loan — NOT HMDA reportable (non-dwelling secured collateral) ✓

**Fair Lending Screen**: PASS
- Reason codes (if decline were needed): Specific, accurate, non-discriminatory
- No pricing disparity indicators for this credit profile

No compliance flags identified. File cleared for decision communication.`;
    }

    return `## Compliance Review — Complete
No compliance flags identified. File cleared per CANVAS protocol.`;
  }

  _mockLoanDecision(agent, prompt) {
    return `## Decision Communication — Complete

**Decision**: APPROVED

**Member Contact**:
- Called member at (555) 234-5678 — reached directly
- Communicated approval: $18,500 at 5.74% APR, 60 months, $355.42/mo
- Member confirmed satisfaction with terms
- Explained savings vs. current loan: $33.58/mo, 2.16% APR reduction

**Closing Scheduled**: In-branch appointment — next Tuesday at 2:00 PM

**Documents Sent to Member**:
- Approval letter with terms (email)
- List of items to bring to closing (ID, insurance proof, current loan payoff statement)

**Member Notes**: Member expressed gratitude — "This will really help me save for a house."

Call logged in member notes. Adverse action clock: N/A (approved).`;
  }

  _mockLoanClosing(agent, prompt) {
    return `## Loan Closing & Funding — Complete

### Pre-Closing Verification
- All approval conditions satisfied ✓
- Final income verification confirmed (paystub within 30 days) ✓
- Insurance confirmed (existing auto policy — comprehensive/collision) ✓
- Current loan payoff confirmed with Big Bank: $19,147.23 (good for 10 days)

### Closing Documents Prepared & Signed
- Promissory Note — $18,500 at 5.74% APR, 60 months ✓
- Truth-in-Lending (TILA) disclosure — member acknowledged ✓
- Security Agreement — vehicle as collateral ✓
- Membership account authorization for auto-payment ✓

### Funding & Collateral
- Payoff disbursed to Big Bank: $19,147.23 (overnight wire)
- Net to member: $0 (full payoff)
- Lien: Title held by credit union; DMV lien notation submitted

### Core System Boarding Verified
- Rate: 5.74% APR ✓
- Term: 60 months ✓
- Payment: $355.42/mo ✓
- First payment date: 45 days from funding ✓
- Collateral code: 2022 Honda Civic ✓

Loan funded and boarded. Ready for post-close quality review.`;
  }

  _mockPostClose(agent, prompt) {
    return `## Post-Close Quality Review — Complete

**Loan**: LN-2024-03291 | **Member**: James Rodriguez | **Funded**: Today

### Review Checklist
| Item | Status | Evidence |
|------|--------|----------|
| Adverse Action Notice | N/A — application approved | — |
| TILA disclosure accuracy | PASS — APR, finance charge, total payments match funded terms | TILA in file |
| HMDA data recorded | N/A — auto loan, not dwelling-secured | — |
| Lien confirmation | PASS — title held, DMV lien submitted | DMV confirmation |
| Credit authorization in file | PASS — signed before credit pull | Authorization form |
| Income verification in file | PASS — paystub and W-2 | Verification docs |
| Core system boarding | PASS — rate, term, payment, collateral verified | Boarding checklist |

### File Status
**Compliance Assessment**: EXAMINATION-READY
All required documentation present. No red flags identified.
File archived per records retention schedule (loan term + 7 years).`;
  }

  _mockComplianceGate(agent, prompt) {
    return `## Quality Gate Verification — CIP/BSA Compliance Gate

**Gate Assessment**:

| Criterion | Status | Evidence |
|-----------|--------|----------|
| Field of membership eligibility verified | PASS | Employment verification in file |
| CIP identity verification complete | PASS | BSA Officer CIP file — all 4 elements |
| OFAC/SDN screen negative | PASS | OFAC screening result: CLEAR |
| FinCEN 314(a) screen | PASS | Screened against current list |
| Required disclosures delivered | PASS | Truth in Savings, Privacy, Reg CC — signed |
| Privacy notice delivered | PASS | GLB notice — delivery logged |
| Digital banking consent | PASS | E-Sign agreement — member opted in |

**Gate Decision**: COMPLETE
All criteria met. 100% compliance. New member file is examination-ready.

**Compliance Officer Sign-off**: Completed ${new Date().toISOString().split('T')[0]}`;
  }

  _mockFinancialAdvisor(agent, prompt) {
    return `## Financial Needs Discovery — New Member

**5-Minute Financial Wellness Conversation**:

### Current Banking Situation
- Primary: Big Bank checking (with $12/mo fee) + savings (0.01% APY)
- Frustrated with fees and lack of personalized service
- "I feel like just a number there"

### Current Debts
- Auto loan: $19,200 at 7.9% (Big Bank) — $389/mo
- Credit card: $4,200 at 22.9% APR — carrying balance monthly (~$105 min)
- Student loans: $12,000 at 5.5% (federal, IDR plan — $185/mo)

### Goals Stated
- **Immediate (90 days)**: Lower auto loan rate, pay down credit card
- **Short-term (18 months)**: Save $15,000 for house down payment
- **Long-term**: Build emergency fund (currently only $800)

### Immediate Referral Opportunities (within 90 days)
1. **Auto loan refinance** — member paying 7.9%, we can offer ~5.7% — saves ~$34/mo and interest
2. **Credit card balance transfer** — $4,200 at 22.9% → CU Visa at 12.9% — saves ~$420/yr in interest
3. **High-yield savings** — move emergency fund from 0.01% to our 4.25% APY — earns ~$34/yr on $800

### Future Opportunities (90 days – 2 years)
- Mortgage pre-qualification — begin at month 12 for 18-month target
- Retirement — no IRA mentioned, refer to investment services
- Financial counseling — budget optimization for down payment acceleration

**Referrals Issued To**:
- Loan Officer: Auto refinance application
- Member Services Rep: CU Visa balance transfer
- Marketing Manager: Segment tags for welcome sequence

**Follow-up**: Appointment scheduled in 2 weeks for detailed budget review and savings plan.`;
  }

  _mockMarketing(agent, prompt) {
    return `## Marketing — Welcome Sequence & Segmentation Complete

### 30-Day Email Welcome Sequence Activated
| Day | Email | Subject |
|-----|-------|---------|
| 1 | Welcome | "Welcome to your credit union, Maria — you own this place" |
| 3 | Digital Setup | "3 things to do in mobile banking today" |
| 7 | Benefits | "Your member benefits — dividends, rates, and the cooperative difference" |
| 14 | Rate Comparison | "You're already saving — here's the proof" |
| 21 | Referral | "Know someone who deserves better banking?" |
| 30 | Recap | "Your first month — and some exciting offers ahead" |

### Segment Tags Applied
- auto-loan-refi-prospect (immediate — Loan Officer referral active)
- credit-card-balance-transfer (immediate — balance transfer offer)
- first-time-homebuyer-18mo (future — mortgage pre-qual at month 12)
- digital-native-mobile-first (behavioral — app-first engagement)
- new-member-2026-Q1 (cohort — welcome sequence + surveys)

### Campaign Queue
- Week 2: Auto loan refi email with personalized savings calculator
- Week 4: CU Visa balance transfer offer with 0% intro APR teaser
- Month 3: Savings rate comparison — invite to move emergency fund
- Month 6: Mortgage readiness checklist — "18 months to homeownership"

All campaigns reviewed for UDAAP compliance. Fair lending: no protected-class targeting.`;
  }

  _mockCollections(agent, prompt) {
    if (prompt.includes('hardship') || prompt.includes('financial advisor')) {
      return `## Member Hardship Screening — Complete

**Hardship Indicators Observed**:
- Member mentioned reduced overtime at work (income down ~15%)
- Multiple recent overdraft fees on checking account
- Member sounded stressed but cooperative

**Hardship Assessment**: Triggered Financial Advisor referral
- Budget review scheduled for next week
- Loan modification options presented: 3-month payment reduction ($355 → $275)
- Member agreed to modified payment plan starting next month

**Collections Action**:
- Escalated outreach PAUSED — Financial Advisor leading
- Account flagged for hardship protocol
- Next contact: Financial Advisor follow-up in 7 days

FDCPA-compliant communication logged. Member dignity preserved.`;
    }

    if (prompt.includes('early') || prompt.includes('1-29') || prompt.includes('day 5') || prompt.includes('first')) {
      return `## Early Delinquency Intervention — Complete

**Account**: Auto Loan | **Days Past Due**: 12
**Contact Attempts Log**:
| Date | Method | Result |
|------|--------|--------|
| Day 5 | Automated SMS/email | Delivered — no response |
| Day 10 | Phone call | Spoke with member |
| Day 20 | Phone + letter | Voicemail left; letter mailed |

**Member Response**: Member acknowledged missed payment. Cited unexpected car repair expense. Promised payment by end of week.

**Status**: Expecting cure within 5 days. Not yet reported to credit bureau (30-day threshold not reached).

All communications FDCPA-compliant. Contact attempts logged with date, time, method, and result.`;
    }

    return `## Collections Step — Complete
Collections action taken per CANVAS protocol. FDCPA-compliant communication maintained.`;
  }

  _mockMortgage(agent, prompt) {
    if (prompt.includes('loan estimate') || prompt.includes('application')) {
      return `## Mortgage Application & Loan Estimate — Complete

**Application Interview**: Conducted with Sarah and David Chen
- Property: 421 Maple Avenue, Springfield, IL 62704
- Purchase price: $310,000 | Down payment: $25,000 (8.06%)
- Loan amount: $285,000 | Type: Conventional, 30-year fixed

**Loan Estimate Delivered**: Within 3 business days of application ✓
- Estimated closing costs: $8,247
- Estimated monthly payment: $1,847 (P&I + escrow)
- APR: 6.72%

**Rate Lock**: 60-day lock at 6.49% — confirmed per pipeline policy

**Next Steps**: Processing initiated. Appraisal, title, flood cert ordered.`;
    }

    if (prompt.includes('processing') || prompt.includes('document') || prompt.includes('appraisal')) {
      return `## Mortgage Processing — Document Collection Complete

**Third-Party Reports Ordered & Received**:
- Appraisal: Ordered from approved appraiser — $315,000 value (supports purchase price) ✓
- Title search: Clear — no liens or encumbrances ✓
- Flood certification: Zone X — not in flood plain, no insurance required ✓

**Income/Asset Documentation Collected & Verified**:
- Sarah: W-2, 2 recent pay stubs, tax returns (2 years) — $6,200/mo
- David: W-2, 2 recent pay stubs, tax returns (2 years) — $5,000/mo
- Combined: $11,200/mo gross
- Bank statements: Verified $32,000 in liquid assets (covers down payment + reserves)

**Automated Underwriting**: DU Approve/Eligible ✓

File ready for underwriting decision.`;
    }

    if (prompt.includes('closing disclosure') || prompt.includes('cd ' || prompt.includes('closing preparation'))) {
      return `## Closing Disclosure Preparation — Complete

**Closing Disclosure Prepared**:
- Compared to Loan Estimate — all tolerances within limits
- Final APR: 6.51% (vs. 6.72% LE — improved due to rate lock)
- Cash to close: $33,247

**CD Delivery**: Delivered to borrowers 4 business days before scheduled closing ✓
(Timing: 3 business day minimum met with 1 day buffer)

**Title Company Coordination**: Closing scheduled — confirmed with all parties.
**Final Conditions**: All underwriting conditions satisfied.`;
    }

    return `## Mortgage Step — Complete
Mortgage processing step completed per TRID compliance protocol.`;
  }

  _mockRegE(agent, prompt) {
    if (prompt.includes('intake') || prompt.includes('dispute')) {
      return `## Reg E Dispute Intake — Complete

**Dispute Filed**: Unauthorized electronic fund transfer
**Transaction**: $1,247.83 — TechGadgetsPlus.com — March 15, 2026
**Member Statement**: "I did not make this purchase. My card was in my wallet."

**Timelines Communicated to Member**:
- Provisional credit: Within 10 business days (by April 1, 2026)
- Final resolution: Within 45 calendar days (by May 2, 2026)
- Investigation may extend to 90 days if provisional credit issued

**Written Confirmation**: Dispute acknowledgment letter sent to member.

Routed to BSA Officer for fraud screening.`;
    }

    if (prompt.includes('provisional') || prompt.includes('investigation') || prompt.includes('resolve')) {
      return `## Reg E Dispute Resolution — Complete

**Provisional Credit**: Applied within 10 business days ✓
- Amount: $1,247.83 credited to checking account
- Date: Day 8 of investigation window

**Investigation Findings**:
- Merchant contacted — no shipping address match to member
- Card present at member's location during transaction (geolocation)
- No other suspicious activity on account
- Fraud confirmed — unauthorized transaction

**Final Resolution**: Member's claim upheld — provisional credit becomes permanent
**Resolution Letter Sent**: Confirms final resolution, member rights, and contact information

45-day final resolution deadline met. Reg E compliant.`;
    }

    return `## Reg E Step — Complete
Reg E dispute handling completed per compliance protocol.`;
  }

  _mockStrategic(agent, prompt) {
    return `## Environmental Scan — Complete

### SWOT Analysis

**Strengths**:
- Strong capital position: Net worth ratio 9.2% (Well Capitalized)
- Loyal membership base: 94% retention rate
- Low cost of funds: 0.85% (below peer median)
- Clean compliance record: Zero MRAs last exam

**Weaknesses**:
- Aging core system — limits digital capabilities
- Single branch — geographic concentration risk
- Limited commercial lending capability
- Staff succession gaps in key roles

**Opportunities**:
- Digital banking upgrade could attract younger demographics
- Employer SEG expansion (healthcare, education sectors)
- Underserved small business market in service area
- Potential field of membership expansion

**Threats**:
- Fintech competition on deposits and lending
- Rising interest rate environment — margin pressure
- Regulatory burden increasing (CFPB priorities)
- Key person risk in lending and compliance

### Strategic Priorities (Draft — 3-year horizon)
1. **Digital Transformation**: Modernize digital banking platform — target 70% digital adoption
2. **Member Growth**: Net 500 new members/year through SEG expansion and community partnerships
3. **Operational Efficiency**: Reduce efficiency ratio from 72% to 65%
4. **Talent Development**: Succession plan for all critical roles by Year 2

Environmental scan distributed to CFO for financial feasibility modeling.`;
  }

  _mockCFO(agent, prompt) {
    if (prompt.includes('feasibility') || prompt.includes('model')) {
      return `## Financial Feasibility Analysis — Strategic Priorities

### Priority 1: Digital Transformation
- Estimated investment: $850,000 over 3 years
- Projected ROI: 15% by Year 3 (reduced operational costs, member growth)
- Capital impact: Manageable within current net worth trajectory
- **Feasibility**: CONFIRMED — with phased implementation

### Priority 2: Member Growth
- Marketing investment: $120,000/year incremental
- Projected new revenue: $180,000/year by Year 2 (loan and deposit growth)
- **Feasibility**: CONFIRMED — positive ROI from Year 2

### Priority 3: Operational Efficiency
- Investment: $200,000 (process automation, training)
- Savings: $350,000/year at target (staff reallocation, reduced errors)
- **Feasibility**: CONFIRMED — strong ROI

### Priority 4: Talent Development
- Investment: $75,000/year (training, succession programs)
- Risk mitigation value: Incalculable (avoids $500K+ key person risk)
- **Feasibility**: CONFIRMED

**Overall Capital Impact**: Net worth ratio projected to remain >8.5% through planning horizon.
All priorities financially feasible. Budget framework ready for annual plan.`;
    }

    if (prompt.includes('budget')) {
      return `## Annual Budget — Draft Complete

### Budget Summary (FY2027)
| Category | FY2026 Actual | FY2027 Budget | Change |
|----------|--------------|---------------|--------|
| Total Revenue | $4.2M | $4.5M | +7.1% |
| Total Expenses | $3.1M | $3.2M | +3.2% |
| Net Income | $1.1M | $1.3M | +18.2% |
| ROA | 0.82% | 0.95% | +13bps |

### Budget Aligned to Strategic Priorities
1. Digital Transformation: $285,000 (Year 1 of 3)
2. Member Growth: $120,000 incremental marketing
3. Operational Efficiency: $200,000 process automation
4. Talent Development: $75,000 training/succession

### Stress Test Results
- Rate shock (+300bps): Net worth remains >7.5%
- Recession scenario: Delinquency increases manageable, capital adequate
- Combined stress: Still Well Capitalized

Budget ready for CEO review and board presentation.`;
    }

    return `## CFO Step — Complete
Financial analysis completed per CANVAS protocol.`;
  }

  _mockBoardBriefing(agent, prompt) {
    return `## Board Compliance Briefing — Complete

### Compliance Program Status
- Annual compliance testing: 85% complete (on track for Q3 completion)
- Open findings: 3 (all on track for closure before exam window)
- BSA independent testing: Scheduled for Q3
- Staff training: 92% complete (tracking to 100% by Dec 31)

### Examination Readiness
- Last exam: Clean (zero MRAs)
- Prior recommendations: Both closed with documentation
- Pre-exam document package: Assembly underway
- Staff prepared for examiner interactions

### Material Issues: None

**Board Acknowledgment**: Board noted compliance status. No action required at this time.
Next compliance update: Q3 committee meeting.

Board briefed. Compliance program on track.`;
  }

  _mockFraudInvestigation(agent, desc) {
    if (desc.includes('intake') || desc.includes('classification')) {
      return `## Fraud Case Opened — Case #FRD-2026-0847

**Classification**: Unauthorized ACH debit — Reg E covered transaction
**Member**: James Rodriguez (MBR-2024-03291)
**Transaction**: $847.50 — Unknown merchant "ONLINESVC247" — 2026-04-02
**Reg E Clock Started**: 2026-04-04 (Day 0) | Provisional Credit Deadline: 2026-04-18 (Day 10)

**Initial Evidence Collected**:
- Transaction records pulled from core system
- Member did not recognize merchant; card was in possession
- No other transactions to this merchant in 24-month history
- Device fingerprint: Mobile browser — different device than member's registered device
- IP address geolocation: Inconsistent with member's known location

**Case Status**: Under investigation — evidence collection in progress.
Handoff to evidence collection phase.`;
    }
    if (desc.includes('investigation')) {
      return `## Fraud Investigation — Findings

**Case**: #FRD-2026-0847 | Investigation Day 3

**ACH Originator Research**: Contacted NACHA via R10 inquiry. Originating ODFI identified as out-of-state fintech processor. Merchant ID matches known fraud pattern from FinCEN alert (issued 2026-02-14).

**Transaction Pattern Analysis**:
- Single transaction — not a pattern of multiple small hits
- No prior relationship with merchant
- Transaction occurred at 2:47 AM — atypical for member's usage pattern
- Member's debit card number was likely obtained via data breach (cross-reference: known breach affecting 340,000 cardholders announced 2026-03-01)

**SAR Assessment**: Single transaction below SAR threshold ($5,000). No structured activity. SAR filing NOT warranted at this time. Document no-file decision.

**Determination**: UNAUTHORIZED TRANSACTION — Recommend full credit to member.`;
    }
    return `## Fraud Case — Final Disposition

**Case**: #FRD-2026-0847 | CLOSED — Member Credited

**Final Determination**: Unauthorized ACH debit confirmed. Member not liable.
**Credit Applied**: $847.50 permanent credit posted 2026-04-04 (Day 0 — investigation complete before Day 10).
**Member Notification**: Final resolution letter mailed 2026-04-04.
**ACH Return Filed**: R10 (Customer Advises Not Authorized) submitted to originating ODFI.
**Recovery**: Chargeback recovery expected within 60 days.

**Case Closed**. All Reg E timelines met. No SAR filing required. Case archived per 5-year retention policy.`;
  }

  _mockCardFraud(agent, desc) {
    if (desc.includes('triage') || desc.includes('alert')) {
      return `## Card Fraud Alert — Risk Assessment

**Alert Source**: Falcon fraud scoring system | Score: 847 (HIGH RISK — threshold: 750)
**Card**: Debit Mastercard ending 4821 — Member: Sarah Chen (MBR-2025-01142)
**Transaction**: $312.47 — Electronics retailer — Austin, TX — 2026-04-05 14:23:07

**Risk Factors Flagged**:
- Geolocation inconsistency: Member located in Springfield, IL (last transaction 4 hrs ago)
- Merchant category: Electronics (high-fraud category)
- Velocity: 3rd transaction in 2 hours exceeding $200
- Device: Card-present transaction (chip not used — magnetic stripe)

**Decision**: HIGH RISK — HARD BLOCK applied. Member notification triggered.`;
    }
    if (desc.includes('chargeback')) {
      return `## Chargeback Filed — Visa Dispute

**Case**: CHB-2026-0391 | Reason Code: 10.4 (Other Fraud — Card Absent Environment)
**Amount**: $312.47 | Merchant: TechZone Austin #4471
**Filing Deadline**: 120 days from transaction — Deadline: 2026-08-04 ✓ (filed within 15 days)

**Documentation Submitted**:
- Cardholder dispute statement
- Geolocation evidence (member in Springfield at time of transaction)
- Falcon fraud score and alert log
- Member card-in-possession declaration

**Chargeback Status**: Submitted to Visa via VisaNet. Provisional credit applied per Reg E.
Expected resolution: 45-75 days.`;
    }
    return `## Card Reissue — Complete

**Replacement Card**: New PAN issued — ending 7294 | Production queue: Standard 5-7 business days
**Member Notified**: Text + email confirmation sent — activation instructions included
**Compromised Card**: PAN terminated in card management system — cannot be reactivated
**Recurring Billers**: Member advised to update: Netflix, gym membership, utility auto-pay

**30-Day Monitoring**: Enhanced fraud rules applied to new card for 30 days post-issue.
**Case #CHB-2026-0391**: Chargeback in process. Case closed pending network resolution.`;
  }

  _mockSecurityIncident(agent, desc) {
    if (desc.includes('detection') || desc.includes('triage')) {
      return `## Security Incident — Initial Triage

**Incident ID**: SEC-2026-0023 | Detected: 2026-04-05 09:14 AM
**Alert Source**: Endpoint detection and response (EDR) system — workstation WS-LOAN-04
**Classification**: P2 — Malware detected (Trojan/Infostealer variant)
**Affected Systems**: 1 workstation (isolated) — network spread: NOT detected

**Initial Assessment**:
- Malware installed via phishing email attachment (employee opened PDF macro — 2026-04-04 3:47 PM)
- No evidence of lateral movement to core banking system
- No evidence of data exfiltration at this time (SIEM logs reviewed)
- Credentials on affected workstation: 1 employee (loan operations staff)

**Actions Taken**: Workstation isolated from network. CEO and Compliance Officer notified.
**Member Data Exposure**: Unconfirmed — investigation in progress.`;
    }
    if (desc.includes('containment') || desc.includes('eradication') || desc.includes('recovery')) {
      return `## Containment & Eradication — Complete

**Containment** (completed 09:47 AM):
- WS-LOAN-04 physically disconnected and quarantined
- Affected employee credentials revoked (reset required before access restored)
- Suspicious IPs blocked at perimeter firewall: 185.234.x.x (C2 server — threat intel confirmed)
- Core banking system access audit: No unauthorized queries detected

**Forensic Preservation**:
- Disk image created before remediation
- Memory dump captured
- Security event logs exported and archived

**Eradication** (completed 11:30 AM):
- Malware removed per EDR remediation playbook
- System reimaged from clean gold image
- Patch applied: CVE-2026-01847 (PDF renderer vulnerability — critical)

**Recovery** (completed 2:15 PM):
- Workstation returned to production — clean scan confirmed
- Employee credentials reset; MFA re-enrolled
- Enhanced monitoring: 72-hour elevated alert threshold on this workstation

**Status**: Threat eliminated. No evidence of data breach.`;
    }
    return `## Post-Incident Review & Regulatory Assessment

**Incident SEC-2026-0023 — CLOSED**

**Regulatory Assessment** (Compliance Officer):
- NCUA Part 748: Incident is a "security incident" — annual board report will note occurrence
- State breach notification: Member personal data NOT confirmed exfiltrated — notification NOT triggered
- GLBA Safeguards Rule: Root cause (unpatched PDF renderer + phishing) requires program update

**Lessons Learned**:
1. PDF macro execution should be blocked at email gateway (remediation: policy update)
2. Patch cycle for critical CVEs reduced from 30 days to 7 days (approved)
3. Phishing simulation frequency increased from quarterly to monthly

**Board Report**: Prepared for next board meeting. Classified as non-material — no member impact confirmed.
**GLBA Program**: Updated with two new controls. Board approval at next meeting.`;
  }

  _mockSARCTR(agent, desc) {
    if (desc.includes('monitoring alert') || desc.includes('alert review')) {
      return `## BSA Alert Queue — Daily Review

**Date**: 2026-04-05 | Alerts Reviewed: 7 | Open SAR Cases: 2

**Alert Dispositions**:
| Alert # | Account | Amount | Pattern | Disposition |
|---------|---------|--------|---------|-------------|
| AML-847 | MBR-2024-00341 | $9,200 cash deposit | Below threshold — single transaction | DISMISS — documented |
| AML-848 | MBR-2023-01122 | $9,800 + $9,500 (2 days) | Structuring pattern — 2 transactions | INVESTIGATE — SAR case opened |
| AML-849 | MBR-2025-03341 | Wire $45,000 — Mexico | First international wire — new account | INVESTIGATE — EDD required |
| AML-850 | BIZ-2022-00088 | $28,500 cash deposit | Phase II exempt business — documented | DISMISS — exemption verified |
| AML-851–853 | Various | Misc low-risk | Normal patterns | DISMISS — documented |

**CTR Queue**: 1 CTR required — $32,400 cash deposit (BIZ-2022-00044) — filing due by 2026-04-20.`;
    }
    if (desc.includes('sar') && (desc.includes('decision') || desc.includes('filing'))) {
      return `## SAR Filing — Case AML-848

**SAR Decision**: FILE
**Subject**: [Identity withheld from log — contained in SAR file]
**Triggering Activity**: Two cash deposits of $9,800 and $9,500 over consecutive business days — structuring pattern
**SAR Amount**: $19,300 (aggregate)

**Narrative Summary** (abridged):
Subject made two cash deposits on consecutive days totaling $19,300. Individual transactions were structured below the $10,000 CTR threshold. No business purpose could be identified for the cash deposits; account was opened as personal checking 6 months prior with minimal activity. Staff did not identify a CTR exemption basis. Pattern is consistent with structuring to evade CTR reporting requirements (31 U.S.C. § 5324).

**Filing**: Submitted via FinCEN BSA E-Filing System — Confirmation #: BSA-2026-0000847
**Filed**: 2026-04-05 (Day 22 of 30-day window) ✓
**CEO Notified**: Yes — filing confirmed (content not disclosed)
**Member Notification**: NONE — tipping-off prohibition strictly observed`;
    }
    return `## CTR & OFAC Processing

**CTR Filing — BIZ-2022-00044**:
- Transaction: $32,400 cash deposit — 2026-04-03
- Exemption Review: Business is NOT Phase I or II exempt (not on board-approved exemption list)
- CTR Filed: FinCEN BSA E-Filing — Confirmation #CTR-2026-0001204
- Filing Date: 2026-04-05 (Day 2 of 15-day window) ✓

**OFAC Daily Screening**: No SDN list matches identified in today's new account and transaction review.

**BSA Program Status**:
- SAR log: Current (2 open cases, 1 filed this period)
- CTR log: Current (1 filed this period)
- OFAC screening: Daily — no matches
- 314(a) list: Last FinCEN update checked 2026-04-01 — no matches

All BSA obligations current.`;
  }
}
