# The Yenepoya World — Premium Institutional Website

A production-quality, Awwwards-level education website built as a modern
single-page React application. Inspired structurally by the reference design,
but completely re-imagined into a premium, luxury, international-education
visual language.

## Stack

- **React 18 + TypeScript**
- **Vite** (dev server + build)
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** (scroll reveals, parallax, carousels, magnetic buttons)
- **Lucide** (icons)

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `midnight` | `#0B1B33` | Primary — deep navy |
| `ivory` | `#F6F2EA` | Warm off-white backgrounds |
| `champagne` | `#C6A96B` | Muted gold accent |
| `charcoal` | `#22262C` | Body text |
| Serif | **Fraunces** | Editorial headlines |
| Sans | **Inter** | Nav, body, UI |

## Getting started

```bash
npm install
npm run dev        # http://localhost:5180
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  App.tsx                 # section composition
  data/site.ts            # all copy + image sources (single source of truth)
  lib/motion.ts           # shared Framer Motion variants
  components/
    Navbar, Hero, About, Stats, EducationHighlight,
    AcademicCards, Community, MissionVision, Discover,
    Testimonials, FAQ, ContactCTA, EnquiryForm, Footer
    ui/  Reveal, AnimatedCounter, MagneticButton, Cursor,
         ScrollProgress, Logo
```

## Notes

- All copy and imagery live in `src/data/site.ts` — edit there to rebrand.
- Photography is loaded from Unsplash; swap the IDs in `site.ts` for your own
  optimized assets before going live.
- Fully responsive (mobile → desktop), keyboard accessible, with
  `prefers-reduced-motion` support.
- The enquiry form is front-end only — wire `onSubmit` in
  `components/EnquiryForm.tsx` to your backend / email service.
