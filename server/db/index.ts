import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

// Get database URL from environment or use default
const databaseUrl = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/fintrack'

const pool = new Pool({
  connectionString: databaseUrl,
})

export const db = drizzle(pool, { schema })

// Test connection
export async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()')
    console.log('✅ Database connected:', result.rows[0])
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  }
}

export { schema }
