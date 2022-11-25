export class AdministradorDeParticipacion {
    constructor() {
        this.participantes = []
    }

    registrarParticipacion(dni) {
        const buscado = this.participantes.find(p => p.dni === dni)
        if (!buscado) {
            throw new Error()
        }
        buscado.participaciones++
    }

    agregarParticipante(dni) {
        if (!dni) throw new Error()
        const participante = {
            dni,
            participaciones: 0
        }
        this.participantes.push(participante)
        return participante
    }

    obtenerParticipaciones(dni) {
        const buscado = this.participantes.find(p => p.dni === dni)
        if (!buscado) {
            throw new Error()
        }
        return buscado.participaciones
    }
}
