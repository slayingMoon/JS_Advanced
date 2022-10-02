function addItem() {
    let inputElements = Array.from(document.querySelectorAll('input[type=text]'));
    let text = inputElements[0];
    let value = inputElements[1];

    let newOptionElement = document.createElement('option');
    newOptionElement.value = value.value;
    newOptionElement.textContent = text.value;

    let dropdownElement = document.getElementById('menu');
    dropdownElement.appendChild(newOptionElement);
    
    text.value = '';
    value.value = '';
}