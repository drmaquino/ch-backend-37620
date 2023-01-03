import { Router } from 'express';
import { postLogin, postLogout } from '../controllers/controllerAuth.js';

export const routerAuth = Router()

routerAuth.post('/login', postLogin)
routerAuth.post('/logout', postLogout)