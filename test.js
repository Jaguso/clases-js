
const spaceToDash = (str) => {
    let accum = '';
    for (let character of str) {
        if (character === ' ') {
            accum += '-';
        } else {
            accum += character;
        }
    }
    return accum;
}

console.log(spaceToDash('pepe pecas pica papas'))