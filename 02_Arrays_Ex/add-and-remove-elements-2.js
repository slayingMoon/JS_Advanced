function returnArray(commands) {
    let result = [];
    let initValue = 1;

    for (let command of commands) {
        switch(command) {
            case 'add':
                result.push(initValue);
                initValue++;
                break;
            case 'remove':
                result.pop();
                initValue++;
                break;    
        }
    }

    return result.length !== 0 ? result.join('\n') : 'Empty';
}

console.log(returnArray(['add', 'add', 'add', 'add']));
console.log(returnArray(['add', 'add', 'remove', 'add', 'add']));
console.log(returnArray(['remove', 'remove', 'remove']));