# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


elodi-nigeria/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero-bg.jpg        # Hero section background
│   │   │   ├── portfolio1.jpg     # Placeholder portfolio images
│   │   │   ├── portfolio2.jpg
│   │   │   └── team-photo.jpg
│   │   └── icons/
│   │       ├── web-dev.svg        # Service icons (Feather Icons or similar)
│   │       ├── ict.svg
│   │       ├── research.svg
│   │       └── proposal.svg
│   ├── components/
│   │   ├── Header.jsx             # Sticky navigation bar
│   │   ├── Hero.jsx               # Hero banner with CTAs
│   │   ├── ServiceCard.jsx        # Reusable service card
│   │   ├── TestimonialSlider.jsx  # Client testimonial slider
│   │   ├── QuoteModal.jsx         # Quote request modal
│   │   └── Footer.jsx             # Footer with quick links
│   ├── pages/
│   │   └── Home.jsx               # Homepage
│   ├── styles/
│   │   └── index.css              # Minimal custom styles
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # Entry point
├── index.html                     # Vite HTML entry
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies
└── README.md                      # Documentation