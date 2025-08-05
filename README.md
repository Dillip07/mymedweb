# MediCare Plus Marketing Website

This is the marketing website for the MediCare Plus mobile application, built with Next.js 14 and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- ⚡ Fast loading with Next.js 14
- 🎯 SEO optimized
- 📊 App showcase and features
- 💬 User testimonials
- 📲 Download links for iOS and Android

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the website directory:
\`\`\`bash
cd website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
\`\`\`bash
npm run build
\`\`\`

The `out` folder contains the static files ready for deployment.

## Customization

### Content
- Edit `app/page.tsx` to modify the main content
- Update `app/layout.tsx` for metadata and SEO
- Modify testimonials, features, and stats in the main page component

### Styling
- Colors and themes are configured in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component styles use Tailwind CSS classes

### Images
- Add your app screenshots to the `public` folder
- Update image paths in the components
- Optimize images for web performance

## Structure

\`\`\`
website/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── components/
│   └── ui/              # Reusable UI components
├── lib/
│   └── utils.ts         # Utility functions
├── public/              # Static assets
└── package.json
\`\`\`

## SEO Features

- Meta tags for social sharing
- Open Graph tags
- Twitter Card support
- Structured data ready
- Sitemap generation
- Fast loading scores

## Performance

- Next.js 14 App Router
- Image optimization
- Code splitting
- Static generation
- Minimal JavaScript bundle

## License

This project is proprietary to MediCare Plus.
"# mymedweb" 
