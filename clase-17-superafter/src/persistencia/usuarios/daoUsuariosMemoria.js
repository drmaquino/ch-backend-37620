export default class DaoUsuariosMemoria {
    constructor() {
        this.usuarios = []
    }

    obtenerUsuarios() {
        return this.usuarios
    }


    guardarUsuario(usuario) {
        this.usuarios.push(usuario)
    }
}
