import pino from 'pino'
import { LOG_LEVEL } from '../config.js'

export const logger = pino()
logger.level = LOG_LEVEL

export function loggerMiddleware(req, res, next) {
    req['logger'] = logger;
    next()
}
