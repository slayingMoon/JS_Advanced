function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach(b => b.addEventListener('click', showMore));

    //Lock/Unlock
    let radioButtons = Array.from(document.querySelectorAll('input[type=radio]'));
    radioButtons.forEach(rb => rb.addEventListener('change', changeStatus));

    function showMore(event) {
        let button = event.target;
        let profileElement = button.parentElement;
        let rbuttons = profileElement.querySelectorAll('input[type=radio]');

        if (rbuttons[0].checked) {
            return;
        }

        let userDetailsElement = profileElement.children[9];

        if(button.textContent == 'Show more') {
            userDetailsElement.style.display = 'block';
            button.textContent = 'Hide it';
        }else {
            userDetailsElement.style.display = 'none';
            button.textContent = 'Show more';
        }

        debugger
    }

    function changeStatus(event) {
        let currentButton = event.target;
        currentButton.checked = true;
        debugger
    }
}