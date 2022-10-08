const { expect, assert } = require('chai')
const { mathEnforcer } = require('./mathEnforcer')

describe('Testing the functionality of Math Enforcer object', () => {
    describe('addFive function', () => {
        it('should return undefined if we pass a non-number parameter', () => {
            //Arrange
            let nonNumber = 'a';
            //Act
            let result = mathEnforcer.addFive(nonNumber);
            //Assert
            assert.equal(result, undefined);
        })

        it('should return passed number increased by 5 if we pass a positive number', () => {
            //Arrange
            let num = 0;
            //Act
            let result = mathEnforcer.addFive(num);
            //Assert
            assert.equal(result, 5);
        })

        it('should return passed number increased by 5 if we pass a negative number', () => {
            //Arrange
            let num = -5;
            //Act
            let result = mathEnforcer.addFive(num);
            //Assert
            assert.equal(result, 0);
        })

        it('should return passed number increased by 5 if we pass a floating number', () => {
            //Arrange
            let num = 0.1;
            //Act
            let result = mathEnforcer.addFive(num);
            //Assert
            expect(result).to.be.closeTo(5.1, 0.01);
        })
    })

    describe('subtractTen function', () => {
        it('should return undefined if we pass a non-number parameter', () => {
            //Arrange
            let nonNumber = 'a';
            //Act
            let result = mathEnforcer.subtractTen(nonNumber);
            //Assert
            assert.equal(result, undefined);
        })

        it('should return passed number decreased by 10 if we pass a correct number', () => {
            //Arrange
            let num = 10;
            //Act
            let result = mathEnforcer.subtractTen(num);
            //Assert
            assert.equal(result, 0);
        })

        it('should return passed number decreased by 10 if we pass a negative number', () => {
            //Arrange
            let num = -5;
            //Act
            let result = mathEnforcer.subtractTen(num);
            //Assert
            assert.equal(result, -15);
        })

        it('should return passed number decreased by 10 if we pass a floating number', () => {
            //Arrange
            let num = 10.1;
            //Act
            let result = mathEnforcer.subtractTen(num);
            //Assert
            expect(result).to.be.closeTo(0.1, 0.01);
        })
    })

    describe('sum function', () => {
        it('should return undefined if any of the parameters is not a number', () => {
            //Arrange
            let num1 = 'a';
            let num2 = 1;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.equal(result, undefined);
        })

        it('should return the sum of the elements if both parameters are positive numbers', () => {
            //Arrange
            let num1 = 1;
            let num2 = 1;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.equal(result, 2);
        })

        it('should return the sum of the elements if both parameters are negative numbers', () => {
            //Arrange
            let num1 = -1;
            let num2 = -1;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.equal(result, -2);
        })

        it('should return the sum of the elements if one parameter is floating number', () => {
            //Arrange
            let num1 = 1.2;
            let num2 = 1;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            expect(result).to.be.closeTo(2.2, 0.01);
        })

        it('should return the sum of the elements if one parameter is a negative number', () => {
            //Arrange
            let num1 = -1;
            let num2 = 1;
            //Act
            let result = mathEnforcer.sum(num1, num2);
            //Assert
            assert.equal(result, 0);
        })
    })
})