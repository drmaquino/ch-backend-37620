import { Router } from 'express'

import {
    failLoginController, successLoginController,
    failRegisterController, successRegisterController,
    registroController, loginController, logoutController
} from '../controllers/authController.js'

export const authRouter = Router()

// registro
authRouter.post('/register', registroController, successRegisterController)
authRouter.post('/failRegister', failRegisterController)
// authRouter.post('/successRegister', successRegisterController)

// login
authRouter.post('/login', loginController, successLoginController)
authRouter.post('/failLogin', failLoginController)
// authRouter.post('/successLogin', successLoginController)

// logout
authRouter.get('/logout', logoutController)
