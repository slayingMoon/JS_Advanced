function getSliceArray(arr, firstFlavor, secondFlavor) {

    let startIndex;
    let endIndex;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === firstFlavor && startIndex === undefined) {
            startIndex = i;
        }else if(arr[i] === secondFlavor && endIndex === undefined) {
            endIndex = i;
            break;
        }

    }

    return arr.slice(startIndex, endIndex + 1);
}

console.log(getSliceArray(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie'));
// console.log(getSliceArray(['Apple Crisp','Mississippi Mud Pie','Pot Pie','Steak and Cheese Pie','Butter Chicken Pie','Smoked Fish Pie'],'Pot Pie','Smoked Fish Pie'));