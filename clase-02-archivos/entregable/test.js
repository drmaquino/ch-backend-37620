const Contenedor = require('./Contenedor.js')

const p1 = {
  title: "Escuadra",
  price: 123.45,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
}

const p2 = {
  title: "Calculadora",
  price: 234.56,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
}

const p3 = {
  title: "Globo Terráqueo",
  price: 345.67,
  thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
}

async function main() {

  const prods = new Contenedor('./productos.txt')

  console.log('muestro todo')
  let objs = await prods.getAll();
  console.log(objs);

  console.log('guardo p1')
  let idP1 = await prods.save(p1);
  console.log('id de p1: ', idP1);

  console.log('guardo p2')
  let idP2 = await prods.save(p2);
  console.log('id de p2: ', idP2);

  console.log('muestro todo')
  objs = await prods.getAll();
  console.log(objs);

  console.log('busco p1 por id')
  const res = await prods.getById(idP1);
  console.log('resultado: ', res)

  console.log('busco por id inexistente')
  const noexiste = await prods.getById(999);
  console.log('resultado: ', noexiste)

  console.log('borro p1 por id')
  await prods.deleteById(idP1);

  console.log('muestro todo')
  objs = await prods.getAll();
  console.log(objs);

  console.log('borro todo')
  await prods.deleteAll();

  console.log('muestro todo')
  objs = await prods.getAll();
  console.log(objs);
}

main()