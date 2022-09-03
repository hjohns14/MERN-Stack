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

class User {
    constructor(name, email){
        this.name = name
        this.email = email
        this.account = [new BankAccount(0, 0.02)]
    }

    makeDeposit(amount, num){
        this.account[num].deposit(amount)
        return this
    }
    makeWithrawl(amount, num){
        this.account[num].withdraw(amount)
        return this
    }
    displayUserBalance(num){
        this.account[num].displayAcctInfo()
        return this
    }
    createAccount(){
        this.account.push(new BankAccount(0, 0.01))
        return this
    }
}

const me = new User("Hunter", "mail@mail.com")

me.makeDeposit(500, 0).displayUserBalance(0)
me.createAccount()
console.log(me.account)
