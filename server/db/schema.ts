import { pgTable, serial, varchar, integer, decimal, timestamp, text } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// Users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  businessName: varchar('business_name', { length: 255 }).notNull(),
  language: varchar('language', { length: 10 }).default('en'),
  sector: varchar('sector', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Invoices table
export const invoices = pgTable('invoices', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  invoiceNumber: varchar('invoice_number', { length: 50 }).notNull(),
  clientName: varchar('client_name', { length: 255 }).notNull(),
  clientEmail: varchar('client_email', { length: 255 }),
  amount: decimal('amount', { precision: 12, scale: 2 }).notNull(),
  gstAmount: decimal('gst_amount', { precision: 12, scale: 2 }).notNull(),
  totalAmount: decimal('total_amount', { precision: 12, scale: 2 }).notNull(),
  status: varchar('status', { length: 20 }).default('draft'),
  dueDate: timestamp('due_date'),
  issuedDate: timestamp('issued_date').defaultNow(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Invoice line items
export const invoiceItems = pgTable('invoice_items', {
  id: serial('id').primaryKey(),
  invoiceId: integer('invoice_id').notNull().references(() => invoices.id),
  description: varchar('description', { length: 255 }).notNull(),
  quantity: integer('quantity').notNull().default(1),
  unitPrice: decimal('unit_price', { precision: 12, scale: 2 }).notNull(),
  amount: decimal('amount', { precision: 12, scale: 2 }).notNull(),
})

// Expenses table
export const expenses = pgTable('expenses', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  category: varchar('category', { length: 50 }).notNull(),
  description: varchar('description', { length: 255 }).notNull(),
  amount: decimal('amount', { precision: 12, scale: 2 }).notNull(),
  gstAmount: decimal('gst_amount', { precision: 12, scale: 2 }).notNull(),
  paymentMethod: varchar('payment_method', { length: 50 }),
  expenseDate: timestamp('expense_date').defaultNow(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Cash flow forecasts
export const cashFlowForecasts = pgTable('cash_flow_forecasts', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  forecastDate: timestamp('forecast_date').notNull(),
  projectedBalance: decimal('projected_balance', { precision: 12, scale: 2 }).notNull(),
  confidence: integer('confidence').default(80),
  createdAt: timestamp('created_at').defaultNow(),
})

// Business profiles
export const businessProfiles = pgTable('business_profiles', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  businessName: varchar('business_name', { length: 255 }).notNull(),
  sector: varchar('sector', { length: 50 }),
  gstRate: decimal('gst_rate', { precision: 5, scale: 2 }).default('10.00'),
  ircRate: decimal('irc_rate', { precision: 5, scale: 2 }).default('30.00'),
  logoUrl: varchar('logo_url', { length: 500 }),
  invoicePrefix: varchar('invoice_prefix', { length: 10 }).default('INV'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Tax compliance tracking
export const taxCompliance = pgTable('tax_compliance', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  taxYear: integer('tax_year').notNull(),
  gstCollected: decimal('gst_collected', { precision: 12, scale: 2 }).default('0.00'),
  gstPaid: decimal('gst_paid', { precision: 12, scale: 2 }).default('0.00'),
  ircLiability: decimal('irc_liability', { precision: 12, scale: 2 }).default('0.00'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Business readiness scoring
export const businessReadiness = pgTable('business_readiness', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  recordKeepingScore: integer('record_keeping_score').default(0),
  invoicingScore: integer('invoicing_score').default(0),
  expenseTrackingScore: integer('expense_tracking_score').default(0),
  taxComplianceScore: integer('tax_compliance_score').default(0),
  cashFlowScore: integer('cash_flow_score').default(0),
  overallScore: integer('overall_score').default(0),
  updatedAt: timestamp('updated_at').defaultNow(),
})

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  invoices: many(invoices),
  expenses: many(expenses),
  cashFlowForecasts: many(cashFlowForecasts),
  businessProfiles: many(businessProfiles),
  taxCompliance: many(taxCompliance),
  businessReadiness: many(businessReadiness),
}))

export const invoicesRelations = relations(invoices, ({ one, many }) => ({
  user: one(users, { fields: [invoices.userId], references: [users.id] }),
  items: many(invoiceItems),
}))

export const invoiceItemsRelations = relations(invoiceItems, ({ one }) => ({
  invoice: one(invoices, { fields: [invoiceItems.invoiceId], references: [invoices.id] }),
}))

export const expensesRelations = relations(expenses, ({ one }) => ({
  user: one(users, { fields: [expenses.userId], references: [users.id] }),
}))

export const cashFlowForecastsRelations = relations(cashFlowForecasts, ({ one }) => ({
  user: one(users, { fields: [cashFlowForecasts.userId], references: [users.id] }),
}))

export const businessProfilesRelations = relations(businessProfiles, ({ one }) => ({
  user: one(users, { fields: [businessProfiles.userId], references: [users.id] }),
}))

export const taxComplianceRelations = relations(taxCompliance, ({ one }) => ({
  user: one(users, { fields: [taxCompliance.userId], references: [users.id] }),
}))

export const businessReadinessRelations = relations(businessReadiness, ({ one }) => ({
  user: one(users, { fields: [businessReadiness.userId], references: [users.id] }),
}))
