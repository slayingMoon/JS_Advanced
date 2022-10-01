function attachEventsListeners() {
    //get all input tags with type='button'
    //we use Array.from(), cause we get an html collection, which we need to convert into array
    let buttons = Array.from(document.querySelectorAll('input[type=button]'));

    //add event listener to each button
    buttons.forEach(b => b.addEventListener('click', convert));

    function convert(e) {
        //get the input tag which has a type='text'
        let inputValue = Number(e.target.parentElement.querySelector('input[type=text]').value);

        //to get if the convert button is of hours, days, mins, etc.
        let unit = e.target.id;

        switch(unit) {
            case 'daysBtn':
                populate(inputValue);
                break;
            case 'hoursBtn':
                //if we got input in hours example: 24 hours / 24 -> we get 1 day, etc.
                populate(inputValue / 24);
                break;
            case 'minutesBtn':
                //minutes to hours to days
                populate(inputValue / 60 / 24);
                break;
            case 'secondsBtn':
                //seconds to minutes to hours to days
                populate(inputValue / 60 / 60 / 24);
                break;         
        }
    }

    function populate(valueInDay) {
        //get all text input elements
        let inputs = Array.from(document.querySelectorAll('input[type=text]'));
        //remove the days input element from the array, get his value and set it to be equal to the passed valueInDay
        inputs.shift().value = valueInDay;

        let currentValue = valueInDay * 24;
        for(let input of inputs) {
            input.value = currentValue;
            currentValue *= 60;
        }
    }
}