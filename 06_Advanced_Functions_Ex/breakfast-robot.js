function solution() {
    // protein, carbohydrate, fat, and flavours
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipesEnum = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    return function inputHandler(input) {
        let actionHandler = cmdOption();
        let [cmd, microelement, quantity] = input.split(' ');
        return actionHandler[cmd](microelement, quantity);
    }

    function cmdOption() {
        return {
            restock: (microelement, quantity) => {
                //we increase the stock of the given ingredient by the given quantity
                ingredients[microelement] = ingredients[microelement] + Number(quantity);
                return 'Success';
            },
            prepare: (recipe, quantity) => {
                console.log('prepare')
            },
            report: () => console.log('report')
        }
    }
}

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
//console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
