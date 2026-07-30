"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    displayBalance() {
        console.log("Balance:", this.balance);
    }
}
let account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
account.displayBalance();
