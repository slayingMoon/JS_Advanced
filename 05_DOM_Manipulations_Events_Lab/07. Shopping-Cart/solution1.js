function solve() {
    Array.from(document.querySelectorAll('.add-product')).forEach(b => b.addEventListener('click', add));
    document.querySelector('.checkout').addEventListener('click', checkout);

    let resultElement = document.getElementsByTagName('textarea')[0];
    let productList = [];
    let total = 0;
    let textOutput = '';

    function add(event) {
        let productElement = event.target.parentElement.parentElement;
 
        let name = productElement.querySelectorAll('.product-title')[0].textContent;
        let price = productElement.querySelectorAll('.product-line-price')[0].textContent;
        price = Number(price);

        textOutput = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        resultElement.textContent += textOutput;
        total += price;

        if(!productList.includes(name)) {
            productList.push(name);
        }

    }

    function checkout() {
        textOutput = `You bought ${productList.join(', ')} for ${total.toFixed(2)}.`;
        resultElement.textContent += textOutput;
        Array.from(document.getElementsByTagName('button')).forEach(b => b.disabled = true);
    }

 }