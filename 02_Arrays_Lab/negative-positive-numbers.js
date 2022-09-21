function solve(arr) {

    let result = [];

    arr.forEach(element => {
        if(element < 0) {
            result.unshift(element);
        }else {
            result.push(element);
        }
    });

    result.forEach(num => {
        console.log(num);
    });
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
