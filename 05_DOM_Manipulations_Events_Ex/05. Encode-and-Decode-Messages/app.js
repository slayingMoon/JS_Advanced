function encodeAndDecodeMessages() {
    let buttons = document.getElementsByTagName('button');
    let encode = buttons[0];
    let decode = buttons[1];

    encode.addEventListener('click', encodeMessage);
    decode.addEventListener('click', decodeMessage);

    let textAreas = document.getElementsByTagName('textarea');
    let input = textAreas[0];
    let output = textAreas[1];

    function encodeMessage(e) {
        let message = input.value;
        let encoded = '';

        for(let i = 0; i < message.length; i++) {
            let currSymbol = message.charCodeAt(i);
            encoded += String.fromCharCode(currSymbol + 1);
        }

        //clear input field of any text
        input.value = '';
        //send the message to the output/decode area
        output.value = encoded;
    }

    function decodeMessage(e) {
        let encodedMessage = output.value;
        let decoded = '';
        for(let i = 0; i < encodedMessage.length; i++) {
            let currSymbol = encodedMessage.charCodeAt(i);
            decoded += String.fromCharCode(currSymbol - 1);
        }

        //overwrite the encoded message with the decoded
        output.value = decoded;
    }
}