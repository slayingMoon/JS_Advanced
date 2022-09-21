function getBiggerHalf(arr) {
    arr.sort((a,b) => a - b);
    return arr.length % 2 !== 0 ? arr.slice(arr.length / 2, arr.length + 1) : arr.slice(Math.floor(arr.length / 2), arr.length + 1);
}

console.log(getBiggerHalf([4, 7, 2, 5]));
console.log(getBiggerHalf([3, 19, 14, 7, 2, 19, 6]));