function createCar(req) {
    let res = {};
    res.model = req.model;

    if(req.power <= 90) {
        res.engine = {
            power: 90,
            volume: 1800
        }
    }else if(req.power <= 120) {
        res.engine = {
            power: 120,
            volume: 2400
        }
    }else {
        res.engine = {
            power: 200,
            volume: 3500
        }
    }

    if(req.carriage === 'hatchback') {
        res.carriage = {
            type: 'hatchback',
            color: req.color
        }
    }else {
        res.carriage = {
            type: 'coupe',
            color: req.color
        }
    }

    let size;

    if(req.wheelsize % 2 !== 0) {
        size = req.wheelsize;
    }else {
        size = req.wheelsize - 1;
    }

    res.wheels = [size, size, size, size];

    return res;
}

let output = createCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);

console.table(output);