import express from 'express'
import { query } from '../db.js'
import { requireAuth } from '../middleware/auth.js'

const router = express.Router()

router.get('/', requireAuth, async (req, res) => {
  const r = await query('select * from molecules where user_id=$1 order by created_at desc', [req.userId])
  return res.json({ molecules: r.rows })
})

router.post('/', requireAuth, async (req, res) => {
  const { smiles, task, result } = req.body || {}
  if (!smiles || !task || !result) return res.status(400).json({ error: 'invalid' })
  const r = await query('insert into molecules(user_id, smiles, task, result) values($1,$2,$3,$4) returning *', [req.userId, smiles, task, result])
  return res.json({ molecule: r.rows[0] })
})

export default router
