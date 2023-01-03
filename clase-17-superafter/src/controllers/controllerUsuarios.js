import { serviceUsuarios } from '../service/serviceUsuarios.js'

export async function getUsuarios(req, res, next) {
    req.logger.debug({ path: '/api/usuarios', method: 'GET' })
    try {
        const usuarios = await serviceUsuarios.obtenerUsuarios()
        res.json(usuarios)
    } catch (error) {
        next(error)
    }
}

export async function postUsuarios(req, res, next) {
    req.logger.debug({ path: '/api/usuarios', method: 'POST' })
    try {
        const usuario = await serviceUsuarios.registrarUsuario(req.body)
        res.json(usuario)
    } catch (error) {
        next(error)
    }
}