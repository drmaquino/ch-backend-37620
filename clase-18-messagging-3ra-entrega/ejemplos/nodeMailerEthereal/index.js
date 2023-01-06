import { createTransport } from 'nodemailer';

const clienteNodemailer = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'colt.erdman@ethereal.email',
        pass: 'NCv3PgRMN62HhdknEF'
    }
});

const TEST_MAIL = 'cuentaBLABLA@blabla.com'

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: 'Mail de prueba desde Node.js',
    // text: 'texto plano. si hay html se toma solo el html',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

try {
    const info = await clienteNodemailer.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(error)
}
