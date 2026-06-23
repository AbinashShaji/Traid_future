# Triads Future Pre-Development Analysis Report (Revised)

**Document Version:** 2.1  
**Status:** Under Review  
**Target Project:** Triads Future Website & Content Management System  
**Prepared by:** Antigravity AI Engineering  

---

## 1. Executive Summary

Triads Future is transitioning its digital presence from a standard informational site to a high-end, bespoke digital product designed to position the company as a premium **Business Growth & Technology Partner**. The ultimate objective of the website is to build credibility and trust, turning visitors into qualified business enquiries through booking a **Strategy Call**. 

To deliver this, the platform will be structured around two key areas:
1. **The Three-Device Experience:** A highly editorial, narrative-driven interface that runs three device-specific experiences (Desktop, Tablet, and Mobile browser app), avoiding standard SaaS templates, generic animations, or AI-generated visual clutter.
2. **A Lightweight, Powerful Custom CMS:** A secure, intuitive administration panel built using database-driven architecture to allow the Triads Future team to manage all website elements (copy, menus, SEO, projects, articles, testimonials, FAQs, settings, and media assets) without requiring code modifications.

This document consolidates findings from all project documentation, brand guidelines, and blueprints into a single, cohesive engineering report. Implementation will not commence until this plan receives formal stakeholder approval.

---

## 2. Three-Device Philosophy

Triads Future is **not** a traditional responsive website that simply scales down elements to fit viewports. Instead, it is **one unified product delivering three unique, device-specific user experiences** that share the same database, CMS API, media storage, and authentication session layers.

```
                  ┌──────────────────────────────┐
                  │      Unified Database        │
                  │   & CMS Administration API   │
                  └──────────────┬───────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│     DESKTOP      │   │      TABLET      │   │      MOBILE      │
│  Web Experience  │   │  App Experience  │   │  App Experience  │
├──────────────────┤   ├──────────────────┤   ├──────────────────┤
│ - Top Nav bar    │   │ - Left Nav Rail  │   │ - Bottom Nav bar │
│ - Mouse-first    │   │ - Touch-first    │   │ - Thumb-first    │
│ - Editorial layout│   │ - Magazine feel  │   │ - Task-focused   │
│ - Large storytelling  │ - Fixed layout   │   │ - Single-column  │
└──────────────────┘   └──────────────────┘   └──────────────────┘
```

### Experience Comparison Matrix

| Property | Desktop Experience | Tablet Experience | Mobile Experience |
| :--- | :--- | :--- | :--- |
| **UX Model** | Premium Editorial Website | Premium Tablet Application | Premium Mobile Application |
| **Design Inspiration**| Apple, Linear, Notion, Premium Magazine | Instagram (for iPad), Apple News, Apple Photos | Spotify, Apple Music, Instagram, Apple Store |
| **Navigation** | Sticky Top Navigation Bar (transitions transparent to solid) | Fixed Left Navigation Rail (Logo, middle links, bottom profile) | Fixed Bottom Navigation Bar (Home, Solutions, Work, Insights, Book) |
| **Input Priority** | Mouse-first, keyboard-accessible | Touch-first, large tap targets | Thumb-first, optimized screen bottom zones |
| **Layout Strategy** | Large asymmetric grids, storytelling, generous spacing | Fixed grids, minimal chrome, comfortable reading | Single-column stack, fast decision-making, minimal scroll |
| **Motion & Speed** | Smooth, editorial pacing (150ms–600ms transitions) | Responsive touch physics, zero hover dependencies | Quick micro-interactions, immediate tactile feedback |
| **Image Delivery** | High-res large layouts, responsive crop settings | Screen-optimized grid galleries, touch carousel controls | Compact crops, vertical lists, low bandwidth sizes |

---

## 3. Business Understanding

### Business Model & Positioning
Triads Future positions itself as a **Business Growth & Technology Partner**. It explicitly rejects the labels of a "marketing agency," "software company," "branding agency," or "freelancers." While technology and marketing are core tools in its arsenal, the final product delivered is **sustained business growth**. The company works as a long-term consultative partner rather than a transactional project vendor.

