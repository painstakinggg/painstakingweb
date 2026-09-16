# Painstaking Digital Growth Expansion

## Goal
Expand the existing premium navy-and-blue website into a broader digital growth and creative studio while keeping website development prominent, preserving all current pages, pricing, portfolio work, contact details, responsive behavior, and brand styling. Nothing will be published.

## What will change

### 1. Expand the shared service content
- Add clearly scoped digital growth services: redesigns, landing pages, SEO/performance, maintenance, digital presence setup, conversion improvements, and advertising/marketing creative support.
- Add a professional AI creative service covering concepts, captions, scripts/hooks, promotional ideas, and creative direction without implying paid campaign management.
- Keep existing website and e-commerce offerings unchanged and prominent.

### 2. Add the AI Creative Prompts library
- Add one focused `/creative-prompts` page that extends the current route set without removing or renaming any existing route.
- Build the library from local static data only, with category filters, search, result counts, accessible prompt cards, and copy-to-clipboard actions with visible feedback.
- Cover website advertising, social content, business marketing, product advertising, promotional campaigns, content ideas, and ad scripts/hooks.
- Include a restrained “Digital Resources — Coming Soon” area for future prompt packs, templates, marketing resources, and website resources; no checkout or fake products.

### 3. Update the homepage and services journey
- Reposition the homepage headline and supporting copy around stronger digital presence while retaining website development as the core offer.
- Add concise digital growth, AI creative, and marketing-support sections using the existing layout, motion, and design system.
- Add balanced paths for “Start a Website Project,” “Get Creative/Marketing Support,” “Explore AI Creative Prompts,” and “Contact Painstaking.”
- Expand the Services directory and its existing search so new offerings are discoverable.

### 4. Integrate navigation, site search, footer, and enquiries
- Add the prompts library to the shared navigation, mobile menu, footer, and command search.
- Make relevant creative services and prompt categories searchable from the existing site search.
- Extend the enquiry form’s service choices through the shared service data, without adding storage or a backend.
- Update page descriptions and shared studio copy to reflect the broader positioning while preserving factual claims.

## Technical details
- Reuse the existing semantic tokens, cards, buttons, reveals, route metadata helper, and TanStack Router conventions.
- Keep all prompt and resource content in the existing static data module.
- Use the browser Clipboard API with a safe fallback so copying remains reliable on mobile browsers.
- Add route-specific title, description, Open Graph, and Twitter metadata for the new page.
- Do not add authentication, a database, payments, CMS, external AI calls, or automotive content.

## Verification
- Check every existing route plus `/creative-prompts` at desktop and 375px mobile widths.
- Test prompt search, category filtering, clearing filters, and copy actions.
- Test new navigation and CTA destinations, mobile menu behavior, contact choices, and external contact links.
- Check for horizontal overflow, console/runtime errors, malformed links, and TypeScript/build failures.
- Leave the project in preview-only state; do not deploy or publish.
