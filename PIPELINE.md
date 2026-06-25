# Mid TN VBC — Development Pipeline
## GitHub + Google AI Studio + Jules AI — Working in Tandem

---

## Overview

Three tools, one clean loop. Each has a distinct job:

| Tool | Role | Best For |
|------|------|---------|
| **GitHub** | Source of truth | Issues, PRs, version history, deployment |
| **Claude (here)** | Architect + builder | New features, design, complex logic, UI |
| **Jules AI** | Async coder | Background tasks, scaffolding, refactoring |
| **Google AI Studio** | Gemini testing | Prompt testing for VOLLEY agent, AI features |

---

## The Loop

```
1. FEEDBACK comes in (coaches, staff, you)
        ↓
2. FILE a GitHub Issue (labeled + scoped)
        ↓
3. ASSIGN it:
   → Claude (this chat) for complex builds
   → Jules for background/scaffolding tasks
        ↓
4. BUILD → download file or Jules pushes PR
        ↓
5. REVIEW → merge to CLUBmain
        ↓
6. GITHUB PAGES auto-deploys in ~60 seconds
        ↓
7. TEST on live site → repeat
```

---

## GitHub Issue Labels to Use

Create these labels in your repo (Settings → Labels):

| Label | Color | Use For |
|-------|-------|---------|
| `bug` | red | Something broken |
| `enhancement` | blue | New feature or improvement |
| `tryouts` | green | Tryout module |
| `dibs` | amber | DIBS module |
| `tournaments` | orange | Tournaments module |
| `volley-ai` | purple | VOLLEY agent |
| `hub` | teal | Main dashboard |
| `urgent` | red | Needed before next tryout |
| `jules` | gray | Good task for Jules |
| `claude` | dark | Complex — needs Claude |
| `design` | pink | Visual/UI changes |
| `data` | yellow | Google Sheets / data work |

---

## Issue Template (copy into GitHub)

Go to: Settings → General → Features → Issues → Set up templates

**Bug report:**
```
**What's broken:**

**Steps to reproduce:**

**Expected behavior:**

**Module:** [ ] Hub [ ] Tryouts [ ] DIBS [ ] Tournaments [ ] VOLLEY

**Urgency:** [ ] Pre-tryout [ ] This week [ ] When possible
```

**Feature request:**
```
**What should it do:**

**Why it's needed:**

**Who uses it:** [ ] Head Coach [ ] Coach Station [ ] Check-In [ ] Parent/Athlete

**Module:** [ ] Hub [ ] Tryouts [ ] DIBS [ ] Tournaments [ ] VOLLEY

**Assign to:** [ ] Jules [ ] Claude [ ] Both
```

---

## Claude (This Chat) — Best Tasks

Use Claude (here) for anything that requires:
- New module builds from scratch
- Design decisions and visual updates
- Complex state logic
- Google Apps Script middleware
- Architecture decisions
- Reviewing and iterating on feedback

**How to work with Claude:**
1. Paste your feedback or GitHub issue here
2. Claude builds the updated file
3. Download → upload to GitHub → done

---

## Jules — Best Tasks

Jules is great for:
- Converting React JSX → self-contained HTML
- Adding scaffolding files across multiple modules
- Writing README updates
- Refactoring repetitive code
- Adding export functions
- Writing tests

**How to assign Jules a task:**
1. File a GitHub Issue with label `jules`
2. Go to jules.google.com (when available in your region)
3. Connect to `sloansuperservices-AIP/VolleyballMgmt_ServesUP`
4. Assign the issue
5. Jules reads `agents.md`, sets up environment, implements, files PR
6. You review + merge

**Good Jules prompt format:**
```
In the tryouts/index.html file, add an export-to-PDF button in the 
All Teams view. It should use the browser's window.print() with a 
print stylesheet that shows teams as clean black-on-white cards.
Match the existing export CSV button style. See agents.md for design 
system details.
```

---

## Google AI Studio — VOLLEY Agent Testing

Use AI Studio (aistudio.google.com) for:
- Testing system prompts for the VOLLEY club AI
- Building the knowledge base Q&A
- Testing email draft quality
- Fine-tuning Gemini models on club-specific data

**VOLLEY system prompt to test in AI Studio:**
```
You are VOLLEY, the AI assistant for Mid TN Volleyball Club in 
Murfreesboro, TN. You handle front desk questions, website chat, 
and email support for a club that has operated since 1995.

You are warm, direct, and knowledgeable. You speak to parents and 
athletes. You know:
- We have 14 teams across 12U-18U age groups
- Tryouts happen annually [date TBD]
- Our website is midtnvbc.com
- Instagram: @midtnvbc
- We use a tiered team structure: Black, Blue, Silver, Yellow, White

Always offer to connect them with a real staff member for complex 
questions. Never make up specific dates, costs, or policies you 
don't know.
```

---

## Branching Strategy (Simple)

```
CLUBmain          ← production, what GitHub Pages serves
  └── feature/tryouts-v2     ← work branch (optional)
  └── feature/dibs-module    ← work branch (optional)
```

For now, committing directly to `CLUBmain` is fine since it's a 
small team. Add branches when Jules starts filing PRs.

---

## Deployment Checklist (before each tryout)

- [ ] Latest tryouts/index.html pushed to CLUBmain
- [ ] Google Sheet created and Apps Script deployed
- [ ] Apps Script URL saved in tryouts app settings
- [ ] All pre-registered athletes loaded (or synced from Sheets)
- [ ] PINs distributed to station coaches
- [ ] Test check-in flow on a tablet
- [ ] Test one score entry per station
- [ ] Verify Export CSV works
- [ ] GitHub Pages shows latest version (check commit timestamp)

---

## Quick Reference URLs

| Resource | URL |
|----------|-----|
| Live Hub | https://sloansuperservices-aip.github.io/VolleyballMgmt_ServesUP/ |
| Live Tryouts | https://sloansuperservices-aip.github.io/VolleyballMgmt_ServesUP/tryouts/ |
| GitHub Repo | https://github.com/sloansuperservices-AIP/VolleyballMgmt_ServesUP |
| GitHub Issues | https://github.com/sloansuperservices-AIP/VolleyballMgmt_ServesUP/issues |
| GitHub Pages Settings | https://github.com/sloansuperservices-AIP/VolleyballMgmt_ServesUP/settings/pages |
| Google AI Studio | https://aistudio.google.com |
| Jules (when available) | https://jules.google.com |

