function encodeAndDecodeMessages() {
    let buttons = document.getElementsByTagName('button');
    let encode = buttons[0];
    let decode = buttons[1];

    encode.addEventListener('click', encodeMessage);
    decode.addEventListener('click', decodeMessage);

    function encodeMessage(e) {
        let textAreas = e.target.parentElement.parentElement.querySelectorAll('textarea');
        let inputField = textAreas[0];
        let outputField = textAreas[1];
        let message = inputField.value;
        let encoded = '';

        for(let i = 0; i < message.length; i++) {
            let currSymbol = message.charCodeAt(i);
            encoded += String.fromCharCode(currSymbol + 1);
        }

        //clear input field of any text
        inputField.value = '';
        //send the message to the output/decode area
        outputField.value = encoded;
    }

    function decodeMessage(e) {
        let textAreas = e.target.parentElement.parentElement.querySelectorAll('textarea');
        let outputField = textAreas[1];
        let encodedMessage = outputField.value;
        let decoded = '';
        for(let i = 0; i < encodedMessage.length; i++) {
            let currSymbol = encodedMessage.charCodeAt(i);
            decoded += String.fromCharCode(currSymbol - 1);
        }

        //overwrite the encoded message with the decoded
        outputField.value = decoded;
    }
}