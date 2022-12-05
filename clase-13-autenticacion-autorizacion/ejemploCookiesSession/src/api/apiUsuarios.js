import { crearUsuario } from '../models/usuariosModel.js';
import usuariosPersistencia from '../database/usuariosPersistencia.js';

export async function registrarUsuario(datosUsuario) {
    // aca falta verificar que no exista previamente alguien con ese nombre de usuario
    const usuario = crearUsuario(datosUsuario);
    await usuariosPersistencia.guardar(usuario);
    return usuario;
}

export async function obtenerTodos() {
    return await usuariosPersistencia.obtenerTodos()
} 