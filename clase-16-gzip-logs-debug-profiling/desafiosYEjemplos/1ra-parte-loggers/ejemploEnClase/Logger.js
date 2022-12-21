import { logLevel } from './config.js'

class Logger {
    constructor(nivel, soporte) {
        this.nivel = nivel
        if (soporte) {
            this.soporte = soporte
        } else {
            this.console = true
        }
    }

    log(dato, nivel) {
        if (nivel >= this.nivel) {
            if (this.console) {
                console.log(dato)
            } else {
                this.soporte.log(dato, nivel)
            }
        }
    }
}

import fs from 'fs'
// export const logger = new Logger(logLevel)
export const logger = new Logger(logLevel, {
    log(dato, nivel) {
        const line = `${Date.now()}(${nivel}): ${dato}
`
        fs.promises.appendFile('./log.log', line)
    }
})
