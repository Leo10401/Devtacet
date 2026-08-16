
## 2024-05-18 - Missing Keyboard Handlers on Non-Interactive Semantic Elements
**Learning:** Adding an `onClick` handler to a semantic but non-interactive element like `<article>` does not automatically make it keyboard accessible, unlike `<button>` or `<a>`. Screen reader and keyboard users are completely excluded from these interactions without manual intervention.
**Action:** When adding `onClick` to elements like `div`, `span`, or `article`, always add `tabIndex={0}`, an appropriate `role` (like "button" or "link"), an `onKeyDown` handler for Enter/Space, and a visible focus indicator class (e.g. `focus-visible:ring-2`).
## 2026-08-16 - Adding Accessible Form Controls and Buttons
**Learning:** Inputs without explicit labels and icon-only buttons can create major accessibility barriers. Decorative icons inside these elements might be announced inappropriately by screen readers.
**Action:** Always link a visually-hidden label to an input using 'htmlFor', give icon-only buttons an explicit 'aria-label', set 'type="button"' on generic buttons to prevent implicit form submissions, and use 'aria-hidden="true"' on purely decorative icons.
