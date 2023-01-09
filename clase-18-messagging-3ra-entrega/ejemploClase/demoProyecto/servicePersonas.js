import Persona from './Persona.js'
// import { clienteMail } from './messageSenders/emailSender/index.js'
// import { clienteSms } from './messageSenders/smsSender/index.js'
import { clienteWsp } from './messageSenders/wspSender/index.js'
import { smsAdmin } from './config.js'


export async function afiliarPersona(datosPersona) {

    const persona = new Persona(datosPersona)

    // guardar persona en algun lado!

    const resultadoAfiliacion = {
        resultado: 'exitoso',
        fecha: Date.now(),
        datosAfiliacion: persona
    }

    // await clienteMail.enviar({ asunto: 'registro exitoso', destinatario: persona.direccionMail, mensaje: 'su registro fue un éxito! muchas gracias!' })
    // await clienteSms.enviar({ numero: smsAdmin, texto: `nueva afiliacion: ${persona.nombre}` })
    await clienteWsp.enviar({ numero: persona.whatsapp, texto: `afiliacion: exitosa!` })

    return resultadoAfiliacion
}