# Portfolio - Mikołaj Zieliński

Professional portfolio website showcasing expertise in AI, RPA, and Business Transformation.

## Features

- **Modern Design**: Clean, responsive layout with smooth animations
- **GitHub Integration**: Automatically fetches and displays repositories from GitHub
- **Articles Section**: Showcases LinkedIn articles and insights
- **Skills Showcase**: Highlights expertise in RPA, AI, and business transformation
- **Contact Section**: Easy ways to connect via GitHub, LinkedIn, and email

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Custom styling with modern features

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

Edit the following files to customize your information:

- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section content
- `src/components/Contact.tsx` - Contact information (update email)
- `src/App.tsx` - GitHub username and LinkedIn articles

### GitHub Integration

The portfolio automatically fetches repositories from GitHub using the GitHub API. Update the username in `src/App.tsx`:

```typescript
const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=100')
```

### LinkedIn Articles

Since LinkedIn API requires authentication, articles are manually curated in `src/App.tsx`. Update the `articles` array with your latest articles:

```typescript
const articles: Article[] = [
  {
    id: '1',
    title: 'Your Article Title',
    date: 'Dec 27, 2025',
    excerpt: 'Article excerpt...',
    url: 'https://www.linkedin.com/in/yourprofile/recent-activity/articles/',
  },
  // Add more articles...
]
```

## Deployment

### GitHub Pages

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

## License

This project is open source and available under the MIT License.

## Contact

- **GitHub**: [@mikzielinski](https://github.com/mikzielinski)
- **LinkedIn**: [Mikołaj Zieliński](https://www.linkedin.com/in/mikzielinski/)