### Brand Personality & Core Values
The brand speaks like an experienced consultant having a calm, confident, and professional face-to-face conversation.
* **Simplicity:** Rejecting technical jargon and overly clever vocabulary. The copy must be understandable to a 60-year-old business owner without explanation.
* **Honesty & Trust:** Zero fake reviews, fake statistics, or artificial urgency tactics. 
* **Clarity:** A visitor must immediately understand what Triads Future does within the first 5 seconds.
* **Quality:** Extreme precision in typography, spacing, performance, and accessibility.

### Target Audience
* Startup Founders
* Mid-market Business Owners
* Company Directors
* Marketing and Operations Managers
* Enterprise Decision Makers seeking growth, operational automation, or digital transformation.

### Conversion Goal
The highest priority conversion action across the entire website is booking a **Strategy Call**. The user journey on every page is structured to educate and build trust, leading to this low-friction conversion point.

---

## 4. Technical Understanding

The technology stack is unified across the public site and admin panel, utilizing a modern, performance-first TypeScript ecosystem:

| Layer | Technology | Role & Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | Next.js 15 (App Router) | Server-side rendering, streaming, static optimization, and routing. |
| **Language** | TypeScript | Strong typing, validation, and contract enforcement. |
| **Styling** | Tailwind CSS | Utility-first CSS, enabling responsive layouts and design tokens. |
| **Animations** | Framer Motion | Smooth, GPU-accelerated motion matching physical weight. |
| **Database** | PostgreSQL | Relational database for relational content structure. |
| **ORM** | Prisma ORM | Typesafe database client and migrations. |
| **Authentication** | Better Auth | Secure session management, role enforcement, and authentication. |
| **Storage** | Cloudinary | Asset delivery, automatic compression, and responsive scaling. |
| **Email Delivery** | Resend | Transactional emails for booking alerts and lead submissions. |
| **Deployment** | Vercel | Production hosting, preview deployments, and CDN caching. |

---

## 5. Website Structure

The application features 6 public pages, 2 legal pages, standard utility pages, and a modular dashboard:

### Public Pages
1. **Home Page (`/`):** Guided introduction to the company's philosophy. Establishes credibility, showcases selected work, and moves the visitor from curiosity to trust.
2. **Solutions Page (`/solutions`):** Educates the visitor on how Triads Future addresses business challenges across 5 key outcomes (Digital Presence, Digital Experiences, Brand Strength, Operations Automation, Business Scalability).
3. **Work Page (`/work`):** Case study library demonstrating real business outcomes, filterable by industry. Includes individual case study detail pages (`/work/[slug]`).
4. **Insights Page (`/insights`):** A curated article repository showing thought leadership, filterable by category. Includes individual article detail pages (`/insights/[slug]`).
5. **About Page (`/about`):** Communicates values, the partnership philosophy, the core approach, and introduces the team behind the business.
6. **Contact Page (`/contact`):** Central conversion portal featuring the low-friction Strategy Call booking form and alternative contact channels.

### Legal & Utility Pages
* **Privacy Policy (`/privacy`):** Standard legal text, fully editable in the CMS.
* **Terms & Conditions (`/terms`):** Standard terms of use, fully editable.
* **404 Page:** Premium, helpful page with clear paths to return to the home screen.
* **Thank You Page (`/thank-you`):** Conversion success screen shown after submitting a Strategy Call request.

---

## 6. Project Folder Structure

The production codebase is strictly structured into modular folders to guarantee year-round maintainability:

```
project/
├── prisma/
│   ├── schema.prisma         # Prisma Schema Database Layout
│   └── seed.ts               # Database Seed Script (Admin creation)
├── public/
│   ├── fonts/                # Self-hosted Typography Files
│   └── static/               # Uneditable Brand Logos/Favicons
├── docs/
│   └── systems/              # Markdown Architecture Guides
└── src/
    ├── app/                  # Next.js App Router (Layouts & Routes)
    ├── components/           # Reusable Shared UI Components
    ├── features/             # Domain-specific modules (Work, Blogs, CMS)
    ├── hooks/                # Global custom hooks
    ├── providers/            # React global context providers
    ├── contexts/             # Context declarations
    ├── animations/           # Framer Motion transitions/presets
    ├── cms/                  # Custom CMS configuration layouts
    ├── services/             # API data services (Resend, etc.)
    ├── database/             # Prisma client instances
    ├── config/               # Environment schema configuration validation
    ├── styles/               # Tailwind global CSS variables
    ├── constants/            # Routing path and constant tables
    └── types/                # Core TypeScript shared definitions
```

