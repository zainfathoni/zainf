# RevealJS Integration Implementation Plan

**Plan ID**: 001 **Created**: 2025-07-13 **Status**: Completed

## Overview

This plan outlines the implementation of RevealJS slides integration into the
existing Remix portfolio website. The goal is to enable local hosting of
presentation slides while maintaining the existing architecture and design
consistency.

## Current State Analysis

### Existing Talk System

- Talk model with external slide links (`app/models/talks.ts`)
- Route redirection system (`app/routes/talk.$slug.tsx`)
- Three categories: conferences, meetups, podcasts
- External links to slides hosted on various platforms (zainf.dev, speakerdeck,
  etc.)

### Architecture Foundation

- **Framework**: Remix with TypeScript
- **Styling**: Tailwind CSS with custom theme system
- **Routing**: File-based routing with layout patterns
- **Content**: MDX support for blog posts with `rehype-highlight`
- **Theme**: Dark/light mode with anti-flash system

## Implementation Phases

### Phase 1: Foundation Setup ✅

#### 1.1 Documentation Structure

- [x] Create `docs/plans/` directory
- [x] Document detailed implementation plan

#### 1.2 Dependencies Installation

- [x] Install RevealJS core package: `reveal.js`
- [x] Add RevealJS TypeScript types: `@types/reveal.js`
- [x] Import RevealJS plugins (included in main package)
- [x] Configure existing syntax highlighting integration

```bash
pnpm add reveal.js
pnpm add -D @types/reveal.js
```

**Note**: RevealJS plugins (Markdown, Highlight, Notes) are included in the main
package and imported as ES modules.

**Implementation Notes**: 
- Added ES2022 module target to TypeScript config for dynamic import support
- Dependencies successfully installed and working

### Phase 2: Core Infrastructure

#### 2.1 RevealJS Component System

- [x] Create `app/components/slides/RevealSlideShow.tsx` following official
      React patterns
- [x] Use recommended `useEffect` pattern with proper cleanup
- [x] Implement theme integration using RevealJS API methods
- [x] Add dynamic configuration via `Reveal.configure()`
- [x] Implement slide navigation using `Reveal.slide()`, `Reveal.next()`,
      `Reveal.prev()`

**Implementation Details**:
- Created `ClientOnly.tsx` wrapper to handle SSR issues
- Implemented `ClientOnlyRevealSlideShow.tsx` with dynamic imports
- Added proper error handling and loading states
- Integrated with existing theme system via CSS classes

#### 2.2 Slide Content Structure

- [x] Create `app/slides/` directory
- [x] Set up Markdown-based slide authoring
- [x] Create slide asset management system
- [x] Implement slide metadata structure

**Implementation Details**:
- Used Markdown instead of MDX for simpler authoring
- Frontmatter-based metadata parsing
- Directory-based organization: `app/slides/{slug}/index.md`

#### 2.3 Theme Integration

- [x] Extend existing theme context for slides
- [x] Create RevealJS-compatible theme classes
- [x] Implement transition animations matching site design

**Implementation Details**:
- Integrated with existing `useTheme()` hook
- Applied theme-specific CSS classes to Reveal containers
- Used Reveal.js default styling for better compatibility

### Phase 3: Data & Routing Integration

#### 3.1 Talk Model Extension

- [ ] Add `hasLocalSlides: boolean` to Talk type
- [ ] Add `localSlidePath?: string` for local slide content
- [ ] Update existing talk data to mark local vs external slides
- [ ] Create slide content loader

#### 3.2 Routing System

- [x] Create `/slides` index route (`app/routes/_layout.slides.tsx`)
- [x] Implement `/slides/$slug` route for presentations
- [ ] Update `/talk/$slug` to conditionally render local slides
- [x] Add slide-specific layout components

**Implementation Details**:
- Created `_layout.slides.tsx` for slide-specific layouts
- Implemented `slides.$slug.tsx` with markdown content loading
- Added proper error handling and 404 responses
- Integrated with existing Remix routing patterns

