function checkNumbers(number) {
    let numberString = number.toString();
    let sumDigits = 0;
    let firstDigit = numberString[0];
    sumDigits += Number(firstDigit);
    let hasMatch = true;

    for(let i = 1; i < numberString.length; i++) {
        if(firstDigit !== numberString[i]) {
            hasMatch = false;
        }
        sumDigits += Number(numberString[i]);
    }

    console.log(hasMatch);
    console.log(sumDigits);
}

checkNumbers(2222222);
checkNumbers(1234);