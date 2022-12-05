import passport from 'passport'

// export const registroController = passport.authenticate('registro', {
//     successRedirect: '/auth/successRegister',
//     failureRedirect: '/auth/failRegister',
// })

// export const loginController = passport.authenticate('login', {
//     successRedirect: '/auth/successLogin',
//     failureRedirect: '/auth/failLogin',
// })

export const registroController = passport.authenticate('registro', { failureRedirect: '/auth/failRegister' })

export const loginController = passport.authenticate('login', { failureRedirect: '/auth/failLogin' })

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