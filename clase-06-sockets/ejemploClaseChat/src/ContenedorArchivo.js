const fs = require('fs')

class ContenedorArchivo {
    constructor(ruta) {
        this.elementos = []
        this.ruta = ruta
    }

    async guardar(elemento) {
        this.elementos.push(elemento)
        const contenido = JSON.stringify(this.elementos, null, 4)
        await fs.promises.writeFile(this.ruta, contenido)
    }

    async recuperar() {
        const contenido = await fs.promises.readFile(this.ruta, 'utf-8')
        this.elementos = JSON.parse(contenido)
        return this.elementos
    }
}

module.exports = ContenedorArchivo