function getGreatestCommonDivisor(num1, num2) {

    let a = Math.abs(num1);
    let b = Math.abs(num2);

    let greatestDivisor = getDivisor(a, b);

    function getDivisor(v1, v2) {

        if (v2 > v1) {
            let temp = v1;
            v1 = v2;
            v2 = temp;
        }

        while (true) {
            if (v2 == 0) {
                return v1;
            }
            v1 %= v2;

            if (v1 == 0) {
                return v2;
            }
            v2 %= v1;
        }

    }

    console.log(greatestDivisor);
}

getGreatestCommonDivisor(2154, 458);