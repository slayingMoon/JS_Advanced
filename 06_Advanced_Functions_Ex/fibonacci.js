function getFibonator() {
    let firstNum = 0;
    let secNum = 1;

    return function fib() {
        let sum = firstNum + secNum; // 0 + 1 = 1
        firstNum = secNum; // 1 1
        secNum = sum; // 1
        return firstNum;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
