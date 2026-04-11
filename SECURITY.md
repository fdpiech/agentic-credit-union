# Security Policy

## Supported versions

This project is an active research prototype. Only the `master` branch
receives security updates.

| Version    | Supported          |
| ---------- | ------------------ |
| `master`   | :white_check_mark: |
| All others | :x:                |

## Reporting a vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

Instead, report privately using GitHub's private vulnerability reporting:

1. Go to the repository's **Security** tab.
2. Click **Report a vulnerability**.
3. Provide:
   - A clear description of the issue
   - Steps to reproduce (proof of concept preferred)
   - The impact you believe it has
   - Any suggested remediation, if known

If GitHub private reporting is unavailable, email **fdpiech@gmail.com**
with the subject line `SECURITY: agentic-credit-union`.

### What to expect

- **Acknowledgement:** within 7 days of receipt.
- **Initial assessment:** within 14 days.
- **Fix timeline:** depends on severity; critical issues are prioritized.

You will be credited in the fix commit / release notes unless you request
otherwise.

## Scope

In scope:
- Code in this repository (`master` branch)
- Build and CI configuration (`.github/workflows/`)
- Dependency supply-chain issues introduced by this repo's manifests

Out of scope:
- Vulnerabilities in third-party dependencies (report those upstream;
  Dependabot tracks them here automatically)
- Social engineering, physical attacks, or denial-of-service
- Issues requiring already-compromised developer machines

## Handling of secrets

This repository must never contain real credentials, API keys, tokens,
private keys, or customer data. If you believe a secret has been
committed, report it via the process above and **do not** open a public
issue or PR referencing the exposed value. GitHub secret scanning,
Gitleaks, and push protection are enabled as defense-in-depth, but
human review is still the primary safeguard.
