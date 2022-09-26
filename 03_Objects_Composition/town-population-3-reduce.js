function getTownPopulation(input) {
    let townData = input
    .map(element => {
        //split into key and value 'Sofia <-> 1200000' => key: 'Sofia', value: '120000'
        let data = element.split(' <-> ');

        //return town object
        return {
            name: data[0],
            population: Number(data[1])
        };
    })
    .reduce((result, town) => {
        if (result[town.name] === undefined) {
            //assign both key and value at the same time Sofia: 120000,....
            result[town.name] = town.population;
        } else {
            //else get population by key and increase the population with the given population value
            result[town.name] += town.population;
        }

        return result;
    }, {});

    //iterate object(map) towns
    //town is the key in towns map
    for (let city in townData) {
        console.log(`${city} : ${townData[city]}`);
    }
}

let result = getTownPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);