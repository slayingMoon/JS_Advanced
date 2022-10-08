function sort(arr, order) {
    return order === 'asc' ? arr.sort((a,b) => a - b) : arr.sort((a,b) => b - a);
}

let result = sort([14, 7, 17, 6, 8], 'desc');
console.log(result);