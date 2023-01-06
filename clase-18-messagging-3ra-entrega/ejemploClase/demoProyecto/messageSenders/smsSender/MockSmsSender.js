export default class MockSmsSender {
    async enviar({ numero, texto }) {
        console.log(`sms enviado con exito a: ${numero} (${texto.slice(0, 8)}...)`)
    }
}