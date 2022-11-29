import { ContenedorMem } from '../../contenedores/ContenedorMem.js';
import { ContenedorArchivo } from '../../contenedores/ContenedorArchivo.js';
import { ContenedorDB } from '../../contenedores/ContenedorDB.js';
import clienteConectado from '../../mongoClient/cliente.js'

// export const dao = new ContenedorMem();
// export const dao = new ContenedorArchivo('./DB/personas.txt');
export const dao = new ContenedorDB(clienteConectado)
