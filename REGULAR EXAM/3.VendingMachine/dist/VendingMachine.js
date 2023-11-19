"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    // count: number = 0;
    get getCount() {
        return this.drinks.length;
    }
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((d) => d.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        const longest = [...this.drinks].sort((a, b) => b.volume - a.volume)[0];
        return longest.toString();
    }
    getCheapest() {
        const cheapest = [...this.drinks].sort((a, b) => a.price - b.price)[0];
        return cheapest.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find(d => d.name === name);
        return drink.toString();
    }
    report() {
        const reportDrinks = this.drinks.map(c => c.toString()).join("\n");
        const report = `Drinks available:\n${reportDrinks}`;
        return report;
    }
}
exports.VendingMachine = VendingMachine;
