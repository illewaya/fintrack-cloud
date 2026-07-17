import { Router, Request, Response } from 'express'
import { db } from '../db'
import { invoices, expenses, taxCompliance } from '../db/schema'
import { eq, and, gte, lte } from 'drizzle-orm'

const router = Router()

// Get financial summary for a date range
router.get('/summary', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const { startDate, endDate } = req.query

    const start = startDate ? new Date(startDate as string) : new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    const end = endDate ? new Date(endDate as string) : new Date()

    // Get invoices
    const userInvoices = await db.query.invoices.findMany({
      where: and(
        eq(invoices.userId, userId),
        gte(invoices.issuedDate, start),
        lte(invoices.issuedDate, end)
      ),
    })

    // Get expenses
    const userExpenses = await db.query.expenses.findMany({
      where: and(
        eq(expenses.userId, userId),
        gte(expenses.expenseDate, start),
        lte(expenses.expenseDate, end)
      ),
    })

    // Calculate totals
    const totalIncome = userInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || '0'), 0)
    const totalExpenses = userExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount || '0'), 0)
    const totalGST = userInvoices.reduce((sum, inv) => sum + parseFloat(inv.gstAmount || '0'), 0)
    const netProfit = totalIncome - totalExpenses
    const ircTax = netProfit * 0.3 // 30% IRC tax

    res.json({
      period: { start, end },
      totalIncome,
      totalExpenses,
      netProfit,
      totalGST,
      ircTax,
      invoiceCount: userInvoices.length,
      expenseCount: userExpenses.length,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch report summary' })
  }
})

// Get expense breakdown by category
router.get('/expenses-by-category', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId

    const userExpenses = await db.query.expenses.findMany({
      where: eq(expenses.userId, userId),
    })

    // Group by category
    const breakdown: Record<string, number> = {}
    userExpenses.forEach(exp => {
      const amount = parseFloat(exp.amount || '0')
      breakdown[exp.category] = (breakdown[exp.category] || 0) + amount
    })

    res.json(breakdown)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch expense breakdown' })
  }
})

// Get monthly financial data
router.get('/monthly', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const months = 12

    const monthlyData = []

    for (let i = months - 1; i >= 0; i--) {
      const date = new Date()
      date.setMonth(date.getMonth() - i)
      const monthStart = new Date(date.getFullYear(), date.getMonth(), 1)
      const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0)

      const monthInvoices = await db.query.invoices.findMany({
        where: and(
          eq(invoices.userId, userId),
          gte(invoices.issuedDate, monthStart),
          lte(invoices.issuedDate, monthEnd)
        ),
      })

      const monthExpenses = await db.query.expenses.findMany({
        where: and(
          eq(expenses.userId, userId),
          gte(expenses.expenseDate, monthStart),
          lte(expenses.expenseDate, monthEnd)
        ),
      })

      const income = monthInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || '0'), 0)
      const expenseAmount = monthExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount || '0'), 0)

      monthlyData.push({
        month: monthStart.toISOString().substring(0, 7),
        income,
        expenses: expenseAmount,
        profit: income - expenseAmount,
      })
    }

    res.json(monthlyData)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch monthly data' })
  }
})

// Get tax compliance summary
router.get('/tax-compliance', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId

    const compliance = await db.query.taxCompliance.findMany({
      where: eq(taxCompliance.userId, userId),
    })

    res.json(compliance)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tax compliance data' })
  }
})

// Calculate and save tax compliance for a month
router.post('/tax-compliance', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const { month } = req.body // Format: YYYY-MM

    const [year, monthNum] = month.split('-').map(Number)
    const monthStart = new Date(year, monthNum - 1, 1)
    const monthEnd = new Date(year, monthNum, 0)

    // Get invoices for the month
    const monthInvoices = await db.query.invoices.findMany({
      where: and(
        eq(invoices.userId, userId),
        gte(invoices.issuedDate, monthStart),
        lte(invoices.issuedDate, monthEnd)
      ),
    })

    // Get expenses for the month
    const monthExpenses = await db.query.expenses.findMany({
      where: and(
        eq(expenses.userId, userId),
        gte(expenses.expenseDate, monthStart),
        lte(expenses.expenseDate, monthEnd)
      ),
    })

    const gstCollected = monthInvoices.reduce((sum, inv) => sum + parseFloat(inv.gstAmount || '0'), 0)
    const gstPaid = monthExpenses.reduce((sum, exp) => sum + parseFloat(exp.gstAmount || '0'), 0)
    const gstPayable = gstCollected - gstPaid

    const income = monthInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || '0'), 0)
    const expenseAmount = monthExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount || '0'), 0)
    const ircLiability = (income - expenseAmount) * 0.3

    res.json({
      month,
      ircLiability,
      gstCollected,
      gstPaid,
      gstPayable,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to calculate tax compliance' })
  }
})

export default router
