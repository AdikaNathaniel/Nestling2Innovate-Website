```
```

# Nestling 2Innovate (N2I)

The official website for **Nestling 2Innovate (N2I)**, the flagship initiative of the **Baiden Etsiakoh Eagle Vision Foundation (BEEVIF)** — a Ghana-registered charitable foundation based in Tantra Hills, Accra. N2I delivers STEM, digital skills, and AI education to school-age children and out-of-school youth in under-resourced communities.

## Tech Stack

- **React 18** — UI library
- **React Router 6** — client-side routing
- **Vite 5** — dev server and build tool
- Plain CSS (no framework) — see `src/styles.css`

No backend/CMS — content lives directly in the page components.

## Getting Started

Requires [Node.js](https://nodejs.org) 18+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
Nestling 2Innovate/
├── public/
│   ├── images/        # Photography used across the site
│   ├── team/           # Real team headshots (e.g. Samuel Etsiakoh)
│   └── logo.png         # BEEVIF logo
├── src/
│   ├── components/     # Header, Footer, Reveal, HeroSlideshow, Marquee, ScrollToTopButton, StatNumber
│   ├── hooks/           # useReveal (scroll-triggered animation), useCountUp (stat count-up)
│   ├── pages/            # Home, About, Programs, GetInvolved, Impact
│   ├── App.jsx            # Routes + layout shell
│   ├── main.jsx            # App entry point
│   └── styles.css           # Global stylesheet (cyan-blue & white palette)
├── index.html
├── vite.config.js
└── package.json
```

## Pages & Navigation

Five top-level tabs, each with a dropdown of sub-sections (anchored via `#hash` links):

| Tab          | Sub-sections                                                                                       |
| ------------ | -------------------------------------------------------------------------------------------------- |
| Home         | —                                                                                                 |
| About        | Our Story, Our Team, Mission & Vision                                                              |
| Programs     | Web Design, Global Virtual Internships, Programming, AI Literacy, Community STEM Innovation Centre |
| Get Involved | Apply/Enrol, Volunteer & Mentor, Partner With Us, Donate                                           |
| Impact       | Our Impact, Success Stories, News & Updates                                                        |

**Donate** and **Contact** are persistent header actions, always visible outside the dropdown structure.

## Content To Finalize Before Launch

A few placeholders still need real information from the BEEVIF team:

- **Contact details** — email and phone number (currently `[Email address — add here]` / `[Phone number — add here]` in the footer)
- **Donation method** — bank transfer / mobile money details (Donate section currently points visitors to email instead)
- **Team photos** — two placeholder team member cards on the About page still need real names, roles, and photos
- **Social media links** — Facebook, Instagram, LinkedIn, X icons in the footer currently link to `#`
- **Community STEM Innovation Centre imagery** — using a generic lab stock photo since the real facility doesn't exist yet; swap once construction/renovation begins

## Design Notes

- **Palette:** cyan blue (`#0097b2` / `#00b4d8`) and white, per the approved product spec (see `docs/N2I-Product-Specification.pdf`)
- **Imagery:** sourced from Pexels (free, commercial-use license), curated to represent the Black/African communities N2I serves
- **Animation:** hand-rolled with native `IntersectionObserver` (scroll reveals) and CSS `@keyframes` (hero slideshow, marquee) — no animation library dependency

## Deployment

This is a static Vite build — `npm run build` outputs a deployable `dist/` folder that works on any static host (Netlify, Vercel, GitHub Pages, etc.). No environment variables or server-side configuration required.
