import express from 'express'

const app = express()

const PORT = parseInt(process.argv[2]) || 8080

app.get('/api/datos', (req, res) => {
    console.log(`port: ${PORT} -> Fyh: ${Date.now()}`)
    res.send(`Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
})

app.listen(PORT, err => {
    if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
})
