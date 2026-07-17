import { Router, Request, Response } from 'express'
import { db } from '../db'
import { invoices, expenses } from '../db/schema'
import { eq, and, gte } from 'drizzle-orm'

const router = Router()

// Get current cash balance
router.get('/balance', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId

    const allInvoices = await db.query.invoices.findMany({
      where: eq(invoices.userId, userId),
    })

    const allExpenses = await db.query.expenses.findMany({
      where: eq(expenses.userId, userId),
    })

    const totalIncome = allInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || '0'), 0)
    const totalExpenses = allExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount || '0'), 0)
    const balance = totalIncome - totalExpenses

    res.json({ balance, totalIncome, totalExpenses })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch balance' })
  }
})

// Generate 90-day cash flow forecast
router.post('/forecast', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId

    // Get current balance
    const allInvoices = await db.query.invoices.findMany({
      where: eq(invoices.userId, userId),
    })

    const allExpenses = await db.query.expenses.findMany({
      where: eq(expenses.userId, userId),
    })

    let currentBalance = allInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || '0'), 0) -
                         allExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount || '0'), 0)

    // Calculate average daily income and expenses
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const recentInvoices = allInvoices.filter(inv => inv.issuedDate && new Date(inv.issuedDate) > thirtyDaysAgo)
    const recentExpenses = allExpenses.filter(exp => exp.expenseDate && new Date(exp.expenseDate) > thirtyDaysAgo)

    const avgDailyIncome = recentInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || '0'), 0) / 30
    const avgDailyExpense = recentExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount || '0'), 0) / 30
    const avgDailyNet = avgDailyIncome - avgDailyExpense

    // Generate forecast
    const forecast = []
    const today = new Date()

    for (let i = 0; i <= 90; i += 7) {
      const forecastDate = new Date(today)
      forecastDate.setDate(forecastDate.getDate() + i)

      currentBalance += avgDailyNet * (i === 0 ? 0 : 7)

      forecast.push({
        date: forecastDate.toISOString().substring(0, 10),
        daysAhead: i,
        projectedBalance: Math.round(currentBalance * 100) / 100,
      })
    }

    // Save forecast to database (mock - would save to DB in production)
    // for (const item of forecast) {
    //   await db.insert(cashFlowForecasts).values({
    //     userId,
    //     forecastDate: new Date(item.date),
    //     projectedBalance: item.projectedBalance.toString(),
    //   }).catch(() => {}) // Ignore errors for duplicate inserts
    // }

    res.json(forecast)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to generate forecast' })
  }
})

// Get overdue invoices
router.get('/overdue', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const today = new Date()

    const userInvoices = await db.query.invoices.findMany({
      where: and(
        eq(invoices.userId, userId),
        gte(invoices.dueDate, new Date(0))
      ),
    })

    const overdueInvoices = userInvoices.filter(inv => {
      return inv.dueDate && new Date(inv.dueDate) < today && inv.status !== 'paid'
    })

    const totalOverdue = overdueInvoices.reduce((sum, inv) => sum + parseFloat(inv.totalAmount || '0'), 0)

    res.json({
      count: overdueInvoices.length,
      total: totalOverdue,
      invoices: overdueInvoices,
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch overdue invoices' })
  }
})

// Get AI recommendations
router.get('/recommendations', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId

    const allInvoices = await db.query.invoices.findMany({
      where: eq(invoices.userId, userId),
    })

    const allExpenses = await db.query.expenses.findMany({
      where: eq(expenses.userId, userId),
    })

    const recommendations = []

    // Check for overdue invoices
    const today = new Date()
    const overdueCount = allInvoices.filter(inv => 
      inv.dueDate && new Date(inv.dueDate) < today && inv.status !== 'paid'
    ).length

    if (overdueCount > 0) {
      const overdueAmount = allInvoices
        .filter(inv => inv.dueDate && new Date(inv.dueDate) < today && inv.status !== 'paid')
        .reduce((sum, inv) => sum + parseFloat(inv.totalAmount || '0'), 0)

      recommendations.push({
        type: 'warning',
        title: 'Overdue Invoices',
        message: `You have ${overdueCount} overdue invoices totaling K${overdueAmount.toLocaleString()}. Follow up with clients to improve cash flow.`,
      })
    }

    // Check expense trends
    const lastMonth = new Date()
    lastMonth.setMonth(lastMonth.getMonth() - 1)
    const lastMonthExpenses = allExpenses
      .filter(exp => exp.expenseDate && new Date(exp.expenseDate) > lastMonth)
      .reduce((sum, exp) => sum + parseFloat(exp.amount || '0'), 0)

    const twoMonthsAgo = new Date()
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2)
    const prevMonthExpenses = allExpenses
      .filter(exp => exp.expenseDate && new Date(exp.expenseDate) > twoMonthsAgo && new Date(exp.expenseDate) <= lastMonth)
      .reduce((sum, exp) => sum + parseFloat(exp.amount || '0'), 0)

    if (prevMonthExpenses > 0) {
      const percentChange = ((lastMonthExpenses - prevMonthExpenses) / prevMonthExpenses * 100)
      if (percentChange > 15) {
        recommendations.push({
          type: 'info',
          title: 'Expense Increase',
          message: `Your expenses increased by ${Math.round(percentChange)}% this month. Review spending patterns.`,
        })
      }
    }

    // Check for cash flow issues
    const totalIncome = allInvoices.reduce((sum, inv) => sum + parseFloat(inv.amount || '0'), 0)
    const totalExpenses = allExpenses.reduce((sum, exp) => sum + parseFloat(exp.amount || '0'), 0)
    const balance = totalIncome - totalExpenses

    if (balance < 5000) {
      recommendations.push({
        type: 'warning',
        title: 'Low Cash Balance',
        message: `Your cash balance is low (K${balance.toLocaleString()}). Consider following up on outstanding invoices.`,
      })
    }

    // Tax compliance reminder
    recommendations.push({
      type: 'info',
      title: 'Tax Liability',
      message: `Your estimated IRC tax liability is K${(balance * 0.3).toLocaleString()}. Plan ahead for tax payments.`,
    })

    res.json(recommendations)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to generate recommendations' })
  }
})

export default router
