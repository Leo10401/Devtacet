## 2023-10-24 - Accessibility on Next.js client component buttons
**Learning:** Buttons in React client components often lack explicit type declarations and ARIA attributes for dynamic loading states, which affects screen reader support.
**Action:** Always add `type="button"`, dynamic `aria-label`, and `aria-disabled` bound to loading state when updating Next.js app router client interactive elements.
