console.log('Hola mundo');

// comentarios

// TIPOS DE VARIABLE

// Definición de una variable
//ejemplos:
var estatura = 175;
var numero = 3;

console.log(numero)
console.log(estatura)


// 1) String (cadena)
var nombreUsuario = 'Roberto Cantoral';  // <-- string o cadena
// es equivalente a "Roberto Cantoral"

// 2) Number (numero)
var edad = 30; // <-- number o número


// 3) Array (arreglo)
// El siguiente es un tipo de dato llamado arreglo o array
var listaDeNombres = ['Juan', 'Pedro', 'Judas']
listaDeNombres[0] // --> Juan
listaDeNombres[1] // --> Pedro
listaDeNombres[2] // --> Judas


var arrayPrueba = [42, 'Roberto', 12, [1,2,3,4]]

// 4) Boolean (booleano)
// Es un valor que puede ser true o false

var estaRegistrado = true; // su valor solo puede ser true o false 

// 5) Object (objeto)

// Un objeto tiene la estructura de {key: value} :
var obj = {key1: value1, key2: value2, key3: value3}

var usuario = {nombre: 'Jacob', edad: 24, email: 'prueba@prueba.com', estatura: 180}
usuario['edad'] // es equivalente a usuario.edad
usuario['email'] // usuario.email

console.log(usuario.edad)

/////////////////////////////////////

// Cómo preguntar a una variable qué tipo de dato es:

var edad = 30;
console.log(typeof(edad))

var nombre = 'Juan'
console.log(typeof(nombre))

var arregloEdades = [23,25,50,12]
console.log(typeof(arregloEdades))


var estaRegistrado = true
console.log(typeof(estaRegistrado))

var usuario = {nombre: 'Jacob', edad: 24, email: 'prueba@prueba.com', estatura: 180}
console.log(typeof(usuario))

/////////////////

// Por qué un arreglo es un objeto también
var listaDeNombres = ['Juan', 'Pedro', 'Judas']

var listaDeNombres = {0: 'Juan', 1: 'Pedro', 2: 'Judas'}
listaDeNombres[0]
listaDeNombres[1]



//////////////////////////////

// NUMBER

var a = 4;
var b = 3;

// se pueden hacer operaciones básicas
console.log(a*b)
console.log(a+b)
console.log(a/b)
console.log(b-a)


b ** a // quiere decir b elevado a la a 
console.log(b**a)


console.log(Math.abs(4))
console.log(Math.abs(-10))

// ceil() - ceiling(techo) floor() (piso)

Math.floor(11.233) // --> 11
Math.ceil(11.233) // --> 12

console.log(Math.floor(11.233))
console.log(Math.ceil(11.233))

// 

console.log(Math.max(...[23,2,44,35]))
console.log(Math.min(23,2,44,35))

var arreglo = [2,5,21,12,98,5]
console.log(Math.max(...arreglo))

// Operación de numeros: %
console.log(20%5)  // divide 20/5 y regresa el residuo

// 8%3 -> 2
// 111 111 11

/////////////////////////////

// STRINGS

var word = 'azul'
console.log(word.toUpperCase())

// length
console.log(word.length)

// toUpperCase()
word.toUpperCase() // --> AZUL

// toLowerCase()
var str = 'Pepe Pecas Pica Papas'
console.log(str.toLowerCase())
str.toLowerCase() // pepe pecas pica papas
