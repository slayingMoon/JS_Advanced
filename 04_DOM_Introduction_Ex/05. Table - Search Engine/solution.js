function solve() {
   let dataTr = Array.from(document.querySelectorAll('tBody tr'));
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchField = document.querySelector('#searchField');

   function onClick() {
      let regex = new RegExp(searchField.value, 'gim');

      dataTr.map(e => {
         e.classList.remove('select');
         if(e.innerHTML.match(regex) !== null) {
            e.className = 'select';
         }
      });

      searchField.value = '';
   }
}