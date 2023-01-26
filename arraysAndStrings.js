// STRINGS


// length
// Sirve para calcular la cantidad de caracteres de un string
let word = 'abcd';
console.log(word.length) // --> 4 (la longitud de word)

// toUpperCase()
// Convierte todas las letras de un string a mayúsculas
word.toUpperCase() // --> AZUL

var word = 'azul'
console.log(word.toUpperCase())

// toLowerCase()
// Convierte todas las letras de un string a minúsculas
var str = 'Pepe Pecas Pica Papas'
console.log(str.toLowerCase())
str.toLowerCase() // pepe pecas pica papas


// Podemos usar la notación de corchete [], para acceder al caracter en cierto índice del string
let str = 'abcdefg'
str[0] // -> 'a'
str[4] // -> 'e'


// Con + se concatena (pega strings)
var str1 = 'Jose es '
var str2 = 'alto'

console.log(str1 + str2) // -> 'Jose es alto'
 

// slice()
// Sirve para cortar un string, la notación funciona así: 
// .slice(primer ídice de corte, un indice después del otro corte)
var str = 'Juan come pastel'
console.log(str.slice(0,3)) // --> 'Jua'
console.log(str.slice(2,5))


// .includes()
// Es un booleano, pregunta si un caracter está en un string o no y regresa true o false
var letters = 'abcdefghij'
letters.includes('a') // --> true
letters.includes('p') // --> false


// .indexOf() 
// Te dice el índice de un caracter en un string, o regresa -1 si el caracter no está en el string
let str = 'abcdefg';
str.indexOf('c') // -> 2
str.indexOf('z') // -> -1
str.indexOf('c', 3) // -> -1


// OBS: Con .indexOf() también podemos pregunatar si un caracter está o no en un string

function isCharInWord(word, character) {
    if (word.indexOf(character) === -1) {
        return false;
    } else {
        return word.indexOf(character);
    }
} 

console.log(isCharInWord('lapiz', 'a'))

// .split() 
// Sirve para convertir un string en un array
// Strings --> Arrays
const str = 'weoi';
console.log(str.split('')) // -> ['w', 'e', 'o', 'i']


// En strings se puede usar la notación str[i] para acceder al caracater de str en el índice i
let str = 'azul'
console.log(str[2]) // -> 'u'
let alfa = 'abcdefghij' // alfa[0] es 'a', alfa[1] es 'b' etc.



// Se pueden hacer for loops en strings
let str = 'azul'
for (let i=0; i<str.length; i++) {
    console.log(str[i])
} // ---> 'a' 'z' 'u' 'l' 


// Idea del acumulador para strings 

let str = ''; // <-- éste es nuestro acumuldador
let str2 = 'abcdefghijkl'
for (let i=0; i<str2.length; i++) {
    str = str + str2[i]
}
console.log(str)

// ejemplo
// Escribir una función que convierta espacios en giones
// 'pepe pecas pica papas' --> 'pepe-pecas-pica-papas'

const spaceToDash = (str) => {
    
}



////////////////////////////////////////////////////////////////////////
// ARRAYS

// OBS: Las entradas de un array pueden ser cualquier tipo de data, incluso otro array
let arr = [2, 'pedro', [2,3,['a', 'abc']], 'd']

// length
// En arrays también podemos usar .length, que cuenta el número de elementos del array
let arr = [23, 4, 2, 45];
console.log(arr.length) // --> 4


// Con la notación de corchete [] podemos acceder a elementos del array:
var arr = ['Jose', 11, 'Luis', 14, 2, 5]
arr[2] // --> 'Luis'
arr[0] // --> 'Jose'

console.log(arr[2])
console.log(arr[0])

let arr = [2, 'pedro', [2,3,['a', 'abc']], 'd']
console.log(arr[2]) // -> [2,3,['a', 'abc']]
console.log(arr[2][0]) // -> 2
console.log(arr[2][2]) // -> [ 'a', 'abc' ]
console.log(arr[2][2][0]) // -> 'a'
console.log(arr[2][2][1][1]) // -> 'b'


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


// .includes() funciona igual que en strings
var arr = [2, 3, 'pedro', 'manzana', 12]
console.log(arr.includes(2)) // -> true
console.log(arr.includes(15)) // -> false


// .indexOf() te dice que índice tiene un elemento del arreglo
var arr = ['Jose', 11, 'Luis', 14, 2, 'pera']
arr.indexOf('Luis') // --> 2
console.log(arr.indexOf(11)) // --> 1
console.log(arr.indexOf('pera')) // --> 5
console.log(arr.indexOf(23)) // --> -1

// si un valor se repite, arroja el índice de la primera vez que aparece
var arr = ['Jose', 11, 'Luis', 14, 2, 'pera', 'Jose']
console.log(arr.indexOf('Jose')) // -> 0


// .join() 
// Sirver para convertir arrays a strings
// Arrays --> Strings
const arr = ['t', 'e', 's', 't']
console.log(arr.join('')) // -> 'test'
console.log(arr.join('-')) // -> 't-e-s-t'
console.log(arr.join('.')) // -> 't.e.s.t'

let arr = ['pepe', 'pecas', 'pica', 'papas']
console.log(arr.join('')) // -> 'pepepecaspicapapas'
console.log(arr.join(' ')) // -> 'pepe pecas pica papas'

// .push()
// agrega elementos al final de un arreglo
let arr = ['pepe', 'pecas', 'pica', 'papas']
arr.push(45)
console.log(arr) // -> [ 'pepe', 'pecas', 'pica', 'papas', 45 ]

// .unshift()
// agrega elementos al inicio de un arreglo
let arr = ['pepe', 'pecas', 'pica', 'papas']
arr.unshift(45)
console.log(arr) // -> [ 45, 'pepe', 'pecas', 'pica', 'papas' ]



// Idea del acumulador

let arr = [];
let arr2 = [1,2,3,4,10,44,11,9]

for (let i=0; i<arr2.length; i++) {
    arr.push(arr2[i])
}

console.log(arr)

// ejemplos:
// Escribir una función que de input tenga un arreglo y de output solo los numeros pares de ese mismo arreglo

function pares(arr) {
    let accum = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 === 0) {
            accum.push(arr[i]);
        }
    }
    return accum;
}

console.log(pares([1,2,3,4,10,44,11,9]))


// Tarea: investigar estos métodos de arreglos (array methods) .pop() .shift() .sort() 


// .map() .filter()