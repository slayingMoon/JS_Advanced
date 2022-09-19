function constructSquare(number) {

    const star = '* ';

    for(let i = 0; i < number; i++) {

        let square = '';

        for(let j = 0; j < number; j++) {
            square += star;
        }

        console.log(square.trim());
    }
}

constructSquare(1);