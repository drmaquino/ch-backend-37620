export default class MockWhatsappSender {
    async enviar({ numero, texto }) {
        console.log(`wsp enviado con exito a: ${numero} (${texto.slice(0, 8)}...)`)
    }
}