import { createTransport } from 'nodemailer';

export default class NodemailerEmailSender {
    #emailClient
    #from

    constructor(configData) {
        this.#from = configData.auth.user
        this.#emailClient = createTransport(configData);
    }

    async enviar({ destinatario, asunto, mensaje, adjuntos = [] }) {

        const mailOptions = {
            from: this.#from,
            to: destinatario,
            subject: asunto ?? 'sin asunto',
            html: mensaje,
            attachments: adjuntos
        }

        try {
            return await this.#emailClient.sendMail(mailOptions)
        } catch (error) {
            const customError = new Error(error.message)
            customError.tipo = 'ERROR_MENSAJERIA'
            throw customError
        }
    }
}