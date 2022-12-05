import { Strategy } from 'passport-local';
import { registrarUsuario } from '../api/usuariosApi.js';
import { autenticar } from '../api/authApi.js';

export const registroLocal = new Strategy({
    passReqToCallback: true,
    // usernameField: 'email',
    // passwordField: 'contrasenia',
},
    (req, username, password, done) => {
        try {
            const usuario = registrarUsuario(req.body);
            done(null, usuario);
        } catch (error) {
            done(null, false, error);
        }
    });

export const loginLocal = new Strategy(
    (username, password, done) => {
        try {
            const usuario = autenticar(username, password);
            done(null, usuario);
        } catch (error) {
            done(null, false, error);
        }
    });
