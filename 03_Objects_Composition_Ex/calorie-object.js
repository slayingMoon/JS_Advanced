function createObject(arr) {

    let res = {};

    for(let i = 0; i < arr.length; i+=2) {
        //takes the name of the element behind i and sets it as key
        //if it was 'arr[i]' it will set "arr[i]" as key
        res[arr[i]] = Number(arr[i + 1]);
    }

    return res;
}

let output = createObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log(output);