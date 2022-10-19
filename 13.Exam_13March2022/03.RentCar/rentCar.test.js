const {assert} = require('chai')
const rentCar = require('./rentCar')

describe('Testing rentCar functionality', () => {

    describe('searchCar function', () => {
        it('throws an error if shop is not an array', () => {
            assert.throws(() => rentCar.searchCar('a', 'a'), 'Invalid input!');
            assert.throws(() => rentCar.searchCar(1, 'a'), 'Invalid input!');
            assert.throws(() => rentCar.searchCar({}, 'a'), 'Invalid input!');
        })

        it('throws an error if model is not a string', () => {
            assert.throws(() => rentCar.searchCar(['a', 'b'], 1), 'Invalid input!');
            assert.throws(() => rentCar.searchCar(['a', 'b'], []), 'Invalid input!');
            assert.throws(() => rentCar.searchCar(['a', 'b'], {}), 'Invalid input!');
        })

        it('throws error if there is no match for the given model', () => {
            assert.throws(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Porshe'), 'There are no such models in the catalog!');
        })

        it('returns the number of cars with the given model, present in the catalog', () => {
            let catalog = ["Volkswagen", "BMW", "Audi", "BMW"];
            let model = "BMW";
            let foundCars = catalog.filter(m => m === model);
            assert.equal(rentCar.searchCar(catalog, model), `There is ${foundCars.length} car of model ${model} in the catalog!`);
            model = "Volkswagen";
            foundCars = catalog.filter(m => m === model);
            assert.equal(rentCar.searchCar(catalog, model), `There is ${foundCars.length} car of model ${model} in the catalog!`);
        })
    })

    describe('calculatePriceOfCar function', () => {
        it('throws an error if model is not a string', () => {
            assert.throws(() => rentCar.calculatePriceOfCar(1, 2), 'Invalid input!');
            assert.throws(() => rentCar.calculatePriceOfCar([], 2), 'Invalid input!');
            assert.throws(() => rentCar.calculatePriceOfCar({}, 2), 'Invalid input!');
        })

        it('throws an error if days is not a number', () => {
            assert.throws(() => rentCar.calculatePriceOfCar("BMW", '2'), 'Invalid input!');
            assert.throws(() => rentCar.calculatePriceOfCar("BMW", []), 'Invalid input!');
            assert.throws(() => rentCar.calculatePriceOfCar("BMW", {}), 'Invalid input!');
        })

        it('throws error if there is no such model in catalog', () => {
            assert.throws(() => rentCar.calculatePriceOfCar('Porshe', 2), 'No such model in the catalog!');
        })

        it('returns the chosen model and rent price', () => {
            let cost = 20 * 2;
            let model = 'Volkswagen';
            assert.equal(rentCar.calculatePriceOfCar(model, 2), `You choose ${model} and it will cost $${cost}!`);
            cost = 36 * 0;
            model = 'Audi';
            assert.equal(rentCar.calculatePriceOfCar(model, 0), `You choose ${model} and it will cost $${cost}!`);
        })

    })

    describe('checkBudget function', () => {

        it('throws an error if costPerDay is not a number', () => {
            assert.throws(() => rentCar.checkBudget('', 2, 20), 'Invalid input!');
            assert.throws(() => rentCar.checkBudget([], 2, 20), 'Invalid input!');
            assert.throws(() => rentCar.checkBudget({}, 2, 20), 'Invalid input!');
        })

        it('throws an error if days is not a number', () => {
            assert.throws(() => rentCar.checkBudget(5, '', 20), 'Invalid input!');
            assert.throws(() => rentCar.checkBudget(5, [], 20), 'Invalid input!');
            assert.throws(() => rentCar.checkBudget(5, {}, 20), 'Invalid input!');
        })

        it('throws an error if budget is not an integer', () => {
            assert.throws(() => rentCar.checkBudget(5, 2, ''), 'Invalid input!');
            assert.throws(() => rentCar.checkBudget(5, 2, []), 'Invalid input!');
            assert.throws(() => rentCar.checkBudget(5, 2, {}), 'Invalid input!');
        })

        it('throws an error if costPerDay is not an integer', () => {
            assert.throws(() => rentCar.checkBudget(1.1, 2, 20), 'Invalid input!');
        })

        it('throws an error if days is not an integer', () => {
            assert.throws(() => rentCar.checkBudget(1, 2.2, 20), 'Invalid input!');
        })

        it('throws an error if budget is not an integer', () => {
            assert.throws(() => rentCar.checkBudget(1, 2, 20.2), 'Invalid input!');
        })

        it('returns not enough budget if cost is higher than budget', () => {
            let costPerDay = 15;
            let days = 2;
            let budget = 20;
            assert.equal(rentCar.checkBudget(costPerDay, days, budget), 'You need a bigger budget!');

            costPerDay = 15;
            days = 2;
            budget = 0;
            assert.equal(rentCar.checkBudget(costPerDay, days, budget), 'You need a bigger budget!');
        })

        it('returns you rent a car if cost is lower than or equal to budget', () => {
            let costPerDay = 15;
            let days = 2;
            let budget = 30;
            assert.equal(rentCar.checkBudget(costPerDay, days, budget), 'You rent a car!');

            costPerDay = 0;
            days = 2;
            budget = 1;
            assert.equal(rentCar.checkBudget(costPerDay, days, budget), 'You rent a car!');

            costPerDay = 5;
            days = 2;
            budget = 15;
            assert.equal(rentCar.checkBudget(costPerDay, days, budget), 'You rent a car!');
        })

    })
})