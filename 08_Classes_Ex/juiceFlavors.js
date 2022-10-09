function solve(arr) {
    const juices = {};
    let bottles = {};
    arr.forEach(x => {
        let [flavor, quantity] = x.split(' => ');

        if(!juices.hasOwnProperty(flavor)) {
            juices[flavor] = 0;
        }
        juices[flavor] += Number(quantity);
        createBottle(flavor);
    });

    //helper Method
    function createBottle(flavor) {
        if(juices[flavor] >= 1000) {
            if(!bottles.hasOwnProperty(flavor)) {
                bottles[flavor] = 0;
            }

            let numberOfBottles = Math.floor(juices[flavor] / 1000);
            bottles[flavor] += numberOfBottles;
            juices[flavor] -= numberOfBottles * 1000;
        }
    }

    for(let flavor in bottles) {
        console.log(`${flavor} => ${bottles[flavor]}`);
    }
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)