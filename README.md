# Awaken Coaching Website

A professional coaching website built with Next.js 16, TypeScript, and Tailwind CSS. Optimized for deployment on Vercel.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Features

- Fully responsive design
- Dark mode support (system preference based)
- Smooth scrolling navigation
- Professional UI with CSS variables for theming
- Contact form for lead generation
- Optimized for Vercel deployment

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Deploying to Vercel

This site is optimized for Vercel deployment. You can deploy it with one click:

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure everything
4. Click **Deploy**

That's it! Vercel will handle:
- Automatic builds and deployments
- CDN distribution
- SSL certificates
- Edge caching
- Automatic HTTPS

### Environment Variables

No environment variables are required for this static site. However, if you want to add form submission functionality later, you can add:

```env
# Optional: For form submissions
NEXT_PUBLIC_CONTACT_API_URL=your-api-url
```

## Customization

### Branding

Update the following files to customize the site:

- **Title & Description**: [src/app/layout.tsx](src/app/layout.tsx)
- **Colors**: [src/app/globals.css](src/app/globals.css) - modify CSS variables
- **Content**: [src/app/page.tsx](src/app/page.tsx)

### Theme Colors

Edit the CSS variables in [globals.css](src/app/globals.css):

```css
:root {
  --accent: #2563eb;  /* Primary accent color */
  --primary: #1a1a1a; /* Primary text color */
  /* ... other variables */
}
```

## Project Structure

```
coaching-site/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & CSS variables
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── page.tsx          # Main landing page
│   └── lib/
│       └── utils.ts          # Utility functions (cn helper)
├── public/                   # Static assets
└── package.json
```

## License

© 2026 Awaken Coaching. All rights reserved.
