# FinTrack Cloud - Production Deployment Guide

## Deployment to Render.com (Free Tier)

### Prerequisites
- GitHub account with repository
- Render.com account (free)

### Step 1: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial FinTrack Cloud deployment"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/fintrack-cloud.git
git branch -M main
git push -u origin main
```

### Step 2: Create Render Account

1. Go to https://render.com
2. Sign up with GitHub account
3. Authorize Render to access your GitHub repositories

### Step 3: Deploy on Render

#### Option A: Using render.yaml (Recommended)

1. Go to https://dashboard.render.com
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Select the repository and branch (main)
5. Render will automatically detect `render.yaml` and deploy

#### Option B: Manual Setup

1. **Create Web Service:**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Configure:
     - Name: `fintrack-cloud`
     - Environment: `Node`
     - Build Command: `pnpm install && pnpm build`
     - Start Command: `pnpm start`
     - Plan: Free

2. **Create PostgreSQL Database:**
   - Click "New +" → "PostgreSQL"
   - Configure:
     - Name: `fintrack-db`
     - Plan: Free
   - Copy the connection string

3. **Set Environment Variables:**
   - In Web Service settings, add:
     - `NODE_ENV`: `production`
     - `DATABASE_URL`: (paste PostgreSQL connection string)
     - `SESSION_SECRET`: (generate a random string)
     - `VITE_API_URL`: (your Render app URL, e.g., https://fintrack-cloud.onrender.com)

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (~5-10 minutes)

### Step 4: Run Database Migrations

After deployment:

1. Go to your Render Web Service dashboard
2. Click "Shell" tab
3. Run migrations:
   ```bash
   pnpm drizzle-kit migrate
   ```

### Step 5: Verify Deployment

1. Visit your app URL: `https://fintrack-cloud.onrender.com`
2. Test login with demo credentials:
   - Email: demo@example.com
   - Password: demo123
3. Create test invoice/expense to verify database connection

## Alternative Free Hosting Options

### Railway.app
- Similar to Render
- Free tier: $5/month credit
- https://railway.app

### Heroku (Limited Free Tier)
- Classic option
- Free tier: Limited dyno hours
- https://www.heroku.com

### Fly.io
- Free tier available
- Good performance
- https://fly.io

## Production Checklist

- [ ] Database migrations run successfully
- [ ] Environment variables configured
- [ ] HTTPS enabled (automatic on Render)
- [ ] Session secret generated
- [ ] Database backups configured
- [ ] Error logging set up
- [ ] Custom domain configured (optional)

## Scaling to Production

When ready to scale beyond free tier:

1. **Upgrade Database:**
   - Render: Upgrade to paid PostgreSQL plan
   - Add automated backups
   - Enable read replicas

2. **Upgrade Web Service:**
   - Render: Upgrade from free to paid plan
   - Increase memory allocation
   - Enable auto-scaling

3. **Add CDN:**
   - Cloudflare (free tier available)
   - Serve static assets faster

4. **Monitoring:**
   - Set up error tracking (Sentry)
   - Add performance monitoring
   - Configure alerts

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Ensure all dependencies are in package.json
- Verify Node version compatibility

### Database Connection Error
- Verify DATABASE_URL environment variable
- Check PostgreSQL is running
- Run migrations: `pnpm drizzle-kit migrate`

### Application Crashes
- Check logs in Render dashboard
- Verify environment variables are set
- Check for missing dependencies

### Slow Performance
- Check database query performance
- Enable caching in React Query
- Consider upgrading to paid tier

## Custom Domain Setup

1. Register domain (Namecheap, GoDaddy, etc.)
2. In Render dashboard:
   - Go to Web Service settings
   - Add custom domain
   - Update DNS records as instructed

## Security Considerations

- [ ] Change SESSION_SECRET to a strong random value
- [ ] Enable HTTPS (automatic on Render)
- [ ] Set up database backups
- [ ] Use environment variables for all secrets
- [ ] Implement rate limiting
- [ ] Add CORS configuration
- [ ] Enable database encryption

## Support & Documentation

- Render Docs: https://render.com/docs
- Drizzle ORM: https://orm.drizzle.team
- Express.js: https://expressjs.com
- React: https://react.dev
