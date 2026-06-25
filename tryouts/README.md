# 🎯 Tryouts Module

**Path:** `/tryouts/index.html`
**Status:** ✅ Live
**Stack:** Self-contained HTML · React 18 (CDN) · Google Sheets sync

---

## Overview

Full tryout management system for Mid TN VBC seasonal tryout events. Handles athlete registration, court-side station scoring, position depth charts, drag-and-drop team building, and offer email generation — all behind a PIN-based login.

---

## Key Features

### 🔐 PIN-Based Login
- Head Coach view: full control (`0000`)
- Station views: tablet-optimized scoring entry, one per station (`1111`–`5555`)
- Each station only sees its own scoring interface

### 📋 Athlete Registration
- Pre-loaded athlete roster from registration data
- Fields: name, DOB, division, primary/alt position, phone, email, TO#
- Full searchable registration table with filters

### 📊 Station Scoring (5 Stations)
- Station 1: Physical (Height, Reach, Vertical)
- Station 2: Agility (3 drills)
- Station 3: Drills (3 metrics)
- Station 4: Serving (3 metrics)
- Station 5: Setting (3 metrics)
- Search athlete by TO# → enter scores → save → next
- Per-station averages and total composite score auto-calculated

### 📈 Tryout Results Table
- Full inline score editing
- Sort by name, total score, or any station
- Color-coded totals (green ≥7, amber ≥5, red <5)
- Per-age-group filtering (12s–18s)

### 🏗️ Depth Charts
- Auto-sorted by position category: Setters · Middles · Outside/RS · Defense
- Unsorted/unsure pool
- Drag-and-drop ready

### 🏐 Team Builder
- Drag players from pool into team slots
- Teams: `{age} Black / Blue / Silver / Yellow / White`
- Declined players tracked separately within team
- One-click offer email trigger per team

### 📬 Offer Email Generator
- Pre-filled email template per athlete
- Opens in mail app or copies to clipboard
- Auto-updates status to "Contacted" on send

### 🙈 Hide System
- Hide athletes with reason (Declined · Coach Declined · Age Issue · Other)
- Hidden athletes removed from all views, tracked separately
- One-click unhide with audit trail

### 🗂️ All Teams Overview
- Birds-eye view of all age groups and teams simultaneously
- Status badges per player

### 💾 Data Persistence
- Auto-saves all state to `localStorage` between sessions
- Google Sheets sync via Apps Script (save/load buttons in bottom bar)

---

## Google Sheets Integration

See [`apps-script.js`](./apps-script.js) for the full middleware code.

**Sheet tabs created automatically:**
- `Athletes` — full roster with all scores and assignments
- `Meta` — sync timestamps and events

**Setup:**
1. New Google Sheet → Extensions → Apps Script
2. Paste `apps-script.js` content
3. Run `setupSpreadsheet()` once
4. Deploy as Web App (Execute as: Me · Access: Anyone)
5. Copy Web App URL → Tryouts app → Settings (bottom bar)

---

## Athlete Data Format

```json
{
  "id": "unique-id",
  "to": "101",
  "first": "Jane",
  "last": "Smith",
  "dob": "1/15/2012",
  "division": "13 & Under",
  "primaryPos": "Outside Hitter",
  "altPos": "Defensive Specialist",
  "phone": "615-555-0100",
  "email": "parent@email.com",
  "status": "pending | contacted | offered | accepted | declined",
  "teamAssignment": "13-Black",
  "coachPos": "OH",
  "metrics": {
    "station1": [68, 84, 22],
    "station2": [7.2, 7.4, 7.1],
    "station3": [8, 7, 9],
    "station4": [6, 8, 7],
    "station5": [7, 8, 6]
  }
}
```

---

## File Structure

```
tryouts/
├── index.html          ← Full self-contained app (React via CDN)
├── apps-script.js      ← Google Apps Script middleware
├── tryout-app-v3.jsx   ← React source component (reference)
└── README.md           ← This file
```
