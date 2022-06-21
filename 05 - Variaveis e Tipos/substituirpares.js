function substituirPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("você ja é zero!!");
        } else if (array[i] % 2 === 0) {
            console.log(`substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1,4,3,4,5,76,22,11,45,43,50];
console.log(substituirPares(arr))