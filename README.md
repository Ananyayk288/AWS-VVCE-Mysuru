# AWS Student Community Day Mysuru 2026

Web application for the AWS Student Community Day Mysuru 2026 event, organized by AWS Student Builder Group VVCE & Vidyavardhaka College of Engineering (VVCE), Mysuru.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Register on Konfhub](https://konfhub.com/aws-student-community-day-mysuru-2026)

---

## 📌 Overview

AWS Student Community Day Mysuru 2026 is a community-led conference web application built for students, developers, and cloud enthusiasts.

The application is built using React 18, TypeScript, Tailwind CSS v4 (integrated via `@tailwindcss/vite`), and Vite. It provides sticky header navigation with active ScrollSpy section tracking, a digital badge generator, multi-track schedule management, ticket pricing displays, and responsive layouts.

---

## 🎯 Why This Project?

This platform provides a central digital experience for the AWS Student Community Day Mysuru 2026 event.

Key functional areas provided by the platform:
- **Event Discovery**: Main landing page with dynamic keyword highlights and key event details.
- **Speakers**: Confirmed speaker profiles alongside structured placeholder slots.
- **Tickets**: Ticket tiers, pricing, and registration links.
- **Workshops**: Technical workshop overview and hands-on session descriptions.
- **Schedule**: Multi-track agenda timeline page (`/schedule`).
- **Digital Badge**: Client-side canvas generator for attendee badges (`/badge`).
- **Team**: Organizing team showcase and placeholders (`/team`).
- **Venue**: Vidyavardhaka College of Engineering (VVCE) location information and Google Maps directions link.
- **FAQ**: Interactive, collapsible Q&A accordion.

---

## 📊 Platform Capabilities

| Experience | Description |
|---|---|
| Event Discovery | Hero, event information and highlights |
| Speakers | Confirmed speaker profiles and placeholders |
| Tickets | Event ticket tiers and registration links |
| Workshops | Workshop and session information |
| Schedule | Dedicated multi-track schedule |
| Digital Badge | Client-side personalized badge generation |
| Team | Organizing team presentation |
| Venue | VVCE venue and directions |
| FAQ | Expandable event questions |

---

## 📸 Visual Showcase

> [!NOTE]
> Screenshots of the application interface can be embedded below once captured.

- `[SCREENSHOT NEEDED: Homepage Hero Section with Animated Keyword Rotator]`
- `[SCREENSHOT NEEDED: Keynote & Confirmed Speakers Section]`
- `[SCREENSHOT NEEDED: Ticket Tiers & Registration Links]`
- `[SCREENSHOT NEEDED: Full Interactive Schedule Page (/schedule)]`
- `[SCREENSHOT NEEDED: Custom Digital Badge Generator (/badge)]`
- `[SCREENSHOT NEEDED: Team Cards Placeholder Grid (/team)]`

---

## 📐 Architecture

> [!NOTE]
> System architecture diagram placeholder.

`[DIAGRAM TO CREATE: Client-Side Component Hierarchy & State-Driven Navigation Flow]`

### Core Technical Architecture
- **State-Driven Client Routing**: Client-side view switching (`/`, `/schedule`, `/team`, `/badge`) utilizing HTML5 `pushState` navigation.
- **Tailwind CSS v4 Engine**: Configured natively through Vite plugin `@tailwindcss/vite` and standard CSS imports (`src/index.css`), without a `tailwind.config.js` file.
- **HTML5 Canvas Badge Renderer**: Generates customizable graphic badges client-side in `BadgePage.tsx` with dynamic canvas text placement and `canvas-confetti` integration.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React 18
- **Language**: TypeScript 5
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Effects**: `canvas-confetti`

---

## 📁 Repository Structure

```text
scd-site/
├── public/                     # Public static assets
│   ├── speakers/               # Speaker headshots
│   ├── venue/                  # Campus vector assets
│   ├── aws_user_group_logo.png
│   ├── hero-image.png
│   └── team-section-bg.svg
├── src/
│   ├── components/             # React UI components
│   │   ├── AboutSection.tsx
│   │   ├── AgendaSection.tsx
│   │   ├── BadgePage.tsx
│   │   ├── BadgeSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── Footer.tsx
│   │   ├── FooterCtaSection.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── NodeModal.tsx
│   │   ├── OrganizersSection.tsx
│   │   ├── RegisterSection.tsx
│   │   ├── RegistrationModal.tsx
│   │   ├── SchedulePage.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── SpeakersSection.tsx
│   │   ├── SponsorsSection.tsx
│   │   ├── TeamPage.tsx
│   │   ├── TeamSection.tsx
│   │   ├── TicketsSection.tsx
│   │   ├── WhyAttendSection.tsx
│   │   └── WorkshopsSection.tsx
│   ├── App.tsx                 # Main application view router
│   ├── custom.css
│   ├── index.css               # Global Tailwind CSS 4 configuration
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0 or higher recommended)
- npm

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Vite displays the local development URL in the terminal when the development server starts.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🏛️ Event & Organization Details

- **Event**: AWS Student Community Day Mysuru 2026
- **Organized By**: AWS Student Builder Group VVCE
- **Venue Location**: Vidyavardhaka College of Engineering (VVCE), Kannada Sahithya Parishath Road, III Stage, Gokulam, Mysuru, Karnataka - 570002
