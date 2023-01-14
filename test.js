
function consonantCount(str) {
    let newString = str.toLowerCase();
    let consonantsStr = 'bcdfghjklmnpqrstvwxyz';
    let count = 0;
    for (let character of newString) {
        if (consonantsStr.includes(character)) {
            count = count + 1;
        }
    }
    return count;

}



console.log(consonantCount('dd@234)(/&&/))=¨*][]__--- iioo'))