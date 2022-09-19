function findElements(elements) {

    let result = '';

    for(let i = 0; i < elements.length; i++) {
        if(i % 2 === 0) {
            result += elements[i];
            if(i !== elements.length - 1) {
                result += ' ';
            }
        }
    }

    console.log(result);
    
}

findElements(['20', '30', '40', '50', '60']);
findElements(['5', '10']);
