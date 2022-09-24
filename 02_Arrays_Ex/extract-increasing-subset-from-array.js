function getIncreasingSubset(arr) {
    let biggest = arr[0];

    return arr.reduce((resultArr, current) => {
        if (current >= biggest) {
            biggest = current;
            resultArr.push(current);
        }
        return resultArr;
    }, []);
}

console.log(getIncreasingSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(getIncreasingSubset([1, 
    2, 
    3,
    4]
));

console.log(getIncreasingSubset([20, 
    3, 
    2, 
    15,
    6, 
    1]
));
    
