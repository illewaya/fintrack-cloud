# GitHub Actions - Automated Deployment Setup

This guide explains how to set up GitHub Actions for automated testing, building, and deployment of FinTrack Cloud to Render.

## Workflows Included

### 1. **deploy.yml** - Main Deployment Pipeline
Automatically deploys to Render on every push to main branch.

**Stages:**
- Test & Build: Installs dependencies, runs type checks, builds frontend and backend
- Deploy: Triggers Render deployment API
- Notify: Reports deployment status

**Triggers:**
- Push to main branch
- Manual workflow dispatch

### 2. **database-migration.yml** - Database Migrations
Automatically generates and commits database migrations when schema changes.

**Stages:**
- Generate migrations using Drizzle Kit
- Commit migrations to repository
- Push changes back to main

**Triggers:**
- Changes to `server/db/schema.ts`
- Changes to `drizzle.config.ts`
- Manual workflow dispatch

### 3. **quality.yml** - Code Quality & Security
Runs linting, type checking, security scans, and build verification.

**Stages:**
- Lint & Format Check: ESLint and TypeScript type checking
- Security Scan: Dependency audit and secret detection
- Build Check: Verify frontend and backend build successfully
- Dependency Check: Check for outdated packages

**Triggers:**
- Push to main or develop
- Pull requests to main or develop

### 4. **performance.yml** - Performance Monitoring
Monitors build performance, bundle size, and system resources.

**Stages:**
- Build Performance: Measures frontend and backend build times
- Lighthouse Audit: Runs Lighthouse performance tests
- Memory Check: Monitors system resource usage

**Triggers:**
- Push to main
- Daily schedule (midnight UTC)
- Manual workflow dispatch

## Setup Instructions

### Step 1: Configure Render Deployment

1. **Get Render Deploy Key:**
   - Go to https://dashboard.render.com
   - Select your FinTrack Cloud service
   - Go to Settings → API Key
   - Copy the Deploy Hook URL (contains key and service ID)

2. **Extract Credentials:**
   - Deploy Hook URL format: `https://api.render.com/deploy/srv-{SERVICE_ID}?key={DEPLOY_KEY}`
   - Extract `SERVICE_ID` and `DEPLOY_KEY`

3. **Add GitHub Secrets:**
   - Go to GitHub repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add two secrets:
     - Name: `RENDER_DEPLOY_KEY` → Value: (your deploy key)
     - Name: `RENDER_SERVICE_ID` → Value: (your service ID without "srv-")

### Step 2: Verify Workflows

1. Go to GitHub repository → Actions tab
2. You should see 4 workflows:
   - Deploy to Render
   - Database Migration
   - Code Quality & Security
   - Performance Monitoring

3. Each workflow shows:
   - Status (success/failure)
   - Trigger information
   - Run duration

### Step 3: Test Deployment Workflow

**Manual Test:**
1. Go to Actions tab
2. Select "Deploy to Render" workflow
3. Click "Run workflow"
4. Select branch: main
5. Click "Run workflow"

**Automatic Test:**
1. Make a small change to code
2. Commit and push to main
3. Watch Actions tab for workflow execution

## Workflow Secrets Required

| Secret | Description | Example |
|--------|-------------|---------|
| `RENDER_DEPLOY_KEY` | Render API deploy key | `rnd_abc123xyz...` |
| `RENDER_SERVICE_ID` | Render service ID | `srv-abc123xyz` |

**Note:** GitHub automatically provides `GITHUB_TOKEN` for workflow authentication.

## Workflow Outputs

### Deploy Workflow
- ✅ Tests pass
- ✅ Frontend builds successfully
- ✅ Backend bundles successfully
- ✅ Deployment triggered on Render
- ✅ Status notification

### Database Migration Workflow
- ✅ Migrations generated
- ✅ Changes committed to repository
- ✅ Pushed to main branch

### Quality Workflow
- ✅ Linting passed
- ✅ Type checking passed
- ✅ Security audit passed
- ✅ Build verification passed
- ✅ Dependencies checked

### Performance Workflow
- ✅ Build time measured
- ✅ Bundle size analyzed
- ✅ Lighthouse audit completed
- ✅ Memory usage monitored

## Monitoring Deployments

### In GitHub Actions
1. Go to repository → Actions tab
2. Click on workflow run to see details
3. Expand job to see step-by-step logs
4. Check "Annotations" for warnings/errors

### In Render Dashboard
1. Go to https://dashboard.render.com
2. Select FinTrack Cloud service
3. View deployment history
4. Check logs for any issues

## Troubleshooting

### Deployment Fails

**Check logs:**
1. Go to GitHub Actions
2. Click failed workflow
3. Expand "Deploy to Render" job
4. Check error messages

**Common issues:**
- Render secrets not configured → Add RENDER_DEPLOY_KEY and RENDER_SERVICE_ID
- Build fails → Check build logs for missing dependencies
- Type errors → Run `pnpm type-check` locally

### Migrations Not Generated

**Check:**
1. Did you modify `server/db/schema.ts`?
2. Is the workflow triggered?
3. Check workflow logs for errors

**Manual fix:**
```bash
pnpm db:generate
git add server/db/migrations/
git commit -m "chore: generate migrations"
git push
```

### Build Takes Too Long

**Optimization:**
- Workflows use caching for dependencies
- First run is slower (builds cache)
- Subsequent runs use cached dependencies
- Clear cache if needed: Actions → Caches → Delete

## Advanced Configuration

### Custom Build Commands

Edit `.github/workflows/deploy.yml`:
```yaml
- name: Custom build step
  run: |
    pnpm install
    pnpm build
    # Add custom commands here
```

### Environment Variables

Add to Render dashboard or GitHub Secrets:
```yaml
env:
  CUSTOM_VAR: ${{ secrets.CUSTOM_VAR }}
```

### Conditional Deployment

Deploy only on tags:
```yaml
on:
  push:
    tags:
      - 'v*'
```

### Scheduled Deployments

Run performance checks daily:
```yaml
schedule:
  - cron: '0 0 * * *'  # Midnight UTC
```

## Security Best Practices

1. **Never commit secrets** - Use GitHub Secrets
2. **Rotate API keys** - Change Render deploy key periodically
3. **Limit permissions** - Use minimal required permissions
4. **Review logs** - Check workflow logs for sensitive data
5. **Use branch protection** - Require status checks before merge

## Cost Considerations

**GitHub Actions (Free Tier):**
- 2,000 minutes/month for private repos
- 3,000 minutes/month for public repos
- Our workflows use ~2-5 minutes per run

**Render (Free Tier):**
- 750 hours/month web service
- Auto-deployment included
- No additional cost for CI/CD

## Useful Commands

### Run workflow manually
```bash
gh workflow run deploy.yml
```

### View workflow status
```bash
gh run list --workflow=deploy.yml
```

### View workflow logs
```bash
gh run view {RUN_ID} --log
```

## Next Steps

1. ✅ Configure Render secrets
2. ✅ Test deployment workflow
3. ✅ Monitor first automatic deployment
4. ✅ Set up branch protection rules
5. ✅ Configure notifications (optional)

## Support

- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **Render Deployment API:** https://render.com/docs/deploy-hook
- **Workflow Syntax:** https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions

---

**Your automated deployment pipeline is ready!** 🚀
