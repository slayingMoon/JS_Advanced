function solve() {
   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   let result = document.getElementsByTagName('textarea')[0];

   let productList = [];
   let total = 0;

   shoppingCart.addEventListener('click', function (event) {
      if(event.target.nodeName !== 'BUTTON') {
         return;
      }

      //in order to get the whole product we must chain parentElement twice
      //we are starting at <button class='add-product></button>
      //->on the first .parentElement we go from inside-out to <div class='add-product'></div>
      //->and on the second .parentElement we go to the next parent, which is <div class="product"></div>
      let productElement = event.target.parentElement.parentElement;

      let name = productElement.querySelectorAll('.product-title')[0].textContent;
      let price = productElement.querySelectorAll('.product-line-price')[0].textContent;
      price = Number(price);

      if(event.target.className !== 'checkout' && productList.indexOf(name) < 0) {
         productList.push(name);
         result.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
         total += price;
      }else {
         if(productList.length > 0) {
            result.textContent += `You bought ${productList.join(', ')} for ${total.toFixed(2)}.`
         }

         let buttons = document.getElementsByTagName('button');

         for(b of buttons) {
            b.disabled = true;
         }

      }

   });
}