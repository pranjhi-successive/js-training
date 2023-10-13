//Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class bankAccount {
  constructor(accountHolder, balance) {
     this.accountHolder = accountHolder;
     this.balance = balance;
   }
   deposit(amount) {
     this.balance += amount;
   }
   withdraw(amount) {
     this.balance -= amount;
   }
   displayBalance() {
     console.log(`Balance: ${this.balance}`)
   };
   }
   const account = new bankAccount("John", 100);
   account.deposit(50);
   account.withdraw(30);
   account.displayBalance();
