export default class MockEmailSender {
    async enviar({ destinatario, asunto, mensaje, adjuntos = [] }) {
        console.log(`mail enviado con exito a: ${destinatario} (${asunto.slice(0, 8)}...: ${mensaje.slice(0, 8)}...)`)
    }
}