function addItem() {
    //it is important to only get the input element without it's text value
    //so that we can later use the already found element call it's value and assign an empty string to it
    let inputElememt = document.getElementById('newItemText');
    let itemsList = document.getElementById('items');

    //creating the new item and assigning value to it
    let liElement = document.createElement('li');
    liElement.textContent = inputText.value;

    //adding the new item to the list
    itemsList.appendChild(liElement);

    //clearing input
    inputText.value = '';
}