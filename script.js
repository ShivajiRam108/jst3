class bankaccount{
    accountHolderName;
    accountNumber;
    balance;

    constructor ( accountHolderName , accountNumber , balance ){
        this. accountHolderName = accountHolderName;
        this. accountNumber = accountNumber;
        this. balance = balance;
    }
    deposit(amount){
        this.balance = this.balance+amount;
        console.log(" I deposit in your account 30,000 . current balance in my account  40,000");
    }
    withdraw(amount){
        this.finalbalance = this.balance-amount;
        console.log(" I was withdrew in my account  10,000. ofter that my current balance in my account 40,000 - 10,000 = 30,000.");
    }
    balance1(newnumber){
        console.log(newnumber);
    }

}
var account1 = new bankaccount ("Ram", "123567880838", "40,000");
account1.deposit();
account1.withdraw();
account1.balance1("30,000");
console.log(account1);


