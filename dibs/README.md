# 💼 DIBS — Athlete Work/Play Program

**Path:** `/dibs/`
**Status:** 🔧 In Progress
**Stack:** React · Tailwind CSS · Google Sheets

---

## Overview

DIBS is Mid TN VBC's Athlete Work/Play Program — modeled on SportsEngine's work program concept. Athletes and parents claim shifts (volunteering at gym maintenance, tournament operations, etc.) to earn credits applied toward club dues.

---

## Key Features

### Athlete / Parent View
- Credit progress bar (earned vs. season cap)
- Job board filtered by category
- One-tap "Call Dibs" claim with instant cancel
- Notification on new shifts matching their team/tier

### Manager Dashboard
- Create jobs with category, date, time, credit value
- Google Calendar sync notation
- Season-wide credit cap per athlete
- Athlete credit ledger (full history)
- Email/text alert system — filter by individual, team, or skill tier

### Shift Categories
- Gym Maintenance
- Tournament Operations
- Open / Close Facility
- Equipment Setup
- Concessions
- Scorekeeping

### Import Wizard
- CSV upload or clipboard paste
- Column auto-detection
- Duplicate detection
- Row-level preview before commit
- Completion summary

### Social Sharing
- Splash page generator for shift announcements
- Instagram caption auto-generated (@midtnvbc)

---

## Skill Tiers (organizational axis)
- **Gold** — top tier across age groups
- **Silver** — mid tier
- **Elite** — select tier

---

## File Structure

```
dibs/
├── dibs.jsx        ← React component (v3)
├── index.html      ← Compiled self-contained version (coming)
└── README.md       ← This file
```
