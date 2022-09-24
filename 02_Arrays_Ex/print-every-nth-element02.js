function getNthNumbers(arr, step) {

    //returns new array, but the original remains intact
    return arr.filter((el, index) => {
        if(index % step === 0) {
            return el;
        }
    });
}

console.log(getNthNumbers(['5', '20', '31', '4', '20'], 2));
console.log(getNthNumbers(['dsa','asd', 'test', 'tset'], 2));
console.log(getNthNumbers(['1', '2','3', '4', '5'], 6));




