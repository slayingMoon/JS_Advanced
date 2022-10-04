function solve(input) {
    const objData = {};

    const functions = {
        create: (name, inherits, pName) => {
            objData[name] = inherits ? Object.create(objData[pName]) : {};
        },

        set: (name, key, value) => {
            objData[name][key] = value;
        },

        print: name => {
            const output = [];

            for(const key in objData[name]) {
                output.push(`${key}:${objData[name][key]}`);
            }

            console.log(output.join(','));
        }
    };

    input.forEach(x => {
        //c - command, n - name, k - key, v - value
        const [c, n, k, v] = x.split(' ');

        //call the given function with the corresponding parameters
        functions[c](n, k, v);
    })
}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);