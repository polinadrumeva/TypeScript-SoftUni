"use strict";
class Car {
    constructor(brand, model, horsepower) {
        this.brand = brand;
        this.model = model;
        this.horsepower = horsepower;
    }
    getInfo() {
        return `The car is: ${this.brand} ${this.model} - ${this.horsepower} HP.`;
    }
}
function getCarInfo(input) {
    let arr = input.split(" ");
    let car = new Car(arr[0], arr[1], Number(arr[2]));
    console.log(car.getInfo());
}
getCarInfo("Chevrolet Impala 390");
//# sourceMappingURL=1.CarInfo.js.map