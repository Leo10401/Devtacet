
## 2024-05-18 - Missing Keyboard Handlers on Non-Interactive Semantic Elements
**Learning:** Adding an `onClick` handler to a semantic but non-interactive element like `<article>` does not automatically make it keyboard accessible, unlike `<button>` or `<a>`. Screen reader and keyboard users are completely excluded from these interactions without manual intervention.
**Action:** When adding `onClick` to elements like `div`, `span`, or `article`, always add `tabIndex={0}`, an appropriate `role` (like "button" or "link"), an `onKeyDown` handler for Enter/Space, and a visible focus indicator class (e.g. `focus-visible:ring-2`).

## 2025-02-23 - Labeling inputs and icon-only buttons
**Learning:** Found an icon-only button and a search input in `app/reach/page.tsx` that lacked proper screen reader accessible labels. Relying solely on `title` attributes or placeholders is insufficient for accessibility. The search input completely lacked an associated label, and the "Refresh Data" icon-only button only had a title.
**Action:** Always add an explicit `aria-label` to icon-only buttons, set `aria-hidden="true"` on decorative icons, and explicitly associate an input with a visually hidden `<label>` (e.g. `sr-only`) using matching `htmlFor` and `id` attributes.
