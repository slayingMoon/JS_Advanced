function sortList(arr) {
    return arr
        .sort((a,b) => a.localeCompare(b))
        .map((name, index) => `${index + 1}.${name}`)
        .join('\n');
}

console.log(sortList(["John", "Bob", "Christina", "Ema"]));