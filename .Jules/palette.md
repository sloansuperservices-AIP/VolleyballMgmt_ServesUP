## 2026-06-26 - [Accessibility & Micro-UX in Tryouts]
**Learning:** Emojis are frequently used as status indicators (🔒, ⚠️, 📝) in this app. Without proper ARIA roles and labels, these are invisible or confusing to screen reader users. Also, "Copy Text" buttons benefit greatly from immediate visual state changes to confirm action.
**Action:** Always wrap status-bearing emojis in <span role="img" aria-label="..."> and implement a temporary state change for copy-to-clipboard buttons.
