// @ts-nocheck
const express = require('express')

const app = express()

app.use((req, res, next) => {
    const path = './fotos' + req.url
    console.log(path)
    // res.sendFile(path, { root: process.cwd() })
    next()
})

app.use(express.static('./fotos'))

// Create  --> POST
// Read    --> GET
// Update  --> PUT
// Delete  --> DELETE

const restApiRouter = new express.Router()

restApiRouter.get('/', (req, res, next) => {
    try {
        res.send('OK!')
    } catch (error) {
        next(error)
    }
})

restApiRouter.post('/', (req, res, next) => {
    try {
        res.send('OK!')
    } catch (error) {
        next(error)
    }
})

restApiRouter.put('/', (req, res, next) => {
    try {
        res.send('OK!')
    } catch (error) {
        next(error)
    }
})

restApiRouter.delete('/', (req, res, next) => {
    try {
        res.send('OK!')
    } catch (error) {
        next(error)
    }
})

app.use('/api/recurso', restApiRouter)

function manejadorDeErrores(error, req, res, next) {
    switch (error.message) {
        default:
            res.status(500)
    }
    res.json({ errorMsg: error.message })
}

app.use(manejadorDeErrores)

app.listen(8080)