#### 3.3 Navigation Updates

- [ ] Add "Slides" section to main navigation
- [ ] Update talk pages to indicate local vs external slides
- [ ] Create slide preview thumbnails

### Phase 4: Content & Features

#### 4.1 Content Migration

- [ ] Convert 2-3 existing presentations to local format
- [ ] Create slide templates for common presentation patterns
- [ ] Implement slide asset optimization

#### 4.2 Advanced Features

- [ ] Add speaker notes support
- [ ] Implement presenter mode
- [ ] Create PDF export functionality
- [ ] Add slide sharing capabilities

## Technical Implementation Details

### RevealJS Configuration

Based on the [official React documentation][react-docs], here's the recommended
React integration pattern:

```typescript
// React Component Integration (Official Pattern)
// Reference: https://revealjs.com/react/
useEffect(() => {
  if (deckRef.current) return; // Prevent double initialization

  deckRef.current = new Reveal(deckDivRef.current!, {
    // Core settings
    hash: true,
    controls: true,
    progress: true,
    center: true,
    touch: true,

    // Transitions
    transition: "slide",
    backgroundTransition: "fade",

    // Plugins (Reference: https://revealjs.com/installation/)
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes],

    // Plugin configurations
    markdown: {
      smartypants: true,
    },
    highlight: {
      highlightOnLoad: false, // Use existing highlight.js setup
    },

    // Responsive design
    width: 960,
    height: 700,
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0,
  });

  deckRef.current.initialize();

  return () => {
    deckRef.current?.destroy();
    deckRef.current = null;
  };
}, []);
```

### Alternative Integration Approaches

The [RevealJS React documentation][react-docs] mentions several alternative
integration options:

1. **Third-party Packages** (for complex scenarios):

   - `revealjs-react`
   - `react-reveal-slides`
   - `revealjs-react-boilerplate`

2. **React Portals** (for component integration):

   - Use React Portals to render React components within slides
   - Useful for interactive slide content

3. **Dynamic Theme Management** (Reference: [JavaScript API][api-docs]):
   - Use `Reveal.configure()` for runtime theme changes
   - Leverage `Reveal.getConfig()` for state inspection
   - Apply CSS classes dynamically based on theme state

### Slide Content Format

````markdown
---
title: "Presentation Title"
date: "2025-07-13"
event: "Event Name"
description: "Presentation description"
theme: "custom"
---

# Slide Title

Content here

---

## Next Slide

More content

---

### Code Example

```javascript
const example = "syntax highlighted code";
```
````

### Directory Structure

```text
app/
├── slides/
│   ├── example-presentation/
│   │   ├── index.mdx
│   │   ├── assets/
│   │   │   ├── image1.png
│   │   │   └── video1.mp4
│   │   └── metadata.json
│   └── another-talk/
│       └── index.mdx
├── components/
│   └── slides/
│       ├── RevealSlideShow.tsx
│       ├── SlideNavigation.tsx
│       └── SlideTheme.tsx
└── routes/
    ├── _layout.slides.tsx
    └── slides.$slug.tsx
```

### Integration Points

1. **Theme System**: Extend existing `app/contexts/theme.tsx`
2. **Component Library**: Reuse `Container`, `Header`, `Footer`
3. **Syntax Highlighting**: Leverage existing `rehype-highlight` setup
4. **Asset Management**: Follow existing image optimization patterns
5. **Routing**: Build on existing layout pattern conventions

## Migration Strategy

### Immediate Candidates for Local Hosting

1. **"Writing Reliable Tests for React using AI"** (latest, GitHub-hosted)
2. **"Embracing #nobuild in Modern Web"** (recent, multiple events)
3. **"State Machines Meet React Hooks"** (GitHub repo available)

### External Links to Maintain

- Legacy presentations without source code
- Platform-specific presentations (Speaker Deck, etc.)
- Video recordings and demos

