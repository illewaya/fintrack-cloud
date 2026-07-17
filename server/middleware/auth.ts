import { Request, Response, NextFunction } from 'express'

// Extend Express Request to include userId
declare global {
  namespace Express {
    interface Request {
      userId?: number
    }
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  // In production, verify JWT token
  // For now, we'll use a simple session-based approach
  const userId = (req.session as any)?.userId
  
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  req.userId = userId
  next()
}

export default authMiddleware
