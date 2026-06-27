# Palette's Journal - Mid TN Volleyball Club Management Platform

## 2026-06-27 - [Keyboard Accessibility for Custom Interactive Elements]
**Learning:** Custom interactive elements like cards and quick-access buttons often lack native focus states and keyboard event listeners, making the interface inaccessible to non-mouse users.
**Action:** Always ensure custom clickable elements have `role="button"`, `tabindex="0"`, and both click and keydown (Enter/Space) event listeners.
