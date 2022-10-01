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
      // event.target.firstChild.style.display = 'block'; -- another option to get child
      event.target.children[0].style.display = 'block';
   }
}