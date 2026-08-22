
## 2024-05-18 - Missing Keyboard Handlers on Non-Interactive Semantic Elements
**Learning:** Adding an `onClick` handler to a semantic but non-interactive element like `<article>` does not automatically make it keyboard accessible, unlike `<button>` or `<a>`. Screen reader and keyboard users are completely excluded from these interactions without manual intervention.
**Action:** When adding `onClick` to elements like `div`, `span`, or `article`, always add `tabIndex={0}`, an appropriate `role` (like "button" or "link"), an `onKeyDown` handler for Enter/Space, and a visible focus indicator class (e.g. `focus-visible:ring-2`).

## 2024-05-18 - Missing ARIA Labels on Icon-only Buttons
**Learning:** Icon-only buttons (or icon-only anchors acting like buttons) lack text context. A screen reader user encountering such an element only hears "button" without knowing what the button does. `title` attributes aren't always reliably announced by all screen readers.
**Action:** Always provide an explicit `aria-label` attribute on buttons, links, or interactables where the visible label is provided purely through an icon, and ensure a clear, distinct visual focus state for keyboard users, e.g. `focus-visible:ring-2 focus-visible:outline-none`.
