function search() {
   //get list of towns (by id towns all list items)
   let townList = Array.from(document.querySelectorAll('#towns li'));
   //search input field
   let searchText = document.getElementById('searchText').value;

   let count = 0;

   for (let town of townList) {
      //for the search to be case-insensitive
      let townName = town.textContent.toLowerCase();
      // let townName = town.textContent; //<===this solution works in judge 100/100

      if (searchText !== '' && townName.includes(searchText)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         count++;
      }else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = '';
      }
   }

   //field to display count of matches found
   let resultDiv = document.getElementById('result');
   resultDiv.textContent = `${count} matches found`;
}
