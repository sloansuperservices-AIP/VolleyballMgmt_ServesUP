# Palette's Journal - Mid TN Volleyball Club Management Platform

## 2026-06-27 - [Keyboard Accessibility for Custom Interactive Elements]
**Learning:** Custom interactive elements like cards and quick-access buttons often lack native focus states and keyboard event listeners, making the interface inaccessible to non-mouse users.
**Action:** Always ensure custom clickable elements have `role="button"`, `tabindex="0"`, and both click and keydown (Enter/Space) event listeners.
## 2026-06-26 - [Accessibility & Micro-UX in Tryouts]
**Learning:** Emojis are frequently used as status indicators (🔒, ⚠️, 📝) in this app. Without proper ARIA roles and labels, these are invisible or confusing to screen reader users. Also, "Copy Text" buttons benefit greatly from immediate visual state changes to confirm action.
**Action:** Always wrap status-bearing emojis in <span role="img" aria-label="..."> and implement a temporary state change for copy-to-clipboard buttons.

## 2026-06-29 - [Keyboard Parity for Card-based Hubs]
**Learning:** High-density dashboards using <div> cards for navigation are completely inaccessible to keyboard users unless explicitly given role="button" and tabindex="0". Furthermore, visual feedback like ripple effects should be programmatically centered when triggered by keyboard to maintain "delight" consistency.
**Action:** Always audit interactive <div> elements for keyboard parity; implement :focus-visible for clean aesthetics and ensure JS-driven visual feedback handles coordinate-less triggers.
