"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(type, capacity) {
        this.clothes = [];
        this.type = type;
        this.capacity = capacity;
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const index = this.clothes.findIndex((c) => c.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        const smallest = [...this.clothes].sort((a, b) => a.size - b.size)[0];
        return smallest;
    }
    getCloth(color) {
        const cloth = this.clothes.find(c => c.color === color);
        return cloth;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        const sorted = [...this.clothes].sort((a, b) => a.size - b.size);
        const reportCloth = sorted.map(c => c.toString()).join("\n");
        const report = `${this.type} magazine contains:\n${reportCloth}`;
        return report;
    }
}
exports.Magazine = Magazine;
