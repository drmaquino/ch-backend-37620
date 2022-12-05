import passport from 'passport'

// import { obtenerUsuarioPorId } from '../persistencia/usuarios.js'
// import * as strategies from './passportStrategies.js'

import { loginTwitter } from './passportTwitterStrategies.js'

// passport.use('registro', strategies.registroLocal)
// passport.use('login', strategies.loginLocal)

passport.use('twitter', loginTwitter)

export const passportMiddleware = passport.initialize()

// opcional =====================================================

// passport.serializeUser((user, done) => {
//     done(null, user.id)
// })

// passport.deserializeUser((id, done) => {
//     try {
//         const user = obtenerUsuarioPorId(id)
//         done(null, user)
//     } catch (error) {
//         done(error)
//     }
// })

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

export const passportSessionHandler = passport.session()
