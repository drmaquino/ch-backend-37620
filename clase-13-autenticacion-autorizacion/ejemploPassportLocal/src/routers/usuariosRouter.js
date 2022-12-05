import { Router } from 'express'
import { getUsuariosController } from '../controllers/usuariosController.js'

export const usuariosRouter = Router()

usuariosRouter.get('/', getUsuariosController)