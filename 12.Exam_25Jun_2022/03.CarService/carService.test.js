const {assert} = require('chai')
const carService = require('./03.carService')

describe('Testing carService functionality', () => {

    describe('Testing isItExpensive function', () => {
        it('should return severe issue if parameter is Engine', () => {
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`);
        })

        it('should return severe issue if parameter is Transmission', () => {
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`);
        })

        it('should return price will be cheaper if issue is not Engine/Transmission', () => {
            assert.equal(carService.isItExpensive('Brakes'), `The overall price will be a bit cheaper`);
        })
    })

    describe('Testing discount function', () => {
        it('throws error if numberOfParts is not a number', () => {
            assert.throws(() => carService.discount('10', 10), 'Invalid input');
        })

        it('throws error if totalPrice is not a number', () => {
            assert.throws(() => carService.discount(10, '10'), 'Invalid input');
        })

        it('denies discount if numberOfParts is smaller or equal to 2', () => {
            assert.equal(carService.discount(2,10), "You cannot apply a discount");
            assert.equal(carService.discount(1,10), "You cannot apply a discount");
        })

        it('gives discount of 15% when numberOfParts is higher than 2 and smaller than or equal to 7', () => {
            let amountSaved = (15 / 100) * 120;
            assert.equal(carService.discount(3,120), `Discount applied! You saved ${amountSaved}$`);
            assert.equal(carService.discount(6,120), `Discount applied! You saved ${amountSaved}$`);
            assert.equal(carService.discount(7,120), `Discount applied! You saved ${amountSaved}$`);
        })

        it('gives discount of 30% when numberOfParts is higher than 7', () => {
            let amountSaved = (30 / 100) * 120;
            assert.equal(carService.discount(8,120), `Discount applied! You saved ${amountSaved}$`);
        })
    })

    describe('Testing partsToBuy function', () => {
        it('throws error if partsCatalog is not an array', () => {
            assert.throws(() => carService.partsToBuy('10', []), 'Invalid input');
            assert.throws(() => carService.partsToBuy(10, []), 'Invalid input');
            assert.throws(() => carService.partsToBuy({}, []), 'Invalid input');
        })

        it('throws error if neededParts is not an array', () => {
            assert.throws(() => carService.partsToBuy([], '10'), 'Invalid input');
            assert.throws(() => carService.partsToBuy([], 10), 'Invalid input');
            assert.throws(() => carService.partsToBuy([], {}), 'Invalid input');
        })

        it('returns 0 if partsCatalog is empty', () => {
            assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), 0);
        })

        it('returns 0 if neededParts is empty', () => {
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], []), 0);
        })

        it('returns totalSum if data is valid', () => {
            let total = 375;
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"]), total);
        })

        it('returns totalSum if data is valid', () => {
            let total = 145;
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "Injectors", price: 230 }], ["blowoff valve", "coil springs"]), total);
        })
    })
})