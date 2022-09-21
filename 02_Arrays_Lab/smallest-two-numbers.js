function findSmallestTwoNumbers(arr) {
    // If result < 0, a is sorted before b
    // If result > 0, a is sorted after b
    // If result = 0, a and b are equal (no change)
    arr.sort((a, b) => a - b);

    //end element is not included
    return arr.slice(0,2).join(' ');
}

console.log(findSmallestTwoNumbers([3, 0, 10, 4, 7, 3]));