import passport from 'passport'

import { obtenerUsuarioPorId } from '../persistencia/usuarios.js'
import * as strategies from './passportStrategies.js'

passport.use('registro', strategies.registroLocal)
passport.use('login', strategies.loginLocal)

export const passportMiddleware = passport.initialize()

// opcional =====================================================

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    try {
        const user = obtenerUsuarioPorId(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})

export const passportSessionHandler = passport.session()
