import { Router } from 'express';
import { routerUsuarios } from './routerUsuarios.js';
import { routerAuth } from './routerAuth.js';

export const routerApi = Router()

routerApi.use('/usuarios', routerUsuarios)
routerApi.use('/auth', routerAuth)

