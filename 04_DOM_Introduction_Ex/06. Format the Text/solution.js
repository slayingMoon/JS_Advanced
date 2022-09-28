function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');
  output.innerHTML = '';
  //splitting sentences and checking if sentence length is greater than 0
  let arrayText = input.split('.').filter(x=> x.length > 0);

  //cycle for paragraphs, as one paragraphs holds 3 sentences
  for(let paragraph = 0; paragraph < arrayText.length; paragraph+=3) {
    let res = [];
    //iterate through 3 sentences to add them to a single paragraph
    for(let sentence = 0; sentence < 3; sentence++) {
      if(arrayText[paragraph + sentence]) {
        res.push(arrayText[paragraph+sentence]);
      }
    }
    //add . at last sentence
    let resText = res.join('. ') + '.';
    //to put each 3 sentences inside a paragraph
    output.innerHTML += `<p>${resText}</p>`
  }
}