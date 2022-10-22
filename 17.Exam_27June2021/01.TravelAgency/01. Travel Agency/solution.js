window.addEventListener('load', solution);

function solution() {
  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', createReservation);
  let fullName = document.getElementById('fname');
  let email = document.getElementById('email');
  let phoneNumber = document.getElementById('phone');
  let address = document.getElementById('address');
  let postalCode = document.getElementById('code');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');
  let infoPreview = document.getElementById('infoPreview');
  let mainDiv = document.getElementById('block');

  function createReservation(e) {
    let fullNameValue = fullName.value;
    let emailValue = email.value;
    let phoneNumberValue = phoneNumber.value;
    let addressValue = address.value;
    let postalCodeValue = postalCode.value;

    if(!fullNameValue || !emailValue) {
      return;
    }

    sendReservationToPreview(fullNameValue, emailValue, phoneNumberValue, addressValue, postalCodeValue);

    e.target.disabled = true;
    editBtn.disabled = false;
    editBtn.addEventListener('click', e => editReservation(e, fullNameValue, emailValue, phoneNumberValue, addressValue, postalCodeValue));
    continueBtn.disabled = false;
    continueBtn.addEventListener('click', completeReservation);

    clearForm();
  }

  function completeReservation() {
    mainDiv.innerHTML = '';
    elCreator('h3', `Thank you for your reservation!`, mainDiv);
  }

  function editReservation(e, fullNameValue, emailValue, phoneNumberValue, addressValue, postalCodeValue) {
    let previewItems = e.target.parentElement.parentElement.querySelector('ul[id=infoPreview]').children;
    Array.from(previewItems).forEach(ch => ch.remove());
    fullName.value = fullNameValue;
    email.value = emailValue;
    phoneNumber.value = phoneNumberValue;
    address.value = addressValue;
    postalCode.value = postalCodeValue;

    editBtn.disabled = true;
    continueBtn.disabled = true;
    submitBtn.disabled = false;
  }

  function sendReservationToPreview(fullNameValue, emailValue, phoneNumberValue, addressValue, postalCodeValue) {
    elCreator('li', `Full Name: ${fullNameValue}`, infoPreview);
    elCreator('li', `Email: ${emailValue}`, infoPreview);
    elCreator('li', `Phone Number: ${phoneNumberValue}`, infoPreview);
    elCreator('li', `Address: ${addressValue}`, infoPreview);
    elCreator('li', `Postal Code: ${postalCodeValue}`, infoPreview);
  }

  function clearForm() {
    fullName.value = '';
    email.value = '';
    phoneNumber.value = '';
    address.value = '';
    postalCode.value = '';
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
