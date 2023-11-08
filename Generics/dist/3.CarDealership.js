"use strict";
class CarDealer {
    constructor(dealerName) {
        this.modelsSold = {};
        this.dealershipName = dealerName;
        this.soldCars = 0;
    }
    sellCar(dealerID, model) {
        this.modelsSold = { dealerID, model };
        this.soldCars++;
    }
    showDetails() {
        return () => {
            `${this.dealershipName}:`;
            Object.keys(this.modelsSold).forEach(el => {
                `${el} sold ${el.valueOf()}`;
            });
        };
    }
}
let dealership = new CarDealer('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
