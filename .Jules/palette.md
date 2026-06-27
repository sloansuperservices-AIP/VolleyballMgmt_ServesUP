## 2026-06-26 - [Accessibility & Micro-UX in Tryouts]
**Learning:** Emojis are frequently used as status indicators (🔒, ⚠️, 📝) in this app. Without proper ARIA roles and labels, these are invisible or confusing to screen reader users. Also, "Copy Text" buttons benefit greatly from immediate visual state changes to confirm action.
**Action:** Always wrap status-bearing emojis in <span role="img" aria-label="..."> and implement a temporary state change for copy-to-clipboard buttons.

## 2026-06-27 - [Visual and Audio Feedback for Copy Actions]
**Learning:** Users appreciate immediate confirmation when copying text to the clipboard. A simple state change on the button (e.g., "Copy Text" -> "✓ Copied!") provides clear feedback. Adding `aria-live="polite"` ensures screen reader users also receive this confirmation.
**Action:** Implement 2-second state feedback with `aria-live="polite"` for all copy-to-clipboard buttons.
