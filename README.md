# FinTrack Cloud - PNG-First Accounting Platform

A comprehensive web-based accounting platform designed specifically for Papua New Guinea businesses, with features for invoicing, expense tracking, cash flow forecasting, and AI-powered financial coaching.

## Features

### Core Accounting
- **Dashboard** - Real-time financial overview with key metrics
- **Invoicing** - Create and manage professional invoices with GST
- **Expense Tracking** - Categorize and track business expenses
- **Financial Reports** - Detailed P&L, tax compliance, and analytics

### PNG-Specific Features
- **IRC Tax Compliance** - Automatic 30% tax calculation and reporting
- **GST Management** - 10% GST tracking for invoices and expenses
- **Chart of Accounts** - PNG-compliant account templates
- **Sector Templates** - Pre-built templates for Retail, Agriculture, Transport, Construction, Services, NGOs, and Churches

### AI & Intelligence
- **Cash Flow Forecasting** - 30, 60, and 90-day cash position predictions
- **AI Business Coach** - Intelligent insights and recommendations
- **Financial Literacy** - Built-in lessons and glossary
- **Overdue Tracking** - Automatic alerts for unpaid invoices

### Accessibility
- **Multi-language** - English and Tok Pisin support
- **Offline Support** - Data entry works offline with auto-sync
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Financial Literacy** - Lessons and tooltips for non-accountants

## Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL (with Drizzle ORM)
- **Charts**: Recharts
- **State Management**: React Query + Context API

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 9+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Project Structure

```
fintrack-cloud/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API services
│   ├── types/           # TypeScript types
│   ├── utils/           # Utility functions
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── server/
│   ├── index.ts         # Express server
│   ├── routes/          # API routes
│   ├── middleware/      # Express middleware
│   └── services/        # Business logic
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Features Roadmap

- [ ] Database integration with PostgreSQL
- [ ] Advanced invoice customization
- [ ] Receipt scanning with OCR
- [ ] Email invoice delivery
- [ ] Business readiness scoring
- [ ] Funding assistant
- [ ] Procurement readiness assessment
- [ ] Donor reporting templates
- [ ] Multi-user team collaboration
- [ ] Mobile app version

## PNG Compliance

FinTrack is built with PNG businesses in mind:

- **IRC Tax**: Automatic 30% tax calculation for individual/partnership businesses
- **GST**: 10% Goods and Services Tax tracking
- **Currency**: All amounts in Papua New Guinea Kina (K)
- **Language**: English and Tok Pisin support
- **Sector Support**: Templates for common PNG business types

## License

MIT
