# Tryout App — Change Log v2.0
## Mapped from End-User Feedback Session

---

### STATIONS — Restructured
| Old | New | Change |
|-----|-----|--------|
| Station 1: Physical | ✅ Station 1: Physical | Keep — Height, Reach, Vert |
| Station 2: Agility | ✅ Station 2: Agility | Rename metric → "Shuttle Run 1/2/3" |
| Station 3: Drills | 🔄 → Check-In Station | Repurposed: walkup reg + mark arrived |
| Station 4: Serve | ❌ Removed | Not needed |
| Station 5: Setting | ✅ Station 3: Skills | Renumbered, keep |

**New PIN map:**
- `9999` → Check-In (walkup add + mark arrived)
- `1111` → Station 1: Physical
- `2222` → Station 2: Agility
- `3333` → Station 3: Skills
- `0000` → Head Coach (full access)

---

### WALKUPS — New Feature
- Check-In station (PIN 9999) handles two tasks:
  1. Mark pre-registered athletes as "Arrived"
  2. Quick-add walkup athletes (name, DOB, division, positions) → auto-assign TO#
- Walkups flagged with "Walkup" badge in all views
- Head coach can also add walkups from any view

---

### ATHLETE DETAIL — Updated
- ➕ **Notes section** added: multi-line textarea for call logs, coach observations, tryout notes
- ➕ **"Won't Accept" team flag**: checkbox + notes (e.g. "Will not accept 14 Silver")
  - Shows ⚠️ icon on player card in Team Builder
- ➕ **Check-in status**: Arrived / Not Arrived / Walkup badge
- ✅ Lock on accept: once status = "accepted", athlete card shows 🔒 and fields are read-only

---

### DEPTH CHART — Updated
- Sort athletes within each position group by score (best → worst) by default
- Secondary position shown as subdued badge on every card
- Drag-to-rank within position group (custom ordering)
- Score visible on every card

---

### TEAM BUILDER — Major Update
- **Depth chart panel integrated**: collapsible left panel shows all available athletes sorted by score
- All athletes visible with: score badge, primary pos, secondary pos, won't-accept ⚠️ icon if flagged
- Sort pool by: Score (default) · Name · Position
- **Team lock button**: "Finalize Team 🔒" button per team → locks all assignments
  - Locked teams show gold border + lock icon
  - Cannot drag into/out of locked team without unlock
- ⚠️ icon on player card if they have "won't accept" notes relevant to that team

---

### OFFER PROCESS — Updated
- Individual offers: send to one athlete at a time (already supported, clarified in UI)
- Team offer: sends to all uncontacted athletes on a team (batch)
- Once accepted (status = "accepted"): athlete card shows 🔒, status dropdown disabled
- Declined athlete stays on team roster with ❌ styling, slot marked open

---

### ALL REGISTRATION — Updated
- Inline editing: click any field to edit (name, DOB, division, pos, phone, email)
- Save on blur / Enter key
- Check-in column: "Mark Arrived" button per row
- Walkup flag column

---

### EXPORT — New Feature
- **Export Teams to CSV**: downloads one CSV with all teams, rosters, positions, status
- **Print Teams**: browser print dialog with clean print stylesheet (black on white)
- **Export All Reg to CSV**: full registration list with scores
- Export button in head coach toolbar

---

### BUG FIXES & POLISH
- Station view: after saving athlete, cursor returns to TO# field automatically
- All Registration: phone numbers formatted consistently
- Status badges: clearer color differentiation
- Mobile: station views optimized for tablet landscape
