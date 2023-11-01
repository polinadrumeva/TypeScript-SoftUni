"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}
let input = "Peter 12".split(" ");
let personInfo = new Person(input[0], Number(input[1]));
console.log(personInfo.getInfo());
//# sourceMappingURL=2.OpinionPoll.js.map