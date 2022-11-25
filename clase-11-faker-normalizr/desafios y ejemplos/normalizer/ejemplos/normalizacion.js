const persona__ = {
    nombre: 'marian',
    apellido: 'profe',
    edad: 36,
    dni: '12345678',
    cuil: '20-0',
    dia_nacimiento: '12',
    mes_nacimiento: '12',
    anio_nacimiento: '90',
    direccion_calle: 'rivadavia',
    direccion_numero: '1234 5C',
    direccion_piso_dpto: '5C',
}

// tabla personas

// nombre | apellido | edad | dni        |   cuil | dia_nacimiento | mes_nacimiento | anio_nacimiento | direccion_calle | direccion_numero | direccion_piso_dpto | 
// marian |  profe   | 36   |  12345678  |  20-0  |  12            |  12            |  90             |  rivadavia      |     1234         |         5C          | 

//-----------------------------------------------------------------------------------------

const persona = {
    dni: '12345678',
    nombreCompleto: { nombre: 'marian', apellido: 'profe', },
    edad: 36,
    cuil: '20-0',
    fechaNacimiento: { dia: '12', mes: '12', anio: '90', },
    direccion: { calle: 'rivadavia', numero: '1234 5C', piso_dpto: '5C', }
}

const nombreCompleto = {
    id: 'gsdf78g68sdf7gsf',
    nombre: 'marian',
    apellido: 'profe',
}

const fechaNacimiento = {
    id: '6345gsdfw1',
    dia: 12,
    mes: 12,
    anio: 90,
}

const direccion = {
    id: 'jh54gk63543kj',
    calle: 'rivadavia',
    numero: '1234',
    piso_dpto: '5C',
}

const persona_ = {
    dni: '12345678',
    nombreCompleto: 'gsdf78g68sdf7gsf',
    edad: 36,
    cuil: '20-0',
    fechaNacimiento: '6345gsdfw1',
    direccion: 'jh54gk63543kj',
}

// personas.nombreCompleto -> nombres.id

// tabla personas
// dni         | edad | cuil    | 
// '12345678'  |  36  |  '20-0' |

// tabla direcciones
// id            | calle        | numero | piso_dpto
// jh54gk63543kj | 'rivadavia'  | 1234   | '5C'

// nacimientos
// id         | dia | mes | anio
// 6345gsdfw1 | 12  | 12  | 90

