const { Router } = require('express')
const productosController = require('./productosController.js')

const productosRouter = Router()

productosRouter.get('/', productosController.get)
productosRouter.get('/:id', productosController.getById)
productosRouter.post('/', productosController.post)
productosRouter.put('/:id', productosController.put)
productosRouter.delete('/:id', productosController.delete)

exports.productosRouter = productosRouter