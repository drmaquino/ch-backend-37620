import { daoUsuarios } from '../persistencia/usuarios/daoUsuarios.js'
import { crearId } from './Id.js'

class ServiceUsuarios {
    constructor(daoUsuarios) {
        this.daoUsuarios = daoUsuarios
    }

    async registrarUsuario({ usuario, contrasenia }) {
        if (!usuario || !contrasenia) {
            throw new Error('faltan datos para el registro')
        }
        const user = { id: crearId(), usuario, contrasenia }
        await this.daoUsuarios.guardarUsuario(user)
        return user
    }

    async obtenerUsuarios() {
        return await this.daoUsuarios.obtenerUsuarios()
    }
}

export const serviceUsuarios = new ServiceUsuarios(daoUsuarios)