export function postLogin(req, res, next) {
    req.logger.debug({ path: '/api/auth/login', method: 'POST' })
    try {
        res.sendStatus(200)
    } catch (error) {
        next(error)
    }
}

export function postLogout(req, res, next) {
    req.logger.debug({ path: '/api/auth/logout', method: 'POST' })
    try {
        res.sendStatus(200)
    } catch (error) {
        next(error)
    }
}