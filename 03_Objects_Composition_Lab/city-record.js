function createRecord(name, population, treasury) {

    //create an empty object
    const city = {};

    city.name = name;
    city.population = population;
    city.treasury = treasury;

    return city;
}

console.log(createRecord('Tortuga',
7000,
15000
));