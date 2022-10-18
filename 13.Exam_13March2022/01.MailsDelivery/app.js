window.addEventListener('load', solve);

function solve() {
    document.getElementById('add').addEventListener('click', prepareMail);
    document.getElementById('reset').addEventListener('click', resetFields);
    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let listMails = document.getElementById('list');
    let sentMails = document.getElementsByClassName('sent-list')[0];
    let deletedMails = document.getElementsByClassName('delete-list')[0];

    function prepareMail(e) {
        e.preventDefault();
        let recipientValue = recipient.value;
        let titleValue = title.value;
        let messageValue = message.value;

        if(!recipientValue || !titleValue || !messageValue) {
            return;
        }
        
        createMail(recipientValue, titleValue, messageValue);

        clearForm();
    }

    function createMail(recipientValue, titleValue, messageValue) {
        let li = elCreator('li');
        elCreator('h4', `Title: ${titleValue}`, li);
        elCreator('h4', `Recipient Name: ${recipientValue}`, li);
        elCreator('span', `${messageValue}`, li);

        let actionList = elCreator('div');
        actionList.setAttribute('id', 'list-action');
        let sendBtn = elCreator('button', 'Send', actionList);
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');
        let deleteBtn = elCreator('button', 'Delete', actionList);
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');

        li.appendChild(actionList);

        listMails.appendChild(li);

        sendBtn.addEventListener('click', e => sendMail(e, recipientValue, titleValue));
        deleteBtn.addEventListener('click', e => deleteMail(e, recipientValue, titleValue));
    }

    function deleteMail(e, recipientValue, titleValue) {
        e.target.parentElement.parentElement.remove();

        let li = elCreator('li');
        elCreator('span', `To: ${recipientValue}`, li);
        elCreator('span', `Title: ${titleValue}`, li);

        deletedMails.appendChild(li);
    }

    function sendMail(e, recipientValue, titleValue) {
        e.preventDefault();
        e.target.parentElement.parentElement.remove();

        let li = elCreator('li');
        elCreator('span', `To ${recipientValue}`, li);
        elCreator('span', `Title: ${titleValue}`, li);

        let btnDiv = elCreator('div');
        btnDiv.setAttribute('class', 'btn');
        let deleteBtn = elCreator('button', 'Delete', btnDiv);
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('class', 'delete');

        li.appendChild(btnDiv);
        sentMails.appendChild(li);

        deleteBtn.addEventListener('click', e => deleteMail(e, recipientValue, titleValue));
    }

    function resetFields(e) {
        e.preventDefault();
        clearForm();
    }

    function clearForm() {
        recipient.value = '';
        title.value = '';
        message.value = '';
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