function getTownPopulation(townsArr) {
    const towns = {};

    for (let townString of townsArr) {
        let [name, population] = townString.split(' <-> ');
        population = Number(population);

        if(towns[name] != undefined) {population += towns[name];}
        //add/update object in towns object(map)
        //object is not added to map until this point 
        towns[name] = population;
    }

    //iterate object(map) towns
    //town is the key in towns map
    for(let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

getTownPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);