# FinTrack Cloud - CI/CD Pipeline Documentation

Complete guide to the automated CI/CD pipeline using GitHub Actions and Render.

## Pipeline Overview

The CI/CD pipeline consists of 4 automated workflows that handle testing, building, deployment, and monitoring:

```
Code Push to Main
       ↓
┌──────────────────────────────────────────┐
│  1. Code Quality & Security (quality.yml)│
│  - Lint & Format Check                   │
│  - Security Scan                         │
│  - Build Check                           │
│  - Dependency Check                      │
└──────────────────────────────────────────┘
       ↓ (if all pass)
┌──────────────────────────────────────────┐
│  2. Test & Build (deploy.yml)            │
│  - Install Dependencies                  │
│  - Type Check                            │
│  - Build Frontend                        │
│  - Build Backend                         │
└──────────────────────────────────────────┘
       ↓ (if all pass)
┌──────────────────────────────────────────┐
│  3. Deploy to Render (deploy.yml)        │
│  - Trigger Render Deployment             │
│  - Monitor Deployment                    │
│  - Notify Status                         │
└──────────────────────────────────────────┘
       ↓ (parallel)
┌──────────────────────────────────────────┐
│  4. Performance Monitoring (performance) │
│  - Measure Build Times                   │
│  - Analyze Bundle Size                   │
│  - Run Lighthouse Audit                  │
│  - Monitor System Resources              │
└──────────────────────────────────────────┘
```

## Workflow Details

### Workflow 1: Code Quality & Security

**File:** `.github/workflows/quality.yml`

**Purpose:** Ensures code quality and security standards before deployment.

**Jobs:**

| Job | Purpose | Tools |
|-----|---------|-------|
| Lint & Format Check | Check code style and formatting | ESLint, TypeScript |
| Security Scan | Detect vulnerabilities and secrets | pnpm audit, TruffleHog |
| Build Check | Verify code compiles | Vite, esbuild |
| Dependency Check | Monitor package health | pnpm outdated |

**Triggers:**
- Push to main or develop branch
- Pull requests to main or develop
- Manual workflow dispatch

**Duration:** ~3-5 minutes

### Workflow 2: Deploy to Render

**File:** `.github/workflows/deploy.yml`

**Purpose:** Automatically builds and deploys to Render on every push to main.

**Jobs:**

| Job | Purpose | Output |
|-----|---------|--------|
| Test & Build | Build frontend and backend | Build artifacts |
| Deploy to Render | Trigger Render deployment | Live URL |
| Notify | Report deployment status | Status message |

**Triggers:**
- Push to main branch
- Manual workflow dispatch

**Duration:** ~5-10 minutes (including Render build time)

### Workflow 3: Database Migration

**File:** `.github/workflows/database-migration.yml`

**Purpose:** Automatically generates database migrations when schema changes.

**Jobs:**

| Job | Purpose | Output |
|-----|---------|--------|
| Migrate | Generate and commit migrations | Migration files |

**Triggers:**
- Changes to `server/db/schema.ts`
- Changes to `drizzle.config.ts`
- Manual workflow dispatch

**Duration:** ~2-3 minutes

### Workflow 4: Performance Monitoring

**File:** `.github/workflows/performance.yml`

**Purpose:** Monitors build performance and application metrics.

**Jobs:**

| Job | Purpose | Metrics |
|-----|---------|---------|
| Performance Check | Measure build times | Frontend/Backend build time |
| Lighthouse Audit | Performance audit | Lighthouse scores |
| Memory Check | System resource usage | Memory and disk usage |

**Triggers:**
- Push to main branch
- Daily schedule (midnight UTC)
- Manual workflow dispatch

**Duration:** ~5-10 minutes

## Setup Instructions

### 1. Configure Render Secrets

**Get Render Deploy Key:**

```bash
# 1. Go to Render dashboard
# 2. Select FinTrack Cloud service
# 3. Settings → API Key
# 4. Copy Deploy Hook URL
```

**Add GitHub Secrets:**

1. Go to GitHub repository
2. Settings → Secrets and variables → Actions
3. Create two secrets:

```
RENDER_DEPLOY_KEY: rnd_abc123xyz...
RENDER_SERVICE_ID: srv-abc123xyz
```

### 2. Verify Workflows

Check that all workflows are visible in Actions tab:

```bash
# Via GitHub CLI
gh workflow list

# Output should show:
# Deploy to Render
# Database Migration
# Code Quality & Security
# Performance Monitoring
```

### 3. Test Pipeline

**Manual Test:**

```bash
# Push code to main
git add .
git commit -m "Test CI/CD pipeline"
git push origin main

# Watch Actions tab for workflow execution
```

**Verify Each Stage:**

1. Quality checks pass
2. Build succeeds
3. Deployment triggers
4. App goes live on Render

## Monitoring Pipeline

### GitHub Actions Dashboard

