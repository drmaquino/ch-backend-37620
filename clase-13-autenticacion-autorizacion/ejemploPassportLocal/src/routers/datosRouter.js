import { Router } from 'express'

import { datosController } from '../controllers/datosController.js'
import { requiereAutenticacion } from '../middlewares/authorization.js'

export const datosRouter = Router()

datosRouter.get('/', requiereAutenticacion, datosController)