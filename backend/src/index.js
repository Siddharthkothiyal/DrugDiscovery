import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import predictRoutes from './routes/predict.js'
import moleculeRoutes from './routes/molecules.js'

dotenv.config()

const app = express()

// Trust proxy if behind a load balancer (common in cloud deployments)
app.set('trust proxy', 1)

app.use(express.json())
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || '*',
  credentials: true
}))

app.get('/health', (req, res) => res.json({ ok: true, timestamp: new Date() }))
app.use('/auth', authRoutes)
app.use('/predict', predictRoutes)
app.use('/molecules', moleculeRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!', details: err.message })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
})
