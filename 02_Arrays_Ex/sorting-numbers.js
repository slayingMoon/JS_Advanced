function sortNumbers(arr) {
    arr.sort((a,b) => a - b);

    let arrSmall = arr.slice(0, arr.length / 2);
    let arrBig = arr.slice(arr.length / 2);

    let result = [];

    for(let i = 0; i < arrBig.length; i++) {
        if(i < arrSmall.length) {
            result.push(arrSmall[i]);
        }
        result.push(arrBig[arrBig.length - 1 - i]);
    }

    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// console.log(sortNumbers([2, 5, 1, 4, 3]));