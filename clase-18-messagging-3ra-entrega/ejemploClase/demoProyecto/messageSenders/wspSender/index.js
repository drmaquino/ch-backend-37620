import { NODE_ENV, twilioAccountSid, twilioAuthToken, twilioWhatsappPhoneNumber } from '../../config.js'
import MockWhatsappSender from './MockWspSender.js'

const credenciales = {
    numero: twilioWhatsappPhoneNumber,
    usuario: twilioAccountSid,
    contrasenia: twilioAuthToken
}

export let clienteWsp

switch (NODE_ENV) {
    case 'production':
        const { default: TwilioWhatsappSender } = await import('./TwilioWhatsappSender.js')
        clienteWsp = new TwilioWhatsappSender(credenciales)
        break
    default:
        clienteWsp = new MockWhatsappSender()
}
