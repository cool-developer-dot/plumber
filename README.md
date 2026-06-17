# FlowRight Plumbing

Premium plumbing services website built with Next.js 15+, TypeScript, Tailwind CSS, and Framer Motion.

## Quick start

Run all commands from the **repository root** (`plumber/`), not a subfolder.

```bash
cd plumber
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | Run ESLint               |

## Project structure

```
plumber/                          # Repository root (Next.js app lives here)
├── app/                          # Next.js App Router
│   ├── areas/[slug]/page.tsx     # Service area landing pages (15 cities)
│   ├── globals.css               # Global styles & Tailwind
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # React components
│   ├── ui/                       # Shared UI primitives
│   ├── AreaDetailPage.tsx        # Area detail layout
│   ├── ServiceAreasSection.tsx   # Homepage service areas grid
│   ├── SiteHeader.tsx            # Shared header for area pages
│   └── …                         # Homepage sections
├── lib/                          # Shared logic & data
│   └── service-areas.ts          # City data, maps URLs, SEO content
├── public/                       # Static assets
│   ├── image.png
│   └── services/                 # Service card images
├── package.json
├── next.config.ts
├── tsconfig.json
└── postcss.config.mjs
```

## Deployment

Connected to [Vercel](https://vercel.com). Pushes to `main` on GitHub trigger automatic deployments.

**Root directory for Vercel:** `.` (repository root)

## Service areas

Each city has a dedicated page at `/areas/[slug]`, for example:

- `/areas/mckinney-tx`
- `/areas/port-st-lucie-fl`
- `/areas/temecula-ca`
