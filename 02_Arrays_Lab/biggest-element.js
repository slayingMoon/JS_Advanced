function findBiggestElement(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    for(let row = 0; row < matrix.length; row++) {

        for(let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] > biggestNum) {
                biggestNum = matrix[row][col];
            }
        }
    }

    return biggestNum;
}

console.log(findBiggestElement([[20, 50, 10],[8, 33, 145]]));
console.log(findBiggestElement([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]));

