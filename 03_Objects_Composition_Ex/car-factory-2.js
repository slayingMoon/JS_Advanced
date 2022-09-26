function createCar(req) {
    let res = {};
    
    res.model = req.model;

    let engineEnum = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    }

    if (req.power <= 90) {
        res.engine = engineEnum['Small engine'];
    } else if (req.power <= 120) {
        res.engine = engineEnum['Normal engine'];
    } else {
        res.engine = engineEnum['Monster engine'];
    }

    if (req.carriage === 'hatchback') {
        res.carriage = {
            type: 'hatchback',
            color: req.color
        }
    } else {
        res.carriage = {
            type: 'coupe',
            color: req.color
        }
    }

    let size = req.wheelsize % 2 === 0 ? req.wheelsize - 1 : req.wheelsize;

    //multiplies new array with the given value 4 times
    res.wheels = new Array(4).fill(size);

    return res;
}

let output = createCar({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);

console.table(output);