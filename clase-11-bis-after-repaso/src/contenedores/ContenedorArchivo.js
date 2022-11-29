import fs from 'fs'

export class ContenedorArchivo {
    constructor(ruta) {
        this.cosas = [];
        this.ruta = ruta;
    }
    guardar(cosa) {
        // fs.readFile....
        this.cosas.push(cosa);
        // fs.writeFile....
    }
}
