import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import predictRoutes from './routes/predict.js'
import moleculeRoutes from './routes/molecules.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: false }))

app.get('/health', (req, res) => res.json({ ok: true }))
app.use('/auth', authRoutes)
app.use('/predict', predictRoutes)
app.use('/molecules', moleculeRoutes)

const port = process.env.PORT || 8080
app.listen(port, () => {})
