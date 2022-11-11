
// const existeTablaPersonas = await knexCli.schema.hasTable('personas')
// if (!existeTablaPersonas) {
//     await knexCli.schema.createTable('personas', table => {
//         table.increments('id'),
//             table.string('nombre'),
//             table.integer('edad')
//     })
// }


export default class ClienteSQL {
    constructor(cli) {
        this.knexCli = cli
    }

    async guardar(tabla, cosas) {
        return await this.knexCli.insert(cosas).into(tabla)
    }

    async buscar({ columnas = '*', tabla, condicion = {} }) {
        return await this.knexCli.select(columnas).from(tabla).where(condicion)
    }

    async buscarPorId(columnas, tabla, id) {
        return await this.knexCli.select(columnas).from(tabla).where('id', id).first()
    }

    async actualizar(tabla, criterio, actualizacion) {
        return await this.knexCli.from(tabla).where(criterio).update(actualizacion)
    }

    async borrarPorId(tabla, id) {
        return await this.knexCli.delete().from(tabla).where('id', id)
    }
}

// CRUD
// create

// await knexCli.insert({ nombre: 'pepe', edad: 32 }).into('personas')
// await knexCli.insert([
//     { nombre: 'gloria', edad: 38 },
//     { nombre: 'susana', edad: 30 }
// ]).into('personas')

// read
// const personas = await knexCli.select().from('personas')
// // const personas = await knexCli.select('nombre').from('personas')
// // const personas = await knexCli.select('nombre').from('personas').whereBetween('edad', [31, 37])
// console.log(personas)

// update
// await knexCli.from('personas').where({ nombre: 'pepe' }).update({ edad: 33 })
// await knexCli.from('personas').whereBetween('edad', [34, 40]).update({ edad: 50 })

// await knexCli.delete().from('personas').where({ nombre: 'pepe' })

// const personasPostUpate = await knexCli.select().from('personas')
// console.log(personasPostUpate)

// delete


// await knexCli.destroy()

