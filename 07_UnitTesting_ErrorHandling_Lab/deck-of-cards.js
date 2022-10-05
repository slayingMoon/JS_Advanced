const { createCard } = require('./playing-cards.js')

function deckOfCards(arr) {
    const deck = [];

    for(let card of arr) {
        //split card info, to get face and suit
        const cardData = card.split('');

        const [face, suit] = [
            //face
            //we use .join('') after .slice -> cause .slice() returns and array, which we need to convert into single string
            cardData.slice(0, cardData.length - 1).join(''),
            //suit
            cardData[cardData.length - 1]
        ]

        try {
            deck.push(createCard(face, suit).toString())
        } catch (e) {
            console.log(`Invalid card: ${card}`)
            return
        }
    }

    return deck.join(' ');
}

console.log(deckOfCards(['AS', '10D', 'KH', '2C']).toString());