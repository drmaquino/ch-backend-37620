const { notify } = require('./aws.js')
const productosDao = require('./productosDao.js')
const { randomUUID } = require('crypto')

exports.get = async (req, res) => {
    try {
        const productos = await productosDao.read()
        res.json(productos)
    } catch (error) {
        console.error('Ocurrió un error: ', error)
        res.sendStatus(500)
    }
}

exports.getById = async (req, res) => {
    try {
        const producto = await productosDao.read(req.params.id)
        res.json(producto)
    } catch (error) {
        console.error('Ocurrió un error: ', error)
        res.sendStatus(500)
    }
}

exports.post = async (req, res) => {
    const newProduct = req.body
    newProduct.productId = randomUUID()

    try {
        await productosDao.create(newProduct)
        console.log('se guardó')
    } catch (error) {
        console.error('Ocurrió un error: ', error)
        return res.sendStatus(500)
    }

    try {
        await notify({
            subject: 'nuevo producto',
            message: `nuevo producto agregado! ${JSON.stringify(newProduct)}`,
        })
        console.log('se notificó!')
    } catch (error) {
        console.error('Ocurrió un error al notificar! ', error)
    }

    res.status(201).json(newProduct)
}

exports.put = async (req, res) => {
    try {
        const producto = {
            ...req.body,
            productId: req.params.id,
        }
        await productosDao.update(producto)
        res.json(producto)
    } catch (error) {
        console.error('Ocurrió un error: ', error)
        res.sendStatus(500)
    }
}

exports.delete = async (req, res) => {
    try {
        const borrado = await productosDao.delete(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        console.error('Ocurrió un error: ', error)
        res.sendStatus(500)
    }
}
