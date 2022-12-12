import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path:
    process.argv[2] === 'colores'
      ? 'colores.env'
      : 'byn.env'
})

// dotenv.config({
//   path:
//     process.env.NODE_ENV === 'prod'
//     ? 'colores.env'
//     : 'byn.env'
// })


// dotenv.config()

const fondo = process.env.FONDO
const frente = process.env.FRENTE

console.log({
  fondo,
  frente,
})
