# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation site for **Poker Club HQ** — a poker tournament management app. Built with [Astro](https://astro.build/) and the [Starlight](https://starlight.astro.build/) documentation theme. Deployed to GitHub Pages at https://pokerclubhq.github.io/info/.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview the built site locally
```

Deployment is automatic via GitHub Actions on push to `main`.

## Architecture

- **Framework**: Astro v5 with Starlight theme
- **Content**: MDX files in `src/content/docs/` — each file becomes a page
- **Images**: Stored in `src/assets/` (organized in subdirectories), imported and rendered with Astro's `<Image>` component
- **Sidebar**: Defined in `astro.config.mjs` within the Starlight integration config
- **Site config**: Base path is `/info`, site is `https://pokerclubhq.github.io`

## Content Patterns

Documentation pages use MDX with YAML frontmatter (`title`, `description`). Images are imported as ES modules and used with the Astro Image component:

```mdx
import { Image } from 'astro:assets';
import myImage from '../../assets/setup/setup-00001.png';

<Image src={myImage} alt="Description" width="300" />
```

Starlight components like `:::caution` / `:::note` asides are used for callouts.
