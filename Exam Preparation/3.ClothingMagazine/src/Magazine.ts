import { Cloth } from "./Cloth";

export class Magazine {
    type: string; 
    capacity: number; 
    clothes: Cloth[] = [];

    
    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        
    }

    addCloth(cloth: Cloth) :void {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }

    removeCloth(color: string) : boolean {
        const index = this.clothes.findIndex((c) => c.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);

            return true;
        }

        return false;
    }

    getSmallestCloth() : Cloth | undefined {
        const smallest = [...this.clothes].sort((a, b) => a.size - b.size)[0];

        return smallest;
    }

    getCloth(color : string) : Cloth |undefined {
        const cloth = this.clothes.find(c => c.color === color);

        return cloth;
    }

    getClothCount() : number {
        return this.clothes.length;
    }

    report() : string {
        const sorted = [...this.clothes].sort((a, b) => a.size - b.size);
        const reportCloth = sorted.map(c => c.toString()).join("\n");
        const report = `${this.type} magazine contains:\n${reportCloth}`; 

        return report;
    }














}