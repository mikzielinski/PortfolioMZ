# GitHub Setup Guide

Follow these steps to host your portfolio on GitHub:

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right, then "New repository"
3. Repository name: `portfolio` (or any name you prefer)
4. Description: "Personal portfolio website - AI and Automation Lead"
5. Choose **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Initialize and Push to GitHub

Open your terminal in the portfolio directory and run:

```bash
cd portfolio

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Install GitHub Pages Deployment Package

```bash
npm install --save-dev gh-pages
```

## Step 4: Deploy to GitHub Pages

### Option A: Deploy using npm script (Recommended)

```bash
npm run deploy
```

This will:
1. Build your portfolio
2. Deploy it to the `gh-pages` branch
3. Make it available at: `https://YOUR_USERNAME.github.io/portfolio/`

### Option B: Configure for custom domain or root path

If you want to deploy to the root of your GitHub Pages (e.g., `https://YOUR_USERNAME.github.io/`):

1. Update `vite.config.ts` to use `base: '/'` instead of `base: '/portfolio/'`
2. In GitHub repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`
   - Click Save

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

## Updating Your Portfolio

After making changes:

```bash
# Make your changes to the code

# Add and commit changes
git add .
git commit -m "Update portfolio content"

# Push to main branch
git push

# Deploy to GitHub Pages
npm run deploy
```

## Custom Domain (Optional)

If you have a custom domain:

1. In repository Settings → Pages, add your custom domain
2. Create a `CNAME` file in the `public` folder with your domain name
3. Configure DNS settings with your domain provider
4. Rebuild and redeploy: `npm run deploy`

## Troubleshooting

**Build fails?**
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`

**Page not updating?**
- Wait a few minutes after deployment (GitHub Pages can take 1-5 minutes)
- Check the Actions tab in GitHub for deployment status
- Clear your browser cache

**404 error?**
- Make sure the `base` path in `vite.config.ts` matches your repository name
- If repository is `portfolio`, base should be `/portfolio/`
- If repository is `YOUR_USERNAME.github.io`, base should be `/`

## Quick Reference

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Git workflow
git add .
git commit -m "Your commit message"
git push
```

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code to GitHub
3. ✅ Install gh-pages: `npm install --save-dev gh-pages`
4. ✅ Deploy: `npm run deploy`
5. ✅ Enable GitHub Pages in repository settings
6. ✅ Share your portfolio URL!

