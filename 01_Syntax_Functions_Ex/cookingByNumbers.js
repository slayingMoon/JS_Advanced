function solve(numString, ...params) {

    let number = Number(numString);
    let operations = params;

    for (let i = 0; i < 5; i++) {
        switch (operations[i]) {
            case 'chop':
                number = number / 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number = number + 1;
                break;
            case 'bake':
                number = number * 3;
                break;
            case 'fillet':
                number = Number(number * (1 - 0.2)).toFixed(1);
                break;
        }
        console.log(number);
    }

}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
