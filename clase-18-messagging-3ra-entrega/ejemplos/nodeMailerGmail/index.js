import { createTransport } from 'nodemailer';

const clienteNodemailer = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'mariano.aquino@gmail.com',
        pass: 'glydmpdaniytuscq'
    }
});

const TEST_MAIL = 'colt.erdman@ethereal.email'

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba con archivo adjunto desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
    attachments: [
        {
            path: './nodemailer.png'
        }
    ]
}

try {
    const info = await clienteNodemailer.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(error)
}
