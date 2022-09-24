function rotateArray(arr, rotationsCount) {

    for(let i = 0; i < rotationsCount; i++) {
        let lastElement = arr.pop();
        //last element becomes first (rotating to the right)
        arr.unshift(lastElement);
    }

    return arr.join(' ');
}

console.log(rotateArray(['1', 
'2', 
'3', 
'4'], 
2
));

console.log(rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));