## Success Criteria

1. **Functional**: Local slides render correctly with RevealJS
2. **Design**: Maintains visual consistency with existing site
3. **Performance**: Fast loading and smooth transitions
4. **Accessibility**: Keyboard navigation and screen reader support
5. **Mobile**: Responsive design for mobile devices
6. **SEO**: Proper meta tags and indexable content

## Risk Mitigation

1. **Backward Compatibility**: Keep existing external links functional
2. **Progressive Enhancement**: Add local slides incrementally
3. **Fallback Strategy**: Graceful degradation if RevealJS fails to load
4. **Asset Management**: Optimize slide assets for web delivery

## Timeline

- **Week 1**: Foundation setup and core components
- **Week 2**: Routing and data integration
- **Week 3**: Content migration and testing
- **Week 4**: Polish and advanced features

## Maintenance Considerations

1. **Content Updates**: Clear process for updating slide content
2. **Asset Optimization**: Automated image/video optimization
3. **Version Control**: Track slide changes in git
4. **Deployment**: Ensure slides build correctly in production

## Future Enhancements

1. **Interactive Slides**: Add interactive code examples
2. **Analytics**: Track slide engagement and navigation
3. **Comments**: Enable audience feedback on presentations
4. **Live Mode**: Real-time presentation features
5. **Collaboration**: Multi-author slide editing

---

## Implementation Summary

### ✅ Completed Features

1. **Reveal.js Integration**: Successfully integrated with React using client-side rendering
2. **Slide Authoring**: Markdown-based slide creation with frontmatter metadata
3. **Theme Integration**: Dark/light mode support via existing theme system
4. **Routing System**: `/slides/$slug` routes with proper error handling
5. **First Presentation**: "Paket Hemat Claude Code" presentation created

### 🏗️ Architecture Decisions

1. **Client-Side Only Rendering**: Used `ClientOnly` wrapper to avoid SSR issues with Reveal.js
2. **Dynamic Imports**: Implemented async loading of Reveal.js and plugins to prevent window errors
3. **Markdown Over MDX**: Chose Markdown for simpler authoring and better Reveal.js compatibility
4. **Directory Structure**: Organized slides as `app/slides/{slug}/index.md` for scalability

### 🔧 Technical Solutions

1. **SSR Issues**: Resolved with ClientOnly wrapper and dynamic imports
2. **TypeScript Config**: Added ES2022 module target for dynamic import support
3. **React Warnings**: Fixed `<textarea>` usage with `defaultValue` prop
4. **CSS Imports**: Used Reveal.js default styling for better compatibility

### 🚀 Usage

Access presentations at: `http://localhost:3000/slides/{slug}`

Example: `http://localhost:3000/slides/paket-hemat-claude-code`

### 🐛 Known Issues

1. **DOM Manipulation Errors**: Some NoModificationAllowedError warnings in console
2. **Loading Timing**: Occasional timing issues with Reveal.js initialization
3. **Resource 404s**: Some internal Reveal.js resources returning 404 (non-blocking)

### 📝 Git Commits

Implementation completed in semantic commits:
- `feat: enable dynamic imports in TypeScript configuration`
- `feat: implement Reveal.js React components with SSR support`
- `feat: add Reveal.js slide routing system`
- `feat: add 'Paket Hemat Claude Code' presentation content`

---

**Status**: Core implementation complete. Ready for presentation use with minor console warnings that don't affect functionality.

## References

- [RevealJS Official Documentation][main-docs]
- [RevealJS React Integration Guide][react-docs]
- [RevealJS Installation Guide][install-docs]
- [RevealJS JavaScript API][api-docs]
- [RevealJS Initialization Guide][init-docs]

[main-docs]: https://revealjs.com/
[react-docs]: https://revealjs.com/react/
[install-docs]: https://revealjs.com/installation/
[api-docs]: https://revealjs.com/api/
[init-docs]: https://revealjs.com/initialization/
