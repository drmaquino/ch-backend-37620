import knex from 'knex'
import { MYSQL_KNEX_CONFIG, SQLITE3_KNEX_CONFIG } from './config.js'
import ClienteSQL from './ClienteSql.js';

// const knexCli = knex(MYSQL_KNEX_CONFIG)
const knexCli = knex(SQLITE3_KNEX_CONFIG)

const existeTablaPersonas = await knexCli.schema.hasTable('personas')
if (!existeTablaPersonas) {
    await knexCli.schema.createTable('personas', table => {
        table.increments('id'),
            table.string('nombre'),
            table.integer('edad')
    })
}

const cli = new ClienteSQL(knexCli)

await cli.guardar('personas', [{ nombre: 'a', edad: 1 }, { nombre: 'b', edad: 2 }])

console.log(await cli.buscar({ tabla: 'personas' }))