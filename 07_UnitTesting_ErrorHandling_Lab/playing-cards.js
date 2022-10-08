function createCard(face, suit) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    if(validFaces.indexOf(face.toString()) === -1) {
        throw new Error(`${face} is not a valid face`);
    }

    if(validSuits.indexOf(suit) === -1) {
        throw new Error(`${suit} is not a valid suit`);
    }

    switch(suit) {
        case 'S': suit = '\u2660'; break;
        case 'H': suit = '\u2665'; break;
        case 'D': suit = '\u2666'; break;
        case 'C': suit = '\u2663'; break;
    }

    //Create a JS factory function that returns a Card object holding the card’s face and suit
    //The object also needs to have a toString() method that prints the card’s face and suit as a string
    return {
        face: face,
        suit: suit,
        toString() {
            return this.face + this.suit;
        }
    };
}

module.exports = { createCard }