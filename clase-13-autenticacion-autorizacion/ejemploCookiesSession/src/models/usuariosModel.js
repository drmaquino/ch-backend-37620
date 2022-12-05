import { crearId } from './ids.js'
import { crearErrorDatos } from './errores.js'

export function crearUsuario({ id = crearId(), username, password, direccion }) {
    if (!username) {
        throw crearErrorDatos('falta el campo obligatorio "username"')
    }

    if (!password) {
        throw crearErrorDatos('falta el campo obligatorio "password"')
    }

    if (!direccion) {
        throw crearErrorDatos('falta el campo obligatorio "direccion"')
    }

    const usuario = {
        id,
        username,
        password,
        direccion,
    }

    return usuario
}
