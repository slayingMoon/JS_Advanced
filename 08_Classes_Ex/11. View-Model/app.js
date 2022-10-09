class Textbox {
    constructor(selector, regex) {
        this._value = '';
        this._elements = Array.from(document.querySelectorAll(selector));
        this._invalidSymbols = regex;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;

        for(let index = 0; index < this._elements.length; index++) {
            this._elements[index].value = newValue;
        }
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        //negation, as we want to return false if there is a match, but default value for a match is true
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('change',function(){console.log(textbox.value);});
