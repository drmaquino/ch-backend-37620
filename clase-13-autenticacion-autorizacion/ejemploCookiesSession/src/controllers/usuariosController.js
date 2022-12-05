import { registrarUsuario, obtenerTodos } from '../api/apiUsuarios.js'

const usuariosController = {
    post: async (req, res, next) => {
        try {
            const usuario = await registrarUsuario(req.body)
            res.status(201).json(usuario)
        } catch (error) {
            next(error)
        }
    },

    get: async (req, res, next) => {
        try {
            const usuarios = await obtenerTodos()
            res.json(usuarios)
        } catch (error) {
            next(error)
        }
    }
}

export default usuariosController