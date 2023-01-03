export default class DaoUsuariosMongoDb {
    constructor(usuariosDb) {
        this.usuariosDb = usuariosDb
    }

    async obtenerUsuarios() {
        return await this.usuariosDb.find().toArray()
    }


    async guardarUsuario(usuario) {
        await this.usuariosDb.insertOne(usuario)
    }
}
