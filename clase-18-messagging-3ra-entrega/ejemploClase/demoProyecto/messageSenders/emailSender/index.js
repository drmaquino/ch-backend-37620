import { NODE_ENV, nodemailerPass, nodemailerUser } from '../../config.js';
import MockEmailSender from './MockEmailSender.js';

const configData = {
    service: 'gmail',
    port: 587,
    auth: {
        user: nodemailerUser,
        pass: nodemailerPass
    }
}

export let clienteMail

switch (NODE_ENV) {
    case 'production':
        const { default: NodemailerEmailSender } = await import('./NodemailerEmailSender.js')
        clienteMail = new NodemailerEmailSender(configData)
        break
    default:
        clienteMail = new MockEmailSender()
}
