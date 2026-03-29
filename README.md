# Vitrine — Premium One-Page Portfolio

A high-converting, minimalist commercial portfolio website for freelance web creators. Built with Next.js, React, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Personalize Your Content

All editable content lives in **`src/lib/content.ts`**. Update these values with your real information:

| Section | What to change |
|---------|----------------|
| **`siteConfig`** | Your name, email, positioning sentence, and portrait image URL |
| **`heroContent`** | Headline, subheadline, and CTA button labels |
| **`projects`** | Replace with your actual portfolio projects (image URLs, titles, links) |
| **`services`** | Your offer descriptions, inclusions, ideal clients |
| **`pricing`** | Your real pricing tiers and amounts |
| **`whyWorkWithMe`** | Your unique selling points |
| **`aboutContent`** | Your bio and positioning |
| **`contactContent`** | Final CTA copy |

### Portrait Image

Replace `portraitPlaceholder` with your photo:

- Use a high-quality image (min. 600×600px)
- Host it on your domain or a CDN
- For external URLs, add the domain to `next.config.js` → `images.remotePatterns`

### Project Links

Update each project's `url` field with the real URL to your live site or case study.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Framer Motion**
- **TypeScript**

## License

Private — for your personal use.
