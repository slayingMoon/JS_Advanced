const { expect, assert } = require('chai')
const bookSelection = require('./solution')

describe('Testing functionality of bookSelection', () => {
    describe('Testing isGenreSuitable function', () => {
        function concatenateStr(genre, age) {
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        }
        it("correct genre 'Thriller' and insufficient age", () => {
            //Arrange
            let expected = concatenateStr('Thriller', 12);
            //Act & Assert
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), expected);
            //Arrange
            expected = concatenateStr('Thriller', 10);
            //Act & Assert
            assert.equal(bookSelection.isGenreSuitable('Thriller', 10), expected);
        })

        it("correct genre 'Horror' and insufficient age", () => {
            //Arrange
            let expected = concatenateStr('Horror', 12);
            //Act & Assert
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), expected);
            //Arrange
            expected = concatenateStr('Horror', 10);
            //Act & Assert
            assert.equal(bookSelection.isGenreSuitable('Horror', 10), expected);
        })

        it("correct genre 'Thriller' and sufficient age", () => {
            //Arrange
            let expected = 'Those books are suitable';
            //Act & Assert
            assert.equal(bookSelection.isGenreSuitable('Thriller', 13), expected);
        })

        it("correct genre 'Horror' and sufficient age", () => {
            //Arrange
            let expected = 'Those books are suitable';
            //Act & Assert
            assert.equal(bookSelection.isGenreSuitable('Horror', 13), expected);
        })

        it("wrong genre 'Comedy' and insufficient age", () => {
            //Arrange
            let expected = 'Those books are suitable';
            //Act & Assert
            assert.equal(bookSelection.isGenreSuitable('Comedy', 10), expected);
            assert.equal(bookSelection.isGenreSuitable('Comedy', 12), expected);
        })

        it("wrong genre 'Comedy' and sufficient age", () => {
            //Arrange
            let expected = 'Those books are suitable';
            //Act & Assert
            assert.equal(bookSelection.isGenreSuitable('Comedy', 13), expected);
        })
    })

    describe('Testing isItAffordable function', () => {
        it('should throw an error if price is not a number', () => {
            //Arrange, Act & Assert
            assert.throws(() => bookSelection.isItAffordable('s', 10), 'Invalid input');
        })

        it('should throw an error if budget is not a number', () => {
            //Arrange, Act & Assert
            assert.throws(() => bookSelection.isItAffordable(10, true), 'Invalid input');
        })

        it('should throw an error if price and budget are not a number', () => {
            //Arrange, Act & Assert
            assert.throws(() => bookSelection.isItAffordable('10', true), 'Invalid input');
        })

        it('should return not enough money if budget is lower than price', () => {
            //Arrange, Act & Assert
            assert.equal(bookSelection.isItAffordable(11, 10), "You don't have enough money");
            assert.equal(bookSelection.isItAffordable(51, 50), "You don't have enough money");
        })

        it('should return book bought if budget is same as price or higher', () => {
            //Arrange, Act & Assert
            assert.equal(bookSelection.isItAffordable(10, 10), "Book bought. You have 0$ left");
            assert.equal(bookSelection.isItAffordable(10, 11), "Book bought. You have 1$ left");
        })

    })

    describe('Testing suitableTitles function', () => {
        it('Wrong data type', () => {
            assert.throw(() => bookSelection.suitableTitles('pesho', 'pesho'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles(10, 'pesho'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles({}, 'pesho'), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([10], 1), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 10), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], []), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles({}, {}), 'Invalid input');
            assert.throw(() => bookSelection.suitableTitles(10, 10), 'Invalid input');
        })

        it('Correct data', () => {
            //Arrange
            let input = [
                { title: "The Da Vinci Code", genre: "Thriller" },
                { title: "The Da Vinci Code1", genre: "Thriller" },
                { title: "The Da Vinci Code2", genre: "Horror" }
            ];
            //Act
            let resultArr = bookSelection.suitableTitles(input, "Thriller");
            //Assert
            let expectedArr = ["The Da Vinci Code", "The Da Vinci Code1"];
            assert.equal(resultArr.join(', '), expectedArr.join(', '));
            //Act
            resultArr = bookSelection.suitableTitles(input, "Horror");
            //Assert
            expectedArr = ["The Da Vinci Code2"];
            assert.equal(resultArr.join(', '), expectedArr.join(', '));
        })
    })
})