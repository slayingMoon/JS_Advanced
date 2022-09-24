function printArrayByDelimiter(arr, delimiter) {
    return arr.join(delimiter);
}

let output = printArrayByDelimiter(['How about no?', 'I','will', 'not', 'do', 'it!'], '_');
// ['How about no?', 'I','will', 'not', 'do', 'it!'], '_'


console.log(output);