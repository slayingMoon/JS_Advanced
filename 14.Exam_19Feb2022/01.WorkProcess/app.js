window.addEventListener('load', solve);

function solve() {
    document.getElementById('add-worker').addEventListener('click', prepareForm);
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let dateOfBirth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let hiredTable = document.getElementById('tbody');
    let budget = document.getElementById('sum');

    function prepareForm(e) {
        e.preventDefault();

        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let emailValue = email.value;
        let dateOfBirthValue = dateOfBirth.value;
        let positionValue = position.value;
        let salaryValue = salary.value;

        if(!firstNameValue || !lastNameValue || !emailValue || !dateOfBirthValue || !positionValue || !salaryValue) {
            return;
        }

        createNewTableRow(firstNameValue, lastNameValue, emailValue, dateOfBirthValue, positionValue, salaryValue);

        clearForm();
    }

    function createNewTableRow(firstNameValue, lastNameValue, emailValue, dateOfBirthValue, positionValue, salaryValue) {
        let tr = elCreator('tr');
        elCreator('td', `${firstNameValue}`, tr);
        elCreator('td', `${lastNameValue}`, tr);
        elCreator('td', `${emailValue}`, tr);
        elCreator('td', `${dateOfBirthValue}`, tr);
        elCreator('td', `${positionValue}`, tr);
        elCreator('td', `${salaryValue}`, tr);

        let btnCell = elCreator('td');
        let fireBtn = elCreator('button', 'Fired', btnCell);
        fireBtn.setAttribute('class', 'fired');
        let editBtn = elCreator('button', 'Edit', btnCell);
        editBtn.setAttribute('class', 'edit');

        tr.appendChild(btnCell)
        hiredTable.appendChild(tr);

        let budgetValue = Number(budget.textContent);
        budget.textContent = (Number(salaryValue) + budgetValue).toFixed(2);

        editBtn.addEventListener('click', e => editEmployee(e, firstNameValue, lastNameValue, emailValue, dateOfBirthValue, positionValue, salaryValue));
        fireBtn.addEventListener('click', e => fireEmployee(e, salaryValue));
    }

    function fireEmployee(e, salaryValue) {
        e.target.parentElement.parentElement.remove();

        reduceBudget(salaryValue);
    }

    function editEmployee(e, firstNameValue, lastNameValue, emailValue, dateOfBirthValue, positionValue, salaryValue) {
        e.target.parentElement.parentElement.remove();

        firstName.value = firstNameValue;
        lastName.value = lastNameValue;
        email.value = emailValue;
        dateOfBirth.value = dateOfBirthValue;
        position.value = positionValue;
        salary.value = salaryValue;

        reduceBudget(salaryValue);
    }

    function reduceBudget(salaryValue) {
        const currentBudget = Number(budget.textContent);
        budget.textContent = (currentBudget - Number(salaryValue)).toFixed(2);
    }

    function clearForm() {
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        dateOfBirth.value = '';
        position.value = '';
        salary.value = '';
    }

    function elCreator(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        if(parent) {
            parent.appendChild(element);
        }
        return element;
    }
}