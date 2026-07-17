# GitHub Actions Quick Start Guide

Get your automated CI/CD pipeline running in 5 minutes.

## 1️⃣ Add Render Secrets (2 minutes)

**Step 1: Get Render Deploy Key**
- Go to https://dashboard.render.com
- Click your FinTrack Cloud service
- Settings → API Key
- Copy the Deploy Hook URL

**Step 2: Extract Credentials**
From URL: `https://api.render.com/deploy/srv-ABC123?key=XYZ789`
- `SERVICE_ID` = `ABC123`
- `DEPLOY_KEY` = `XYZ789`

**Step 3: Add GitHub Secrets**
1. Go to GitHub repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add:
   - Name: `RENDER_DEPLOY_KEY` → Value: `XYZ789`
   - Name: `RENDER_SERVICE_ID` → Value: `ABC123`

## 2️⃣ Push Code to GitHub (1 minute)

```bash
# Initialize git (if needed)
git init
git config user.email "your@email.com"
git config user.name "Your Name"

# Create GitHub repo first at github.com/new

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/fintrack-cloud.git
git branch -M main
git add .
git commit -m "Initial commit with CI/CD pipeline"
git push -u origin main
```

## 3️⃣ Verify Workflows (1 minute)

1. Go to GitHub repository
2. Click "Actions" tab
3. You should see 4 workflows:
   - ✅ Deploy to Render
   - ✅ Database Migration
   - ✅ Code Quality & Security
   - ✅ Performance Monitoring

## 4️⃣ Test Deployment (1 minute)

**Option A: Manual Test**
1. Go to Actions tab
2. Click "Deploy to Render"
3. Click "Run workflow"
4. Select branch: main
5. Click "Run workflow"

**Option B: Automatic Test**
1. Make a small code change
2. Commit: `git commit -am "Test CI/CD"`
3. Push: `git push`
4. Watch Actions tab for workflow

## 5️⃣ Monitor Deployment (0 minutes)

**In GitHub:**
- Actions tab shows workflow progress
- Green checkmark = success
- Red X = failure

**In Render:**
- Dashboard shows deployment status
- Live URL: https://fintrack-cloud.onrender.com

## 🎯 What Happens Automatically

**On Every Push to Main:**

1. **Code Quality Check** (3-5 min)
   - Linting
   - Type checking
   - Security scan
   - Build verification

2. **Build & Test** (3-5 min)
   - Install dependencies
   - Build frontend
   - Build backend
   - Upload artifacts

3. **Deploy to Render** (5-10 min)
   - Trigger Render deployment
   - Render builds and deploys
   - App goes live

4. **Performance Monitoring**
   - Measure build times
   - Analyze bundle size
   - Run Lighthouse audit

## 📊 Workflow Status

**View in GitHub Actions:**
```
✅ = Success - Deployment live
❌ = Failed - Check logs
⏳ = Running - Wait for completion
⊘ = Skipped - Conditions not met
```

## 🔧 Troubleshooting

### Deployment Not Triggering
- Verify you pushed to `main` branch (not develop)
- Check Render secrets are configured
- Try manual workflow dispatch

### Build Fails
- Check GitHub Actions logs
- Run locally: `pnpm build`
- Fix errors and push again

### Render Secrets Not Found
- Go to GitHub Settings → Secrets
- Verify `RENDER_DEPLOY_KEY` exists
- Verify `RENDER_SERVICE_ID` exists
- Names must match exactly

## 📱 View on Mobile

**GitHub Mobile App:**
1. Open GitHub app
2. Go to repository
3. Tap Actions tab
4. See workflow status

**Render Mobile:**
1. Open Render dashboard
2. View deployment status
3. Check app health

## 🚀 Next Steps

1. ✅ Add Render secrets
2. ✅ Push code to GitHub
3. ✅ Watch first deployment
4. ✅ Celebrate! 🎉

## 📚 Full Documentation

- **Setup Guide:** `GITHUB_ACTIONS_SETUP.md`
- **Pipeline Details:** `CI_CD_PIPELINE.md`
- **Deployment Guide:** `PRODUCTION_DEPLOYMENT.md`

## 💡 Pro Tips

**Speed up deployments:**
- GitHub Actions caches dependencies
- First run slower (builds cache)
- Subsequent runs faster

**Monitor performance:**
- Check workflow duration
- View bundle size in logs
- Review Lighthouse scores

**Keep it secure:**
- Never commit secrets
- Use GitHub Secrets
- Rotate API keys monthly

## ⚡ Common Commands

```bash
# View workflow status
gh run list --workflow=deploy.yml

# Manually run workflow
gh workflow run deploy.yml --ref main

# View specific run
gh run view {RUN_ID} --log

# Cancel running workflow
gh run cancel {RUN_ID}
```

## 📞 Support

- **GitHub Docs:** https://docs.github.com/en/actions
- **Render Docs:** https://render.com/docs
- **Check logs:** GitHub Actions → Workflow → Job → Step

---

**Your CI/CD pipeline is ready!** 🚀

Every push to main automatically:
1. Tests code quality
2. Builds application
3. Deploys to Render
4. Monitors performance

No manual steps needed! ✨
