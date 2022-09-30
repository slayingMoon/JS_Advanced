function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    function gradientMouseoverHandler(event) {
        let position = event.offsetX;
        //has to be 'event.target.clientWidth - 1' instead of offsetWidth
        //otherwise Unexpected error: Gradient was not detected.: expected 'NaN%' to equal '16%'
        let gradientWidth = event.target.clientWidth - 1;

        let percent = Math.floor((position / gradientWidth) * 100);

        resultElement.textContent = `${percent}%`;
    }

    function gradientOut(event) {
        resultElement.textContent = '';
    }

    gradientElement.addEventListener('mousemove', gradientMouseoverHandler);
    gradientElement.addEventListener('mouseout', gradientOut);
}