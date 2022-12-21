import express from 'express'

const app = express()

const URL = 'http://localhost:'

let current = 0
const servidores = [
    { id: 1, puerto: 8081 },
    { id: 1, puerto: 8082 },
    { id: 1, puerto: 8083 },
    { id: 1, puerto: 8084 },
]

const PORT = parseInt(process.argv[2]) || 8080

app.use((req, res, next) => {
    fetch(URL + servidores[current].puerto)
})

// app.all('*', (req, res) => {
//     console.log(`port: ${PORT} -> Fyh: ${Date.now()}`)
//     res.send(`Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
// })

app.listen(PORT, err => {
    if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
})
