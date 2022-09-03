class BankAccount{
    constructor(balance, intRate){
        this.intRate = intRate || 0.05
        this.balance = balance || 0
    }

    deposit(amount){
        this.balance += amount
        return this
    }
    withdraw(amount){
        this.balance -= amount
        return this
    }
    displayAcctInfo(){
        console.log(`Your balance is ${this.balance} with an interest rate of ${this.intRate}`)
        return this
    }
    yeildInterest(){
        this.balance += (this.balance*this.intRate)
        return this
    }
}

const acct1 = new BankAccount(1000)
acct1.deposit(500).deposit(100).deposit(1000).withdraw(500).yeildInterest().displayAcctInfo()

const acct2 = new BankAccount(50)
acct2.deposit(100).deposit(500).withdraw(300).withdraw(50).withdraw(100).yeildInterest().displayAcctInfo()
