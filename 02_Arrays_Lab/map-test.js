function solve(numbers) {

    let roots =  numbers.map(num => {
        return Math.sqrt(num);
    });

    return roots;
}

console.log(solve([1, 4, 9]));