const { assert } = require('chai')
const companyAdministration = require('./companyAdministration')

describe('Testing Company Administration functionality', () => {

    describe('hiringEmployee function', () => {
        function concatenateStr(name, position) {
            return `${name} was successfully hired for the position ${position}.`;
        }

        it("throws error if position is not 'Programmer'", () => {
            assert.throws(() => companyAdministration.hiringEmployee('Pesho', 'Engineer', 10), 'We are not looking for workers for this position.');
            assert.throws(() => companyAdministration.hiringEmployee('Pesho', 10, 10), 'We are not looking for workers for this position.');
        })

        it("hires employee if yearsExperience >= 3", () => {
            //Arrange
            let expected = concatenateStr('Pesho', 'Programmer');
            //Act & Assert
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3), expected);
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 4), expected);
        })

        it("rejects employee if yearsExperience < 3", () => {
            //Arrange
            let expected = `Pesho is not approved for this position.`;
            //Act & Assert
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 2), expected);
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 0), expected);
        })
    })

    describe('calculateSalary function', () => {
        it('throws error if hours are not a number', () => {
            assert.throws(() => companyAdministration.calculateSalary('a'), 'Invalid hours');
            assert.throws(() => companyAdministration.calculateSalary([]), 'Invalid hours');
        })

        it('throws error if hours are a negative a number', () => {
            assert.throws(() => companyAdministration.calculateSalary(-1), 'Invalid hours');
        })

        it('returns employee salary if data is valid and working time is less than or equal 160 hours', () => {
            //Act & Assert
            let expected = 120 * 15;
            assert.equal(companyAdministration.calculateSalary(120), expected);
            expected = 160 * 15;
            assert.equal(companyAdministration.calculateSalary(160), expected);
            expected = 0 * 15;
            assert.equal(companyAdministration.calculateSalary(0), expected);
        })

        it('returns employee salary plus 1000 if data is valid and working time is higher than 160 hours', () => {
            //Act & Assert
            let expected = 165 * 15 + 1000;
            assert.equal(companyAdministration.calculateSalary(165), expected);
            expected = 170 * 15 + 1000;
            assert.equal(companyAdministration.calculateSalary(170), expected);
        })
    })

    describe('firedEmployee function', () => {
        it('throws error if passed employees is not array', () => {
            assert.throws(() => companyAdministration.firedEmployee('a', 1), 'Invalid input');
            assert.throws(() => companyAdministration.firedEmployee({}, 1), 'Invalid input');
            assert.throws(() => companyAdministration.firedEmployee(2, 1), 'Invalid input');
        })

        it('throws error if index is outside of the array', () => {
            assert.throws(() => companyAdministration.firedEmployee(['Pesho', 'Gosho'], 2), 'Invalid input');
            assert.throws(() => companyAdministration.firedEmployee([], -1), 'Invalid input');
        })

        it('throws error if index is not a number', () => {
            assert.throws(() => companyAdministration.firedEmployee(['Pesho', 'Gosho'], 'a'), 'Invalid input');
            assert.throws(() => companyAdministration.firedEmployee([], '0'), 'Invalid input');
        })

        it('returns changed array as a string when data is valid', () => {
            let employees = ["Petar", "Ivan", "George"];
            assert.equal(companyAdministration.firedEmployee(employees, 1), 'Petar, George');
        })
    })
})