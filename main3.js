class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        amount > 0 ? this.balance += amount : console.log('amount must be positive')
    }
    withdraw(withdrawMoney) {
        if(withdrawMoney > 0 && withdrawMoney <= this.balance) {
            this.balance -= withdrawMoney;
        } else if (withdrawMoney > this.balance) {
            console.log('you have not enough money')
        } else {
            console.log('Withdrawal amount must be positive');
        }
    }
    getBalance() {
        return this.balance;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300