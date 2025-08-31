# OrbitKin Website

The official website for OrbitKin - an intelligent social matching system.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Components**: ShadCN/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Project Structure

```
website/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # ShadCN UI components
│   ├── Navigation.tsx # Site navigation
│   ├── Hero.tsx       # Hero section
│   ├── Features.tsx   # Features section
│   ├── HowItWorks.tsx # Process explanation
│   ├── FAQ.tsx        # Frequently asked questions
│   ├── CTA.tsx        # Call to action
│   └── Footer.tsx     # Site footer
├── lib/               # Utility functions
└── public/            # Static assets
```

## Key Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, modern interface with smooth animations
- **Performance**: Optimized for fast loading and SEO
- **Accessibility**: WCAG compliant
- **Dark Mode Ready**: Support for light/dark themes

## Color Palette

- **Primary (Purple)**: #7C5EFF
- **Accent (Gold)**: #FFD700
- **Info (Light Blue)**: #00BFFF

## Pages to Add

- `/docs` - Documentation
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/guide` - User Guide
- `/admin-guide` - Admin Guide
- `/api` - API Reference

## Deployment

The website can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting service

## Environment Variables

None required for the static website. For future API integration:

```env
NEXT_PUBLIC_API_URL=https://api.orbitkin.com
```

## License

© 2024 OrbitKin. All rights reserved.