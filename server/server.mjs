import 'dotenv/config'
import express from 'express'
import ExpressMongoSanitize from 'express-mongo-sanitize'
import mongoose from 'mongoose'
import xss from 'xss-clean'

import router from './routes/index.js'

const app = express()

// bodyparser
app.use(express.json())

// sanitize
app.use(xss())
app.use(ExpressMongoSanitize())

// routes
app.use('/api', router)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`from port ${port}`)
})
