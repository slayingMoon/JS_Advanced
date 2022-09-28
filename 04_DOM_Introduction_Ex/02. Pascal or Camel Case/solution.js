function solve() {
  let textElement = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let textArr = textElement.toLowerCase().split(' ');

  let result = '';

  switch(convention) {
    case 'Pascal Case':
      for(str of textArr) {
        result += str.charAt(0).toUpperCase() + str.substring(1);
      }
      break;
    case 'Camel Case':
      for(i = 0; i < textArr.length; i++) {
        if(i !== 0) {
          result += textArr[i].charAt(0).toUpperCase() + textArr[i].substring(1);
        }else {
          result += textArr[0];
        }
        
      }
      break;
    default:
      result = 'Error!';
      break;
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}

solve();