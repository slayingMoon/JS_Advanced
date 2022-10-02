function solve() {
  let buttons = document.querySelectorAll('button');
  let generateButton = buttons[0];
  generateButton.addEventListener('click', generate);
  let buyButton = buttons[1];
  buyButton.addEventListener('click', buy);

  let textAreas = document.querySelectorAll('textarea');

  let table = document.getElementsByTagName('tbody')[0];

  function generate() {
    let furnitureList = textAreas[0];
    let json = Array.from(JSON.parse(furnitureList.value));

    json.forEach(o => {
      let tRow = document.createElement('tr');

      let imgElement = document.createElement('td');
      let img = document.createElement('img');
      img.src = o.img;
      imgElement.appendChild(img);
      tRow.appendChild(imgElement);

      let nameElement = document.createElement('td');
      let pName = document.createElement('p');
      pName.textContent = o.name;
      nameElement.appendChild(pName);
      tRow.appendChild(nameElement);

      let priceElement = document.createElement('td');
      let pPrice = document.createElement('p');
      pPrice.textContent = o.price;
      priceElement.appendChild(pPrice);
      tRow.appendChild(priceElement);

      let dFactorElement = document.createElement('td');
      let pDFactor = document.createElement('p');
      pDFactor.textContent = o.decFactor;
      dFactorElement.appendChild(pDFactor);
      tRow.appendChild(dFactorElement);

      let checkboxElement = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      checkboxElement.appendChild(input);
      tRow.appendChild(checkboxElement);

      //at the end just append the whole row to the table
      table.appendChild(tRow);
    });

  }

  let checkedItems = [];
  let totalPrice = 0;
  let decorationFactor = 0;

  function buy() {
    let output = textAreas[1];

    let tableRows = Array.from(document.querySelectorAll('tbody tr'));

    let isChecked = false;
    for (let i = 1; i < tableRows.length; i++) {
      if (tableRows[i].querySelector('input[type=checkbox]').checked) {
        checkedItems.push(tableRows[i].children[1].textContent);
        totalPrice += Number(tableRows[i].children[2].textContent);
        decorationFactor += Number(tableRows[i].children[3].textContent);
        isChecked = true;
      }
    }

    if (isChecked) {
      output.value = `Bought furniture: ${checkedItems.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorationFactor / checkedItems.length}`
    }

  }

}