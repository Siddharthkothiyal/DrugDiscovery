import pg from 'pg'

const { Pool } = pg

const isProduction = process.env.NODE_ENV === 'production'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false
})

export async function query(q, params) {
  const client = await pool.connect()
  try {
    const res = await client.query(q, params)
    return res
  } finally {
    client.release()
  }
}
