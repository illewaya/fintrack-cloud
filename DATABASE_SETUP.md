# FinTrack Cloud - Database Setup Guide

## Prerequisites

- PostgreSQL 12+ installed and running
- Node.js 18+ and pnpm installed

## Setup Steps

### 1. Create Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create the database
CREATE DATABASE fintrack;

# Exit psql
\q
```

### 2. Generate Migrations

```bash
# Generate migration files from schema
pnpm db:push
```

This command will:
- Generate SQL migration files based on `server/db/schema.ts`
- Create all necessary tables in the database

### 3. Environment Variables

Update `.env` file with your database credentials:

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/fintrack
```

### 4. Start the Application

```bash
# Install dependencies
pnpm install

# Start development server (frontend + backend)
pnpm dev

# Or start separately:
pnpm dev:client  # Frontend on port 5173
pnpm dev:server  # Backend on port 3000
```

## Database Schema

### Tables

1. **users** - User accounts and authentication
   - id, email, password, businessName, language, sector

2. **invoices** - Invoice records
   - id, userId, invoiceNumber, clientName, amount, gstAmount, status, dueDate

3. **invoice_items** - Line items for invoices
   - id, invoiceId, description, quantity, unitPrice, amount

4. **expenses** - Expense records
   - id, userId, category, description, amount, gstAmount, vendor, paymentMethod

5. **cash_flow_forecasts** - Projected cash balances
   - id, userId, forecastDate, projectedBalance, daysAhead

6. **business_profiles** - Business information
   - id, userId, businessName, abr, address, phone, email, logoUrl

7. **tax_compliance** - Monthly tax records
   - id, userId, month, ircLiability, gstCollected, gstPaid, gstPayable

8. **business_readiness** - Business scoring
   - id, userId, financialRecordsScore, taxComplianceScore, cashFlowScore, etc.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### Invoices (Protected)
- `GET /api/invoices` - List all invoices
- `GET /api/invoices/:id` - Get invoice details
- `POST /api/invoices` - Create invoice
- `PATCH /api/invoices/:id/status` - Update invoice status
- `DELETE /api/invoices/:id` - Delete invoice

### Expenses (Protected)
- `GET /api/expenses` - List all expenses
- `GET /api/expenses/category/:category` - Get expenses by category
- `POST /api/expenses` - Create expense
- `PATCH /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

## Troubleshooting

### Database Connection Failed
- Ensure PostgreSQL is running: `pg_isready`
- Check DATABASE_URL in .env file
- Verify database exists: `psql -U postgres -l`

### Migration Errors
- Drop and recreate database: `DROP DATABASE fintrack; CREATE DATABASE fintrack;`
- Run migrations again: `pnpm db:push`

### Port Already in Use
- Change PORT in .env file
- Or kill process using the port: `lsof -ti:3000 | xargs kill -9`

## Production Deployment

For production:

1. Use environment-specific .env files
2. Hash passwords using bcrypt
3. Implement JWT authentication
4. Use connection pooling
5. Enable SSL for database connections
6. Set up automated backups
7. Use environment variables for sensitive data

```env
DATABASE_URL=postgresql://user:password@prod-db-host:5432/fintrack
NODE_ENV=production
SESSION_SECRET=your-strong-secret-key
```
