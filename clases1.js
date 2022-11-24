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

// ">" mayor que
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


// ejemplo del operador ||
// Con este operador podemos definir ">="
(x >= y) //  es lo mismo que (x>y || x===y) 

var x = 5
var y = 10

var comparacion = (x<y || y>0) // --> true

(x<y && y<0) // --> (true && false) --> false

((x===y || x>0) && (x>2 && y<0)) // --> ((false || true) && (true && false))
// --> (true && false) --> false


(((x>=y) && y<10) || ((x-y<0 && y>2) || (x>=5 && y<0)))
// ((false && false) || ((true && true) || (true && false)))
// (false || (true || false))
// (false || true) 
// true

// Un operador booleano, solo se aplica a dos valores, usamos paréntesis para aplicarlo a mas de 2
// bool && (bool || bool) !== (bool || bool) || bool

var x = 5
var y = 10
console.log(((x>=y) && y<10) || ((x-y<0 && y>2) || (x>=5 && y<0)))

//////
// Notacion de condicionales

var x = -2;
var y = 12

if (x>0) {
    console.log(x)
} else {
    console.log('negativo')
}

var x = 20

if (5>x>0) {
    console.log(x)
} else if (10>x>5) {
    console.log('mayor que 5')
} else if (x>10) {
    console.log('mayor que 10')
} else {
    console.log('negativo')
}


var x = 20;


switch(x) {
    case 0<x<5:
        console.log(x);
    case 5<x<10:
        console.log('mayor que 5');
    case x>10:
        console.log('mayor que 10');
    default:
        console.log('negativo o 5');
}


// Notaciones para definir varialbes

var number = 16;

let number = 16;
const number = 16;


var x = 11

if (x>10) {
    // let y = 20;
    var y = 20;
}

console.log(y)


let x = 16;
const y = 20;

x = x*2
y = y*2
console.log(x)
// console.log(y)  <-- error
console.log(y*2)



let str1 = 'hola';
const str2 = 'hola!';

str1 = str1 + ' mundo'
// str2 = str2 + 'hello' <-- errro


console.log(str1)
console.log(str2+str1)
console.log(str2+str2)


///////////////////////////////////

// LOOPS

// i++ es lo mismo que i = i+1

for (let i=0; i<6; i++) {
    console.log(i)
}


// Imprimir los numeros menores que 10 que sean pares

let number = 131;
// 12%2 --> 0
// 11%2 --> 1

console.log(number%2)

// Cómo escribirmos en un booleano que la variable n sea par
// n%2 === 0 tiene que ser true

for (let i=0; i<11; i++) {
    if (i%2 === 0) {
        console.log(i)
    }
}

// Tarea: Hacer el mismo ejemplo pero que imprima solo los impares

for (let i=0; i<11; i++) {
    if (i%2 === 1) {
        console.log(i)
    }
}

// 

for (let i=0; i<11; i++) {
    if (i%2 === 0) {
        console.log(i)
    }
}


for (let i=0; i<11; i++) {
    if (i%2 !== 1) {
        console.log(i)
    }
}

for (let i=0; i<11; i=i+2) {
    console.log(i)
}


// otra notación para for loops

let arr = ['manzana', 'naranja', 'platano', 'jitomate'];

for (let item of arr) {
    console.log(item)
}

for (let item of arr) {
    item = item + '-';
    console.log(item)
}

// Lo mismo con la notación anterior

let arr = ['manzana', 'naranja', 'platano', 'jitomate'];
for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

