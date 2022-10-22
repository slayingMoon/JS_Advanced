window.addEventListener('load', solve);

function solve() {
    document.getElementById('add').addEventListener('click', addFurniture);
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let furnitureList = document.getElementById('furniture-list');
    let total = document.getElementsByClassName('total-price')[0];

    function addFurniture(e) {
        e.preventDefault();
        let modelValue = model.value;
        let yearValue = year.value;
        let descriptionValue = description.value;
        let priceValue = price.value;

        if (!modelValue || !yearValue || !descriptionValue || !priceValue) {
            return;
        }

        yearValue = Number(yearValue);
        priceValue = Number(priceValue);

        if (yearValue < 0 || priceValue < 0) {
            return;
        }

        createTableEntry(modelValue, yearValue, descriptionValue, priceValue);

        clearForm();
    }

    function createTableEntry(modelValue, yearValue, descriptionValue, priceValue) {
        let trInfo = elCreator('tr');
        trInfo.setAttribute('class', 'info');
        elCreator('td', `${modelValue}`, trInfo);
        elCreator('td', `${priceValue.toFixed(2)}`, trInfo);

        let btnSection = elCreator('td');
        let moreInfoBtn = elCreator('button', 'More Info', btnSection);
        moreInfoBtn.setAttribute('class', 'moreBtn');
        let buyBtn = elCreator('button', 'Buy it', btnSection);
        buyBtn.setAttribute('class', 'buyBtn');

        trInfo.appendChild(btnSection);
        furnitureList.appendChild(trInfo);

        let trHide = elCreator('tr');
        trHide.setAttribute('class', 'hide');
        trHide.display = 'none';
        elCreator('td', `Year: ${yearValue}`, trHide);
        let tdColspan = elCreator('td', `Description: ${descriptionValue}`, trHide);
        tdColspan.setAttribute('colspan', '3');

        furnitureList.appendChild(trHide);

        moreInfoBtn.addEventListener('click', e => showInfo(e, trHide));
        buyBtn.addEventListener('click', e => buyFurniture(e, priceValue));
    }

    function buyFurniture(e, priceValue) {
        let rows = Array.from(furnitureList.children);
        let targetPosition = rows.indexOf(e.target.parentElement.parentElement);
        let moreInfoPosition = rows.indexOf(e.target.parentElement.parentElement); + 1;
        furnitureList.removeChild(Array.from(furnitureList.children)[targetPosition]);
        furnitureList.removeChild(Array.from(furnitureList.children)[moreInfoPosition]);

        let totalValue = Number(total.textContent);
        totalValue += priceValue;

        total.textContent = totalValue.toFixed(2);
    }

    function showInfo(e, trHide) {
        if (e.target.textContent === 'More Info') {
            e.target.textContent = 'Less Info';
            trHide.style = 'display: contents';
        }else {
            e.target.textContent = 'More Info';
            trHide.style = 'display: none';
        }

    }

    function clearForm() {
        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    }

    function elCreator(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
}
