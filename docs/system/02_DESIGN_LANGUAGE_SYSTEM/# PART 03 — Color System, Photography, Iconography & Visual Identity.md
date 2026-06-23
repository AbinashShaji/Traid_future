# 02_DESIGN_LANGUAGE_SYSTEM

# PART 03 — Color System, Photography, Iconography & Visual Identity

**Version:** 1.0

---

# Purpose

This document defines how Triads Future should communicate visually without relying on decoration.

Color, photography, icons and imagery exist to support the business story—not to become the story.

Every visual element must strengthen trust.

---

# Color Philosophy

Color should be intentional.

The interface should remain calm.

Photography should become the primary source of visual richness.

The interface should never compete with photography.

---

# Emotional Direction

The interface should feel

- Calm
- Clean
- Modern
- Premium
- Professional
- Honest

Never

- Loud
- Flashy
- Trendy
- Neon
- Gaming inspired
- Artificial

---

# Color Palette

## Primary Background

Warm Off White

```
#FAF9F6
```

Used throughout the entire website.

Never replace with pure white.

---

## Primary Text

```
#111111
```

Readable.

Soft.

Professional.

---

## Secondary Text

```
#5F5F5F
```

Supporting information only.

Never reduce readability.

---

## Borders

```
#E8E8E8
```

Borders organise content.

They never decorate it.

---

## Accent Philosophy

Triads Future has no permanent accent colour.

Photography provides colour.

Client work provides personality.

The interface remains neutral.

---

# Background Rules

Use one background across the public website.

Avoid changing background colours between sections.

Different sections should be separated using

- spacing
- typography
- imagery

Not colour blocks.

---

# Surface Design

Cards should not feel like floating objects.

Avoid deep shadows.

Avoid glowing surfaces.

Use spacing before elevation.

---

# Border Radius

Rounded enough to feel modern.

Never exaggerated.

Every component shares the same corner language.

Consistency is more important than style.

---

# Shadows

Use shadows only when absolutely necessary.

Purpose

Separate layers.

Not decoration.

Avoid

- Heavy blur
- Floating cards
- Glow effects
- Multiple layered shadows

---

# Photography Philosophy

Photography creates emotion.

Typography creates understanding.

Photography should always feel authentic.

---

# Photography Rules

Use

- Real businesses
- Real people
- Real products
- Real offices
- Real projects

Never use

- Generic stock photography
- AI generated people
- Fake offices
- Business handshakes
- People pointing at laptops
- Teams laughing at empty screens

Visitors recognise fake imagery immediately.

---

# Photography Style

Images should feel

Documentary

Editorial

Natural

Confident

Minimal

Timeless

---

# Image Composition

Avoid perfectly centred compositions.

Allow breathing room.

Use negative space.

Let typography and imagery work together.

---

# Image Quality

Every uploaded image must be

- High resolution
- Properly compressed
- Responsive
- Sharp
- Professionally cropped

Never stretch images.

Never distort aspect ratios.

---

# Responsive Images

Every important image supports

Desktop

Tablet

Mobile

Each version may have different crops.

Never rely on automatic cropping.

---

# CMS Requirement

Every image is editable from the Admin Panel.

Never import editable images directly into React components.

All images should come from the CMS.

Editable items include

- Hero
- About
- Work
- Testimonials
- Team
- Insights
- CTA
- Footer
- Open Graph
- Logo
- Favicon

---

# Image Optimisation

Automatically generate

- Original
- Desktop
- Tablet
- Mobile
- Thumbnail
- WebP
- AVIF

Serve the smallest suitable image.

---

# Image Animation

Images behave differently from text.

Text

Rise

+

Fade

Images

102%

↓

100%

↓

Fade

500ms

This creates subtle physical movement.

---

# Hover Behaviour

Desktop

Image slightly darkens.

Caption fades in.

Nothing else.

Avoid

- Rotation
- Tilt
- Large zoom
- Glow
- Floating effects

---

# Tablet Behaviour

Touch reveals supporting information.

No hover simulation.

---

# Mobile Behaviour

Tap opens the project naturally.

Images should feel like app content.

Not website galleries.

---

# Icon Philosophy

Icons support understanding.

Icons never replace language.

If removing an icon does not reduce clarity,

remove the icon.

---

# Icon Family

Use one icon library throughout the project.

Preferred

Lucide

Alternatives

- Tabler
- Phosphor

Never mix icon libraries.

---

# Icon Style

Outlined

Monochrome

Consistent stroke width

Simple geometry

Readable at small sizes

---

# Navigation Icons

Icons must communicate meaning.

Examples

Home

House

Solutions

LayoutGrid

Work

BriefcaseBusiness

Insights

BookOpen

Book Strategy Call

Calendar

Never choose icons because they look interesting.

Choose icons because they communicate.

---

# Social Icons

Monochrome.

No official brand colours.

Hover follows the same interaction language as links.

---

# Illustration Philosophy

Illustrations should rarely be used.

Photography is preferred.

If an illustration is necessary,

it should follow the same calm design language.

Avoid

- Cartoon style
- 3D characters
- AI illustrations
- Abstract blobs

---

# Logo Usage

The logo represents the brand.

Never distort.

Never stretch.

Never animate continuously.

Respect clear space around the logo.

Provide

Desktop Logo

Tablet Logo

Mobile Logo

Dark Version

Light Version

Favicon

SVG Master

All editable through the CMS where applicable.

---

# Visual Identity Checklist

Before approving a page ask

✓ Is photography authentic?

✓ Is the interface calmer than the photography?

✓ Is every icon meaningful?

✓ Does colour support rather than distract?

✓ Are images editable through the CMS?

✓ Does the page remain beautiful even if colours are removed?

If any answer is "No",

redesign the section.

---

**End of PART 03**