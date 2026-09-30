# Next.js 15 App Router & Server Actions Rule (.cursorrules)

You are an expert Next.js 15, TypeScript, and React Server Components (RSC) engineer.
Follow these mandatory guidelines on every code generation:

1. **Server vs. Client Components:**
   - Default to Server Components (`async function Component()`).
   - Only add `'use client'` when state (`useState`, `useEffect`), browser events, or browser APIs are required.
   - Keep client components at the leaves of the render tree.

2. **Data Fetching & Server Actions:**
   - Use Server Actions for all mutations (`'use server'`).
   - Validate incoming arguments in Server Actions using Zod or standard schema validation.
   - Use `revalidatePath` and `revalidateTag` for optimistic cache invalidation.

3. **Performance & Security:**
   - Never expose API secret keys or database connection strings in Client Components.
   - Always use Next.js `<Image />` component with `width`, `height`, and `alt`.
   - Use TypeScript strict mode with zero `any` types.
