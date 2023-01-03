import express from 'express'
import { routerApi } from './routes/routerApi.js'
import { logger, loggerMiddleware } from './logger/logger.js'

export function createServer(puerto = 0) {
    const app = express()
    app.use(express.json())
    app.use(loggerMiddleware)
    app.use('/api', routerApi)
    const server = app.listen(puerto)
    logger.info(`servidor conectado!`)
    return server
}
