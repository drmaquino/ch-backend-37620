import { Router } from 'express';
import { dao as daoPersonas } from './daos/personas/index.js';
import { dao as daoAutos } from './daos/autos/index.js'

export const router = Router();

router.post('/', async (req, res) => {
    const persona = await daoPersonas.buscar(req.body.dniPersona)
    if (!persona) {
        res.send('no se puede cargar un auto, la persona no existe')
    }
    await daoAutos.guardar(req.body.datosAuto)
});
