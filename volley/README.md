# 🤖 VOLLEY — Club AI Agent

**Path:** `/volley/`
**Status:** 🗂 Scaffolded
**Stack:** Anthropic Claude API · HTML · Google Sheets

---

## Overview

VOLLEY is Mid TN VBC's AI-powered club agent, handling front-facing communication across three channels: in-person front desk, website chat, and email triage.

---

## Planned Features

### Front Desk Mode
- Tablet-optimized kiosk interface
- Answers common parent/athlete questions
- Club info, schedule, tryout dates, team placements
- Escalation path to staff for complex questions
- Multilingual support (Spanish priority)

### Website Integration
- Embeddable chat widget for midtnvbc.com
- Club FAQ knowledge base
- Real-time tryout status ("Are tryouts open?")
- Waitlist position inquiry
- Directions, hours, court info

### Email Management (VOLLEY Inbox)
- Reads incoming club email
- Categorizes by intent (tryout inquiry, billing, schedule, etc.)
- Drafts reply suggestions for staff approval
- One-click send approved drafts
- Tracks open/closed status per thread

### Knowledge Base
- Club history and philosophy
- Team structure (age groups, skill tiers)
- Pricing and payment plans
- Season calendar
- Staff directory
- Tournament schedule
- DIBS work program explainer
- FAQ library (editable by admin)

---

## AI Configuration

- **Model:** Claude (Anthropic)
- **System prompt:** Club-specific context, tone guide (warm, professional, direct)
- **Tools:** Google Sheets read (schedules, team info), email send

---

## File Structure

```
volley/
├── index.html          ← Front desk kiosk (coming)
├── inbox.html          ← Email triage view (coming)
├── knowledge-base.md   ← Club FAQ and context (coming)
└── README.md           ← This file
```
