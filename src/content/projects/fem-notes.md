---
title: FEM-Notes
description: A full-stack note-taking app with Google sign-in, per-user data, real-time search, and a keyboard-navigable, responsive UI.
tags: [Next.js, React, Postgres, Neon, Tailwind CSS, Radix UI, Vercel]
repoUrl: https://github.com/mattbegnoche/FEM-Note-taking-web-app
liveUrl: https://fem-note-taking-web-app.vercel.app/notes
date: 2026-07-01
featured: true
---

Originally scoped from a Frontend Mentor challenge and extended into a complete backend as a portfolio project. Notes lets a signed-in user create, edit, archive, tag, and search their own notes, with preferences (color theme, font theme) persisted per account. Every note and preference is scoped to the authenticated user and stored in Postgres — there's no mock data or local-only state once you're signed in.

### Features

- Google OAuth sign-in (Auth.js / NextAuth v5)
- Create, edit, delete, and archive notes
- Tag notes and browse by tag
- Global debounced search across title, tags, and content
- Per-user color theme and font theme, persisted to the database
- Fully responsive layout (mobile, tablet, desktop) with a distinct mobile shell
- Full keyboard navigation and visible focus states throughout
- Form validation with inline error messaging

Built to practice full-stack development and using AI to speed up the workflow.
