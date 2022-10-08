const { expect } = require('chai')
const { rgbToHexColor } = require('./rgb-to-hex')

describe('Testing RGB integers Color to Hexadecimal functionality', () => {

    /**
     * Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
     * Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
     * Return undefined if any of the input parameters are of an invalid type or not in the expected range
     */

    it('should return #ADFF32 if arguments are (173, 255, 50)', () => {
        //Arrange
        let red = 173;
        let green = 255;
        let blue = 50;
        //Act
        let result = rgbToHexColor(red, green, blue)
        //Assert
        expect(result).to.be.equal('#ADFF32');
    })

    it('should return undefined if invalid range red', () => {
        //Arrange
        let red = -1;
        let green = 0;
        let blue = 0;
        //Act
        let result = rgbToHexColor(red, green, blue)
        //Assert
        expect(result).to.be.undefined
    })

    it('should return undefined if invalid range green', () => {
        //Arrange
        let red = 0;
        let green = -1;
        let blue = 0;
        //Act
        let result = rgbToHexColor(red, green, blue)
        //Assert
        expect(result).to.be.undefined
    })

    it('should return undefined if invalid range blue', () => {
        //Arrange
        let red = 0;
        let green = 0;
        let blue = -1;
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

    it('should return #000000 if arguments are 0, 0 ,0', () => {
        //Arrange
        let red = 0;
        let green = 0;
        let blue = 0;
        //Act
        let result = rgbToHexColor(red, green, blue)
        //Assert
        expect(result).to.be.equal('#000000');
    })

    it('should return undefined if invalid range above 255 - (173, 256, 50)', () => {
        //Arrange
        let red = 173;
        let green = 256;
        let blue = 50;
        //Act
        let result = rgbToHexColor(red, green, blue)
        //Assert
        expect(result).to.be.undefined;
    })

})