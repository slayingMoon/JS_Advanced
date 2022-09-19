function solveWords(text) {
    const regex = /\w+/gm;
    let result = text.match(regex);
    console.log(result.join(', ').toUpperCase());
}

solveWords('Hi, how are you?');
solveWords('hello');