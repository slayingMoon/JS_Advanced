function solve(arr) {
    const register = {};

    arr.forEach(line => {
        let[brand, model, qty] = line.split(' | ');

        if(!register.hasOwnProperty(brand)) {
            register[brand] = {};
        }

        //if the brand does not have the current model, we should add it
        if(!register[brand].hasOwnProperty(model)) {
            register[brand][model] = 0;
        }

        register[brand][model] += Number(qty);
    })

    for(const brand in register) {
        console.log(brand);
        Object.entries(register[brand]).forEach(el => console.log(`###${el[0]} => ${el[1]}`));
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);