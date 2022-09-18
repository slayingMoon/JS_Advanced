function constructSquare(number) {

    const star = '* ';

    for(let i = 0; i < number; i++) {
        console.log(`${(star.repeat(number)).trim()}`)
    }
}

constructSquare(5);