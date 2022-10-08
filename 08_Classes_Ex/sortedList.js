class List {

    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }
    
    add(element) {
        this.arr.push(element);
        //keeps a list of numbers, sorted in asc order
        this.arr.sort((a,b) => a - b);
        //override the size property value with the new arr.lenght
        this.size = this.arr.length;
    }

    remove(index) {
        if(index < 0 || index > this.arr.length - 1) {
            throw new Error('invalid index');
        }else {
            this.arr.splice(index, 1);
            this.size = this.arr.length;
        }
    }

    get(index) {
        if(index < 0 || index > this.arr.length - 1) {
            throw new Error('invalid index');
        }else {
            return this.arr[index];
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
