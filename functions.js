
// Notación tradicional de función
function pares(arr) {
    let accum = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 === 0) {
            accum.push(arr[i]);
        }
    }
    return accum;
}

const pares = function(arr) {
    let accum = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 === 0) {
            accum.push(arr[i]);
        }
    }
    return accum;
}



// Notación de arrow function

const pares = (arr) => {
    let accum = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 === 0) {
            accum.push(arr[i]);
        }
    }
    return accum;
}

// Variaciones de notación de arrow function
const squareNumber = (num) => {
    return num*num;
}

const squareNumber = (num) => (num*num)

console.log(squareNumber(3))

const squareNumber = num => num*num




