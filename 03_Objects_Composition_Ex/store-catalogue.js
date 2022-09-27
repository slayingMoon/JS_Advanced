function createCatalogue(data) {
    let sorted = data.sort((a,b) => a.localeCompare(b));
    let result = {};

    for(let el of sorted) {
        let [product, price] = el.split(' : ');
        price = Number(price);

        let keyLetter = product.charAt(0);

        if(!result.hasOwnProperty(keyLetter)) {
            result[keyLetter] = {};
        }

        result[keyLetter][product] = price;
    }

    //k is the letter, which is our key
    //pMap is the nested object, holding the (product: price) pairs
    for(let [k, pMap] of Object.entries(result)) {
        console.log(k);

        //p is the product name, which is our key in the nested obj - product map
        //v is the nested object - product map
        for(let p in pMap) {
            console.log(`   ${p}: ${pMap[p]}`);
        }
    }

    // console.log(JSON.stringify(result));
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