### Folder Responsibilities

* **`prisma/`:** Manages relational models and configuration files. Holds `schema.prisma` (data contract) and `seed.ts` (sets up initial admin credentials and default site configs).
* **`public/`:** Houses public static assets. Serves files that never change (e.g. self-hosted fonts like Inter/Outfit, favicons). Dynamically updated content goes to Cloudinary.
* **`docs/`:** Holds in-repo documentation and design system manuals, serving as the system's constitution.
* **`src/app/`:** Root of the Next.js routing hierarchy. Contains layout wrappers (`layout.tsx`), page endpoints (`page.tsx`), and REST API handler modules (`/api/route.ts`). Includes route groups (`(desktop)`, `(tablet)`, `(mobile)`) to separate device presentation.
* **`src/components/`:** Global, stateless UI components (e.g., buttons, input tags, loaders) that contain no business logic and are shared across all pages.
* **`src/features/`:** Houses modular, encapsulated business logic. Features include `work`, `solutions`, `insights`, `contact`, and `cms`. Each contains its own components, hooks, services, and schemas, preventing tight feature coupling.
* **`src/hooks/`:** Reusable React state hooks (e.g., `useMediaQuery`, `useScroll`, `useReducedMotion`).
* **`src/providers/`:** React context provider wrappers (e.g., auth providers, theme configuration providers).
* **`src/contexts/`:** Lower-level context declarations.
* **`src/animations/`:** Standardized animation configuration arrays for Framer Motion (Rise, Settle, Fade).
* **`src/cms/`:** Custom configuration controllers, validation schemas (Zod), and layout bindings for the CMS dashboard.
* **`src/services/`:** Connectors to third-party APIs and email handlers (e.g., Resend SDK integrations, Cloudinary wrapper).
* **`src/database/`:** Initializes and exports the Prisma Client singleton instance.
* **`src/config/`:** Validates and loads environment variables (database connection strings, Cloudinary API keys, auth secrets) at startup.
* **`src/styles/`:** Contains `global.css` and custom Tailwind CSS theme extensions.
* **`src/constants/`:** Site-wide static tables (e.g., routes list, navigation order configurations).
* **`src/types/`:** Global shared TypeScript definitions and type contracts.

---

## 7. Component Inventory

The component inventory represents the complete UI architecture of the project.

### Layout & Spacing Components
* **GlobalLayout:** Layout wrapper supplying theme contexts, SEO tags, and toast container coordinates.
* **SectionWrapper:** Semantic `<section>` element wrapper applying standard editorial margins, layout paddings, and GPU-accelerated entrance viewport animations.
* **GridSystem:** Configurable flex/grid container providing desktop margins, tablet gaps, and single-column mobile constraints.
* **Column:** Dynamic grid columns conforming to editorial layouts.
* **Spacer:** CSS spacing component utilizing responsive Tailwind class mappings.

### Navigation Components
* **DesktopNavigation:** Top header bar implementing transparent-to-solid transitions, logo, links, hover underline interactions, and the primary "Book a Strategy Call" button.
* **TabletNavigationRail:** Left-aligned rail showing Logo, outlined rail icons (House, LayoutGrid, BriefcaseBusiness, BookOpen, Calendar), label text, and profile configuration triggers.
* **MobileBottomNavigation:** Fixed bottom bar displaying outlined icons with labels optimized for mobile device safe areas and comfortable thumb clicks.
* **Breadcrumb:** Simple path tracking helper for child pages (case studies and articles).
* **ScrollController:** Floating scroll progress indicator and smooth-scroll control provider.

