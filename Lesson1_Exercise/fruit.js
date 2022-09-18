function calculateRequiredMoney(fruit, weight, price) {
    let weightInKg = weight / 1000;
    let money = weightInKg * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

calculateRequiredMoney('apple', 1563, 2.35);