import { Drink } from "./Drink"

export class VendingMachine {

    buttonCapacity: number
	drinks: Drink[]
    // count: number = 0;

    get getCount(): number {
        return this.drinks.length;
    }
	

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    
    addDrink(drink: Drink) : void {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string) : boolean {
        const index = this.drinks.findIndex((d) => d.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);

            return true;
        }

        return false;
    }

    getLongest() : string {
        const longest = [...this.drinks].sort((a, b) => b.volume - a.volume)[0];

        return longest.toString();
    }

    getCheapest() : string {
        const cheapest = [...this.drinks].sort((a, b) => a.price - b.price)[0];

        return cheapest.toString();
    }

    buyDrink(name: string) : string{
        const drink = this.drinks.find(d => d.name === name);

        return drink.toString();
    }

    report() : string {
        const reportDrinks = this.drinks.map(c => c.toString()).join("\n");
        const report = `Drinks available:\n${reportDrinks}`; 

        return report;
    }

}