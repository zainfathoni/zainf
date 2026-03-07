# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with **React Router v7** (migrated from Remix) and deployed to Vercel. The site features a blog, talks, projects showcase, and uses system. It supports dark/light theme switching and is built with TypeScript and Tailwind CSS.

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start

# Type checking
pnpm run typecheck
```

## Architecture

### Framework & Routing

- **React Router v7** with file-based routing in `app/routes/`
- Route convention: `_layout.*` files provide nested layouts
- MDX support for blog posts with `rehype-highlight` for code syntax highlighting
- Server-side rendering with TypeScript
- Configured via `react-router.config.ts` (Vercel preset)

### Theme System

- Custom theme context (`app/contexts/theme.tsx`) with dark/light mode support
- Theme persistence via server sessions and user preference detection
- Anti-flash script to prevent theme flicker on page load
- Theme switching action at `action/set-theme`

### Styling

- **Tailwind CSS** with custom typography plugin
- Comprehensive dark mode support with CSS custom properties
- Custom prose styles for blog content
- Responsive design with mobile-first approach

### Data Models

- Centralized data models in `app/models/` for metadata, posts, projects, talks, and tools
- JSON data files in `app/data/` for static content
- TypeScript interfaces for type safety

### Component Structure

- Reusable UI components in `app/components/`
- Layout components: `Header`, `Footer`, `Container`, `SimpleLayout`
- Specialized components: `PostHeader`, `Prose` for content rendering

### Key Files

- `app/root.tsx`: Main app wrapper with theme provider and global layout
- `app/routes/_layout.tsx`: Base layout for most pages
- `app/tailwind.css`: Global styles and Tailwind imports
- `react-router.config.ts`: React Router v7 config (SSR + Vercel preset)
- `vite.config.ts`: Vite config with MDX, React Router, and path alias plugins

## Content Management

- Blog posts as MDX files in `app/routes/blog.*.mdx`
- Static assets in `public/` directory
- Images organized in `app/images/` with WebP optimization

## Development Notes

- Uses `~/*` path alias for `app/*` imports
- Volta for Node.js version management (v18.19.0)
- ESLint for code quality
- Bundle targeting ES2022 with React JSX transform

## Git Conventions

- Do not include Claude Code co-authorship in commit messages
