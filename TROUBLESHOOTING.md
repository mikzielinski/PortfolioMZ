# Troubleshooting GitHub Pages 404 Error

## ✅ Verified Deployment

The gh-pages branch is correctly deployed with:
- ✅ `index.html` in root
- ✅ `assets/` folder with JS and CSS files
- ✅ Correct base path `/PortfolioMZ/` in all references

## 🔍 Common Issues and Solutions

### 1. GitHub Pages Not Enabled

**Check:** Go to https://github.com/mikzielinski/PortfolioMZ/settings/pages

**Solution:**
- Source: Select `gh-pages` branch
- Folder: Select `/ (root)`
- Click **Save**
- Wait 2-5 minutes for GitHub to build

### 2. Wait Time

GitHub Pages can take **5-10 minutes** to update after:
- First deployment
- Enabling Pages
- New commits to gh-pages branch

### 3. Clear Browser Cache

Try:
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Or open in incognito/private mode
- Or clear browser cache

### 4. Check Repository Name Case

Make sure the repository name matches exactly:
- Repository: `PortfolioMZ` (capital M and Z)
- Base path in vite.config.ts: `/PortfolioMZ/`

### 5. Verify gh-pages Branch

Check that the branch exists:
```bash
git ls-remote --heads origin gh-pages
```

Should show: `refs/heads/gh-pages`

### 6. Direct File Access Test

Try accessing files directly:
- https://mikzielinski.github.io/PortfolioMZ/index.html
- https://mikzielinski.github.io/PortfolioMZ/assets/index-CJoLRcUi.js

If these work but the main page doesn't, it's a routing issue.

## 🚀 Redeploy (if needed)

If you need to redeploy:

```bash
cd /Users/mikolajzielinski/PISim/PISim/portfolio

# Build
./node_modules/.bin/vite build

# Deploy
./node_modules/.bin/gh-pages -d dist
```

## 📞 Still Having Issues?

1. Check GitHub Pages build status: https://github.com/mikzielinski/PortfolioMZ/actions
2. Verify repository is **Public** (required for free GitHub Pages)
3. Check browser console for specific 404 errors
4. Wait 10-15 minutes and try again

