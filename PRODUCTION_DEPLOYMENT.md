# FinTrack Cloud - Production Deployment Instructions

## Quick Start Deployment (5-10 minutes)

### Step 1: Push Code to GitHub

```bash
cd /home/ubuntu/fintrack-cloud

# If not already initialized
git init
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Create GitHub repository first at https://github.com/new
# Then:
git remote add origin https://github.com/YOUR_USERNAME/fintrack-cloud.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Render.com (Free)

1. **Create Render Account:**
   - Visit https://render.com
   - Click "Sign up"
   - Choose "Sign up with GitHub"
   - Authorize Render to access your GitHub

2. **Deploy Using Blueprint:**
   - Go to https://dashboard.render.com
   - Click "New +" button
   - Select "Blueprint"
   - Connect your GitHub account
   - Select `fintrack-cloud` repository
   - Select `main` branch
   - Click "Create Blueprint"
   - Render automatically deploys using `render.yaml`

3. **Wait for Deployment:**
   - Build takes 5-10 minutes
   - You'll see a live URL like: `https://fintrack-cloud.onrender.com`

### Step 3: Run Database Migrations

After deployment completes:

1. In Render dashboard, go to your Web Service
2. Click "Shell" tab
3. Run: `pnpm drizzle-kit migrate`
4. Confirm all tables created successfully

### Step 4: Test Your Deployment

1. Visit your app: `https://fintrack-cloud.onrender.com`
2. Login with demo credentials:
   - Email: `demo@example.com`
   - Password: `demo123`
3. Create a test invoice to verify database works
4. Check dashboard displays data correctly

## What Gets Deployed

**Render.yaml Configuration:**
- Web Service (Node.js backend + React frontend)
- PostgreSQL Database (free tier)
- Auto-scaling disabled (free tier)
- HTTPS enabled automatically

**Build Process:**
- Installs dependencies: `pnpm install`
- Builds frontend: `vite build`
- Bundles backend: `esbuild server/index.ts`
- Generates migrations: `drizzle-kit generate`

**Start Command:**
- Runs: `NODE_ENV=production node dist/index.js`
- Serves frontend from `dist/public`
- API routes on `/api/*`

## Environment Variables (Auto-Set)

The `render.yaml` automatically configures:
- `NODE_ENV`: `production`
- `DATABASE_URL`: Connected to PostgreSQL service
- `SESSION_SECRET`: Auto-generated
- `VITE_API_URL`: Your Render app URL

## Features Included

✅ User authentication with sessions
✅ Invoice management with GST
✅ Expense tracking by category
✅ Financial reports and analytics
✅ 90-day cash flow forecasting
✅ AI business recommendations
✅ IRC tax compliance (30%)
✅ GST tracking (10%)
✅ Dark mode support
✅ Responsive design

## Accessing Your Deployment

**Frontend:** `https://fintrack-cloud.onrender.com`
**API:** `https://fintrack-cloud.onrender.com/api`
**Health Check:** `https://fintrack-cloud.onrender.com/api/health`

## Free Tier Limitations

**Render Free Tier:**
- 750 hours/month web service runtime
- 90 days database retention
- No auto-scaling
- Shared infrastructure
- Cold starts after 15 minutes inactivity

**When to Upgrade:**
- Need 24/7 uptime
- Want faster performance
- Need database backups
- Planning for scale

## Troubleshooting

**Build Fails:**
- Check build logs in Render dashboard
- Ensure `package.json` has all dependencies
- Verify Node version: `>=18.0.0`

**Database Connection Error:**
- Run migrations: `pnpm drizzle-kit migrate`
- Check DATABASE_URL in environment variables
- Verify PostgreSQL service is running

**App Shows Blank Page:**
- Check browser console for errors
- Verify VITE_API_URL is correct
- Check API health: `/api/health`

**Slow Performance:**
- Normal on free tier (shared resources)
- Upgrade to paid plan for better performance
- Enable caching in React Query

## Next Steps

1. **Add Custom Domain:**
   - Register domain (Namecheap, GoDaddy, etc.)
   - In Render settings, add custom domain
   - Update DNS records

2. **Set Up Monitoring:**
   - Add Sentry for error tracking
   - Set up uptime monitoring
   - Configure alerts

3. **Enable Backups:**
   - Upgrade to paid PostgreSQL plan
   - Enable automated backups
   - Set backup retention

4. **Scale to Production:**
   - Upgrade web service plan
   - Upgrade database plan
   - Add read replicas
   - Set up CDN

## Support Resources

- **Render Docs:** https://render.com/docs
- **Deployment Issues:** Check Render dashboard logs
- **Database Issues:** Use Render PostgreSQL dashboard
- **Code Issues:** Check application logs in Shell

## Security Notes

- HTTPS enabled automatically
- Sessions use secure cookies
- Database credentials in environment variables
- No hardcoded secrets in code
- Rate limiting recommended for production

## Cost Estimate (Free Tier)

- Web Service: Free (750 hours/month)
- PostgreSQL: Free (90 days retention)
- Total: $0/month

**When Upgraded:**
- Web Service: $7+/month
- PostgreSQL: $15+/month
- Estimated: $22+/month for production

---

**Your app is now live and ready to use!** 🚀
