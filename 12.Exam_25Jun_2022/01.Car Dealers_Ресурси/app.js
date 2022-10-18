window.addEventListener("load", solve);

function solve() {
  document.querySelector("button[type='submit']").addEventListener('click', prepareOffer);
  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let tableOffers = document.getElementById('table-body');
  let carsList = document.getElementById('cars-list');
  let profitMade = document.getElementById('profit');
  let totalProfit = 0;

  function prepareOffer(e) {
    e.preventDefault();
    let makeValue = make.value;
    let modelValue = model.value;
    let yearValue = year.value;
    let fuelValue = fuel.value;
    let originaCostlValue = originalCost.value;
    let sellingPriceValue = sellingPrice.value;

    if (!makeValue || !modelValue || !yearValue || !fuelValue || !originaCostlValue
      || !sellingPriceValue || originaCostlValue > sellingPriceValue) {
      return;
    }

    createOffer(makeValue, modelValue, yearValue, fuelValue, originaCostlValue, sellingPriceValue);

    clearInputFields();
  }

  function clearInputFields() {
    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    originalCost.value = '';
    sellingPrice.value = '';
  }

  function createOffer(makeValue, modelValue, yearValue, fuelValue, originaCostlValue, sellingPriceValue) {
    let tr = elGenerator('tr');
    tr.setAttribute('class', 'row');
    elGenerator('td', makeValue, tr);
    elGenerator('td', modelValue, tr);
    elGenerator('td', yearValue, tr);
    elGenerator('td', fuelValue, tr);
    elGenerator('td', originaCostlValue, tr);
    elGenerator('td', sellingPriceValue, tr);

    let actionCell = elGenerator('td');
    let editBtn = elGenerator('button', 'Edit', actionCell);
    editBtn.setAttribute('class', 'action-btn edit');
    let sellBtn = elGenerator('button', 'Sell', actionCell);
    sellBtn.setAttribute('class', 'action-btn sell');

    tr.appendChild(actionCell);
    tableOffers.appendChild(tr);

    editBtn.addEventListener('click', e => editOffer(e, makeValue, modelValue, yearValue, fuelValue, originaCostlValue, sellingPriceValue));
    sellBtn.addEventListener('click', e => sellCar(e, makeValue, modelValue, yearValue, originaCostlValue, sellingPriceValue));
  }

  function sellCar(e, makeValue, modelValue, yearValue, originaCostlValue, sellingPriceValue) {
    e.target.parentElement.parentElement.remove();

    let li = elGenerator('li');
    li.setAttribute('class', 'each-list');
    elGenerator('span', `${makeValue} ${modelValue}`, li);
    elGenerator('span', `${yearValue}`, li);
    let currentProfit = sellingPriceValue - originaCostlValue;
    elGenerator('span', `${currentProfit}`, li);

    carsList.appendChild(li);
    totalProfit += currentProfit;
    profitMade.textContent = totalProfit.toFixed(2);
  }

  function editOffer(e, makeValue, modelValue, yearValue, fuelValue, originaCostlValue, sellingPriceValue) {
    e.target.parentElement.parentElement.remove();

    make.value = makeValue;
    model.value = modelValue;
    year.value = yearValue;
    fuel.value = fuelValue;
    originalCost.value = originaCostlValue;
    sellingPrice.value = sellingPriceValue;
  }

  function elGenerator(type, content, parent) {
    let element = document.createElement(type);
    element.textContent = content;

    //if a parent value is passed to the function
    if(parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
