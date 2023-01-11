function consonantCount(str) {
    let count = 0;
    let newString = str.toLowerCase()
    for (let i=0; i<newString.length; i++) {
        if (!(newString[i] === 'a' || newString[i] === 'e'|| newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u')) {
            count = count + 1
        }
    }
    return count;
}


console.log(consonantCount('diiiiiiiaaaaAaDrrded'))