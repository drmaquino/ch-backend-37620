import { NODE_ENV } from '../../config.js';
import DaoUsuariosMemoria from './daoUsuariosMemoria.js';

let daoUsuarios
import DaoUsuariosMongoDb from './daoUsuariosMongoDb.js';

switch (NODE_ENV) {
    case 'production':
        const { mongodbClient } = await import('../mongodb.js')
        daoUsuarios = new DaoUsuariosMongoDb(mongodbClient.collection('usuarios'))
        break
    default:
        daoUsuarios = new DaoUsuariosMemoria()
}

export { daoUsuarios }