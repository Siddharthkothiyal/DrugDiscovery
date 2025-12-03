import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { query } from '../db.js'

const router = express.Router()

router.post('/register', async (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ error: 'invalid' })
  const hash = await bcrypt.hash(password, 10)
  try {
    const r = await query('insert into users(email, password_hash) values($1, $2) returning id, email, created_at', [email, hash])
    const user = r.rows[0]
    const token = jwt.sign({}, process.env.JWT_SECRET, { subject: user.id, expiresIn: '7d' })
    return res.json({ user, token })
  } catch (e) {
    return res.status(400).json({ error: 'exists' })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ error: 'invalid' })
  const r = await query('select id, email, password_hash from users where email=$1', [email])
  const user = r.rows[0]
  if (!user) return res.status(401).json({ error: 'invalid_credentials' })
  const ok = await bcrypt.compare(password, user.password_hash)
  if (!ok) return res.status(401).json({ error: 'invalid_credentials' })
  const token = jwt.sign({}, process.env.JWT_SECRET, { subject: user.id, expiresIn: '7d' })
  return res.json({ user: { id: user.id, email: user.email }, token })
})

export default router
