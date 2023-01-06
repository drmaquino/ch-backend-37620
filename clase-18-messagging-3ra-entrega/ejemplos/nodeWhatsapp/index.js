import twilio from 'twilio'

const accountSid = 'AC429651f99e462fbfa8dcd49223746d53'
const authToken = '5e5a30332db84a38fb217d867bcf9682'

const client = twilio(accountSid, authToken)

const mensaje = {
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5491137783394',
    body: 'Hola soy un WSP desde Node.js usando Twilio!',
}

try {
    const message = await client.messages.create(mensaje)
    console.log(message)
} catch (error) {
    console.log(error)
}
