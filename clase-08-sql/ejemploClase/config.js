const DRIVER = 'mysql'
const USERNAME = 'root'
const PASSWORD = 'mysqlpassword'
const HOST = 'localhost'
const PORT = '3306'
const DB_NAME = 'coderhouse'

const cnxStr = `${DRIVER}://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}`

export const MYSQL_KNEX_CONFIG = {
    client: 'mysql2',
    connection: cnxStr
}

export const SQLITE3_KNEX_CONFIG = {
    client: 'sqlite3',
    connection: { filename: './db/sqlite3.db' }
}