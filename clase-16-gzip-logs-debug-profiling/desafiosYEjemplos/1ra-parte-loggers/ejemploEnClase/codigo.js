import { logger } from './Logger.js'

function bla() {
    logger.log('ejecutando bla', 1)
    logger.log('lo que sea', 5)
    logger.log('muy importante!', 10)

    return 'bla'
}

bla()