### Typography & Imagery Components
* **Heading:** Multi-level heading component (`H1` to `H4`) styling text according to the Sentence case guidelines.
* **BodyText:** Standardized paragraph tag enforcing character length constraints (60–75 on Desktop, 55–65 on Tablet) and editorial line spacing.
* **Label:** Tiny uppercase section indicator tags.
* **ImageWrapper:** Custom wrapper for Next.js `next/image` handles WebP conversion, srcSets, alternative crops, loading states, and reduced-motion settles.
* **MediaGallery:** Image case study slider presenting grid-galleries, swipe controls for touch devices, and caption displays.

### Form & Feedback Components
* **FormInput:** Floating label input with validation boundaries, active border highlight, and error labels.
* **FormTextArea:** Multiline inputs with identical design logic.
* **SubmitButton:** Loading-state aware submit element with clean transitions.
* **ModalDialog:** Focus-trapped confirmation window for delete safety checkpoints.
* **ToastAlert:** Sonner notification instance showing success or failure alerts.
* **SkeletonLoader:** Simple pulse containers for mock layouts during fetches.
* **ErrorFallback:** Standard boundary recovery view if an endpoint fails.

### Admin-Specific Components
* **AdminSidebar:** Navigation manager for administration screens.
* **DashboardMetricCard:** Statistic displays mapping data tallies.
* **AuditLogFeed:** Log activity feed for CMS operations.
* **RichTextEditor:** Editor configuration supporting bolding, headers, and media attachments for articles.
* **PageEditorForm:** Interface to manage sections, visibility toggles, and metadata variables.

### Providers & Utilities
* **AnimationProvider:** Central Framer Motion configuration setting transitions globally and honoring preferences.
* **ResponsiveProvider:** Tracks active user breakpoints (Desktop/Tablet/Mobile) and serves optimized experiences.
* **SEOProvider:** Updates metadata tags, canonical headers, and Open Graph objects.

---

## 8. CMS Inventory

The CMS allows administrators to manage every element of the website without coding.

### 1. Site configuration & Settings
* **Navigation Menus:** Edit display titles, route URLs, order, and device visibility rules.
* **Global Settings:** Brand Name, Logo, Favicon, Phone Number, Email, Office Address, Business Hours.
* **Footer Content:** Social links, copyright text, small brand statement, quick links.
* **Analytics Settings:** Site tracking IDs (database-managed configuration values).
* **Backups:** Schedule automated backups, download manual JSON snapshots, and restore system state.

### 2. Pages & Section Configuration
* **Page Inventory:** Home, Solutions, Work, Insights, About, Contact, Privacy, Terms.
* **Hero Content (per page):** Headline, description paragraph, background asset, CTA text, CTA redirect destination.
* **Page Sections Manager:** Dynamic section ordering list, section titles, visibility toggles, and section layout settings.
* **SEO Settings (per page):** Meta Title, Meta Description, Keywords, Canonical URL, Open Graph Image.

### 3. Collection Items
* **Solutions Outcomes:** Outcome title, description, business value text, list of included services, ideal-for description, call-to-action text.
* **Projects (Case Studies):** Title, client, industry type, challenge text, strategy text, solution text, result metrics, cover image, gallery assets, client testimonial lookup, featured flag, status (draft/published).
* **Articles (Insights):** Title, unique slug, excerpt, content body (rich text/Markdown), author, cover photo, category tag, publish status, publish date.
* **Testimonials:** Client name, company designation, job title, client photo, company logo, review text, rating (1-5 stars), display order, featured toggle.
* **FAQs:** Question, answer, category tag, display order, visibility toggle.
* **Media Assets:** Asset file, filename metadata, Cloudinary URL, alternative crop configs, alt-text descriptions, usage references.

---

## 9. Admin Panel Modules

The admin panel acts as the website control center:

1. **Dashboard:** Quick indicators of website health, latest leads, pending drafts, recent activity log, and quick actions.
2. **Page Content Manager:** Toggle visibility, edit copy, reorder sections, and adjust SEO for static pages.
3. **Solutions Manager:** Edit outcome cards, benefits lists, and client onboarding workflows.
4. **Work Manager:** Create, update, or archive featured case studies, assign gallery imagery, and configure slug patterns.
5. **Insights Manager:** Dedicated blogging workspace featuring categories, tags, drafts, previewing, and publication dates.
6. **Testimonials Manager:** Input client reviews, rating indicators, and select testimonials for homepage highlights.
7. **FAQ Manager:** Add questions, update answers, adjust categories, and order FAQs.
8. **Media Library:** Central folder manager for uploads, bulk operations, image cropping, alt-text configuration, and usage reports.
9. **Leads Manager:** View submitted Strategy Call forms, edit internal admin notes, assign team members, and update lead states.
10. **System Settings & Backups:** Profile credentials configuration, Resend API key setup, Cloudinary credential management, and single-click manual system backup download.

