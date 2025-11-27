# Site review and dynamic direction

## Current state snapshot
- The site runs on Jekyll using the Feeling Responsive theme configuration, with metadata such as title, description, base URL, and image paths defined in `_config.yml`.
- Top navigation is still the theme's default (e.g., "Start," "Getting Started," design template demos, blog archive links), reflecting a starter layout rather than sports-specific sections.
- Content pages such as `pages/getting-started.md` still contain theme instructions (e.g., how to customize colors, navigation, and social media links) instead of domain content.

## Gaps to address
- Branding and navigation are generic; no sports-focused IA (information architecture) is present.
- Posts and pages are demonstration content for the theme rather than sports analysis or data stories.
- There is no data pipeline or dynamic integration (e.g., no ingestion of sports stats, live scores, or API-driven widgets). Everything renders from static front matter and Markdown.

## Proposed path to a dynamic site
1. **Rebrand the shell**
   - Update `_config.yml` metadata, navigation (`_data/navigation.yml`), and landing page content to match the sports analytics focus and the aesthetic inspiration you collect.
   - Replace theme tutorial pages with sports-facing introductions, data sources, and feature highlights.

2. **Establish a data foundation**
   - Decide on key sports data sources (e.g., league APIs, CSV uploads, or a lightweight database) and document schemas for teams, players, games, and metrics.
   - Start with static data in `_data/` (YAML/JSON) to prototype layouts while API access is finalized.

3. **Add interactive components**
   - Introduce client-side JavaScript modules under `assets/js/` (or a minimal bundler) to fetch and render live data (scoreboards, player cards, standings) from the chosen API.
   - Use progressive enhancement: render baseline summaries in Markdown/front matter and hydrate with live updates where available.

4. **Plan for richer interactivity**
   - If you want SPA-level interactions, plan a gradual migration to a component framework (e.g., Next.js or Astro) that can coexist by mounting into designated `<div>` targets on Jekyll pages.
   - Keep Jekyll for marketing/documentation while dynamic widgets handle data-heavy views.

5. **Content and UX polish**
   - Design reusable sections (hero, feature grid, data panels) that mirror the visual inspiration you collect.
   - Add analytics and performance budgets to ensure data-heavy widgets remain fast on mobile.

## Quick next steps
- Pick one sports dataset (e.g., season standings) and prototype a YAML-driven page that lists teams and records.
- Replace the top navigation with the initial set of sports-focused pages you want to ship (Home, Teams, Players, Games, About).
- Stand up a small JS fetch demo (e.g., pulling a public scores API) to validate dynamic rendering within the current Jekyll shell.
