// const dicc = new Map()
// dicc.set('hola', 'mundo')
// dicc.get('hola')
// dicc.delete('hola')

// const obj = { hola: 'mundo' }
// Object.keys(obj)

// Array:
// es una estructura lineal, ordenada.     [ 1 , 2, 3, 4, 5, 6, 7 ]
// interfaz:
// push() // agrega un elem al final
// pop() // saca el ultimo elem
// shift() // saca el primer elem
// [] // devuelve el elem en la posicion dada

// Diccionario (Map)
// estructura desordenada.   {  . . .. . .. . .. .   . ...  . .  } almacena pares clave-valor
// set(clave, valor) // guarda un valor, asignandole una clave dada para luego recuperarlo con esa clave
// get(clave) // devuelve el valor asociado a esa clave

// (similar al localStorage)

// Array asociativo === Objeto literal === { }
// estructura desordenada.   {  . . .. . .. . .. .   . ...  . .  } almacena pares clave-valor
// [clave] = valor // guarda un valor, asignandole una clave dada para luego recuperarlo con esa clave
// [clave] // devuelve el valor asociado a esa clave

// los objetos literales, ademas, responden a la sintaxis '.'
// obj[clave]  ===   obj.clave
// obj[clave] = valor  ===   obj.clave = valor

// excepciones:

// obj['hola mundo']   // valido!
// obj.hola mundo   // error!

// obj['cosas-raras']   // valido!
// obj.cosas-raras   // error!