const socket = io()

const btnEnviar = document.getElementById('btnEnviar')
btnEnviar.addEventListener('click', e => {
    e.preventDefault()
    const autor = document.getElementById('inputAutor').value
    const mensaje = document.getElementById('inputMensaje').value
    socket.emit('mensaje', { mensaje, autor })
})

socket.on('mensaje', mensaje => {
    console.log(mensaje)
})

socket.on('mensajes', mensajes => {
    console.log(mensajes)
    actualizarMensajes(mensajes)
})

function actualizarMensajes(mensajes) {
    const contenido = `<ul>${mensajes.map(m => `<li>${m.autor}: ${m.mensaje}</li>`).join('')}</ul>`
    document.getElementById('areaMensajes').innerHTML = contenido
}