"use strict";
class CompareElements {
    constructor(array) {
        this.array = array;
    }
    compare(element) {
        let num = 0;
        this.array.forEach(el => {
            if (el === element) {
                num++;
            }
        });
        return `${num}`;
    }
}
let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c.compare('b'));
