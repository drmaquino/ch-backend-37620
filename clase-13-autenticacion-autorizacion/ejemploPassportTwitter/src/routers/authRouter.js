import { Router } from 'express'

import {
    failLoginController, successLoginController,
    failRegisterController, successRegisterController,
    registroController, loginController, logoutController
} from '../controllers/authController.js'

import { twitter, twitterCallback } from '../controllers/authController.js'
export const authRouter = new Router()

// registro
authRouter.post('/register', registroController)
authRouter.all('/successRegister', successRegisterController)
authRouter.all('/failRegister', failRegisterController)

// login
// authRouter.post('/login', loginController)
authRouter.all('/successLogin', successLoginController)
authRouter.all('/failLogin', failLoginController)

// logout
authRouter.get('/logout', logoutController)

// twitter
authRouter.get('/twitter', twitter)
authRouter.get('/twitter/callback', twitterCallback);