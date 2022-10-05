const { expect } = require('chai')
const { isSymmetric } = require('./checkForSymmetry')

describe('Testing symmetry check function', () => {

    it('should return false if input is not an array', () => {
        //Arrange
        let input = 'Not array';
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false;
    })

    it('should return true if input is a symmetric array', () => {
        //Arrange
        let input = [1, 2, 3, 4, 3, 2, 1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.true;
    })

    it('should return false if no input is passed', () => {
        //Arrange
        let input = [1, '1'];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false;
    })

    it('should return true if array is empty', () => {
        //Arrange
        let input = [];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.true;
    })

    it('should return false if number is passed', () => {
        //Arrange
        let input = [0,1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false;
    })

})