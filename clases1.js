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
console.log(word.length) // --> 4 (la longitud de word)

// toUpperCase()
word.toUpperCase() // --> AZUL

// toLowerCase()
var str = 'Pepe Pecas Pica Papas'
console.log(str.toLowerCase())
str.toLowerCase() // pepe pecas pica papas

// Con + se concatena (pega strings)
var str1 = 'Jose es '
var str2 = 'alto'

console.log(str1 + str2)


// slice()
var str = 'Juan come pastel'
console.log(str.slice(0,3)) // --> 'Jua'
console.log(str.slice(2,5))




// ARRAYS

// Cómo acceder a un elemento de un arreglo
var arr = ['Jose', 11, 'Luis', 14, 2, 5]
arr[2] // --> 'Luis'
arr[0] // --> 'Jose'

console.log(arr[2])
console.log(arr[0])


// length - calcula la longitud del arreglo
var arr = ['Jose', 11, 'Luis', 14, 2, 5]
arr.length // --> 6
console.log(arr.length)

// "+" toma dos arreglos, los junta y hace todo un string 

var arr1 = ['Jose', 11, 'Luis', 14, 2, 5]
var arr2 = ['manzana', 'pera', 2]


arr1 + arr2 // --> Jose,11,Luis,14,2,5manzana,pera,2   y es un string
console.log(arr1+arr2)

// .concat() es para concatenar arreglos
var arr1 = ['Jose', 11, 'Luis', 14, 2, 5]
var arr2 = ['manzana', 'pera', 2]

arr1.concat(arr2) // --> ['Jose', 11, 'Luis', 14, 2, 5, 'manzana', 'pera', 2]
arr2.concat(arr1) // --> ['manzana', 'pera', 2, 'Jose', 11, 'Luis', 14, 2, 5]

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))


// .slice() funciona igual para arrays que para strings

var arr = ['Jose', 11, 'Luis', 14, 2, 'pera']
arr.slice(0,5) // --> ['Jose', 11, 'Luis', 14, 2]
arr.slice(1,4) // --> [11, 'Luis', 14]
console.log(arr.slice(0,5))
console.log(arr.slice(1,4))



// .indexOf() te dice que índice tiene un elemento del arreglo
var arr = ['Jose', 11, 'Luis', 14, 2, 'pera']
arr.indexOf('Luis') // --> 2
console.log(arr.indexOf(11)) // -->1
console.log(arr.indexOf('pera')) // --> 5

// si un valor se repite, arroja el índice de la primera vez que aparece
var arr = ['Jose', 11, 'Luis', 14, 2, 'pera', 'Jose']
console.log(arr.indexOf('Jose'))

/////////////////////////////

// OPERADORES BOOLEANOS

// un condicional tiene esta estructura

// if (un booleano) {
//     // lo que quieres que se ejecute si el booleano es true
// }

// Los signos de igualdad o desigualdad

// Operacion de igualdad ("==" o "===")

a == b // --> regresa un boolean (true o false) 

var a = 5;
var b = 6;

var areEqual = (a == b);
console.log(areEqual)

var areNotEqual = (a != b);
console.log(areNotEqual)


// ==, !=, ===, !== <--- notación

var a = 7
var b = '7'

var areEqual = (a === b)
console.log(areEqual)


// operadores de desigualdad

var a = 7
var b = 8

// "<" menor que
var compare = (a < b)
console.log(compare)

// ">" menor que
var compare = (a > b)
console.log(compare)

// "<=" menor o igual que
var a = 7
var b = 7
var compare = (a <= b)
console.log(compare)

// ">=" mayor o igual que
var compare = (a >= b)
console.log(compare)


// Operadores condicionales (&& y ||)

// operador &&

var a = 7
var b = 8
var c = 2
var d = 1

var comparacion = ((a<b) && (c>d))
console.log(comparacion)

// tabla de verdad de && (operador "y")
// true && true --> true
// true && false --> false
// false && true --> false
// false && false --> false


// tabla de verdad de || (operador "o")
// true || true --> true
// true || false --> true
// false || true --> true
// false || false --> false