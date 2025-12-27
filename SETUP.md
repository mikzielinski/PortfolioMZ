# Quick Setup Guide

## Initial Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Customization Checklist

Before deploying, make sure to customize:

- [ ] **Email address** in `src/components/Contact.tsx` (line 38)
- [ ] **Personal information** in `src/components/About.tsx`
- [ ] **Articles** in `src/App.tsx` (update the articles array with your latest LinkedIn articles)
- [ ] **Skills** in `src/components/Skills.tsx` (if you want to add/remove skills)
- [ ] **Meta tags** in `index.html` for SEO

## GitHub Integration

The portfolio automatically fetches your GitHub repositories. Make sure:
- Your GitHub username is correctly set in `src/App.tsx` (line with `mikzielinski`)
- Your repositories are public (if you want them displayed)

## Deployment Options

### GitHub Pages (Free)
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
npm run deploy
```

### Vercel (Recommended - Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify (Free)
1. Run: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

## Next Steps

1. Customize content to match your personal brand
2. Add your actual email address
3. Update LinkedIn articles list
4. Deploy to your preferred platform
5. Share your portfolio!

## Troubleshooting

**Port not available?**
- Vite will automatically use the next available port
- Check the terminal output for the correct URL

**GitHub repos not loading?**
- Check your internet connection
- Verify the GitHub username in `src/App.tsx`
- Check browser console for errors

**Build errors?**
- Make sure all dependencies are installed: `npm install`
- Clear node_modules and reinstall if needed
