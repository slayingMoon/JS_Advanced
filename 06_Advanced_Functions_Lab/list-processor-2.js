function solve(arr) {
    let result = [];
    
    let obj = {
        add: str => result.push(str),
        remove: str => result = result.filter(e => e !== str),
        print: () => console.log(result.join(','))
    }

    arr.forEach(element => {
        const[command, value] = element.split(' ');

        obj[command](value);
    });
}

solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);