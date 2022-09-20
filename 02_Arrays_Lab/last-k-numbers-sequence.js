function solve(n, k) {
    let arr = [];
    arr[0] = 1;

    for(let i = 1; i < n; i++) {
        //getting previous element of the current
        let j = i - 1, sum = 0, count = 0;

        //getting previous elements of the current until 0
        while(j >= 0 && count < k) {
            //summing previous elements
            sum += arr[j];
            j--;
            count++;
        }

        //putting the sum result at the next position in the array
        arr[i] =  sum;
    }

    return arr;
}

console.log(solve(8, 2));