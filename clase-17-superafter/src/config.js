import { cpus } from 'os'

export const MODE = process.env.MODE ?? 'FORK'
export const PORT = parseInt(process.env.PORT ?? '8080')
export const CANT_CPUS = cpus().length
export const NODE_ENV = process.env.NODE_ENV ?? 'development'
export const LOG_LEVEL = process.env.LOG_LEVEL ?? (NODE_ENV === 'production' ? 'info' : 'debug')
export const MONGODB_CNX_STR = process.env.MONGODB_CNX_STR ?? 'mongodb://root:mongopassword@localhost/coderhouse?authSource=admin'