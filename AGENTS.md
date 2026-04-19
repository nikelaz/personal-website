# Repository Guidelines

## Project Structure & Module Organization
This repository is a static-exported Next.js 16 site using the App Router. Route files live under `src/app`, with grouped layouts in `src/app/(main-layout)` and dynamic routes such as `articles/[slug]` and `videos/page/[number]`. Reusable UI lives in `src/components`, content datasets in `src/data`, shared helpers in `src/helpers`, and type declarations in `src/types`. Global and feature CSS lives in `src/styles`. Static assets such as PDFs and OG images belong in `public`, while imported images and SVGs live in `src/assets`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the local dev server on `http://localhost:3010` with Turbopack.
- `npm run build` creates the production static export via Next.js.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint across the repository.

Run `npm run lint` before opening a PR. For content-heavy changes, also sanity-check the affected page locally.

## Coding Style & Naming Conventions
Use TypeScript with React function components and App Router conventions. Follow the existing style: double quotes, semicolons, and 2-space indentation in JSX/TSX and config files. Name components in PascalCase (`Header.tsx`, `VideosView.tsx`), helper files in lowercase when they are utility-like (`code.ts`), and keep route folders aligned with URL paths (`about-me`, `cookie-policy`). Prefer the `@/` import alias over deep relative imports.

Keep data entries consistent with existing shapes in `src/data/*.ts`; for example, article files export structured metadata and content by slug.

## Testing Guidelines
There is no automated test suite configured yet. The minimum check is `npm run lint`. For UI or content updates, verify the relevant routes in `npm run dev`, confirm navigation works, and ensure exported assets still resolve from `public/`.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit messages, usually with prefixes like `chore:` and `feat:`. Follow that pattern, for example: `feat: add article for new video` or `chore: update videos data`.

PRs should include a brief summary, note any changed routes or content sources, and attach screenshots for visible UI changes. Link the related issue when applicable, and call out any manual verification performed.
