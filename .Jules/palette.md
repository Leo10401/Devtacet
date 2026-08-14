
## 2024-05-18 - Missing Keyboard Handlers on Non-Interactive Semantic Elements
**Learning:** Adding an `onClick` handler to a semantic but non-interactive element like `<article>` does not automatically make it keyboard accessible, unlike `<button>` or `<a>`. Screen reader and keyboard users are completely excluded from these interactions without manual intervention.
**Action:** When adding `onClick` to elements like `div`, `span`, or `article`, always add `tabIndex={0}`, an appropriate `role` (like "button" or "link"), an `onKeyDown` handler for Enter/Space, and a visible focus indicator class (e.g. `focus-visible:ring-2`).
