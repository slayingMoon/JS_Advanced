function checkValidity(...arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    function distance(x1, y1, x2, y2) {
        let distH = x2 - x1;
        let distV = y2 - y1;

        return Math.sqrt(distH**2 + distV**2);
    }

    if(Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

checkValidity(3, 0, 0, 4);
checkValidity(2, 1, 1, 1);


