"use strict";
class Box {
    constructor(part) {
        this.part = part;
    }
    toString() {
        return `${this.part} is of type ${typeof (this.part)}`;
    }
}
let box1 = new Box(['test', 'de']);
let box2 = new Box(20);
let box3 = new Box('Hello');
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
