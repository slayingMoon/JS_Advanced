const { expect } = require('chai')
const { rgbToHexColor } = require('./rgb-to-hex')

describe('Testing RGB to Hex function', () => {

    /**
     * Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
     * Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
     * Return undefined if any of the input parameters are of an invalid type or not in the expected range
     */

    it('should return undefined if no arguments are passed', () => {
        //Arrange
        //Act
        let result = rgbToHexColor()
        //Assert
        expect(result).to.be.undefined
    })

    it('should return undefined if arguments are not valid', () => {
        //Arrange
        let red = 'a';
        let green = 'b';
        let blue = 'c';
        //Act
        let result = rgbToHexColor(red, green, blue)
        //Assert
        expect(result).to.be.undefined
    })

    it('should return #010203 if arguments are 1, 2, 3', () => {
        //Arrange
        let red = 1;
        let green = 2;
        let blue = 3;
        //Act
        let result = rgbToHexColor(red, green, blue)
        //Assert
        expect(result).to.be.equal('#010203');
    })

})