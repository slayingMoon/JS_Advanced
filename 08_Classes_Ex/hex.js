class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    plus(obj) {
        let result = this.value + Number(obj.valueOf());
        return new Hex(result);
    }

    minus(obj) {
        let result = this.value - Number(obj.valueOf());
        return new Hex(result);
    }

    toString() {
        // This function will show its hexadecimal(16) value starting with "0x"
        return '0x' + this.value.toString(16).toUpperCase();
    }

    // parse Hexadecimal numbers and convert them to standard decimal numbers
    parse(str) {
        return parseInt(str, 16);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
