# FitTrack Fitness Club (React + Vite)

Migration of the static FitTrack HTML/Bootstrap site to React, extended with a member
management feature for the assignment "Bab 6 React Dasar".

## Run locally
```bash
npm install
npm run dev      # development server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Structure
```text
src/
├── App.jsx              # routes + members state (useState) and handlers
├── main.jsx             # entry: Bootstrap CSS, site CSS, BrowserRouter
├── components/          # Header, Footer, PageBanner, PlanCard, FaqList, ScrollToTop,
│                        # SummaryCards, MemberForm, MemberList, MemberCard
├── pages/               # Home, About, Facilities, Membership, Contact, Members
├── data/                # plans.js, members.js (sample Member data)
├── styles/              # style.css, responsive.css (original), members.css (new)
└── assets/images/       # original images + logo.png (index.js exports them)
```

## Member entity
`{ id, name, membershipPlan, startDate, status }`. The list is held in React state in
`App.jsx` only. There is no backend, so data resets on page reload.

## Notes on the migration
- `logo.png` was referenced by every original page but missing from the archive; it is
  cropped from `logo-source.jpg` (the wordmark area only).
- `about.html` had a stray `>` after the training-philosophy image; it is not carried over.
- Bootstrap 5.3.3 CSS is now an npm dependency instead of a CDN link. Barlow Condensed
  is still loaded from Google Fonts (Arial fallbacks apply offline).
- Added dependencies: `react-router-dom` (page navigation) and `bootstrap`.

---

Dikembangkan untuk tugas mata kuliah Pemrograman Web — Bab 6 React Dasar.