const express = require('express')
const { Router } = express
const ProductosApi = require('./api/productos.js')

// router de productos

const productosApi = new ProductosApi()

const productosRouter = new Router()

productosRouter.use(express.json())
productosRouter.use(express.urlencoded({ extended: true }))

productosRouter.get('/', (req, res) => {
    res.json(productosApi.listarAll())
})

productosRouter.get('/:id', (req, res) => {
    res.json(productosApi.listar(req.params.id))
})

productosRouter.post('/', (req, res) => {
    res.json(productosApi.guardar(req.body))
})

productosRouter.put('/:id', (req, res) => {
    res.json(productosApi.actualizar(req.body, req.params.id))
})

productosRouter.delete('/:id', (req, res) => {
    res.json(productosApi.borrar(req.params.id))
})

// servidor

const app = express()
app.use(express.static('public'))
app.use('/api/productos', productosRouter)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
