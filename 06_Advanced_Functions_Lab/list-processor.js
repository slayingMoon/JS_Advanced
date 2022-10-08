function solve(arr) {
    let result = [];
    
    for(let e of arr) {
        let[command, str] = e.split(' ');

        switch(command) {
            case 'add':
                result.push(str);
                break;
            case 'remove':
                let index = result.indexOf(str);
                result.splice(index, 1);
                break;
            case 'print':
                console.log(result.join(','));
                break;      
        }
    }
}

solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);