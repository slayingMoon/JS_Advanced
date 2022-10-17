window.addEventListener("load", solve);

function solve() {
    document.querySelector("button[type='submit']").addEventListener('click', prepareOrder);
    document.querySelector("button[class='clear-btn']").addEventListener('click', clearOrders);
    let productType = document.getElementById('type-product');
    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    function prepareOrder(e) {
        e.preventDefault();
        let typeValue = productType.value;
        let descriptionValue = description.value;
        let nameValue = clientName.value;
        let phoneValue = clientPhone.value;
        if(!descriptionValue || !nameValue || !phoneValue) {
            return;
        }
        
        createOrder(typeValue, descriptionValue, nameValue, phoneValue);

        clearForm();
    }

    function clearForm() {
        description.value = '';
        clientName.value = '';
        clientPhone.value = '';
    }

    function createOrder(typeValue, descriptionValue, nameValue, phoneValue) {
        let container = document.createElement('div');
        container.classList.add('container');

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${typeValue}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${nameValue}, ${phoneValue}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${descriptionValue}`;

        let startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start repair';
        startBtn.addEventListener('click', startRepair);

        let finishBtn = document.createElement('button');
        finishBtn.classList.add('finish-btn');
        finishBtn.disabled = true;
        finishBtn.textContent = 'Finish repair';
        finishBtn.addEventListener('click', finishRepair)

        container.appendChild(h2);
        container.appendChild(h3);
        container.appendChild(h4);
        container.appendChild(startBtn);
        container.appendChild(finishBtn);

        receivedOrders.appendChild(container);
    }

    function startRepair(e) {
        //disable the pressed start button
        e.target.disabled = true;
        //enable finish button
        let finishBtn = e.target.parentElement.lastChild;
        finishBtn.disabled = false;
    }

    function finishRepair(e) {
        let currentOrder = e.target.parentElement;
        //remove buttons
        Array.from(currentOrder.querySelectorAll('button')).forEach(btn => btn.remove());
        //add order to completed
        completedOrders.appendChild(currentOrder);
    }

    function clearOrders() {
        let containers = completedOrders.querySelectorAll('.container');

        Array.from(containers).forEach(container => container.remove());
    }
}