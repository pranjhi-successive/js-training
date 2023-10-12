//Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }
  deposit = (amount) => {
    this.balance += amount;
  }
  withdraw = (amount) => {
    this.balance -= amount;
  }
  displayBalance = () => {
    console.log(`Balance: ${this.balance}`);
  }
}
const account = new BankAccount("John", 100);
account.deposit(50);
account.withdraw(30);
account.displayBalance();
