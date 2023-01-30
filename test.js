function spaceToDash(str) {
    let arr = str.split('');
    return arr.map(character => {
        if (character === ' ') {
            return '-';
        }
        return character;
    })
    
}

console.log(spaceToDash('ssbb sdoi s'))

