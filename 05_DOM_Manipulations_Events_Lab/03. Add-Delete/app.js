function addItem() {
    let inputElememt = document.getElementById('newItemText');
    let itemsList = document.getElementById('items');

    if(inputElememt.value.length === 0) {return;}

    let liElement = document.createElement('li');
    liElement.textContent = inputElememt.value;
    //clearing input
    inputElememt.value = '';

    //delete logic
    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', deleteItem);

    function deleteItem() {
        liElement.remove();
    }

    //adding delete element to the current list element
    liElement.appendChild(deleteElement);
    //adding the new item to the list
    itemsList.appendChild(liElement);
}