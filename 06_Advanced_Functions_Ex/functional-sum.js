function add(num) {
    let sum = 0;

    function recursive (x) {
        sum += x;

        return recursive;
    }

    recursive.toString = () => sum;

    return recursive(num);
}

console.log(add(1)(6)(-3).toString());