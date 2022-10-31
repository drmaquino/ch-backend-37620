const { servidor } = require('./servidor.js');

const server = servidor.listen(8080, () => {
    console.log(`conectado y escuchando en puerto ${server.address().port}`)
})
