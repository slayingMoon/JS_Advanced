let arr = [1, 2, 3, 4, 5, 6];

//total is always 0 at first (if we dont specifically assign a value to it)
let result = arr.reduce((total, current) => total + current);

//total with initial value 100
let result2 = arr.reduce((total, current) => total + current, 100);

console.log(result);
console.log(result2);