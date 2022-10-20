const {assert} = require('chai')
const flowerShop = require('./flowerShop')

describe('Testing flowerShop functionality', () => {

    describe('calcPriceOfFlowers(flower, price, quantity) function', () => {
        it('throws error if flower is not a string', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers(1, 2, 3), 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers([], 2, 3), 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers({}, 2, 3), 'Invalid input!');
        })

        it('throws error if price is not a number', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', '2', 3), 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', [], 3), 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', {}, 3), 'Invalid input!');
        })

        it('throws error if quantity is not a number', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', 2, '3'), 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', 2, []), 'Invalid input!');
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', 2, {}), 'Invalid input!');
        })

        it('throws error if price is not an integer', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', 2.2, 3), 'Invalid input!');
        })

        it('throws error if quantity is not an integer', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('flower', 2, 3.3), 'Invalid input!');
        })

        it('returns the required price to buy the given flower', () => {
            assert.equal(flowerShop.calcPriceOfFlowers('tulip', 2, 3), `You need $6.00 to buy tulip!`);
        })
    })

    describe('checkFlowersAvailable(flower, gardenArr) function', () => {
        it('returns that the flower type is sold if flower is not present in the gardenArr', () => {
            assert.equal(flowerShop.checkFlowersAvailable('Tulip', ["Rose", "Lily", "Orchid"]), `The Tulip are sold! You need to purchase more!`);
            assert.equal(flowerShop.checkFlowersAvailable('Tulip', []), `The Tulip are sold! You need to purchase more!`);
            assert.equal(flowerShop.checkFlowersAvailable('', ["Rose", "Lily", "Orchid"]), `The  are sold! You need to purchase more!`);
            assert.equal(flowerShop.checkFlowersAvailable('', []), `The  are sold! You need to purchase more!`);
        })

        it('returns that the requested flower is available if flower is present in the gardenArr', () => {
            assert.equal(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"]), `The Lily are available!`);
        })
    })

    describe('sellFlowers(gardenArr, space) function', () => {
        it('throws error if gardenArr is not an array', () => {
            assert.throws(() => flowerShop.sellFlowers('', 2), 'Invalid input!');
            assert.throws(() => flowerShop.sellFlowers('a', 2), 'Invalid input!');
            assert.throws(() => flowerShop.sellFlowers(2, 2), 'Invalid input!');
            assert.throws(() => flowerShop.sellFlowers({}, 2), 'Invalid input!');
        })

        it('throws error if space is not a number', () => {
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '2'), 'Invalid input!');
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], []), 'Invalid input!');
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], {}), 'Invalid input!');
        })

        it('throws error if space is not an integer', () => {
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2.2), 'Invalid input!');
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0.1), 'Invalid input!');
        })

        it('throws error if space is lower than 0', () => {
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1), 'Invalid input!');
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -0.1), 'Invalid input!');
        })

        it('throws error if space is equal to gardenArr length', () => {
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3), 'Invalid input!');
            assert.throws(() => flowerShop.sellFlowers([], 0), 'Invalid input!');
        })

        it('throws error if space is higher than gardenArr length', () => {
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4), 'Invalid input!');
            assert.throws(() => flowerShop.sellFlowers([], 1), 'Invalid input!');
        })

        it("returns the changed array minus the flower at the space index, joined by ' / ' ", () => {
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2), 'Rose / Lily');
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1), 'Rose / Orchid');
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0), 'Lily / Orchid');
        })
    })
})