const { expect } = require('chai')
const sumFunc = require('./sumOfNums')

describe('Testing Sum Function', () => {
    it('should return NaN if one element of array is not a number', () => {
        //Arrange
        let invalidArray = [1, 2, 'ss'];
        //Act
        let result = sumFunc.sum(invalidArray);
        //Assert
        expect(result).to.be.NaN;
    })

    it('should throw TypeError if we pass a number instead of array', () => {
        //Arrange
        let notAnArray = 1;
        //Act - notice how to pass function throwing an error for the assertion to work
        let failingFunc = () => sumFunc.sum(notAnArray);
        //Assert
        expect(failingFunc).to.throw('arr is not iterable');
    })

    it('should calculate 1 element array', () => {
        //Arrange
        let oneElementArr = [1];
        //Act
        let result = sumFunc.sum(oneElementArr);
        //Assert
        expect(result).to.equal(oneElementArr[0])
    })

    it('should calculate 2 element array', () => {
        //Arrange
        let twoElementArr = [1, 2];
        //Act
        let result = sumFunc.sum(twoElementArr);
        //Assert
        expect(result).to.equal(3)
    })

    it('should return NaN if we pass a string', () => {
        //Arrange
        let str = 'abc';
        //Act
        let result = sumFunc.sum(str);
        //Assert
        expect(result).to.be.NaN;
    })

})