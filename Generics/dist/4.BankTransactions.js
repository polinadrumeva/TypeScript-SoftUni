"use strict";
class CreateAccount {
    constructor(bankName, bankID) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}
class PersonalAccount extends CreateAccount {
    constructor(bankName, bankID, name) {
        super(bankName, bankID);
        this.money = 0;
        this.recentTransactions = {};
        this.ownerName = name;
    }
    deposit(amount) {
        this.money += amount;
    }
    expense(amount, expenseType) {
        if (this.money >= 0) {
            this.money -= amount;
            let existKey = Object.keys(this.recentTransactions).some(key => key == expenseType);
            if (existKey) {
            }
            Object.assign(this.recentTransactions, { expenseType, amount });
        }
        else {
            throw console.error(`You cant make ${expenseType} transaction`);
        }
    }
    showDetails() {
    }
}
let account = new PersonalAccount('DSK', '101240', 'Ivan Ivanov');
account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());
