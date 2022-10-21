class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if(!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        let foundParticipant = this.listOfParticipants.find(p => p.name === name);
        if(foundParticipant) {
            return `The ${name} is already registered at the camp.`;
        }

        let price = this.priceForTheCamp[condition];
        if(money < price) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name, 
            condition, 
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let foundParticipant = this.listOfParticipants.find(p => p.name === name);
        if(!foundParticipant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let participantIndex = this.listOfParticipants.indexOf(foundParticipant);
        this.listOfParticipants.splice(participantIndex, 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let p1 = this.listOfParticipants.find(p => p.name === participant1);
        let p2 = this.listOfParticipants.find(p => p.name === participant2);

        if(typeOfGame === 'WaterBalloonFights') {

            if(!p1 || !p2) {
                throw new Error(`Invalid entered name/s.`);
            }

            if(p1.condition !== p2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            let winner;

            if(p1.power - p2.power > 0) {
                winner = p1;
            }else if(p1.power - p2.power < 0) {
                winner = p1;
            }

            if(!winner) {
                return `There is no winner.`;
            }

            this.listOfParticipants.wins += 1;

            return `The ${winner.name} is winner in the game ${typeOfGame}.`;
        }else if(typeOfGame === 'Battleship') {
            if(!p1) {
                throw new Error(`Invalid entered name/s.`);
            }

            p1.power += 20;

            return `The ${p1.name} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
