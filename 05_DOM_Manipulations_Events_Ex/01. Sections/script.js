function create(words) {

   for(let word of words) {
      let newDiv = document.createElement('div');
      let p = document.createElement('p');
      p.innerText = word;
      p.style.display = 'none';
      newDiv.appendChild(p);
      newDiv.addEventListener('click', showP);
      document.getElementById('content').appendChild(newDiv);
   }

   function showP(event) {

      //if element is paragraph, then do nothing, otherwise we get an error in the console
      if(event.target.nodeName === 'P') {
         return
      }
      event.target.children[0].style.display = 'block';

      //event.target.firstChild.style.display = 'block'; -- another option to get child
      //let p = event.target.children[0];
      //p.style.display = 'block';
   }
}