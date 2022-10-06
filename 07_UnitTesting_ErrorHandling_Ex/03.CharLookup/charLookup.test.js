const { expect, assert } = require('chai');
const { lookupChar } = require('./charLookup')

describe('Testing functionality to retrieve a character at certain index from a given string', () => {
    it('should return undefined if the first parameter is not a string', () => {
        //Arrange
        let str = 1;
        let index = 0;
        //Act
        let result = lookupChar(str, index);
        //Assert
        assert.equal(result, undefined);
    })

    it('should return undefined if the second parameter is not a number', () => {
        //Arrange
        let str = 'abc';
        let index = 'd';
        //Act
        let result = lookupChar(str, index);
        //Assert
        assert.equal(result, undefined);
    })

    it('should return Incorrect index if both parameters are of correct type, but the index is a negative number', () => {
        //Arrange
        let str = 'abc';
        let index = -1;
        //Act
        let result = lookupChar(str, index);
        //Assert
        assert.equal(result, 'Incorrect index');
    })

    it('should return Incorrect index if both parameters are of correct type, but the index is equal to the string length', () => {
        //Arrange
        let str = 'abc';
        let index = 3;
        //Act
        let result = lookupChar(str, index);
        //Assert
        assert.equal(result, 'Incorrect index');
    })

    it('should return Incorrect index if both parameters are of correct type, but the index is bigger than the string length', () => {
        //Arrange
        let str = 'abc';
        let index = 4;
        //Act
        let result = lookupChar(str, index);
        //Assert
        assert.equal(result, 'Incorrect index');
    })

    it('should return the character at the specified index, if both parameters have correct types and values', () => {
        //Arrange
        let str = 'abc';
        let index = 2;
        //Act
        let result = lookupChar(str, index);
        //Assert
        assert.equal(result, 'c');
    })

    it('should return undefined if the second parameter is a floating point instead of integer', () => {
        //Arrange
        let str = 'abc';
        let index = 2.3;
        //Act
        let result = lookupChar(str, index);
        //Assert
        assert.equal(result, undefined);
    })
})