import assert from 'assert'
import { AdministradorDeParticipacion } from '../src/AdministradorDeParticipacion.js'

import { faker } from '@faker-js/faker'
faker.locale = 'es'

function siAgregoUnParticipanteConDniNuloLaOperacionFalla() {
    const admin = new AdministradorDeParticipacion()
    let cantErrores = 0
    try { admin.agregarParticipante() } catch (error) { cantErrores++ }
    try { admin.agregarParticipante(null) } catch (error) { cantErrores++ }
    try { admin.agregarParticipante(undefined) } catch (error) { cantErrores++ }
    try { admin.agregarParticipante('') } catch (error) { cantErrores++ }
    assert.strictEqual(cantErrores, 4)
}

function siAgregoUnParticipanteConDniValidoArrancaConCeroParticipaciones() {
    const admin = new AdministradorDeParticipacion()
    const dniValido = faker.random.numeric(8)
    const participante = admin.agregarParticipante(dniValido)
    assert.strictEqual(participante.dni, dniValido)
    assert.strictEqual(participante.participaciones, 0)
}

function siCargoParticipacionesAUnParticipanteInexistenteLaOperacionFalla() {
    const admin = new AdministradorDeParticipacion()
    let fallo = false
    try {
        admin.registrarParticipacion(faker.random.numeric(8))
    } catch (error) {
        fallo = true
    }
    assert.ok(fallo)
}

function siCargoParticipacionesAUnParticipanteExistenteLeSumaUnaParticipacion() {
    const admin = new AdministradorDeParticipacion()
    const dniValido = faker.random.numeric(8)
    admin.agregarParticipante(dniValido)
    admin.registrarParticipacion(dniValido)
    assert.strictEqual(admin.obtenerParticipaciones(dniValido), 1)
}

siAgregoUnParticipanteConDniNuloLaOperacionFalla()
siAgregoUnParticipanteConDniValidoArrancaConCeroParticipaciones()
siCargoParticipacionesAUnParticipanteInexistenteLaOperacionFalla()
siCargoParticipacionesAUnParticipanteExistenteLeSumaUnaParticipacion()
