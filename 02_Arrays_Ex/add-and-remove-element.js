function returnArray(arr) {
    let result = [];
    let initValue = 1;

    arr.forEach(command => {
        command === 'add' ? result.push(initValue) : result.pop();
        initValue++;
    });

    return result.length !== 0 ? result.join('\n') : 'Empty';
}

console.log(returnArray(['add', 'add', 'add', 'add']));
console.log(returnArray(['add', 'add', 'remove', 'add', 'add']));
console.log(returnArray(['remove', 'remove', 'remove']));



