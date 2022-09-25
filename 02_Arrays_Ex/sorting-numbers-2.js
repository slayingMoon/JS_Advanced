function sortNumbers(arr) {
    arr.sort((a,b) => a - b);

    let result = [];

    for(let i = 0; i < arr.length / 2; i++) {
        result.push(arr[i]);
        if(arr[i] !== arr[arr.length - 1 - i]) {
            result.push(arr[arr.length - 1 - i]);
        }
        
    }

    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortNumbers([2, 5, 1, 4, 3]));