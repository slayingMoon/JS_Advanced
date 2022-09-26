function createRecord(name, population, treasury) {

    //return a nameless object, holding the properties
    return {
        name,
        population,
        treasury
    };
}

console.log(createRecord('Tortuga',
7000,
15000
));