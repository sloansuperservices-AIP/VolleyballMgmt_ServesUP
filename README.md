# 🏐 Mid TN Volleyball — Club Management Suite
### *ServesUP Platform · Murfreesboro, TN · Est. 1995*

> A fully integrated, self-contained club management platform built for Mid TN Volleyball Club. Centralizes all club operations — tryouts, athlete work program, tournaments, AI agent, and leadership tools — under one hub.

---

## 🌐 Live Platform
**Hub:** `https://sloansuperservices-aip.github.io/VolleyballMgmt_ServesUP/`
**Tryouts:** `https://sloansuperservices-aip.github.io/VolleyballMgmt_ServesUP/tryouts/`

---

## 📦 Suite Modules

| Module | Path | Status | Description |
|--------|------|--------|-------------|
| 🏠 **Hub Dashboard** | `/index.html` | ✅ Live | Central navigation, KPIs, quick access |
| 🎯 **Tryouts** | `/tryouts/` | ✅ Live | Registration, eval scoring, team builder, offers |
| 💼 **DIBS** | `/dibs/` | ✅ Live | Athlete Work/Play Program |
| 🏆 **Tournaments** | `/tournaments/` | 🗂 Scaffolded | Hosted events & travel management |
| 🤖 **VOLLEY Agent** | `/volley/` | 🗂 Scaffolded | Club AI — front desk, website, email |
| 🗺️ **Strategic Objectives** | `/strategic-objectives/` | 🗂 Scaffolded | Roles, OKRs, task board |

---

## 🏗️ Architecture

```
Frontend         Middleware              Database
─────────        ──────────              ────────
HTML / React  →  Google Apps Script  →  Google Sheets
GitHub Pages     (free Web App API)     (free, familiar)
```

All modules are **self-contained HTML files** — no build step, no server, no framework required. React is loaded via CDN where needed.

---

## 🔐 Access & PINs (Tryouts Module)

| Role | PIN |
|------|-----|
| Head Coach | `0000` |
| Station 1 — Physical | `1111` |
| Station 2 — Agility | `2222` |
| Station 3 — Drills | `3333` |
| Station 4 — Serving | `4444` |
| Station 5 — Setting | `5555` |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#080c14` |
| Surface | `#0e1422` |
| Accent (Gold) | `#f0a500` |
| Accent (Orange) | `#e05c1a` |
| Blue | `#2a7de1` |
| Green | `#1db86e` |
| Font Display | Barlow Condensed |
| Font Body | DM Sans |

---

## 📊 Club Stats — 2025–2026 Season

- **14** active teams
- **41** coaches on payroll (Jan–Jun cycle)
- **180+** registered athletes
- **300+** waitlisted athletes
- **30+** years operating in Rutherford County

---

## 🗺️ Roadmap

### Active Build
- [x] Hub Dashboard
- [x] Tryouts Manager (full)
- [x] DIBS Work/Play Program
- [ ] Tournament Manager
- [ ] VOLLEY AI Agent
- [ ] Strategic Objectives

### Future Departments
- [ ] Recruiting & Exposure
- [ ] Coaching Education
- [ ] Sponsors & Partners
- [ ] Inventory & Gear
- [ ] Finance & Billing
- [ ] Communications Hub

---

## ⚙️ Setup

See [`agents.md`](./agents.md) for Jules AI agent configuration and [`setup.sh`](./setup.sh) for environment initialization.

**Tech Stack:** HTML · CSS · JavaScript · React (CDN) · Google Apps Script · Google Sheets · GitHub Pages

---

*Private club operations platform — Mid TN Volleyball Club internal use only.*
*midtnvbc.com · @midtnvbc*
