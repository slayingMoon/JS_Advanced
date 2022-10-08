class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance = (p1, p2) => Math.hypot(p2.x - p1.x, p2.y - p1.y);

    // static distance(p1, p2) {
    //     let dx = p2.x - p1.x;
    //     let dy = p2.y - p1.y;

    //     return Math.sqrt(dx**2 + dy**2);
    // }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));