**View Workflow Status:**
1. Go to repository → Actions tab
2. See all workflow runs
3. Click run to view details
4. Expand jobs to see logs

**Check Specific Workflow:**
```bash
gh run list --workflow=deploy.yml
gh run view {RUN_ID} --log
```

### Render Dashboard

**Monitor Deployment:**
1. Go to https://dashboard.render.com
2. Select FinTrack Cloud service
3. View deployment history
4. Check build logs

**View Live App:**
- Frontend: https://fintrack-cloud.onrender.com
- API: https://fintrack-cloud.onrender.com/api
- Health: https://fintrack-cloud.onrender.com/api/health

## Performance Metrics

### Build Times (Target)

| Stage | Target | Actual |
|-------|--------|--------|
| Install Dependencies | <2 min | ~1-2 min |
| Type Check | <1 min | ~30s |
| Frontend Build | <2 min | ~1-2 min |
| Backend Build | <1 min | ~30s |
| Total | <6 min | ~3-5 min |

### Bundle Sizes (Target)

| Package | Target | Actual |
|---------|--------|--------|
| Frontend JS | <200KB | ~150KB |
| Frontend CSS | <50KB | ~30KB |
| Backend | <500KB | ~400KB |
| Total | <750KB | ~580KB |

## Troubleshooting

### Workflow Fails

**Check logs:**
```bash
# View failed workflow
gh run view {RUN_ID} --log

# Or go to GitHub Actions tab and click failed run
```

**Common issues:**

| Issue | Solution |
|-------|----------|
| Render secrets missing | Add RENDER_DEPLOY_KEY and RENDER_SERVICE_ID |
| Build fails | Check build logs, verify dependencies |
| Type errors | Run `pnpm type-check` locally |
| Deployment timeout | Check Render dashboard for issues |

### Deployment Doesn't Trigger

**Verify:**
1. Pushing to main branch (not develop)
2. Render secrets configured correctly
3. Workflow file exists: `.github/workflows/deploy.yml`

**Fix:**
```bash
# Manually trigger workflow
gh workflow run deploy.yml --ref main
```

### Performance Issues

**Optimize:**
1. Use GitHub Actions cache (automatic)
2. Clear cache if needed: Actions → Caches → Delete
3. First run slower (builds cache)
4. Subsequent runs faster (use cache)

## Advanced Configuration

### Custom Environment Variables

Add to workflow:
```yaml
env:
  CUSTOM_VAR: ${{ secrets.CUSTOM_VAR }}
```

### Conditional Steps

Run step only on main branch:
```yaml
if: github.ref == 'refs/heads/main'
```

### Scheduled Deployments

Run daily:
```yaml
schedule:
  - cron: '0 0 * * *'
```

### Matrix Builds

Test multiple Node versions:
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x]
```

## Security Best Practices

1. **Never commit secrets** - Always use GitHub Secrets
2. **Rotate keys** - Change Render deploy key periodically
3. **Review logs** - Check for sensitive data in logs
4. **Limit permissions** - Use minimal required permissions
5. **Branch protection** - Require status checks before merge

## Cost Analysis

**GitHub Actions (Free Tier):**
- 2,000 minutes/month (private repos)
- Our pipeline: ~3-5 min per run
- Estimate: ~20-30 runs/month = 60-150 minutes
- **Cost: Free** ✅

**Render (Free Tier):**
- 750 hours/month
- Auto-deployment included
- No additional CI/CD cost
- **Cost: Free** ✅

**Total Monthly Cost: $0** 🎉

## Maintenance

### Weekly Tasks
- Monitor workflow success rate
- Check performance metrics
- Review dependency updates

### Monthly Tasks
- Update dependencies: `pnpm update`
- Review security alerts
- Rotate API keys

### Quarterly Tasks
- Review and optimize workflows
- Update Node.js version if needed
- Audit GitHub Actions usage

## Useful Commands

```bash
# List all workflows
gh workflow list

# Run workflow manually
gh workflow run deploy.yml --ref main

# View recent runs
gh run list --limit 10

# View specific run
gh run view {RUN_ID}

# View run logs
gh run view {RUN_ID} --log

# Download run logs
gh run download {RUN_ID}

# Cancel running workflow
gh run cancel {RUN_ID}

# Rerun failed workflow
gh run rerun {RUN_ID}
```

## Documentation References

- **GitHub Actions:** https://docs.github.com/en/actions
- **Workflow Syntax:** https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions
- **Render Deploy Hook:** https://render.com/docs/deploy-hook
- **Drizzle ORM:** https://orm.drizzle.team
- **Vite:** https://vitejs.dev
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse

## Support

For issues or questions:
1. Check GitHub Actions logs
2. Review Render deployment logs
3. Consult documentation links above
4. Open GitHub issue for bugs

---

**Your CI/CD pipeline is fully automated and production-ready!** 🚀
