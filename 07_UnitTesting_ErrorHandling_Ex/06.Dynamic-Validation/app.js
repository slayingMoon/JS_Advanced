function validate() {
    let inputField = document.getElementById('email');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    inputField.addEventListener('change', e => applyStyle(e.target, e.target.value));

    function applyStyle(e, email) {
        //we have a css style for class='error' <style>.error{}</style>
        e.className = isEmailValid(email) ? '' : 'error';
    }

    function isEmailValid(input) {
        return emailPattern.test(input);
    }
}