class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }

        let currentPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }

        this.plants.push(currentPlant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);
        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (currentPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        currentPlant.ripe = true;
        currentPlant.quantity += quantity;

        let outputMsg = quantity === 1
            ? `${quantity} ${plantName} has successfully ripened.`
            : `${quantity} ${plantName}s have successfully ripened.`;

        return outputMsg;
    }

    harvestPlant(plantName) {
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);
        if (!currentPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!currentPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let harvestedPlant = {
            plantName: currentPlant.plantName,
            quantity: currentPlant.quantity
        };

        this.spaceAvailable += currentPlant.spaceRequired;
        this.plants = this.plants.filter(p => p.plantName !== plantName);
        this.storage.push(harvestedPlant);

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let reportMsg = `The garden has ${ this.spaceAvailable } free space left.\n`;
        let sortedPlantsString = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).map(plant => plant.plantName).join(', ');
        reportMsg += `Plants in the garden: ${sortedPlantsString}\n`;
        reportMsg += this.storage.length === 0
            ? `Plants in storage: The storage is empty.`
            : `Plants in storage: ${this.storage.map(p => `${p.plantName} (${p.quantity})`).join(', ')}`;

        return reportMsg;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.generateReport());




