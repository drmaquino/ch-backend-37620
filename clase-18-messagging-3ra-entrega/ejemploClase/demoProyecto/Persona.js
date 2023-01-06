export default class Persona {
    constructor(datos) {
        this.setData(datos)
    }

    setData({ nombre, apellido, direccionMail, whatsapp }) {
        if (!nombre) throw new Error('falta nombre')
        if (!apellido) throw new Error('falta apellido')
        if (!direccionMail) throw new Error('falta direccion')
        if (!whatsapp) throw new Error('falta whatsapp')

        this.nombre = nombre
        this.apellido = apellido
        this.direccionMail = direccionMail
        this.whatsapp = whatsapp
    }
}
