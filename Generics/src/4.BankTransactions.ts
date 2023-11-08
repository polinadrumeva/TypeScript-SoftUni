abstract class CreateAccount<T> {
    bankName : T;
    bankID : T;

    
    constructor(bankName:T, bankID:T) {
       
        this.bankName = bankName;
        this.bankID = bankID;
    }
}

class PersonalAccount<T> extends CreateAccount<T> {
    readonly ownerName : string;
    public money : number = 0;
    public recentTransactions : object = {};

  
    constructor(bankName:T, bankID:T, name:string) {
        super(bankName, bankID);
         
        this.ownerName = name;
    }

    deposit(amount:number) {
        this.money += amount;
    }

    expense(amount:number, expenseType:string) {
        if (this.money >= 0) {
            this.money -= amount;
            let existKey = Object.keys(this.recentTransactions).some(key => key == expenseType);
            if (existKey) {
               
            }
            Object.assign(this.recentTransactions, {expenseType, amount});
        } else {
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
