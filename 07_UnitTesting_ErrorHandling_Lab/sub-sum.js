function sum(arr, startIndex, endIndex) {
    if(!Array.isArray(arr)) {
        return NaN;
    }

    if(startIndex < 0) {
        startIndex = 0;
    }

    if(endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    return arr.splice(startIndex, endIndex + 1)
    .map(Number)
    .reduce((acc, current) => acc + current, 0);
}

let result = sum('text', 0, 2);
console.log(result);