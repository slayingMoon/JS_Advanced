function solve(area, vol, input) {
    input = JSON.parse(input);
    let result = [];

    for(const entry of input) {
        result.push({
            area: area.call(entry),
            volume: vol.call(entry)
        });
    }

    return result;
}

function fancySolve(area, vol, input) {
    return JSON.parse(input)
        .map(x => ({
                area: area.call(x),
                volume: vol.call(x),
            })
        );
}

let area = function area() {
    return Math.abs(this.x * this.y);
}

let vol = function vol() {
    return Math.abs(this.x * this.y * this.z);
}

let result = solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);

console.log(JSON.stringify(result));
