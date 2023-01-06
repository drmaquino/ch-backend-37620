import twilio from 'twilio'

const accountSid = 'AC429651f99e462fbfa8dcd49223746d53'
const authToken = '7f65b6e87033a18c93169a9ef92e788c'

const client = twilio(accountSid, authToken)

const options = {
    from: '+17262275157',
    to: '+541137783394',
    body: 'Hola soy un SMS desde Node.js para la comision 31825!',
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}
