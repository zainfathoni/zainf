# RevealJS Integration Implementation Plan

**Plan ID**: 001
**Created**: 2025-07-13
**Status**: In Progress

## Overview

This plan outlines the implementation of RevealJS slides integration into the existing Remix portfolio website. The goal is to enable local hosting of presentation slides while maintaining the existing architecture and design consistency.

## Current State Analysis

### Existing Talk System
- Talk model with external slide links (`app/models/talks.ts`)
- Route redirection system (`app/routes/talk.$slug.tsx`)
- Three categories: conferences, meetups, podcasts
- External links to slides hosted on various platforms (zainf.dev, speakerdeck, etc.)

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
- [ ] Install RevealJS core package: `reveal.js`
- [ ] Add RevealJS plugins: `@types/reveal.js`
- [ ] Install markdown processing: `remark`, `remark-html`
- [ ] Add syntax highlighting integration

```bash
pnpm add reveal.js
pnpm add -D @types/reveal.js
```

### Phase 2: Core Infrastructure

#### 2.1 RevealJS Component System
- [ ] Create `app/components/slides/RevealSlideShow.tsx`
- [ ] Implement theme integration (dark/light mode)
- [ ] Add slide navigation controls
- [ ] Configure RevealJS with custom settings

#### 2.2 Slide Content Structure
- [ ] Create `app/slides/` directory
- [ ] Set up MDX-based slide authoring
- [ ] Create slide asset management system
- [ ] Implement slide metadata structure

#### 2.3 Theme Integration
- [ ] Extend existing theme context for slides
- [ ] Create RevealJS-compatible CSS variables
- [ ] Implement transition animations matching site design

### Phase 3: Data & Routing Integration

#### 3.1 Talk Model Extension
- [ ] Add `hasLocalSlides: boolean` to Talk type
- [ ] Add `localSlidePath?: string` for local slide content
- [ ] Update existing talk data to mark local vs external slides
- [ ] Create slide content loader

#### 3.2 Routing System
- [ ] Create `/slides` index route (`app/routes/_layout.slides.tsx`)
- [ ] Implement `/slides/$slug` route for presentations
- [ ] Update `/talk/$slug` to conditionally render local slides
- [ ] Add slide-specific layout components

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

```javascript
// Proposed RevealJS config
const revealConfig = {
  hash: true,
  controls: true,
  progress: true,
  center: true,
  touch: true,
  transition: 'slide',
  backgroundTransition: 'fade',
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
  markdown: {
    smartypants: true
  },
  highlight: {
    highlightOnLoad: false // Use existing highlight.js setup
  }
}
```

### Slide Content Format

```markdown
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
```

### Directory Structure

```
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

**Next Steps**: Begin Phase 1 implementation with dependency installation and basic component structure.