---

## 10. Database Planning

### Normalized Relational Entity Diagram

```
┌──────────────┐          ┌─────────────────┐
│    Admin     │─────────<│   ActivityLog   │
└──────────────┘          └─────────────────┘

┌──────────────┐          ┌─────────────────┐          ┌──────────────┐
│  Navigation  │─────────<│ NavigationItem  │          │ GlobalSetting│
└──────────────┘          └─────────────────┘          └──────────────┘

┌──────────────┐          ┌─────────────────┐          ┌──────────────┐
│     Page     │─────────<│   PageSection   │          │ BackupRecord │
└──────┬───────┘          └─────────────────┘          └──────────────┘
       │
       │ 1-to-1
┌──────▼───────┐          ┌─────────────────┐          ┌──────────────┐
│   SEOData    │          │   Appointment   │─────────<│ LeadHistory  │
└──────▲───────┘          └─────────────────┘          └──────────────┘
       │ 1-to-1 (shared)
       ├─────────────────────────────────┐
       │                                 │
┌──────┴───────┐                  ┌──────┴───────┐
│   Project    │                  │   BlogPost   │
└──────┬───────┘                  └──────┬───────┘
       │ 1-to-many                       │
┌──────▼───────┐                  │
│ProjectGallery│                  │
└──────▲───────┘                  │
       │                          │
       │ references               │ references
┌──────┴───────┐                  │
│  MediaItem   │<─────────────────┘
└──────▲───────┘
       │
       │ tracks usage
┌──────┴───────┐
│  MediaUsage  │
└──────────────┘
```

### Schema Explanations & Relationships

#### User Management & Security
* **`Admin`:** Stores administrator credentials.
* **`Role` / `Permission`:** Role-based access control rules (Super Admin, Admin, Editor, Viewer).
* **`ActivityLog`:** System audit logs tracking admin actions (`userId`, `action`, `details`, `timestamp`).

#### Site structure & Layout configuration
* **`Navigation` / `NavigationItem`:** Handles navigation menus. A `Navigation` container is configured per device group (Desktop, Tablet, Mobile) and has a one-to-many relationship with `NavigationItem` elements (storing title labels, outlined icons, target routes, display orders, and visibility settings).
* **`Page` / `PageSection`:** Handles site layout. A `Page` record holds generic routing slugs and has a one-to-many relationship with `PageSection` rows (storing component type keys, custom copy blocks, layout orders, and visibility state).
* **`GlobalSetting` / `AnalyticsSettings`:** Singletons holding site settings and database tracking codes.
* **`BackupRecord`:** Logs backup history (`id`, `fileName`, `url`, `size`, `status`, `timestamp`).

#### Public collections
* **`Project`:** Stores case studies. Contains a one-to-many relation with `ProjectGallery` and a one-to-one relation with `SEOData`.
* **`BlogPost`:** Stores insights. Contains category relationships and a one-to-one relation with `SEOData`.
* **`Testimonial`:** Client feedback. Can link to a specific `Project` case study.
* **`FAQ`:** Stores questions and answers sorted by display order.

#### Media & Image Asset Tracking
* **`MediaItem`:** Central storage metadata for assets.
* **`MediaUsage`:** Tracks asset dependencies. Whenever an image is assigned in the CMS (e.g. as a project cover, blog photo, team card), a `MediaUsage` log is written. The CMS checks this table before permitting asset deletion to prevent broken links on the public site.

#### Leads Workflow
* **`Appointment` / `LeadHistory`:** Tracks Strategy Call submissions. Status changes trigger logs in the `LeadHistory` table for audit auditing (tracks `changedBy`, `oldStatus`, `newStatus`, `timestamp`, and admin notes).

---

## 11. API Planning

