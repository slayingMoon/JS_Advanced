const {expect, assert} = require('chai')
const PaymentPackage = require('./paymentPackage')

describe('Testing functionality of class Payment Package', () => {
    describe('create instance', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Pesho', 10);
        });

        it("should have correct name", () => {
            assert.equal(paymentPackage._name, 'Pesho', 'name is set correctly to Pesho');
        })

        it('should have correct value', () => {
            assert.equal(paymentPackage._value, 10, 'value is set correctly to 10');
        })

        it('should have VAT set to 20', () => {
            assert.equal(paymentPackage._VAT, 20, 'VAT default value is correct');
            assert.equal(typeof(paymentPackage._VAT), 'number', 'VAT is of correct type');
        })

        it('should have active set to true', () => {
            assert.equal(paymentPackage._active, true, 'active has correct initial value');
            assert.equal(typeof(paymentPackage._active), 'boolean', 'active is of correct type');
        })
    })

    describe('testing getters', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Pesho', 10);
        });

        it('should return correct name', () => {
            //NOTE paymentPackage.name goes through the getter vs paymentPackage._name calls the property directly
            assert.equal(paymentPackage.name, 'Pesho');
        })

        it('should return correct value', () => {
            assert.equal(paymentPackage.value, 10);
        })

        it('should return correct VAT', () => {
            assert.equal(paymentPackage.VAT, 20);
        })

        it('should return correct active value(true)', () => {
            assert.equal(paymentPackage.active, true);
        })
    })

    describe('testing setters', () => {
        it('should throw error if incorrect type for name is set', () => {
            //IMPORTANT WHEN ASSERTING ERROR THROWN - WE MUST WRAP THE LOGIC INSIDE A FUNCTION!!!!!
            assert.throws(() => new PaymentPackage(10,10), 'Name must be a non-empty string');
        })

        it('should throw error if empty string is passed for name', () => {
            assert.throws(() => new PaymentPackage('',10), 'Name must be a non-empty string');
        })

        it('should set new name value for name if the passed input is correct', () => {
            let paymentPackage = new PaymentPackage('Pesho', 10);
            assert.equal(paymentPackage.name, 'Pesho');
            paymentPackage.name = 'Gosho';
            assert.equal(paymentPackage.name, 'Gosho');
        })

        it('should throw error if non-number is set for value', () => {
            assert.throws(() => new PaymentPackage('Pesho', 'Pesho'), 'Value must be a non-negative number');
        })

        it('should throw error if negative number is set for value', () => {
            assert.throws(() => new PaymentPackage('Pesho', -1), 'Value must be a non-negative number');
        })

        it('should set new value for value property if the passed input is correct', () => {
            let paymentPackage = new PaymentPackage('Pesho', 10);
            assert.equal(paymentPackage.value, 10);
            paymentPackage.value = 15;
            assert.equal(paymentPackage.value, 15);
        })
        
        it('should set new value for value property if the passed input is correct', () => {
            let paymentPackage = new PaymentPackage('Pesho', 10);
            assert.equal(paymentPackage.value, 10);
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);
        })

        it('should throw error if non-number is set for VAT', () => {
            let paymentPackage = new PaymentPackage('Pesho', 10);
            assert.throws(() => paymentPackage.VAT = 'Pesho', 'VAT must be a non-negative number');
        })

        it('should throw error if negative number is set for VAT', () => {
            let paymentPackage = new PaymentPackage('Pesho', 10);
            assert.throws(() => paymentPackage.VAT = -20, 'VAT must be a non-negative number');
        })

        it('should set new value for VAT property if the passed input is correct', () => {
            let paymentPackage = new PaymentPackage('Pesho', 10);
            assert.equal(paymentPackage.VAT, 20);
            paymentPackage.VAT = 30;
            assert.equal(paymentPackage.VAT, 30);
        })

        it('should throw error if non-boolean is set for active', () => {
            let paymentPackage = new PaymentPackage('Pesho', 10);
            assert.throws(() => paymentPackage.active = 'Pesho', 'Active status must be a boolean');
        })

        it('should set new value for active if the passed input is correct', () => {
            let paymentPackage = new PaymentPackage('Pesho', 10);
            assert.equal(paymentPackage.active, true);
            paymentPackage.active = false;
            assert.equal(paymentPackage.active, false);
        })
    })

    describe('Testing toString() functionality', () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Pesho', 10);
        });

        it('test active state', () => {
            const output = [
                `Package: Pesho`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
            ].join('\n');

            assert.equal(paymentPackage.toString(), output);
        })

        it('test inactive state', () => {
            paymentPackage.active = false;

            const output = [
                `Package: Pesho (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
            ].join('\n');

            assert.equal(paymentPackage.toString(), output);
        })
    })
})