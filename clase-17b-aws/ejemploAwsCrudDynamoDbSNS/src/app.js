const express = require('express')
const { productosRouter } = require("./productosRouter.js")

const app = express()

app.use(express.json())

app.get('/', (req, res) => { res.send('test api') })

app.use('/api/productos', productosRouter)

const port = process.env.PORT || 8080
const server = app.listen(port, () => {
  console.log(`Escuchando en puerto ${server.address().port}`)
})
server.on('error', error => { console.log(error) })
