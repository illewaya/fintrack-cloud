import express, { Request, Response } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import session from 'express-session'
import { db, testConnection } from './db'
import { users } from './db/schema'
import { eq } from 'drizzle-orm'
import invoicesRouter from './routes/invoices'
import expensesRouter from './routes/expenses'
import reportsRouter from './routes/reports'
import cashflowRouter from './routes/cashflow'
import authMiddleware from './middleware/auth'



const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: process.env.SESSION_SECRET || 'fintrack-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
}))

// Test database connection on startup
testConnection().then(connected => {
  if (connected) {
    console.log('✅ Ready to serve requests')
  } else {
    console.log('⚠️  Database not connected - using mock data')
  }
})

// Mock user database (for demo without real database)
const mockUsers: Map<string, any> = new Map()

// Auth Routes
app.post('/api/auth/register', async (req: Request, res: Response) => {
  try {
    const { email, password, businessName } = req.body

    // Check if user exists in database
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    }).catch(() => null)

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Create user in database
    const result = await db.insert(users).values({
      email,
      password, // In production, hash the password!
      businessName,
      language: 'en',
    }).returning().catch(() => {
      // Fallback to mock if database fails
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        businessName,
        language: 'en',
      }
      mockUsers.set(email, { ...user, password })
      return [user]
    })

    const user = result[0]
    ;(req.session as any).userId = user.id

    res.json({
      id: user.id,
      email: user.email,
      businessName: user.businessName,
      language: user.language,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Registration failed' })
  }
})

app.post('/api/auth/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    // Try to find user in database
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    }).catch(() => null)

    if (user && user.password === password) {
      ;(req.session as any).userId = user.id
      return res.json({
        id: user.id,
        email: user.email,
        businessName: user.businessName,
        language: user.language,
      })
    }

    // Fallback to mock users
    const mockUser = mockUsers.get(email)
    if (mockUser && mockUser.password === password) {
      ;(req.session as any).userId = mockUser.id
      return res.json({
        id: mockUser.id,
        email: mockUser.email,
        businessName: mockUser.businessName,
        language: mockUser.language,
      })
    }

    res.status(401).json({ message: 'Invalid credentials' })
  } catch (error) {
    res.status(500).json({ message: 'Login failed' })
  }
})

app.get('/api/auth/me', (req: Request, res: Response) => {
  const userId = (req.session as any)?.userId
  if (!userId) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  // Return demo user
  res.json({
    id: userId,
    email: 'demo@example.com',
    businessName: 'Demo Business',
    language: 'en',
  })
})

app.post('/api/auth/logout', (req: Request, res: Response) => {
  req.session?.destroy((_err) => {
    res.json({ success: true })
  })
})

// Protected API routes
app.use('/api/invoices', authMiddleware, invoicesRouter)
app.use('/api/expenses', authMiddleware, expensesRouter)
app.use('/api/reports', authMiddleware, reportsRouter)
app.use('/api/cashflow', authMiddleware, cashflowRouter)

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Serve static files
app.use(express.static(path.join(__dirname, '../dist/public')))

// SPA fallback
app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../dist/public/index.html'))
})

app.listen(PORT, () => {
  console.log(`🚀 FinTrack Cloud server running on port ${PORT}`)
  console.log(`📊 API: http://localhost:${PORT}/api`)
})
