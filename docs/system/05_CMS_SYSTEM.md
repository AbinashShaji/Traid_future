# 05_CMS_SYSTEM.md

**Version:** 1.0

**Status:** Final

---

# Purpose

This document defines the complete Content Management System (CMS) architecture for the Triads Future website.

The CMS must allow the administrator to manage the website without modifying code.

Everything that changes regularly should be editable from the Admin Panel.

The developer should never need to update source code for normal business operations.

---

# CMS Philosophy

The CMS is the control center of the website.

It should be

- Simple
- Fast
- Beginner Friendly
- Secure
- Modular
- Scalable

The administrator should always know

- What they are editing
- Where it appears
- When it was last updated

---

# CMS Design Principles

Every editable item must have

Title

↓

Description

↓

Status

↓

Last Updated

↓

Actions

Never make the administrator guess.

---

# Authentication

Admin Login

Email

Password

Optional MFA

Remember Me

Forgot Password

Session Management

Logout

---

# User Roles

## Super Admin

Full control.

Everything.

---

## Admin

Can edit content.

Cannot manage system settings.

---

## Editor

Can edit pages.

Cannot publish.

Cannot delete.

---

## Viewer

Read only.

---

# Dashboard

Dashboard should immediately answer

Website Status

↓

Recent Activity

↓

Pending Drafts

↓

Latest Leads

↓

Traffic Overview

↓

Quick Actions

---

# Navigation

Dashboard

Pages

Work

Solutions

Insights

Testimonials

FAQs

Media Library

Forms

Users

SEO

Settings

Profile

---

# Page Manager

Administrator should be able to

Create

Edit

Duplicate

Delete

Preview

Publish

Schedule

Hide

Restore

Reorder

Every page should have

SEO

Open Graph

Visibility

Slug

Status

---

# Hero Manager

Editable

Headline

Description

Primary CTA

Secondary CTA

Image

Background Image

Video (optional)

Visibility

SEO

---

# Work Manager

Unlimited projects.

Each project contains

Title

Industry

Client

Description

Challenge

Solution

Result

Technologies

Images

Gallery

Thumbnail

Featured Image

Category

Tags

Status

Publish Date

SEO

---

# Solutions Manager

Each solution contains

Title

Description

Image

CTA

Display Order

Visibility

Everything editable.

---

# Insights Manager

Blog System

Each article contains

Title

Slug

Content

Summary

Cover Image

Author

Category

Tags

Publish Date

Featured

SEO

Open Graph

---

# Testimonial Manager

Each testimonial contains

Client Name

Company

Position

Photo

Review

Rating

Visibility

Featured

Sort Order

---

# FAQ Manager

Question

Answer

Category

Display Order

Visibility

---

# Team Manager

Name

Position

Biography

Photo

LinkedIn

Email

Display Order

Visibility

---

# Contact Information

Company Name

Address

Phone

Email

Working Hours

Google Maps

Social Links

Everything editable.

---

# CTA Manager

Every CTA is editable.

Examples

Book Strategy Call

Contact Us

Let's Talk

Start Your Project

Never hardcode CTA text.

---

# Navigation Manager

Administrator should be able to

Rename

Hide

Reorder

Add

Remove

Navigation items.

Desktop

Tablet

Mobile navigation can have different structures.

---

# Footer Manager

Editable

Company Information

Navigation

Contact

Social Links

Copyright

Legal Links

CTA

---

# Media Library

Supports

Upload

Replace

Delete

Rename

Search

Filter

Folders

Bulk Upload

Bulk Delete

Preview

---

# Image Management

Every image stores

Desktop Version

Tablet Version

Mobile Version

Thumbnail

Alt Text

Caption

Copyright

Upload Date

Usage

---

# Image Rules

Before deleting an image

The CMS must display

Where the image is currently used.

Never allow accidental deletion.

---

# SEO Manager

Every page supports

SEO Title

Meta Description

Slug

Canonical URL

Keywords

Schema

Open Graph Image

Twitter Card

Indexing

Everything editable.

---

# Form Manager

Strategy Call

Contact Form

Newsletter

Custom Forms

Administrator can

View

Reply

Archive

Delete

Export CSV

---

# Leads Manager

Every lead stores

Name

Phone

Email

Business

Message

Date

Status

Notes

Assigned To

Export

---

# Analytics Dashboard

Display

Visitors

Conversions

Strategy Calls

Most Viewed Pages

Top Projects

Popular Articles

Traffic Sources

Device Statistics

---

# Settings

Brand Name

Logo

Favicon

Theme

Email Settings

Analytics

Integrations

API Keys

Backups

Maintenance Mode

---

# Backup System

Automatic Daily Backup

Manual Backup

Restore

Download

History

---

# Activity Log

Track

Login

Logout

Content Changes

Image Uploads

Publishing

Deletion

User Management

Everything logged.

---

# Search

Global Search

Pages

Projects

Articles

Testimonials

Media

Users

FAQs

Everything searchable.

---

# Notifications

Administrator receives notifications for

New Lead

Form Submission

Publishing Error

Backup Complete

System Update

---

# Security

Rate Limiting

CSRF Protection

Authentication

Authorization

Secure Cookies

Input Validation

File Validation

Audit Logs

---

# Performance

Lazy Load Images

Pagination

Search Index

Image Optimization

Caching

---

# API Structure

/api/cms/pages

/api/cms/work

/api/cms/solutions

/api/cms/articles

/api/cms/media

/api/cms/forms

/api/cms/users

/api/cms/settings

Every feature owns its own API.

---

# Database Principles

No duplicated data.

Relationships normalized.

Images stored separately.

Everything references IDs.

---

# Accessibility

Keyboard Navigation

Visible Focus

Readable Tables

Large Click Areas

Screen Reader Support

Accessible Forms

---

# Beginner Friendly Rules

Simple navigation.

Clear naming.

No technical jargon.

Every screen explains itself.

Every button clearly states its purpose.

---

# Acceptance Checklist

Before launch verify

✓ Every page editable

✓ Every image editable

✓ Every CTA editable

✓ Every menu editable

✓ Every form manageable

✓ Media Library working

✓ SEO editable

✓ User Roles working

✓ Backup working

✓ Activity Logs working

✓ Search working

✓ Responsive on Desktop

✓ Responsive on Tablet

✓ Responsive on Mobile

---

# Final Principle

The administrator should never need a developer to update normal website content.

The CMS should make managing the website as simple as editing a document.

---

**End of Document**