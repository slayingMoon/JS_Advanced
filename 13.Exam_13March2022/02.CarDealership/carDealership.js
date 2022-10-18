class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        horsepower = Number(horsepower);
        price = Number(price);
        mileage = Number(mileage);

        if (!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let foundCar = this.availableCars.find(car => car.model === model);

        if (!foundCar) {
            throw new Error(`${model} was not found!`);
        }

        let mileageDiff = Math.abs(foundCar.mileage - desiredMileage);
        let soldPrice = 0;

        if(foundCar.mileage <= desiredMileage) {
            soldPrice = foundCar.price;
        }
        else if (mileageDiff <= 40000) {
            soldPrice = foundCar.price - foundCar.price * 0.05;
        } else if (mileageDiff > 40000) {
            soldPrice = foundCar.price - foundCar.price * 0.10;
        }

        this.availableCars = this.availableCars.filter(car => car.model !== foundCar.model);
        this.soldCars.push({
            model: foundCar.model,
            horsepower: foundCar.horsepower,
            soldPrice
        });

        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if(this.availableCars.length === 0) {
            return "There are no available cars";
        }

        let result = '-Available cars:\n';
        let carInfo = this.availableCars.map(car => `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        result += carInfo.join('\n');

        return result;
    }

    salesReport(criteria) {
        if(criteria !== 'horsepower' & criteria !== 'model') {
            throw new Error("Invalid criteria!");
        }

        if(criteria === 'horsepower') {
            this.soldCars = this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        }else if(criteria === 'model') {
            this.soldCars = this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
        }

        let output = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        output += `-${this.soldCars.length} cars sold:\n`;

        let soldCarsInfo = this.soldCars.map(car => `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        output += soldCarsInfo.join('\n');

        return output;
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));