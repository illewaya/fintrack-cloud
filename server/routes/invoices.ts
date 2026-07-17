import { Router, Request, Response } from 'express'
import { db } from '../db'
import { invoices, invoiceItems } from '../db/schema'
import { eq, and } from 'drizzle-orm'

const router = Router()

// Get all invoices for user
router.get('/', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const userInvoices = await db.query.invoices.findMany({
      where: eq(invoices.userId, userId),
      with: { items: true },
    })
    res.json(userInvoices)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch invoices' })
  }
})

// Get single invoice
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const invoiceId = parseInt(req.params.id)
    
    const invoice = await db.query.invoices.findFirst({
      where: and(
        eq(invoices.id, invoiceId),
        eq(invoices.userId, userId)
      ),
      with: { items: true },
    })
    
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' })
    }
    
    res.json(invoice)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch invoice' })
  }
})

// Create invoice
router.post('/', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const { invoiceNumber, clientName, clientEmail, items, dueDate, description } = req.body

    // Calculate totals
    const subtotal = items.reduce((sum: number, item: any) => sum + (item.quantity * item.unitPrice), 0)
    const gstAmount = subtotal * 0.1 // 10% GST
    const totalAmount = subtotal + gstAmount

    // Create invoice
    const result = await db.insert(invoices).values({
      userId,
      invoiceNumber,
      clientName,
      clientEmail,
      amount: subtotal.toString(),
      gstAmount: gstAmount.toString(),
      totalAmount: totalAmount.toString(),
      dueDate: dueDate ? new Date(dueDate) : undefined,
      description,
      status: 'draft',
    }).returning()

    const invoiceId = result[0].id

    // Create line items
    for (const item of items) {
      await db.insert(invoiceItems).values({
        invoiceId,
        description: item.description,
        quantity: item.quantity,
        unitPrice: item.unitPrice.toString(),
        amount: (item.quantity * item.unitPrice).toString(),
      })
    }

    res.status(201).json({ id: invoiceId, ...result[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to create invoice' })
  }
})

// Update invoice status
router.patch('/:id/status', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const invoiceId = parseInt(req.params.id)
    const { status } = req.body

    const result = await db.update(invoices)
      .set({ status })
      .where(and(
        eq(invoices.id, invoiceId),
        eq(invoices.userId, userId)
      ))
      .returning()

    if (result.length === 0) {
      return res.status(404).json({ error: 'Invoice not found' })
    }

    res.json(result[0])
  } catch (error) {
    res.status(500).json({ error: 'Failed to update invoice' })
  }
})

// Delete invoice
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId
    const invoiceId = parseInt(req.params.id)

    // Delete line items first
    await db.delete(invoiceItems).where(eq(invoiceItems.invoiceId, invoiceId))

    // Delete invoice
    const result = await db.delete(invoices)
      .where(and(
        eq(invoices.id, invoiceId),
        eq(invoices.userId, userId)
      ))
      .returning()

    if (result.length === 0) {
      return res.status(404).json({ error: 'Invoice not found' })
    }

    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete invoice' })
  }
})

export default router
