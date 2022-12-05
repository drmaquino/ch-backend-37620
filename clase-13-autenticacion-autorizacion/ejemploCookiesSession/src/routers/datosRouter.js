import { Router } from 'express'
import { requiereAutenticacion } from '../middleware/authorization.js'
import datosController from '../controllers/datosController.js'

const datosRouter = Router()

datosRouter.get('/', requiereAutenticacion, datosController.get)

export default datosRouter