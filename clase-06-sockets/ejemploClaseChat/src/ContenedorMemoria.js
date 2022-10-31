class ContenedorMemoria {
    constructor() {
        this.elementos = []
    }

    guardar(elemento) {
        this.elementos.push(elemento)
    }

    recuperar() {
        return this.elementos
    }
}

module.exports = ContenedorMemoria