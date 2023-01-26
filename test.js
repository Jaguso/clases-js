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