All API routes follow standard design structures with authorization checks for CMS controllers:

```
src/app/api/
├── contact/
│   └── route.ts              # Public: submit strategy call lead
├── projects/
│   └── route.ts              # Public: GET case studies
├── articles/
│   └── route.ts              # Public: GET insight articles
├── cms/
│   ├── middleware.ts         # Session checking & Role validation
│   ├── pages/
│   │   └── route.ts          # Admin: page sections & layouts CRUD
│   ├── solutions/
│   │   └── route.ts          # Admin: outcomes CRUD
│   ├── projects/
│   │   └── route.ts          # Admin: work CRUD
│   ├── articles/
│   │   └── route.ts          # Admin: insights CRUD
│   ├── testimonials/
│   │   └── route.ts          # Admin: testimonials CRUD
│   ├── faq/
│   │   └── route.ts          # Admin: faq CRUD
│   ├── media/
│   │   └── route.ts          # Admin: upload/delete asset with Cloudinary
│   ├── leads/
│   │   └── route.ts          # Admin: manage leads & status workflows
│   ├── settings/
│   │   └── route.ts          # Admin: site config & backup trigger
│   └── logs/
│       └── route.ts          # Admin: view activity audit logs
```

---

## 12. Responsive Strategy (Shared Data, Independent Interfaces)

As Desktop, Tablet, and Mobile require different user experiences, the system uses a shared backend but serves device-specific interfaces:

```
[Visitor accesses site]
          │
          ▼
  Next.js Middleware
          │
          ├─ User-Agent: Mobile ──> Render '/src/app/(mobile)/page.tsx' 
          ├─ User-Agent: Tablet ──> Render '/src/app/(tablet)/page.tsx'
          └─ User-Agent: Default ──> Render '/src/app/(desktop)/page.tsx'
```

* **Shared Backend:** The database, CMS settings, API controllers, and authentication layers are unified. A change made inside the CMS (e.g. updating a case study description) is immediately pulled by all three device experiences.
* **Decoupled Presentations:** View directories are isolated (`/src/app/(desktop)`, `/src/app/(tablet)`, and `/src/app/(mobile)`) using Next.js Route Groups. This avoids large responsive CSS files and ensures viewports only load components designed for their device profile.

---

## 13. Animation Summary

Animations are designed to remain calm and support readability.

### Allowed Animations
* **Rise:** Elements start 8px below their final placement and slide up vertically while fading in. Used for text, cards, and section entrances.
* **Fade:** Gradual opacity transition from 0 to 100%. Always accompanies another movement.
* **Underline:** Hovering link text draws a thin underline from left to right.
* **Image Settle:** Important photographs enter scaled at 102% and settle to 100% over 500ms while fading in.

### Timing Guidelines
* **Micro-interactions:** 100ms – 150ms
* **Standard Hover Transitions:** 150ms – 200ms
* **Section Entrances:** 400ms – 600ms (uses small stagger delays)
* **Page Transitions:** 300ms – 450ms

### Forbidden Animations
Glassmorphism, floating blobs, particles, neon, typewriter text, infinite marquee, card overload, bounce, pulse, rotating icons, autoplaying sliders, animated gradients, confetti.

---

## 14. Development Dependency Graph

This dependency graph defines the construction sequence to prevent implementation conflicts:

```
[Phase 1: Foundations]
   │
   ▼
[Phase 2: Design Tokens & Typography] 
   │
   ▼
[Phase 3: Core Interactive Controls] (Buttons, Inputs, Cards)
   │
   ▼
[Phase 4: Navigation Providers] (Desktop Bar, Tablet Rail, Mobile Bottom)
   │
   ▼
[Phase 5: Prisma Database Schema & Better Auth Setup]
   │
   ▼
[Phase 6: Custom CMS & Media Library Core]
   │
   ▼
[Phase 7: CMS CRUD Modules Integration]
   │
   ▼
[Phase 8: Public Layouts Assembly] (Desktop, Tablet, Mobile Web views)
   │
   ▼
[Phase 9: Performance Optimization & Testing]
   │
   ▼
[Phase 10: Production Deployment]
```

---

## 15. CMS Admin User Flows

These step-by-step flows outline how administrators manage content:

