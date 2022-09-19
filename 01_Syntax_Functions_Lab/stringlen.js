function solve(arg1, arg2, arg3) {
    let sumLenghts;
    let avgLength;

    sumLenghts = arg1.length + arg2.length + arg3.length;
    avgLength = Math.floor(sumLenghts / 3);

    console.log(sumLenghts);
    console.log(avgLength);
}

solve('pasta', '5', '22.3');