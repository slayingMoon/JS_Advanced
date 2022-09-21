function getDiagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondDiagonalSum = 0;

    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    matrix.forEach(array => {
        mainDiagonalSum += array[firstIndex++];
        secondDiagonalSum += array[secondIndex--];
    });

    console.log(mainDiagonalSum + ' ' + secondDiagonalSum);
}

getDiagonalSums([[20, 40],[10, 60]]);
getDiagonalSums([[3, 5, 17],[-1, 7, 14],[1, -8, 89]]);

