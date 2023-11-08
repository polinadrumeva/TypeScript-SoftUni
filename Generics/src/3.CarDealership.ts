interface Dealership<T> {
     dealershipName : T;
     soldCars : number;
} 

interface Actions<T> {
    sellCar(dealerID : T, model : T) : T; 
}

class CarDealer<T> implements Dealership<T>, Actions<T>  {
    
    dealershipName : T;
    soldCars: number;
    public modelsSold : object = {};

    
    constructor(dealerName : T) {
        this.dealershipName = dealerName;
        this.soldCars = 0;
    }

    sellCar(dealerID: T, model: T) : any {
       this.modelsSold = {dealerID, model};
       this.soldCars++;
    }

    showDetails() {
        return () => {
            `${this.dealershipName}:`
            Object.keys(this.modelsSold).forEach(el => {
                `${el} sold ${el.valueOf()}`
            });

        }
        
    } 
    
} 

let dealership = new CarDealer('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
