import { NODE_ENV, twilioAccountSid, twilioAuthToken, twilioSmsPhoneNumber } from '../../config.js'
import MockSmsSender from './MockSmsSender.js'

const credenciales = {
    numero: twilioSmsPhoneNumber,
    usuario: twilioAccountSid,
    contrasenia: twilioAuthToken
}

export let clienteSms

switch (NODE_ENV) {
    case 'production':
        const { default: TwilioSmsSender } = await import('./TwilioSmsSender.js')
        clienteSms = new TwilioSmsSender(credenciales)
        break
    default:
        clienteSms = new MockSmsSender()
}
