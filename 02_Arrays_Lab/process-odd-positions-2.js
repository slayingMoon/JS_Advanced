function processOddPositions(arr) {
    return arr
        //how to use index of element in filter method
        .filter((element, i) => i % 2 !== 0)
        .map(n => n * 2)
        .reverse()
        .join(' ');
}

let result = processOddPositions([10, 15, 20, 25]);
console.log(result);