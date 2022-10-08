const { expect } = require('chai')
const createCalculator = require('./addSubtract')

describe('Testing add and subtract functionality of calculator', () => {

    it('should return object', () => {
        //Arrange
        const calculator = createCalculator();
        //Act & Assert
        expect(typeof calculator).to.equal('object');
    })

    it('returned object should have function add as property', () => {
        //Arrange
        const calculator = createCalculator();
        //Act & Assert
        expect(Object.hasOwn(calculator, 'add')).to.be.true;
    })

    it('returned object should have function subtract as property', () => {
        //Arrange
        const calculator = createCalculator();
        //Act & Assert
        expect(Object.hasOwn(calculator, 'subtract')).to.be.true;
    })

    it('returned object should have function get as property', () => {
        //Arrange
        const calculator = createCalculator();
        //Act & Assert
        expect(Object.hasOwn(calculator, 'get')).to.be.true;
    })

    it('add method increases sum value with parsable input - string', () => {
        //Arrange
        const calculator = createCalculator();
        //Act
        calculator.add('1');
        //Assert
        expect(calculator.get()).to.equal(1);
    })

    it('add method increases sum value with parsable input - number', () => {
        //Arrange
        const calculator = createCalculator();
        //Act
        calculator.add(1);
        //Assert
        expect(calculator.get()).to.equal(1);
    })

    it('subtract method decreases sum value with parsable input - number', () => {
        //Arrange
        const calculator = createCalculator();
        //Act
        calculator.add(1);
        calculator.subtract(1);
        //Assert
        expect(calculator.get()).to.equal(0);
    })

    it('function get returns the value of the internal sum', () => {
        //Arrange
        const calculator = createCalculator();
        //Act
        let internalSum = calculator.get();
        //Assert
        expect(internalSum).to.equal(0);
    })
})