### 1. Page Content & Hero Editing Flow
```
Admin Login -> Dashboard -> Page Content Manager -> Select Page (e.g. Home)
                                                          │
   ┌──────────────────────────────────────────────────────┘
   ▼
Edit Hero Headline & Description -> Choose Cover Image from Media Library -> Edit CTA Text/Url
                                                          │
   ┌──────────────────────────────────────────────────────┘
   ▼
Toggle Section Visibility (e.g., Hide Testimonials) -> Click "Save Draft" -> Preview changes
                                                          │
   ┌──────────────────────────────────────────────────────┘
   ▼
Click "Publish" -> Database record updates -> Public site updates globally
```

### 2. Work Case Study (Project) CRUD Flow
```
Admin Login -> Dashboard -> Work Manager -> Click "Add Project"
                                                 │
   ┌─────────────────────────────────────────────┘
   ▼
Fill: Title, Client Name, Industry, Challenge, Strategy, Solution, Result Metrics
                                                 │
   ┌─────────────────────────────────────────────┘
   ▼
Upload cover image & gallery photos to Media Library -> Select client testimonial
                                                 │
   ┌─────────────────────────────────────────────┘
   ▼
Fill project SEO meta fields -> Toggle "Featured" flag -> Click "Save as Draft"
                                                 │
   ┌─────────────────────────────────────────────┘
   ▼
Review -> Click "Publish" -> URL `/work/[slug]` goes live on public site
```

### 3. Insights Article (BlogPost) CRUD Flow
```
Admin Login -> Dashboard -> Insights Manager -> Click "Write Article"
                                                     │
   ┌─────────────────────────────────────────────────┘
   ▼
Write title & summary -> Author details -> Select category -> Input rich text body
                                                     │
   ┌─────────────────────────────────────────────────┘
   ▼
Configure SEO keywords & canonical tag -> Upload cover banner -> Save draft
                                                     │
   ┌─────────────────────────────────────────────────┘
   ▼
Select "Schedule Publish" or "Publish Now" -> Database entry updates -> Article goes live
```

### 4. Testimonials CRUD Flow
```
Admin Login -> Dashboard -> Testimonials -> Click "Add Testimonial"
                                                 │
   ┌─────────────────────────────────────────────┘
   ▼
Fill client name, company, position -> Input review text -> Select star rating
                                                 │
   ┌─────────────────────────────────────────────┘
   ▼
Upload client headshot -> Toggle "Featured" flag -> Click "Save & Enable" -> Testimonial visible
```

### 5. FAQ CRUD Flow
```
Admin Login -> Dashboard -> FAQs -> Click "New FAQ" -> Input question & answer
                                                            │
   ┌────────────────────────────────────────────────────────┘
   ▼
Select category -> Define display order index (0, 1, 2) -> Click "Publish" -> FAQ active
```

### 6. Media Library Upload & Usage Flow
```
Admin Login -> Dashboard -> Media Library -> Choose folder -> Click "Upload Files"
                                                                   │
   ┌───────────────────────────────────────────────────────────────┘
   ▼
Input file Alt text -> Compression/formatting check -> Uploads to Cloudinary
                                                                   │
   ┌───────────────────────────────────────────────────────────────┘
   ▼
Database records asset metadata -> Asset becomes selectable across other CMS modules
```

---

## 15. Image Lifecycle & Usage Tracking

Images are managed through a structured lifecycle to protect performance and prevent broken links:

```
[Upload] ──────> Client & Server Validation (Zod format/size check)
                    │
                    ▼
[Processing] ──> Cloudinary compression & WebP/AVIF generation
                    │
                    ▼
[Database] ────> Record asset URL and initialize MediaUsage tracking
                    │
                    ▼
[CMS Selection]> Assigned to Page, Project, BlogPost, or Testimonial
                    │
                    ▼
[Delivery] ────> Public site serves responsive sizes to Desktop, Tablet, or Mobile
                    │
                    ▼
[Deletion Request]
                    │
                    ▼
[Usage Audit] ─> Check 'MediaUsage' table. Is asset referenced?
                    ├─ Yes ──> Block Deletion. Alert admin with usage list.
                    └─ No ───> Proceed. Delete from database & Cloudinary storage API.
```

