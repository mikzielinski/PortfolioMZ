# Quick Deploy to GitHub Pages

## ✅ Already Done
- ✅ Git repository initialized
- ✅ Initial commit created
- ✅ GitHub Pages configuration added
- ✅ Deployment scripts ready

## 🚀 Next Steps

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you like)
3. Description: "Personal portfolio website"
4. Choose **Public**
5. **DO NOT** check "Add a README file" (we already have one)
6. Click "Create repository"

### 2. Connect and Push to GitHub

```bash
cd /Users/mikolajzielinski/PISim/PISim/portfolio

# Add your GitHub repository (replace mikzielinski with your GitHub username)
git remote add origin https://github.com/mikzielinski/portfolio.git

# Push to GitHub
git push -u origin main
```

### 3. Install Deployment Package

```bash
npm install --save-dev gh-pages
```

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

### 5. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/mikzielinski/portfolio`
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source":
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes, then visit: `https://mikzielinski.github.io/portfolio/`

## 📝 Important Note About Repository Name

The `vite.config.ts` is currently set to use `/portfolio/` as the base path.

**If your repository name is NOT "portfolio":**
- Update `vite.config.ts` line 7 to use your repository name
- Or if using `YOUR_USERNAME.github.io`, change base to `/`

**If your repository name IS "portfolio":**
- No changes needed! ✅

## 🔄 Updating Your Portfolio

After making changes:

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push

# Deploy updates
npm run deploy
```

## ✨ That's It!

Your portfolio will be live at:
`https://mikzielinski.github.io/portfolio/`

Remember to replace `mikzielinski` with your actual GitHub username!

