import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import * as tf from '@tensorflow/tfjs'

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const modelPath = path.join(__dirname, '../../model/model.json')
const weights = JSON.parse(fs.readFileSync(modelPath, 'utf-8'))

// Pre-allocate tensors to avoid memory leaks and improve performance
const W = tf.tensor2d(weights.W)
const b = tf.tensor1d(weights.b)

function extract(s) {
  const len = s.length
  const c = (s.match(/C/g) || []).length
  const o = (s.match(/O/g) || []).length
  const n = (s.match(/N/g) || []).length
  const eq = (s.match(/=/g) || []).length
  return [len / 40, c / 20, o / 10, n / 10, eq / 10]
}

router.post('/', async (req, res) => {
  const { smiles, task } = req.body || {}
  if (!smiles) return res.status(400).json({ error: 'invalid' })
  
  try {
    const features = extract(smiles)
    const out = tf.tidy(() => {
      const x = tf.tensor2d([features], [1, features.length])
      // Use the pre-allocated weights
      const y = x.matMul(W).add(b).sigmoid()
      return y
    })
    
    const arr = await out.array()
    out.dispose() // Clean up the result tensor
    
    const [tox, sol, dl, logp] = arr[0]
    const result = {
      toxicity: Number(tox.toFixed(2)),
      solubility: Number(sol.toFixed(2)),
      drug_likeness: Number(dl.toFixed(2)),
      logP: Number((logp * 5 - 1).toFixed(2)),
      interpretation: 'Moderately safe and soluble.'
    }
    return res.json(result)
  } catch (err) {
    console.error('Prediction error:', err)
    return res.status(500).json({ error: 'Prediction failed' })
  }
})

export default router
