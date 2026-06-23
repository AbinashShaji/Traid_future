# 02_DESIGN_LANGUAGE_SYSTEM

# PART 06 — Implementation System, CMS Architecture, AI Workflow & Development Standards

**Version:** 1.0

---

# Purpose

This document defines how Triads Future must be implemented.

The goal is consistency.

Every developer.

Every AI.

Every future contributor.

Must build the website the same way.

The implementation should be understandable even by a beginner.

---

# Development Philosophy

Build for the next developer.

Not for yourself.

Code should explain itself.

Never write clever code.

Write obvious code.

Readable code lasts longer than smart code.

---

# Technology Stack

Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

Backend

- Next.js Route Handlers
- Server Actions

Database

- PostgreSQL

ORM

- Prisma

Authentication

- Better Auth (or NextAuth if required)

Storage

- Cloudinary (Preferred)

Alternative

- Supabase Storage

Deployment

- Vercel

---

# Project Structure

```

src/

app/

components/

features/

hooks/

lib/

services/

types/

constants/

styles/

utils/

providers/

contexts/

cms/

prisma/

public/

docs/

```

Every folder has one responsibility.

---

# Folder Philosophy

Never place unrelated files together.

If a folder becomes difficult to understand,

split it.

---

# Component Structure

Example

```

Hero/

Hero.tsx

Hero.types.ts

Hero.constants.ts

Hero.animation.ts

Hero.module.css

index.ts

README.md

```

Every component owns itself.

---

# Naming Rules

Components

PascalCase

Functions

camelCase

Hooks

useSomething()

Constants

UPPER_CASE

CSS Variables

kebab-case

Database

snake_case

---

# Code Philosophy

Readable.

Predictable.

Modular.

Reusable.

Commented.

Never optimize prematurely.

---

# Comments

Every exported function requires comments.

Example

```

/\*\*

- Creates a new Strategy Call booking.
-
- @param data Booking information
- @returns Created booking
  \*/

```

Never leave complex logic unexplained.

---

# State Management

Prefer

React State

↓

Context

↓

Server State

↓

External Library

Use the simplest solution.

---

# API Philosophy

Every feature owns its API.

Example

```

api/

contact/

work/

insights/

cms/

auth/

```

Never place everything inside one API file.

---

# Error Handling

Never expose technical errors.

Bad

500 Internal Server Error

Good

Something went wrong.

Please try again.

Log technical errors.

Show human messages.

---

# CMS Philosophy

The administrator should never edit code.

Everything that changes regularly belongs in the CMS.

---

# Editable Content

Navigation

Logo

Hero

Images

Buttons

Solutions

Projects

Insights

Testimonials

FAQs

Team

Footer

Contact

SEO

Open Graph

Business Information

Social Links

Everything editable.

---

# Editable Images

Every image supports

Desktop

Tablet

Mobile

Alt Text

Caption

Crop

Visibility

Replacement

Image Usage

Never hardcode images.

---

# Media Library

The CMS includes

Upload

Replace

Delete

Preview

Search

Filter

Folders

Usage Detection

Bulk Upload

Bulk Delete

Before deleting an image,

the CMS must display where the image is currently used.

---

# Page Builder

The administrator should be able to

Hide Sections

Reorder Sections

Duplicate Sections

Schedule Publishing

Without touching code.

---

# SEO

Every page contains

SEO Title

Meta Description

Slug

Open Graph

Twitter Image

Canonical URL

Schema

Everything editable.

---

# Accessibility

Every editable image

requires

Alt Text.

Every form

requires

Visible Labels.

Keyboard navigation

must always work.

---

# Performance

Every image

optimized automatically.

Every page

lazy loads where appropriate.

Every animation

GPU accelerated.

Never block rendering.

---

# AI Workflow

AI assists development.

AI never makes product decisions.

Documentation always wins.

---

# Antigravity Rules

Before writing code

Read all documentation.

Summarize understanding.

If documentation conflicts,

documentation wins.

If documentation is missing,

STOP.

Ask.

Never guess.

---

# Stitch Workflow

Purpose

Generate layouts.

Not final implementation.

Workflow

Read documentation

↓

Generate layout

↓

Compare with Design Language

↓

Revise

↓

Approve

↓

Development

Never accept the first generation without review.

---

# 21st.dev Workflow

Purpose

Generate reusable React components.

Workflow

Approved Design

↓

Generate Component

↓

Refactor

↓

Comment

↓

Accessibility Review

↓

Performance Review

↓

Project Integration

---

# UI Pro Workflow

Use only for

CMS

Dashboard

Tables

Forms

Settings

Media Library

Never use UI Pro to generate public-facing marketing pages.

---

# Beginner Friendly Rules

A first-year developer should understand

Folder Structure

Component Structure

Naming

Comments

Imports

State Flow

Every important file includes a README when necessary.

---

# Git Rules

One feature

↓

One branch

↓

One pull request

↓

One review

↓

Merge

Never mix unrelated changes.

---

# Testing

Before deployment verify

Desktop

Tablet

Mobile

Dark Mode (if implemented)

Keyboard Navigation

Performance

SEO

Accessibility

CMS Editing

Forms

Images

Navigation

Animations

---

# Acceptance Checklist

Before release

✓ Documentation followed

✓ Design matches Design System

✓ Motion matches Experience System

✓ Components reusable

✓ CMS editable

✓ Images optimized

✓ SEO configured

✓ Accessibility verified

✓ Performance optimized

✓ Code commented

✓ Folder structure maintained

✓ Beginner friendly

✓ No hardcoded content

---

# Final Principle

Triads Future should be easy to maintain.

Easy to extend.

Easy to understand.

Easy to hand over.

A developer joining the project two years later should understand the architecture within one day.

The website should not depend on the person who built it.

It should depend on the documentation.

---

## End of PART 06

**Next File**

`02_DESIGN_LANGUAGE_SYSTEM_FINAL.md`

This final document will merge Parts 01–06 into a single official Design Language System for the Triads Future repository.