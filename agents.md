# Jules Agent Configuration
# Mid TN Volleyball — ServesUP Club Management Platform

## Project Overview
Private club management platform for **Mid TN Volleyball Club** (Murfreesboro, TN · Est. 1995).
Multi-module web application — self-contained HTML/JS/CSS files with React via CDN where needed.
Google Apps Script serves as middleware. Google Sheets is the database.
Hosted on GitHub Pages.

## Environment
- **Node.js** >= 18 (for any tooling)
- **Package manager**: npm
- **Primary stack**: Self-contained HTML · Vanilla JS · React 18 (CDN) · Tailwind (CDN)
- **Middleware**: Google Apps Script (deployed as Web App)
- **Database**: Google Sheets
- **Hosting**: GitHub Pages (`CLUBmain` branch)
- **No build step required** — open HTML files directly in browser

## Live URLs
- Hub: `https://sloansuperservices-aip.github.io/VolleyballMgmt_ServesUP/`
- Tryouts: `https://sloansuperservices-aip.github.io/VolleyballMgmt_ServesUP/tryouts/`

## Repo Structure
```
/
├── index.html                    # Main Hub dashboard (GitHub Pages root)
├── agents.md                     # This file
├── setup.sh                      # Environment setup script
├── README.md                     # Platform overview
├── hub/
│   ├── mindmap.html              # System mind map
│   └── README.md
├── tryouts/
│   ├── index.html                # Full tryout manager (self-contained)
│   ├── apps-script.js            # Google Apps Script middleware
│   ├── tryout-app-v3.jsx         # React source component (reference)
│   └── README.md
├── dibs/
│   ├── dibs.jsx                  # DIBS React component (v3, in progress)
│   └── README.md
├── tournaments/
│   └── README.md
├── volley/
│   └── README.md
└── strategic-objectives/
    └── README.md
```

## Design System — STRICT, DO NOT MODIFY
```css
--bg:       #080c14   /* page background */
--surface:  #0e1422   /* card background */
--surface2: #141a2e   /* elevated surface */
--border:   rgba(255,255,255,0.07)
--accent:   #f0a500   /* primary amber */
--accent2:  #e05c1a   /* orange accent */
--blue:     #2a7de1
--green:    #1db86e
--purple:   #7c3aed
--teal:     #0ea5a0
--text:     #f0f2f8
--muted:    #6b7590
```
- **Display font**: Barlow Condensed (Google Fonts) — headings, numbers, titles
- **Body font**: DM Sans (Google Fonts) — all body text
- **Card pattern**: dark surface · color-coded left/top accent · status chip · arrow CTA · hover lift+glow
- **NEVER change color variables or fonts without explicit instruction**

## Module Status
| Module | File | Status |
|--------|------|--------|
| Hub Dashboard | index.html | ✅ Complete |
| Tryouts | tryouts/index.html | ✅ Complete |
| DIBS | dibs/dibs.jsx | 🔧 React component, needs HTML wrapper |
| Tournaments | tournaments/ | 🗂 README only |
| VOLLEY Agent | volley/ | 🗂 README only |
| Strategic Objectives | strategic-objectives/ | 🗂 README only |

## Club Terminology
- Teams: `{age}U {color}` format — e.g. "16U Black", "13U Silver"
- Skill tiers: **Gold · Silver · Elite** (cut across age groups, not same as team colors)
- Team colors: Black · Blue · Silver · Yellow · White (within each age group)
- Age groups: 12s, 13s, 14s, 15s, 16s, 17s, 18s
- Positions: S (Setter), M/MB (Middle), OH (Outside Hitter), RS (Right Side), DS (Defensive Specialist), L (Libero)
- DIBS: Athlete Work/Play Program — shift claiming for credits toward dues

## Key Conventions
- **Never rebuild from scratch** — always extend existing components
- Self-contained HTML files use CDN imports (React, Tailwind, Google Fonts)
- All modules must be linkable from hub/index.html app tile grid
- `← Hub` back-link on every module page
- Google Sheets sync via Apps Script URL stored in localStorage per module
- PINs for tryouts: Station 1-5 = `1111`-`5555`, Head Coach = `0000`
- Data auto-saves to localStorage; manual sync to Sheets

## Google Apps Script Pattern
Each module that needs a database uses this pattern:
1. `doGet(e)` — read data, returns JSON
2. `doPost(e)` — write/update data, returns JSON
3. CORS-friendly via `ContentService.createTextOutput().setMimeType(JSON)`
4. URL stored in `localStorage` under `midtn_{module}_script_url`
5. Settings modal in each module's bottom bar for URL entry + ping test

## Priority Task Queue (for Jules)
1. Convert `dibs/dibs.jsx` into `dibs/index.html` (self-contained, matches hub design)
2. Build `tournaments/index.html` scaffold with hosted/travel sections
3. Build `strategic-objectives/index.html` with task board from Club_Task_Assignment_List data
4. Build `volley/index.html` front desk kiosk interface
5. Update hub `index.html` so all 5 app tiles link to their module `/module/index.html`

## Testing
- Open HTML files directly in browser (no server needed)
- Visual reference: `index.html` is canonical design — all modules must match
- DIBS reference: `dibs/dibs.jsx` is the most mature component pattern
- Check mobile layout at 390px width (iPhone viewport)
