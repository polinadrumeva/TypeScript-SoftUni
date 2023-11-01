"use strict";
class Animal {
    eat() {
        console.log("eating…");
    }
}
class Dog extends Animal {
    bark() {
        console.log("barking…");
    }
}
class Cat extends Animal {
    meow() {
        console.log("meowing…");
    }
}
let newCat = new Cat();
newCat.eat();
let newDog = new Dog();
newDog.bark();
//# sourceMappingURL=4.HierarchicalInheritance.js.map