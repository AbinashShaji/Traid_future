# 04_COMPONENT_SYSTEM.md

**Version:** 1.0

**Status:** Final

---

# Purpose

This document defines every reusable component used throughout the Triads Future website.

The purpose of this document is consistency.

Every component should feel like it belongs to one carefully designed product.

Every page should reuse these components.

Never redesign the same component twice.

---

# Component Philosophy

Components are building blocks.

Not decorations.

Every component must

• Solve one problem

• Be reusable

• Be editable from the CMS

• Support Desktop

• Support Tablet

• Support Mobile

• Follow the Design Language

• Follow the Experience Language

---

# Universal Rules

Every component must have

Purpose

↓

Desktop Version

↓

Tablet Version

↓

Mobile Version

↓

Animation

↓

CMS Fields

↓

Accessibility

↓

Developer Notes

↓

Acceptance Checklist

Every component follows exactly this structure.

---

# Header

## Purpose

Provide orientation.

Help visitors move around the website.

Remain familiar.

Never distract.

---

## Desktop

Horizontal Navigation

Logo

↓

Navigation

↓

Book Strategy Call

Sticky

Transparent at top.

Solid after scrolling.

---

## Tablet

Left Navigation Rail

Always visible.

Icons

+

Labels

Touch friendly.

---

## Mobile

Top App Bar

+

Bottom Navigation

Bottom Navigation remains visible.

Icons always include labels.

Never use a hamburger menu as the primary navigation.

---

## Behaviour

Navigation never jumps.

Never disappears unexpectedly.

Current page is clearly highlighted.

---

## CMS

Editable

Logo

Navigation Items

CTA

Visibility

Order

---

# Hero

## Purpose

Explain the business in less than 10 seconds.

---

## Contains

Headline

Supporting Text

Primary CTA

Secondary CTA (optional)

Supporting Image

---

## Desktop

Large typography.

Large whitespace.

Editorial layout.

---

## Tablet

Reduced height.

Larger touch targets.

---

## Mobile

Shorter content.

One primary action.

Minimal scrolling.

---

## CMS

Headline

Description

Buttons

Image

Background

SEO

---

# Solutions

## Purpose

Explain how Triads Future helps businesses.

Not what services are offered.

Focus on outcomes.

---

## Layout

Each solution occupies its own section.

Never use identical cards.

Each solution includes

Headline

Description

Supporting Image

Talk to Us Link

---

## CMS

Unlimited solutions.

Reorder.

Hide.

Publish.

---

# Work

## Purpose

Build trust.

Real work is stronger than promises.

---

## Every Project

Cover Image

Gallery

Industry

Summary

Challenge

Solution

Result

Technology

CTA

---

## Desktop

Editorial showcase.

---

## Tablet

Touch gallery.

---

## Mobile

App style scrolling.

---

## CMS

Unlimited projects.

Multiple images.

Categories.

Featured projects.

SEO.

---

# Insights

## Purpose

Share knowledge.

Demonstrate expertise.

Improve SEO.

---

## Every Article

Cover Image

Title

Summary

Content

Author

Publish Date

Category

Tags

Reading Time

SEO

---

## CMS

Rich Text Editor

Image Upload

Draft

Schedule

Categories

---

# Testimonials

## Purpose

Build credibility.

---

Each testimonial includes

Photo

Client Name

Company

Role

Review

Rating (optional)

---

## CMS

Unlimited testimonials.

Featured.

Hide.

Sort.

---

# Statistics

## Purpose

Quick trust.

Examples

Projects

Clients

Years

Countries

Everything editable.

---

# About

## Purpose

Explain the company.

Not individual developers.

Explain

Mission

Vision

Values

Approach

Why Us

---

## CMS

Everything editable.

---

# FAQ

## Purpose

Answer objections.

Reduce hesitation.

---

Each FAQ

Question

Answer

Category

Display Order

---

# Strategy Call

## Purpose

Highest priority conversion.

---

Fields

Name

Phone Number

Optional

Email

Business Name

Message

---

## Behaviour

Simple.

Fast.

No unnecessary fields.

---

# Contact

## Contains

Business Information

Email

Phone

Location

Google Map (optional)

Business Hours

Social Links

---

# Footer

## Purpose

Finish the conversation.

Not finish the website.

Contains

CTA

Navigation

Business Information

Social Links

Copyright

Privacy

Terms

Everything editable.

---

# Buttons

## Primary

Solid.

High contrast.

Comfortable padding.

---

## Secondary

Outline.

Minimal.

---

## Text Button

Underline interaction.

Used inside content.

---

Never use

Glow

Pulse

Bounce

Neon

---

# Forms

Visible labels.

Accessible.

Helpful errors.

Touch friendly.

Keyboard friendly.

---

# Cards

Cards are containers.

Not decorations.

Avoid excessive shadows.

Avoid nested cards.

---

# Images

Every image supports

Desktop

Tablet

Mobile

Alt Text

Caption

Crop

Lazy Loading

CMS Editing

---

# Icons

One icon library only.

Preferred

Lucide

Icons always communicate meaning.

Never decoration.

---

# Modals

Only when necessary.

Never interrupt visitors.

Never show promotional popups.

---

# Notifications

Simple.

Short.

Human.

Example

"Thanks. We'll contact you shortly."

Never

"ERROR 500"

---

# Empty States

Always explain

Why the screen is empty.

What to do next.

Never leave blank pages.

---

# Loading States

Prefer

Skeleton

↓

Fade

↓

Ready

Never spinning loaders.

---

# CMS Rules

Every component must declare

Editable Text

Editable Images

Editable CTA

Visibility

Order

SEO

Nothing should require code changes.

---

# Developer Rules

Each component lives inside its own folder.

Example

/components

/Header

/Hero

/Work

/Solutions

/Footer

Every folder contains

Component

Styles

Types

Constants

README

---

# Acceptance Checklist

Before approving any component

✓ CMS editable

✓ Accessible

✓ Responsive

✓ Desktop version complete

✓ Tablet version complete

✓ Mobile version complete

✓ Beginner-friendly code

✓ Fully commented

✓ Matches Design Language

✓ Matches Experience Language

---

# Final Principle

A visitor should never notice individual components.

They should experience one continuous, carefully crafted product.

---

**End of Document**