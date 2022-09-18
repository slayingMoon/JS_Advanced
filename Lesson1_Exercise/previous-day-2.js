function getPreviousDay(year, month, day) {
    //months in js date start from zero, and as we need to get september(9th month) 
    //-> in js Date() it is on position 8, so we need to subtract from month as well
    let controlDate = new Date(year, month - 1, day - 1);

    //to get the correct month displayed to the user, and not the machine based order, we need to add +1 to get the month
    console.log(`${controlDate.getFullYear()}-${controlDate.getMonth() + 1}-${controlDate.getDate()}`);
}

getPreviousDay(2016, 9, 30);
getPreviousDay(2016, 10, 1);
