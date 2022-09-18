function getPreviousDay(year, month, day) {

    let pattern = `${year}/${month}/${day}`;
    let controlDate = new Date(pattern);
    controlDate.setDate(controlDate.getDate() - 1);

    console.log(`${controlDate.getFullYear()}-${controlDate.getMonth() + 1}-${controlDate.getDate()}`);
}

getPreviousDay(2016, 9, 30);
getPreviousDay(2016, 10, 1);
