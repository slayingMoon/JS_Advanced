function sortByCriterias(arr) {

    return arr
        .sort((a, b) => {
            if(a.length !== b.length) {
                return a.length - b.length;
            }else {
                return a.localeCompare(b);
            }
        })
        .join('\n');
}

console.log(sortByCriterias(['alpha',
    'beta',
    'gamma']
));