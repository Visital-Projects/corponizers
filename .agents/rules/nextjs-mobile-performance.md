---
name: nextjs-mobile-performance
description: Critical Next.js performance constraint regarding App Router SSR and dynamic imports for heavy components.
---

# Next.js Mobile Performance (TBT & Hydration Optimization)

When building or optimizing Next.js pages with heavy, interactive, or animation-heavy components (e.g., Framer Motion, Charts, Maps) that reside **below the fold**:

1. **Do NOT allow them to block initial hydration.** The massive JavaScript execution overhead will ruin Total Blocking Time (TBT) and Largest Contentful Paint (LCP) on mobile devices.
2. **Use a custom `<NoSSR>` wrapper**: Implement a client component wrapper (which mounts its children only inside a `useEffect()`) around these heavy components. 
3. **Combine with `next/dynamic`**: Use `next/dynamic` to lazy-load their bundles.
4. **Important App Router Constraint**: Do NOT use `next/dynamic(..., { ssr: false })` directly inside a Server Component file, as Next.js will throw an error. Always use the manual `<NoSSR>` wrapper approach when the parent is a Server Component layout or page.
