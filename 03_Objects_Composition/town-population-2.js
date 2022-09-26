function getTownPopulation(input) {
    let townData = input.map(element => {
        //split into key and value 'Sofia <-> 1200000' => key: 'Sofia', value: '120000'
        let data = element.split(' <-> ');

        //return town object
        return {
            name: data[0],
            population: Number(data[1])
        };
    });

    //create empty registry Object
    let registry = {};

    for (let town of townData) {
        if (registry[town.name] === undefined) {
            //assign both key and value at the same time Sofia: 120000,....
            registry[town.name] = town.population;
        } else {
            //else get population by key and increase the population with the given population value
            registry[town.name] += town.population;
        }
    }

    //iterate object(map) towns
    //town is the key in towns map
    for (let city in registry) {
        console.log(`${city} : ${registry[city]}`);
    }
}

let result = getTownPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);