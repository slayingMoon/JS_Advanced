function checkSpeed(speed, area) {

    let limit = 0;
    let diff = 0;
    let status;

    switch (area) {
        case 'motorway':
            limit = 130;
            diff = limit - speed;
            break;
        case 'interstate':
            limit = 90;
            diff = limit - speed;
            break;
        case 'city':
            limit = 50;
            diff = limit - speed;
            break;
        case 'residential':
            limit = 20;
            diff = limit - speed;
            break;
    }

    if(diff >= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }else {
        if(Math.abs(diff) <= 20) {
            status = 'speeding';
        }else if(Math.abs(diff) <= 40) {
            status = 'excessive speeding';
        }else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${Math.abs(diff)} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
    
}

checkSpeed(40, 'city');
checkSpeed(21, 'residential');
checkSpeed(120, 'interstate');
checkSpeed(200, 'motorway');