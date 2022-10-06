function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

let obj = createCalculator();
console.log(Object.hasOwn(obj, 'add'))

module.exports = createCalculator