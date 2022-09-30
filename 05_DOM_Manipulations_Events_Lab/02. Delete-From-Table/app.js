function deleteByEmail() {
    //.value is used only in cases where we have input from user
    let emailInput = document.getElementsByName('email')[0].value.trim(); //to remove unwanted white space in input
    //gets all cells containing email value in the table - td:nth-child(2)
    //because the email is the second td child element 
    let emailElements = document.querySelectorAll('tbody tr td:nth-child(2)');
    let resultElement = document.getElementById('result');

    let emailElementsArray = Array.from(emailElements);
    //targetEmailElement is <td>emailValue</td>
    //innerText vs textContent -> innerText ignores white spaces
    let targetEmailElement = emailElementsArray.find(td => td.textContent == emailInput);
    
    //<td>emailValue</td>
    if(targetEmailElement) {
        //the parent element is <tr></tr> -> we need to delete the whole row,
        //containing the given email
        targetEmailElement.parentElement.remove();

        resultElement.textContent = 'Deleted.';
    }else {
        resultElement.textContent = 'Not found.';
    }

}