---

## 16. AI Development Workflow

AI acts as a development assistant following strict boundaries:

```
[Documentation Review] (Read Master Guide & system files first)
          │
          ▼
[Stitch Wireframing] (Generate layout concepts & grid proportions)
          │
          ▼
[Design Review] (Validate Stitch concepts against Design guidelines)
          │
          ▼
[21st.dev Component Selection] (Source specific UI blocks)
          │
          ▼
[Component Audit] (Check sourced components for TypeScript types, accessibility, responsive structure)
          │
          ▼
[Antigravity Implementation] (Code component logic and state flows)
          │
          ▼
[CMS Integration] (Connect fields to Prisma schema & admin APIs)
          │
          ▼
[Testing] (Verify keyboard access, prefers-reduced-motion, Lighthouse scores)
          │
          ▼
[Deployment] (Release preview for review, then push to production Vercel)
```

### AI Responsibilities Matrix
* **Stitch:** Limited strictly to layout layout and initial wireframe structure ideas.
* **21st.dev:** Used to find baseline component structures (e.g. FAQ accordions). Sourced code must be reviewed and refactored.
* **UI Pro:** Used to construct the Admin Panel dashboard modules. Banned from public-facing interfaces.
* **Antigravity:** Primary implementation workspace. Responsible for writing database schemas, backend routes, and assembling the three device experiences.

---

## 17. Confirmed Requirements vs Engineering Recommendations

### Confirmed Project Requirements (Explicitly Documented)
* Desktop layout: Editorial style, traditional top navigation bar.
* Tablet layout: Left Navigation Rail showing outlined icons with small labels.
* Mobile layout: Premium browser app feel with Bottom Navigation Bar.
* Allowed Animations: Rise, Fade, Underline, Image Settle.
* Technology Stack: Next.js 15, Tailwind CSS, Framer Motion, PostgreSQL, Prisma, Better Auth, Cloudinary, Resend, Vercel, pnpm.
* CMS Scope: Content on all pages must be editable from the admin panel without editing code.
* Image optimization: Auto-generation of Desktop, Tablet, Mobile, and WebP/AVIF variations.
* Form booking: Strategy Call form must require Name and Phone Number only.

### Engineering Recommendations (Proposed Best Practices)
* **Middlewares route grouping:** Using Route Groups (`(desktop)`, `(tablet)`, `(mobile)`) in Next.js to isolate layout compilation instead of relying on CSS media queries.
* **MediaUsage tracking table:** A database helper table to prevent deleting images currently in use.
* **Sentry integration:** Error monitoring suite on the backend to log operational issues without exposing stack traces to visitors.
* **Singleton settings table:** Using a single-row PostgreSQL table (`id: "singleton"`) to store and validate site-wide configurations.
* **Soft delete flags:** Setting a `published` boolean flag on case studies and posts to allow drafts and archiving without immediate database purging.

---

## 18. Final Documentation Audit

### Confirmed Requirements Checklist
* [x] Next.js 15 App router frontend framework.
* [x] Prisma ORM and PostgreSQL relational database.
* [x] Better Auth secure admin session management.
* [x] Cloudinary asset delivery.
* [x] Resend email notifications.
* [x] Standard outlined Lucide icons with text labels.
* [x] Fixed bottom nav bar for mobile experience.
* [x] Left navigation rail for tablet experience.
* [x] Sticky top navigation bar for desktop experience.
* [x] Low-friction Strategy Call form requiring name and phone number.
* [x] Fully dynamic CMS with edit controls for all pages.

### Missing Requirements Checklist (Clarification Required)
* [ ] **Sender Email Domain:** The verified sender domain to register with Resend.
* [ ] **OAuth Requirements:** Whether social login options (Google/LinkedIn) are needed for admin access or if email/password is sufficient.
* [ ] **Database Host:** Target hosting provider (Vercel, Supabase, Neon) for PostgreSQL.
* [ ] **Backup Storage Location:** Destination bucket (S3, Cloudinary, local storage) for manual and automated database dumps.
* [ ] **Lead Alert Targets:** The specific admin email addresses that should receive email notifications when a new Strategy Call is submitted.
