function extract(elementId) {
    //first get the element from the html document
    let elementText = document.getElementById(elementId).textContent;

    let pattern = /\(([^)]+)\)/g;

    let result = [];

    let matches = elementText.matchAll(pattern);

    for(let match of matches) {
      result.push(match[1]);
    }
  
    return result.join('; ');
}

let result = extract('content');

console.log(result);

