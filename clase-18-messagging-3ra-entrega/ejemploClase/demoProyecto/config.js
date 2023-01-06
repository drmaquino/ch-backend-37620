import 'dotenv/config'

export const NODE_ENV = process.env.NODE_ENV ?? 'development'

export const nodemailerUser = process.env.MAIL_AUTH_USER
export const nodemailerPass = process.env.MAIL_AUTH_PASS

export const twilioAccountSid = process.env.TWILIO_ID
export const twilioAuthToken = process.env.TWILIO_TOKEN
export const twilioSmsPhoneNumber = process.env.TWILIO_SMS_NUMBER
export const twilioWhatsappPhoneNumber = process.env.TWILIO_WHATSAPP_NUMBER
export const smsAdmin = process.env.SMS_ADMIN