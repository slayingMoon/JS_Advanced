const { expect } = require('chai')
const { isOddOrEven } = require('./isOddOrEven')

describe('Testing string length even or odd functionality', () => {
    it('should return undefined if passed argument is not a string', () => {
        //Arrange
        let input = 1;
        //Act
        let result = isOddOrEven(input);
        //Assert
        expect(result).to.be.undefined;
    })

    it('should return even if passed string length is 2', () => {
        //Arrange
        let input = 'as';
        //Act
        let result = isOddOrEven(input);
        //Assert
        expect(result).to.equal('even');
    })

    it('should return odd if passed string length is 1', () => {
        //Arrange
        let input = 'a';
        //Act
        let result = isOddOrEven(input);
        //Assert
        expect(result).to.equal('odd');
    })

    it('should return odd if multiple strings are passed and the first has length 3', () => {
        //Arrange
        let input = 'aaa';
        let input2 = 'a';
        //Act
        let result = isOddOrEven(input, input2);
        //Assert
        expect(result).to.equal('odd');
    })
})