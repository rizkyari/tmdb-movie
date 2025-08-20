# TMDB Catalog

This project is a frontend job board built with Vue 3 + Vite + TypeScript + Pinia + Tailwind v4.
It consumes the public API from TMDB and demonstrates reusable UI design, state management, i18n, and deployment to Vercel.

---

## Getting Started

### Prerequisites
- Node.js ≥ 18
- pnpm / npm / yarn

### Installation
```bash
npm install
npm run dev
```

### Environment Variables
```bash
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE=https://image.tmdb.org/t/p
VITE_TMDB_API_KEY= <<check https://www.themoviedb.org/settings/api>>
VITE_TMDB_TOKEN= <<check https://www.themoviedb.org/settings/api>>
```

---

## Features

- **Pages**
  - Movies -> **Popular**, **Upcoming**
  - TV Series -> **Popular**, **Top Rated**
  - Watchlist 
- **Search per page**  
  Reusable `<SearchBar />` (Tailwind) injected at the top of each page. When searching, pagination navigates through search results; clearing returns to the default list.
- **Watchlist (Wishlist)**
  - Toggle from cards; persists to `localStorage`.
  - Works for Movie & TV (tagged by type).
- **UI/UX**
  - Responsive **Navbar** (with burger menu) and **Footer**
  - Card components: `MovieCard` & `TVCard`
  - Loading skeletons, basic error states
  - Keyboard accessible controls & proper aria attributes
- **Tooling**
  - TypeScript types for TMDB responses (`Movie`, `TV`, `PagedResponse`, etc.)
  - Git-friendly structure, ready for Vercel/Netlify deployment
- **Icons**
  - Font Awesome CSS (`fa-bars`, `fa-star`, etc.)

---
##  Tech Stack

- **Framework**: Vue 3 + Vite
- **Lang**: TypeScript
- **State**: Pinia
- **UI**: Tailwind CSS
- **HTTP**: Axios (service instance + typed responses)
- **Icons**: `@fortawesome/fontawesome-free` (CSS)

---
## Author

Developed by Rizky Ari

[Linkedin](https://www.linkedin.com/in/rizkyarihar/) | [GitHub](https://github.com/rizkyari)