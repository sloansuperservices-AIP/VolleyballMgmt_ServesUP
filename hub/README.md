# 🏠 Hub Dashboard

**Path:** `/index.html` (root)
**Status:** ✅ Live
**Stack:** Self-contained HTML · CSS · Vanilla JS

---

## Overview

The Main Hub is the central navigation and operations dashboard for the Mid TN VBC Management Suite. It serves as the entry point to all five core modules, surfaces real-time KPIs, and provides quick-access shortcuts to the most frequently used tools.

---

## Key Features

### Header
- Club branding (Mid TN Volleyball · Est. 1995)
- Live clock (updates every 15 seconds)
- System Live indicator

### Season Banner
- Active season label (2025–2026)
- Live stats: Teams · Coaches · Athletes · Waitlisted · Years Active
- Season Overview CTA

### KPI Row
- Coaches on Payroll (from CSV data)
- Next Tournament countdown
- DIBS Open Shifts
- VOLLEY Agent status

### App Tiles (5 Core Modules)
Each tile includes:
- Color-coded accent per module
- Module icon and description
- Feature sub-chips
- Status badge
- Hover glow + lift animation
- Arrow CTA

### Quick Access Strip
- Coach Pay
- Profit by Team
- Task Assignments
- Open/Close Log
- Season Calendar
- Travel Board
- VOLLEY Inbox
- Facility Project (Buckeye Bottom Rd rezoning)

### Roadmap Section
- 6 future departments displayed as dashed cards
- Roadmap badge on each

---

## Design Highlights
- Dark athletic aesthetic (#080c14 background)
- Amber/orange accent system
- Barlow Condensed display font
- Grid background texture
- Top gradient accent bar
- Card hover: lift + glow + icon rotate
- Ripple click effect on all interactive cards
- Fully responsive (mobile → desktop)

---

## File Structure

```
hub/  (root)
├── ../index.html   ← Main dashboard (at repo root for GitHub Pages)
├── mindmap.html    ← System overview mind map
└── README.md       ← This file
```
