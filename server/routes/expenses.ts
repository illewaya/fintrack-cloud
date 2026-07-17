import { Router, Request, Response } from 'express'
import { db } from '../db'
import { expenses } from '../db/schema'
import { eq, and } from 'drizzle-orm'

const router = Router()

// Get all expenses for user
router.get('/', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const userExpenses = await db.query.expenses.findMany({
      where: eq(expenses.userId, userId),
    })
    res.json(userExpenses)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch expenses' })
  }
})

// Get expenses by category
router.get('/category/:category', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const category = req.params.category
    
    const categoryExpenses = await db.query.expenses.findMany({
      where: and(
        eq(expenses.userId, userId),
        eq(expenses.category, category)
      ),
    })
    
    res.json(categoryExpenses)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch expenses' })
  }
})

// Create expense
router.post('/', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const { category, description, amount, paymentMethod, expenseDate } = req.body

    // Calculate GST (10%)
    const gstAmount = (parseFloat(amount) * 0.1).toString()

    const result = await db.insert(expenses).values({
      userId,
      category,
      description,
      amount: amount.toString(),
      gstAmount,
      paymentMethod,
      expenseDate: expenseDate ? new Date(expenseDate) : new Date(),
    }).returning()

    res.status(201).json(result[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to create expense' })
  }
})

// Update expense
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const expenseId = parseInt(req.params.id)
    const { category, description, amount, paymentMethod } = req.body

    const result = await db.update(expenses)
      .set({
        category,
        description,
        amount: amount ? amount.toString() : undefined,
        paymentMethod,
      })
      .where(and(
        eq(expenses.id, expenseId),
        eq(expenses.userId, userId)
      ))
      .returning()

    if (result.length === 0) {
      return res.status(404).json({ error: 'Expense not found' })
    }

    res.json(result[0])
  } catch (error) {
    res.status(500).json({ error: 'Failed to update expense' })
  }
})

// Delete expense
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const expenseId = parseInt(req.params.id)

    const result = await db.delete(expenses)
      .where(and(
        eq(expenses.id, expenseId),
        eq(expenses.userId, userId)
      ))
      .returning()

    if (result.length === 0) {
      return res.status(404).json({ error: 'Expense not found' })
    }

    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete expense' })
  }
})

export default router
