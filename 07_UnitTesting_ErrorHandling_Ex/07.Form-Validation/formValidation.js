function validate() {
    let unameRegex = /^[\w\d]{3,20}$/g;
    let passRegex = /^[\w\d]{5,15}$/g;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    let patterns = [unameRegex, emailRegex, passRegex];

    let unameField = document.getElementById('username');
    let email = document.getElementById('email');
    let passField = document.getElementById('password');
    let confirmPassField = document.getElementById('confirm-password');

    let fields = [unameField, email, passField];

    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        
        for(let i = 0; i < fields.length; i++) {
            let currentField = fields[i];
            if(isFieldValid(currentField, patterns[i])) {
                currentField.style = 'border: none';
            }else {
                currentField.style = 'border-color: red';
            }
        }

        if(confirmPassField.value !== passField.value) {
            confirmPassField.style = 'border-color: red';
        }else {
            confirmPassField.style = 'border: none';
        }
    }

    function isFieldValid(field, pattern) {
        return pattern.test(field.value);
    }

}
