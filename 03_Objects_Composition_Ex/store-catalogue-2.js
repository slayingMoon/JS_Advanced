function createCatalogue(arr) {
    let result = arr.sort((a,b) => a.localeCompare(b));
    let obj = {};

    let firstChar = '';

    for(let el of result) {
        let [product, price] = el.split(' : ');
        price = Number(price);

        let keyLetter = product.charAt(0);

        obj[product] = price;

        if(keyLetter !== firstChar) {
            console.log(keyLetter);
        }

        console.log(`   ${product}: ${obj[product]}`);

        firstChar = keyLetter;
    }
}

createCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);