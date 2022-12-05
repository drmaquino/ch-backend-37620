import passport from 'passport'

// twitter ======================================================

export const twitter = passport.authenticate('twitter')

export const twitterCallback = passport.authenticate('twitter', {
    successRedirect: '/auth/successLogin',
    failureRedirect: '/auth/failLogin'
})

// local ========================================================

export const registroController = passport.authenticate('registro', {
    successRedirect: '/auth/successRegister',
    failureRedirect: '/auth/failRegister',
})

export const loginController = passport.authenticate('login', {
    successRedirect: '/auth/successLogin',
    failureRedirect: '/auth/failLogin',
})

// landings =====================================================

export function successRegisterController(req, res) {
    res.json(req.user)
    // res.sendFile('registroOk.html', { root: './views' })
}

export function failRegisterController(req, res) {
    res.status(400).json({ err: 'fallo el registro' })
}

export function successLoginController(req, res) {
    res.json({ msg: 'ok' })
}

export function failLoginController(req, res) {
    res.status(401).json({ err: 'fallo el login' })
}

// logout =======================================================

export function logoutController(req, res) {
    if (req.isAuthenticated()) {
        req.logout(err => {
            if (err) {
                res.sendStatus(200)
            } else {
                res.sendStatus(200)
            }
        })
    } else {
        res.sendStatus(200)
    }
}
