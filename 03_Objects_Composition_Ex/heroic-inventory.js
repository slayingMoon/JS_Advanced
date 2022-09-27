function createHeroRegister(data) {
    let jsObj =  data.reduce((resultArr, element) => {

        let [name, level, items] = element.split(' / ');

        level = Number(level);
        items = items ? items.split(', ') : [];

        resultArr.push({name, level, items});

        return resultArr;
    }, []);

    return JSON.stringify(jsObj);
}

let output = createHeroRegister(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);

console.log(output);