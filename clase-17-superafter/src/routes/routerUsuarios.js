import { Router } from 'express';
import { getUsuarios, postUsuarios } from '../controllers/controllerUsuarios.js';

export const routerUsuarios = Router()

routerUsuarios.get('/', getUsuarios)
routerUsuarios.post('/', postUsuarios)