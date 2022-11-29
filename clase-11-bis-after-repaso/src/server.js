import express from 'express'
import { router } from './router.js'

export const app = express()

app.use(express.json())

app.use('/', router)
