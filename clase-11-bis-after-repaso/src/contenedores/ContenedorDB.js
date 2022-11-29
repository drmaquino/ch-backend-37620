export class ContenedorDB {
    constructor(cliente) {
        this.cliente = cliente;
    }
    async guardar(cosa) {
        await this.cliente.insertOne(cosa) // para mongodb
        // await this.cliente(this.tabla).insert(cosa) // para kenx
    }
}
