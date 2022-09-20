function sumFirstAndLast(arr) {
    const first = arr.shift();
    const last = arr.pop();
    let sum = Number(first) + Number(last);

    return sum;
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));