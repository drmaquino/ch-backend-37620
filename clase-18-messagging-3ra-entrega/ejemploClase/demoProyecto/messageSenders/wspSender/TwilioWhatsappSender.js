import TwilioSender from '../TwilioSender.js';

export default class TwilioWhatsappSender extends TwilioSender {
    constructor(options) {
        super({ ...options, numero: 'whatsapp:' + options.numero })
    }

    async enviar({ texto, numero: numOriginal }) {
        return super.enviar({ texto, numero: 'whatsapp:' + numOriginal })
    }
}

