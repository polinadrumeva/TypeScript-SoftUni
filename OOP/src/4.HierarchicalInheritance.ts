class Animal {
    eat () : void {
        console.log("eating…");
    } 
}

class Dog extends Animal {
    bark () : void {
        console.log("barking…");
    } 
}

class Cat extends Animal {
    meow () : void {
        console.log("meowing…");
    } 
}

let newCat = new Cat();
newCat.eat();

let newDog = new Dog();
newDog.bark();
