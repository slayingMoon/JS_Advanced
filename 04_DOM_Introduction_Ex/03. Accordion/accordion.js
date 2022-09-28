function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let divHidden = document.getElementById('extra');

    if(buttonElement.textContent === 'More') {
        divHidden.style.display = 'block';
        buttonElement.textContent = 'Less';
    }else if(buttonElement.textContent === 'Less') {
        divHidden.style.display = 'none';
        buttonElement.textContent = 'More';
    }
    
}